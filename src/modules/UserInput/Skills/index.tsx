import { patchSkillData } from '@/apis/patchSkills'
import { getUniqueID } from '@/src/utils'
import dynamic from 'next/dynamic'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import TooltipIconButton from '../../../components/common/TooltipIconButton'
import ExpandableCard from '../../../components/layouts/Cards/ExpandableCard'
import DndWrapper from '../../../components/layouts/DndWrapper'
import Section from '../../../components/layouts/Section'
import SkillsHints from '../../../data/Hints/skills'
import { useCustomToast } from '../../../hooks/useCustomToast'
import Autosave from '../Autosave'
import { handleChange, handleDragEnd, handleTagsInput } from '../handlers'
import SectionControls from '../SectionControls'
import FormatMenu from './FormatMenu'
import useSkillStore from './store'
import { SkillDataObject } from './types'
const InputWithLabel = dynamic(
  () => import('../../../components/common/InputWithLabel')
)
const TextAreaWithLabel = dynamic(
  () => import('../../../components/common/TextAreaWithLabel')
)

const Skills = () => {
  const data = useSkillStore((state) => state.data)
  const setData = useSkillStore((state) => state.setData)
  const addData = useSkillStore((state) => state.add)
  const updateData = useSkillStore((state) => state.update)
  const { createToast } = useCustomToast()

  const DummyData: SkillDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    category: '',
    skillsList: [],
  }

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
        title: 'Навыки',
        subtitle: 'Добавьте соответствующие навыки и классифицируйте их.',
        mb: '2',
      }}
    >
      <Autosave data={{ data: data }} patchFn={patchSkillData} />
      <SectionControls
        layoutKey="SKILLS"
        extraChildren={<FormatMenu />}
        hintData={SkillsHints}
      >
        <TooltipIconButton
          label="Add new skillset"
          aria-label="New-Skillset"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      {/* Search Bar with Autocomplete. TO BE DONE WITH MATERIAL-UI */}
      {/* Switch for disabling auto skill classification. */}
      <DndWrapper
        droppableId="skills"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.category,
              titlePlaceholder: 'Категория без названия',
              isHidden: item.isHidden,
            }}
            InputCardProps={{
              itemType: 'category',
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, 'isHidden', !item.isHidden),
              },
              deleteHandler: () => handleDelete(item._id),
            }}
            key={item._id}
          >
            <InputWithLabel
              label="Category"
              name="category"
              placeholder="Языки программирования"
              value={item.category}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <TextAreaWithLabel
              label="Skills"
              name="skillsList"
              placeholder="Разделяйте навыки запятыми"
              value={item.skillsList.toString()}
              onChange={(e) =>
                handleTagsInput(e, index, updateData, 'skillsList')
              }
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  )
}

export default Skills
