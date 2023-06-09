import { patchEducation } from '@/apis/patchSection'
import { getMidMonthDate, getUniqueID } from '@/src/utils'
import { Icon, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import React from 'react'
import { FiAlertTriangle, FiEyeOff, FiPlus } from 'react-icons/fi'
import TooltipIconButton from '../../../components/common/TooltipIconButton'
import ExpandableCard from '../../../components/layouts/Cards/ExpandableCard'
import DndWrapper from '../../../components/layouts/DndWrapper'
import Section from '../../../components/layouts/Section'
import EducationHints from '../../../data/Hints/education'
import { useCustomToast } from '../../../hooks/useCustomToast'
import Autosave from '../Autosave'
import {
  handleChange,
  handleDateChange,
  handleDragEnd,
  handleEditorChange,
  handlePresentCheckbox,
} from '../handlers'
import SectionControls from '../SectionControls'
import GradeInput from './GradeInput'
import useEducationStore from './store'
import { EducationDataObject } from './types'
const EditorWithLabel = dynamic(
  () => import('../../../components/common/EditorWithLabel')
)
const StartEndDatePicker = dynamic(
  () => import('../../../components/common/StartEndDatePicker')
)
const InputWithLabel = dynamic(
  () => import('../../../components/common/InputWithLabel')
)

const Education = () => {
  const data = useEducationStore((state) => state.data)
  const setData = useEducationStore((state) => state.setData)
  const addData = useEducationStore((state) => state.add)
  const updateData = useEducationStore((state) => state.update)
  const { createToast } = useCustomToast()

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: EducationDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    institute: '',
    location: '',
    degree: '',
    stream: '',
    gradeObtained: 1,
    gradeMax: 10,
    start: getMidMonthDate(),
    end: getMidMonthDate(),
    description: '',
  }

  //mocking data from DB.
  const getNewObject = async () => {
    return DummyData
  }

  //Mock async request
  const handleAdd = async () => {
    await getNewObject().then((res) => addData(res))
  }

  //Mocked delete request from server.
  const handleDelete = async (id: string) => {
    const nextState = data.filter((item) => item._id !== id)
    setData(nextState)
    return createToast('Deleted Successfully', 'success')
  }

  return (
    <Section
      header={{
        title: 'Образование',
        mb: '2',
      }}
    >
      <Autosave data={data} patchFn={patchEducation} />
      <SectionControls layoutKey="EDUCATION" hintData={EducationHints}>
        <TooltipIconButton
          label="Add new education"
          aria-label="New-Education"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      <DndWrapper
        droppableId="education"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.institute,
              subtitle: item.degree,
              titlePlaceholder: 'Название института',
              isHidden: item.isHidden,
            }}
            InputCardProps={{
              itemType: 'education',
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, 'isHidden', !item.isHidden),
              },
              deleteHandler: () => handleDelete(item._id),
            }}
            key={item._id}
            id={item._id}
          >
            <InputWithLabel
              label="Institute"
              name="institute"
              placeholder="Institute"
              value={item.institute}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Location"
              name="location"
              placeholder="Город"
              value={item.location}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Degree"
              name="degree"
              value={item.degree}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Stream"
              name="stream"
              value={item.stream}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <StartEndDatePicker
              views={['year']}
              values={{ start: item.start, end: item.end }}
              onChangeHandler={(key) =>
                handleDateChange(index, key, updateData)
              }
              checkboxHandler={() =>
                handlePresentCheckbox(index, data[index].end, updateData)
              }
            />
            <GradeInput
              gradeObtained={item.gradeObtained}
              gradeMax={item.gradeMax}
              onChangeHandler={(key, value) => updateData(index, key, value)}
            />
            {isNaN(item.gradeObtained) ? (
              <Text fontSize="sm" color="red.500" mb="4">
                <Icon as={FiAlertTriangle} /> Установите допустимый номер
                (&gt;0). Используйте 0, чтобы скрыть оценку.
              </Text>
            ) : null}
            {item.gradeObtained < 1 ? (
              <Text fontSize="sm" color="gray.500" mb="4">
                <Icon as={FiEyeOff} /> Класс скрыт
              </Text>
            ) : null}
            <EditorWithLabel
              onChange={(output) =>
                handleEditorChange(index, output, updateData)
              }
              defaultValue={item.description}
              label="Description"
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  )
}

export default Education
