import { patchCertifications } from '@/apis/patchSection'
import { getMidMonthDate, getUniqueID } from '@/src/utils'
import dynamic from 'next/dynamic'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import TooltipIconButton from '../../../components/common/TooltipIconButton'
import ExpandableCard from '../../../components/layouts/Cards/ExpandableCard'
import DndWrapper from '../../../components/layouts/DndWrapper'
import Section from '../../../components/layouts/Section'
import CertificationHints from '../../../data/Hints/certification'
import { useCustomToast } from '../../../hooks/useCustomToast'
import Autosave from '../Autosave'
import {
  handleChange,
  handleDateChange,
  handleDragEnd,
  handlePresentCheckbox,
} from '../handlers'
import SectionControls from '../SectionControls'
import useCertificationStore from './store'
import { CertificationDataObject } from './types'
const StartEndDatePicker = dynamic(
  () => import('../../../components/common/StartEndDatePicker')
)
const InputWithLabel = dynamic(
  () => import('../../../components/common/InputWithLabel')
)

const Certification = () => {
  const data = useCertificationStore((state) => state.data)
  const setData = useCertificationStore((state) => state.setData)
  const addData = useCertificationStore((state) => state.add)
  const updateData = useCertificationStore((state) => state.update)
  const { createToast } = useCustomToast()

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: CertificationDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    certificateName: '',
    authority: '',
    credentialNumber: '',
    start: getMidMonthDate(),
    end: getMidMonthDate(),
    link: '',
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
        title: 'Certifications',
        subtitle: 'Добавьте соответствующие профессиональные сертификаты',
        mb: '2',
      }}
    >
      <Autosave data={data} patchFn={patchCertifications} />
      <SectionControls layoutKey="CERTIFICATIONS" hintData={CertificationHints}>
        <TooltipIconButton
          label="Add new certificate"
          aria-label="New-Certificate"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      <DndWrapper
        droppableId="certification"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.certificateName,
              subtitle: item.credentialNumber,
              titlePlaceholder: 'Имя сертификата',
              isHidden: item.isHidden,
            }}
            InputCardProps={{
              itemType: 'certification',
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, 'isHidden', !item.isHidden),
              },
              deleteHandler: () => handleDelete(item._id),
            }}
            key={item._id}
          >
            <InputWithLabel
              label="Certificate Name"
              name="certificateName"
              placeholder="Сертифицированный разработчик программного обеспечения"
              value={item.certificateName}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Issuing Authority"
              name="authority"
              placeholder="Например, Microsoft"
              value={item.authority}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Credential Number"
              name="credentialNumber"
              value={item.credentialNumber}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <StartEndDatePicker
              labels={{
                started: 'Полученный',
                ended: 'Истекает',
                checkbox: 'Никогда не истекает срок действия',
              }}
              values={{ start: item.start, end: item.end }}
              onChangeHandler={(key) =>
                handleDateChange(index, key, updateData)
              }
              checkboxHandler={() =>
                handlePresentCheckbox(index, data[index].end, updateData)
              }
            />
            <InputWithLabel
              label="Certificate Link"
              name="link"
              value={item.link}
              onChange={(e) => handleChange(e, index, updateData)}
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  )
}

export default Certification
