import useResumeStore from "@/src/store/resume.store";
import { BoxProps } from "@material-ui/core";
import React, { useContext } from "react";
import TextViewer, { TiptapProps } from "../../../plugins/Tiptap/TextViewer";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const BodyText: React.FC<TiptapProps & BoxProps> = ({ content, ...props }) => {
  const bodyProps = useContext(StylePropsContext).bodyProps;
  const spacing = useResumeStore((state) => state.spacing);

  //To remove empty paragraphs before and after the text
  const santisedContent = content.toString().replace(/<p>\s*<\/p>/gi, "");

  const bodyTextProps: BoxProps = {
    "aria-label": "Body Text",
    my: spacing * 2,
    ...props
  };

  return (
    <TextViewer content={santisedContent} {...bodyProps} {...bodyTextProps} />
  );
};

export default BodyText;
