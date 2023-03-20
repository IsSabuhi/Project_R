import useResumeStore from "@/src/store/resume.store";
import { Box, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { StylePropsContext } from "../../Design/StylePropsProvider";
import useContactStore from "../../UserInput/Contact/store";

const NameAndJobTitleLayout = () => {
  const fullName = useContactStore((state) => state.fullName);
  const jobTitle = useContactStore((state) => state.jobTitle);
  const { headerTitleProps, headerSubtitleProps } =
    useContext(StylePropsContext);
  const spacing = useResumeStore((state) => state.spacing);

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      px={spacing * 8}
      py={spacing * 4}
    >
      <Text aria-label="Full Name" {...headerTitleProps}>
        {fullName}
      </Text>
      <Text aria-label="Job Title" {...headerSubtitleProps}>
        {jobTitle}
      </Text>
    </Box>
  );
};

export default NameAndJobTitleLayout;
