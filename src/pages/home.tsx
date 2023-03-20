import { getUserData } from "@/apis/meta";
import { Grid, useDisclosure } from "@chakra-ui/react";
import { GetServerSidePropsContext, NextPage } from "next";
import dynamic from "next/dynamic";
import nookies from "nookies";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { userPlaceholder } from "../data/placeholderData";
import ResumeList from "../modules/Home/ResumeList";
import Sidebar from "../modules/Home/Sidebar";
import SEO from "../modules/SEO";
import useUserStore from "../modules/User/store";
import { UserObject } from "../modules/User/types";
import mp from "../services/mixpanel";
import Papercups from "../services/papercups";
import InitUserStore from "../store/InitUserStore";

const CreateResumeModal = dynamic(
  () => import("../modules/Home/CreateResumeModal")
);

interface HomePageProps {
  token: string;
}

const Home = () => {
  const { _id, isBanned, active } = useUserStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    mp.track("Home Page View");
  }, []);

  return (
    <>
      <SEO title="Создать новое резюме" />
      {/* <InitUserStore data={data} status={status} /> */}
      <Header />
      <Grid
        height="100vh"
        templateColumns="1fr 4fr"
        gap={16}
        mx={{ md: "4rem", lg: "7rem" }}
        my={{ base: "2rem" }}
      >
        <Sidebar />
        <ResumeList handleNew={onOpen} />

        {/* <TemplateList /> */}
      </Grid>
      <Footer />
      <CreateResumeModal
        data={{ _id, isBanned, active }}
        options={{ isOpen, onClose }}
      />
      <Papercups />
    </>
  );
};

export default Home;

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   //Try to get token from cookies.
//   const cookies = nookies.get(ctx);
//   const token = cookies.token;

//   //If the token does not exist or is cleared then redirect to login page.
//   if (!token) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/login"
//       }
//     };
//   }

//   //If token is present, pass it to the query to fetch data from API
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery("getUserData", () => getUserData(token));
//   return {
//     props: {
//       token,
//       dehydratedState: dehydrate(queryClient)
//     }
//   };
// };
