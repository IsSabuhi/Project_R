import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  date: any
  time: string
  uuid: string
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account'
  account_id: Scalars['uuid']
  avatar?: Maybe<Scalars['String']>
  expired_token_time?: Maybe<Scalars['time']>
  /** An object relationship */
  jobseeker?: Maybe<Jobseeker>
  login: Scalars['String']
  password: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
}

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate'
  aggregate?: Maybe<Account_Aggregate_Fields>
  nodes: Array<Account>
}

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Account_Max_Fields>
  min?: Maybe<Account_Min_Fields>
}

/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>
  _not?: InputMaybe<Account_Bool_Exp>
  _or?: InputMaybe<Array<Account_Bool_Exp>>
  account_id?: InputMaybe<Uuid_Comparison_Exp>
  avatar?: InputMaybe<String_Comparison_Exp>
  expired_token_time?: InputMaybe<Time_Comparison_Exp>
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>
  login?: InputMaybe<String_Comparison_Exp>
  password?: InputMaybe<String_Comparison_Exp>
  refreshToken?: InputMaybe<String_Comparison_Exp>
  role?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint on columns "refreshToken" */
  AccountRefreshTokenKey = 'account_RefreshToken_key',
  /** unique or primary key constraint on columns "login" */
  AccountLoginKey = 'account_login_key',
  /** unique or primary key constraint on columns "account_id" */
  AccountPkey = 'account_pkey',
}

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  avatar?: InputMaybe<Scalars['String']>
  expired_token_time?: InputMaybe<Scalars['time']>
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>
  login?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  refreshToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields'
  account_id?: Maybe<Scalars['uuid']>
  avatar?: Maybe<Scalars['String']>
  login?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields'
  account_id?: Maybe<Scalars['uuid']>
  avatar?: Maybe<Scalars['String']>
  login?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Account>
}

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Account_On_Conflict>
}

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint
  update_columns?: Array<Account_Update_Column>
  where?: InputMaybe<Account_Bool_Exp>
}

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  account_id?: InputMaybe<Order_By>
  avatar?: InputMaybe<Order_By>
  expired_token_time?: InputMaybe<Order_By>
  jobseeker?: InputMaybe<Jobseeker_Order_By>
  login?: InputMaybe<Order_By>
  password?: InputMaybe<Order_By>
  refreshToken?: InputMaybe<Order_By>
  role?: InputMaybe<Order_By>
}

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  account_id: Scalars['uuid']
}

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
  Role = 'role',
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  avatar?: InputMaybe<Scalars['String']>
  expired_token_time?: InputMaybe<Scalars['time']>
  login?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  refreshToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  avatar?: InputMaybe<Scalars['String']>
  expired_token_time?: InputMaybe<Scalars['time']>
  login?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  refreshToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['String']>
}

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
  Role = 'role',
}

export type Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Set_Input>
  /** filter the rows which have to be updated */
  where: Account_Bool_Exp
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>
  _gt?: InputMaybe<Scalars['date']>
  _gte?: InputMaybe<Scalars['date']>
  _in?: InputMaybe<Array<Scalars['date']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['date']>
  _lte?: InputMaybe<Scalars['date']>
  _neq?: InputMaybe<Scalars['date']>
  _nin?: InputMaybe<Array<Scalars['date']>>
}

/** columns and relationships of "educational_institution" */
export type Educational_Institution = {
  __typename?: 'educational_institution'
  educational_institution_id: Scalars['uuid']
  /** An array relationship */
  educational_institution_jobseeker_educations: Array<Jobseeker_Education>
  /** An aggregate relationship */
  educational_institution_jobseeker_educations_aggregate: Jobseeker_Education_Aggregate
  /** An object relationship */
  educational_institution_location?: Maybe<Location>
  location_id?: Maybe<Scalars['uuid']>
  name_institution: Scalars['String']
}

/** columns and relationships of "educational_institution" */
export type Educational_InstitutionEducational_Institution_Jobseeker_EducationsArgs =
  {
    distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>
    where?: InputMaybe<Jobseeker_Education_Bool_Exp>
  }

/** columns and relationships of "educational_institution" */
export type Educational_InstitutionEducational_Institution_Jobseeker_Educations_AggregateArgs =
  {
    distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>
    where?: InputMaybe<Jobseeker_Education_Bool_Exp>
  }

/** aggregated selection of "educational_institution" */
export type Educational_Institution_Aggregate = {
  __typename?: 'educational_institution_aggregate'
  aggregate?: Maybe<Educational_Institution_Aggregate_Fields>
  nodes: Array<Educational_Institution>
}

export type Educational_Institution_Aggregate_Bool_Exp = {
  count?: InputMaybe<Educational_Institution_Aggregate_Bool_Exp_Count>
}

export type Educational_Institution_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Educational_Institution_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Educational_Institution_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "educational_institution" */
export type Educational_Institution_Aggregate_Fields = {
  __typename?: 'educational_institution_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Educational_Institution_Max_Fields>
  min?: Maybe<Educational_Institution_Min_Fields>
}

/** aggregate fields of "educational_institution" */
export type Educational_Institution_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Educational_Institution_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "educational_institution" */
export type Educational_Institution_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Educational_Institution_Max_Order_By>
  min?: InputMaybe<Educational_Institution_Min_Order_By>
}

/** input type for inserting array relation for remote table "educational_institution" */
export type Educational_Institution_Arr_Rel_Insert_Input = {
  data: Array<Educational_Institution_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Educational_Institution_On_Conflict>
}

/** Boolean expression to filter rows from the table "educational_institution". All fields are combined with a logical 'AND'. */
export type Educational_Institution_Bool_Exp = {
  _and?: InputMaybe<Array<Educational_Institution_Bool_Exp>>
  _not?: InputMaybe<Educational_Institution_Bool_Exp>
  _or?: InputMaybe<Array<Educational_Institution_Bool_Exp>>
  educational_institution_id?: InputMaybe<Uuid_Comparison_Exp>
  educational_institution_jobseeker_educations?: InputMaybe<Jobseeker_Education_Bool_Exp>
  educational_institution_jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Bool_Exp>
  educational_institution_location?: InputMaybe<Location_Bool_Exp>
  location_id?: InputMaybe<Uuid_Comparison_Exp>
  name_institution?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "educational_institution" */
export enum Educational_Institution_Constraint {
  /** unique or primary key constraint on columns "educational_institution_id" */
  EducationalInstitutionPkey = 'educational_institution_pkey',
}

/** input type for inserting data into table "educational_institution" */
export type Educational_Institution_Insert_Input = {
  educational_institution_id?: InputMaybe<Scalars['uuid']>
  educational_institution_jobseeker_educations?: InputMaybe<Jobseeker_Education_Arr_Rel_Insert_Input>
  educational_institution_location?: InputMaybe<Location_Obj_Rel_Insert_Input>
  location_id?: InputMaybe<Scalars['uuid']>
  name_institution?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Educational_Institution_Max_Fields = {
  __typename?: 'educational_institution_max_fields'
  educational_institution_id?: Maybe<Scalars['uuid']>
  location_id?: Maybe<Scalars['uuid']>
  name_institution?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "educational_institution" */
export type Educational_Institution_Max_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>
  location_id?: InputMaybe<Order_By>
  name_institution?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Educational_Institution_Min_Fields = {
  __typename?: 'educational_institution_min_fields'
  educational_institution_id?: Maybe<Scalars['uuid']>
  location_id?: Maybe<Scalars['uuid']>
  name_institution?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "educational_institution" */
export type Educational_Institution_Min_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>
  location_id?: InputMaybe<Order_By>
  name_institution?: InputMaybe<Order_By>
}

/** response of any mutation on the table "educational_institution" */
export type Educational_Institution_Mutation_Response = {
  __typename?: 'educational_institution_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Educational_Institution>
}

/** input type for inserting object relation for remote table "educational_institution" */
export type Educational_Institution_Obj_Rel_Insert_Input = {
  data: Educational_Institution_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Educational_Institution_On_Conflict>
}

/** on_conflict condition type for table "educational_institution" */
export type Educational_Institution_On_Conflict = {
  constraint: Educational_Institution_Constraint
  update_columns?: Array<Educational_Institution_Update_Column>
  where?: InputMaybe<Educational_Institution_Bool_Exp>
}

/** Ordering options when selecting data from "educational_institution". */
export type Educational_Institution_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>
  educational_institution_jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Order_By>
  educational_institution_location?: InputMaybe<Location_Order_By>
  location_id?: InputMaybe<Order_By>
  name_institution?: InputMaybe<Order_By>
}

/** primary key columns input for table: educational_institution */
export type Educational_Institution_Pk_Columns_Input = {
  educational_institution_id: Scalars['uuid']
}

/** select columns of table "educational_institution" */
export enum Educational_Institution_Select_Column {
  /** column name */
  EducationalInstitutionId = 'educational_institution_id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  NameInstitution = 'name_institution',
}

/** input type for updating data in table "educational_institution" */
export type Educational_Institution_Set_Input = {
  educational_institution_id?: InputMaybe<Scalars['uuid']>
  location_id?: InputMaybe<Scalars['uuid']>
  name_institution?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "educational_institution" */
export type Educational_Institution_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Educational_Institution_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Educational_Institution_Stream_Cursor_Value_Input = {
  educational_institution_id?: InputMaybe<Scalars['uuid']>
  location_id?: InputMaybe<Scalars['uuid']>
  name_institution?: InputMaybe<Scalars['String']>
}

/** update columns of table "educational_institution" */
export enum Educational_Institution_Update_Column {
  /** column name */
  EducationalInstitutionId = 'educational_institution_id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  NameInstitution = 'name_institution',
}

export type Educational_Institution_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Educational_Institution_Set_Input>
  /** filter the rows which have to be updated */
  where: Educational_Institution_Bool_Exp
}

/** columns and relationships of "employer" */
export type Employer = {
  __typename?: 'employer'
  email?: Maybe<Scalars['String']>
  /** An array relationship */
  employer_organizations: Array<Organization>
  /** An aggregate relationship */
  employer_organizations_aggregate: Organization_Aggregate
  id_employer: Scalars['uuid']
  name_employer: Scalars['String']
  phone?: Maybe<Scalars['String']>
}

/** columns and relationships of "employer" */
export type EmployerEmployer_OrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Organization_Order_By>>
  where?: InputMaybe<Organization_Bool_Exp>
}

/** columns and relationships of "employer" */
export type EmployerEmployer_Organizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Organization_Order_By>>
  where?: InputMaybe<Organization_Bool_Exp>
}

export type EmployerResponse = {
  __typename?: 'employerResponse'
  status: Scalars['String']
}

/** aggregated selection of "employer" */
export type Employer_Aggregate = {
  __typename?: 'employer_aggregate'
  aggregate?: Maybe<Employer_Aggregate_Fields>
  nodes: Array<Employer>
}

/** aggregate fields of "employer" */
export type Employer_Aggregate_Fields = {
  __typename?: 'employer_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Employer_Max_Fields>
  min?: Maybe<Employer_Min_Fields>
}

