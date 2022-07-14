import React, {useState} from "react";
import {Box, Button, FormGroup, IconButton, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {IProps} from "./propsInterface";
import {STYLES} from "./constants";

export const TodoForm = ({createTodo, visible, setVisible}: IProps) => {
  const [inputTitle, setInputTitle] = useState('')
  const [inputDescription, setInputDescription] = useState('')

  let styleClasses = [STYLES.wrapper]
  if (visible) {
    styleClasses = [{...STYLES.wrapper, ...STYLES.active}]
  }

  const submitHandler = () => {
    createTodo({title: inputTitle, description: inputDescription})
    setInputTitle('')
    setInputDescription('')
    setVisible(false)
  }

  return (
    <FormGroup sx={styleClasses}>
      <Box sx={STYLES.content}>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
          <IconButton onClick={() => setVisible(false)} size="large" color="error">
            <CloseIcon/>
          </IconButton>
        </Box>
        <TextField sx={STYLES.inputTodoTitle}
                   label="Title"
                   value={inputTitle}
                   onChange={event => setInputTitle(event.target.value)}
        />
        <TextField sx={STYLES.inputTodoTitle}
                   id="outlined-multiline-static"
                   label="Description"
                   multiline
                   rows={6}
                   value={inputDescription}
                   onChange={event => setInputDescription(event.target.value)}
        />
        <Box sx={STYLES.btnGroup}>
          <Button sx={STYLES.btn} size="medium" color="primary" variant="contained" type="button"
                  onClick={submitHandler}>Save</Button>
          <Button sx={STYLES.btn} variant="contained" color="error" type="button"
                  onClick={() => setVisible(false)}>Cancel</Button>
        </Box>
      </Box>
    </FormGroup>
  )
}