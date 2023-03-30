import React from 'react';
import BoxHeader from './BoxHeader';

const ResumeList = () => {
  return (
    <div>
      <BoxHeader
        title='Мои резюме'
        subtitle='Выберите резюме, чтобы начать редактирование'
        size={{ title: '4xl', subtitle: 'md' }}
        titleProps={{ as: 'h1', letterSpacing: 'tight' }}
        spacing='0'
      />
    </div>
  );
};

export default ResumeList;
