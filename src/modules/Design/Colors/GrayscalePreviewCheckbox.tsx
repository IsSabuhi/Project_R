import useGlobalStore from "@/src/store/global.store";
import { Checkbox } from "@chakra-ui/checkbox";
import { Text } from "@chakra-ui/layout";
import React from "react";

interface Props {}

const GrayscalePreviewCheckbox = (props: Props) => {
  const grayscaleFilter = useGlobalStore((state) => state.grayscaleFilter);
  const toggleGrayscaleFilter = useGlobalStore(
    (state) => state.toggleGrayscaleFilter
  );

  return (
    <Checkbox
      size="sm"
      defaultChecked={grayscaleFilter}
      onChange={toggleGrayscaleFilter}
    >
      <Text fontSize="sm" color="InactiveCaptionText">
        Grayscale preview
      </Text>
    </Checkbox>
  );
};

export default GrayscalePreviewCheckbox;
