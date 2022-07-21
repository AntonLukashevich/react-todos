import { useEffect, useState } from 'react'

export const useValidation = (value: string, validations: Record<string, string | number | boolean>) => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          (value.length > 0 && value.length < validations[validation]) ? setMinLengthError(true) : setMinLengthError(false)
          break
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break
      }
    }
  }, [value, validations])

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, maxLengthError, minLengthError])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    inputValid,
  }
}
