import { baseUrl } from "@/src/config/apis";
import { CustomSectionObject } from "@/src/modules/UserInput/Custom/types";
import { EducationDataObject } from "@/src/modules/UserInput/Education/types";
import { ExperienceDataObject } from "@/src/modules/UserInput/Experience/types";
import { ProjectDataObject } from "@/src/modules/UserInput/Projects/types";
import axios from "axios";
import getHeaders from "../src/utils/headers";

/**
 * Higher order function to perform PATCH requests on different sections.
 * @param endpoint Enpoint to patch the data on. example - "/resume/education" or "/resume/project"
 * @returns A promise to patch the given section of the resume
 */
const patchSection =
  <T extends unknown>(endpoint: string) =>
  async (token: string = null, resumeId: string, body: Array<T>) => {
    const res = await axios.patch(`${baseUrl}/${endpoint}/${resumeId}`, body, {
      headers: getHeaders(token)
    });

    return res.data;
  };

/**
 * Updates Education Array
 */
export const patchEducation =
  patchSection<EducationDataObject>("resume/education");

/**
 * Updates Experience Array
 */
export const patchExperience =
  patchSection<ExperienceDataObject>("resume/experience");

/**
 * Updates Projects Array
 */
export const patchProjects = patchSection<ProjectDataObject>("resume/project");

/**
 * Updates Publications Array
 */
export const patchPublication =
  patchSection<ProjectDataObject>("resume/publication");

/**
 * Updates Certifications Array
 */
export const patchCertifications = patchSection<ProjectDataObject>(
  "resume/certification"
);

/**
 * Updates Custom Sections Array
 */
export const patchCustomSections = patchSection<CustomSectionObject>(
  "resume/customsection"
);
