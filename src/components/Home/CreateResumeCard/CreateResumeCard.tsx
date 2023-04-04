import InputField from '@/components/InputFieldCustom/InputField';
import { Status } from '@/constants';
import { useInsertNameResumeMutation } from '@/generated/projectR-hasura';
import { useAuthContext } from '@/hooks/use-auth-context';
import {
  Text,
  Icon,
  Box,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useSnackbar } from 'notistack';
import styles from './CreateResumeCard.module.scss';

interface ICreateResumeCard {
  nameResume: string;
  jobPosition: string;
}

const initialFormResume: ICreateResumeCard = {
  nameResume: '',
  jobPosition: '',
};

const CreateResumeCard = () => {
  const hoverProps = {
    bg: useColorModeValue('gray.100', 'whiteAlpha.100'),
    color: useColorModeValue('blue.500', 'blue.300'),
  };

  const { enqueueSnackbar } = useSnackbar();

  const { jobseekerId } = useAuthContext();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [status, setStatus] = React.useState<Status>(Status.idle);

  const [insertNameResumeMutation, { data, loading, error }] =
    useInsertNameResumeMutation({
      onCompleted() {
        setStatus(Status.success);
        onClose();
        enqueueSnackbar('Создано новое резюме!', { variant: 'success' });
      },
      onError() {
        setStatus(Status.error);
        enqueueSnackbar('Не удалось создать новое резюме', {
          variant: 'error',
        });
      },
    });

  const formik = useFormik({
    initialValues: initialFormResume,
    enableReinitialize: true,
    onSubmit: () => {
      insertNameResumeMutation({
        variables: {
          job_position: formik.values.jobPosition,
          jobseeker_id: jobseekerId,
          name_resume: formik.values.nameResume,
        },
      });
    },
  });

  return (
    <Box
      className={styles.container}
      color={useColorModeValue('gray.600', 'whiteAlpha.600')}
      _hover={hoverProps}
      onClick={onOpen}
    >
      <Icon as={FiPlusCircle} w={6} h={6} />
      <Text fontWeight='semibold' fontSize='sm' textAlign='center'>
        Создать новое резюме
      </Text>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader>Создание резюме</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div>
                <InputField
                  id='nameResume'
                  name='nameResume'
                  type='text'
                  placeholder='Название резюме'
                  onChange={formik.handleChange}
                  value={formik.values.nameResume}
                />
                <InputField
                  id='jobPosition'
                  name='jobPosition'
                  type='text'
                  placeholder='Должность'
                  onChange={formik.handleChange}
                  value={formik.values.jobPosition}
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                mr={3}
                colorScheme='blue'
                loadingText='Создание нового резюме'
                isLoading={status === Status.loading}
                type='submit'
              >
                Сохранить
              </Button>
              <Button variant='ghost' onClick={onClose}>
                Отмена
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateResumeCard;