/** aggregate fields of "employer" */
export type Employer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employer_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "employer". All fields are combined with a logical 'AND'. */
export type Employer_Bool_Exp = {
  _and?: InputMaybe<Array<Employer_Bool_Exp>>
  _not?: InputMaybe<Employer_Bool_Exp>
  _or?: InputMaybe<Array<Employer_Bool_Exp>>
  email?: InputMaybe<String_Comparison_Exp>
  employer_organizations?: InputMaybe<Organization_Bool_Exp>
  employer_organizations_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>
  id_employer?: InputMaybe<Uuid_Comparison_Exp>
  name_employer?: InputMaybe<String_Comparison_Exp>
  phone?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "employer" */
export enum Employer_Constraint {
  /** unique or primary key constraint on columns "id_employer" */
  EmployerPkey = 'employer_pkey',
}

/** input type for inserting data into table "employer" */
export type Employer_Insert_Input = {
  email?: InputMaybe<Scalars['String']>
  employer_organizations?: InputMaybe<Organization_Arr_Rel_Insert_Input>
  id_employer?: InputMaybe<Scalars['uuid']>
  name_employer?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Employer_Max_Fields = {
  __typename?: 'employer_max_fields'
  email?: Maybe<Scalars['String']>
  id_employer?: Maybe<Scalars['uuid']>
  name_employer?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Employer_Min_Fields = {
  __typename?: 'employer_min_fields'
  email?: Maybe<Scalars['String']>
  id_employer?: Maybe<Scalars['uuid']>
  name_employer?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "employer" */
export type Employer_Mutation_Response = {
  __typename?: 'employer_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Employer>
}

/** input type for inserting object relation for remote table "employer" */
export type Employer_Obj_Rel_Insert_Input = {
  data: Employer_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Employer_On_Conflict>
}

/** on_conflict condition type for table "employer" */
export type Employer_On_Conflict = {
  constraint: Employer_Constraint
  update_columns?: Array<Employer_Update_Column>
  where?: InputMaybe<Employer_Bool_Exp>
}

/** Ordering options when selecting data from "employer". */
export type Employer_Order_By = {
  email?: InputMaybe<Order_By>
  employer_organizations_aggregate?: InputMaybe<Organization_Aggregate_Order_By>
  id_employer?: InputMaybe<Order_By>
  name_employer?: InputMaybe<Order_By>
  phone?: InputMaybe<Order_By>
}

/** primary key columns input for table: employer */
export type Employer_Pk_Columns_Input = {
  id_employer: Scalars['uuid']
}

/** select columns of table "employer" */
export enum Employer_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  IdEmployer = 'id_employer',
  /** column name */
  NameEmployer = 'name_employer',
  /** column name */
  Phone = 'phone',
}

/** input type for updating data in table "employer" */
export type Employer_Set_Input = {
  email?: InputMaybe<Scalars['String']>
  id_employer?: InputMaybe<Scalars['uuid']>
  name_employer?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "employer" */
export type Employer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Employer_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Employer_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>
  id_employer?: InputMaybe<Scalars['uuid']>
  name_employer?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

/** update columns of table "employer" */
export enum Employer_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  IdEmployer = 'id_employer',
  /** column name */
  NameEmployer = 'name_employer',
  /** column name */
  Phone = 'phone',
}

export type Employer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employer_Set_Input>
  /** filter the rows which have to be updated */
  where: Employer_Bool_Exp
}

/** columns and relationships of "jobseeker" */
export type Jobseeker = {
  __typename?: 'jobseeker'
  /** An object relationship */
  account?: Maybe<Account>
  account_id?: Maybe<Scalars['uuid']>
  dateBirth?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  /** An array relationship */
  jobseeker_educations: Array<Jobseeker_Education>
  /** An aggregate relationship */
  jobseeker_educations_aggregate: Jobseeker_Education_Aggregate
  jobseeker_id: Scalars['uuid']
  lastName: Scalars['String']
  middleName: Scalars['String']
  name: Scalars['String']
  phone?: Maybe<Scalars['String']>
}

/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_EducationsArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>
}

/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>
}

/** aggregated selection of "jobseeker" */
export type Jobseeker_Aggregate = {
  __typename?: 'jobseeker_aggregate'
  aggregate?: Maybe<Jobseeker_Aggregate_Fields>
  nodes: Array<Jobseeker>
}

/** aggregate fields of "jobseeker" */
export type Jobseeker_Aggregate_Fields = {
  __typename?: 'jobseeker_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Jobseeker_Max_Fields>
  min?: Maybe<Jobseeker_Min_Fields>
}

/** aggregate fields of "jobseeker" */
export type Jobseeker_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobseeker_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "jobseeker". All fields are combined with a logical 'AND'. */
export type Jobseeker_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Bool_Exp>>
  _not?: InputMaybe<Jobseeker_Bool_Exp>
  _or?: InputMaybe<Array<Jobseeker_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  account_id?: InputMaybe<Uuid_Comparison_Exp>
  dateBirth?: InputMaybe<String_Comparison_Exp>
  email?: InputMaybe<String_Comparison_Exp>
  gender?: InputMaybe<String_Comparison_Exp>
  jobseeker_educations?: InputMaybe<Jobseeker_Education_Bool_Exp>
  jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Bool_Exp>
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>
  lastName?: InputMaybe<String_Comparison_Exp>
  middleName?: InputMaybe<String_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  phone?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "jobseeker" */
export enum Jobseeker_Constraint {
  /** unique or primary key constraint on columns "account_id" */
  JobseekerAccountIdKey = 'jobseeker_account_id_key',
  /** unique or primary key constraint on columns "jobseeker_id" */
  JobseekerPkey = 'jobseeker_pkey',
}

/** columns and relationships of "jobseeker_education" */
export type Jobseeker_Education = {
  __typename?: 'jobseeker_education'
  average_score?: Maybe<Scalars['String']>
  education_form: Scalars['String']
  educational_institution_id?: Maybe<Scalars['uuid']>
  end_date?: Maybe<Scalars['String']>
  faculity: Scalars['String']
  group: Scalars['String']
  /** An object relationship */
  jobseeker?: Maybe<Jobseeker>
  /** An object relationship */
  jobseeker_education_educational_institution?: Maybe<Educational_Institution>
  jobseeker_education_id: Scalars['uuid']
  jobseeker_id?: Maybe<Scalars['uuid']>
  speciality: Scalars['String']
  start_date?: Maybe<Scalars['String']>
}

/** aggregated selection of "jobseeker_education" */
export type Jobseeker_Education_Aggregate = {
  __typename?: 'jobseeker_education_aggregate'
  aggregate?: Maybe<Jobseeker_Education_Aggregate_Fields>
  nodes: Array<Jobseeker_Education>
}

export type Jobseeker_Education_Aggregate_Bool_Exp = {
  count?: InputMaybe<Jobseeker_Education_Aggregate_Bool_Exp_Count>
}

export type Jobseeker_Education_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Jobseeker_Education_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "jobseeker_education" */
export type Jobseeker_Education_Aggregate_Fields = {
  __typename?: 'jobseeker_education_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Jobseeker_Education_Max_Fields>
  min?: Maybe<Jobseeker_Education_Min_Fields>
}

/** aggregate fields of "jobseeker_education" */
export type Jobseeker_Education_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "jobseeker_education" */
export type Jobseeker_Education_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Jobseeker_Education_Max_Order_By>
  min?: InputMaybe<Jobseeker_Education_Min_Order_By>
}

/** input type for inserting array relation for remote table "jobseeker_education" */
export type Jobseeker_Education_Arr_Rel_Insert_Input = {
  data: Array<Jobseeker_Education_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_Education_On_Conflict>
}

/** Boolean expression to filter rows from the table "jobseeker_education". All fields are combined with a logical 'AND'. */
export type Jobseeker_Education_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Education_Bool_Exp>>
  _not?: InputMaybe<Jobseeker_Education_Bool_Exp>
  _or?: InputMaybe<Array<Jobseeker_Education_Bool_Exp>>
  average_score?: InputMaybe<String_Comparison_Exp>
  education_form?: InputMaybe<String_Comparison_Exp>
  educational_institution_id?: InputMaybe<Uuid_Comparison_Exp>
  end_date?: InputMaybe<String_Comparison_Exp>
  faculity?: InputMaybe<String_Comparison_Exp>
  group?: InputMaybe<String_Comparison_Exp>
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>
  jobseeker_education_educational_institution?: InputMaybe<Educational_Institution_Bool_Exp>
  jobseeker_education_id?: InputMaybe<Uuid_Comparison_Exp>
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>
  speciality?: InputMaybe<String_Comparison_Exp>
  start_date?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "jobseeker_education" */
export enum Jobseeker_Education_Constraint {
  /** unique or primary key constraint on columns "jobseeker_education_id" */
  JobseekerEducationPkey = 'jobseeker_education_pkey',
}

