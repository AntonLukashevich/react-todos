import React, { useEffect } from 'react'
import { Box, Button, FormGroup, IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { ValidationErrorMessage } from './components/ValidationError'
import { ValidationsErrors } from '../../utils/enums'
import { useInput } from '../../utils/hooks'
import { IProps } from './propsInterface'
import { STYLES } from './constants'

export const TodoForm = ({ createTodo, setVisible, todo, updateTodo }: IProps) => {
  const title = useInput('', { isEmpty: true, minLength: 4, maxLength: 60 })
  const description = useInput('', {
    isEmpty: true,
    minLength: 4,
    maxLength: 250,
  })

  useEffect(() => {
    if (todo?.id) {
      title.setValue(todo?.title)
      description.setValue(todo?.description)
    }
  }, [todo])

  const submitHandler = () => {
    if (todo?.id) {
      updateTodo({
        ...todo,
        id: todo.id,
        title: title.value,
        description: description.value,
      })
    } else {
      createTodo({ title: title.value, description: description.value })
    }
    title.setValue('')
    description.setValue('')
    setVisible(false)
  }

  return (
    <Box>
      {
        <FormGroup sx={STYLES.wrapper}>
          <Box sx={STYLES.content}>
            <Box sx={STYLES.headerWrapper}>
              <IconButton onClick={() => setVisible(false)} size="large" color="error">
                <CloseIcon />
              </IconButton>
            </Box>
            {title.isDirty && title.isEmpty && <ValidationErrorMessage message={ValidationsErrors.empty} />}
            {title.isDirty && title.minLengthError && <ValidationErrorMessage message={ValidationsErrors.minLength} />}
            {title.isDirty && title.maxLengthError && <ValidationErrorMessage message={ValidationsErrors.maxLength} />}
            <TextField
              sx={STYLES.inputTodoTitle}
              label="Title"
              name="title"
              value={title.value}
              onChange={title.onChange}
              // onBlur={title.onBlur}
            />
            {description.isDirty && description.isEmpty && <ValidationErrorMessage message={ValidationsErrors.empty} />}
            {description.isDirty && description.minLengthError && (
              <ValidationErrorMessage message={ValidationsErrors.minLength} />
            )}
            {description.isDirty && description.maxLengthError && (
              <ValidationErrorMessage message={ValidationsErrors.maxLength} />
            )}
            <TextField
              sx={STYLES.inputTodoTitle}
              id="outlined-multiline-static"
              label="Description"
              name="description"
              multiline
              rows={6}
              value={description.value}
              onChange={description.onChange}
              // onBlur={description.onBlur}
            />
            <Box sx={STYLES.btnGroup}>
              <Button
                sx={STYLES.btn}
                size="medium"
                color="primary"
                variant="contained"
                type="button"
                onClick={submitHandler}
                disabled={!title.inputValid || !description.inputValid}
              >
                Save
              </Button>
              <Button sx={STYLES.btn} variant="contained" color="error" type="button" onClick={() => setVisible(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        </FormGroup>
      }
    </Box>
  )
}
