import { Input, InputProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

interface ICustomInput extends InputProps {}

export const CustomInput = styled((props: ICustomInput) => (
  <Input variant={props.variant} {...props} _disabled={{ bg: "#ffffff00" }} />
))(() => ({
  height: "55px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 10%)",
  borderRadius: "20px"
}));
