import React from 'react'
import styles from './ClassicTemplate.module.scss'
import { Avatar, Box, Divider, Heading, Text } from '@chakra-ui/react'
import { BiMap } from 'react-icons/bi'
import { FaInfo } from 'react-icons/fa'

function ClassicTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <div className={styles.container_top_text}>
          <Text
            fontSize="40px"
            lineHeight="1.1em"
            fontWeight="600"
            textTransform="uppercase"
            whiteSpace="nowrap"
          >
            Jobseeker name
          </Text>
          <Text
            fontSize="22px"
            lineHeight="1.2em"
            color="#525252"
            textTransform="uppercase"
          >
            Jobseeker position
          </Text>
          <div className={styles.container_top__text_bottom}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <BiMap />
              <Text fontSize="14px" color="#525252">
                Jobseeker city
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <FaInfo />
              <Text fontSize="14px" color="#525252">
                Jobseeker age
              </Text>
            </Box>
          </div>
        </div>
        <Avatar
          sx={{
            boxShadow: '0 0 2px rgba(0,0,0,0.5)',
            width: '100px',
            minHeight: '100px',
          }}
        />
      </div>
      <Divider />
      <div className={styles.main}>
        <div className={styles.main_left}>
          <section className={styles.main_left_experienceWork}>
            <div className={styles.main_left_experienceWork_header}>
              <Text
                fontSize="17px"
                fontWeight="600"
                color="#000"
                lineHeight="34px"
              >
                Опыт работы
              </Text>
            </div>
          </section>
        </div>
        <div className={styles.main_right}></div>
      </div>
    </div>
  )
}

export default ClassicTemplate
