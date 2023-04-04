import Footer from '@/components/Footer/Footer';
import Layout from '@/components/layouts';
import { sectionEditor } from '@/configs/sectionEditor';
import NameAndJobTitle from '@/modules/UserInput/NameAndJobTitle';
import { Box } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import styles from '@/styles/Create.module.scss';

const Create = () => {
  return (
    <div className={styles.container}>
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
      {/* <Viewer aria-label='Resume Preview' flexBasis='50%' withStatus /> */}
      <Footer />
    </div>
  );
};

export default Create;
