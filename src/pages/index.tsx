import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { APP_URLS } from "@/configs/urls";

const Index: NextPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push(APP_URLS.SIGN_IN);
  }, [router]);
  return <div></div>;
};

export default Index;
