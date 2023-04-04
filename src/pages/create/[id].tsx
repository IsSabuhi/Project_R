import Layout from '@/components/layouts';
import { sectionEditor } from '@/configs/sectionEditor';
import NameAndJobTitle from '@/modules/UserInput/NameAndJobTitle';
import { Box } from '@chakra-ui/react';
import React, { Fragment } from 'react';

const Create = () => {
  return (
    <div>
      <Layout py='5'>
        <Box
          aria-label='Resume Inputs'
          flexBasis='50%'
          className='resume-inputs'
        >
          <NameAndJobTitle />

          {/* <Contacts /> */}
          {sectionEditor.map((item) => (
            <Fragment key={item.id}>{item.components}</Fragment>
          ))}
        </Box>
      </Layout>
    </div>
  );
};

export default Create;
