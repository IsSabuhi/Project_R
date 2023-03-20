import { Avatar, Button, Text, useDisclosure, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useCustomToast } from "../../../hooks/useCustomToast";
import mp from "../../../services/mixpanel";
import { useAuth } from "../../Auth/AuthContext";
const PhotoUploadModal = dynamic(() => import("../../Shared/PhotoUploadModal"));

const ProfilePhoto = () => {
  const auth = useAuth();
  const [avatar, setAvatar] = useState("");
  const { createToast } = useCustomToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (auth.user) {
      setAvatar(auth.user.photoURL || "");
    }
  }, [auth]);

  const setUserPhotoUrl = (url: string) => {
    auth.user
      .updateProfile({ photoURL: url })
      .then(() => {
        mp.track("Загруженная фотография", {
          target: "user profile",
          status: "success"
        });
        return createToast("Изображение успешно загружено", "success");
      })
      .catch(() => {
        mp.track("Загруженная фотография", {
          target: "user profile",
          status: "error",
          source: "Firebase"
        });
      });
  };

  return (
    <VStack>
      <Text fontSize="sm" fontWeight="semibold" colorScheme="gray" mb="2">
        Фотография профиля
      </Text>
      <Avatar size="2xl" src={avatar} />
      <Button
        leftIcon={<FiUpload />}
        colorScheme="purple"
        size="sm"
        variant="ghost"
        onClick={onOpen}
        isDisabled={!auth.user}
      >
        {avatar.length ? "Загрузить новый" : "Загружать"}
      </Button>
      <PhotoUploadModal
        isOpen={isOpen}
        onClose={onClose}
        auth={auth}
        setAvatarCallback={setAvatar}
        dbCallback={setUserPhotoUrl}
        fileName="profile"
      />
    </VStack>
  );
};

export default ProfilePhoto;
