import { Checkbox } from '@chakra-ui/checkbox'
import { Box, HStack, Text } from '@chakra-ui/layout'
import { DatePickerView } from '@material-ui/lab/DatePicker/shared'
import { add, sub } from 'date-fns'

interface Props {
  labels?: { started: string; ended: string; checkbox: string }
  values: { start: Date; end: Date }
  onChangeHandler: (key: string) => (date: Date) => void
  checkboxHandler?: (e) => void
  clearDateHandler?: (e) => void
  views?: Array<DatePickerView>
  startClearable?: boolean
}

const StartEndDatePicker: React.FC<Props> = ({
  labels = { started: 'Started', ended: 'Ended', checkbox: 'Present' },
  values,
  onChangeHandler,
  checkboxHandler,
  clearDateHandler,
  startClearable,
  views = ['year', 'month'],
}) => {
  return (
    <>
      <HStack mb="2">
        <Box>
          <Text fontSize="md" pb="2" color="gray.500">
            {labels.started}
          </Text>
          {/* <MUIDatePicker
            renderInput={({ helperText, label, ...params }) => (
              <TextField label={null} {...params} />
            )}
            label={labels.started}
            value={values.start}
            onChange={onChangeHandler('start')}
            views={views}
            minDate={sub(new Date(), { years: 30 })}
            maxDate={add(new Date(), { years: 5 })}
            clearable={startClearable}
          /> */}
        </Box>
        <Box>
          <Text fontSize="md" pb="2" color="gray.500">
            {labels.ended}
          </Text>
          {/* <MUIDatePicker
            renderInput={({ helperText, label, ...params }) => (
              <TextField label={null} {...params} />
            )}
            label={labels.ended}
            value={values.end}
            onChange={onChangeHandler('end')}
            views={views}
            minDate={values.start}
            maxDate={add(new Date(), { years: 5 })}
            clearable
          /> */}
        </Box>
      </HStack>
      <HStack mb="4" spacing="4">
        {startClearable ? (
          <Checkbox
            size="sm"
            name="start"
            onChange={clearDateHandler}
            isChecked={!values.start}
          >
            Hide Date
          </Checkbox>
        ) : null}
        <Checkbox
          size="sm"
          name="end"
          onChange={checkboxHandler}
          isChecked={!values.end}
          isDisabled={!values.start}
        >
          {labels.checkbox}
        </Checkbox>
      </HStack>
    </>
  )
}

export default StartEndDatePicker
