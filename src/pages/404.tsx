import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import ImageCredit from "../components/common/ImageCredit";
import TextLink from "../components/common/TextLink";
import Layout from "../components/layouts";
import ScreenCenter from "../components/layouts/ScreenCenter";
import { DISCORD_INVITE, GITHUB_ISSUE, SUPPORT_EMAIL } from "../data/RefLinks";
import SEO from "../modules/SEO";
import mp from "../services/mixpanel";

const Custom404: NextPage = () => {
  useEffect(() => {
    mp.track("404 Error Page View");
  }, []);

  return (
    <>
      <SEO title="404 Not Found" />
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
              Здесь пустота!
            </Text>
            <Text
              fontSize={{ base: "lg", lg: "2xl" }}
              fontWeight="medium"
              mb="8"
            >
              Ошибка 404: Нам не удалось найти страницу, которую вы искали.
            </Text>
            <Text mb="4" fontSize={{ base: "sm", lg: "md" }}>
              Это может произойти, если страница, которую вы ищете, либо не
              существует или был перемещен в другое место.
            </Text>
            <Link href="/home">
              <Button colorScheme="purple" leftIcon={<FiArrowLeft />} mb="8">
                Вернуться на главную
              </Button>
            </Link>
          </Box>
          <Center flexBasis={{ md: "50%" }}>
            <VStack>
              <Image
                src="/404.png"
                alt="404 Not Found"
                boxSize={{ base: "183", md: "228", lg: "304", xl: "456" }}
              />
            </VStack>
          </Center>
        </ScreenCenter>
      </Layout>
    </>
  );
};

export default Custom404;
