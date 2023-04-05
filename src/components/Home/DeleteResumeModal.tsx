import { Status } from '@/constants';
import { Resume, useDeleteResumeMutation } from '@/generated/projectR-hasura';
import { Button, useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
const ActionModal = dynamic(() => import('@/components/ActionModal'));

interface Props {
  resumeObject: Partial<Resume>;
}

const DeleteResumeModal: React.FC<Props> = ({ resumeObject }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState<Status>(Status.idle);

  const { enqueueSnackbar } = useSnackbar();

  const [deleteResumeMutation, { data, loading, error }] =
    useDeleteResumeMutation({
      variables: {
        resume_id: resumeObject.resume_id,
      },
      onCompleted() {
        setStatus(Status.success);
        onClose();
        return enqueueSnackbar('Резюме успешно удалено', {
          variant: 'success',
        });
      },
      onError(data) {
        setStatus(Status.error);
        return enqueueSnackbar('Не удалось удалить резюме', {
          variant: 'error',
        });
      },
    });

  return (
    <>
      <Button colorScheme='red' variant='ghost' size='sm' onClick={onOpen}>
        Удалить
      </Button>
      <ActionModal
        title='Вы действительно хотите удалить это резюме ?'
        buttonText='Удалить'
        isOpen={isOpen}
        onClose={onClose}
        onClick={deleteResumeMutation}
        actionButtonProps={{
          isLoading: status === Status.loading,
          loadingText: 'Удаление',
        }}
      >
        Вы уверены, что хотите удалить это{' '}
        <strong>{resumeObject.name_resume}</strong> резюме? Это действие
        является необратимым.
      </ActionModal>
    </>
  );
};

export default DeleteResumeModal;