/** input type for inserting data into table "jobseeker_education" */
export type Jobseeker_Education_Insert_Input = {
  average_score?: InputMaybe<Scalars['String']>
  education_form?: InputMaybe<Scalars['String']>
  educational_institution_id?: InputMaybe<Scalars['uuid']>
  end_date?: InputMaybe<Scalars['String']>
  faculity?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>
  jobseeker_education_educational_institution?: InputMaybe<Educational_Institution_Obj_Rel_Insert_Input>
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>
  jobseeker_id?: InputMaybe<Scalars['uuid']>
  speciality?: InputMaybe<Scalars['String']>
  start_date?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Jobseeker_Education_Max_Fields = {
  __typename?: 'jobseeker_education_max_fields'
  average_score?: Maybe<Scalars['String']>
  education_form?: Maybe<Scalars['String']>
  educational_institution_id?: Maybe<Scalars['uuid']>
  end_date?: Maybe<Scalars['String']>
  faculity?: Maybe<Scalars['String']>
  group?: Maybe<Scalars['String']>
  jobseeker_education_id?: Maybe<Scalars['uuid']>
  jobseeker_id?: Maybe<Scalars['uuid']>
  speciality?: Maybe<Scalars['String']>
  start_date?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Max_Order_By = {
  average_score?: InputMaybe<Order_By>
  education_form?: InputMaybe<Order_By>
  educational_institution_id?: InputMaybe<Order_By>
  end_date?: InputMaybe<Order_By>
  faculity?: InputMaybe<Order_By>
  group?: InputMaybe<Order_By>
  jobseeker_education_id?: InputMaybe<Order_By>
  jobseeker_id?: InputMaybe<Order_By>
  speciality?: InputMaybe<Order_By>
  start_date?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Jobseeker_Education_Min_Fields = {
  __typename?: 'jobseeker_education_min_fields'
  average_score?: Maybe<Scalars['String']>
  education_form?: Maybe<Scalars['String']>
  educational_institution_id?: Maybe<Scalars['uuid']>
  end_date?: Maybe<Scalars['String']>
  faculity?: Maybe<Scalars['String']>
  group?: Maybe<Scalars['String']>
  jobseeker_education_id?: Maybe<Scalars['uuid']>
  jobseeker_id?: Maybe<Scalars['uuid']>
  speciality?: Maybe<Scalars['String']>
  start_date?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Min_Order_By = {
  average_score?: InputMaybe<Order_By>
  education_form?: InputMaybe<Order_By>
  educational_institution_id?: InputMaybe<Order_By>
  end_date?: InputMaybe<Order_By>
  faculity?: InputMaybe<Order_By>
  group?: InputMaybe<Order_By>
  jobseeker_education_id?: InputMaybe<Order_By>
  jobseeker_id?: InputMaybe<Order_By>
  speciality?: InputMaybe<Order_By>
  start_date?: InputMaybe<Order_By>
}

/** response of any mutation on the table "jobseeker_education" */
export type Jobseeker_Education_Mutation_Response = {
  __typename?: 'jobseeker_education_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Jobseeker_Education>
}

/** on_conflict condition type for table "jobseeker_education" */
export type Jobseeker_Education_On_Conflict = {
  constraint: Jobseeker_Education_Constraint
  update_columns?: Array<Jobseeker_Education_Update_Column>
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>
}

/** Ordering options when selecting data from "jobseeker_education". */
export type Jobseeker_Education_Order_By = {
  average_score?: InputMaybe<Order_By>
  education_form?: InputMaybe<Order_By>
  educational_institution_id?: InputMaybe<Order_By>
  end_date?: InputMaybe<Order_By>
  faculity?: InputMaybe<Order_By>
  group?: InputMaybe<Order_By>
  jobseeker?: InputMaybe<Jobseeker_Order_By>
  jobseeker_education_educational_institution?: InputMaybe<Educational_Institution_Order_By>
  jobseeker_education_id?: InputMaybe<Order_By>
  jobseeker_id?: InputMaybe<Order_By>
  speciality?: InputMaybe<Order_By>
  start_date?: InputMaybe<Order_By>
}

/** primary key columns input for table: jobseeker_education */
export type Jobseeker_Education_Pk_Columns_Input = {
  jobseeker_education_id: Scalars['uuid']
}

/** select columns of table "jobseeker_education" */
export enum Jobseeker_Education_Select_Column {
  /** column name */
  AverageScore = 'average_score',
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
  StartDate = 'start_date',
}

/** input type for updating data in table "jobseeker_education" */
export type Jobseeker_Education_Set_Input = {
  average_score?: InputMaybe<Scalars['String']>
  education_form?: InputMaybe<Scalars['String']>
  educational_institution_id?: InputMaybe<Scalars['uuid']>
  end_date?: InputMaybe<Scalars['String']>
  faculity?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>
  jobseeker_id?: InputMaybe<Scalars['uuid']>
  speciality?: InputMaybe<Scalars['String']>
  start_date?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "jobseeker_education" */
export type Jobseeker_Education_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobseeker_Education_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Jobseeker_Education_Stream_Cursor_Value_Input = {
  average_score?: InputMaybe<Scalars['String']>
  education_form?: InputMaybe<Scalars['String']>
  educational_institution_id?: InputMaybe<Scalars['uuid']>
  end_date?: InputMaybe<Scalars['String']>
  faculity?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>
  jobseeker_id?: InputMaybe<Scalars['uuid']>
  speciality?: InputMaybe<Scalars['String']>
  start_date?: InputMaybe<Scalars['String']>
}

/** update columns of table "jobseeker_education" */
export enum Jobseeker_Education_Update_Column {
  /** column name */
  AverageScore = 'average_score',
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
  StartDate = 'start_date',
}

export type Jobseeker_Education_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobseeker_Education_Set_Input>
  /** filter the rows which have to be updated */
  where: Jobseeker_Education_Bool_Exp
}

/** input type for inserting data into table "jobseeker" */
export type Jobseeker_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>
  account_id?: InputMaybe<Scalars['uuid']>
  dateBirth?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Scalars['String']>
  jobseeker_educations?: InputMaybe<Jobseeker_Education_Arr_Rel_Insert_Input>
  jobseeker_id?: InputMaybe<Scalars['uuid']>
  lastName?: InputMaybe<Scalars['String']>
  middleName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Jobseeker_Max_Fields = {
  __typename?: 'jobseeker_max_fields'
  account_id?: Maybe<Scalars['uuid']>
  dateBirth?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  jobseeker_id?: Maybe<Scalars['uuid']>
  lastName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Jobseeker_Min_Fields = {
  __typename?: 'jobseeker_min_fields'
  account_id?: Maybe<Scalars['uuid']>
  dateBirth?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  jobseeker_id?: Maybe<Scalars['uuid']>
  lastName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "jobseeker" */
export type Jobseeker_Mutation_Response = {
  __typename?: 'jobseeker_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Jobseeker>
}

/** input type for inserting object relation for remote table "jobseeker" */
export type Jobseeker_Obj_Rel_Insert_Input = {
  data: Jobseeker_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_On_Conflict>
}

/** on_conflict condition type for table "jobseeker" */
export type Jobseeker_On_Conflict = {
  constraint: Jobseeker_Constraint
  update_columns?: Array<Jobseeker_Update_Column>
  where?: InputMaybe<Jobseeker_Bool_Exp>
}

/** Ordering options when selecting data from "jobseeker". */
export type Jobseeker_Order_By = {
  account?: InputMaybe<Account_Order_By>
  account_id?: InputMaybe<Order_By>
  dateBirth?: InputMaybe<Order_By>
  email?: InputMaybe<Order_By>
  gender?: InputMaybe<Order_By>
  jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Order_By>
  jobseeker_id?: InputMaybe<Order_By>
  lastName?: InputMaybe<Order_By>
  middleName?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  phone?: InputMaybe<Order_By>
}

/** primary key columns input for table: jobseeker */
export type Jobseeker_Pk_Columns_Input = {
  jobseeker_id: Scalars['uuid']
}

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
  Phone = 'phone',
}

/** input type for updating data in table "jobseeker" */
export type Jobseeker_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  dateBirth?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Scalars['String']>
  jobseeker_id?: InputMaybe<Scalars['uuid']>
  lastName?: InputMaybe<Scalars['String']>
  middleName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "jobseeker" */
export type Jobseeker_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobseeker_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Jobseeker_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  dateBirth?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Scalars['String']>
  jobseeker_id?: InputMaybe<Scalars['uuid']>
  lastName?: InputMaybe<Scalars['String']>
  middleName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

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
  Phone = 'phone',
}

export type Jobseeker_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobseeker_Set_Input>
  /** filter the rows which have to be updated */
  where: Jobseeker_Bool_Exp
}

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location'
  address?: Maybe<Scalars['String']>
  city: Scalars['String']
  country: Scalars['String']
  /** An array relationship */
  location_educational_institutions: Array<Educational_Institution>
  /** An aggregate relationship */
  location_educational_institutions_aggregate: Educational_Institution_Aggregate
  location_id: Scalars['uuid']
  postall_code?: Maybe<Scalars['Int']>
  region: Scalars['String']
  /** An object relationship */
  vacancy?: Maybe<Vacancy>
  /** An object relationship */
  work_experience?: Maybe<Work_Experience>
}

/** columns and relationships of "location" */
export type LocationLocation_Educational_InstitutionsArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>
  where?: InputMaybe<Educational_Institution_Bool_Exp>
}

/** columns and relationships of "location" */
export type LocationLocation_Educational_Institutions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>
  where?: InputMaybe<Educational_Institution_Bool_Exp>
}

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate'
  aggregate?: Maybe<Location_Aggregate_Fields>
  nodes: Array<Location>
}

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields'
  avg?: Maybe<Location_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Location_Max_Fields>
  min?: Maybe<Location_Min_Fields>
  stddev?: Maybe<Location_Stddev_Fields>
  stddev_pop?: Maybe<Location_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Location_Stddev_Samp_Fields>
  sum?: Maybe<Location_Sum_Fields>
  var_pop?: Maybe<Location_Var_Pop_Fields>
  var_samp?: Maybe<Location_Var_Samp_Fields>
  variance?: Maybe<Location_Variance_Fields>
}

/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Location_Avg_Fields = {
  __typename?: 'location_avg_fields'
  postall_code?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Bool_Exp>>
  _not?: InputMaybe<Location_Bool_Exp>
  _or?: InputMaybe<Array<Location_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  city?: InputMaybe<String_Comparison_Exp>
  country?: InputMaybe<String_Comparison_Exp>
  location_educational_institutions?: InputMaybe<Educational_Institution_Bool_Exp>
  location_educational_institutions_aggregate?: InputMaybe<Educational_Institution_Aggregate_Bool_Exp>
  location_id?: InputMaybe<Uuid_Comparison_Exp>
  postall_code?: InputMaybe<Int_Comparison_Exp>
  region?: InputMaybe<String_Comparison_Exp>
  vacancy?: InputMaybe<Vacancy_Bool_Exp>
  work_experience?: InputMaybe<Work_Experience_Bool_Exp>
}

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint on columns "location_id" */
  LocationPkey = 'location_pkey',
}

/** input type for incrementing numeric columns in table "location" */
export type Location_Inc_Input = {
  postall_code?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  address?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  location_educational_institutions?: InputMaybe<Educational_Institution_Arr_Rel_Insert_Input>
  location_id?: InputMaybe<Scalars['uuid']>
  postall_code?: InputMaybe<Scalars['Int']>
  region?: InputMaybe<Scalars['String']>
  vacancy?: InputMaybe<Vacancy_Obj_Rel_Insert_Input>
  work_experience?: InputMaybe<Work_Experience_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields'
  address?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  location_id?: Maybe<Scalars['uuid']>
  postall_code?: Maybe<Scalars['Int']>
  region?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields'
  address?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  location_id?: Maybe<Scalars['uuid']>
  postall_code?: Maybe<Scalars['Int']>
  region?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: 'location_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Location>
}

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
  data: Location_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Location_On_Conflict>
}

/** on_conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint
  update_columns?: Array<Location_Update_Column>
  where?: InputMaybe<Location_Bool_Exp>
}

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
  address?: InputMaybe<Order_By>
  city?: InputMaybe<Order_By>
  country?: InputMaybe<Order_By>
  location_educational_institutions_aggregate?: InputMaybe<Educational_Institution_Aggregate_Order_By>
  location_id?: InputMaybe<Order_By>
  postall_code?: InputMaybe<Order_By>
  region?: InputMaybe<Order_By>
  vacancy?: InputMaybe<Vacancy_Order_By>
  work_experience?: InputMaybe<Work_Experience_Order_By>
}

/** primary key columns input for table: location */
export type Location_Pk_Columns_Input = {
  location_id: Scalars['uuid']
}

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
  Region = 'region',
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  address?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  location_id?: InputMaybe<Scalars['uuid']>
  postall_code?: InputMaybe<Scalars['Int']>
  region?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
  __typename?: 'location_stddev_fields'
  postall_code?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
  __typename?: 'location_stddev_pop_fields'
  postall_code?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
  __typename?: 'location_stddev_samp_fields'
  postall_code?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "location" */
export type Location_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Location_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Location_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  location_id?: InputMaybe<Scalars['uuid']>
  postall_code?: InputMaybe<Scalars['Int']>
  region?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Location_Sum_Fields = {
  __typename?: 'location_sum_fields'
  postall_code?: Maybe<Scalars['Int']>
}

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
  Region = 'region',
}

