import React, {useState} from "react";
import {Box, Button, FormGroup, TextField} from "@mui/material";
import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const AddTodoForm = ({createTodo}: IProps) => {
  const [inputValue, setInputValue] = useState('')

  const submitHandler = () => {
    createTodo(inputValue)
    setInputValue('')
  }

  return (
    <FormGroup sx={STYLES.wrapper}>
      <Box>
        <TextField sx={STYLES.inputTodo}
                   placeholder="input todo"
                   value={inputValue}
                   onChange={event => setInputValue(event.target.value)}
        />
      </Box>
      <Box>
        <Button sx={STYLES.btn} variant="outlined" type="button" onClick={submitHandler}>Add</Button>
      </Box>
    </FormGroup>
  )
}