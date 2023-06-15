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
import { normalizeDate } from '@/utils/normalizeDate'
import Projects from './Projects/Projects'
import parse from 'html-react-parser'

interface IClassicTemplate {
  resumesData: Resumes[]
}

function ClassicTemplate({ resumesData }: IClassicTemplate) {
  const userData = resumesData[0]

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
              {joinName(
                userData.resumes_jobseeker?.lastName!,
                userData.resumes_jobseeker?.name!,
                userData.resumes_jobseeker?.middleName!
              ) || ''}
            </Text>
            <Text
              fontSize="22px"
              lineHeight="1.2em"
              color="#525252"
              textTransform="uppercase"
            >
              {userData.desired_position || ''}
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
                  Россия, Норильск
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
                  Возраст:{' '}
                  {calculateAgeWithUnit(userData.resumes_jobseeker?.dateBirth!)}
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
          {userData.experience_works.length !== 0 && (
            <section className={styles.main_left_experienceWork}>
              <div className={styles.main_left_experienceWork_header}>
                <Text className={styles.main_left_experienceWork_header_title}>
                  Опыт работы
                </Text>
              </div>
              {userData.experience_works.map((experienceWork, index) => {
                return (
                  <div
                    className={styles.main_left_experienceWork_content}
                    key={index}
                  >
                    <div
                      className={
                        styles.main_left_experienceWork_content_companyName
                      }
                    >
                      <Text
                        className={
                          styles.main_left_experienceWork_content_companyName_text
                        }
                      >
                        {experienceWork.name_company}
                      </Text>
                      <Text
                        className={
                          styles.main_left_experienceWork_content_companyName_textDate
                        }
                      >
                        {normalizeDate(
                          experienceWork.date_employment as string
                        )}{' '}
                        -{' '}
                        {experienceWork.date_dismissal === ''
                          ? ' по н.в'
                          : normalizeDate(
                              experienceWork.date_dismissal as string
                            )}
                      </Text>
                    </div>
                    <Text
                      className={
                        styles.main_left_experienceWork_content_jobseekerPosition
                      }
                    >
                      {experienceWork.jobposition}
                    </Text>
                    <div
                      className={
                        styles.main_left_experienceWork_content_description
                      }
                    >
                      <Text
                        className={
                          styles.main_left_experienceWork_content_description_text
                        }
                      >
                        {parse(experienceWork.description as string)}
                      </Text>
                    </div>
                  </div>
                )
              })}
            </section>
          )}

          {/* Образование */}
          <section className={styles.main_left_educations}>
            <Educations userData={userData} />
          </section>
          {userData.resumes_projects.length !== 0 && (
            <section className={styles.main_left_educations}>
              <Projects userData={userData} />
            </section>
          )}

          {/* Навыки */}
          <section>
            <Skills userData={userData} />
          </section>
          {/* О себе */}
          {userData.about_me && (
            <section>
              <AboutMe userData={userData} />
            </section>
          )}
        </div>

        <div className={styles.main_right}>
          {/* Контакты */}
          <section className={styles.main_right_contacts}>
            <Text className={styles.main_right_contacts_title}>Контакты</Text>
            {userData.resumes_jobseeker?.phone && (
              <div className={styles.main_right_contacts_block}>
                <ImPhone />
                <Text>{userData.resumes_jobseeker?.phone as string}</Text>
              </div>
            )}
            {userData.resumes_jobseeker?.email && (
              <div className={styles.main_right_contacts_block}>
                <MdEmail />
                <Text>{userData.resumes_jobseeker?.email as string}</Text>
              </div>
            )}
          </section>
          {/* Языки */}
          {userData.languages.length !== 0 && (
            <section className={styles.main_right_languages}>
              <Text className={styles.main_right_languages_title}>Языки</Text>
              {userData.languages.map((language, index) => {
                return (
                  <div
                    className={styles.main_right_languages_content}
                    key={index}
                  >
                    <Text
                      className={styles.main_right_languages_content_language}
                    >
                      {language.language_name}
                    </Text>
                    -
                    <Text className={styles.main_right_languages_content_level}>
                      {language.language_level}
                    </Text>
                  </div>
                )
              })}
            </section>
          )}

          {/* Хобби */}
          {userData.resumes_hobbies.length !== 0 && (
            <section className={styles.main_right_hobby}>
              <Hobby userData={userData} />
            </section>
          )}

          {/* Курсы */}
          {userData.resumes_courses.length !== 0 && (
            <section className={styles.main_left_course}>
              <Course userData={userData} />
            </section>
          )}

          {/* Языки программирования */}
          {userData.programming_languages && (
            <section className={styles.main_right_programmingLanguages}>
              <ProgrammingLanguages userData={userData} />
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default ClassicTemplate