export type Location_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Location_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Location_Set_Input>
  /** filter the rows which have to be updated */
  where: Location_Bool_Exp
}

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
  __typename?: 'location_var_pop_fields'
  postall_code?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
  __typename?: 'location_var_samp_fields'
  postall_code?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Location_Variance_Fields = {
  __typename?: 'location_variance_fields'
  postall_code?: Maybe<Scalars['Float']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>
  /** delete data from the table: "educational_institution" */
  delete_educational_institution?: Maybe<Educational_Institution_Mutation_Response>
  /** delete single row from the table: "educational_institution" */
  delete_educational_institution_by_pk?: Maybe<Educational_Institution>
  /** delete data from the table: "employer" */
  delete_employer?: Maybe<Employer_Mutation_Response>
  /** delete single row from the table: "employer" */
  delete_employer_by_pk?: Maybe<Employer>
  /** delete data from the table: "jobseeker" */
  delete_jobseeker?: Maybe<Jobseeker_Mutation_Response>
  /** delete single row from the table: "jobseeker" */
  delete_jobseeker_by_pk?: Maybe<Jobseeker>
  /** delete data from the table: "jobseeker_education" */
  delete_jobseeker_education?: Maybe<Jobseeker_Education_Mutation_Response>
  /** delete single row from the table: "jobseeker_education" */
  delete_jobseeker_education_by_pk?: Maybe<Jobseeker_Education>
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>
  /** delete data from the table: "vacancy" */
  delete_vacancy?: Maybe<Vacancy_Mutation_Response>
  /** delete single row from the table: "vacancy" */
  delete_vacancy_by_pk?: Maybe<Vacancy>
  /** delete data from the table: "work_experience" */
  delete_work_experience?: Maybe<Work_Experience_Mutation_Response>
  /** delete single row from the table: "work_experience" */
  delete_work_experience_by_pk?: Maybe<Work_Experience>
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>
  /** insert data into the table: "educational_institution" */
  insert_educational_institution?: Maybe<Educational_Institution_Mutation_Response>
  /** insert a single row into the table: "educational_institution" */
  insert_educational_institution_one?: Maybe<Educational_Institution>
  /** insert data into the table: "employer" */
  insert_employer?: Maybe<Employer_Mutation_Response>
  /** insert a single row into the table: "employer" */
  insert_employer_one?: Maybe<Employer>
  /** insert data into the table: "jobseeker" */
  insert_jobseeker?: Maybe<Jobseeker_Mutation_Response>
  /** insert data into the table: "jobseeker_education" */
  insert_jobseeker_education?: Maybe<Jobseeker_Education_Mutation_Response>
  /** insert a single row into the table: "jobseeker_education" */
  insert_jobseeker_education_one?: Maybe<Jobseeker_Education>
  /** insert a single row into the table: "jobseeker" */
  insert_jobseeker_one?: Maybe<Jobseeker>
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>
  /** insert data into the table: "vacancy" */
  insert_vacancy?: Maybe<Vacancy_Mutation_Response>
  /** insert a single row into the table: "vacancy" */
  insert_vacancy_one?: Maybe<Vacancy>
  /** insert data into the table: "work_experience" */
  insert_work_experience?: Maybe<Work_Experience_Mutation_Response>
  /** insert a single row into the table: "work_experience" */
  insert_work_experience_one?: Maybe<Work_Experience>
  login_handler?: Maybe<Response>
  password_change_handle?: Maybe<Res>
  /** refreshToken */
  refreshToken?: Maybe<RefreshTokenOutput>
  signUp_employer?: Maybe<EmployerResponse>
  signUp_jobseeker?: Maybe<Res>
  /** sign_out */
  sign_out?: Maybe<ResLogout>
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>
  /** update multiples rows of table: "account" */
  update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>
  /** update data of the table: "educational_institution" */
  update_educational_institution?: Maybe<Educational_Institution_Mutation_Response>
  /** update single row of the table: "educational_institution" */
  update_educational_institution_by_pk?: Maybe<Educational_Institution>
  /** update multiples rows of table: "educational_institution" */
  update_educational_institution_many?: Maybe<
    Array<Maybe<Educational_Institution_Mutation_Response>>
  >
  /** update data of the table: "employer" */
  update_employer?: Maybe<Employer_Mutation_Response>
  /** update single row of the table: "employer" */
  update_employer_by_pk?: Maybe<Employer>
  /** update multiples rows of table: "employer" */
  update_employer_many?: Maybe<Array<Maybe<Employer_Mutation_Response>>>
  /** update data of the table: "jobseeker" */
  update_jobseeker?: Maybe<Jobseeker_Mutation_Response>
  /** update single row of the table: "jobseeker" */
  update_jobseeker_by_pk?: Maybe<Jobseeker>
  /** update data of the table: "jobseeker_education" */
  update_jobseeker_education?: Maybe<Jobseeker_Education_Mutation_Response>
  /** update single row of the table: "jobseeker_education" */
  update_jobseeker_education_by_pk?: Maybe<Jobseeker_Education>
  /** update multiples rows of table: "jobseeker_education" */
  update_jobseeker_education_many?: Maybe<
    Array<Maybe<Jobseeker_Education_Mutation_Response>>
  >
  /** update multiples rows of table: "jobseeker" */
  update_jobseeker_many?: Maybe<Array<Maybe<Jobseeker_Mutation_Response>>>
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>
  /** update multiples rows of table: "location" */
  update_location_many?: Maybe<Array<Maybe<Location_Mutation_Response>>>
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>
  /** update multiples rows of table: "organization" */
  update_organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>
  /** update data of the table: "vacancy" */
  update_vacancy?: Maybe<Vacancy_Mutation_Response>
  /** update single row of the table: "vacancy" */
  update_vacancy_by_pk?: Maybe<Vacancy>
  /** update multiples rows of table: "vacancy" */
  update_vacancy_many?: Maybe<Array<Maybe<Vacancy_Mutation_Response>>>
  /** update data of the table: "work_experience" */
  update_work_experience?: Maybe<Work_Experience_Mutation_Response>
  /** update single row of the table: "work_experience" */
  update_work_experience_by_pk?: Maybe<Work_Experience>
  /** update multiples rows of table: "work_experience" */
  update_work_experience_many?: Maybe<
    Array<Maybe<Work_Experience_Mutation_Response>>
  >
}

