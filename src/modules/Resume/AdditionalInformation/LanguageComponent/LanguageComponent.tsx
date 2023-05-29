import { languages, languagesLevel } from '@/configs'
import { DeleteIcon } from '@chakra-ui/icons'
import { Box, IconButton, Select } from '@chakra-ui/react'

interface ILanguage {
  language: any
  level: any
  onChangeLanguage: any
  onChangeLevel: any
  onRemove: any
}

const Language = ({
  language,
  level,
  onChangeLanguage,
  onChangeLevel,
  onRemove,
}: ILanguage) => {
  return (
    <Box display="flex" alignItems="center">
      <Select
        value={language}
        onChange={(e) => onChangeLanguage(e.target.value)}
        size="sm"
      >
        {languages.map((language) => (
          <option key={language.id} value={language.name}>
            {language.label}
          </option>
        ))}
      </Select>
      <Select
        ml={2}
        value={level}
        onChange={(e) => onChangeLevel(e.target.value)}
        size="sm"
      >
        {languagesLevel.map((level) => (
          <option key={level.id} value={level.name}>
            {level.label}
          </option>
        ))}
      </Select>
      <IconButton
        aria-label="deleteButton"
        onClick={onRemove}
        variant="unstyled"
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

export default Language
