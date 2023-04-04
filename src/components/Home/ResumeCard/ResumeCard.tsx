import {
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
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
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Resume, useDeleteResumeMutation } from '@/generated/projectR-hasura';
import InputField from '@/components/InputFieldCustom/InputField';
import { useFormik } from 'formik';
import { useAuthContext } from '@/hooks/use-auth-context';

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

  const [deleteResumeMutation, { data, loading, error }] =
    useDeleteResumeMutation({
      onCompleted(data) {
        console.log('good');
      },
      onError(data) {
        console.log(data.graphQLErrors);
        console.log('HUI');
      },
    });

  const formik = useFormik({
    initialValues: initialFormResumeList,
    enableReinitialize: true,
    onSubmit: () => {
      deleteResumeMutation({
        variables: {
          resume_id: resumeData.resume_id,
        },
      });
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main_header_card}>
          <Text>{resumeData?.job_position}</Text>
          <Tooltip label='Сгенерированное резюме' placement='top'>
            <CheckCircleIcon />
          </Tooltip>
        </div>
        <Text fontSize='small'>Дата создания: {resumeData?.date_create}</Text>
      </div>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={clearInput}
        placement='bottom'
        closeOnBlur={false}
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
            {/* <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody> */}
            <PopoverFooter display='flex' justifyContent='flex-end'>
              <ButtonGroup size='sm'>
                <Button>Сохранить</Button>
                <Button colorScheme='red' type='submit'>
                  Удалить
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </form>
      </Popover>
    </div>
  );
};

export default ResumeCard;
