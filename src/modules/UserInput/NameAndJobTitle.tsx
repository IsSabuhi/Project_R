import InputField from '@/components/InputFieldCustom/InputField';
import Section from '@/components/layouts/Section';
import React from 'react';

const NameAndJobTitle = () => {
  return (
    <Section
      title='Давайте рассмотрим некоторую основную информацию'
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <InputField
        labelProps={{ fontSize: 'sm' }}
        label='Полное имя'
        name='fullName'
      />
      <InputField
        labelProps={{ fontSize: 'sm' }}
        label='Должность'
        name='jobTitle'
      />
    </Section>
  );
};

export default NameAndJobTitle;
