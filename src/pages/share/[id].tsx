import { getUserData } from "@/apis/meta";
import { getResumeData } from "@/apis/resume";
import InitStore from "@/src/store/InitStore";
import InitUserStore from "@/src/store/InitUserStore";
import { Box } from "@chakra-ui/layout";
import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import React, { useEffect } from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "../../components/layouts";
import placeholderData, { userPlaceholder } from "../../data/placeholderData";
import SEO from "../../modules/SEO";
import DownloadResume from "../../modules/Share/Download";
import { UserObject } from "../../modules/User/types";
import Viewer from "../../modules/Viewer";
import mp from "../../services/mixpanel";
import Papercups from "../../services/papercups";

interface ShareProps {
  token: string;
  id: string;
}

const Share: NextPage<ShareProps> = ({ token, id }) => {
  const { data, status } = useQuery(
    "getResumeData",
    () => getResumeData(token, id),
    {
      placeholderData
    }
  );
  const { data: userData, status: userQueryStatus } = useQuery<
    UserObject,
    Error
  >("getUserData", () => getUserData(token), {
    placeholderData: userPlaceholder
  });

  useEffect(() => {
    mp.track("Share Page View", { id });
  }, [id]);

  return (
    <>
      <SEO title="Загрузить резюме" />
      <InitStore data={data} status={status} id={id} />
      <InitUserStore data={userData} status={userQueryStatus} />
      <Layout display="flex" flexDir="column" alignItems="center" w="100%">
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
          px="0"
          py="5"
        >
          <Box
            aria-label="Share Options"
            flexBasis="50%"
            height="29.7cm"
            overflowY="auto"
          >
            <DownloadResume id={id} />
          </Box>
          <Box
            aria-label="Предварительный просмотр возобновления"
            flexBasis="50%"
          >
            <Viewer withStatus />
          </Box>
        </Box>
      </Layout>
      <Papercups />
    </>
  );
};

export default Share;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  //Если токен не существует или очищен, то перенаправьте на страницу входа в систему.
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
    };
  }

  //Если токен присутствует, передаум его в запрос для извлечения данных из API
  const { id } = ctx.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getResumeData", () =>
    getResumeData(token, id.toString())
  );
  return {
    props: {
      token,
      id,
      dehydratedState: dehydrate(queryClient)
    }
  };
};
