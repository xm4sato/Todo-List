import { Typography, type TypographyStyle, type TypographyVariant } from "@mui/material";
import type { JSX } from "react";

interface TypoGraphyProps {
    title : string;
  sx: TypographyStyle;
  variant: TypographyVariant;
}

const TypoGraphy = (children: TypoGraphyProps): JSX.Element => {
  return (
    <>
      <Typography
        id="modal-title"
        variant={children.variant}
        sx={children.sx}
      >
        {children.title}
      </Typography>
    </>
  );
};

export default TypoGraphy;
