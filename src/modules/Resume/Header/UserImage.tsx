import useResumeStore from "@/src/store/resume.store";
import { Avatar } from "@chakra-ui/avatar";
import { Center } from "@chakra-ui/layout";
import React from "react";
import useContactStore from "../../UserInput/Contact/store";

const UserImageLayout = () => {
  const fullName = useContactStore((state) => state.fullName);
  const userImage = useContactStore((state) => state.userImage);
  const spacing = useResumeStore((state) => state.spacing);

  return userImage.length ? (
    <Center px={spacing * 8} py={spacing * 4} borderRadius="50%">
      <Avatar
        aria-label="Profile Image"
        size="lg"
        name={fullName}
        src={userImage}
      />
    </Center>
  ) : null;
};

export default UserImageLayout;
