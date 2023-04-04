import { Status } from '@/constants';
import {
  Jobseeker,
  useGetJobseekerProfileQuery,
  useUpdateJobseekerProfileMutation,
} from '@/generated/projectR-hasura';
import { useAuthContext } from '@/hooks/use-auth-context';
import { comName } from '@/utils/comName';
import { Box, Button, Divider, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import BoxHeader from '../../BoxHeader';

const initialProfile: Partial<Jobseeker> = {
  lastName: '',
  name: '',
  middleName: '',
  dateBirth: '',
  phone: '',
  email: ' ',
};

const PersonalDetails = () => {
  const [status, setStatus] = useState<Status>(Status.idle);

  const { enqueueSnackbar } = useSnackbar();

  const { userId } = useAuthContext();

  const [values, setValues] = React.useState(initialProfile);

  const [updateJobseekerProfileMutation] = useUpdateJobseekerProfileMutation({
    onCompleted() {
      setStatus(Status.success);
      return enqueueSnackbar('Данные успешно сохранены', {
        variant: 'success',
      });
    },
  });

  const { data, loading, error } = useGetJobseekerProfileQuery({
    variables: {
      _eq: userId,
    },
    onCompleted(data) {
      setValues(data.jobseeker[0]);
      setStatus(Status.success);
    },
    onError(error) {
      console.log(error.graphQLErrors);
      setStatus(Status.error);
      return enqueueSnackbar('Произошла неизвестная ошибка', {
        variant: 'error',
      });
    },
  });

  const userData = data?.jobseeker[0];

  const formik = useFormik({
    initialValues: values,
    enableReinitialize: true,
    onSubmit: () => {
      updateJobseekerProfileMutation({
        variables: {
          _eq: userId,
          dateBirth: formik.values.dateBirth,
          email: formik.values.email,
          phone: formik.values.phone,
        },
      });
    },
  });

  const handleChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(name, value);
  };

  return (
    <Box mb='8'>
      <form onSubmit={formik.handleSubmit}>
        <Box mb='8'>
          <BoxHeader
            title='Полное имя'
            subtitle='Это имя, которое отображается в вашем общедоступном профиле'
            size={{ title: 'lg', subtitle: 'sm' }}
            mb='2.5'
          />
          <Input
            maxW='80'
            variant='outline'
            name='displayName'
            value={comName(
              userData?.lastName!,
              userData?.name!,
              userData?.middleName!
            )}
            disabled
          />
        </Box>
        <Box mb='8'>
          <BoxHeader
            title='Дата рождения'
            size={{ title: 'lg', subtitle: 'sm' }}
            mb='2.5'
          />
          <Input
            maxW='80'
            variant='outline'
            name='dateBirth'
            type='date'
            onChange={(event) => {
              handleChangeField(event as React.ChangeEvent<HTMLInputElement>);
            }}
            value={formik.values.dateBirth || ''}
          />
        </Box>
        <Box mb='8'>
          <BoxHeader
            title='Основной адрес электронной почты'
            subtitle='Это электронная почта, используемая для всех основных сообщений.'
            size={{ title: 'lg', subtitle: 'sm' }}
            mb='2.5'
          />
          <Input
            maxW='80'
            variant='outline'
            name='email'
            onChange={(event) => {
              handleChangeField(event as React.ChangeEvent<HTMLInputElement>);
            }}
            value={formik.values.email || ''}
          />
        </Box>
        <Box mb='8'>
          <BoxHeader
            title='Телефон'
            subtitle='Ваш номер телефона'
            size={{ title: 'lg', subtitle: 'sm' }}
            mb='2.5'
          />
          <Input
            maxW='80'
            variant='outline'
            name='phone'
            type='tel'
            onChange={(event) => {
              handleChangeField(event as React.ChangeEvent<HTMLInputElement>);
            }}
            value={formik.values.phone || ''}
          />
        </Box>
        <Button
          type='submit'
          colorScheme='green'
          mb='2'
          size='sm'
          isLoading={status === Status.loading}
          loadingText='Saving changes'
        >
          Сохранить изменения
        </Button>
      </form>
      <Divider />
    </Box>
  );
};

export default PersonalDetails;