/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  account_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Educational_InstitutionArgs = {
  where: Educational_Institution_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Educational_Institution_By_PkArgs = {
  educational_institution_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_EmployerArgs = {
  where: Employer_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Employer_By_PkArgs = {
  id_employer: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_JobseekerArgs = {
  where: Jobseeker_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Jobseeker_By_PkArgs = {
  jobseeker_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Jobseeker_EducationArgs = {
  where: Jobseeker_Education_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Jobseeker_Education_By_PkArgs = {
  jobseeker_education_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  location_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id_organization: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_VacancyArgs = {
  where: Vacancy_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Vacancy_By_PkArgs = {
  vacancy_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Work_ExperienceArgs = {
  where: Work_Experience_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Work_Experience_By_PkArgs = {
  work_experience_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>
  on_conflict?: InputMaybe<Account_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input
  on_conflict?: InputMaybe<Account_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Educational_InstitutionArgs = {
  objects: Array<Educational_Institution_Insert_Input>
  on_conflict?: InputMaybe<Educational_Institution_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Educational_Institution_OneArgs = {
  object: Educational_Institution_Insert_Input
  on_conflict?: InputMaybe<Educational_Institution_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_EmployerArgs = {
  objects: Array<Employer_Insert_Input>
  on_conflict?: InputMaybe<Employer_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Employer_OneArgs = {
  object: Employer_Insert_Input
  on_conflict?: InputMaybe<Employer_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_JobseekerArgs = {
  objects: Array<Jobseeker_Insert_Input>
  on_conflict?: InputMaybe<Jobseeker_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Jobseeker_EducationArgs = {
  objects: Array<Jobseeker_Education_Insert_Input>
  on_conflict?: InputMaybe<Jobseeker_Education_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Jobseeker_Education_OneArgs = {
  object: Jobseeker_Education_Insert_Input
  on_conflict?: InputMaybe<Jobseeker_Education_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Jobseeker_OneArgs = {
  object: Jobseeker_Insert_Input
  on_conflict?: InputMaybe<Jobseeker_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>
  on_conflict?: InputMaybe<Location_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input
  on_conflict?: InputMaybe<Location_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>
  on_conflict?: InputMaybe<Organization_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input
  on_conflict?: InputMaybe<Organization_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_VacancyArgs = {
  objects: Array<Vacancy_Insert_Input>
  on_conflict?: InputMaybe<Vacancy_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Vacancy_OneArgs = {
  object: Vacancy_Insert_Input
  on_conflict?: InputMaybe<Vacancy_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Work_ExperienceArgs = {
  objects: Array<Work_Experience_Insert_Input>
  on_conflict?: InputMaybe<Work_Experience_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Work_Experience_OneArgs = {
  object: Work_Experience_Insert_Input
  on_conflict?: InputMaybe<Work_Experience_On_Conflict>
}

/** mutation root */
export type Mutation_RootLogin_HandlerArgs = {
  login: Scalars['String']
  password: Scalars['String']
}

/** mutation root */
export type Mutation_RootPassword_Change_HandleArgs = {
  access_token: Scalars['String']
  account_id: Scalars['String']
  refresh_token: Scalars['String']
}

/** mutation root */
export type Mutation_RootSignUp_EmployerArgs = {
  email: Scalars['String']
  inn_organization: Scalars['String']
  login: Scalars['String']
  name_employer: Scalars['String']
  name_organization: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  role: Scalars['String']
}

/** mutation root */
export type Mutation_RootSignUp_JobseekerArgs = {
  dateBirth?: InputMaybe<Scalars['date']>
  education_form: Scalars['String']
  email: Scalars['String']
  end_date?: InputMaybe<Scalars['date']>
  faculity: Scalars['String']
  gender: Scalars['String']
  group: Scalars['String']
  lastName: Scalars['String']
  login: Scalars['String']
  middleName: Scalars['String']
  name: Scalars['String']
  name_institution: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  role: Scalars['String']
  speciality: Scalars['String']
  start_date?: InputMaybe<Scalars['date']>
}

/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _set?: InputMaybe<Account_Set_Input>
  where: Account_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _set?: InputMaybe<Account_Set_Input>
  pk_columns: Account_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: Array<Account_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Educational_InstitutionArgs = {
  _set?: InputMaybe<Educational_Institution_Set_Input>
  where: Educational_Institution_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Educational_Institution_By_PkArgs = {
  _set?: InputMaybe<Educational_Institution_Set_Input>
  pk_columns: Educational_Institution_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Educational_Institution_ManyArgs = {
  updates: Array<Educational_Institution_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_EmployerArgs = {
  _set?: InputMaybe<Employer_Set_Input>
  where: Employer_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Employer_By_PkArgs = {
  _set?: InputMaybe<Employer_Set_Input>
  pk_columns: Employer_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Employer_ManyArgs = {
  updates: Array<Employer_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_JobseekerArgs = {
  _set?: InputMaybe<Jobseeker_Set_Input>
  where: Jobseeker_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Jobseeker_By_PkArgs = {
  _set?: InputMaybe<Jobseeker_Set_Input>
  pk_columns: Jobseeker_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Jobseeker_EducationArgs = {
  _set?: InputMaybe<Jobseeker_Education_Set_Input>
  where: Jobseeker_Education_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Education_By_PkArgs = {
  _set?: InputMaybe<Jobseeker_Education_Set_Input>
  pk_columns: Jobseeker_Education_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Education_ManyArgs = {
  updates: Array<Jobseeker_Education_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Jobseeker_ManyArgs = {
  updates: Array<Jobseeker_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _inc?: InputMaybe<Location_Inc_Input>
  _set?: InputMaybe<Location_Set_Input>
  where: Location_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _inc?: InputMaybe<Location_Inc_Input>
  _set?: InputMaybe<Location_Set_Input>
  pk_columns: Location_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Location_ManyArgs = {
  updates: Array<Location_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _set?: InputMaybe<Organization_Set_Input>
  where: Organization_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _set?: InputMaybe<Organization_Set_Input>
  pk_columns: Organization_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
  updates: Array<Organization_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_VacancyArgs = {
  _inc?: InputMaybe<Vacancy_Inc_Input>
  _set?: InputMaybe<Vacancy_Set_Input>
  where: Vacancy_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Vacancy_By_PkArgs = {
  _inc?: InputMaybe<Vacancy_Inc_Input>
  _set?: InputMaybe<Vacancy_Set_Input>
  pk_columns: Vacancy_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Vacancy_ManyArgs = {
  updates: Array<Vacancy_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Work_ExperienceArgs = {
  _set?: InputMaybe<Work_Experience_Set_Input>
  where: Work_Experience_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Work_Experience_By_PkArgs = {
  _set?: InputMaybe<Work_Experience_Set_Input>
  pk_columns: Work_Experience_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Work_Experience_ManyArgs = {
  updates: Array<Work_Experience_Updates>
}

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
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "organization" */
export type Organization = {
  __typename?: 'organization'
  account_id: Scalars['uuid']
  date_registration?: Maybe<Scalars['date']>
  employer_id: Scalars['uuid']
  id_organization: Scalars['uuid']
  inn_organization: Scalars['String']
  kpp_organization?: Maybe<Scalars['String']>
  main_activity?: Maybe<Scalars['String']>
  name_organization?: Maybe<Scalars['String']>
  ogrn?: Maybe<Scalars['String']>
  /** An object relationship */
  organization_account: Account
  /** An object relationship */
  organization_employer: Employer
  status?: Maybe<Scalars['String']>
  verified: Scalars['Boolean']
}

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate'
  aggregate?: Maybe<Organization_Aggregate_Fields>
  nodes: Array<Organization>
}

export type Organization_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Organization_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Organization_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Organization_Aggregate_Bool_Exp_Count>
}

export type Organization_Aggregate_Bool_Exp_Bool_And = {
  arguments: Organization_Select_Column_Organization_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Organization_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Organization_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Organization_Select_Column_Organization_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Organization_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Organization_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Organization_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Organization_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Organization_Max_Fields>
  min?: Maybe<Organization_Min_Fields>
}

/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "organization" */
export type Organization_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Organization_Max_Order_By>
  min?: InputMaybe<Organization_Min_Order_By>
}

/** input type for inserting array relation for remote table "organization" */
export type Organization_Arr_Rel_Insert_Input = {
  data: Array<Organization_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>
}

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>
  _not?: InputMaybe<Organization_Bool_Exp>
  _or?: InputMaybe<Array<Organization_Bool_Exp>>
  account_id?: InputMaybe<Uuid_Comparison_Exp>
  date_registration?: InputMaybe<Date_Comparison_Exp>
  employer_id?: InputMaybe<Uuid_Comparison_Exp>
  id_organization?: InputMaybe<Uuid_Comparison_Exp>
  inn_organization?: InputMaybe<String_Comparison_Exp>
  kpp_organization?: InputMaybe<String_Comparison_Exp>
  main_activity?: InputMaybe<String_Comparison_Exp>
  name_organization?: InputMaybe<String_Comparison_Exp>
  ogrn?: InputMaybe<String_Comparison_Exp>
  organization_account?: InputMaybe<Account_Bool_Exp>
  organization_employer?: InputMaybe<Employer_Bool_Exp>
  status?: InputMaybe<String_Comparison_Exp>
  verified?: InputMaybe<Boolean_Comparison_Exp>
}

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
  OrganizationPkey = 'organization_pkey',
}

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  date_registration?: InputMaybe<Scalars['date']>
  employer_id?: InputMaybe<Scalars['uuid']>
  id_organization?: InputMaybe<Scalars['uuid']>
  inn_organization?: InputMaybe<Scalars['String']>
  kpp_organization?: InputMaybe<Scalars['String']>
  main_activity?: InputMaybe<Scalars['String']>
  name_organization?: InputMaybe<Scalars['String']>
  ogrn?: InputMaybe<Scalars['String']>
  organization_account?: InputMaybe<Account_Obj_Rel_Insert_Input>
  organization_employer?: InputMaybe<Employer_Obj_Rel_Insert_Input>
  status?: InputMaybe<Scalars['String']>
  verified?: InputMaybe<Scalars['Boolean']>
}

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields'
  account_id?: Maybe<Scalars['uuid']>
  date_registration?: Maybe<Scalars['date']>
  employer_id?: Maybe<Scalars['uuid']>
  id_organization?: Maybe<Scalars['uuid']>
  inn_organization?: Maybe<Scalars['String']>
  kpp_organization?: Maybe<Scalars['String']>
  main_activity?: Maybe<Scalars['String']>
  name_organization?: Maybe<Scalars['String']>
  ogrn?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "organization" */
export type Organization_Max_Order_By = {
  account_id?: InputMaybe<Order_By>
  date_registration?: InputMaybe<Order_By>
  employer_id?: InputMaybe<Order_By>
  id_organization?: InputMaybe<Order_By>
  inn_organization?: InputMaybe<Order_By>
  kpp_organization?: InputMaybe<Order_By>
  main_activity?: InputMaybe<Order_By>
  name_organization?: InputMaybe<Order_By>
  ogrn?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields'
  account_id?: Maybe<Scalars['uuid']>
  date_registration?: Maybe<Scalars['date']>
  employer_id?: Maybe<Scalars['uuid']>
  id_organization?: Maybe<Scalars['uuid']>
  inn_organization?: Maybe<Scalars['String']>
  kpp_organization?: Maybe<Scalars['String']>
  main_activity?: Maybe<Scalars['String']>
  name_organization?: Maybe<Scalars['String']>
  ogrn?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "organization" */
export type Organization_Min_Order_By = {
  account_id?: InputMaybe<Order_By>
  date_registration?: InputMaybe<Order_By>
  employer_id?: InputMaybe<Order_By>
  id_organization?: InputMaybe<Order_By>
  inn_organization?: InputMaybe<Order_By>
  kpp_organization?: InputMaybe<Order_By>
  main_activity?: InputMaybe<Order_By>
  name_organization?: InputMaybe<Order_By>
  ogrn?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Organization>
}

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint
  update_columns?: Array<Organization_Update_Column>
  where?: InputMaybe<Organization_Bool_Exp>
}

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  account_id?: InputMaybe<Order_By>
  date_registration?: InputMaybe<Order_By>
  employer_id?: InputMaybe<Order_By>
  id_organization?: InputMaybe<Order_By>
  inn_organization?: InputMaybe<Order_By>
  kpp_organization?: InputMaybe<Order_By>
  main_activity?: InputMaybe<Order_By>
  name_organization?: InputMaybe<Order_By>
  ogrn?: InputMaybe<Order_By>
  organization_account?: InputMaybe<Account_Order_By>
  organization_employer?: InputMaybe<Employer_Order_By>
  status?: InputMaybe<Order_By>
  verified?: InputMaybe<Order_By>
}

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
  id_organization: Scalars['uuid']
}

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
  MainActivity = 'main_activity',
  /** column name */
  NameOrganization = 'name_organization',
  /** column name */
  Ogrn = 'ogrn',
  /** column name */
  Status = 'status',
  /** column name */
  Verified = 'verified',
}

/** select "organization_aggregate_bool_exp_bool_and_arguments_columns" columns of table "organization" */
export enum Organization_Select_Column_Organization_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Verified = 'verified',
}

/** select "organization_aggregate_bool_exp_bool_or_arguments_columns" columns of table "organization" */
export enum Organization_Select_Column_Organization_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Verified = 'verified',
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  date_registration?: InputMaybe<Scalars['date']>
  employer_id?: InputMaybe<Scalars['uuid']>
  id_organization?: InputMaybe<Scalars['uuid']>
  inn_organization?: InputMaybe<Scalars['String']>
  kpp_organization?: InputMaybe<Scalars['String']>
  main_activity?: InputMaybe<Scalars['String']>
  name_organization?: InputMaybe<Scalars['String']>
  ogrn?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  verified?: InputMaybe<Scalars['Boolean']>
}

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['uuid']>
  date_registration?: InputMaybe<Scalars['date']>
  employer_id?: InputMaybe<Scalars['uuid']>
  id_organization?: InputMaybe<Scalars['uuid']>
  inn_organization?: InputMaybe<Scalars['String']>
  kpp_organization?: InputMaybe<Scalars['String']>
  main_activity?: InputMaybe<Scalars['String']>
  name_organization?: InputMaybe<Scalars['String']>
  ogrn?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  verified?: InputMaybe<Scalars['Boolean']>
}

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
  MainActivity = 'main_activity',
  /** column name */
  NameOrganization = 'name_organization',
  /** column name */
  Ogrn = 'ogrn',
  /** column name */
  Status = 'status',
  /** column name */
  Verified = 'verified',
}

export type Organization_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>
  /** filter the rows which have to be updated */
  where: Organization_Bool_Exp
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "account" */
  account: Array<Account>
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>
  /** fetch data from the table: "educational_institution" */
  educational_institution: Array<Educational_Institution>
  /** fetch aggregated fields from the table: "educational_institution" */
  educational_institution_aggregate: Educational_Institution_Aggregate
  /** fetch data from the table: "educational_institution" using primary key columns */
  educational_institution_by_pk?: Maybe<Educational_Institution>
  /** fetch data from the table: "employer" */
  employer: Array<Employer>
  /** fetch aggregated fields from the table: "employer" */
  employer_aggregate: Employer_Aggregate
  /** fetch data from the table: "employer" using primary key columns */
  employer_by_pk?: Maybe<Employer>
  /** fetch data from the table: "jobseeker" */
  jobseeker: Array<Jobseeker>
  /** fetch aggregated fields from the table: "jobseeker" */
  jobseeker_aggregate: Jobseeker_Aggregate
  /** fetch data from the table: "jobseeker" using primary key columns */
  jobseeker_by_pk?: Maybe<Jobseeker>
  /** fetch data from the table: "jobseeker_education" */
  jobseeker_education: Array<Jobseeker_Education>
  /** fetch aggregated fields from the table: "jobseeker_education" */
  jobseeker_education_aggregate: Jobseeker_Education_Aggregate
  /** fetch data from the table: "jobseeker_education" using primary key columns */
  jobseeker_education_by_pk?: Maybe<Jobseeker_Education>
  /** fetch data from the table: "location" */
  location: Array<Location>
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>
  /** fetch data from the table: "organization" */
  organization: Array<Organization>
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>
  /** fetch data from the table: "vacancy" */
  vacancy: Array<Vacancy>
  /** fetch aggregated fields from the table: "vacancy" */
  vacancy_aggregate: Vacancy_Aggregate
  /** fetch data from the table: "vacancy" using primary key columns */
  vacancy_by_pk?: Maybe<Vacancy>
  /** fetch data from the table: "work_experience" */
  work_experience: Array<Work_Experience>
  /** fetch aggregated fields from the table: "work_experience" */
  work_experience_aggregate: Work_Experience_Aggregate
  /** fetch data from the table: "work_experience" using primary key columns */
  work_experience_by_pk?: Maybe<Work_Experience>
}

export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Query_RootAccount_By_PkArgs = {
  account_id: Scalars['uuid']
}

export type Query_RootEducational_InstitutionArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>
  where?: InputMaybe<Educational_Institution_Bool_Exp>
}

export type Query_RootEducational_Institution_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>
  where?: InputMaybe<Educational_Institution_Bool_Exp>
}

export type Query_RootEducational_Institution_By_PkArgs = {
  educational_institution_id: Scalars['uuid']
}

export type Query_RootEmployerArgs = {
  distinct_on?: InputMaybe<Array<Employer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employer_Order_By>>
  where?: InputMaybe<Employer_Bool_Exp>
}

export type Query_RootEmployer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employer_Order_By>>
  where?: InputMaybe<Employer_Bool_Exp>
}

export type Query_RootEmployer_By_PkArgs = {
  id_employer: Scalars['uuid']
}

export type Query_RootJobseekerArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>
  where?: InputMaybe<Jobseeker_Bool_Exp>
}

export type Query_RootJobseeker_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>
  where?: InputMaybe<Jobseeker_Bool_Exp>
}

export type Query_RootJobseeker_By_PkArgs = {
  jobseeker_id: Scalars['uuid']
}

export type Query_RootJobseeker_EducationArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>
}

export type Query_RootJobseeker_Education_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>
}

export type Query_RootJobseeker_Education_By_PkArgs = {
  jobseeker_education_id: Scalars['uuid']
}

export type Query_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Location_Order_By>>
  where?: InputMaybe<Location_Bool_Exp>
}

export type Query_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Location_Order_By>>
  where?: InputMaybe<Location_Bool_Exp>
}

export type Query_RootLocation_By_PkArgs = {
  location_id: Scalars['uuid']
}

export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Organization_Order_By>>
  where?: InputMaybe<Organization_Bool_Exp>
}

export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Organization_Order_By>>
  where?: InputMaybe<Organization_Bool_Exp>
}

export type Query_RootOrganization_By_PkArgs = {
  id_organization: Scalars['uuid']
}

export type Query_RootVacancyArgs = {
  distinct_on?: InputMaybe<Array<Vacancy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vacancy_Order_By>>
  where?: InputMaybe<Vacancy_Bool_Exp>
}

export type Query_RootVacancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vacancy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vacancy_Order_By>>
  where?: InputMaybe<Vacancy_Bool_Exp>
}

export type Query_RootVacancy_By_PkArgs = {
  vacancy_id: Scalars['uuid']
}

export type Query_RootWork_ExperienceArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>
  where?: InputMaybe<Work_Experience_Bool_Exp>
}

export type Query_RootWork_Experience_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>
  where?: InputMaybe<Work_Experience_Bool_Exp>
}

export type Query_RootWork_Experience_By_PkArgs = {
  work_experience_id: Scalars['uuid']
}

export type RefreshTokenOutput = {
  __typename?: 'refreshTokenOutput'
  access_token: Scalars['String']
}

export type Res = {
  __typename?: 'res'
  account_id: Scalars['String']
}

export type ResLogout = {
  __typename?: 'resLogout'
  status: Scalars['String']
}

export type Response = {
  __typename?: 'response'
  access_token: Scalars['String']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "account" */
  account: Array<Account>
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>
  /** fetch data from the table: "educational_institution" */
  educational_institution: Array<Educational_Institution>
  /** fetch aggregated fields from the table: "educational_institution" */
  educational_institution_aggregate: Educational_Institution_Aggregate
  /** fetch data from the table: "educational_institution" using primary key columns */
  educational_institution_by_pk?: Maybe<Educational_Institution>
  /** fetch data from the table in a streaming manner: "educational_institution" */
  educational_institution_stream: Array<Educational_Institution>
  /** fetch data from the table: "employer" */
  employer: Array<Employer>
  /** fetch aggregated fields from the table: "employer" */
  employer_aggregate: Employer_Aggregate
  /** fetch data from the table: "employer" using primary key columns */
  employer_by_pk?: Maybe<Employer>
  /** fetch data from the table in a streaming manner: "employer" */
  employer_stream: Array<Employer>
  /** fetch data from the table: "jobseeker" */
  jobseeker: Array<Jobseeker>
  /** fetch aggregated fields from the table: "jobseeker" */
  jobseeker_aggregate: Jobseeker_Aggregate
  /** fetch data from the table: "jobseeker" using primary key columns */
  jobseeker_by_pk?: Maybe<Jobseeker>
  /** fetch data from the table: "jobseeker_education" */
  jobseeker_education: Array<Jobseeker_Education>
  /** fetch aggregated fields from the table: "jobseeker_education" */
  jobseeker_education_aggregate: Jobseeker_Education_Aggregate
  /** fetch data from the table: "jobseeker_education" using primary key columns */
  jobseeker_education_by_pk?: Maybe<Jobseeker_Education>
  /** fetch data from the table in a streaming manner: "jobseeker_education" */
  jobseeker_education_stream: Array<Jobseeker_Education>
  /** fetch data from the table in a streaming manner: "jobseeker" */
  jobseeker_stream: Array<Jobseeker>
  /** fetch data from the table: "location" */
  location: Array<Location>
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>
  /** fetch data from the table in a streaming manner: "location" */
  location_stream: Array<Location>
  /** fetch data from the table: "organization" */
  organization: Array<Organization>
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>
  /** fetch data from the table: "vacancy" */
  vacancy: Array<Vacancy>
  /** fetch aggregated fields from the table: "vacancy" */
  vacancy_aggregate: Vacancy_Aggregate
  /** fetch data from the table: "vacancy" using primary key columns */
  vacancy_by_pk?: Maybe<Vacancy>
  /** fetch data from the table in a streaming manner: "vacancy" */
  vacancy_stream: Array<Vacancy>
  /** fetch data from the table: "work_experience" */
  work_experience: Array<Work_Experience>
  /** fetch aggregated fields from the table: "work_experience" */
  work_experience_aggregate: Work_Experience_Aggregate
  /** fetch data from the table: "work_experience" using primary key columns */
  work_experience_by_pk?: Maybe<Work_Experience>
  /** fetch data from the table in a streaming manner: "work_experience" */
  work_experience_stream: Array<Work_Experience>
}

export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Subscription_RootAccount_By_PkArgs = {
  account_id: Scalars['uuid']
}

export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Subscription_RootEducational_InstitutionArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>
  where?: InputMaybe<Educational_Institution_Bool_Exp>
}

export type Subscription_RootEducational_Institution_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>
  where?: InputMaybe<Educational_Institution_Bool_Exp>
}

export type Subscription_RootEducational_Institution_By_PkArgs = {
  educational_institution_id: Scalars['uuid']
}

export type Subscription_RootEducational_Institution_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Educational_Institution_Stream_Cursor_Input>>
  where?: InputMaybe<Educational_Institution_Bool_Exp>
}

export type Subscription_RootEmployerArgs = {
  distinct_on?: InputMaybe<Array<Employer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employer_Order_By>>
  where?: InputMaybe<Employer_Bool_Exp>
}

export type Subscription_RootEmployer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employer_Order_By>>
  where?: InputMaybe<Employer_Bool_Exp>
}

export type Subscription_RootEmployer_By_PkArgs = {
  id_employer: Scalars['uuid']
}

export type Subscription_RootEmployer_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Employer_Stream_Cursor_Input>>
  where?: InputMaybe<Employer_Bool_Exp>
}

export type Subscription_RootJobseekerArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>
  where?: InputMaybe<Jobseeker_Bool_Exp>
}

export type Subscription_RootJobseeker_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>
  where?: InputMaybe<Jobseeker_Bool_Exp>
}

export type Subscription_RootJobseeker_By_PkArgs = {
  jobseeker_id: Scalars['uuid']
}

export type Subscription_RootJobseeker_EducationArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>
}

export type Subscription_RootJobseeker_Education_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>
}

export type Subscription_RootJobseeker_Education_By_PkArgs = {
  jobseeker_education_id: Scalars['uuid']
}

export type Subscription_RootJobseeker_Education_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Jobseeker_Education_Stream_Cursor_Input>>
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>
}

export type Subscription_RootJobseeker_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Jobseeker_Stream_Cursor_Input>>
  where?: InputMaybe<Jobseeker_Bool_Exp>
}

export type Subscription_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Location_Order_By>>
  where?: InputMaybe<Location_Bool_Exp>
}

export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Location_Order_By>>
  where?: InputMaybe<Location_Bool_Exp>
}

