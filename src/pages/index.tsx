import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import SEO from "../modules/SEO";
import Footer from "../website/Footer";
import Nav from "../website/Nav";
import Login from "./login";

const Index: NextPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default Index;
