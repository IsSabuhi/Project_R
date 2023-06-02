import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  time: string;
  timestamp: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  account_id: Scalars['uuid'];
  /** An array relationship */
  account_jobseeker: Array<Jobseeker>;
  /** An aggregate relationship */
  account_jobseeker_aggregate: Jobseeker_Aggregate;
  /** An array relationship */
  account_organization: Array<Organization>;
  /** An aggregate relationship */
  account_organization_aggregate: Organization_Aggregate;
  avatar?: Maybe<Scalars['String']>;
  expired_token_time?: Maybe<Scalars['time']>;
  login: Scalars['String'];
  password: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


/** columns and relationships of "account" */
export type AccountAccount_JobseekerArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountAccount_Jobseeker_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountAccount_OrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountAccount_Organization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  account_jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  account_jobseeker_aggregate?: InputMaybe<Jobseeker_Aggregate_Bool_Exp>;
  account_organization?: InputMaybe<Organization_Bool_Exp>;
  account_organization_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  expired_token_time?: InputMaybe<Time_Comparison_Exp>;
  login?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint on columns "refreshToken" */
  AccountRefreshTokenKey = 'account_RefreshToken_key',
  /** unique or primary key constraint on columns "login" */
  AccountLoginKey = 'account_login_key',
  /** unique or primary key constraint on columns "account_id" */
  AccountPkey = 'account_pkey'
}

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  account_jobseeker?: InputMaybe<Jobseeker_Arr_Rel_Insert_Input>;
  account_organization?: InputMaybe<Organization_Arr_Rel_Insert_Input>;
  avatar?: InputMaybe<Scalars['String']>;
  expired_token_time?: InputMaybe<Scalars['time']>;
  login?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  avatar?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  avatar?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  account_id?: InputMaybe<Order_By>;
  account_jobseeker_aggregate?: InputMaybe<Jobseeker_Aggregate_Order_By>;
  account_organization_aggregate?: InputMaybe<Organization_Aggregate_Order_By>;
  avatar?: InputMaybe<Order_By>;
  expired_token_time?: InputMaybe<Order_By>;
  login?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  account_id: Scalars['uuid'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  ExpiredTokenTime = 'expired_token_time',
  /** column name */
  Login = 'login',
  /** column name */
  Password = 'password',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  avatar?: InputMaybe<Scalars['String']>;
  expired_token_time?: InputMaybe<Scalars['time']>;
  login?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  avatar?: InputMaybe<Scalars['String']>;
  expired_token_time?: InputMaybe<Scalars['time']>;
  login?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  ExpiredTokenTime = 'expired_token_time',
  /** column name */
  Login = 'login',
  /** column name */
  Password = 'password',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  Role = 'role'
}

export type Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Bool_Exp;
};

/** columns and relationships of "course" */
export type Course = {
  __typename?: 'course';
  course_id: Scalars['uuid'];
  course_location: Scalars['String'];
  course_name: Scalars['String'];
  /** An object relationship */
  course_resume: Resumes;
  date_receipt?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  resume_id: Scalars['uuid'];
};

/** aggregated selection of "course" */
export type Course_Aggregate = {
  __typename?: 'course_aggregate';
  aggregate?: Maybe<Course_Aggregate_Fields>;
  nodes: Array<Course>;
};

export type Course_Aggregate_Bool_Exp = {
  count?: InputMaybe<Course_Aggregate_Bool_Exp_Count>;
};

export type Course_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Course_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Course_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "course" */
export type Course_Aggregate_Fields = {
  __typename?: 'course_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Course_Max_Fields>;
  min?: Maybe<Course_Min_Fields>;
};


/** aggregate fields of "course" */
export type Course_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course" */
export type Course_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Course_Max_Order_By>;
  min?: InputMaybe<Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "course" */
