import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Text,
  VStack
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { FiHome, FiRefreshCw } from "react-icons/fi";
import ImageCredit from "../components/common/ImageCredit";
import TextLink from "../components/common/TextLink";
import Layout from "../components/layouts";
import ScreenCenter from "../components/layouts/ScreenCenter";
import { DISCORD_INVITE, GITHUB_ISSUE, SUPPORT_EMAIL } from "../data/RefLinks";
import SEO from "../modules/SEO";
import mp from "../services/mixpanel";

const Custom500: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    mp.track("500 Error Page View");
  }, []);

  const reload = () => {
    router.reload();
  };

  return (
    <>
      <SEO title="Ouch! Unexpected Error" />
      <Layout hasHeaderHidden>
        <ScreenCenter py="8" flexWrap={{ base: "wrap-reverse", lg: "nowrap" }}>
          <Box flexBasis="50%" alignItems="flex-start">
            <Text
              as="h1"
              fontSize={{ base: "4xl", lg: "6xl" }}
              fontWeight="bold"
              letterSpacing="tight"
              mb="2"
            >
              Ой!
            </Text>
            <Text
              fontSize={{ base: "lg", lg: "2xl" }}
              fontWeight="medium"
              mb="8"
            >
              Произошла неожиданная ошибка
            </Text>
            <Text mb="4" fontSize={{ base: "sm", lg: "md" }}>
              Отчет об этой ошибке уже был отправлен нам, и мы изучали его. Тем
              временем вы можете попробовать перезагрузить страницу и
              посмотреть, исправлена ли эта проблема
            </Text>
            <ButtonGroup mb="8">
              <Button
                colorScheme="purple"
                variant="solid"
                leftIcon={<FiRefreshCw />}
                onClick={reload}
              >
                Перезагрузить страницу
              </Button>
              <Link href="/home">
                <Button
                  colorScheme="purple"
                  variant="ghost"
                  leftIcon={<FiHome />}
                >
                  Вернуться на главную
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
          <Center flexBasis={{ md: "50%" }}>
            <VStack>
              <Image
                src="/500.png"
                alt="500 Internal Error"
                width="365"
                height="456"
                layout="intrinsic"
              />
            </VStack>
          </Center>
        </ScreenCenter>
      </Layout>
    </>
  );
};

export default Custom500;
