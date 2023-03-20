import { Box } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React, { useContext } from "react";
import useResumeStore from "../../../src/store/resume.store";
import { StylePropsContext } from "../../Design/StylePropsProvider";

interface Props {
  list: Array<string>;
}

const createColorScheme = (color) => {
  const isCustomColor = color.length === 6 && !isNaN(Number("0x" + color));
  if (!isCustomColor) return { colorScheme: color };
  return {
    backgroundColor: hexToRgba(color, 0.2),
    color: hexToRgba(color)
  };
};

const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const Tags: React.FC<Props> = ({ list }) => {
  const color = useResumeStore((state) => state.color).replace("#", "");
  const font = useContext(StylePropsContext).font;

  return (
    <Box aria-label="Tags">
      {list.map((tag) =>
        tag.trim().length ? (
          <Tag
            {...createColorScheme(color)}
            {...font.body}
            borderRadius="full"
            variant="subtle"
            key={tag}
            mr="1"
            mb="1.5"
          >
            {tag.trim()}
          </Tag>
        ) : null
      )}
    </Box>
  );
};

export default Tags;
