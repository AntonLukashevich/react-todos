import React from 'react'
import { Box } from '@mui/material'
import { IProps } from './propsInterface'
import { STYLES } from './constants'

export const ValidationErrorMessage = ({ message }: IProps) => {
  return (
    <Box sx={STYLES.wrapper}>
      <Box sx={STYLES.message}>{message}</Box>
    </Box>
  )
}
