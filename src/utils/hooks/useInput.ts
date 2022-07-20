import React, { useState } from 'react'

import { useValidation } from './useValidation'

export const useInput = (initValue: string, validations: Record<string, string | number | boolean>) => {
  const [value, setValue] = useState<string>(initValue)
  const [isDirty, setIsDirty] = useState<boolean>(false)
  const valid = useValidation(value, validations)

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsDirty(true)
    setValue(event.target.value)
  }

  const onBlur = () => {
    setIsDirty(true)
  }

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  }
}