export type Subscription_RootLocation_By_PkArgs = {
  location_id: Scalars['uuid']
}

export type Subscription_RootLocation_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Location_Stream_Cursor_Input>>
  where?: InputMaybe<Location_Bool_Exp>
}

export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Organization_Order_By>>
  where?: InputMaybe<Organization_Bool_Exp>
}

export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Organization_Order_By>>
  where?: InputMaybe<Organization_Bool_Exp>
}

export type Subscription_RootOrganization_By_PkArgs = {
  id_organization: Scalars['uuid']
}

export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>
  where?: InputMaybe<Organization_Bool_Exp>
}

export type Subscription_RootVacancyArgs = {
  distinct_on?: InputMaybe<Array<Vacancy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vacancy_Order_By>>
  where?: InputMaybe<Vacancy_Bool_Exp>
}

export type Subscription_RootVacancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vacancy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vacancy_Order_By>>
  where?: InputMaybe<Vacancy_Bool_Exp>
}

export type Subscription_RootVacancy_By_PkArgs = {
  vacancy_id: Scalars['uuid']
}

export type Subscription_RootVacancy_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Vacancy_Stream_Cursor_Input>>
  where?: InputMaybe<Vacancy_Bool_Exp>
}

export type Subscription_RootWork_ExperienceArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>
  where?: InputMaybe<Work_Experience_Bool_Exp>
}

export type Subscription_RootWork_Experience_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>
  where?: InputMaybe<Work_Experience_Bool_Exp>
}

export type Subscription_RootWork_Experience_By_PkArgs = {
  work_experience_id: Scalars['uuid']
}

export type Subscription_RootWork_Experience_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Work_Experience_Stream_Cursor_Input>>
  where?: InputMaybe<Work_Experience_Bool_Exp>
}

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']>
  _gt?: InputMaybe<Scalars['time']>
  _gte?: InputMaybe<Scalars['time']>
  _in?: InputMaybe<Array<Scalars['time']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['time']>
  _lte?: InputMaybe<Scalars['time']>
  _neq?: InputMaybe<Scalars['time']>
  _nin?: InputMaybe<Array<Scalars['time']>>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

