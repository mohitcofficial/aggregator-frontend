import { Skeleton } from "@mui/material";
import React from "react";

const CustomSkeleton = ({
  height = 60,
  width = "100%",
  animation = "wave",
  variant = "rounded",
}) => {
  return (
    <Skeleton
      animation={animation}
      variant={variant}
      width={width}
      height={height}
      sx={{
        bgcolor: "grey.300",
      }}
    />
  );
};

export default CustomSkeleton;
