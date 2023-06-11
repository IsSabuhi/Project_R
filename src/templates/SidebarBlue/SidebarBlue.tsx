import React from 'react'
import styles from './SidebarBlue.module.scss'
import { Avatar, Flex, Icon, Text } from '@chakra-ui/react'
import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import HeaderContent from './HeaderContent/HeaderContent'
import ExperienceWork from './ExperienceWork/ExperienceWork'
import Education from './Education/Education'
import Course from './Course/Course'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import AboutMe from './AboutMe/AboutMe'
import { Resumes } from '@/generated/projectR-hasura'
import { getYearFromDate } from '@/utils/normalizeDate'

interface ISidebarBlue {
  resumesData: Resumes[]
}

const SidebarBlue = ({ resumesData }: ISidebarBlue) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_avatar}>
          <Avatar />
        </div>

        {/* Контакты */}
        {resumesData[0]?.resumes_jobseeker && (
          <section className={styles.sidebar_contacts}>
            <div className={styles.sidebar_contacts_title}>
              <Text className={styles.sidebar_contacts_title_text}>
                Контакты
              </Text>
            </div>
            <Flex gap={4} alignItems="center" paddingInline="10px" mt={2}>
              <Icon as={HiOutlinePhone} />
              {resumesData[0]?.resumes_jobseeker?.phone && (
                <Text>{resumesData[0].resumes_jobseeker?.phone}</Text>
              )}
            </Flex>
            <Flex gap={4} alignItems="center" paddingInline="10px">
              <Icon as={AiOutlineMail} />
              {resumesData[0].resumes_jobseeker?.email && (
                <Text>{resumesData[0].resumes_jobseeker?.email}</Text>
              )}
            </Flex>
          </section>
        )}

        {/* Языки */}
        {resumesData[0].languages.length != 0 && (
          <section className={styles.sidebar_languages}>
            <div className={styles.sidebar_languages_title}>
              <Text className={styles.sidebar_languages_title_text}>Языки</Text>
            </div>
            {resumesData[0].languages.map((language, index) => {
              return (
                <Flex
                  justifyContent="space-between"
                  paddingInline="10px"
                  mt={2}
                  key={index}
                >
                  <Text>{language.language_name}</Text>
                  <Text>{language.language_level}</Text>
                </Flex>
              )
            })}
          </section>
        )}

        {/* Курсы */}
        {resumesData[0].resumes_courses && (
          <section className={styles.sidebar_course}>
            <div className={styles.sidebar_course_title}>
              <Text className={styles.sidebar_course_title_text}>Курсы</Text>
            </div>
            {resumesData[0].resumes_courses.map((course, index) => {
              return (
                <div className={styles.sidebar_course_content} key={index}>
                  <Flex flexDirection="column">
                    <Text className={styles.sidebar_course_content_title}>
                      <li>{course.course_location}</li>
                    </Text>
                    <Text className={styles.sidebar_course_content_name}>
                      {course.course_name}
                    </Text>
                  </Flex>
                  <Text>{getYearFromDate(course.date_receipt as string)}</Text>
                </div>
              )
            })}
          </section>
        )}

        {/* Хобби */}
        {resumesData[0].resumes_hobbies.length != 0 && (
          <section className={styles.sidebar_hobby}>
            <div className={styles.sidebar_hobby_title}>
              <Text className={styles.sidebar_hobby_title_text}>Хобби</Text>
            </div>
            <div className={styles.sidebar_hobby_content}>
              {resumesData[0].resumes_hobbies.map((hobbi, index) => {
                return (
                  <Text key={index}>
                    <li>{hobbi.description}</li>
                  </Text>
                )
              })}
            </div>
          </section>
        )}
      </div>

      <div className={styles.main}>
        <HeaderContent resumeData={resumesData} />

        {resumesData[0].experience_works && (
          <section className={styles.main_experienceWork}>
            <ExperienceWork resumeData={resumesData} />
          </section>
        )}

        {resumesData[0].resumes_jobseeker?.jobseeker_educations && (
          <section className={styles.main_educations}>
            <Education resumeData={resumesData} />
          </section>
        )}

        {resumesData[0].resumes_projects && (
          <section className={styles.main_project}>
            <Project resumeData={resumesData} />
          </section>
        )}

        <section className={styles.main_skills}>
          <Skills resumeData={resumesData} />
        </section>

        {resumesData[0].about_me && (
          <section className={styles.main_skills}>
            <AboutMe resumeData={resumesData} />
          </section>
        )}
      </div>
    </div>
  )
}

export default SidebarBlue