/** columns and relationships of "vacancy" */
export type Vacancy = {
  __typename?: 'vacancy'
  activity?: Maybe<Scalars['Boolean']>
  create_date?: Maybe<Scalars['date']>
  description?: Maybe<Scalars['String']>
  experience?: Maybe<Scalars['String']>
  key_skills?: Maybe<Scalars['String']>
  link_vacancy: Scalars['String']
  /** An object relationship */
  location?: Maybe<Location>
  location_id?: Maybe<Scalars['uuid']>
  name_vacancy: Scalars['String']
  organization: Scalars['String']
  salary?: Maybe<Scalars['Int']>
  vacancy_id: Scalars['uuid']
}

/** aggregated selection of "vacancy" */
export type Vacancy_Aggregate = {
  __typename?: 'vacancy_aggregate'
  aggregate?: Maybe<Vacancy_Aggregate_Fields>
  nodes: Array<Vacancy>
}

/** aggregate fields of "vacancy" */
export type Vacancy_Aggregate_Fields = {
  __typename?: 'vacancy_aggregate_fields'
  avg?: Maybe<Vacancy_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Vacancy_Max_Fields>
  min?: Maybe<Vacancy_Min_Fields>
  stddev?: Maybe<Vacancy_Stddev_Fields>
  stddev_pop?: Maybe<Vacancy_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Vacancy_Stddev_Samp_Fields>
  sum?: Maybe<Vacancy_Sum_Fields>
  var_pop?: Maybe<Vacancy_Var_Pop_Fields>
  var_samp?: Maybe<Vacancy_Var_Samp_Fields>
  variance?: Maybe<Vacancy_Variance_Fields>
}

