import Section from '@/components/layouts/Section';
import TooltipIconButton from '@/components/TooltipIconButton';
import { HStack } from '@chakra-ui/react';
import React from 'react';
import { FiEye, FiEyeOff, FiPlus } from 'react-icons/fi';

const Educations = () => {
  const isDisabled = false;

  return (
    <Section title='Образование' mb='2'>
      <HStack mb='4' spacing='4'>
        <TooltipIconButton
          label='Добавить данные о образовании'
          aria-label='New-Education'
          icon={<FiPlus />}
          // onClick={handleAdd}
        />
        <TooltipIconButton
          aria-label='Toggle Visibility'
          label='Переключать видимость'
          icon={isDisabled ? <FiEyeOff /> : <FiEye />}
          //   onClick={toggleDisabled}
          colorScheme={isDisabled ? 'red' : ''}
        />
      </HStack>
    </Section>
  );
};

export default Educations;
