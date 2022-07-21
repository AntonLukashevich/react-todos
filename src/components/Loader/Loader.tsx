import React from "react";
import { Box, CircularProgress } from '@mui/material'
import { STYLES } from './constants'

export const Loader = () => {
  return (
    <Box sx={STYLES.wrapper}>
      <CircularProgress />
    </Box>
  )
}