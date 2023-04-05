import {
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import styles from './ResumeCard.module.scss';
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
import { Resume } from '@/generated/projectR-hasura';
import InputField from '@/components/InputFieldCustom/InputField';
import { useFormik } from 'formik';
import DeleteResumeModal from '../DeleteResumeModal';

interface IResumeCard {
  resumeData: Partial<Resume>;
}

const ResumeCard: React.FC<IResumeCard> = ({ resumeData }) => {
  const initialFormResumeList = {
    name_resume: resumeData.name_resume,
  };

  const { isOpen, onToggle, onClose } = useDisclosure();

  const clearInput = () => {
    formik.values.name_resume = resumeData.name_resume;
    onClose();
  };

  const formik = useFormik({
    initialValues: initialFormResumeList,
    enableReinitialize: true,
    onSubmit: () => {},
  });

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main_header_card}>
          <Text>{resumeData?.job_position}</Text>
          {resumeData.status ? (
            <Tooltip label='Сгенерированное резюме' placement='top'>
              <CheckCircleIcon />
            </Tooltip>
          ) : (
            <Tooltip label='Создано вручную' placement='top'>
              <InfoIcon />
            </Tooltip>
          )}
        </div>
        <Text fontSize='small'>Дата создания: {resumeData?.date_create}</Text>
      </div>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={clearInput}
        placement='bottom'
        closeOnBlur={true}
      >
        <form onSubmit={formik.handleSubmit}>
          <PopoverTrigger>
            <Text
              textAlign='center'
              _hover={{
                shadow: 'md',
                filter: 'brightness(80%)',
                cursor: 'pointer',
              }}
              onClick={onToggle}
            >
              {resumeData?.name_resume}
            </Text>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader fontWeight='semibold'>
              <Text fontSize='12px'>Название резюме</Text>
              <InputField
                id='name_resume'
                name='name_resume'
                variant='flushed'
                value={formik.values.name_resume}
                onChange={(e) =>
                  formik.setFieldValue('name_resume', e.target.value)
                }
              />
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />

            <PopoverFooter display='flex' justifyContent='flex-end'>
              <ButtonGroup size='sm'>
                <Button>Сохранить</Button>
                <DeleteResumeModal resumeObject={resumeData} />
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </form>
      </Popover>
    </div>
  );
};

export default ResumeCard;