/** aggregate fields of "vacancy" */
export type Vacancy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vacancy_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Vacancy_Avg_Fields = {
  __typename?: 'vacancy_avg_fields'
  salary?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "vacancy". All fields are combined with a logical 'AND'. */
export type Vacancy_Bool_Exp = {
  _and?: InputMaybe<Array<Vacancy_Bool_Exp>>
  _not?: InputMaybe<Vacancy_Bool_Exp>
  _or?: InputMaybe<Array<Vacancy_Bool_Exp>>
  activity?: InputMaybe<Boolean_Comparison_Exp>
  create_date?: InputMaybe<Date_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  experience?: InputMaybe<String_Comparison_Exp>
  key_skills?: InputMaybe<String_Comparison_Exp>
  link_vacancy?: InputMaybe<String_Comparison_Exp>
  location?: InputMaybe<Location_Bool_Exp>
  location_id?: InputMaybe<Uuid_Comparison_Exp>
  name_vacancy?: InputMaybe<String_Comparison_Exp>
  organization?: InputMaybe<String_Comparison_Exp>
  salary?: InputMaybe<Int_Comparison_Exp>
  vacancy_id?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "vacancy" */
export enum Vacancy_Constraint {
  /** unique or primary key constraint on columns "location_id" */
  VacancyLocationIdKey = 'vacancy_location_id_key',
  /** unique or primary key constraint on columns "vacancy_id" */
  VacancyPkey = 'vacancy_pkey',
}

/** input type for incrementing numeric columns in table "vacancy" */
export type Vacancy_Inc_Input = {
  salary?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "vacancy" */
export type Vacancy_Insert_Input = {
  activity?: InputMaybe<Scalars['Boolean']>
  create_date?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  experience?: InputMaybe<Scalars['String']>
  key_skills?: InputMaybe<Scalars['String']>
  link_vacancy?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Location_Obj_Rel_Insert_Input>
  location_id?: InputMaybe<Scalars['uuid']>
  name_vacancy?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  salary?: InputMaybe<Scalars['Int']>
  vacancy_id?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Vacancy_Max_Fields = {
  __typename?: 'vacancy_max_fields'
  create_date?: Maybe<Scalars['date']>
  description?: Maybe<Scalars['String']>
  experience?: Maybe<Scalars['String']>
  key_skills?: Maybe<Scalars['String']>
  link_vacancy?: Maybe<Scalars['String']>
  location_id?: Maybe<Scalars['uuid']>
  name_vacancy?: Maybe<Scalars['String']>
  organization?: Maybe<Scalars['String']>
  salary?: Maybe<Scalars['Int']>
  vacancy_id?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Vacancy_Min_Fields = {
  __typename?: 'vacancy_min_fields'
  create_date?: Maybe<Scalars['date']>
  description?: Maybe<Scalars['String']>
  experience?: Maybe<Scalars['String']>
  key_skills?: Maybe<Scalars['String']>
  link_vacancy?: Maybe<Scalars['String']>
  location_id?: Maybe<Scalars['uuid']>
  name_vacancy?: Maybe<Scalars['String']>
  organization?: Maybe<Scalars['String']>
  salary?: Maybe<Scalars['Int']>
  vacancy_id?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "vacancy" */
export type Vacancy_Mutation_Response = {
  __typename?: 'vacancy_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Vacancy>
}

/** input type for inserting object relation for remote table "vacancy" */
export type Vacancy_Obj_Rel_Insert_Input = {
  data: Vacancy_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Vacancy_On_Conflict>
}

/** on_conflict condition type for table "vacancy" */
export type Vacancy_On_Conflict = {
  constraint: Vacancy_Constraint
  update_columns?: Array<Vacancy_Update_Column>
  where?: InputMaybe<Vacancy_Bool_Exp>
}

/** Ordering options when selecting data from "vacancy". */
export type Vacancy_Order_By = {
  activity?: InputMaybe<Order_By>
  create_date?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  experience?: InputMaybe<Order_By>
  key_skills?: InputMaybe<Order_By>
  link_vacancy?: InputMaybe<Order_By>
  location?: InputMaybe<Location_Order_By>
  location_id?: InputMaybe<Order_By>
  name_vacancy?: InputMaybe<Order_By>
  organization?: InputMaybe<Order_By>
  salary?: InputMaybe<Order_By>
  vacancy_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: vacancy */
export type Vacancy_Pk_Columns_Input = {
  vacancy_id: Scalars['uuid']
}

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
  VacancyId = 'vacancy_id',
}

/** input type for updating data in table "vacancy" */
export type Vacancy_Set_Input = {
  activity?: InputMaybe<Scalars['Boolean']>
  create_date?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  experience?: InputMaybe<Scalars['String']>
  key_skills?: InputMaybe<Scalars['String']>
  link_vacancy?: InputMaybe<Scalars['String']>
  location_id?: InputMaybe<Scalars['uuid']>
  name_vacancy?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  salary?: InputMaybe<Scalars['Int']>
  vacancy_id?: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type Vacancy_Stddev_Fields = {
  __typename?: 'vacancy_stddev_fields'
  salary?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Vacancy_Stddev_Pop_Fields = {
  __typename?: 'vacancy_stddev_pop_fields'
  salary?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Vacancy_Stddev_Samp_Fields = {
  __typename?: 'vacancy_stddev_samp_fields'
  salary?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "vacancy" */
export type Vacancy_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vacancy_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Vacancy_Stream_Cursor_Value_Input = {
  activity?: InputMaybe<Scalars['Boolean']>
  create_date?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  experience?: InputMaybe<Scalars['String']>
  key_skills?: InputMaybe<Scalars['String']>
  link_vacancy?: InputMaybe<Scalars['String']>
  location_id?: InputMaybe<Scalars['uuid']>
  name_vacancy?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  salary?: InputMaybe<Scalars['Int']>
  vacancy_id?: InputMaybe<Scalars['uuid']>
}

/** aggregate sum on columns */
export type Vacancy_Sum_Fields = {
  __typename?: 'vacancy_sum_fields'
  salary?: Maybe<Scalars['Int']>
}

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
  VacancyId = 'vacancy_id',
}

export type Vacancy_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vacancy_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vacancy_Set_Input>
  /** filter the rows which have to be updated */
  where: Vacancy_Bool_Exp
}

/** aggregate var_pop on columns */
export type Vacancy_Var_Pop_Fields = {
  __typename?: 'vacancy_var_pop_fields'
  salary?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Vacancy_Var_Samp_Fields = {
  __typename?: 'vacancy_var_samp_fields'
  salary?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Vacancy_Variance_Fields = {
  __typename?: 'vacancy_variance_fields'
  salary?: Maybe<Scalars['Float']>
}

/** columns and relationships of "work_experience" */
export type Work_Experience = {
  __typename?: 'work_experience'
  Ended?: Maybe<Scalars['date']>
  description?: Maybe<Scalars['String']>
  job_position: Scalars['String']
  link?: Maybe<Scalars['String']>
  /** An object relationship */
  location?: Maybe<Location>
  location_id?: Maybe<Scalars['uuid']>
  organization: Scalars['String']
  started?: Maybe<Scalars['date']>
  tags?: Maybe<Scalars['String']>
  work_experience_id: Scalars['uuid']
}

/** aggregated selection of "work_experience" */
export type Work_Experience_Aggregate = {
  __typename?: 'work_experience_aggregate'
  aggregate?: Maybe<Work_Experience_Aggregate_Fields>
  nodes: Array<Work_Experience>
}

/** aggregate fields of "work_experience" */
export type Work_Experience_Aggregate_Fields = {
  __typename?: 'work_experience_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Work_Experience_Max_Fields>
  min?: Maybe<Work_Experience_Min_Fields>
}

/** aggregate fields of "work_experience" */
export type Work_Experience_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Work_Experience_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "work_experience". All fields are combined with a logical 'AND'. */
export type Work_Experience_Bool_Exp = {
  Ended?: InputMaybe<Date_Comparison_Exp>
  _and?: InputMaybe<Array<Work_Experience_Bool_Exp>>
  _not?: InputMaybe<Work_Experience_Bool_Exp>
  _or?: InputMaybe<Array<Work_Experience_Bool_Exp>>
  description?: InputMaybe<String_Comparison_Exp>
  job_position?: InputMaybe<String_Comparison_Exp>
  link?: InputMaybe<String_Comparison_Exp>
  location?: InputMaybe<Location_Bool_Exp>
  location_id?: InputMaybe<Uuid_Comparison_Exp>
  organization?: InputMaybe<String_Comparison_Exp>
  started?: InputMaybe<Date_Comparison_Exp>
  tags?: InputMaybe<String_Comparison_Exp>
  work_experience_id?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "work_experience" */
export enum Work_Experience_Constraint {
  /** unique or primary key constraint on columns "location_id" */
  WorkExperienceLocationKey = 'work_experience_location_key',
  /** unique or primary key constraint on columns "work_experience_id" */
  WorkExperiencePkey = 'work_experience_pkey',
}

/** input type for inserting data into table "work_experience" */
export type Work_Experience_Insert_Input = {
  Ended?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  job_position?: InputMaybe<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Location_Obj_Rel_Insert_Input>
  location_id?: InputMaybe<Scalars['uuid']>
  organization?: InputMaybe<Scalars['String']>
  started?: InputMaybe<Scalars['date']>
  tags?: InputMaybe<Scalars['String']>
  work_experience_id?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Work_Experience_Max_Fields = {
  __typename?: 'work_experience_max_fields'
  Ended?: Maybe<Scalars['date']>
  description?: Maybe<Scalars['String']>
  job_position?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  location_id?: Maybe<Scalars['uuid']>
  organization?: Maybe<Scalars['String']>
  started?: Maybe<Scalars['date']>
  tags?: Maybe<Scalars['String']>
  work_experience_id?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Work_Experience_Min_Fields = {
  __typename?: 'work_experience_min_fields'
  Ended?: Maybe<Scalars['date']>
  description?: Maybe<Scalars['String']>
  job_position?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  location_id?: Maybe<Scalars['uuid']>
  organization?: Maybe<Scalars['String']>
  started?: Maybe<Scalars['date']>
  tags?: Maybe<Scalars['String']>
  work_experience_id?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "work_experience" */
export type Work_Experience_Mutation_Response = {
  __typename?: 'work_experience_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Work_Experience>
}

/** input type for inserting object relation for remote table "work_experience" */
export type Work_Experience_Obj_Rel_Insert_Input = {
  data: Work_Experience_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Work_Experience_On_Conflict>
}

/** on_conflict condition type for table "work_experience" */
export type Work_Experience_On_Conflict = {
  constraint: Work_Experience_Constraint
  update_columns?: Array<Work_Experience_Update_Column>
  where?: InputMaybe<Work_Experience_Bool_Exp>
}

/** Ordering options when selecting data from "work_experience". */
export type Work_Experience_Order_By = {
  Ended?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  job_position?: InputMaybe<Order_By>
  link?: InputMaybe<Order_By>
  location?: InputMaybe<Location_Order_By>
  location_id?: InputMaybe<Order_By>
  organization?: InputMaybe<Order_By>
  started?: InputMaybe<Order_By>
  tags?: InputMaybe<Order_By>
  work_experience_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: work_experience */
export type Work_Experience_Pk_Columns_Input = {
  work_experience_id: Scalars['uuid']
}

/** select columns of table "work_experience" */
export enum Work_Experience_Select_Column {
  /** column name */
  Ended = 'Ended',
  /** column name */
  Description = 'description',
  /** column name */
  JobPosition = 'job_position',
  /** column name */
  Link = 'link',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Organization = 'organization',
  /** column name */
  Started = 'started',
  /** column name */
  Tags = 'tags',
  /** column name */
  WorkExperienceId = 'work_experience_id',
}

/** input type for updating data in table "work_experience" */
export type Work_Experience_Set_Input = {
  Ended?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  job_position?: InputMaybe<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
  location_id?: InputMaybe<Scalars['uuid']>
  organization?: InputMaybe<Scalars['String']>
  started?: InputMaybe<Scalars['date']>
  tags?: InputMaybe<Scalars['String']>
  work_experience_id?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "work_experience" */
export type Work_Experience_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_Experience_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Work_Experience_Stream_Cursor_Value_Input = {
  Ended?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  job_position?: InputMaybe<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
  location_id?: InputMaybe<Scalars['uuid']>
  organization?: InputMaybe<Scalars['String']>
  started?: InputMaybe<Scalars['date']>
  tags?: InputMaybe<Scalars['String']>
  work_experience_id?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "work_experience" */
export enum Work_Experience_Update_Column {
  /** column name */
  Ended = 'Ended',
  /** column name */
  Description = 'description',
  /** column name */
  JobPosition = 'job_position',
  /** column name */
  Link = 'link',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Organization = 'organization',
  /** column name */
  Started = 'started',
  /** column name */
  Tags = 'tags',
  /** column name */
  WorkExperienceId = 'work_experience_id',
}

export type Work_Experience_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Work_Experience_Set_Input>
  /** filter the rows which have to be updated */
  where: Work_Experience_Bool_Exp
}

export type AuthLoginMutationVariables = Exact<{
  login?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}>

export type AuthLoginMutation = {
  __typename?: 'mutation_root'
  login_handler?: { __typename?: 'response'; access_token: string } | null
}

export type UpdateTokenMutationVariables = Exact<{ [key: string]: never }>

export type UpdateTokenMutation = {
  __typename?: 'mutation_root'
  refreshToken?: {
    __typename?: 'refreshTokenOutput'
    access_token: string
  } | null
}

export type SignUpJobseekerMutationVariables = Exact<{
  start_date?: InputMaybe<Scalars['date']>
  speciality?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  name_institution?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  middleName?: InputMaybe<Scalars['String']>
  login?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Scalars['String']>
  faculity?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  end_date?: InputMaybe<Scalars['date']>
  education_form?: InputMaybe<Scalars['String']>
  dateBirth?: InputMaybe<Scalars['date']>
}>

export type SignUpJobseekerMutation = {
  __typename?: 'mutation_root'
  signUp_jobseeker?: { __typename?: 'res'; account_id: string } | null
}

export type SignUpOrganizationMutationVariables = Exact<{
  name_employer?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  inn_organization?: InputMaybe<Scalars['String']>
}>

export type SignUpOrganizationMutation = {
  __typename?: 'mutation_root'
  insert_employer?: {
    __typename?: 'employer_mutation_response'
    returning: Array<{
      __typename?: 'employer'
      id_employer: string
      employer_organizations: Array<{
        __typename?: 'organization'
        id_organization: string
      }>
    }>
  } | null
}

export type GetJobseekerByIdQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>
}>

export type GetJobseekerByIdQuery = {
  __typename?: 'query_root'
  jobseeker: Array<{
    __typename?: 'jobseeker'
    dateBirth?: string | null
    email?: string | null
    gender?: string | null
    jobseeker_id: string
    lastName: string
    middleName: string
    name: string
    phone?: string | null
    account_id?: string | null
    jobseeker_educations: Array<{
      __typename?: 'jobseeker_education'
      average_score?: string | null
      education_form: string
      educational_institution_id?: string | null
      end_date?: string | null
      faculity: string
      group: string
      speciality: string
      start_date?: string | null
      jobseeker_education_id: string
    }>
    account?: {
      __typename?: 'account'
      login: string
      role?: string | null
    } | null
  }>
}

export const AuthLoginDocument = gql`
  mutation AuthLogin($login: String = "", $password: String = "") {
    login_handler(login: $login, password: $password) {
      access_token
    }
  }
`
export type AuthLoginMutationFn = Apollo.MutationFunction<
  AuthLoginMutation,
  AuthLoginMutationVariables
>

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
export function useAuthLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthLoginMutation,
    AuthLoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AuthLoginMutation, AuthLoginMutationVariables>(
    AuthLoginDocument,
    options
  )
}
export type AuthLoginMutationHookResult = ReturnType<
  typeof useAuthLoginMutation
>
export type AuthLoginMutationResult = Apollo.MutationResult<AuthLoginMutation>
export type AuthLoginMutationOptions = Apollo.BaseMutationOptions<
  AuthLoginMutation,
  AuthLoginMutationVariables
>
export const UpdateTokenDocument = gql`
  mutation UpdateToken {
    refreshToken {
      access_token
    }
  }
`
export type UpdateTokenMutationFn = Apollo.MutationFunction<
  UpdateTokenMutation,
  UpdateTokenMutationVariables
>

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
export function useUpdateTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTokenMutation,
    UpdateTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateTokenMutation, UpdateTokenMutationVariables>(
    UpdateTokenDocument,
    options
  )
}
export type UpdateTokenMutationHookResult = ReturnType<
  typeof useUpdateTokenMutation
>
export type UpdateTokenMutationResult =
  Apollo.MutationResult<UpdateTokenMutation>
export type UpdateTokenMutationOptions = Apollo.BaseMutationOptions<
  UpdateTokenMutation,
  UpdateTokenMutationVariables
>
export const SignUpJobseekerDocument = gql`
  mutation SignUpJobseeker(
    $start_date: date = ""
    $speciality: String = ""
    $role: String = ""
    $phone: String = ""
    $password: String = ""
    $name_institution: String = ""
    $name: String = ""
    $middleName: String = ""
    $login: String = ""
    $lastName: String = ""
    $group: String = ""
    $gender: String = ""
    $faculity: String = ""
    $email: String = ""
    $end_date: date = ""
    $education_form: String = ""
    $dateBirth: date = ""
  ) {
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
`
export type SignUpJobseekerMutationFn = Apollo.MutationFunction<
  SignUpJobseekerMutation,
  SignUpJobseekerMutationVariables
>

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
export function useSignUpJobseekerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpJobseekerMutation,
    SignUpJobseekerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignUpJobseekerMutation,
    SignUpJobseekerMutationVariables
  >(SignUpJobseekerDocument, options)
}
export type SignUpJobseekerMutationHookResult = ReturnType<
  typeof useSignUpJobseekerMutation
>
export type SignUpJobseekerMutationResult =
  Apollo.MutationResult<SignUpJobseekerMutation>
export type SignUpJobseekerMutationOptions = Apollo.BaseMutationOptions<
  SignUpJobseekerMutation,
  SignUpJobseekerMutationVariables
>
export const SignUpOrganizationDocument = gql`
  mutation SignUpOrganization(
    $name_employer: String = ""
    $email: String = ""
    $phone: String = ""
    $inn_organization: String = ""
  ) {
    insert_employer(
      objects: {
        name_employer: $name_employer
        email: $email
        phone: $phone
        employer_organizations: {
          data: { inn_organization: $inn_organization }
        }
      }
    ) {
      returning {
        id_employer
        employer_organizations {
          id_organization
        }
      }
    }
  }
`
export type SignUpOrganizationMutationFn = Apollo.MutationFunction<
  SignUpOrganizationMutation,
  SignUpOrganizationMutationVariables
>

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
 *      name_employer: // value for 'name_employer'
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *      inn_organization: // value for 'inn_organization'
 *   },
 * });
 */
export function useSignUpOrganizationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpOrganizationMutation,
    SignUpOrganizationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignUpOrganizationMutation,
    SignUpOrganizationMutationVariables
  >(SignUpOrganizationDocument, options)
}
export type SignUpOrganizationMutationHookResult = ReturnType<
  typeof useSignUpOrganizationMutation
>
export type SignUpOrganizationMutationResult =
  Apollo.MutationResult<SignUpOrganizationMutation>
export type SignUpOrganizationMutationOptions = Apollo.BaseMutationOptions<
  SignUpOrganizationMutation,
  SignUpOrganizationMutationVariables
>
export const GetJobseekerByIdDocument = gql`
  query GetJobseekerById($_eq: uuid = "") {
    jobseeker(where: { account_id: { _eq: $_eq } }) {
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
      }
      account_id
      account {
        login
        role
      }
    }
  }
`

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
export function useGetJobseekerByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetJobseekerByIdQuery,
    GetJobseekerByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetJobseekerByIdQuery, GetJobseekerByIdQueryVariables>(
    GetJobseekerByIdDocument,
    options
  )
}
export function useGetJobseekerByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetJobseekerByIdQuery,
    GetJobseekerByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetJobseekerByIdQuery,
    GetJobseekerByIdQueryVariables
  >(GetJobseekerByIdDocument, options)
}
export type GetJobseekerByIdQueryHookResult = ReturnType<
  typeof useGetJobseekerByIdQuery
>
export type GetJobseekerByIdLazyQueryHookResult = ReturnType<
  typeof useGetJobseekerByIdLazyQuery
>
export type GetJobseekerByIdQueryResult = Apollo.QueryResult<
  GetJobseekerByIdQuery,
  GetJobseekerByIdQueryVariables
>
