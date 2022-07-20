import {useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initValue: string, validations: any) => {
  const [value, setValue] = useState<string>(initValue)
  const [isDirty, setIsDirty] = useState<boolean>(false)
  const valid = useValidation(value, validations)
  const onChange = (event: any) => {
    setValue(event.target.value)
  }

  const onBlur = (event: any) => {
    setIsDirty(true)
  }

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}