import Footer from '@/components/Footer/Footer';
import BoxHeader from '@/components/Home/BoxHeader';
import InputField from '@/components/InputFieldCustom/InputField';
import ScreenCenter from '@/components/ScreenCenter';
import { Status } from '@/constants';
import { useEmailValidation } from '@/hooks/useEmailValidation';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa';

const LoginHelp: NextPage = () => {
  const [email, setEmail] = useState('');
  const [validEmail, errorMessage] = useEmailValidation(email);
  const [status, setStatus] = useState<Status>(Status.idle);
  const [showError, setShowError] = useState(false);

  const handleInputField = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e) => {
    //Submit on capturing Enter key (code = 13)
    if (e.keyCode === 13) handleSubmit();
  };
  const handleSubmit = () => {
    // setStatus(Status.loading);
    // setStatus(Status.success);
    // toast({
    //   title: 'Отправлены инструкции по сбросу пароля',
    //   description: `Проверьте свой почтовый ящик для получения дальнейших инструкций. Теперь вы можете вернуться на страницу входа в систему.`,
    //   status: 'success',
    //   duration: 5000,
    //   isClosable: true,
    // });
    // setStatus(Status.error);
    // toast({
    //   title: 'Не удалось отправить инструкции по сбросу пароля',
    //   description: err.message,
    //   status: 'error',
    //   duration: 5000,
    //   isClosable: true,
    // });
  };

  return (
    <>
      <ScreenCenter>
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          p={{ base: '2rem', md: '4rem' }}
          borderRadius='10px'
          shadow={useColorModeValue('lg', '2xl')}
          flexBasis={{ base: '90%', md: '60%', lg: '40%' }}
        >
          <BoxHeader
            title='Забыли пароль?'
            subtitle='Введите свой адрес электронной почты для получения инструкций по сбросу пароля'
          />
          <InputField
            label='Email'
            type='email'
            onChange={handleInputField}
            isValid={validEmail}
            error={{ message: errorMessage, show: showError && !validEmail }}
            onFocus={() => setShowError(true)}
            onKeyDown={handleKeyPress}
          />
          <Button
            fontWeight='medium'
            variant='solid'
            colorScheme='purple'
            mt='2'
            isLoading={status === Status.loading}
            isDisabled={!validEmail}
            type='submit'
          >
            <AiOutlineMail style={{ marginRight: '8px' }} />
            Отправить инструкции
          </Button>
          <Link href='/login'>
            <Button
              fontWeight='medium'
              colorScheme={useColorModeValue('blackAlpha', 'gray')}
              variant='ghost'
              my='4'
            >
              <FaChevronLeft style={{ paddingRight: '8px' }} /> Вернуться к
              странице авторизации
            </Button>
          </Link>
        </Box>
      </ScreenCenter>
      <Footer />
    </>
  );
};

export default LoginHelp;
