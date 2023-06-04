import React from 'react'
import styles from './ClassicTemplate.module.scss'
import { Avatar, Box, Text } from '@chakra-ui/react'
import { BiMap } from 'react-icons/bi'
import { FaInfo } from 'react-icons/fa'
import { ImPhone } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import Educations from './Educations/Educations'
import Course from './Course/Course'
import Skills from './Skills/Skills'
import AboutMe from './AboutMe/AboutMe'
import ProgrammingLanguages from './ProgrammingLanguages/ProgrammingLanguages'
import Hobby from './Hobby/Hobby'
import { Resumes } from '@/generated/projectR-hasura'
import { joinName } from '@/utils/joinName'
import { calculateAgeWithUnit } from '@/utils/calculateAge'

interface IClassicTemplate {
  userResumeData: Resumes
}

function ClassicTemplate({ userResumeData }: IClassicTemplate) {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <div className={styles.container_top_content}>
          <div className={styles.container_top_text}>
            <Text
              fontSize="40px"
              lineHeight="1.1em"
              fontWeight="600"
              textTransform="uppercase"
              maxWidth="500px"
            >
              {/* {joinName(
                userResumeData.resumes_jobseeker?.lastName!,
                userResumeData.resumes_jobseeker?.name!,
                userResumeData.resumes_jobseeker?.middleName!
              ) || ''} */}
              Исрафилов Сабухи Мадад оглы
            </Text>
            <Text
              fontSize="22px"
              lineHeight="1.2em"
              color="#525252"
              textTransform="uppercase"
            >
              {/* {userResumeData.desired_position || ''} */}
              React Developer
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
                  Норильск
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
                  Возраст:
                  {/* {calculateAgeWithUnit(
                    userResumeData.resumes_jobseeker?.dateBirth!
                  )} */}
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
        <div className={styles.container_top_line}>
          <div className={styles.container_top_line_hr}></div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main_left}>
          {/* Опыт работы */}
          <section className={styles.main_left_experienceWork}>
            <div className={styles.main_left_experienceWork_header}>
              <Text className={styles.main_left_experienceWork_header_title}>
                Опыт работы
              </Text>
            </div>
            <div className={styles.main_left_experienceWork_content}>
              <div
                className={styles.main_left_experienceWork_content_companyName}
              >
                <Text
                  className={
                    styles.main_left_experienceWork_content_companyName_text
                  }
                >
                  IT Developers
                </Text>
                <Text
                  className={
                    styles.main_left_experienceWork_content_companyName_textDate
                  }
                >
                  Январь 2020 - Август 2020
                </Text>
              </div>
              <Text
                className={
                  styles.main_left_experienceWork_content_jobseekerPosition
                }
              >
                Программист
              </Text>
              <div
                className={styles.main_left_experienceWork_content_description}
              >
                <Text
                  className={
                    styles.main_left_experienceWork_content_description_text
                  }
                >
                  Доработка сайта и создания веб-приложений с нуля на React;
                  Занимался рефакторингом; Использовал Django, Celery, DRF,
                  MySQL.
                </Text>
              </div>
            </div>
          </section>
          {/* Образование */}
          <section className={styles.main_left_educations}>
            <Educations />
          </section>
          {/* Курсы */}
          <section className={styles.main_left_course}>
            <Course />
          </section>
          {/* Навыки */}
          <section>
            <Skills />
          </section>
          {/* О себе */}
          <section>
            <AboutMe />
          </section>
        </div>

        <div className={styles.main_right}>
          {/* Контакты */}
          <section className={styles.main_right_contacts}>
            <Text className={styles.main_right_contacts_title}>Контакты</Text>
            <div className={styles.main_right_contacts_block}>
              <ImPhone />
              <Text>89999999999</Text>
            </div>
            <div className={styles.main_right_contacts_block}>
              <MdEmail />
              <Text>qwerty@gmail.com</Text>
            </div>
          </section>
          {/* Языки */}
          <section className={styles.main_right_languages}>
            <Text className={styles.main_right_languages_title}>Языки</Text>
            <div className={styles.main_right_languages_content}>
              <Text className={styles.main_right_languages_content_language}>
                Английский
              </Text>
              -
              <Text className={styles.main_right_languages_content_level}>
                A1 - Начальный
              </Text>
            </div>
          </section>
          {/* Хобби */}
          <section className={styles.main_right_hobby}>
            <Hobby />
          </section>
          {/* Языки программирования */}
          <section className={styles.main_right_programmingLanguages}>
            <ProgrammingLanguages />
          </section>
        </div>
      </div>
    </div>
  )
}

export default ClassicTemplate
