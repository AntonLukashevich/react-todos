import React from "react";
import {Box, Button, FormGroup, IconButton, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {IProps} from "./propsInterface";
import {STYLES} from "./constants";
import {useInput} from "../../utils/hooks";

export const TodoForm = ({createTodo, visible, setVisible}: IProps) => {
  const title = useInput('', {isEmpty: true, minLength: 4, maxLength: 60})
  const description = useInput('', {isEmpty: true, minLength: 4, maxLength: 250})

  let styleClasses = [STYLES.wrapper]
  if (visible) {
    styleClasses = [{...STYLES.wrapper, ...STYLES.active}]
  }

  const submitHandler = () => {
    createTodo({title: title.value, description: description.value})
    title.setValue('')
    description.setValue('')
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
        {(title.isDirty && title.isEmpty) && <Box sx={{color: "red"}}>Title cannot be empty</Box>}
        {(title.isDirty && title.minLengthError) &&
          <Box sx={{color: "red"}}>title min length should be greater than 3</Box>}
        {(title.isDirty && title.maxLengthError) &&
          <Box sx={{color: "red"}}>title max length should be less than 60</Box>}
        <TextField sx={STYLES.inputTodoTitle}
                   label="Title"
                   name="title"
                   value={title.value}
                   onChange={e => title.onChange(e)}
                   onBlur={e => title.onBlur(e)}
        />
        {(description.isDirty && description.isEmpty) && <Box sx={{color: "red"}}>Description cannot be empty</Box>}
        {(description.isDirty && description.minLengthError) &&
          <Box sx={{color: "red"}}>Description min length should be greater than 3</Box>}
        {(description.isDirty && description.maxLengthError) &&
          <Box sx={{color: "red"}}>Description max length should be less than 250</Box>}
        <TextField sx={STYLES.inputTodoTitle}
                   id="outlined-multiline-static"
                   label="Description"
                   name="description"
                   multiline
                   rows={6}
                   value={description.value}
                   onChange={e => description.onChange(e)}
                   onBlur={e => description.onBlur(e)}
        />
        <Box sx={STYLES.btnGroup}>
          <Button sx={STYLES.btn} size="medium" color="primary" variant="contained" type="button"
                  onClick={submitHandler} disabled={!title.inputValid || !description.inputValid}>Save</Button>
          <Button sx={STYLES.btn} variant="contained" color="error" type="button"
                  onClick={() => setVisible(false)}>Cancel</Button>
        </Box>
      </Box>
    </FormGroup>
  )
}