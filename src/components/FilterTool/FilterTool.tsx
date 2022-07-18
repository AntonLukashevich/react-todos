import React, {useState} from "react";
import {Box, ToggleButton, ToggleButtonGroup} from "@mui/material";

import {StatusTodo} from "../../utils/enums";
import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const FilterTool = ({setFilter}: IProps) => {
  const [newFilter, setNewFilter] = useState<string>('')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string,
  ) => {
    setNewFilter(newFilter);
    setFilter(newFilter)
  }

  return (
    <Box sx={STYLES.wrapper}>
      <ToggleButtonGroup
        sx={STYLES.btnGroup}
        color="standard"
        value={newFilter}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton sx={{
          ...STYLES.btn,
          ...(newFilter === '' ? STYLES.btnSelected : {})
        }} value="" size="small">All</ToggleButton>
        <ToggleButton sx={{
          ...STYLES.btn,
          ...(newFilter === StatusTodo.todo ? STYLES.btnSelected : {})
        }} value={StatusTodo.todo} size="small">Todo</ToggleButton>
        <ToggleButton sx={{
          ...STYLES.btn,
          ...(newFilter === StatusTodo.in_progress ? STYLES.btnSelected : {})
        }} value={StatusTodo.in_progress} size="small">In progress</ToggleButton>
        <ToggleButton sx={{
          ...STYLES.btn,
          ...(newFilter === StatusTodo.done ? STYLES.btnSelected : {})
        }} value={StatusTodo.done} size="small">Done</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}