export type Course_Arr_Rel_Insert_Input = {
  data: Array<Course_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Course_On_Conflict>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type Course_Bool_Exp = {
  _and?: InputMaybe<Array<Course_Bool_Exp>>;
  _not?: InputMaybe<Course_Bool_Exp>;
  _or?: InputMaybe<Array<Course_Bool_Exp>>;
  course_id?: InputMaybe<Uuid_Comparison_Exp>;
  course_location?: InputMaybe<String_Comparison_Exp>;
  course_name?: InputMaybe<String_Comparison_Exp>;
  course_resume?: InputMaybe<Resumes_Bool_Exp>;
  date_receipt?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "course" */
export enum Course_Constraint {
  /** unique or primary key constraint on columns "course_id" */
  CourseWorkPkey = 'course_work_pkey'
}

/** input type for inserting data into table "course" */
export type Course_Insert_Input = {
  course_id?: InputMaybe<Scalars['uuid']>;
  course_location?: InputMaybe<Scalars['String']>;
  course_name?: InputMaybe<Scalars['String']>;
  course_resume?: InputMaybe<Resumes_Obj_Rel_Insert_Input>;
  date_receipt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Course_Max_Fields = {
  __typename?: 'course_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  course_location?: Maybe<Scalars['String']>;
  course_name?: Maybe<Scalars['String']>;
  date_receipt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "course" */
export type Course_Max_Order_By = {
  course_id?: InputMaybe<Order_By>;
  course_location?: InputMaybe<Order_By>;
  course_name?: InputMaybe<Order_By>;
  date_receipt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Min_Fields = {
  __typename?: 'course_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  course_location?: Maybe<Scalars['String']>;
  course_name?: Maybe<Scalars['String']>;
  date_receipt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "course" */
export type Course_Min_Order_By = {
  course_id?: InputMaybe<Order_By>;
  course_location?: InputMaybe<Order_By>;
  course_name?: InputMaybe<Order_By>;
  date_receipt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "course" */
export type Course_Mutation_Response = {
  __typename?: 'course_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Course>;
};

/** on_conflict condition type for table "course" */
export type Course_On_Conflict = {
  constraint: Course_Constraint;
  update_columns?: Array<Course_Update_Column>;
  where?: InputMaybe<Course_Bool_Exp>;
};

/** Ordering options when selecting data from "course". */
export type Course_Order_By = {
  course_id?: InputMaybe<Order_By>;
  course_location?: InputMaybe<Order_By>;
  course_name?: InputMaybe<Order_By>;
  course_resume?: InputMaybe<Resumes_Order_By>;
  date_receipt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: course */
export type Course_Pk_Columns_Input = {
  course_id: Scalars['uuid'];
};

/** select columns of table "course" */
export enum Course_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CourseLocation = 'course_location',
  /** column name */
  CourseName = 'course_name',
  /** column name */
  DateReceipt = 'date_receipt',
  /** column name */
  Description = 'description',
  /** column name */
  ResumeId = 'resume_id'
}

/** input type for updating data in table "course" */
export type Course_Set_Input = {
  course_id?: InputMaybe<Scalars['uuid']>;
  course_location?: InputMaybe<Scalars['String']>;
  course_name?: InputMaybe<Scalars['String']>;
  date_receipt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "course" */
export type Course_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Course_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Course_Stream_Cursor_Value_Input = {
  course_id?: InputMaybe<Scalars['uuid']>;
  course_location?: InputMaybe<Scalars['String']>;
  course_name?: InputMaybe<Scalars['String']>;
  date_receipt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "course" */
export enum Course_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CourseLocation = 'course_location',
  /** column name */
  CourseName = 'course_name',
  /** column name */
  DateReceipt = 'date_receipt',
  /** column name */
  Description = 'description',
  /** column name */
  ResumeId = 'resume_id'
}

export type Course_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Course_Set_Input>;
  /** filter the rows which have to be updated */
  where: Course_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "educational_institution" */
export type Educational_Institution = {
  __typename?: 'educational_institution';
  educational_institution_id: Scalars['uuid'];
  /** An array relationship */
  educational_institution_jobseeker_educations: Array<Jobseeker_Education>;
  /** An aggregate relationship */
  educational_institution_jobseeker_educations_aggregate: Jobseeker_Education_Aggregate;
  /** An object relationship */
  educational_institution_location?: Maybe<Location>;
  icon?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['uuid']>;
  name_institution: Scalars['String'];
};


/** columns and relationships of "educational_institution" */
export type Educational_InstitutionEducational_Institution_Jobseeker_EducationsArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


/** columns and relationships of "educational_institution" */
export type Educational_InstitutionEducational_Institution_Jobseeker_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};

/** aggregated selection of "educational_institution" */
export type Educational_Institution_Aggregate = {
  __typename?: 'educational_institution_aggregate';
  aggregate?: Maybe<Educational_Institution_Aggregate_Fields>;
  nodes: Array<Educational_Institution>;
};

export type Educational_Institution_Aggregate_Bool_Exp = {
  count?: InputMaybe<Educational_Institution_Aggregate_Bool_Exp_Count>;
};

export type Educational_Institution_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Educational_Institution_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "educational_institution" */
export type Educational_Institution_Aggregate_Fields = {
  __typename?: 'educational_institution_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Educational_Institution_Max_Fields>;
  min?: Maybe<Educational_Institution_Min_Fields>;
};


/** aggregate fields of "educational_institution" */
export type Educational_Institution_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "educational_institution" */
export type Educational_Institution_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Educational_Institution_Max_Order_By>;
  min?: InputMaybe<Educational_Institution_Min_Order_By>;
};

/** input type for inserting array relation for remote table "educational_institution" */
export type Educational_Institution_Arr_Rel_Insert_Input = {
  data: Array<Educational_Institution_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Educational_Institution_On_Conflict>;
};

/** Boolean expression to filter rows from the table "educational_institution". All fields are combined with a logical 'AND'. */
export type Educational_Institution_Bool_Exp = {
  _and?: InputMaybe<Array<Educational_Institution_Bool_Exp>>;
  _not?: InputMaybe<Educational_Institution_Bool_Exp>;
  _or?: InputMaybe<Array<Educational_Institution_Bool_Exp>>;
  educational_institution_id?: InputMaybe<Uuid_Comparison_Exp>;
  educational_institution_jobseeker_educations?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  educational_institution_jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Bool_Exp>;
  educational_institution_location?: InputMaybe<Location_Bool_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  name_institution?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "educational_institution" */
export enum Educational_Institution_Constraint {
  /** unique or primary key constraint on columns "educational_institution_id" */
  EducationalInstitutionPkey = 'educational_institution_pkey'
}

/** input type for inserting data into table "educational_institution" */
export type Educational_Institution_Insert_Input = {
  educational_institution_id?: InputMaybe<Scalars['uuid']>;
  educational_institution_jobseeker_educations?: InputMaybe<Jobseeker_Education_Arr_Rel_Insert_Input>;
  educational_institution_location?: InputMaybe<Location_Obj_Rel_Insert_Input>;
  icon?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name_institution?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Educational_Institution_Max_Fields = {
  __typename?: 'educational_institution_max_fields';
  educational_institution_id?: Maybe<Scalars['uuid']>;
  icon?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['uuid']>;
  name_institution?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "educational_institution" */
export type Educational_Institution_Max_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name_institution?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Educational_Institution_Min_Fields = {
  __typename?: 'educational_institution_min_fields';
  educational_institution_id?: Maybe<Scalars['uuid']>;
  icon?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['uuid']>;
  name_institution?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "educational_institution" */
export type Educational_Institution_Min_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name_institution?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "educational_institution" */
export type Educational_Institution_Mutation_Response = {
  __typename?: 'educational_institution_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Educational_Institution>;
};

/** input type for inserting object relation for remote table "educational_institution" */
export type Educational_Institution_Obj_Rel_Insert_Input = {
  data: Educational_Institution_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Educational_Institution_On_Conflict>;
};

/** on_conflict condition type for table "educational_institution" */
export type Educational_Institution_On_Conflict = {
  constraint: Educational_Institution_Constraint;
  update_columns?: Array<Educational_Institution_Update_Column>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};

/** Ordering options when selecting data from "educational_institution". */
export type Educational_Institution_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>;
  educational_institution_jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Order_By>;
  educational_institution_location?: InputMaybe<Location_Order_By>;
  icon?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name_institution?: InputMaybe<Order_By>;
};

/** primary key columns input for table: educational_institution */
export type Educational_Institution_Pk_Columns_Input = {
  educational_institution_id: Scalars['uuid'];
};

/** select columns of table "educational_institution" */
export enum Educational_Institution_Select_Column {
  /** column name */
  EducationalInstitutionId = 'educational_institution_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  NameInstitution = 'name_institution'
}

/** input type for updating data in table "educational_institution" */
export type Educational_Institution_Set_Input = {
  educational_institution_id?: InputMaybe<Scalars['uuid']>;
  icon?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name_institution?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "educational_institution" */
export type Educational_Institution_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Educational_Institution_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Educational_Institution_Stream_Cursor_Value_Input = {
  educational_institution_id?: InputMaybe<Scalars['uuid']>;
  icon?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name_institution?: InputMaybe<Scalars['String']>;
};

/** update columns of table "educational_institution" */
export enum Educational_Institution_Update_Column {
  /** column name */
  EducationalInstitutionId = 'educational_institution_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  NameInstitution = 'name_institution'
}

export type Educational_Institution_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Educational_Institution_Set_Input>;
  /** filter the rows which have to be updated */
  where: Educational_Institution_Bool_Exp;
};

/** columns and relationships of "employer" */
export type Employer = {
  __typename?: 'employer';
  email?: Maybe<Scalars['String']>;
  /** An array relationship */
  employer_organizations: Array<Organization>;
  /** An aggregate relationship */
  employer_organizations_aggregate: Organization_Aggregate;
  id_employer: Scalars['uuid'];
  name_employer: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};


/** columns and relationships of "employer" */
export type EmployerEmployer_OrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "employer" */
export type EmployerEmployer_Organizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

export type EmployerResponse = {
  __typename?: 'employerResponse';
  status: Scalars['String'];
};

/** aggregated selection of "employer" */
export type Employer_Aggregate = {
  __typename?: 'employer_aggregate';
  aggregate?: Maybe<Employer_Aggregate_Fields>;
  nodes: Array<Employer>;
};

/** aggregate fields of "employer" */
export type Employer_Aggregate_Fields = {
  __typename?: 'employer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Employer_Max_Fields>;
  min?: Maybe<Employer_Min_Fields>;
};


/** aggregate fields of "employer" */
export type Employer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "employer". All fields are combined with a logical 'AND'. */
export type Employer_Bool_Exp = {
  _and?: InputMaybe<Array<Employer_Bool_Exp>>;
  _not?: InputMaybe<Employer_Bool_Exp>;
  _or?: InputMaybe<Array<Employer_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  employer_organizations?: InputMaybe<Organization_Bool_Exp>;
  employer_organizations_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>;
  id_employer?: InputMaybe<Uuid_Comparison_Exp>;
  name_employer?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "employer" */
export enum Employer_Constraint {
  /** unique or primary key constraint on columns "id_employer" */
  EmployerPkey = 'employer_pkey'
}

/** input type for inserting data into table "employer" */
export type Employer_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  employer_organizations?: InputMaybe<Organization_Arr_Rel_Insert_Input>;
  id_employer?: InputMaybe<Scalars['uuid']>;
  name_employer?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Employer_Max_Fields = {
  __typename?: 'employer_max_fields';
  email?: Maybe<Scalars['String']>;
  id_employer?: Maybe<Scalars['uuid']>;
  name_employer?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Employer_Min_Fields = {
  __typename?: 'employer_min_fields';
  email?: Maybe<Scalars['String']>;
  id_employer?: Maybe<Scalars['uuid']>;
  name_employer?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "employer" */
export type Employer_Mutation_Response = {
  __typename?: 'employer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Employer>;
};

/** input type for inserting object relation for remote table "employer" */
export type Employer_Obj_Rel_Insert_Input = {
  data: Employer_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Employer_On_Conflict>;
};

/** on_conflict condition type for table "employer" */
export type Employer_On_Conflict = {
  constraint: Employer_Constraint;
  update_columns?: Array<Employer_Update_Column>;
  where?: InputMaybe<Employer_Bool_Exp>;
};

/** Ordering options when selecting data from "employer". */
export type Employer_Order_By = {
  email?: InputMaybe<Order_By>;
  employer_organizations_aggregate?: InputMaybe<Organization_Aggregate_Order_By>;
  id_employer?: InputMaybe<Order_By>;
  name_employer?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: employer */
export type Employer_Pk_Columns_Input = {
  id_employer: Scalars['uuid'];
};

/** select columns of table "employer" */
export enum Employer_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  IdEmployer = 'id_employer',
  /** column name */
  NameEmployer = 'name_employer',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "employer" */
export type Employer_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  id_employer?: InputMaybe<Scalars['uuid']>;
  name_employer?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "employer" */
export type Employer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Employer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Employer_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  id_employer?: InputMaybe<Scalars['uuid']>;
  name_employer?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** update columns of table "employer" */
export enum Employer_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  IdEmployer = 'id_employer',
  /** column name */
  NameEmployer = 'name_employer',
  /** column name */
  Phone = 'phone'
}

export type Employer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Employer_Bool_Exp;
};

/** columns and relationships of "experience_work" */
export type Experience_Work = {
  __typename?: 'experience_work';
  date_dismissal?: Maybe<Scalars['String']>;
  date_employment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  experience_work_id: Scalars['uuid'];
  /** An object relationship */
  experience_work_resume: Resumes;
  jobposition?: Maybe<Scalars['String']>;
  name_company: Scalars['String'];
  resume_id: Scalars['uuid'];
  workLocation?: Maybe<Scalars['String']>;
};

/** aggregated selection of "experience_work" */
export type Experience_Work_Aggregate = {
  __typename?: 'experience_work_aggregate';
  aggregate?: Maybe<Experience_Work_Aggregate_Fields>;
  nodes: Array<Experience_Work>;
};

export type Experience_Work_Aggregate_Bool_Exp = {
  count?: InputMaybe<Experience_Work_Aggregate_Bool_Exp_Count>;
};

export type Experience_Work_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Experience_Work_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Experience_Work_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "experience_work" */
export type Experience_Work_Aggregate_Fields = {
  __typename?: 'experience_work_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Experience_Work_Max_Fields>;
  min?: Maybe<Experience_Work_Min_Fields>;
};


/** aggregate fields of "experience_work" */
export type Experience_Work_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experience_Work_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experience_work" */
export type Experience_Work_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Experience_Work_Max_Order_By>;
  min?: InputMaybe<Experience_Work_Min_Order_By>;
};

/** input type for inserting array relation for remote table "experience_work" */
export type Experience_Work_Arr_Rel_Insert_Input = {
  data: Array<Experience_Work_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Experience_Work_On_Conflict>;
};

/** Boolean expression to filter rows from the table "experience_work". All fields are combined with a logical 'AND'. */
export type Experience_Work_Bool_Exp = {
  _and?: InputMaybe<Array<Experience_Work_Bool_Exp>>;
  _not?: InputMaybe<Experience_Work_Bool_Exp>;
  _or?: InputMaybe<Array<Experience_Work_Bool_Exp>>;
  date_dismissal?: InputMaybe<String_Comparison_Exp>;
  date_employment?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  experience_work_id?: InputMaybe<Uuid_Comparison_Exp>;
  experience_work_resume?: InputMaybe<Resumes_Bool_Exp>;
  jobposition?: InputMaybe<String_Comparison_Exp>;
  name_company?: InputMaybe<String_Comparison_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
  workLocation?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "experience_work" */
export enum Experience_Work_Constraint {
  /** unique or primary key constraint on columns "experience_work_id" */
  ExperienceWorkPkey = 'experience_work_pkey'
}

/** input type for inserting data into table "experience_work" */
export type Experience_Work_Insert_Input = {
  date_dismissal?: InputMaybe<Scalars['String']>;
  date_employment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  experience_work_id?: InputMaybe<Scalars['uuid']>;
  experience_work_resume?: InputMaybe<Resumes_Obj_Rel_Insert_Input>;
  jobposition?: InputMaybe<Scalars['String']>;
  name_company?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  workLocation?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Experience_Work_Max_Fields = {
  __typename?: 'experience_work_max_fields';
  date_dismissal?: Maybe<Scalars['String']>;
  date_employment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  experience_work_id?: Maybe<Scalars['uuid']>;
  jobposition?: Maybe<Scalars['String']>;
  name_company?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  workLocation?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "experience_work" */
export type Experience_Work_Max_Order_By = {
  date_dismissal?: InputMaybe<Order_By>;
  date_employment?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  experience_work_id?: InputMaybe<Order_By>;
  jobposition?: InputMaybe<Order_By>;
  name_company?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  workLocation?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Experience_Work_Min_Fields = {
  __typename?: 'experience_work_min_fields';
  date_dismissal?: Maybe<Scalars['String']>;
  date_employment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  experience_work_id?: Maybe<Scalars['uuid']>;
  jobposition?: Maybe<Scalars['String']>;
  name_company?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  workLocation?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "experience_work" */
export type Experience_Work_Min_Order_By = {
  date_dismissal?: InputMaybe<Order_By>;
  date_employment?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  experience_work_id?: InputMaybe<Order_By>;
  jobposition?: InputMaybe<Order_By>;
  name_company?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  workLocation?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "experience_work" */
export type Experience_Work_Mutation_Response = {
  __typename?: 'experience_work_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experience_Work>;
};

/** on_conflict condition type for table "experience_work" */
export type Experience_Work_On_Conflict = {
  constraint: Experience_Work_Constraint;
  update_columns?: Array<Experience_Work_Update_Column>;
  where?: InputMaybe<Experience_Work_Bool_Exp>;
};

/** Ordering options when selecting data from "experience_work". */
export type Experience_Work_Order_By = {
  date_dismissal?: InputMaybe<Order_By>;
  date_employment?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  experience_work_id?: InputMaybe<Order_By>;
  experience_work_resume?: InputMaybe<Resumes_Order_By>;
  jobposition?: InputMaybe<Order_By>;
  name_company?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  workLocation?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experience_work */
export type Experience_Work_Pk_Columns_Input = {
  experience_work_id: Scalars['uuid'];
};

/** select columns of table "experience_work" */
export enum Experience_Work_Select_Column {
  /** column name */
  DateDismissal = 'date_dismissal',
  /** column name */
  DateEmployment = 'date_employment',
  /** column name */
  Description = 'description',
  /** column name */
  ExperienceWorkId = 'experience_work_id',
  /** column name */
  Jobposition = 'jobposition',
  /** column name */
  NameCompany = 'name_company',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  WorkLocation = 'workLocation'
}

/** input type for updating data in table "experience_work" */
export type Experience_Work_Set_Input = {
  date_dismissal?: InputMaybe<Scalars['String']>;
  date_employment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  experience_work_id?: InputMaybe<Scalars['uuid']>;
  jobposition?: InputMaybe<Scalars['String']>;
  name_company?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  workLocation?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "experience_work" */
export type Experience_Work_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experience_Work_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experience_Work_Stream_Cursor_Value_Input = {
  date_dismissal?: InputMaybe<Scalars['String']>;
  date_employment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  experience_work_id?: InputMaybe<Scalars['uuid']>;
  jobposition?: InputMaybe<Scalars['String']>;
  name_company?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  workLocation?: InputMaybe<Scalars['String']>;
};

/** update columns of table "experience_work" */
export enum Experience_Work_Update_Column {
  /** column name */
  DateDismissal = 'date_dismissal',
  /** column name */
  DateEmployment = 'date_employment',
  /** column name */
  Description = 'description',
  /** column name */
  ExperienceWorkId = 'experience_work_id',
  /** column name */
  Jobposition = 'jobposition',
  /** column name */
  NameCompany = 'name_company',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  WorkLocation = 'workLocation'
}

export type Experience_Work_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experience_Work_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experience_Work_Bool_Exp;
};

/** hobby */
export type Hobby = {
  __typename?: 'hobby';
  description: Scalars['String'];
  hobby_id: Scalars['uuid'];
  /** An object relationship */
  hobby_resume?: Maybe<Resumes>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "hobby" */
export type Hobby_Aggregate = {
  __typename?: 'hobby_aggregate';
  aggregate?: Maybe<Hobby_Aggregate_Fields>;
  nodes: Array<Hobby>;
};

export type Hobby_Aggregate_Bool_Exp = {
  count?: InputMaybe<Hobby_Aggregate_Bool_Exp_Count>;
};

export type Hobby_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Hobby_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Hobby_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "hobby" */
export type Hobby_Aggregate_Fields = {
  __typename?: 'hobby_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Hobby_Max_Fields>;
  min?: Maybe<Hobby_Min_Fields>;
};


/** aggregate fields of "hobby" */
export type Hobby_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hobby_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hobby" */
export type Hobby_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Hobby_Max_Order_By>;
  min?: InputMaybe<Hobby_Min_Order_By>;
};

/** input type for inserting array relation for remote table "hobby" */
export type Hobby_Arr_Rel_Insert_Input = {
  data: Array<Hobby_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Hobby_On_Conflict>;
};

/** Boolean expression to filter rows from the table "hobby". All fields are combined with a logical 'AND'. */
export type Hobby_Bool_Exp = {
  _and?: InputMaybe<Array<Hobby_Bool_Exp>>;
  _not?: InputMaybe<Hobby_Bool_Exp>;
  _or?: InputMaybe<Array<Hobby_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  hobby_id?: InputMaybe<Uuid_Comparison_Exp>;
  hobby_resume?: InputMaybe<Resumes_Bool_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "hobby" */
export enum Hobby_Constraint {
  /** unique or primary key constraint on columns "hobby_id" */
  HobbyPkey = 'hobby_pkey'
}

/** input type for inserting data into table "hobby" */
export type Hobby_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  hobby_id?: InputMaybe<Scalars['uuid']>;
  hobby_resume?: InputMaybe<Resumes_Obj_Rel_Insert_Input>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Hobby_Max_Fields = {
  __typename?: 'hobby_max_fields';
  description?: Maybe<Scalars['String']>;
  hobby_id?: Maybe<Scalars['uuid']>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "hobby" */
export type Hobby_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  hobby_id?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Hobby_Min_Fields = {
  __typename?: 'hobby_min_fields';
  description?: Maybe<Scalars['String']>;
  hobby_id?: Maybe<Scalars['uuid']>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "hobby" */
export type Hobby_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  hobby_id?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "hobby" */
export type Hobby_Mutation_Response = {
  __typename?: 'hobby_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hobby>;
};

/** on_conflict condition type for table "hobby" */
export type Hobby_On_Conflict = {
  constraint: Hobby_Constraint;
  update_columns?: Array<Hobby_Update_Column>;
  where?: InputMaybe<Hobby_Bool_Exp>;
};

/** Ordering options when selecting data from "hobby". */
export type Hobby_Order_By = {
  description?: InputMaybe<Order_By>;
  hobby_id?: InputMaybe<Order_By>;
  hobby_resume?: InputMaybe<Resumes_Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hobby */
export type Hobby_Pk_Columns_Input = {
  hobby_id: Scalars['uuid'];
};

/** select columns of table "hobby" */
export enum Hobby_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  HobbyId = 'hobby_id',
  /** column name */
  ResumeId = 'resume_id'
}

/** input type for updating data in table "hobby" */
export type Hobby_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  hobby_id?: InputMaybe<Scalars['uuid']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "hobby" */
export type Hobby_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hobby_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hobby_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  hobby_id?: InputMaybe<Scalars['uuid']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "hobby" */
export enum Hobby_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  HobbyId = 'hobby_id',
  /** column name */
  ResumeId = 'resume_id'
}

export type Hobby_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hobby_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hobby_Bool_Exp;
};

/** columns and relationships of "jobseeker" */
export type Jobseeker = {
  __typename?: 'jobseeker';
  /** An object relationship */
  account?: Maybe<Account>;
  account_id?: Maybe<Scalars['uuid']>;
  dateBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** An array relationship */
  jobseeker_educations: Array<Jobseeker_Education>;
  /** An aggregate relationship */
  jobseeker_educations_aggregate: Jobseeker_Education_Aggregate;
  jobseeker_id: Scalars['uuid'];
  /** An array relationship */
  jobseeker_resumes: Array<Resumes>;
  /** An aggregate relationship */
  jobseeker_resumes_aggregate: Resumes_Aggregate;
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_EducationsArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_ResumesArgs = {
  distinct_on?: InputMaybe<Array<Resumes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resumes_Order_By>>;
  where?: InputMaybe<Resumes_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_Resumes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resumes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resumes_Order_By>>;
  where?: InputMaybe<Resumes_Bool_Exp>;
};

/** aggregated selection of "jobseeker" */
export type Jobseeker_Aggregate = {
  __typename?: 'jobseeker_aggregate';
  aggregate?: Maybe<Jobseeker_Aggregate_Fields>;
  nodes: Array<Jobseeker>;
};

export type Jobseeker_Aggregate_Bool_Exp = {
  count?: InputMaybe<Jobseeker_Aggregate_Bool_Exp_Count>;
};

export type Jobseeker_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Jobseeker_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Jobseeker_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "jobseeker" */
export type Jobseeker_Aggregate_Fields = {
  __typename?: 'jobseeker_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Jobseeker_Max_Fields>;
  min?: Maybe<Jobseeker_Min_Fields>;
};


/** aggregate fields of "jobseeker" */
export type Jobseeker_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobseeker_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "jobseeker" */
export type Jobseeker_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Jobseeker_Max_Order_By>;
  min?: InputMaybe<Jobseeker_Min_Order_By>;
};

/** input type for inserting array relation for remote table "jobseeker" */
export type Jobseeker_Arr_Rel_Insert_Input = {
  data: Array<Jobseeker_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_On_Conflict>;
};

/** Boolean expression to filter rows from the table "jobseeker". All fields are combined with a logical 'AND'. */
export type Jobseeker_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Bool_Exp>>;
  _not?: InputMaybe<Jobseeker_Bool_Exp>;
  _or?: InputMaybe<Array<Jobseeker_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  dateBirth?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  jobseeker_educations?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Bool_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker_resumes?: InputMaybe<Resumes_Bool_Exp>;
  jobseeker_resumes_aggregate?: InputMaybe<Resumes_Aggregate_Bool_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  middleName?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobseeker" */
export enum Jobseeker_Constraint {
  /** unique or primary key constraint on columns "account_id" */
  JobseekerAccountIdKey = 'jobseeker_account_id_key',
  /** unique or primary key constraint on columns "jobseeker_id" */
  JobseekerPkey = 'jobseeker_pkey'
}

/** columns and relationships of "jobseeker_education" */
export type Jobseeker_Education = {
  __typename?: 'jobseeker_education';
  average_score?: Maybe<Scalars['String']>;
  degree_education?: Maybe<Scalars['String']>;
  education_form: Scalars['String'];
  educational_institution_id?: Maybe<Scalars['uuid']>;
  end_date?: Maybe<Scalars['String']>;
  faculity: Scalars['String'];
  group: Scalars['String'];
  /** An object relationship */
  jobseeker?: Maybe<Jobseeker>;
  /** An object relationship */
  jobseeker_education_educational_institution?: Maybe<Educational_Institution>;
  jobseeker_education_id: Scalars['uuid'];
  jobseeker_id?: Maybe<Scalars['uuid']>;
  speciality: Scalars['String'];
  start_date?: Maybe<Scalars['String']>;
};

/** aggregated selection of "jobseeker_education" */
export type Jobseeker_Education_Aggregate = {
  __typename?: 'jobseeker_education_aggregate';
  aggregate?: Maybe<Jobseeker_Education_Aggregate_Fields>;
  nodes: Array<Jobseeker_Education>;
};

export type Jobseeker_Education_Aggregate_Bool_Exp = {
  count?: InputMaybe<Jobseeker_Education_Aggregate_Bool_Exp_Count>;
};

export type Jobseeker_Education_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "jobseeker_education" */
export type Jobseeker_Education_Aggregate_Fields = {
  __typename?: 'jobseeker_education_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Jobseeker_Education_Max_Fields>;
  min?: Maybe<Jobseeker_Education_Min_Fields>;
};


/** aggregate fields of "jobseeker_education" */
export type Jobseeker_Education_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "jobseeker_education" */
export type Jobseeker_Education_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Jobseeker_Education_Max_Order_By>;
  min?: InputMaybe<Jobseeker_Education_Min_Order_By>;
};

/** input type for inserting array relation for remote table "jobseeker_education" */
export type Jobseeker_Education_Arr_Rel_Insert_Input = {
  data: Array<Jobseeker_Education_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_Education_On_Conflict>;
};

/** Boolean expression to filter rows from the table "jobseeker_education". All fields are combined with a logical 'AND'. */
export type Jobseeker_Education_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Education_Bool_Exp>>;
  _not?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  _or?: InputMaybe<Array<Jobseeker_Education_Bool_Exp>>;
  average_score?: InputMaybe<String_Comparison_Exp>;
  degree_education?: InputMaybe<String_Comparison_Exp>;
  education_form?: InputMaybe<String_Comparison_Exp>;
  educational_institution_id?: InputMaybe<Uuid_Comparison_Exp>;
  end_date?: InputMaybe<String_Comparison_Exp>;
  faculity?: InputMaybe<String_Comparison_Exp>;
  group?: InputMaybe<String_Comparison_Exp>;
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  jobseeker_education_educational_institution?: InputMaybe<Educational_Institution_Bool_Exp>;
  jobseeker_education_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
  speciality?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobseeker_education" */
export enum Jobseeker_Education_Constraint {
  /** unique or primary key constraint on columns "jobseeker_education_id" */
  JobseekerEducationPkey = 'jobseeker_education_pkey'
}

/** input type for inserting data into table "jobseeker_education" */
export type Jobseeker_Education_Insert_Input = {
  average_score?: InputMaybe<Scalars['String']>;
  degree_education?: InputMaybe<Scalars['String']>;
  education_form?: InputMaybe<Scalars['String']>;
  educational_institution_id?: InputMaybe<Scalars['uuid']>;
  end_date?: InputMaybe<Scalars['String']>;
  faculity?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  jobseeker_education_educational_institution?: InputMaybe<Educational_Institution_Obj_Rel_Insert_Input>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  speciality?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Jobseeker_Education_Max_Fields = {
  __typename?: 'jobseeker_education_max_fields';
  average_score?: Maybe<Scalars['String']>;
  degree_education?: Maybe<Scalars['String']>;
  education_form?: Maybe<Scalars['String']>;
  educational_institution_id?: Maybe<Scalars['uuid']>;
  end_date?: Maybe<Scalars['String']>;
  faculity?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  speciality?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Max_Order_By = {
  average_score?: InputMaybe<Order_By>;
  degree_education?: InputMaybe<Order_By>;
  education_form?: InputMaybe<Order_By>;
  educational_institution_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  faculity?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  speciality?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Jobseeker_Education_Min_Fields = {
  __typename?: 'jobseeker_education_min_fields';
  average_score?: Maybe<Scalars['String']>;
  degree_education?: Maybe<Scalars['String']>;
  education_form?: Maybe<Scalars['String']>;
  educational_institution_id?: Maybe<Scalars['uuid']>;
  end_date?: Maybe<Scalars['String']>;
  faculity?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  speciality?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Min_Order_By = {
  average_score?: InputMaybe<Order_By>;
  degree_education?: InputMaybe<Order_By>;
  education_form?: InputMaybe<Order_By>;
  educational_institution_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  faculity?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  speciality?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "jobseeker_education" */
export type Jobseeker_Education_Mutation_Response = {
  __typename?: 'jobseeker_education_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobseeker_Education>;
};

/** on_conflict condition type for table "jobseeker_education" */
export type Jobseeker_Education_On_Conflict = {
  constraint: Jobseeker_Education_Constraint;
  update_columns?: Array<Jobseeker_Education_Update_Column>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};

/** Ordering options when selecting data from "jobseeker_education". */
export type Jobseeker_Education_Order_By = {
  average_score?: InputMaybe<Order_By>;
  degree_education?: InputMaybe<Order_By>;
  education_form?: InputMaybe<Order_By>;
  educational_institution_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  faculity?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  jobseeker?: InputMaybe<Jobseeker_Order_By>;
  jobseeker_education_educational_institution?: InputMaybe<Educational_Institution_Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  speciality?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jobseeker_education */
export type Jobseeker_Education_Pk_Columns_Input = {
  jobseeker_education_id: Scalars['uuid'];
};

/** select columns of table "jobseeker_education" */
export enum Jobseeker_Education_Select_Column {
  /** column name */
  AverageScore = 'average_score',
  /** column name */
  DegreeEducation = 'degree_education',
  /** column name */
  EducationForm = 'education_form',
  /** column name */
  EducationalInstitutionId = 'educational_institution_id',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Faculity = 'faculity',
  /** column name */
  Group = 'group',
  /** column name */
  JobseekerEducationId = 'jobseeker_education_id',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  Speciality = 'speciality',
  /** column name */
  StartDate = 'start_date'
}

/** input type for updating data in table "jobseeker_education" */
export type Jobseeker_Education_Set_Input = {
  average_score?: InputMaybe<Scalars['String']>;
  degree_education?: InputMaybe<Scalars['String']>;
  education_form?: InputMaybe<Scalars['String']>;
  educational_institution_id?: InputMaybe<Scalars['uuid']>;
  end_date?: InputMaybe<Scalars['String']>;
  faculity?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  speciality?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "jobseeker_education" */
export type Jobseeker_Education_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobseeker_Education_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Jobseeker_Education_Stream_Cursor_Value_Input = {
  average_score?: InputMaybe<Scalars['String']>;
  degree_education?: InputMaybe<Scalars['String']>;
  education_form?: InputMaybe<Scalars['String']>;
  educational_institution_id?: InputMaybe<Scalars['uuid']>;
  end_date?: InputMaybe<Scalars['String']>;
  faculity?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  speciality?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['String']>;
};

/** update columns of table "jobseeker_education" */
export enum Jobseeker_Education_Update_Column {
  /** column name */
  AverageScore = 'average_score',
  /** column name */
  DegreeEducation = 'degree_education',
  /** column name */
  EducationForm = 'education_form',
  /** column name */
  EducationalInstitutionId = 'educational_institution_id',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Faculity = 'faculity',
  /** column name */
  Group = 'group',
  /** column name */
  JobseekerEducationId = 'jobseeker_education_id',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  Speciality = 'speciality',
  /** column name */
  StartDate = 'start_date'
}

export type Jobseeker_Education_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobseeker_Education_Set_Input>;
  /** filter the rows which have to be updated */
  where: Jobseeker_Education_Bool_Exp;
};

/** input type for inserting data into table "jobseeker" */
export type Jobseeker_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  dateBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  jobseeker_educations?: InputMaybe<Jobseeker_Education_Arr_Rel_Insert_Input>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_resumes?: InputMaybe<Resumes_Arr_Rel_Insert_Input>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Jobseeker_Max_Fields = {
  __typename?: 'jobseeker_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  dateBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "jobseeker" */
export type Jobseeker_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  dateBirth?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  middleName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Jobseeker_Min_Fields = {
  __typename?: 'jobseeker_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  dateBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "jobseeker" */
export type Jobseeker_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  dateBirth?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  middleName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "jobseeker" */
export type Jobseeker_Mutation_Response = {
  __typename?: 'jobseeker_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobseeker>;
};

/** input type for inserting object relation for remote table "jobseeker" */
export type Jobseeker_Obj_Rel_Insert_Input = {
  data: Jobseeker_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_On_Conflict>;
};

/** on_conflict condition type for table "jobseeker" */
export type Jobseeker_On_Conflict = {
  constraint: Jobseeker_Constraint;
  update_columns?: Array<Jobseeker_Update_Column>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};

/** Ordering options when selecting data from "jobseeker". */
export type Jobseeker_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  dateBirth?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  jobseeker_resumes_aggregate?: InputMaybe<Resumes_Aggregate_Order_By>;
  lastName?: InputMaybe<Order_By>;
  middleName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jobseeker */
export type Jobseeker_Pk_Columns_Input = {
  jobseeker_id: Scalars['uuid'];
};

/** select columns of table "jobseeker" */
export enum Jobseeker_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  DateBirth = 'dateBirth',
  /** column name */
  Email = 'email',
  /** column name */
  Gender = 'gender',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MiddleName = 'middleName',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "jobseeker" */
export type Jobseeker_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  dateBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "jobseeker" */
export type Jobseeker_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobseeker_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Jobseeker_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  dateBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** update columns of table "jobseeker" */
export enum Jobseeker_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  DateBirth = 'dateBirth',
  /** column name */
  Email = 'email',
  /** column name */
  Gender = 'gender',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MiddleName = 'middleName',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

export type Jobseeker_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobseeker_Set_Input>;
  /** filter the rows which have to be updated */
  where: Jobseeker_Bool_Exp;
};

/** columns and relationships of "languages" */
export type Languages = {
  __typename?: 'languages';
  language_id: Scalars['uuid'];
  language_level: Scalars['String'];
  language_name: Scalars['String'];
  /** An object relationship */
  languages_resume?: Maybe<Resumes>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "languages" */
export type Languages_Aggregate = {
  __typename?: 'languages_aggregate';
  aggregate?: Maybe<Languages_Aggregate_Fields>;
  nodes: Array<Languages>;
};

export type Languages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Languages_Aggregate_Bool_Exp_Count>;
};

export type Languages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Languages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Languages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "languages" */
export type Languages_Aggregate_Fields = {
  __typename?: 'languages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Languages_Max_Fields>;
  min?: Maybe<Languages_Min_Fields>;
};


/** aggregate fields of "languages" */
export type Languages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Languages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "languages" */
export type Languages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Languages_Max_Order_By>;
  min?: InputMaybe<Languages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "languages" */
export type Languages_Arr_Rel_Insert_Input = {
  data: Array<Languages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Languages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
export type Languages_Bool_Exp = {
  _and?: InputMaybe<Array<Languages_Bool_Exp>>;
  _not?: InputMaybe<Languages_Bool_Exp>;
  _or?: InputMaybe<Array<Languages_Bool_Exp>>;
  language_id?: InputMaybe<Uuid_Comparison_Exp>;
  language_level?: InputMaybe<String_Comparison_Exp>;
  language_name?: InputMaybe<String_Comparison_Exp>;
  languages_resume?: InputMaybe<Resumes_Bool_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "languages" */
export enum Languages_Constraint {
  /** unique or primary key constraint on columns "language_id" */
  LanguagesPkey = 'languages_pkey'
}

/** input type for inserting data into table "languages" */
export type Languages_Insert_Input = {
  language_id?: InputMaybe<Scalars['uuid']>;
  language_level?: InputMaybe<Scalars['String']>;
  language_name?: InputMaybe<Scalars['String']>;
  languages_resume?: InputMaybe<Resumes_Obj_Rel_Insert_Input>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Languages_Max_Fields = {
  __typename?: 'languages_max_fields';
  language_id?: Maybe<Scalars['uuid']>;
  language_level?: Maybe<Scalars['String']>;
  language_name?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "languages" */
export type Languages_Max_Order_By = {
  language_id?: InputMaybe<Order_By>;
  language_level?: InputMaybe<Order_By>;
  language_name?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Languages_Min_Fields = {
  __typename?: 'languages_min_fields';
  language_id?: Maybe<Scalars['uuid']>;
  language_level?: Maybe<Scalars['String']>;
  language_name?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "languages" */
export type Languages_Min_Order_By = {
  language_id?: InputMaybe<Order_By>;
  language_level?: InputMaybe<Order_By>;
  language_name?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "languages" */
export type Languages_Mutation_Response = {
  __typename?: 'languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Languages>;
};

/** on_conflict condition type for table "languages" */
export type Languages_On_Conflict = {
  constraint: Languages_Constraint;
  update_columns?: Array<Languages_Update_Column>;
  where?: InputMaybe<Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "languages". */
export type Languages_Order_By = {
  language_id?: InputMaybe<Order_By>;
  language_level?: InputMaybe<Order_By>;
  language_name?: InputMaybe<Order_By>;
  languages_resume?: InputMaybe<Resumes_Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: languages */
export type Languages_Pk_Columns_Input = {
  language_id: Scalars['uuid'];
};

/** select columns of table "languages" */
export enum Languages_Select_Column {
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  LanguageLevel = 'language_level',
  /** column name */
  LanguageName = 'language_name',
  /** column name */
  ResumeId = 'resume_id'
}

/** input type for updating data in table "languages" */
export type Languages_Set_Input = {
  language_id?: InputMaybe<Scalars['uuid']>;
  language_level?: InputMaybe<Scalars['String']>;
  language_name?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "languages" */
export type Languages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Languages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Languages_Stream_Cursor_Value_Input = {
  language_id?: InputMaybe<Scalars['uuid']>;
  language_level?: InputMaybe<Scalars['String']>;
  language_name?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "languages" */
export enum Languages_Update_Column {
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  LanguageLevel = 'language_level',
  /** column name */
  LanguageName = 'language_name',
  /** column name */
  ResumeId = 'resume_id'
}

export type Languages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Languages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Languages_Bool_Exp;
};

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location';
  address?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  /** An array relationship */
  location_educational_institutions: Array<Educational_Institution>;
  /** An aggregate relationship */
  location_educational_institutions_aggregate: Educational_Institution_Aggregate;
  location_id: Scalars['uuid'];
  postall_code?: Maybe<Scalars['Int']>;
  region: Scalars['String'];
  /** An object relationship */
  vacancy?: Maybe<Vacancy>;
};


/** columns and relationships of "location" */
export type LocationLocation_Educational_InstitutionsArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationLocation_Educational_Institutions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate';
  aggregate?: Maybe<Location_Aggregate_Fields>;
  nodes: Array<Location>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields';
  avg?: Maybe<Location_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Location_Max_Fields>;
  min?: Maybe<Location_Min_Fields>;
  stddev?: Maybe<Location_Stddev_Fields>;
  stddev_pop?: Maybe<Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Location_Stddev_Samp_Fields>;
  sum?: Maybe<Location_Sum_Fields>;
  var_pop?: Maybe<Location_Var_Pop_Fields>;
  var_samp?: Maybe<Location_Var_Samp_Fields>;
  variance?: Maybe<Location_Variance_Fields>;
};


/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Location_Avg_Fields = {
  __typename?: 'location_avg_fields';
  postall_code?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Bool_Exp>>;
  _not?: InputMaybe<Location_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  location_educational_institutions?: InputMaybe<Educational_Institution_Bool_Exp>;
  location_educational_institutions_aggregate?: InputMaybe<Educational_Institution_Aggregate_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  postall_code?: InputMaybe<Int_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  vacancy?: InputMaybe<Vacancy_Bool_Exp>;
};

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint on columns "location_id" */
  LocationPkey = 'location_pkey'
}

/** input type for incrementing numeric columns in table "location" */
export type Location_Inc_Input = {
  postall_code?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  location_educational_institutions?: InputMaybe<Educational_Institution_Arr_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']>;
  postall_code?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
  vacancy?: InputMaybe<Vacancy_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['uuid']>;
  postall_code?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['uuid']>;
  postall_code?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: 'location_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Location>;
};

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
  data: Location_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** on_conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint;
  update_columns?: Array<Location_Update_Column>;
  where?: InputMaybe<Location_Bool_Exp>;
};

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  location_educational_institutions_aggregate?: InputMaybe<Educational_Institution_Aggregate_Order_By>;
  location_id?: InputMaybe<Order_By>;
  postall_code?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  vacancy?: InputMaybe<Vacancy_Order_By>;
};

/** primary key columns input for table: location */
export type Location_Pk_Columns_Input = {
  location_id: Scalars['uuid'];
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  PostallCode = 'postall_code',
  /** column name */
  Region = 'region'
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  postall_code?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
  __typename?: 'location_stddev_fields';
  postall_code?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
  __typename?: 'location_stddev_pop_fields';
  postall_code?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
  __typename?: 'location_stddev_samp_fields';
  postall_code?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "location" */
export type Location_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Location_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Location_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  postall_code?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Location_Sum_Fields = {
  __typename?: 'location_sum_fields';
  postall_code?: Maybe<Scalars['Int']>;
};

/** update columns of table "location" */
export enum Location_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  PostallCode = 'postall_code',
  /** column name */
  Region = 'region'
}

export type Location_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Location_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Location_Set_Input>;
  /** filter the rows which have to be updated */
  where: Location_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
  __typename?: 'location_var_pop_fields';
  postall_code?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
  __typename?: 'location_var_samp_fields';
  postall_code?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Location_Variance_Fields = {
  __typename?: 'location_variance_fields';
  postall_code?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "course" */
  delete_course?: Maybe<Course_Mutation_Response>;
  /** delete single row from the table: "course" */
  delete_course_by_pk?: Maybe<Course>;
  /** delete data from the table: "educational_institution" */
  delete_educational_institution?: Maybe<Educational_Institution_Mutation_Response>;
  /** delete single row from the table: "educational_institution" */
  delete_educational_institution_by_pk?: Maybe<Educational_Institution>;
  /** delete data from the table: "employer" */
  delete_employer?: Maybe<Employer_Mutation_Response>;
  /** delete single row from the table: "employer" */
  delete_employer_by_pk?: Maybe<Employer>;
  /** delete data from the table: "experience_work" */
  delete_experience_work?: Maybe<Experience_Work_Mutation_Response>;
  /** delete single row from the table: "experience_work" */
  delete_experience_work_by_pk?: Maybe<Experience_Work>;
  /** delete data from the table: "hobby" */
  delete_hobby?: Maybe<Hobby_Mutation_Response>;
  /** delete single row from the table: "hobby" */
  delete_hobby_by_pk?: Maybe<Hobby>;
  /** delete data from the table: "jobseeker" */
  delete_jobseeker?: Maybe<Jobseeker_Mutation_Response>;
  /** delete single row from the table: "jobseeker" */
  delete_jobseeker_by_pk?: Maybe<Jobseeker>;
  /** delete data from the table: "jobseeker_education" */
  delete_jobseeker_education?: Maybe<Jobseeker_Education_Mutation_Response>;
  /** delete single row from the table: "jobseeker_education" */
  delete_jobseeker_education_by_pk?: Maybe<Jobseeker_Education>;
  /** delete data from the table: "languages" */
  delete_languages?: Maybe<Languages_Mutation_Response>;
  /** delete single row from the table: "languages" */
  delete_languages_by_pk?: Maybe<Languages>;
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>;
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "resumes" */
  delete_resumes?: Maybe<Resumes_Mutation_Response>;
  /** delete single row from the table: "resumes" */
  delete_resumes_by_pk?: Maybe<Resumes>;
  /** delete data from the table: "skills" */
  delete_skills?: Maybe<Skills_Mutation_Response>;
  /** delete single row from the table: "skills" */
  delete_skills_by_pk?: Maybe<Skills>;
  /** delete data from the table: "vacancy" */
  delete_vacancy?: Maybe<Vacancy_Mutation_Response>;
  /** delete single row from the table: "vacancy" */
  delete_vacancy_by_pk?: Maybe<Vacancy>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "course" */
  insert_course?: Maybe<Course_Mutation_Response>;
  /** insert a single row into the table: "course" */
  insert_course_one?: Maybe<Course>;
  /** insert data into the table: "educational_institution" */
  insert_educational_institution?: Maybe<Educational_Institution_Mutation_Response>;
  /** insert a single row into the table: "educational_institution" */
  insert_educational_institution_one?: Maybe<Educational_Institution>;
  /** insert data into the table: "employer" */
  insert_employer?: Maybe<Employer_Mutation_Response>;
  /** insert a single row into the table: "employer" */
  insert_employer_one?: Maybe<Employer>;
  /** insert data into the table: "experience_work" */
  insert_experience_work?: Maybe<Experience_Work_Mutation_Response>;
  /** insert a single row into the table: "experience_work" */
  insert_experience_work_one?: Maybe<Experience_Work>;
  /** insert data into the table: "hobby" */
  insert_hobby?: Maybe<Hobby_Mutation_Response>;
  /** insert a single row into the table: "hobby" */
  insert_hobby_one?: Maybe<Hobby>;
  /** insert data into the table: "jobseeker" */
  insert_jobseeker?: Maybe<Jobseeker_Mutation_Response>;
  /** insert data into the table: "jobseeker_education" */
  insert_jobseeker_education?: Maybe<Jobseeker_Education_Mutation_Response>;
  /** insert a single row into the table: "jobseeker_education" */
  insert_jobseeker_education_one?: Maybe<Jobseeker_Education>;
  /** insert a single row into the table: "jobseeker" */
  insert_jobseeker_one?: Maybe<Jobseeker>;
  /** insert data into the table: "languages" */
  insert_languages?: Maybe<Languages_Mutation_Response>;
  /** insert a single row into the table: "languages" */
  insert_languages_one?: Maybe<Languages>;
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>;
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "resumes" */
  insert_resumes?: Maybe<Resumes_Mutation_Response>;
  /** insert a single row into the table: "resumes" */
  insert_resumes_one?: Maybe<Resumes>;
  /** insert data into the table: "skills" */
  insert_skills?: Maybe<Skills_Mutation_Response>;
  /** insert a single row into the table: "skills" */
  insert_skills_one?: Maybe<Skills>;
  /** insert data into the table: "vacancy" */
  insert_vacancy?: Maybe<Vacancy_Mutation_Response>;
  /** insert a single row into the table: "vacancy" */
  insert_vacancy_one?: Maybe<Vacancy>;
  login_handler?: Maybe<Response>;
  password_change_handle?: Maybe<Res>;
  /** refreshToken */
  refreshToken?: Maybe<RefreshTokenOutput>;
  signUp_employer?: Maybe<EmployerResponse>;
  signUp_jobseeker?: Maybe<Res>;
  /** sign_out */
  sign_out?: Maybe<ResLogout>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
  /** update data of the table: "course" */
  update_course?: Maybe<Course_Mutation_Response>;
  /** update single row of the table: "course" */
  update_course_by_pk?: Maybe<Course>;
  /** update multiples rows of table: "course" */
  update_course_many?: Maybe<Array<Maybe<Course_Mutation_Response>>>;
  /** update data of the table: "educational_institution" */
  update_educational_institution?: Maybe<Educational_Institution_Mutation_Response>;
  /** update single row of the table: "educational_institution" */
  update_educational_institution_by_pk?: Maybe<Educational_Institution>;
  /** update multiples rows of table: "educational_institution" */
  update_educational_institution_many?: Maybe<Array<Maybe<Educational_Institution_Mutation_Response>>>;
  /** update data of the table: "employer" */
  update_employer?: Maybe<Employer_Mutation_Response>;
  /** update single row of the table: "employer" */
  update_employer_by_pk?: Maybe<Employer>;
  /** update multiples rows of table: "employer" */
  update_employer_many?: Maybe<Array<Maybe<Employer_Mutation_Response>>>;
  /** update data of the table: "experience_work" */
  update_experience_work?: Maybe<Experience_Work_Mutation_Response>;
  /** update single row of the table: "experience_work" */
  update_experience_work_by_pk?: Maybe<Experience_Work>;
  /** update multiples rows of table: "experience_work" */
  update_experience_work_many?: Maybe<Array<Maybe<Experience_Work_Mutation_Response>>>;
  /** update data of the table: "hobby" */
  update_hobby?: Maybe<Hobby_Mutation_Response>;
  /** update single row of the table: "hobby" */
  update_hobby_by_pk?: Maybe<Hobby>;
  /** update multiples rows of table: "hobby" */
  update_hobby_many?: Maybe<Array<Maybe<Hobby_Mutation_Response>>>;
  /** update data of the table: "jobseeker" */
  update_jobseeker?: Maybe<Jobseeker_Mutation_Response>;
  /** update single row of the table: "jobseeker" */
  update_jobseeker_by_pk?: Maybe<Jobseeker>;
  /** update data of the table: "jobseeker_education" */
  update_jobseeker_education?: Maybe<Jobseeker_Education_Mutation_Response>;
  /** update single row of the table: "jobseeker_education" */
  update_jobseeker_education_by_pk?: Maybe<Jobseeker_Education>;
  /** update multiples rows of table: "jobseeker_education" */
  update_jobseeker_education_many?: Maybe<Array<Maybe<Jobseeker_Education_Mutation_Response>>>;
  /** update multiples rows of table: "jobseeker" */
  update_jobseeker_many?: Maybe<Array<Maybe<Jobseeker_Mutation_Response>>>;
  /** update data of the table: "languages" */
  update_languages?: Maybe<Languages_Mutation_Response>;
  /** update single row of the table: "languages" */
  update_languages_by_pk?: Maybe<Languages>;
  /** update multiples rows of table: "languages" */
  update_languages_many?: Maybe<Array<Maybe<Languages_Mutation_Response>>>;
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>;
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>;
  /** update multiples rows of table: "location" */
  update_location_many?: Maybe<Array<Maybe<Location_Mutation_Response>>>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update multiples rows of table: "organization" */
  update_organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update multiples rows of table: "projects" */
  update_projects_many?: Maybe<Array<Maybe<Projects_Mutation_Response>>>;
  /** update data of the table: "resumes" */
  update_resumes?: Maybe<Resumes_Mutation_Response>;
  /** update single row of the table: "resumes" */
  update_resumes_by_pk?: Maybe<Resumes>;
  /** update multiples rows of table: "resumes" */
  update_resumes_many?: Maybe<Array<Maybe<Resumes_Mutation_Response>>>;
  /** update data of the table: "skills" */
  update_skills?: Maybe<Skills_Mutation_Response>;
  /** update single row of the table: "skills" */
  update_skills_by_pk?: Maybe<Skills>;
  /** update multiples rows of table: "skills" */
  update_skills_many?: Maybe<Array<Maybe<Skills_Mutation_Response>>>;
  /** update data of the table: "vacancy" */
  update_vacancy?: Maybe<Vacancy_Mutation_Response>;
  /** update single row of the table: "vacancy" */
  update_vacancy_by_pk?: Maybe<Vacancy>;
  /** update multiples rows of table: "vacancy" */
  update_vacancy_many?: Maybe<Array<Maybe<Vacancy_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  account_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CourseArgs = {
  where: Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Educational_InstitutionArgs = {
  where: Educational_Institution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Educational_Institution_By_PkArgs = {
  educational_institution_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EmployerArgs = {
  where: Employer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Employer_By_PkArgs = {
  id_employer: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Experience_WorkArgs = {
  where: Experience_Work_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experience_Work_By_PkArgs = {
  experience_work_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HobbyArgs = {
  where: Hobby_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hobby_By_PkArgs = {
  hobby_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_JobseekerArgs = {
  where: Jobseeker_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobseeker_By_PkArgs = {
  jobseeker_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Jobseeker_EducationArgs = {
  where: Jobseeker_Education_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobseeker_Education_By_PkArgs = {
  jobseeker_education_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LanguagesArgs = {
  where: Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Languages_By_PkArgs = {
  language_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  location_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id_organization: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  project_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ResumesArgs = {
  where: Resumes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resumes_By_PkArgs = {
  resume_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SkillsArgs = {
  where: Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Skills_By_PkArgs = {
  skills_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_VacancyArgs = {
  where: Vacancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vacancy_By_PkArgs = {
  vacancy_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CourseArgs = {
  objects: Array<Course_Insert_Input>;
  on_conflict?: InputMaybe<Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_OneArgs = {
  object: Course_Insert_Input;
  on_conflict?: InputMaybe<Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Educational_InstitutionArgs = {
  objects: Array<Educational_Institution_Insert_Input>;
  on_conflict?: InputMaybe<Educational_Institution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Educational_Institution_OneArgs = {
  object: Educational_Institution_Insert_Input;
  on_conflict?: InputMaybe<Educational_Institution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EmployerArgs = {
  objects: Array<Employer_Insert_Input>;
  on_conflict?: InputMaybe<Employer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employer_OneArgs = {
  object: Employer_Insert_Input;
  on_conflict?: InputMaybe<Employer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experience_WorkArgs = {
  objects: Array<Experience_Work_Insert_Input>;
  on_conflict?: InputMaybe<Experience_Work_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experience_Work_OneArgs = {
  object: Experience_Work_Insert_Input;
  on_conflict?: InputMaybe<Experience_Work_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HobbyArgs = {
  objects: Array<Hobby_Insert_Input>;
  on_conflict?: InputMaybe<Hobby_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hobby_OneArgs = {
  object: Hobby_Insert_Input;
  on_conflict?: InputMaybe<Hobby_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_JobseekerArgs = {
  objects: Array<Jobseeker_Insert_Input>;
  on_conflict?: InputMaybe<Jobseeker_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobseeker_EducationArgs = {
  objects: Array<Jobseeker_Education_Insert_Input>;
  on_conflict?: InputMaybe<Jobseeker_Education_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobseeker_Education_OneArgs = {
  object: Jobseeker_Education_Insert_Input;
  on_conflict?: InputMaybe<Jobseeker_Education_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobseeker_OneArgs = {
  object: Jobseeker_Insert_Input;
  on_conflict?: InputMaybe<Jobseeker_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LanguagesArgs = {
  objects: Array<Languages_Insert_Input>;
  on_conflict?: InputMaybe<Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Languages_OneArgs = {
  object: Languages_Insert_Input;
  on_conflict?: InputMaybe<Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResumesArgs = {
  objects: Array<Resumes_Insert_Input>;
  on_conflict?: InputMaybe<Resumes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resumes_OneArgs = {
  object: Resumes_Insert_Input;
  on_conflict?: InputMaybe<Resumes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillsArgs = {
  objects: Array<Skills_Insert_Input>;
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Skills_OneArgs = {
  object: Skills_Insert_Input;
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VacancyArgs = {
  objects: Array<Vacancy_Insert_Input>;
  on_conflict?: InputMaybe<Vacancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vacancy_OneArgs = {
  object: Vacancy_Insert_Input;
  on_conflict?: InputMaybe<Vacancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLogin_HandlerArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootPassword_Change_HandleArgs = {
  access_token: Scalars['String'];
  account_id: Scalars['String'];
  refresh_token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSignUp_EmployerArgs = {
  email: Scalars['String'];
  inn_organization: Scalars['String'];
  login: Scalars['String'];
  name_employer: Scalars['String'];
  name_organization: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSignUp_JobseekerArgs = {
  dateBirth?: InputMaybe<Scalars['date']>;
  education_form: Scalars['String'];
  email: Scalars['String'];
  end_date?: InputMaybe<Scalars['date']>;
  faculity: Scalars['String'];
  gender: Scalars['String'];
  group: Scalars['String'];
  lastName: Scalars['String'];
  login: Scalars['String'];
  middleName: Scalars['String'];
  name: Scalars['String'];
  name_institution: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
  speciality: Scalars['String'];
  start_date?: InputMaybe<Scalars['date']>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: Array<Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CourseArgs = {
  _set?: InputMaybe<Course_Set_Input>;
  where: Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_By_PkArgs = {
  _set?: InputMaybe<Course_Set_Input>;
  pk_columns: Course_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_ManyArgs = {
  updates: Array<Course_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Educational_InstitutionArgs = {
  _set?: InputMaybe<Educational_Institution_Set_Input>;
  where: Educational_Institution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Educational_Institution_By_PkArgs = {
  _set?: InputMaybe<Educational_Institution_Set_Input>;
  pk_columns: Educational_Institution_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Educational_Institution_ManyArgs = {
  updates: Array<Educational_Institution_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EmployerArgs = {
  _set?: InputMaybe<Employer_Set_Input>;
  where: Employer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employer_By_PkArgs = {
  _set?: InputMaybe<Employer_Set_Input>;
  pk_columns: Employer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Employer_ManyArgs = {
  updates: Array<Employer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_WorkArgs = {
  _set?: InputMaybe<Experience_Work_Set_Input>;
  where: Experience_Work_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_Work_By_PkArgs = {
  _set?: InputMaybe<Experience_Work_Set_Input>;
  pk_columns: Experience_Work_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_Work_ManyArgs = {
  updates: Array<Experience_Work_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HobbyArgs = {
  _set?: InputMaybe<Hobby_Set_Input>;
  where: Hobby_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hobby_By_PkArgs = {
  _set?: InputMaybe<Hobby_Set_Input>;
  pk_columns: Hobby_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hobby_ManyArgs = {
  updates: Array<Hobby_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_JobseekerArgs = {
  _set?: InputMaybe<Jobseeker_Set_Input>;
  where: Jobseeker_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_By_PkArgs = {
  _set?: InputMaybe<Jobseeker_Set_Input>;
  pk_columns: Jobseeker_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_EducationArgs = {
  _set?: InputMaybe<Jobseeker_Education_Set_Input>;
  where: Jobseeker_Education_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Education_By_PkArgs = {
  _set?: InputMaybe<Jobseeker_Education_Set_Input>;
  pk_columns: Jobseeker_Education_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Education_ManyArgs = {
  updates: Array<Jobseeker_Education_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_ManyArgs = {
  updates: Array<Jobseeker_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LanguagesArgs = {
  _set?: InputMaybe<Languages_Set_Input>;
  where: Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Languages_By_PkArgs = {
  _set?: InputMaybe<Languages_Set_Input>;
  pk_columns: Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Languages_ManyArgs = {
  updates: Array<Languages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _inc?: InputMaybe<Location_Inc_Input>;
  _set?: InputMaybe<Location_Set_Input>;
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _inc?: InputMaybe<Location_Inc_Input>;
  _set?: InputMaybe<Location_Set_Input>;
  pk_columns: Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Location_ManyArgs = {
  updates: Array<Location_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _set?: InputMaybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
  updates: Array<Organization_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_ManyArgs = {
  updates: Array<Projects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ResumesArgs = {
  _set?: InputMaybe<Resumes_Set_Input>;
  where: Resumes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resumes_By_PkArgs = {
  _set?: InputMaybe<Resumes_Set_Input>;
  pk_columns: Resumes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resumes_ManyArgs = {
  updates: Array<Resumes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SkillsArgs = {
  _set?: InputMaybe<Skills_Set_Input>;
  where: Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Skills_By_PkArgs = {
  _set?: InputMaybe<Skills_Set_Input>;
  pk_columns: Skills_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Skills_ManyArgs = {
  updates: Array<Skills_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VacancyArgs = {
  _inc?: InputMaybe<Vacancy_Inc_Input>;
  _set?: InputMaybe<Vacancy_Set_Input>;
  where: Vacancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vacancy_By_PkArgs = {
  _inc?: InputMaybe<Vacancy_Inc_Input>;
  _set?: InputMaybe<Vacancy_Set_Input>;
  pk_columns: Vacancy_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vacancy_ManyArgs = {
  updates: Array<Vacancy_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organization" */
export type Organization = {
  __typename?: 'organization';
  account_id: Scalars['uuid'];
  date_registration?: Maybe<Scalars['date']>;
  employer_id: Scalars['uuid'];
  id_organization: Scalars['uuid'];
  inn_organization: Scalars['String'];
  kpp_organization?: Maybe<Scalars['String']>;
  legal_address?: Maybe<Scalars['String']>;
  main_activity?: Maybe<Scalars['String']>;
  name_organization?: Maybe<Scalars['String']>;
  ogrn?: Maybe<Scalars['String']>;
  /** An object relationship */
  organization_account: Account;
  /** An object relationship */
  organization_employer: Employer;
  status?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

export type Organization_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Organization_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Organization_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Organization_Aggregate_Bool_Exp_Count>;
};

export type Organization_Aggregate_Bool_Exp_Bool_And = {
  arguments: Organization_Select_Column_Organization_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Organization_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Organization_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Organization_Select_Column_Organization_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Organization_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Organization_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Organization_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization" */
export type Organization_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organization_Max_Order_By>;
  min?: InputMaybe<Organization_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organization" */
export type Organization_Arr_Rel_Insert_Input = {
  data: Array<Organization_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  date_registration?: InputMaybe<Date_Comparison_Exp>;
  employer_id?: InputMaybe<Uuid_Comparison_Exp>;
  id_organization?: InputMaybe<Uuid_Comparison_Exp>;
  inn_organization?: InputMaybe<String_Comparison_Exp>;
  kpp_organization?: InputMaybe<String_Comparison_Exp>;
  legal_address?: InputMaybe<String_Comparison_Exp>;
  main_activity?: InputMaybe<String_Comparison_Exp>;
  name_organization?: InputMaybe<String_Comparison_Exp>;
  ogrn?: InputMaybe<String_Comparison_Exp>;
  organization_account?: InputMaybe<Account_Bool_Exp>;
  organization_employer?: InputMaybe<Employer_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "account_id" */
  OrganizationAccountIdKey = 'organization_account_id_key',
  /** unique or primary key constraint on columns "inn_organization" */
  OrganizationInnOrganizationKey = 'organization_inn_organization_key',
  /** unique or primary key constraint on columns "kpp_organization" */
  OrganizationKppOrganizationKey = 'organization_kpp_organization_key',
  /** unique or primary key constraint on columns "ogrn" */
  OrganizationOgrnKey = 'organization_ogrn_key',
  /** unique or primary key constraint on columns "id_organization" */
  OrganizationPkey = 'organization_pkey'
}

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  date_registration?: InputMaybe<Scalars['date']>;
  employer_id?: InputMaybe<Scalars['uuid']>;
  id_organization?: InputMaybe<Scalars['uuid']>;
  inn_organization?: InputMaybe<Scalars['String']>;
  kpp_organization?: InputMaybe<Scalars['String']>;
  legal_address?: InputMaybe<Scalars['String']>;
  main_activity?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
  ogrn?: InputMaybe<Scalars['String']>;
  organization_account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  organization_employer?: InputMaybe<Employer_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  date_registration?: Maybe<Scalars['date']>;
  employer_id?: Maybe<Scalars['uuid']>;
  id_organization?: Maybe<Scalars['uuid']>;
  inn_organization?: Maybe<Scalars['String']>;
  kpp_organization?: Maybe<Scalars['String']>;
  legal_address?: Maybe<Scalars['String']>;
  main_activity?: Maybe<Scalars['String']>;
  name_organization?: Maybe<Scalars['String']>;
  ogrn?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "organization" */
export type Organization_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  date_registration?: InputMaybe<Order_By>;
  employer_id?: InputMaybe<Order_By>;
  id_organization?: InputMaybe<Order_By>;
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
  legal_address?: InputMaybe<Order_By>;
  main_activity?: InputMaybe<Order_By>;
  name_organization?: InputMaybe<Order_By>;
  ogrn?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  date_registration?: Maybe<Scalars['date']>;
  employer_id?: Maybe<Scalars['uuid']>;
  id_organization?: Maybe<Scalars['uuid']>;
  inn_organization?: Maybe<Scalars['String']>;
  kpp_organization?: Maybe<Scalars['String']>;
  legal_address?: Maybe<Scalars['String']>;
  main_activity?: Maybe<Scalars['String']>;
  name_organization?: Maybe<Scalars['String']>;
  ogrn?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "organization" */
export type Organization_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  date_registration?: InputMaybe<Order_By>;
  employer_id?: InputMaybe<Order_By>;
  id_organization?: InputMaybe<Order_By>;
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
  legal_address?: InputMaybe<Order_By>;
  main_activity?: InputMaybe<Order_By>;
  name_organization?: InputMaybe<Order_By>;
  ogrn?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  account_id?: InputMaybe<Order_By>;
  date_registration?: InputMaybe<Order_By>;
  employer_id?: InputMaybe<Order_By>;
  id_organization?: InputMaybe<Order_By>;
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
  legal_address?: InputMaybe<Order_By>;
  main_activity?: InputMaybe<Order_By>;
  name_organization?: InputMaybe<Order_By>;
  ogrn?: InputMaybe<Order_By>;
  organization_account?: InputMaybe<Account_Order_By>;
  organization_employer?: InputMaybe<Employer_Order_By>;
  status?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
  id_organization: Scalars['uuid'];
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  DateRegistration = 'date_registration',
  /** column name */
  EmployerId = 'employer_id',
  /** column name */
  IdOrganization = 'id_organization',
  /** column name */
  InnOrganization = 'inn_organization',
  /** column name */
  KppOrganization = 'kpp_organization',
  /** column name */
  LegalAddress = 'legal_address',
  /** column name */
  MainActivity = 'main_activity',
  /** column name */
  NameOrganization = 'name_organization',
  /** column name */
  Ogrn = 'ogrn',
  /** column name */
  Status = 'status',
  /** column name */
  Verified = 'verified'
}

/** select "organization_aggregate_bool_exp_bool_and_arguments_columns" columns of table "organization" */
export enum Organization_Select_Column_Organization_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Verified = 'verified'
}

/** select "organization_aggregate_bool_exp_bool_or_arguments_columns" columns of table "organization" */
export enum Organization_Select_Column_Organization_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  date_registration?: InputMaybe<Scalars['date']>;
  employer_id?: InputMaybe<Scalars['uuid']>;
  id_organization?: InputMaybe<Scalars['uuid']>;
  inn_organization?: InputMaybe<Scalars['String']>;
  kpp_organization?: InputMaybe<Scalars['String']>;
  legal_address?: InputMaybe<Scalars['String']>;
  main_activity?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
  ogrn?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  date_registration?: InputMaybe<Scalars['date']>;
  employer_id?: InputMaybe<Scalars['uuid']>;
  id_organization?: InputMaybe<Scalars['uuid']>;
  inn_organization?: InputMaybe<Scalars['String']>;
  kpp_organization?: InputMaybe<Scalars['String']>;
  legal_address?: InputMaybe<Scalars['String']>;
  main_activity?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
  ogrn?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "organization" */
export enum Organization_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  DateRegistration = 'date_registration',
  /** column name */
  EmployerId = 'employer_id',
  /** column name */
  IdOrganization = 'id_organization',
  /** column name */
  InnOrganization = 'inn_organization',
  /** column name */
  KppOrganization = 'kpp_organization',
  /** column name */
  LegalAddress = 'legal_address',
  /** column name */
  MainActivity = 'main_activity',
  /** column name */
  NameOrganization = 'name_organization',
  /** column name */
  Ogrn = 'ogrn',
  /** column name */
  Status = 'status',
  /** column name */
  Verified = 'verified'
}

export type Organization_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Bool_Exp;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  description: Scalars['String'];
  name_organization: Scalars['String'];
  project_id: Scalars['uuid'];
  project_name: Scalars['String'];
  /** An object relationship */
  projects_resume: Resumes;
  resume_id: Scalars['uuid'];
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

export type Projects_Aggregate_Bool_Exp = {
  count?: InputMaybe<Projects_Aggregate_Bool_Exp_Count>;
};

export type Projects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Projects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "projects" */
export type Projects_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Projects_Max_Order_By>;
  min?: InputMaybe<Projects_Min_Order_By>;
};

/** input type for inserting array relation for remote table "projects" */
export type Projects_Arr_Rel_Insert_Input = {
  data: Array<Projects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Bool_Exp>>;
  _not?: InputMaybe<Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  name_organization?: InputMaybe<String_Comparison_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  project_name?: InputMaybe<String_Comparison_Exp>;
  projects_resume?: InputMaybe<Resumes_Bool_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint on columns "project_id" */
  ProjectsPkey = 'projects_pkey'
}

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  project_name?: InputMaybe<Scalars['String']>;
  projects_resume?: InputMaybe<Resumes_Obj_Rel_Insert_Input>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  description?: Maybe<Scalars['String']>;
  name_organization?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  project_name?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "projects" */
export type Projects_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  name_organization?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  project_name?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  description?: Maybe<Scalars['String']>;
  name_organization?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  project_name?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "projects" */
export type Projects_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  name_organization?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  project_name?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** on_conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  description?: InputMaybe<Order_By>;
  name_organization?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  project_name?: InputMaybe<Order_By>;
  projects_resume?: InputMaybe<Resumes_Order_By>;
  resume_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  project_id: Scalars['uuid'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  NameOrganization = 'name_organization',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  ProjectName = 'project_name',
  /** column name */
  ResumeId = 'resume_id'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  project_name?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "projects" */
export type Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  project_name?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  NameOrganization = 'name_organization',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  ProjectName = 'project_name',
  /** column name */
  ResumeId = 'resume_id'
}

export type Projects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Projects_Set_Input>;
  /** filter the rows which have to be updated */
  where: Projects_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "educational_institution" */
  educational_institution: Array<Educational_Institution>;
  /** fetch aggregated fields from the table: "educational_institution" */
  educational_institution_aggregate: Educational_Institution_Aggregate;
  /** fetch data from the table: "educational_institution" using primary key columns */
  educational_institution_by_pk?: Maybe<Educational_Institution>;
  /** fetch data from the table: "employer" */
  employer: Array<Employer>;
  /** fetch aggregated fields from the table: "employer" */
  employer_aggregate: Employer_Aggregate;
  /** fetch data from the table: "employer" using primary key columns */
  employer_by_pk?: Maybe<Employer>;
  /** fetch data from the table: "experience_work" */
  experience_work: Array<Experience_Work>;
  /** fetch aggregated fields from the table: "experience_work" */
  experience_work_aggregate: Experience_Work_Aggregate;
  /** fetch data from the table: "experience_work" using primary key columns */
  experience_work_by_pk?: Maybe<Experience_Work>;
  /** fetch data from the table: "hobby" */
  hobby: Array<Hobby>;
  /** fetch aggregated fields from the table: "hobby" */
  hobby_aggregate: Hobby_Aggregate;
  /** fetch data from the table: "hobby" using primary key columns */
  hobby_by_pk?: Maybe<Hobby>;
  /** fetch data from the table: "jobseeker" */
  jobseeker: Array<Jobseeker>;
  /** fetch aggregated fields from the table: "jobseeker" */
  jobseeker_aggregate: Jobseeker_Aggregate;
  /** fetch data from the table: "jobseeker" using primary key columns */
  jobseeker_by_pk?: Maybe<Jobseeker>;
  /** fetch data from the table: "jobseeker_education" */
  jobseeker_education: Array<Jobseeker_Education>;
  /** fetch aggregated fields from the table: "jobseeker_education" */
  jobseeker_education_aggregate: Jobseeker_Education_Aggregate;
  /** fetch data from the table: "jobseeker_education" using primary key columns */
  jobseeker_education_by_pk?: Maybe<Jobseeker_Education>;
  /** An array relationship */
  languages: Array<Languages>;
  /** An aggregate relationship */
  languages_aggregate: Languages_Aggregate;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "resumes" */
  resumes: Array<Resumes>;
  /** fetch aggregated fields from the table: "resumes" */
  resumes_aggregate: Resumes_Aggregate;
  /** fetch data from the table: "resumes" using primary key columns */
  resumes_by_pk?: Maybe<Resumes>;
  /** fetch data from the table: "skills" */
  skills: Array<Skills>;
  /** fetch aggregated fields from the table: "skills" */
  skills_aggregate: Skills_Aggregate;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table: "vacancy" */
  vacancy: Array<Vacancy>;
  /** fetch aggregated fields from the table: "vacancy" */
  vacancy_aggregate: Vacancy_Aggregate;
  /** fetch data from the table: "vacancy" using primary key columns */
  vacancy_by_pk?: Maybe<Vacancy>;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  account_id: Scalars['uuid'];
};


export type Query_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Query_RootCourse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Query_RootCourse_By_PkArgs = {
  course_id: Scalars['uuid'];
};


export type Query_RootEducational_InstitutionArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};


export type Query_RootEducational_Institution_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};


export type Query_RootEducational_Institution_By_PkArgs = {
  educational_institution_id: Scalars['uuid'];
};


export type Query_RootEmployerArgs = {
  distinct_on?: InputMaybe<Array<Employer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employer_Order_By>>;
  where?: InputMaybe<Employer_Bool_Exp>;
};


export type Query_RootEmployer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employer_Order_By>>;
  where?: InputMaybe<Employer_Bool_Exp>;
};


export type Query_RootEmployer_By_PkArgs = {
  id_employer: Scalars['uuid'];
};


export type Query_RootExperience_WorkArgs = {
  distinct_on?: InputMaybe<Array<Experience_Work_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Work_Order_By>>;
  where?: InputMaybe<Experience_Work_Bool_Exp>;
};


export type Query_RootExperience_Work_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Work_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Work_Order_By>>;
  where?: InputMaybe<Experience_Work_Bool_Exp>;
};


export type Query_RootExperience_Work_By_PkArgs = {
  experience_work_id: Scalars['uuid'];
};


export type Query_RootHobbyArgs = {
  distinct_on?: InputMaybe<Array<Hobby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hobby_Order_By>>;
  where?: InputMaybe<Hobby_Bool_Exp>;
};


export type Query_RootHobby_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hobby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hobby_Order_By>>;
  where?: InputMaybe<Hobby_Bool_Exp>;
};


export type Query_RootHobby_By_PkArgs = {
  hobby_id: Scalars['uuid'];
};


export type Query_RootJobseekerArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


export type Query_RootJobseeker_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


export type Query_RootJobseeker_By_PkArgs = {
  jobseeker_id: Scalars['uuid'];
};


export type Query_RootJobseeker_EducationArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


export type Query_RootJobseeker_Education_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


export type Query_RootJobseeker_Education_By_PkArgs = {
  jobseeker_education_id: Scalars['uuid'];
};


export type Query_RootLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Query_RootLanguages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Query_RootLanguages_By_PkArgs = {
  language_id: Scalars['uuid'];
};


export type Query_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_By_PkArgs = {
  location_id: Scalars['uuid'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_By_PkArgs = {
  id_organization: Scalars['uuid'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_By_PkArgs = {
  project_id: Scalars['uuid'];
};


export type Query_RootResumesArgs = {
  distinct_on?: InputMaybe<Array<Resumes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resumes_Order_By>>;
  where?: InputMaybe<Resumes_Bool_Exp>;
};


export type Query_RootResumes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resumes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resumes_Order_By>>;
  where?: InputMaybe<Resumes_Bool_Exp>;
};


export type Query_RootResumes_By_PkArgs = {
  resume_id: Scalars['uuid'];
};


export type Query_RootSkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Query_RootSkills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Query_RootSkills_By_PkArgs = {
  skills_id: Scalars['uuid'];
};


export type Query_RootVacancyArgs = {
  distinct_on?: InputMaybe<Array<Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vacancy_Order_By>>;
  where?: InputMaybe<Vacancy_Bool_Exp>;
};


export type Query_RootVacancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vacancy_Order_By>>;
  where?: InputMaybe<Vacancy_Bool_Exp>;
};


export type Query_RootVacancy_By_PkArgs = {
  vacancy_id: Scalars['uuid'];
};

export type RefreshTokenOutput = {
  __typename?: 'refreshTokenOutput';
  access_token: Scalars['String'];
};

export type Res = {
  __typename?: 'res';
  account_id: Scalars['String'];
};

export type ResLogout = {
  __typename?: 'resLogout';
  status: Scalars['String'];
};

export type Response = {
  __typename?: 'response';
  access_token: Scalars['String'];
};

/** columns and relationships of "resumes" */
export type Resumes = {
  __typename?: 'resumes';
  about_me?: Maybe<Scalars['String']>;
  data_create?: Maybe<Scalars['timestamp']>;
  desired_position?: Maybe<Scalars['String']>;
  driving_categories?: Maybe<Scalars['String']>;
  /** An array relationship */
  experience_works: Array<Experience_Work>;
  /** An aggregate relationship */
  experience_works_aggregate: Experience_Work_Aggregate;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  languages: Array<Languages>;
  /** An aggregate relationship */
  languages_aggregate: Languages_Aggregate;
  medical_book?: Maybe<Scalars['Boolean']>;
  military_service?: Maybe<Scalars['Boolean']>;
  programming_languages?: Maybe<Scalars['String']>;
  resume_id: Scalars['uuid'];
  resume_name: Scalars['String'];
  /** An array relationship */
  resumes_courses: Array<Course>;
  /** An aggregate relationship */
  resumes_courses_aggregate: Course_Aggregate;
  /** An array relationship */
  resumes_hobbies: Array<Hobby>;
  /** An aggregate relationship */
  resumes_hobbies_aggregate: Hobby_Aggregate;
  /** An object relationship */
  resumes_jobseeker?: Maybe<Jobseeker>;
  /** An array relationship */
  resumes_projects: Array<Projects>;
  /** An aggregate relationship */
  resumes_projects_aggregate: Projects_Aggregate;
  /** An array relationship */
  resumes_skills: Array<Skills>;
  /** An aggregate relationship */
  resumes_skills_aggregate: Skills_Aggregate;
};


/** columns and relationships of "resumes" */
export type ResumesExperience_WorksArgs = {
  distinct_on?: InputMaybe<Array<Experience_Work_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Work_Order_By>>;
  where?: InputMaybe<Experience_Work_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesExperience_Works_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Work_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Work_Order_By>>;
  where?: InputMaybe<Experience_Work_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesLanguages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesResumes_CoursesArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesResumes_Courses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesResumes_HobbiesArgs = {
  distinct_on?: InputMaybe<Array<Hobby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hobby_Order_By>>;
  where?: InputMaybe<Hobby_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesResumes_Hobbies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hobby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hobby_Order_By>>;
  where?: InputMaybe<Hobby_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesResumes_ProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesResumes_Projects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesResumes_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


/** columns and relationships of "resumes" */
export type ResumesResumes_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};

/** aggregated selection of "resumes" */
export type Resumes_Aggregate = {
  __typename?: 'resumes_aggregate';
  aggregate?: Maybe<Resumes_Aggregate_Fields>;
  nodes: Array<Resumes>;
};

export type Resumes_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Resumes_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Resumes_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Resumes_Aggregate_Bool_Exp_Count>;
};

export type Resumes_Aggregate_Bool_Exp_Bool_And = {
  arguments: Resumes_Select_Column_Resumes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Resumes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Resumes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Resumes_Select_Column_Resumes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Resumes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Resumes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Resumes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Resumes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "resumes" */
export type Resumes_Aggregate_Fields = {
  __typename?: 'resumes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Resumes_Max_Fields>;
  min?: Maybe<Resumes_Min_Fields>;
};


/** aggregate fields of "resumes" */
export type Resumes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resumes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "resumes" */
export type Resumes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Resumes_Max_Order_By>;
  min?: InputMaybe<Resumes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "resumes" */
export type Resumes_Arr_Rel_Insert_Input = {
  data: Array<Resumes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Resumes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "resumes". All fields are combined with a logical 'AND'. */
export type Resumes_Bool_Exp = {
  _and?: InputMaybe<Array<Resumes_Bool_Exp>>;
  _not?: InputMaybe<Resumes_Bool_Exp>;
  _or?: InputMaybe<Array<Resumes_Bool_Exp>>;
  about_me?: InputMaybe<String_Comparison_Exp>;
  data_create?: InputMaybe<Timestamp_Comparison_Exp>;
  desired_position?: InputMaybe<String_Comparison_Exp>;
  driving_categories?: InputMaybe<String_Comparison_Exp>;
  experience_works?: InputMaybe<Experience_Work_Bool_Exp>;
  experience_works_aggregate?: InputMaybe<Experience_Work_Aggregate_Bool_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
  languages?: InputMaybe<Languages_Bool_Exp>;
  languages_aggregate?: InputMaybe<Languages_Aggregate_Bool_Exp>;
  medical_book?: InputMaybe<Boolean_Comparison_Exp>;
  military_service?: InputMaybe<Boolean_Comparison_Exp>;
  programming_languages?: InputMaybe<String_Comparison_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
  resume_name?: InputMaybe<String_Comparison_Exp>;
  resumes_courses?: InputMaybe<Course_Bool_Exp>;
  resumes_courses_aggregate?: InputMaybe<Course_Aggregate_Bool_Exp>;
  resumes_hobbies?: InputMaybe<Hobby_Bool_Exp>;
  resumes_hobbies_aggregate?: InputMaybe<Hobby_Aggregate_Bool_Exp>;
  resumes_jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  resumes_projects?: InputMaybe<Projects_Bool_Exp>;
  resumes_projects_aggregate?: InputMaybe<Projects_Aggregate_Bool_Exp>;
  resumes_skills?: InputMaybe<Skills_Bool_Exp>;
  resumes_skills_aggregate?: InputMaybe<Skills_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "resumes" */
export enum Resumes_Constraint {
  /** unique or primary key constraint on columns "resume_id" */
  ResumePkey = 'resume_pkey',
  /** unique or primary key constraint on columns "programming_languages" */
  ResumesProgrammingLanguagesKey = 'resumes_programming_languages_key'
}

/** input type for inserting data into table "resumes" */
export type Resumes_Insert_Input = {
  about_me?: InputMaybe<Scalars['String']>;
  data_create?: InputMaybe<Scalars['timestamp']>;
  desired_position?: InputMaybe<Scalars['String']>;
  driving_categories?: InputMaybe<Scalars['String']>;
  experience_works?: InputMaybe<Experience_Work_Arr_Rel_Insert_Input>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  languages?: InputMaybe<Languages_Arr_Rel_Insert_Input>;
  medical_book?: InputMaybe<Scalars['Boolean']>;
  military_service?: InputMaybe<Scalars['Boolean']>;
  programming_languages?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  resume_name?: InputMaybe<Scalars['String']>;
  resumes_courses?: InputMaybe<Course_Arr_Rel_Insert_Input>;
  resumes_hobbies?: InputMaybe<Hobby_Arr_Rel_Insert_Input>;
  resumes_jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  resumes_projects?: InputMaybe<Projects_Arr_Rel_Insert_Input>;
  resumes_skills?: InputMaybe<Skills_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Resumes_Max_Fields = {
  __typename?: 'resumes_max_fields';
  about_me?: Maybe<Scalars['String']>;
  data_create?: Maybe<Scalars['timestamp']>;
  desired_position?: Maybe<Scalars['String']>;
  driving_categories?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  programming_languages?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  resume_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "resumes" */
export type Resumes_Max_Order_By = {
  about_me?: InputMaybe<Order_By>;
  data_create?: InputMaybe<Order_By>;
  desired_position?: InputMaybe<Order_By>;
  driving_categories?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  programming_languages?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  resume_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resumes_Min_Fields = {
  __typename?: 'resumes_min_fields';
  about_me?: Maybe<Scalars['String']>;
  data_create?: Maybe<Scalars['timestamp']>;
  desired_position?: Maybe<Scalars['String']>;
  driving_categories?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  programming_languages?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  resume_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "resumes" */
export type Resumes_Min_Order_By = {
  about_me?: InputMaybe<Order_By>;
  data_create?: InputMaybe<Order_By>;
  desired_position?: InputMaybe<Order_By>;
  driving_categories?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  programming_languages?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  resume_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "resumes" */
export type Resumes_Mutation_Response = {
  __typename?: 'resumes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Resumes>;
};

/** input type for inserting object relation for remote table "resumes" */
export type Resumes_Obj_Rel_Insert_Input = {
  data: Resumes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Resumes_On_Conflict>;
};

/** on_conflict condition type for table "resumes" */
export type Resumes_On_Conflict = {
  constraint: Resumes_Constraint;
  update_columns?: Array<Resumes_Update_Column>;
  where?: InputMaybe<Resumes_Bool_Exp>;
};

/** Ordering options when selecting data from "resumes". */
export type Resumes_Order_By = {
  about_me?: InputMaybe<Order_By>;
  data_create?: InputMaybe<Order_By>;
  desired_position?: InputMaybe<Order_By>;
  driving_categories?: InputMaybe<Order_By>;
  experience_works_aggregate?: InputMaybe<Experience_Work_Aggregate_Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  languages_aggregate?: InputMaybe<Languages_Aggregate_Order_By>;
  medical_book?: InputMaybe<Order_By>;
  military_service?: InputMaybe<Order_By>;
  programming_languages?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  resume_name?: InputMaybe<Order_By>;
  resumes_courses_aggregate?: InputMaybe<Course_Aggregate_Order_By>;
  resumes_hobbies_aggregate?: InputMaybe<Hobby_Aggregate_Order_By>;
  resumes_jobseeker?: InputMaybe<Jobseeker_Order_By>;
  resumes_projects_aggregate?: InputMaybe<Projects_Aggregate_Order_By>;
  resumes_skills_aggregate?: InputMaybe<Skills_Aggregate_Order_By>;
};

/** primary key columns input for table: resumes */
export type Resumes_Pk_Columns_Input = {
  resume_id: Scalars['uuid'];
};

/** select columns of table "resumes" */
export enum Resumes_Select_Column {
  /** column name */
  AboutMe = 'about_me',
  /** column name */
  DataCreate = 'data_create',
  /** column name */
  DesiredPosition = 'desired_position',
  /** column name */
  DrivingCategories = 'driving_categories',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  MedicalBook = 'medical_book',
  /** column name */
  MilitaryService = 'military_service',
  /** column name */
  ProgrammingLanguages = 'programming_languages',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  ResumeName = 'resume_name'
}

/** select "resumes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "resumes" */
export enum Resumes_Select_Column_Resumes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  MedicalBook = 'medical_book',
  /** column name */
  MilitaryService = 'military_service'
}

/** select "resumes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "resumes" */
export enum Resumes_Select_Column_Resumes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  MedicalBook = 'medical_book',
  /** column name */
  MilitaryService = 'military_service'
}

/** input type for updating data in table "resumes" */
export type Resumes_Set_Input = {
  about_me?: InputMaybe<Scalars['String']>;
  data_create?: InputMaybe<Scalars['timestamp']>;
  desired_position?: InputMaybe<Scalars['String']>;
  driving_categories?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  medical_book?: InputMaybe<Scalars['Boolean']>;
  military_service?: InputMaybe<Scalars['Boolean']>;
  programming_languages?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  resume_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "resumes" */
export type Resumes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resumes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resumes_Stream_Cursor_Value_Input = {
  about_me?: InputMaybe<Scalars['String']>;
  data_create?: InputMaybe<Scalars['timestamp']>;
  desired_position?: InputMaybe<Scalars['String']>;
  driving_categories?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  medical_book?: InputMaybe<Scalars['Boolean']>;
  military_service?: InputMaybe<Scalars['Boolean']>;
  programming_languages?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  resume_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "resumes" */
export enum Resumes_Update_Column {
  /** column name */
  AboutMe = 'about_me',
  /** column name */
  DataCreate = 'data_create',
  /** column name */
  DesiredPosition = 'desired_position',
  /** column name */
  DrivingCategories = 'driving_categories',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  MedicalBook = 'medical_book',
  /** column name */
  MilitaryService = 'military_service',
  /** column name */
  ProgrammingLanguages = 'programming_languages',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  ResumeName = 'resume_name'
}

export type Resumes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resumes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resumes_Bool_Exp;
};

/** columns and relationships of "skills" */
export type Skills = {
  __typename?: 'skills';
  description: Scalars['String'];
  resume_id?: Maybe<Scalars['uuid']>;
  skills_id: Scalars['uuid'];
  /** An object relationship */
  skills_resume?: Maybe<Resumes>;
};

/** aggregated selection of "skills" */
export type Skills_Aggregate = {
  __typename?: 'skills_aggregate';
  aggregate?: Maybe<Skills_Aggregate_Fields>;
  nodes: Array<Skills>;
};

export type Skills_Aggregate_Bool_Exp = {
  count?: InputMaybe<Skills_Aggregate_Bool_Exp_Count>;
};

export type Skills_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Skills_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "skills" */
export type Skills_Aggregate_Fields = {
  __typename?: 'skills_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Skills_Max_Fields>;
  min?: Maybe<Skills_Min_Fields>;
};


/** aggregate fields of "skills" */
export type Skills_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "skills" */
export type Skills_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Skills_Max_Order_By>;
  min?: InputMaybe<Skills_Min_Order_By>;
};

/** input type for inserting array relation for remote table "skills" */
export type Skills_Arr_Rel_Insert_Input = {
  data: Array<Skills_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};

/** Boolean expression to filter rows from the table "skills". All fields are combined with a logical 'AND'. */
export type Skills_Bool_Exp = {
  _and?: InputMaybe<Array<Skills_Bool_Exp>>;
  _not?: InputMaybe<Skills_Bool_Exp>;
  _or?: InputMaybe<Array<Skills_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
  skills_id?: InputMaybe<Uuid_Comparison_Exp>;
  skills_resume?: InputMaybe<Resumes_Bool_Exp>;
};

/** unique or primary key constraints on table "skills" */
export enum Skills_Constraint {
  /** unique or primary key constraint on columns "skills_id" */
  SkillsPkey = 'skills_pkey'
}

/** input type for inserting data into table "skills" */
export type Skills_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  skills_id?: InputMaybe<Scalars['uuid']>;
  skills_resume?: InputMaybe<Resumes_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Skills_Max_Fields = {
  __typename?: 'skills_max_fields';
  description?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  skills_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "skills" */
export type Skills_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  skills_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Skills_Min_Fields = {
  __typename?: 'skills_min_fields';
  description?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  skills_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "skills" */
export type Skills_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  skills_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "skills" */
export type Skills_Mutation_Response = {
  __typename?: 'skills_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Skills>;
};

/** on_conflict condition type for table "skills" */
export type Skills_On_Conflict = {
  constraint: Skills_Constraint;
  update_columns?: Array<Skills_Update_Column>;
  where?: InputMaybe<Skills_Bool_Exp>;
};

/** Ordering options when selecting data from "skills". */
export type Skills_Order_By = {
  description?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  skills_id?: InputMaybe<Order_By>;
  skills_resume?: InputMaybe<Resumes_Order_By>;
};

/** primary key columns input for table: skills */
export type Skills_Pk_Columns_Input = {
  skills_id: Scalars['uuid'];
};

/** select columns of table "skills" */
export enum Skills_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  SkillsId = 'skills_id'
}

/** input type for updating data in table "skills" */
export type Skills_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  skills_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "skills" */
export type Skills_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Skills_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Skills_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  skills_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "skills" */
export enum Skills_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  SkillsId = 'skills_id'
}

export type Skills_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Skills_Set_Input>;
  /** filter the rows which have to be updated */
  where: Skills_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** fetch data from the table in a streaming manner: "course" */
  course_stream: Array<Course>;
  /** fetch data from the table: "educational_institution" */
  educational_institution: Array<Educational_Institution>;
  /** fetch aggregated fields from the table: "educational_institution" */
  educational_institution_aggregate: Educational_Institution_Aggregate;
  /** fetch data from the table: "educational_institution" using primary key columns */
  educational_institution_by_pk?: Maybe<Educational_Institution>;
  /** fetch data from the table in a streaming manner: "educational_institution" */
  educational_institution_stream: Array<Educational_Institution>;
  /** fetch data from the table: "employer" */
  employer: Array<Employer>;
  /** fetch aggregated fields from the table: "employer" */
  employer_aggregate: Employer_Aggregate;
  /** fetch data from the table: "employer" using primary key columns */
  employer_by_pk?: Maybe<Employer>;
  /** fetch data from the table in a streaming manner: "employer" */
  employer_stream: Array<Employer>;
  /** fetch data from the table: "experience_work" */
  experience_work: Array<Experience_Work>;
  /** fetch aggregated fields from the table: "experience_work" */
  experience_work_aggregate: Experience_Work_Aggregate;
  /** fetch data from the table: "experience_work" using primary key columns */
  experience_work_by_pk?: Maybe<Experience_Work>;
  /** fetch data from the table in a streaming manner: "experience_work" */
  experience_work_stream: Array<Experience_Work>;
  /** fetch data from the table: "hobby" */
  hobby: Array<Hobby>;
  /** fetch aggregated fields from the table: "hobby" */
  hobby_aggregate: Hobby_Aggregate;
  /** fetch data from the table: "hobby" using primary key columns */
  hobby_by_pk?: Maybe<Hobby>;
  /** fetch data from the table in a streaming manner: "hobby" */
  hobby_stream: Array<Hobby>;
  /** fetch data from the table: "jobseeker" */
  jobseeker: Array<Jobseeker>;
  /** fetch aggregated fields from the table: "jobseeker" */
  jobseeker_aggregate: Jobseeker_Aggregate;
  /** fetch data from the table: "jobseeker" using primary key columns */
  jobseeker_by_pk?: Maybe<Jobseeker>;
  /** fetch data from the table: "jobseeker_education" */
  jobseeker_education: Array<Jobseeker_Education>;
  /** fetch aggregated fields from the table: "jobseeker_education" */
  jobseeker_education_aggregate: Jobseeker_Education_Aggregate;
  /** fetch data from the table: "jobseeker_education" using primary key columns */
  jobseeker_education_by_pk?: Maybe<Jobseeker_Education>;
  /** fetch data from the table in a streaming manner: "jobseeker_education" */
  jobseeker_education_stream: Array<Jobseeker_Education>;
  /** fetch data from the table in a streaming manner: "jobseeker" */
  jobseeker_stream: Array<Jobseeker>;
  /** An array relationship */
  languages: Array<Languages>;
  /** An aggregate relationship */
  languages_aggregate: Languages_Aggregate;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** fetch data from the table in a streaming manner: "languages" */
  languages_stream: Array<Languages>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table in a streaming manner: "location" */
  location_stream: Array<Location>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table in a streaming manner: "projects" */
  projects_stream: Array<Projects>;
  /** fetch data from the table: "resumes" */
  resumes: Array<Resumes>;
  /** fetch aggregated fields from the table: "resumes" */
  resumes_aggregate: Resumes_Aggregate;
  /** fetch data from the table: "resumes" using primary key columns */
  resumes_by_pk?: Maybe<Resumes>;
  /** fetch data from the table in a streaming manner: "resumes" */
  resumes_stream: Array<Resumes>;
  /** fetch data from the table: "skills" */
  skills: Array<Skills>;
  /** fetch aggregated fields from the table: "skills" */
  skills_aggregate: Skills_Aggregate;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table in a streaming manner: "skills" */
  skills_stream: Array<Skills>;
  /** fetch data from the table: "vacancy" */
  vacancy: Array<Vacancy>;
  /** fetch aggregated fields from the table: "vacancy" */
  vacancy_aggregate: Vacancy_Aggregate;
  /** fetch data from the table: "vacancy" using primary key columns */
  vacancy_by_pk?: Maybe<Vacancy>;
  /** fetch data from the table in a streaming manner: "vacancy" */
  vacancy_stream: Array<Vacancy>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  account_id: Scalars['uuid'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourse_By_PkArgs = {
  course_id: Scalars['uuid'];
};


export type Subscription_RootCourse_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Course_Stream_Cursor_Input>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootEducational_InstitutionArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};


export type Subscription_RootEducational_Institution_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};


export type Subscription_RootEducational_Institution_By_PkArgs = {
  educational_institution_id: Scalars['uuid'];
};


export type Subscription_RootEducational_Institution_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Educational_Institution_Stream_Cursor_Input>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};


export type Subscription_RootEmployerArgs = {
  distinct_on?: InputMaybe<Array<Employer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employer_Order_By>>;
  where?: InputMaybe<Employer_Bool_Exp>;
};


export type Subscription_RootEmployer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employer_Order_By>>;
  where?: InputMaybe<Employer_Bool_Exp>;
};


export type Subscription_RootEmployer_By_PkArgs = {
  id_employer: Scalars['uuid'];
};


export type Subscription_RootEmployer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Employer_Stream_Cursor_Input>>;
  where?: InputMaybe<Employer_Bool_Exp>;
};


export type Subscription_RootExperience_WorkArgs = {
  distinct_on?: InputMaybe<Array<Experience_Work_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Work_Order_By>>;
  where?: InputMaybe<Experience_Work_Bool_Exp>;
};


export type Subscription_RootExperience_Work_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Work_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Work_Order_By>>;
  where?: InputMaybe<Experience_Work_Bool_Exp>;
};


export type Subscription_RootExperience_Work_By_PkArgs = {
  experience_work_id: Scalars['uuid'];
};


export type Subscription_RootExperience_Work_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Experience_Work_Stream_Cursor_Input>>;
  where?: InputMaybe<Experience_Work_Bool_Exp>;
};


export type Subscription_RootHobbyArgs = {
  distinct_on?: InputMaybe<Array<Hobby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hobby_Order_By>>;
  where?: InputMaybe<Hobby_Bool_Exp>;
};


export type Subscription_RootHobby_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hobby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hobby_Order_By>>;
  where?: InputMaybe<Hobby_Bool_Exp>;
};


export type Subscription_RootHobby_By_PkArgs = {
  hobby_id: Scalars['uuid'];
};


export type Subscription_RootHobby_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Hobby_Stream_Cursor_Input>>;
  where?: InputMaybe<Hobby_Bool_Exp>;
};


export type Subscription_RootJobseekerArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


export type Subscription_RootJobseeker_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


export type Subscription_RootJobseeker_By_PkArgs = {
  jobseeker_id: Scalars['uuid'];
};


export type Subscription_RootJobseeker_EducationArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


export type Subscription_RootJobseeker_Education_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


export type Subscription_RootJobseeker_Education_By_PkArgs = {
  jobseeker_education_id: Scalars['uuid'];
};


export type Subscription_RootJobseeker_Education_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Jobseeker_Education_Stream_Cursor_Input>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


export type Subscription_RootJobseeker_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Jobseeker_Stream_Cursor_Input>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


export type Subscription_RootLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootLanguages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootLanguages_By_PkArgs = {
  language_id: Scalars['uuid'];
};


export type Subscription_RootLanguages_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Languages_Stream_Cursor_Input>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_By_PkArgs = {
  location_id: Scalars['uuid'];
};


export type Subscription_RootLocation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Location_Stream_Cursor_Input>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id_organization: Scalars['uuid'];
};


export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_By_PkArgs = {
  project_id: Scalars['uuid'];
};


export type Subscription_RootProjects_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootResumesArgs = {
  distinct_on?: InputMaybe<Array<Resumes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resumes_Order_By>>;
  where?: InputMaybe<Resumes_Bool_Exp>;
};


export type Subscription_RootResumes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resumes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resumes_Order_By>>;
  where?: InputMaybe<Resumes_Bool_Exp>;
};


export type Subscription_RootResumes_By_PkArgs = {
  resume_id: Scalars['uuid'];
};


export type Subscription_RootResumes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Resumes_Stream_Cursor_Input>>;
  where?: InputMaybe<Resumes_Bool_Exp>;
};


export type Subscription_RootSkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Subscription_RootSkills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Subscription_RootSkills_By_PkArgs = {
  skills_id: Scalars['uuid'];
};


export type Subscription_RootSkills_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Skills_Stream_Cursor_Input>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Subscription_RootVacancyArgs = {
  distinct_on?: InputMaybe<Array<Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vacancy_Order_By>>;
  where?: InputMaybe<Vacancy_Bool_Exp>;
};


export type Subscription_RootVacancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vacancy_Order_By>>;
  where?: InputMaybe<Vacancy_Bool_Exp>;
};


export type Subscription_RootVacancy_By_PkArgs = {
  vacancy_id: Scalars['uuid'];
};


export type Subscription_RootVacancy_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vacancy_Stream_Cursor_Input>>;
  where?: InputMaybe<Vacancy_Bool_Exp>;
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']>;
  _gt?: InputMaybe<Scalars['time']>;
  _gte?: InputMaybe<Scalars['time']>;
  _in?: InputMaybe<Array<Scalars['time']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['time']>;
  _lte?: InputMaybe<Scalars['time']>;
  _neq?: InputMaybe<Scalars['time']>;
  _nin?: InputMaybe<Array<Scalars['time']>>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "vacancy" */
export type Vacancy = {
  __typename?: 'vacancy';
  activity?: Maybe<Scalars['Boolean']>;
  create_date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  key_skills?: Maybe<Scalars['String']>;
  link_vacancy: Scalars['String'];
  /** An object relationship */
  location?: Maybe<Location>;
  location_id?: Maybe<Scalars['uuid']>;
  name_vacancy: Scalars['String'];
  organization: Scalars['String'];
  salary?: Maybe<Scalars['Int']>;
  vacancy_id: Scalars['uuid'];
};

/** aggregated selection of "vacancy" */
export type Vacancy_Aggregate = {
  __typename?: 'vacancy_aggregate';
  aggregate?: Maybe<Vacancy_Aggregate_Fields>;
  nodes: Array<Vacancy>;
};

/** aggregate fields of "vacancy" */
export type Vacancy_Aggregate_Fields = {
  __typename?: 'vacancy_aggregate_fields';
  avg?: Maybe<Vacancy_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vacancy_Max_Fields>;
  min?: Maybe<Vacancy_Min_Fields>;
  stddev?: Maybe<Vacancy_Stddev_Fields>;
  stddev_pop?: Maybe<Vacancy_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vacancy_Stddev_Samp_Fields>;
  sum?: Maybe<Vacancy_Sum_Fields>;
  var_pop?: Maybe<Vacancy_Var_Pop_Fields>;
  var_samp?: Maybe<Vacancy_Var_Samp_Fields>;
  variance?: Maybe<Vacancy_Variance_Fields>;
};


/** aggregate fields of "vacancy" */
export type Vacancy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vacancy_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vacancy_Avg_Fields = {
  __typename?: 'vacancy_avg_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vacancy". All fields are combined with a logical 'AND'. */
export type Vacancy_Bool_Exp = {
  _and?: InputMaybe<Array<Vacancy_Bool_Exp>>;
  _not?: InputMaybe<Vacancy_Bool_Exp>;
  _or?: InputMaybe<Array<Vacancy_Bool_Exp>>;
  activity?: InputMaybe<Boolean_Comparison_Exp>;
  create_date?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  experience?: InputMaybe<String_Comparison_Exp>;
  key_skills?: InputMaybe<String_Comparison_Exp>;
  link_vacancy?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<Location_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  name_vacancy?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<String_Comparison_Exp>;
  salary?: InputMaybe<Int_Comparison_Exp>;
  vacancy_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "vacancy" */
export enum Vacancy_Constraint {
  /** unique or primary key constraint on columns "location_id" */
  VacancyLocationIdKey = 'vacancy_location_id_key',
  /** unique or primary key constraint on columns "vacancy_id" */
  VacancyPkey = 'vacancy_pkey'
}

/** input type for incrementing numeric columns in table "vacancy" */
export type Vacancy_Inc_Input = {
  salary?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vacancy" */
export type Vacancy_Insert_Input = {
  activity?: InputMaybe<Scalars['Boolean']>;
  create_date?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  key_skills?: InputMaybe<Scalars['String']>;
  link_vacancy?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Location_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name_vacancy?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Int']>;
  vacancy_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Vacancy_Max_Fields = {
  __typename?: 'vacancy_max_fields';
  create_date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  key_skills?: Maybe<Scalars['String']>;
  link_vacancy?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['uuid']>;
  name_vacancy?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Int']>;
  vacancy_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Vacancy_Min_Fields = {
  __typename?: 'vacancy_min_fields';
  create_date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  key_skills?: Maybe<Scalars['String']>;
  link_vacancy?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['uuid']>;
  name_vacancy?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Int']>;
  vacancy_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "vacancy" */
export type Vacancy_Mutation_Response = {
  __typename?: 'vacancy_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vacancy>;
};

/** input type for inserting object relation for remote table "vacancy" */
export type Vacancy_Obj_Rel_Insert_Input = {
  data: Vacancy_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vacancy_On_Conflict>;
};

/** on_conflict condition type for table "vacancy" */
export type Vacancy_On_Conflict = {
  constraint: Vacancy_Constraint;
  update_columns?: Array<Vacancy_Update_Column>;
  where?: InputMaybe<Vacancy_Bool_Exp>;
};

/** Ordering options when selecting data from "vacancy". */
export type Vacancy_Order_By = {
  activity?: InputMaybe<Order_By>;
  create_date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  experience?: InputMaybe<Order_By>;
  key_skills?: InputMaybe<Order_By>;
  link_vacancy?: InputMaybe<Order_By>;
  location?: InputMaybe<Location_Order_By>;
  location_id?: InputMaybe<Order_By>;
  name_vacancy?: InputMaybe<Order_By>;
  organization?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  vacancy_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vacancy */
export type Vacancy_Pk_Columns_Input = {
  vacancy_id: Scalars['uuid'];
};

/** select columns of table "vacancy" */
export enum Vacancy_Select_Column {
  /** column name */
  Activity = 'activity',
  /** column name */
  CreateDate = 'create_date',
  /** column name */
  Description = 'description',
  /** column name */
  Experience = 'experience',
  /** column name */
  KeySkills = 'key_skills',
  /** column name */
  LinkVacancy = 'link_vacancy',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  NameVacancy = 'name_vacancy',
  /** column name */
  Organization = 'organization',
  /** column name */
  Salary = 'salary',
  /** column name */
  VacancyId = 'vacancy_id'
}

/** input type for updating data in table "vacancy" */
export type Vacancy_Set_Input = {
  activity?: InputMaybe<Scalars['Boolean']>;
  create_date?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  key_skills?: InputMaybe<Scalars['String']>;
  link_vacancy?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name_vacancy?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Int']>;
  vacancy_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Vacancy_Stddev_Fields = {
  __typename?: 'vacancy_stddev_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vacancy_Stddev_Pop_Fields = {
  __typename?: 'vacancy_stddev_pop_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vacancy_Stddev_Samp_Fields = {
  __typename?: 'vacancy_stddev_samp_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vacancy" */
export type Vacancy_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vacancy_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vacancy_Stream_Cursor_Value_Input = {
  activity?: InputMaybe<Scalars['Boolean']>;
  create_date?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  key_skills?: InputMaybe<Scalars['String']>;
  link_vacancy?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name_vacancy?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Int']>;
  vacancy_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Vacancy_Sum_Fields = {
  __typename?: 'vacancy_sum_fields';
  salary?: Maybe<Scalars['Int']>;
};

/** update columns of table "vacancy" */
export enum Vacancy_Update_Column {
  /** column name */
  Activity = 'activity',
  /** column name */
  CreateDate = 'create_date',
  /** column name */
  Description = 'description',
  /** column name */
  Experience = 'experience',
  /** column name */
  KeySkills = 'key_skills',
  /** column name */
  LinkVacancy = 'link_vacancy',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  NameVacancy = 'name_vacancy',
  /** column name */
  Organization = 'organization',
  /** column name */
  Salary = 'salary',
  /** column name */
  VacancyId = 'vacancy_id'
}

export type Vacancy_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vacancy_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vacancy_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vacancy_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vacancy_Var_Pop_Fields = {
  __typename?: 'vacancy_var_pop_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vacancy_Var_Samp_Fields = {
  __typename?: 'vacancy_var_samp_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vacancy_Variance_Fields = {
  __typename?: 'vacancy_variance_fields';
  salary?: Maybe<Scalars['Float']>;
};

export type AuthLoginMutationVariables = Exact<{
  login?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type AuthLoginMutation = { __typename?: 'mutation_root', login_handler?: { __typename?: 'response', access_token: string } | null };

export type UpdateTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateTokenMutation = { __typename?: 'mutation_root', refreshToken?: { __typename?: 'refreshTokenOutput', access_token: string } | null };

export type SignUpJobseekerMutationVariables = Exact<{
  start_date?: InputMaybe<Scalars['date']>;
  speciality?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  name_institution?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  login?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  faculity?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  education_form?: InputMaybe<Scalars['String']>;
  dateBirth?: InputMaybe<Scalars['date']>;
}>;


export type SignUpJobseekerMutation = { __typename?: 'mutation_root', signUp_jobseeker?: { __typename?: 'res', account_id: string } | null };

export type SignUpOrganizationMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  inn_organization?: InputMaybe<Scalars['String']>;
  login?: InputMaybe<Scalars['String']>;
  name_employer?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
}>;


export type SignUpOrganizationMutation = { __typename?: 'mutation_root', signUp_employer?: { __typename?: 'employerResponse', status: string } | null };

export type GetAccountByIdQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetAccountByIdQuery = { __typename?: 'query_root', account: Array<{ __typename?: 'account', account_id: string, avatar?: string | null, login: string, role?: string | null }> };

export type GetJobseekerByIdQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetJobseekerByIdQuery = { __typename?: 'query_root', jobseeker: Array<{ __typename?: 'jobseeker', dateBirth?: string | null, email?: string | null, gender?: string | null, jobseeker_id: string, lastName: string, middleName: string, name: string, phone?: string | null, account_id?: string | null, jobseeker_educations: Array<{ __typename?: 'jobseeker_education', average_score?: string | null, education_form: string, educational_institution_id?: string | null, end_date?: string | null, faculity: string, group: string, speciality: string, start_date?: string | null, jobseeker_education_id: string, jobseeker_education_educational_institution?: { __typename?: 'educational_institution', name_institution: string, educational_institution_jobseeker_educations: Array<{ __typename?: 'jobseeker_education', average_score?: string | null, education_form: string, educational_institution_id?: string | null, end_date?: string | null, faculity: string, group: string, speciality: string, start_date?: string | null, jobseeker_id?: string | null, jobseeker_education_id: string }> } | null }>, account?: { __typename?: 'account', login: string, role?: string | null, avatar?: string | null } | null }> };

export type GetOrganizationByIdQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetOrganizationByIdQuery = { __typename?: 'query_root', organization: Array<{ __typename?: 'organization', account_id: string, date_registration?: any | null, employer_id: string, id_organization: string, inn_organization: string, kpp_organization?: string | null, main_activity?: string | null, name_organization?: string | null, ogrn?: string | null, status?: string | null, verified: boolean, legal_address?: string | null, organization_account: { __typename?: 'account', avatar?: string | null, login: string, role?: string | null }, organization_employer: { __typename?: 'employer', email?: string | null, name_employer: string, phone?: string | null } }> };

export type GetJobseekerEducationsQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetJobseekerEducationsQuery = { __typename?: 'query_root', jobseeker_education: Array<{ __typename?: 'jobseeker_education', average_score?: string | null, education_form: string, end_date?: string | null, faculity: string, group: string, speciality: string, start_date?: string | null, jobseeker_education_id: string, jobseeker_id?: string | null, degree_education?: string | null, jobseeker_education_educational_institution?: { __typename?: 'educational_institution', icon?: string | null, name_institution: string, educational_institution_id: string } | null }> };

export type UpdateOrganizationMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
  legal_address?: InputMaybe<Scalars['String']>;
}>;


export type UpdateOrganizationMutation = { __typename?: 'mutation_root', update_organization?: { __typename?: 'organization_mutation_response', returning: Array<{ __typename?: 'organization', account_id: string, employer_id: string, id_organization: string, legal_address?: string | null }> } | null };

export type UpdateEmployerMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
}>;


export type UpdateEmployerMutation = { __typename?: 'mutation_root', update_employer?: { __typename?: 'employer_mutation_response', returning: Array<{ __typename?: 'employer', id_employer: string, phone?: string | null, email?: string | null }> } | null };

export type UpdateJobseekerProfileMutationVariables = Exact<{
  dateBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type UpdateJobseekerProfileMutation = { __typename?: 'mutation_root', update_jobseeker?: { __typename?: 'jobseeker_mutation_response', returning: Array<{ __typename?: 'jobseeker', account_id?: string | null, jobseeker_id: string }> } | null };

export type GetJobseekerResumesQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetJobseekerResumesQuery = { __typename?: 'query_root', resumes: Array<{ __typename?: 'resumes', jobseeker_id?: string | null, resume_id: string, resume_name: string, about_me?: string | null, data_create?: string | null, desired_position?: string | null }> };

export type GetResumesQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetResumesQuery = { __typename?: 'query_root', resumes: Array<{ __typename?: 'resumes', about_me?: string | null, data_create?: string | null, desired_position?: string | null, driving_categories?: string | null, jobseeker_id?: string | null, medical_book?: boolean | null, military_service?: boolean | null, resume_id: string, resume_name: string, programming_languages?: string | null, resumes_courses: Array<{ __typename?: 'course', course_id: string, course_location: string, course_name: string, description: string, date_receipt?: string | null }>, resumes_projects: Array<{ __typename?: 'projects', description: string, name_organization: string, project_name: string, project_id: string }>, resumes_skills: Array<{ __typename?: 'skills', description: string, skills_id: string }>, experience_works: Array<{ __typename?: 'experience_work', date_dismissal?: string | null, date_employment?: string | null, description?: string | null, experience_work_id: string, jobposition?: string | null, name_company: string, workLocation?: string | null }>, resumes_jobseeker?: { __typename?: 'jobseeker', account_id?: string | null, dateBirth?: string | null, email?: string | null, gender?: string | null, lastName: string, middleName: string, name: string, phone?: string | null, jobseeker_educations: Array<{ __typename?: 'jobseeker_education', average_score?: string | null, degree_education?: string | null, education_form: string, educational_institution_id?: string | null, end_date?: string | null, faculity: string, group: string, jobseeker_education_id: string, speciality: string, start_date?: string | null, jobseeker_education_educational_institution?: { __typename?: 'educational_institution', name_institution: string } | null }> } | null }> };

export type InsertResumeMutationVariables = Exact<{
  resume_name?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
}>;


export type InsertResumeMutation = { __typename?: 'mutation_root', insert_resumes?: { __typename?: 'resumes_mutation_response', returning: Array<{ __typename?: 'resumes', jobseeker_id?: string | null, resume_name: string, resume_id: string }> } | null };

export type DeleteResumeMutationVariables = Exact<{
  resume_id?: InputMaybe<Scalars['uuid']>;
}>;


export type DeleteResumeMutation = { __typename?: 'mutation_root', delete_resumes?: { __typename?: 'resumes_mutation_response', affected_rows: number } | null };

export type UpdateResumeNameMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
  resume_name?: InputMaybe<Scalars['String']>;
  desired_position?: InputMaybe<Scalars['String']>;
}>;


export type UpdateResumeNameMutation = { __typename?: 'mutation_root', update_resumes?: { __typename?: 'resumes_mutation_response', returning: Array<{ __typename?: 'resumes', resume_id: string, resume_name: string, jobseeker_id?: string | null, desired_position?: string | null }> } | null };

export type GetResumeQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetResumeQuery = { __typename?: 'query_root', resumes: Array<{ __typename?: 'resumes', jobseeker_id?: string | null, resume_id: string, resume_name: string, resumes_jobseeker?: { __typename?: 'jobseeker', lastName: string, name: string, phone?: string | null, middleName: string, dateBirth?: string | null, email?: string | null, gender?: string | null, jobseeker_educations: Array<{ __typename?: 'jobseeker_education', average_score?: string | null, education_form: string, end_date?: string | null, faculity: string, group: string, speciality: string, start_date?: string | null, jobseeker_education_educational_institution?: { __typename?: 'educational_institution', name_institution: string } | null }> } | null }> };

export type GetJobseekerContactsQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetJobseekerContactsQuery = { __typename?: 'query_root', jobseeker: Array<{ __typename?: 'jobseeker', account_id?: string | null, dateBirth?: string | null, email?: string | null, gender?: string | null, lastName: string, jobseeker_id: string, middleName: string, name: string, phone?: string | null }> };

export type UpdateContactsMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
  phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type UpdateContactsMutation = { __typename?: 'mutation_root', update_jobseeker?: { __typename?: 'jobseeker_mutation_response', returning: Array<{ __typename?: 'jobseeker', phone?: string | null, name: string, middleName: string, lastName: string, jobseeker_id: string }> } | null };

export type GetExperienceWorkQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetExperienceWorkQuery = { __typename?: 'query_root', experience_work: Array<{ __typename?: 'experience_work', date_dismissal?: string | null, date_employment?: string | null, description?: string | null, experience_work_id: string, jobposition?: string | null, name_company: string, resume_id: string, workLocation?: string | null }> };

export type InsertExperienceWorkMutationVariables = Exact<{
  date_dismissal?: InputMaybe<Scalars['String']>;
  date_employment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  jobposition?: InputMaybe<Scalars['String']>;
  name_company?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  workLocation?: InputMaybe<Scalars['String']>;
}>;


export type InsertExperienceWorkMutation = { __typename?: 'mutation_root', insert_experience_work?: { __typename?: 'experience_work_mutation_response', returning: Array<{ __typename?: 'experience_work', date_dismissal?: string | null, date_employment?: string | null, description?: string | null, experience_work_id: string, jobposition?: string | null, name_company: string, resume_id: string, workLocation?: string | null }> } | null };

export type DeleteExperienceWorkMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type DeleteExperienceWorkMutation = { __typename?: 'mutation_root', delete_experience_work?: { __typename?: 'experience_work_mutation_response', affected_rows: number } | null };

export type GetProjectsQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetProjectsQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'projects', description: string, name_organization: string, project_id: string, project_name: string, resume_id: string }> };

export type InsertProjectMutationVariables = Exact<{
  description?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
  project_name?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
}>;


export type InsertProjectMutation = { __typename?: 'mutation_root', insert_projects?: { __typename?: 'projects_mutation_response', returning: Array<{ __typename?: 'projects', description: string, name_organization: string, project_id: string, project_name: string, resume_id: string }> } | null };

export type DeleteProjectMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type DeleteProjectMutation = { __typename?: 'mutation_root', delete_projects?: { __typename?: 'projects_mutation_response', affected_rows: number } | null };

export type GetCourseQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetCourseQuery = { __typename?: 'query_root', course: Array<{ __typename?: 'course', course_id: string, course_location: string, course_name: string, date_receipt?: string | null, description: string, resume_id: string }> };

export type InsertCourseMutationVariables = Exact<{
  course_location?: InputMaybe<Scalars['String']>;
  course_name?: InputMaybe<Scalars['String']>;
  date_receipt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
}>;


export type InsertCourseMutation = { __typename?: 'mutation_root', insert_course?: { __typename?: 'course_mutation_response', returning: Array<{ __typename?: 'course', course_location: string, course_id: string, course_name: string, date_receipt?: string | null, description: string }> } | null };

export type DeleteCourseMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type DeleteCourseMutation = { __typename?: 'mutation_root', delete_course?: { __typename?: 'course_mutation_response', affected_rows: number } | null };

export type AddAdditionalInformationMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
  about_me?: InputMaybe<Scalars['String']>;
  driving_categories?: InputMaybe<Scalars['String']>;
  medical_book?: InputMaybe<Scalars['Boolean']>;
  military_service?: InputMaybe<Scalars['Boolean']>;
  desired_position?: InputMaybe<Scalars['String']>;
  programming_languages?: InputMaybe<Scalars['String']>;
}>;


export type AddAdditionalInformationMutation = { __typename?: 'mutation_root', update_resumes?: { __typename?: 'resumes_mutation_response', returning: Array<{ __typename?: 'resumes', about_me?: string | null, desired_position?: string | null, driving_categories?: string | null, jobseeker_id?: string | null, medical_book?: boolean | null, military_service?: boolean | null, resume_id: string, resume_name: string }> } | null };

export type GetSkillsQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetSkillsQuery = { __typename?: 'query_root', skills: Array<{ __typename?: 'skills', description: string, resume_id?: string | null, skills_id: string }> };

export type InsertSkillsMutationVariables = Exact<{
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
}>;


export type InsertSkillsMutation = { __typename?: 'mutation_root', insert_skills?: { __typename?: 'skills_mutation_response', returning: Array<{ __typename?: 'skills', description: string, resume_id?: string | null, skills_id: string }> } | null };

export type DeleteSkillsMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type DeleteSkillsMutation = { __typename?: 'mutation_root', delete_skills?: { __typename?: 'skills_mutation_response', affected_rows: number } | null };

export type GetHobbyQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetHobbyQuery = { __typename?: 'query_root', hobby: Array<{ __typename?: 'hobby', hobby_id: string, description: string }> };

export type InsertHobbyMutationVariables = Exact<{
  description?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
}>;


export type InsertHobbyMutation = { __typename?: 'mutation_root', insert_hobby?: { __typename?: 'hobby_mutation_response', returning: Array<{ __typename?: 'hobby', hobby_id: string, description: string }> } | null };

export type DeleteHobbyMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type DeleteHobbyMutation = { __typename?: 'mutation_root', delete_hobby?: { __typename?: 'hobby_mutation_response', affected_rows: number } | null };


export const AuthLoginDocument = gql`
    mutation AuthLogin($login: String = "", $password: String = "") {
  login_handler(login: $login, password: $password) {
    access_token
  }
}
    `;
export type AuthLoginMutationFn = Apollo.MutationFunction<AuthLoginMutation, AuthLoginMutationVariables>;

/**
 * __useAuthLoginMutation__
 *
 * To run a mutation, you first call `useAuthLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLoginMutation, { data, loading, error }] = useAuthLoginMutation({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthLoginMutation(baseOptions?: Apollo.MutationHookOptions<AuthLoginMutation, AuthLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthLoginMutation, AuthLoginMutationVariables>(AuthLoginDocument, options);
      }
export type AuthLoginMutationHookResult = ReturnType<typeof useAuthLoginMutation>;
export type AuthLoginMutationResult = Apollo.MutationResult<AuthLoginMutation>;
export type AuthLoginMutationOptions = Apollo.BaseMutationOptions<AuthLoginMutation, AuthLoginMutationVariables>;
export const UpdateTokenDocument = gql`
    mutation UpdateToken {
  refreshToken {
    access_token
  }
}
    `;
export type UpdateTokenMutationFn = Apollo.MutationFunction<UpdateTokenMutation, UpdateTokenMutationVariables>;

/**
 * __useUpdateTokenMutation__
 *
 * To run a mutation, you first call `useUpdateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTokenMutation, { data, loading, error }] = useUpdateTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useUpdateTokenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTokenMutation, UpdateTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTokenMutation, UpdateTokenMutationVariables>(UpdateTokenDocument, options);
      }
export type UpdateTokenMutationHookResult = ReturnType<typeof useUpdateTokenMutation>;
export type UpdateTokenMutationResult = Apollo.MutationResult<UpdateTokenMutation>;
export type UpdateTokenMutationOptions = Apollo.BaseMutationOptions<UpdateTokenMutation, UpdateTokenMutationVariables>;
export const SignUpJobseekerDocument = gql`
    mutation SignUpJobseeker($start_date: date = "", $speciality: String = "", $role: String = "", $phone: String = "", $password: String = "", $name_institution: String = "", $name: String = "", $middleName: String = "", $login: String = "", $lastName: String = "", $group: String = "", $gender: String = "", $faculity: String = "", $email: String = "", $end_date: date = "", $education_form: String = "", $dateBirth: date = "") {
  signUp_jobseeker(
    education_form: $education_form
    email: $email
    faculity: $faculity
    gender: $gender
    group: $group
    lastName: $lastName
    login: $login
    middleName: $middleName
    name: $name
    name_institution: $name_institution
    password: $password
    phone: $phone
    role: $role
    speciality: $speciality
    dateBirth: $dateBirth
    start_date: $start_date
    end_date: $end_date
  ) {
    account_id
  }
}
    `;
export type SignUpJobseekerMutationFn = Apollo.MutationFunction<SignUpJobseekerMutation, SignUpJobseekerMutationVariables>;

/**
 * __useSignUpJobseekerMutation__
 *
 * To run a mutation, you first call `useSignUpJobseekerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpJobseekerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpJobseekerMutation, { data, loading, error }] = useSignUpJobseekerMutation({
 *   variables: {
 *      start_date: // value for 'start_date'
 *      speciality: // value for 'speciality'
 *      role: // value for 'role'
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *      name_institution: // value for 'name_institution'
 *      name: // value for 'name'
 *      middleName: // value for 'middleName'
 *      login: // value for 'login'
 *      lastName: // value for 'lastName'
 *      group: // value for 'group'
 *      gender: // value for 'gender'
 *      faculity: // value for 'faculity'
 *      email: // value for 'email'
 *      end_date: // value for 'end_date'
 *      education_form: // value for 'education_form'
 *      dateBirth: // value for 'dateBirth'
 *   },
 * });
 */
export function useSignUpJobseekerMutation(baseOptions?: Apollo.MutationHookOptions<SignUpJobseekerMutation, SignUpJobseekerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpJobseekerMutation, SignUpJobseekerMutationVariables>(SignUpJobseekerDocument, options);
      }
export type SignUpJobseekerMutationHookResult = ReturnType<typeof useSignUpJobseekerMutation>;
export type SignUpJobseekerMutationResult = Apollo.MutationResult<SignUpJobseekerMutation>;
export type SignUpJobseekerMutationOptions = Apollo.BaseMutationOptions<SignUpJobseekerMutation, SignUpJobseekerMutationVariables>;
export const SignUpOrganizationDocument = gql`
    mutation SignUpOrganization($email: String = "", $inn_organization: String = "", $login: String = "", $name_employer: String = "", $name_organization: String = "", $password: String = "", $phone: String = "", $role: String = "") {
  signUp_employer(
    email: $email
    inn_organization: $inn_organization
    login: $login
    name_employer: $name_employer
    name_organization: $name_organization
    password: $password
    phone: $phone
    role: $role
  ) {
    status
  }
}
    `;
export type SignUpOrganizationMutationFn = Apollo.MutationFunction<SignUpOrganizationMutation, SignUpOrganizationMutationVariables>;

/**
 * __useSignUpOrganizationMutation__
 *
 * To run a mutation, you first call `useSignUpOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpOrganizationMutation, { data, loading, error }] = useSignUpOrganizationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      inn_organization: // value for 'inn_organization'
 *      login: // value for 'login'
 *      name_employer: // value for 'name_employer'
 *      name_organization: // value for 'name_organization'
 *      password: // value for 'password'
 *      phone: // value for 'phone'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useSignUpOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<SignUpOrganizationMutation, SignUpOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpOrganizationMutation, SignUpOrganizationMutationVariables>(SignUpOrganizationDocument, options);
      }
export type SignUpOrganizationMutationHookResult = ReturnType<typeof useSignUpOrganizationMutation>;
export type SignUpOrganizationMutationResult = Apollo.MutationResult<SignUpOrganizationMutation>;
export type SignUpOrganizationMutationOptions = Apollo.BaseMutationOptions<SignUpOrganizationMutation, SignUpOrganizationMutationVariables>;
export const GetAccountByIdDocument = gql`
    query GetAccountById($_eq: uuid = "") {
  account(where: {account_id: {_eq: $_eq}}) {
    account_id
    avatar
    login
    role
  }
}
    `;

/**
 * __useGetAccountByIdQuery__
 *
 * To run a query within a React component, call `useGetAccountByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountByIdQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetAccountByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetAccountByIdQuery, GetAccountByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountByIdQuery, GetAccountByIdQueryVariables>(GetAccountByIdDocument, options);
      }
export function useGetAccountByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountByIdQuery, GetAccountByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountByIdQuery, GetAccountByIdQueryVariables>(GetAccountByIdDocument, options);
        }
export type GetAccountByIdQueryHookResult = ReturnType<typeof useGetAccountByIdQuery>;
export type GetAccountByIdLazyQueryHookResult = ReturnType<typeof useGetAccountByIdLazyQuery>;
export type GetAccountByIdQueryResult = Apollo.QueryResult<GetAccountByIdQuery, GetAccountByIdQueryVariables>;
export const GetJobseekerByIdDocument = gql`
    query GetJobseekerById($_eq: uuid = "") {
  jobseeker(where: {account_id: {_eq: $_eq}}) {
    dateBirth
    email
    gender
    jobseeker_id
    lastName
    middleName
    name
    phone
    jobseeker_educations {
      average_score
      education_form
      educational_institution_id
      end_date
      faculity
      group
      speciality
      start_date
      jobseeker_education_id
      jobseeker_education_educational_institution {
        educational_institution_jobseeker_educations {
          average_score
          education_form
          educational_institution_id
          end_date
          faculity
          group
          speciality
          start_date
          jobseeker_id
          jobseeker_education_id
        }
        name_institution
      }
    }
    account_id
    account {
      login
      role
      avatar
    }
  }
}
    `;

/**
 * __useGetJobseekerByIdQuery__
 *
 * To run a query within a React component, call `useGetJobseekerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobseekerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobseekerByIdQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetJobseekerByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetJobseekerByIdQuery, GetJobseekerByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobseekerByIdQuery, GetJobseekerByIdQueryVariables>(GetJobseekerByIdDocument, options);
      }
export function useGetJobseekerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobseekerByIdQuery, GetJobseekerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobseekerByIdQuery, GetJobseekerByIdQueryVariables>(GetJobseekerByIdDocument, options);
        }
export type GetJobseekerByIdQueryHookResult = ReturnType<typeof useGetJobseekerByIdQuery>;
export type GetJobseekerByIdLazyQueryHookResult = ReturnType<typeof useGetJobseekerByIdLazyQuery>;
export type GetJobseekerByIdQueryResult = Apollo.QueryResult<GetJobseekerByIdQuery, GetJobseekerByIdQueryVariables>;
export const GetOrganizationByIdDocument = gql`
    query GetOrganizationById($_eq: uuid = "") {
  organization(where: {account_id: {_eq: $_eq}}) {
    account_id
    date_registration
    employer_id
    id_organization
    inn_organization
    kpp_organization
    main_activity
    name_organization
    ogrn
    status
    verified
    legal_address
    organization_account {
      avatar
      login
      role
    }
    organization_employer {
      email
      name_employer
      phone
    }
  }
}
    `;

/**
 * __useGetOrganizationByIdQuery__
 *
 * To run a query within a React component, call `useGetOrganizationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationByIdQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetOrganizationByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>(GetOrganizationByIdDocument, options);
      }
export function useGetOrganizationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>(GetOrganizationByIdDocument, options);
        }
export type GetOrganizationByIdQueryHookResult = ReturnType<typeof useGetOrganizationByIdQuery>;
export type GetOrganizationByIdLazyQueryHookResult = ReturnType<typeof useGetOrganizationByIdLazyQuery>;
export type GetOrganizationByIdQueryResult = Apollo.QueryResult<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>;
export const GetJobseekerEducationsDocument = gql`
    query GetJobseekerEducations($_eq: uuid = "") {
  jobseeker_education(where: {jobseeker: {account_id: {_eq: $_eq}}}) {
    average_score
    education_form
    end_date
    faculity
    group
    jobseeker_education_educational_institution {
      icon
      name_institution
      educational_institution_id
    }
    speciality
    start_date
    jobseeker_education_id
    jobseeker_id
    degree_education
  }
}
    `;

/**
 * __useGetJobseekerEducationsQuery__
 *
 * To run a query within a React component, call `useGetJobseekerEducationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobseekerEducationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobseekerEducationsQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetJobseekerEducationsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobseekerEducationsQuery, GetJobseekerEducationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobseekerEducationsQuery, GetJobseekerEducationsQueryVariables>(GetJobseekerEducationsDocument, options);
      }
export function useGetJobseekerEducationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobseekerEducationsQuery, GetJobseekerEducationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobseekerEducationsQuery, GetJobseekerEducationsQueryVariables>(GetJobseekerEducationsDocument, options);
        }
export type GetJobseekerEducationsQueryHookResult = ReturnType<typeof useGetJobseekerEducationsQuery>;
export type GetJobseekerEducationsLazyQueryHookResult = ReturnType<typeof useGetJobseekerEducationsLazyQuery>;
export type GetJobseekerEducationsQueryResult = Apollo.QueryResult<GetJobseekerEducationsQuery, GetJobseekerEducationsQueryVariables>;
export const UpdateOrganizationDocument = gql`
    mutation UpdateOrganization($_eq: uuid = "", $legal_address: String = "") {
  update_organization(
    where: {account_id: {_eq: $_eq}}
    _set: {legal_address: $legal_address}
  ) {
    returning {
      account_id
      employer_id
      id_organization
      legal_address
    }
  }
}
    `;
export type UpdateOrganizationMutationFn = Apollo.MutationFunction<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;

/**
 * __useUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganizationMutation, { data, loading, error }] = useUpdateOrganizationMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *      legal_address: // value for 'legal_address'
 *   },
 * });
 */
export function useUpdateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>(UpdateOrganizationDocument, options);
      }
export type UpdateOrganizationMutationHookResult = ReturnType<typeof useUpdateOrganizationMutation>;
export type UpdateOrganizationMutationResult = Apollo.MutationResult<UpdateOrganizationMutation>;
export type UpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;
export const UpdateEmployerDocument = gql`
    mutation UpdateEmployer($_eq: uuid = "", $email: String = "", $phone: String = "") {
  update_employer(
    where: {employer_organizations: {account_id: {_eq: $_eq}}}
    _set: {email: $email, phone: $phone}
  ) {
    returning {
      id_employer
      phone
      email
    }
  }
}
    `;
export type UpdateEmployerMutationFn = Apollo.MutationFunction<UpdateEmployerMutation, UpdateEmployerMutationVariables>;

/**
 * __useUpdateEmployerMutation__
 *
 * To run a mutation, you first call `useUpdateEmployerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmployerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmployerMutation, { data, loading, error }] = useUpdateEmployerMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useUpdateEmployerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmployerMutation, UpdateEmployerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmployerMutation, UpdateEmployerMutationVariables>(UpdateEmployerDocument, options);
      }
export type UpdateEmployerMutationHookResult = ReturnType<typeof useUpdateEmployerMutation>;
export type UpdateEmployerMutationResult = Apollo.MutationResult<UpdateEmployerMutation>;
export type UpdateEmployerMutationOptions = Apollo.BaseMutationOptions<UpdateEmployerMutation, UpdateEmployerMutationVariables>;
export const UpdateJobseekerProfileDocument = gql`
    mutation UpdateJobseekerProfile($dateBirth: String = "", $email: String = "", $gender: String = "", $lastName: String = "", $middleName: String = "", $name: String = "", $phone: String = "", $_eq: uuid = "") {
  update_jobseeker(
    where: {account_id: {_eq: $_eq}}
    _set: {dateBirth: $dateBirth, email: $email, gender: $gender, lastName: $lastName, middleName: $middleName, name: $name, phone: $phone}
  ) {
    returning {
      account_id
      jobseeker_id
    }
  }
}
    `;
export type UpdateJobseekerProfileMutationFn = Apollo.MutationFunction<UpdateJobseekerProfileMutation, UpdateJobseekerProfileMutationVariables>;

/**
 * __useUpdateJobseekerProfileMutation__
 *
 * To run a mutation, you first call `useUpdateJobseekerProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobseekerProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobseekerProfileMutation, { data, loading, error }] = useUpdateJobseekerProfileMutation({
 *   variables: {
 *      dateBirth: // value for 'dateBirth'
 *      email: // value for 'email'
 *      gender: // value for 'gender'
 *      lastName: // value for 'lastName'
 *      middleName: // value for 'middleName'
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useUpdateJobseekerProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobseekerProfileMutation, UpdateJobseekerProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJobseekerProfileMutation, UpdateJobseekerProfileMutationVariables>(UpdateJobseekerProfileDocument, options);
      }
export type UpdateJobseekerProfileMutationHookResult = ReturnType<typeof useUpdateJobseekerProfileMutation>;
export type UpdateJobseekerProfileMutationResult = Apollo.MutationResult<UpdateJobseekerProfileMutation>;
export type UpdateJobseekerProfileMutationOptions = Apollo.BaseMutationOptions<UpdateJobseekerProfileMutation, UpdateJobseekerProfileMutationVariables>;
export const GetJobseekerResumesDocument = gql`
    query GetJobseekerResumes($_eq: uuid = "") {
  resumes(where: {jobseeker_id: {_eq: $_eq}}) {
    jobseeker_id
    resume_id
    resume_name
    about_me
    data_create
    desired_position
  }
}
    `;

/**
 * __useGetJobseekerResumesQuery__
 *
 * To run a query within a React component, call `useGetJobseekerResumesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobseekerResumesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobseekerResumesQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetJobseekerResumesQuery(baseOptions?: Apollo.QueryHookOptions<GetJobseekerResumesQuery, GetJobseekerResumesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobseekerResumesQuery, GetJobseekerResumesQueryVariables>(GetJobseekerResumesDocument, options);
      }
export function useGetJobseekerResumesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobseekerResumesQuery, GetJobseekerResumesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobseekerResumesQuery, GetJobseekerResumesQueryVariables>(GetJobseekerResumesDocument, options);
        }
export type GetJobseekerResumesQueryHookResult = ReturnType<typeof useGetJobseekerResumesQuery>;
export type GetJobseekerResumesLazyQueryHookResult = ReturnType<typeof useGetJobseekerResumesLazyQuery>;
export type GetJobseekerResumesQueryResult = Apollo.QueryResult<GetJobseekerResumesQuery, GetJobseekerResumesQueryVariables>;
export const GetResumesDocument = gql`
    query GetResumes($_eq: uuid = "") {
  resumes(where: {resume_id: {_eq: $_eq}}) {
    about_me
    data_create
    desired_position
    driving_categories
    jobseeker_id
    medical_book
    military_service
    resume_id
    resume_name
    resumes_courses {
      course_id
      course_location
      course_name
      description
      date_receipt
    }
    resumes_projects {
      description
      name_organization
      project_name
      project_id
    }
    resumes_skills {
      description
      skills_id
    }
    experience_works {
      date_dismissal
      date_employment
      description
      experience_work_id
      jobposition
      name_company
      workLocation
    }
    resumes_jobseeker {
      account_id
      dateBirth
      email
      gender
      lastName
      middleName
      name
      phone
      jobseeker_educations {
        average_score
        degree_education
        education_form
        educational_institution_id
        end_date
        faculity
        group
        jobseeker_education_id
        speciality
        start_date
        jobseeker_education_educational_institution {
          name_institution
        }
      }
    }
    programming_languages
  }
}
    `;

/**
 * __useGetResumesQuery__
 *
 * To run a query within a React component, call `useGetResumesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResumesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResumesQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetResumesQuery(baseOptions?: Apollo.QueryHookOptions<GetResumesQuery, GetResumesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResumesQuery, GetResumesQueryVariables>(GetResumesDocument, options);
      }
export function useGetResumesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResumesQuery, GetResumesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResumesQuery, GetResumesQueryVariables>(GetResumesDocument, options);
        }
export type GetResumesQueryHookResult = ReturnType<typeof useGetResumesQuery>;
export type GetResumesLazyQueryHookResult = ReturnType<typeof useGetResumesLazyQuery>;
export type GetResumesQueryResult = Apollo.QueryResult<GetResumesQuery, GetResumesQueryVariables>;
export const InsertResumeDocument = gql`
    mutation InsertResume($resume_name: String = "", $jobseeker_id: uuid = "") {
  insert_resumes(
    objects: {resume_name: $resume_name, jobseeker_id: $jobseeker_id}
  ) {
    returning {
      jobseeker_id
      resume_name
      resume_id
    }
  }
}
    `;
export type InsertResumeMutationFn = Apollo.MutationFunction<InsertResumeMutation, InsertResumeMutationVariables>;

/**
 * __useInsertResumeMutation__
 *
 * To run a mutation, you first call `useInsertResumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertResumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertResumeMutation, { data, loading, error }] = useInsertResumeMutation({
 *   variables: {
 *      resume_name: // value for 'resume_name'
 *      jobseeker_id: // value for 'jobseeker_id'
 *   },
 * });
 */
export function useInsertResumeMutation(baseOptions?: Apollo.MutationHookOptions<InsertResumeMutation, InsertResumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertResumeMutation, InsertResumeMutationVariables>(InsertResumeDocument, options);
      }
export type InsertResumeMutationHookResult = ReturnType<typeof useInsertResumeMutation>;
export type InsertResumeMutationResult = Apollo.MutationResult<InsertResumeMutation>;
export type InsertResumeMutationOptions = Apollo.BaseMutationOptions<InsertResumeMutation, InsertResumeMutationVariables>;
export const DeleteResumeDocument = gql`
    mutation DeleteResume($resume_id: uuid = "") {
  delete_resumes(where: {resume_id: {_eq: $resume_id}}) {
    affected_rows
  }
}
    `;
export type DeleteResumeMutationFn = Apollo.MutationFunction<DeleteResumeMutation, DeleteResumeMutationVariables>;

/**
 * __useDeleteResumeMutation__
 *
 * To run a mutation, you first call `useDeleteResumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteResumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteResumeMutation, { data, loading, error }] = useDeleteResumeMutation({
 *   variables: {
 *      resume_id: // value for 'resume_id'
 *   },
 * });
 */
export function useDeleteResumeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteResumeMutation, DeleteResumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteResumeMutation, DeleteResumeMutationVariables>(DeleteResumeDocument, options);
      }
export type DeleteResumeMutationHookResult = ReturnType<typeof useDeleteResumeMutation>;
export type DeleteResumeMutationResult = Apollo.MutationResult<DeleteResumeMutation>;
export type DeleteResumeMutationOptions = Apollo.BaseMutationOptions<DeleteResumeMutation, DeleteResumeMutationVariables>;
export const UpdateResumeNameDocument = gql`
    mutation UpdateResumeName($_eq: uuid = "", $resume_name: String = "", $desired_position: String = "") {
  update_resumes(
    where: {resume_id: {_eq: $_eq}}
    _set: {resume_name: $resume_name, desired_position: $desired_position}
  ) {
    returning {
      resume_id
      resume_name
      jobseeker_id
      desired_position
    }
  }
}
    `;
export type UpdateResumeNameMutationFn = Apollo.MutationFunction<UpdateResumeNameMutation, UpdateResumeNameMutationVariables>;

/**
 * __useUpdateResumeNameMutation__
 *
 * To run a mutation, you first call `useUpdateResumeNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResumeNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResumeNameMutation, { data, loading, error }] = useUpdateResumeNameMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *      resume_name: // value for 'resume_name'
 *      desired_position: // value for 'desired_position'
 *   },
 * });
 */
export function useUpdateResumeNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateResumeNameMutation, UpdateResumeNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateResumeNameMutation, UpdateResumeNameMutationVariables>(UpdateResumeNameDocument, options);
      }
export type UpdateResumeNameMutationHookResult = ReturnType<typeof useUpdateResumeNameMutation>;
export type UpdateResumeNameMutationResult = Apollo.MutationResult<UpdateResumeNameMutation>;
export type UpdateResumeNameMutationOptions = Apollo.BaseMutationOptions<UpdateResumeNameMutation, UpdateResumeNameMutationVariables>;
export const GetResumeDocument = gql`
    query GetResume($_eq: uuid = "") {
  resumes(where: {resume_id: {_eq: $_eq}}) {
    jobseeker_id
    resume_id
    resume_name
    resumes_jobseeker {
      jobseeker_educations {
        average_score
        education_form
        end_date
        faculity
        group
        speciality
        start_date
        jobseeker_education_educational_institution {
          name_institution
        }
      }
      lastName
      name
      phone
      middleName
      dateBirth
      email
      gender
    }
  }
}
    `;

/**
 * __useGetResumeQuery__
 *
 * To run a query within a React component, call `useGetResumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResumeQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetResumeQuery(baseOptions?: Apollo.QueryHookOptions<GetResumeQuery, GetResumeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResumeQuery, GetResumeQueryVariables>(GetResumeDocument, options);
      }
export function useGetResumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResumeQuery, GetResumeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResumeQuery, GetResumeQueryVariables>(GetResumeDocument, options);
        }
export type GetResumeQueryHookResult = ReturnType<typeof useGetResumeQuery>;
export type GetResumeLazyQueryHookResult = ReturnType<typeof useGetResumeLazyQuery>;
export type GetResumeQueryResult = Apollo.QueryResult<GetResumeQuery, GetResumeQueryVariables>;
export const GetJobseekerContactsDocument = gql`
    query GetJobseekerContacts($_eq: uuid = "") {
  jobseeker(where: {jobseeker_resumes: {resume_id: {_eq: $_eq}}}) {
    account_id
    dateBirth
    email
    gender
    lastName
    jobseeker_id
    middleName
    name
    phone
  }
}
    `;

/**
 * __useGetJobseekerContactsQuery__
 *
 * To run a query within a React component, call `useGetJobseekerContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobseekerContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobseekerContactsQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetJobseekerContactsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobseekerContactsQuery, GetJobseekerContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobseekerContactsQuery, GetJobseekerContactsQueryVariables>(GetJobseekerContactsDocument, options);
      }
export function useGetJobseekerContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobseekerContactsQuery, GetJobseekerContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobseekerContactsQuery, GetJobseekerContactsQueryVariables>(GetJobseekerContactsDocument, options);
        }
export type GetJobseekerContactsQueryHookResult = ReturnType<typeof useGetJobseekerContactsQuery>;
export type GetJobseekerContactsLazyQueryHookResult = ReturnType<typeof useGetJobseekerContactsLazyQuery>;
export type GetJobseekerContactsQueryResult = Apollo.QueryResult<GetJobseekerContactsQuery, GetJobseekerContactsQueryVariables>;
export const UpdateContactsDocument = gql`
    mutation UpdateContacts($_eq: uuid = "", $phone: String = "", $email: String = "") {
  update_jobseeker(
    where: {account_id: {_eq: $_eq}}
    _set: {phone: $phone, email: $email}
  ) {
    returning {
      phone
      name
      middleName
      lastName
      jobseeker_id
    }
  }
}
    `;
export type UpdateContactsMutationFn = Apollo.MutationFunction<UpdateContactsMutation, UpdateContactsMutationVariables>;

/**
 * __useUpdateContactsMutation__
 *
 * To run a mutation, you first call `useUpdateContactsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContactsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContactsMutation, { data, loading, error }] = useUpdateContactsMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *      phone: // value for 'phone'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateContactsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContactsMutation, UpdateContactsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContactsMutation, UpdateContactsMutationVariables>(UpdateContactsDocument, options);
      }
export type UpdateContactsMutationHookResult = ReturnType<typeof useUpdateContactsMutation>;
export type UpdateContactsMutationResult = Apollo.MutationResult<UpdateContactsMutation>;
export type UpdateContactsMutationOptions = Apollo.BaseMutationOptions<UpdateContactsMutation, UpdateContactsMutationVariables>;
export const GetExperienceWorkDocument = gql`
    query GetExperienceWork($_eq: uuid = "") {
  experience_work(where: {resume_id: {_eq: $_eq}}) {
    date_dismissal
    date_employment
    description
    experience_work_id
    jobposition
    name_company
    resume_id
    workLocation
  }
}
    `;

/**
 * __useGetExperienceWorkQuery__
 *
 * To run a query within a React component, call `useGetExperienceWorkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExperienceWorkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExperienceWorkQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetExperienceWorkQuery(baseOptions?: Apollo.QueryHookOptions<GetExperienceWorkQuery, GetExperienceWorkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExperienceWorkQuery, GetExperienceWorkQueryVariables>(GetExperienceWorkDocument, options);
      }
export function useGetExperienceWorkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExperienceWorkQuery, GetExperienceWorkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExperienceWorkQuery, GetExperienceWorkQueryVariables>(GetExperienceWorkDocument, options);
        }
export type GetExperienceWorkQueryHookResult = ReturnType<typeof useGetExperienceWorkQuery>;
export type GetExperienceWorkLazyQueryHookResult = ReturnType<typeof useGetExperienceWorkLazyQuery>;
export type GetExperienceWorkQueryResult = Apollo.QueryResult<GetExperienceWorkQuery, GetExperienceWorkQueryVariables>;
export const InsertExperienceWorkDocument = gql`
    mutation InsertExperienceWork($date_dismissal: String = "", $date_employment: String = "", $description: String = "", $jobposition: String = "", $name_company: String = "", $resume_id: uuid = "", $workLocation: String = "") {
  insert_experience_work(
    objects: {date_dismissal: $date_dismissal, date_employment: $date_employment, description: $description, jobposition: $jobposition, name_company: $name_company, resume_id: $resume_id, workLocation: $workLocation}
  ) {
    returning {
      date_dismissal
      date_employment
      description
      experience_work_id
      jobposition
      name_company
      resume_id
      workLocation
    }
  }
}
    `;
export type InsertExperienceWorkMutationFn = Apollo.MutationFunction<InsertExperienceWorkMutation, InsertExperienceWorkMutationVariables>;

/**
 * __useInsertExperienceWorkMutation__
 *
 * To run a mutation, you first call `useInsertExperienceWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertExperienceWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertExperienceWorkMutation, { data, loading, error }] = useInsertExperienceWorkMutation({
 *   variables: {
 *      date_dismissal: // value for 'date_dismissal'
 *      date_employment: // value for 'date_employment'
 *      description: // value for 'description'
 *      jobposition: // value for 'jobposition'
 *      name_company: // value for 'name_company'
 *      resume_id: // value for 'resume_id'
 *      workLocation: // value for 'workLocation'
 *   },
 * });
 */
export function useInsertExperienceWorkMutation(baseOptions?: Apollo.MutationHookOptions<InsertExperienceWorkMutation, InsertExperienceWorkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertExperienceWorkMutation, InsertExperienceWorkMutationVariables>(InsertExperienceWorkDocument, options);
      }
export type InsertExperienceWorkMutationHookResult = ReturnType<typeof useInsertExperienceWorkMutation>;
export type InsertExperienceWorkMutationResult = Apollo.MutationResult<InsertExperienceWorkMutation>;
export type InsertExperienceWorkMutationOptions = Apollo.BaseMutationOptions<InsertExperienceWorkMutation, InsertExperienceWorkMutationVariables>;
export const DeleteExperienceWorkDocument = gql`
    mutation DeleteExperienceWork($_eq: uuid = "") {
  delete_experience_work(where: {experience_work_id: {_eq: $_eq}}) {
    affected_rows
  }
}
    `;
export type DeleteExperienceWorkMutationFn = Apollo.MutationFunction<DeleteExperienceWorkMutation, DeleteExperienceWorkMutationVariables>;

/**
 * __useDeleteExperienceWorkMutation__
 *
 * To run a mutation, you first call `useDeleteExperienceWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExperienceWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExperienceWorkMutation, { data, loading, error }] = useDeleteExperienceWorkMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteExperienceWorkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExperienceWorkMutation, DeleteExperienceWorkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExperienceWorkMutation, DeleteExperienceWorkMutationVariables>(DeleteExperienceWorkDocument, options);
      }
export type DeleteExperienceWorkMutationHookResult = ReturnType<typeof useDeleteExperienceWorkMutation>;
export type DeleteExperienceWorkMutationResult = Apollo.MutationResult<DeleteExperienceWorkMutation>;
export type DeleteExperienceWorkMutationOptions = Apollo.BaseMutationOptions<DeleteExperienceWorkMutation, DeleteExperienceWorkMutationVariables>;
export const GetProjectsDocument = gql`
    query GetProjects($_eq: uuid = "") {
  projects(where: {resume_id: {_eq: $_eq}}) {
    description
    name_organization
    project_id
    project_name
    resume_id
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const InsertProjectDocument = gql`
    mutation InsertProject($description: String = "", $name_organization: String = "", $project_name: String = "", $resume_id: uuid = "") {
  insert_projects(
    objects: {description: $description, name_organization: $name_organization, project_name: $project_name, resume_id: $resume_id}
  ) {
    returning {
      description
      name_organization
      project_id
      project_name
      resume_id
    }
  }
}
    `;
export type InsertProjectMutationFn = Apollo.MutationFunction<InsertProjectMutation, InsertProjectMutationVariables>;

/**
 * __useInsertProjectMutation__
 *
 * To run a mutation, you first call `useInsertProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProjectMutation, { data, loading, error }] = useInsertProjectMutation({
 *   variables: {
 *      description: // value for 'description'
 *      name_organization: // value for 'name_organization'
 *      project_name: // value for 'project_name'
 *      resume_id: // value for 'resume_id'
 *   },
 * });
 */
export function useInsertProjectMutation(baseOptions?: Apollo.MutationHookOptions<InsertProjectMutation, InsertProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertProjectMutation, InsertProjectMutationVariables>(InsertProjectDocument, options);
      }
export type InsertProjectMutationHookResult = ReturnType<typeof useInsertProjectMutation>;
export type InsertProjectMutationResult = Apollo.MutationResult<InsertProjectMutation>;
export type InsertProjectMutationOptions = Apollo.BaseMutationOptions<InsertProjectMutation, InsertProjectMutationVariables>;
export const DeleteProjectDocument = gql`
    mutation DeleteProject($_eq: uuid = "") {
  delete_projects(where: {project_id: {_eq: $_eq}}) {
    affected_rows
  }
}
    `;
export type DeleteProjectMutationFn = Apollo.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(DeleteProjectDocument, options);
      }
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const GetCourseDocument = gql`
    query GetCourse($_eq: uuid = "") {
  course(where: {resume_id: {_eq: $_eq}}) {
    course_id
    course_location
    course_name
    date_receipt
    description
    resume_id
  }
}
    `;

/**
 * __useGetCourseQuery__
 *
 * To run a query within a React component, call `useGetCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetCourseQuery(baseOptions?: Apollo.QueryHookOptions<GetCourseQuery, GetCourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCourseQuery, GetCourseQueryVariables>(GetCourseDocument, options);
      }
export function useGetCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCourseQuery, GetCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCourseQuery, GetCourseQueryVariables>(GetCourseDocument, options);
        }
export type GetCourseQueryHookResult = ReturnType<typeof useGetCourseQuery>;
export type GetCourseLazyQueryHookResult = ReturnType<typeof useGetCourseLazyQuery>;
export type GetCourseQueryResult = Apollo.QueryResult<GetCourseQuery, GetCourseQueryVariables>;
export const InsertCourseDocument = gql`
    mutation InsertCourse($course_location: String = "", $course_name: String = "", $date_receipt: String = "", $description: String = "", $resume_id: uuid = "") {
  insert_course(
    objects: {course_location: $course_location, course_name: $course_name, date_receipt: $date_receipt, description: $description, resume_id: $resume_id}
  ) {
    returning {
      course_location
      course_id
      course_name
      date_receipt
      description
    }
  }
}
    `;
export type InsertCourseMutationFn = Apollo.MutationFunction<InsertCourseMutation, InsertCourseMutationVariables>;

/**
 * __useInsertCourseMutation__
 *
 * To run a mutation, you first call `useInsertCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCourseMutation, { data, loading, error }] = useInsertCourseMutation({
 *   variables: {
 *      course_location: // value for 'course_location'
 *      course_name: // value for 'course_name'
 *      date_receipt: // value for 'date_receipt'
 *      description: // value for 'description'
 *      resume_id: // value for 'resume_id'
 *   },
 * });
 */
export function useInsertCourseMutation(baseOptions?: Apollo.MutationHookOptions<InsertCourseMutation, InsertCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCourseMutation, InsertCourseMutationVariables>(InsertCourseDocument, options);
      }
export type InsertCourseMutationHookResult = ReturnType<typeof useInsertCourseMutation>;
export type InsertCourseMutationResult = Apollo.MutationResult<InsertCourseMutation>;
export type InsertCourseMutationOptions = Apollo.BaseMutationOptions<InsertCourseMutation, InsertCourseMutationVariables>;
export const DeleteCourseDocument = gql`
    mutation DeleteCourse($_eq: uuid = "") {
  delete_course(where: {course_id: {_eq: $_eq}}) {
    affected_rows
  }
}
    `;
export type DeleteCourseMutationFn = Apollo.MutationFunction<DeleteCourseMutation, DeleteCourseMutationVariables>;

/**
 * __useDeleteCourseMutation__
 *
 * To run a mutation, you first call `useDeleteCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseMutation, { data, loading, error }] = useDeleteCourseMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteCourseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCourseMutation, DeleteCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCourseMutation, DeleteCourseMutationVariables>(DeleteCourseDocument, options);
      }
export type DeleteCourseMutationHookResult = ReturnType<typeof useDeleteCourseMutation>;
export type DeleteCourseMutationResult = Apollo.MutationResult<DeleteCourseMutation>;
export type DeleteCourseMutationOptions = Apollo.BaseMutationOptions<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const AddAdditionalInformationDocument = gql`
    mutation AddAdditionalInformation($_eq: uuid = "", $about_me: String = "", $driving_categories: String = "", $medical_book: Boolean = false, $military_service: Boolean = false, $desired_position: String = "", $programming_languages: String = "") {
  update_resumes(
    where: {resume_id: {_eq: $_eq}}
    _set: {about_me: $about_me, driving_categories: $driving_categories, medical_book: $medical_book, military_service: $military_service, desired_position: $desired_position, programming_languages: $programming_languages}
  ) {
    returning {
      about_me
      desired_position
      driving_categories
      jobseeker_id
      medical_book
      military_service
      resume_id
      resume_name
    }
  }
}
    `;
export type AddAdditionalInformationMutationFn = Apollo.MutationFunction<AddAdditionalInformationMutation, AddAdditionalInformationMutationVariables>;

/**
 * __useAddAdditionalInformationMutation__
 *
 * To run a mutation, you first call `useAddAdditionalInformationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAdditionalInformationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAdditionalInformationMutation, { data, loading, error }] = useAddAdditionalInformationMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *      about_me: // value for 'about_me'
 *      driving_categories: // value for 'driving_categories'
 *      medical_book: // value for 'medical_book'
 *      military_service: // value for 'military_service'
 *      desired_position: // value for 'desired_position'
 *      programming_languages: // value for 'programming_languages'
 *   },
 * });
 */
export function useAddAdditionalInformationMutation(baseOptions?: Apollo.MutationHookOptions<AddAdditionalInformationMutation, AddAdditionalInformationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAdditionalInformationMutation, AddAdditionalInformationMutationVariables>(AddAdditionalInformationDocument, options);
      }
export type AddAdditionalInformationMutationHookResult = ReturnType<typeof useAddAdditionalInformationMutation>;
export type AddAdditionalInformationMutationResult = Apollo.MutationResult<AddAdditionalInformationMutation>;
export type AddAdditionalInformationMutationOptions = Apollo.BaseMutationOptions<AddAdditionalInformationMutation, AddAdditionalInformationMutationVariables>;
export const GetSkillsDocument = gql`
    query GetSkills($_eq: uuid = "") {
  skills(where: {resume_id: {_eq: $_eq}}) {
    description
    resume_id
    skills_id
  }
}
    `;

/**
 * __useGetSkillsQuery__
 *
 * To run a query within a React component, call `useGetSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillsQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetSkillsQuery(baseOptions?: Apollo.QueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
      }
export function useGetSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
        }
export type GetSkillsQueryHookResult = ReturnType<typeof useGetSkillsQuery>;
export type GetSkillsLazyQueryHookResult = ReturnType<typeof useGetSkillsLazyQuery>;
export type GetSkillsQueryResult = Apollo.QueryResult<GetSkillsQuery, GetSkillsQueryVariables>;
export const InsertSkillsDocument = gql`
    mutation InsertSkills($description: String = "", $resume_id: uuid = "") {
  insert_skills(objects: {description: $description, resume_id: $resume_id}) {
    returning {
      description
      resume_id
      skills_id
    }
  }
}
    `;
export type InsertSkillsMutationFn = Apollo.MutationFunction<InsertSkillsMutation, InsertSkillsMutationVariables>;

/**
 * __useInsertSkillsMutation__
 *
 * To run a mutation, you first call `useInsertSkillsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSkillsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSkillsMutation, { data, loading, error }] = useInsertSkillsMutation({
 *   variables: {
 *      description: // value for 'description'
 *      resume_id: // value for 'resume_id'
 *   },
 * });
 */
export function useInsertSkillsMutation(baseOptions?: Apollo.MutationHookOptions<InsertSkillsMutation, InsertSkillsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSkillsMutation, InsertSkillsMutationVariables>(InsertSkillsDocument, options);
      }
export type InsertSkillsMutationHookResult = ReturnType<typeof useInsertSkillsMutation>;
export type InsertSkillsMutationResult = Apollo.MutationResult<InsertSkillsMutation>;
export type InsertSkillsMutationOptions = Apollo.BaseMutationOptions<InsertSkillsMutation, InsertSkillsMutationVariables>;
export const DeleteSkillsDocument = gql`
    mutation DeleteSkills($_eq: uuid = "") {
  delete_skills(where: {skills_id: {_eq: $_eq}}) {
    affected_rows
  }
}
    `;
export type DeleteSkillsMutationFn = Apollo.MutationFunction<DeleteSkillsMutation, DeleteSkillsMutationVariables>;

/**
 * __useDeleteSkillsMutation__
 *
 * To run a mutation, you first call `useDeleteSkillsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSkillsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSkillsMutation, { data, loading, error }] = useDeleteSkillsMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteSkillsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSkillsMutation, DeleteSkillsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSkillsMutation, DeleteSkillsMutationVariables>(DeleteSkillsDocument, options);
      }
export type DeleteSkillsMutationHookResult = ReturnType<typeof useDeleteSkillsMutation>;
export type DeleteSkillsMutationResult = Apollo.MutationResult<DeleteSkillsMutation>;
export type DeleteSkillsMutationOptions = Apollo.BaseMutationOptions<DeleteSkillsMutation, DeleteSkillsMutationVariables>;
export const GetHobbyDocument = gql`
    query GetHobby($_eq: uuid = "") {
  hobby(where: {resume_id: {_eq: $_eq}}) {
    hobby_id
    description
  }
}
    `;

/**
 * __useGetHobbyQuery__
 *
 * To run a query within a React component, call `useGetHobbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHobbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHobbyQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetHobbyQuery(baseOptions?: Apollo.QueryHookOptions<GetHobbyQuery, GetHobbyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHobbyQuery, GetHobbyQueryVariables>(GetHobbyDocument, options);
      }
export function useGetHobbyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHobbyQuery, GetHobbyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHobbyQuery, GetHobbyQueryVariables>(GetHobbyDocument, options);
        }
export type GetHobbyQueryHookResult = ReturnType<typeof useGetHobbyQuery>;
export type GetHobbyLazyQueryHookResult = ReturnType<typeof useGetHobbyLazyQuery>;
export type GetHobbyQueryResult = Apollo.QueryResult<GetHobbyQuery, GetHobbyQueryVariables>;
export const InsertHobbyDocument = gql`
    mutation InsertHobby($description: String = "", $resume_id: uuid = "") {
  insert_hobby(objects: {description: $description, resume_id: $resume_id}) {
    returning {
      hobby_id
      description
    }
  }
}
    `;
export type InsertHobbyMutationFn = Apollo.MutationFunction<InsertHobbyMutation, InsertHobbyMutationVariables>;

/**
 * __useInsertHobbyMutation__
 *
 * To run a mutation, you first call `useInsertHobbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertHobbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertHobbyMutation, { data, loading, error }] = useInsertHobbyMutation({
 *   variables: {
 *      description: // value for 'description'
 *      resume_id: // value for 'resume_id'
 *   },
 * });
 */
export function useInsertHobbyMutation(baseOptions?: Apollo.MutationHookOptions<InsertHobbyMutation, InsertHobbyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertHobbyMutation, InsertHobbyMutationVariables>(InsertHobbyDocument, options);
      }
export type InsertHobbyMutationHookResult = ReturnType<typeof useInsertHobbyMutation>;
export type InsertHobbyMutationResult = Apollo.MutationResult<InsertHobbyMutation>;
export type InsertHobbyMutationOptions = Apollo.BaseMutationOptions<InsertHobbyMutation, InsertHobbyMutationVariables>;
export const DeleteHobbyDocument = gql`
    mutation DeleteHobby($_eq: uuid = "") {
  delete_hobby(where: {hobby_id: {_eq: $_eq}}) {
    affected_rows
  }
}
    `;
export type DeleteHobbyMutationFn = Apollo.MutationFunction<DeleteHobbyMutation, DeleteHobbyMutationVariables>;

/**
 * __useDeleteHobbyMutation__
 *
 * To run a mutation, you first call `useDeleteHobbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHobbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHobbyMutation, { data, loading, error }] = useDeleteHobbyMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteHobbyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHobbyMutation, DeleteHobbyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHobbyMutation, DeleteHobbyMutationVariables>(DeleteHobbyDocument, options);
      }
export type DeleteHobbyMutationHookResult = ReturnType<typeof useDeleteHobbyMutation>;
export type DeleteHobbyMutationResult = Apollo.MutationResult<DeleteHobbyMutation>;
export type DeleteHobbyMutationOptions = Apollo.BaseMutationOptions<DeleteHobbyMutation, DeleteHobbyMutationVariables>;