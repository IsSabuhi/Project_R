import { ChakraStylesConfig, Select } from 'chakra-react-select'
import React, { useState } from 'react'

interface ICustomAutocomplete {
  isMulti?: boolean
  width?: string
  id: string
  name: string
  label: string
  options: any
  skills: any[]
  onChangeSkills: (skills: any[]) => void
}

export default function CustomAutocomplete(props: ICustomAutocomplete) {
  const chakraStyles: ChakraStylesConfig = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      background: 'none',
      w: '40px',
    }),
    control: (provided) => ({
      ...provided,
      background: '#FFFFFF',
      boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.15)',
      minHeight: '55px',
      width: `${props.width}`,
      borderRadius: '20px',
    }),
  }

  const [customSkills, setCustomSkills] = useState<any[]>([])

  return (
    <Select
      {...props}
      variant="filled"
      chakraStyles={chakraStyles}
      isMulti={props.isMulti}
      name={props.name}
      id={props.id}
      instanceId={props.id}
      options={props.options.concat(props.skills)}
      placeholder={props.label}
      closeMenuOnSelect={false}
    />
  )
}
