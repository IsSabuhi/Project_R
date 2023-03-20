import { GridItem } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../components/common/BoxHeader";

const TemplateList = () => {
  return (
    <GridItem colSpan={3}>
      <BoxHeader
        title="Начните с шаблона"
        subtitle="Выберите из приведенного ниже шаблона. Нажмите на 'Показать все', чтобы открыть галерею шаблонов"
        size={{ title: "4xl", subtitle: "md" }}
        titleProps={{
          as: "h1",
          letterSpacing: "tight",
          color: "InactiveCaptionText"
        }}
        spacing="0"
      />
      {/* <Text color="gray" fontWeight="normal" fontSize="xl">
        Coming Soon
      </Text> */}
    </GridItem>
  );
};

export default TemplateList;
