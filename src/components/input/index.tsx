import React from 'react'
import { Input as AntInput, InputProps } from "antd/lib";
import { Box } from '@mui/material';
import { Text } from '../text/index';
import { colors } from '@/assets';
import { TextAreaProps } from 'antd/es/input/TextArea';

interface Props {
  label?: string;
  labelColor: string;
  rootClass?: string;
  isTextarea: boolean;
}
interface InputProps_ extends Props, InputProps { }

const Input = (props: InputProps_) => {
  const {
    label, name,
    placeholder = "",
    variant = "underlined",
    rootClass
  }: InputProps_ = props
  return (
    <div className={rootClass}>
      <Box component={'label'}>
        <Text weight={600} color={colors.textDark} size={"13px"} >
          {label}
        </Text>
      </Box>
      {
        <AntInput id={name} placeholder={placeholder} variant={variant} {...props} />
      }
    </div>
  )
}

interface TextAreaProps_ extends Props, TextAreaProps { }
const TextArea = (props: TextAreaProps_) => {
  const {
    label, name,
    placeholder = "",
    variant = "underlined",
    rootClass,
  }: TextAreaProps_ = props
  return (
    <div className={rootClass}>
      <Box component={'label'}>
        <Text weight={600} color={colors.textDark} size={"13px"} >
          {label}
        </Text>
      </Box>

      <AntInput.TextArea id={name} placeholder={placeholder} variant={variant} {...props} />

    </div>
  )
}

export { Input, TextArea }