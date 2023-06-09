import { patchProjects } from '@/apis/patchSection'
import { getMidMonthDate, getUniqueID } from '@/src/utils'
import dynamic from 'next/dynamic'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import InputWithLabel from '../../../components/common/InputWithLabel'
import TooltipIconButton from '../../../components/common/TooltipIconButton'
import ExpandableCard from '../../../components/layouts/Cards/ExpandableCard'
import DndWrapper from '../../../components/layouts/DndWrapper'
import Section from '../../../components/layouts/Section'
import ProjectHints from '../../../data/Hints/projects'
import { useCustomToast } from '../../../hooks/useCustomToast'
import Autosave from '../Autosave'
import {
  handleChange,
  handleClearDate,
  handleDateChange,
  handleDragEnd,
  handleEditorChange,
  handlePresentCheckbox,
  handleTagsInput,
} from '../handlers'
import SectionControls from '../SectionControls'
import useProjectStore from './store'
import { ProjectDataObject } from './types'
const EditorWithLabel = dynamic(
  () => import('../../../components/common/EditorWithLabel')
)
const StartEndDatePicker = dynamic(
  () => import('../../../components/common/StartEndDatePicker')
)

const Projects = () => {
  const data = useProjectStore((state) => state.data)
  const setData = useProjectStore((state) => state.setData)
  const addData = useProjectStore((state) => state.add)
  const updateData = useProjectStore((state) => state.update)
  const { createToast } = useCustomToast()

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: ProjectDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    projectName: '',
    additionalInfo: '',
    start: getMidMonthDate(),
    end: getMidMonthDate(),
    description: '',
    link: '',
    tags: [],
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
    return createToast('Удалено успешно', 'success')
  }

  return (
    <Section
      header={{
        title: 'Projects',
        subtitle: 'Добавляйте соответствующие личные проекты',
        mb: '2',
      }}
    >
      <Autosave data={data} patchFn={patchProjects} />
      <SectionControls layoutKey="PROJECTS" hintData={ProjectHints}>
        <TooltipIconButton
          label="Add new project"
          aria-label="New-Project"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      <DndWrapper
        droppableId="projects"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.projectName,
              subtitle: item.link,
              titlePlaceholder: 'Название проекта',
              isHidden: item.isHidden,
            }}
            InputCardProps={{
              itemType: 'project',
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, 'isHidden', !item.isHidden),
              },
              deleteHandler: () => handleDelete(item._id),
            }}
            key={item._id}
          >
            <InputWithLabel
              label="Project Name"
              name="projectName"
              placeholder="ProjectR"
              value={item.projectName}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Additional Info (Optional)"
              name="additionalInfo"
              placeholder="Ex. Organization"
              value={item.additionalInfo}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <StartEndDatePicker
              values={{ start: item.start, end: item.end }}
              onChangeHandler={(key) =>
                handleDateChange(index, key, updateData)
              }
              checkboxHandler={() =>
                handlePresentCheckbox(index, data[index].end, updateData)
              }
              clearDateHandler={() =>
                handleClearDate(index, data[index].start, updateData)
              }
              startClearable
            />
            <EditorWithLabel
              onChange={(output) =>
                handleEditorChange(index, output, updateData)
              }
              defaultValue={item.description}
              label="Description"
            />
            <InputWithLabel
              label="Project Link"
              name="link"
              value={item.link}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Tags"
              name="tags"
              placeholder="Separate keywords by commas"
              value={item.tags.toString()}
              onChange={(e) => handleTagsInput(e, index, updateData)}
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  )
}

export default Projects
