
export type UpdateAction = (index: number, key: string, value: any) => void;

export interface Store<ObjectType> {
  data: Array<ObjectType>;
  setData?: (list: Array<ObjectType>) => void;
  add: (obj: ObjectType) => void;
  update: UpdateAction;
}

export type InputSectionKeys = Sections;

export type HeaderElements = "USER_IMAGE" | "SOCIAL_HANDLES" | "NAME_AND_JT";
export type FooterElements = "WATERMARK" | "DATE" | "DATE_W" | "CUSTOM";

export type Sections =
  | "EDUCATION"
  | "EXPERIENCE"
  | "PROJECTS"
  | "CERTIFICATIONS"
  | "PUBLICATIONS"
  | "SKILLS";

export type FontProfile = "CLASSIC" | "POISE" | "SENIOR" | "MAGAZINE";
export type ColorProfiles =
  | "blue"
  | "purple"
  | "yellow"
  | "red"
  | "pink"
  | string;

export type ResumeInputsArray = Array<Sections>;
export interface ResumeLayoutObject {
    header: Array<Array<HeaderElements>>;
    body: Array<ResumeInputsArray>;
    footer: Array<FooterElements>;
}

interface ResumeProperties {
    inputs: Array<Sections>;
    layout: ResumeLayoutObject;
}

export interface ResumeStore {
    _id: string; 
    properties: ResumeProperties;
    fontProfile?: FontProfile;
    spacing?: number;
    color?: ColorProfiles;
    setProperty?: (key: string, value: any) => void;
    updateInputs?: (arr: ResumeProperties["inputs"]) => void;
    updateLayout?: (key: string, value: any) => void;
    setFontProfile?: (value: FontProfile) => void;
    setColorProfile?: (value: ColorProfiles | string) => void;
    setSpacing?: (value: number) => void;
  }
  

export interface SectionHints {
  title: string;
  content: Array<{ type: "p" | "ul"; body: Array<string> | string }>;
}
