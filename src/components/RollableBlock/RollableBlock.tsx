import React from "react";
import { STYLES } from "../../Todo/TodoItem/constants";
import { Box, Button } from "@mui/material";
import { IProps } from "./propsInterface";

export const RollableBlock = ({description, maxLength, show, setShow}: IProps) => {

  const changeShowMore = () => {
    setShow(!show)
  }

  return (
    <Box>
      {show ? description : description.slice(0, maxLength)}
      {description.length > 50 && (
        <Button sx={STYLES.moreBtn} size="small" onClick={changeShowMore}>
          ...
        </Button>
      )}
    </Box>
  );
};
