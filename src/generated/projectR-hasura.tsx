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
  bigint: any;
  date: any;
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

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
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

export type SampleInput = {
  email: Scalars['String'];
  inn_employer: Scalars['String'];
  login: Scalars['String'];
  ogrn_employer: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  login: Scalars['String'];
  password: Scalars['String'];
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

export type _Service = {
  __typename?: '_Service';
  /** SDL representation of schema */
  sdl: Scalars['String'];
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  RefreshToken?: Maybe<Scalars['String']>;
  account_id: Scalars['uuid'];
  avatar?: Maybe<Scalars['String']>;
  /** An object relationship */
  jobseeker?: Maybe<Jobseeker>;
  login: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
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
  RefreshToken?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  login?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint on columns "RefreshToken" */
  AccountRefreshTokenKey = 'account_RefreshToken_key',
  /** unique or primary key constraint on columns "login" */
  AccountLoginKey = 'account_login_key',
  /** unique or primary key constraint on columns "account_id" */
  AccountPkey = 'account_pkey'
}

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  RefreshToken?: InputMaybe<Scalars['String']>;
  account_id?: InputMaybe<Scalars['uuid']>;
  avatar?: InputMaybe<Scalars['String']>;
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  login?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  RefreshToken?: Maybe<Scalars['String']>;
  account_id?: Maybe<Scalars['uuid']>;
  avatar?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  RefreshToken?: Maybe<Scalars['String']>;
  account_id?: Maybe<Scalars['uuid']>;
  avatar?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
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
  RefreshToken?: InputMaybe<Order_By>;
  account_id?: InputMaybe<Order_By>;
  avatar?: InputMaybe<Order_By>;
  jobseeker?: InputMaybe<Jobseeker_Order_By>;
  login?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  account_id: Scalars['uuid'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  RefreshToken = 'RefreshToken',
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Login = 'login',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  RefreshToken?: InputMaybe<Scalars['String']>;
  account_id?: InputMaybe<Scalars['uuid']>;
  avatar?: InputMaybe<Scalars['String']>;
  login?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
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
  RefreshToken?: InputMaybe<Scalars['String']>;
  account_id?: InputMaybe<Scalars['uuid']>;
  avatar?: InputMaybe<Scalars['String']>;
  login?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  RefreshToken = 'RefreshToken',
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Login = 'login',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role'
}

export type Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Bool_Exp;
};

/** columns and relationships of "additional_education" */
export type Additional_Education = {
  __typename?: 'additional_education';
  additional_education_id: Scalars['uuid'];
  course_name: Scalars['String'];
  duration_of_training: Scalars['String'];
  /** An array relationship */
  jobseeker_additional_educations: Array<Jobseeker_Additional_Education>;
  /** An aggregate relationship */
  jobseeker_additional_educations_aggregate: Jobseeker_Additional_Education_Aggregate;
  name_educational_institution: Scalars['String'];
  year_of_graduation: Scalars['String'];
};


/** columns and relationships of "additional_education" */
export type Additional_EducationJobseeker_Additional_EducationsArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Additional_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
};


/** columns and relationships of "additional_education" */
export type Additional_EducationJobseeker_Additional_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Additional_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
};

/** aggregated selection of "additional_education" */
export type Additional_Education_Aggregate = {
  __typename?: 'additional_education_aggregate';
  aggregate?: Maybe<Additional_Education_Aggregate_Fields>;
  nodes: Array<Additional_Education>;
};

/** aggregate fields of "additional_education" */
export type Additional_Education_Aggregate_Fields = {
  __typename?: 'additional_education_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Additional_Education_Max_Fields>;
  min?: Maybe<Additional_Education_Min_Fields>;
};


/** aggregate fields of "additional_education" */
export type Additional_Education_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Additional_Education_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "additional_education". All fields are combined with a logical 'AND'. */
export type Additional_Education_Bool_Exp = {
  _and?: InputMaybe<Array<Additional_Education_Bool_Exp>>;
  _not?: InputMaybe<Additional_Education_Bool_Exp>;
  _or?: InputMaybe<Array<Additional_Education_Bool_Exp>>;
  additional_education_id?: InputMaybe<Uuid_Comparison_Exp>;
  course_name?: InputMaybe<String_Comparison_Exp>;
  duration_of_training?: InputMaybe<String_Comparison_Exp>;
  jobseeker_additional_educations?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
  jobseeker_additional_educations_aggregate?: InputMaybe<Jobseeker_Additional_Education_Aggregate_Bool_Exp>;
  name_educational_institution?: InputMaybe<String_Comparison_Exp>;
  year_of_graduation?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "additional_education" */
export enum Additional_Education_Constraint {
  /** unique or primary key constraint on columns "additional_education_id" */
  AdditionalEducationPkey = 'additional_education_pkey'
}

/** input type for inserting data into table "additional_education" */
export type Additional_Education_Insert_Input = {
  additional_education_id?: InputMaybe<Scalars['uuid']>;
  course_name?: InputMaybe<Scalars['String']>;
  duration_of_training?: InputMaybe<Scalars['String']>;
  jobseeker_additional_educations?: InputMaybe<Jobseeker_Additional_Education_Arr_Rel_Insert_Input>;
  name_educational_institution?: InputMaybe<Scalars['String']>;
  year_of_graduation?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Additional_Education_Max_Fields = {
  __typename?: 'additional_education_max_fields';
  additional_education_id?: Maybe<Scalars['uuid']>;
  course_name?: Maybe<Scalars['String']>;
  duration_of_training?: Maybe<Scalars['String']>;
  name_educational_institution?: Maybe<Scalars['String']>;
  year_of_graduation?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Additional_Education_Min_Fields = {
  __typename?: 'additional_education_min_fields';
  additional_education_id?: Maybe<Scalars['uuid']>;
  course_name?: Maybe<Scalars['String']>;
  duration_of_training?: Maybe<Scalars['String']>;
  name_educational_institution?: Maybe<Scalars['String']>;
  year_of_graduation?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "additional_education" */
export type Additional_Education_Mutation_Response = {
  __typename?: 'additional_education_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Additional_Education>;
};

/** input type for inserting object relation for remote table "additional_education" */
export type Additional_Education_Obj_Rel_Insert_Input = {
  data: Additional_Education_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Additional_Education_On_Conflict>;
};

/** on_conflict condition type for table "additional_education" */
export type Additional_Education_On_Conflict = {
  constraint: Additional_Education_Constraint;
  update_columns?: Array<Additional_Education_Update_Column>;
  where?: InputMaybe<Additional_Education_Bool_Exp>;
};

/** Ordering options when selecting data from "additional_education". */
export type Additional_Education_Order_By = {
  additional_education_id?: InputMaybe<Order_By>;
  course_name?: InputMaybe<Order_By>;
  duration_of_training?: InputMaybe<Order_By>;
  jobseeker_additional_educations_aggregate?: InputMaybe<Jobseeker_Additional_Education_Aggregate_Order_By>;
  name_educational_institution?: InputMaybe<Order_By>;
  year_of_graduation?: InputMaybe<Order_By>;
};

/** primary key columns input for table: additional_education */
export type Additional_Education_Pk_Columns_Input = {
  additional_education_id: Scalars['uuid'];
};

/** select columns of table "additional_education" */
export enum Additional_Education_Select_Column {
  /** column name */
  AdditionalEducationId = 'additional_education_id',
  /** column name */
  CourseName = 'course_name',
  /** column name */
  DurationOfTraining = 'duration_of_training',
  /** column name */
  NameEducationalInstitution = 'name_educational_institution',
  /** column name */
  YearOfGraduation = 'year_of_graduation'
}

/** input type for updating data in table "additional_education" */
export type Additional_Education_Set_Input = {
  additional_education_id?: InputMaybe<Scalars['uuid']>;
  course_name?: InputMaybe<Scalars['String']>;
  duration_of_training?: InputMaybe<Scalars['String']>;
  name_educational_institution?: InputMaybe<Scalars['String']>;
  year_of_graduation?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "additional_education" */
export type Additional_Education_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Additional_Education_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Additional_Education_Stream_Cursor_Value_Input = {
  additional_education_id?: InputMaybe<Scalars['uuid']>;
  course_name?: InputMaybe<Scalars['String']>;
  duration_of_training?: InputMaybe<Scalars['String']>;
  name_educational_institution?: InputMaybe<Scalars['String']>;
  year_of_graduation?: InputMaybe<Scalars['String']>;
};

/** update columns of table "additional_education" */
export enum Additional_Education_Update_Column {
  /** column name */
  AdditionalEducationId = 'additional_education_id',
  /** column name */
  CourseName = 'course_name',
  /** column name */
  DurationOfTraining = 'duration_of_training',
  /** column name */
  NameEducationalInstitution = 'name_educational_institution',
  /** column name */
  YearOfGraduation = 'year_of_graduation'
}

export type Additional_Education_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Additional_Education_Set_Input>;
  /** filter the rows which have to be updated */
  where: Additional_Education_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "city_of_residence" */
export type City_Of_Residence = {
  __typename?: 'city_of_residence';
  address?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  city_of_residence_id: Scalars['uuid'];
  country: Scalars['String'];
  postal_code?: Maybe<Scalars['Int']>;
  region: Scalars['String'];
};

/** aggregated selection of "city_of_residence" */
export type City_Of_Residence_Aggregate = {
  __typename?: 'city_of_residence_aggregate';
  aggregate?: Maybe<City_Of_Residence_Aggregate_Fields>;
  nodes: Array<City_Of_Residence>;
};

/** aggregate fields of "city_of_residence" */
export type City_Of_Residence_Aggregate_Fields = {
  __typename?: 'city_of_residence_aggregate_fields';
  avg?: Maybe<City_Of_Residence_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<City_Of_Residence_Max_Fields>;
  min?: Maybe<City_Of_Residence_Min_Fields>;
  stddev?: Maybe<City_Of_Residence_Stddev_Fields>;
  stddev_pop?: Maybe<City_Of_Residence_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<City_Of_Residence_Stddev_Samp_Fields>;
  sum?: Maybe<City_Of_Residence_Sum_Fields>;
  var_pop?: Maybe<City_Of_Residence_Var_Pop_Fields>;
  var_samp?: Maybe<City_Of_Residence_Var_Samp_Fields>;
  variance?: Maybe<City_Of_Residence_Variance_Fields>;
};


/** aggregate fields of "city_of_residence" */
export type City_Of_Residence_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<City_Of_Residence_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type City_Of_Residence_Avg_Fields = {
  __typename?: 'city_of_residence_avg_fields';
  postal_code?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "city_of_residence". All fields are combined with a logical 'AND'. */
export type City_Of_Residence_Bool_Exp = {
  _and?: InputMaybe<Array<City_Of_Residence_Bool_Exp>>;
  _not?: InputMaybe<City_Of_Residence_Bool_Exp>;
  _or?: InputMaybe<Array<City_Of_Residence_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  city_of_residence_id?: InputMaybe<Uuid_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  postal_code?: InputMaybe<Int_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "city_of_residence" */
export enum City_Of_Residence_Constraint {
  /** unique or primary key constraint on columns "city_of_residence_id" */
  CityOfResidencePkey = 'city_of_residence_pkey'
}

/** input type for incrementing numeric columns in table "city_of_residence" */
export type City_Of_Residence_Inc_Input = {
  postal_code?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "city_of_residence" */
export type City_Of_Residence_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  country?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type City_Of_Residence_Max_Fields = {
  __typename?: 'city_of_residence_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  city_of_residence_id?: Maybe<Scalars['uuid']>;
  country?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type City_Of_Residence_Min_Fields = {
  __typename?: 'city_of_residence_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  city_of_residence_id?: Maybe<Scalars['uuid']>;
  country?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "city_of_residence" */
export type City_Of_Residence_Mutation_Response = {
  __typename?: 'city_of_residence_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<City_Of_Residence>;
};

/** input type for inserting object relation for remote table "city_of_residence" */
export type City_Of_Residence_Obj_Rel_Insert_Input = {
  data: City_Of_Residence_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<City_Of_Residence_On_Conflict>;
};

/** on_conflict condition type for table "city_of_residence" */
export type City_Of_Residence_On_Conflict = {
  constraint: City_Of_Residence_Constraint;
  update_columns?: Array<City_Of_Residence_Update_Column>;
  where?: InputMaybe<City_Of_Residence_Bool_Exp>;
};

/** Ordering options when selecting data from "city_of_residence". */
export type City_Of_Residence_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  city_of_residence_id?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
};

/** primary key columns input for table: city_of_residence */
export type City_Of_Residence_Pk_Columns_Input = {
  city_of_residence_id: Scalars['uuid'];
};

/** select columns of table "city_of_residence" */
export enum City_Of_Residence_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CityOfResidenceId = 'city_of_residence_id',
  /** column name */
  Country = 'country',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Region = 'region'
}

/** input type for updating data in table "city_of_residence" */
export type City_Of_Residence_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  country?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type City_Of_Residence_Stddev_Fields = {
  __typename?: 'city_of_residence_stddev_fields';
  postal_code?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type City_Of_Residence_Stddev_Pop_Fields = {
  __typename?: 'city_of_residence_stddev_pop_fields';
  postal_code?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type City_Of_Residence_Stddev_Samp_Fields = {
  __typename?: 'city_of_residence_stddev_samp_fields';
  postal_code?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "city_of_residence" */
export type City_Of_Residence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: City_Of_Residence_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type City_Of_Residence_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  country?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type City_Of_Residence_Sum_Fields = {
  __typename?: 'city_of_residence_sum_fields';
  postal_code?: Maybe<Scalars['Int']>;
};

/** update columns of table "city_of_residence" */
export enum City_Of_Residence_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CityOfResidenceId = 'city_of_residence_id',
  /** column name */
  Country = 'country',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Region = 'region'
}

export type City_Of_Residence_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<City_Of_Residence_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<City_Of_Residence_Set_Input>;
  /** filter the rows which have to be updated */
  where: City_Of_Residence_Bool_Exp;
};

/** aggregate var_pop on columns */
export type City_Of_Residence_Var_Pop_Fields = {
  __typename?: 'city_of_residence_var_pop_fields';
  postal_code?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type City_Of_Residence_Var_Samp_Fields = {
  __typename?: 'city_of_residence_var_samp_fields';
  postal_code?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type City_Of_Residence_Variance_Fields = {
  __typename?: 'city_of_residence_variance_fields';
  postal_code?: Maybe<Scalars['Float']>;
};

/** компетенции соискателей */
export type Competencies_Of_Jobseekers = {
  __typename?: 'competencies_of_jobseekers';
  competence_code: Scalars['String'];
  competencies_of_jobseekers_id: Scalars['uuid'];
  /** An object relationship */
  jobseeker_education?: Maybe<Jobseeker_Education>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  reference_name: Scalars['String'];
  /** An array relationship */
  subject_competence_info: Array<Subject_Competence_Info>;
  /** An aggregate relationship */
  subject_competence_info_aggregate: Subject_Competence_Info_Aggregate;
};


/** компетенции соискателей */
export type Competencies_Of_JobseekersSubject_Competence_InfoArgs = {
  distinct_on?: InputMaybe<Array<Subject_Competence_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subject_Competence_Info_Order_By>>;
  where?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
};


/** компетенции соискателей */
export type Competencies_Of_JobseekersSubject_Competence_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Competence_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subject_Competence_Info_Order_By>>;
  where?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
};

/** aggregated selection of "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Aggregate = {
  __typename?: 'competencies_of_jobseekers_aggregate';
  aggregate?: Maybe<Competencies_Of_Jobseekers_Aggregate_Fields>;
  nodes: Array<Competencies_Of_Jobseekers>;
};

export type Competencies_Of_Jobseekers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Competencies_Of_Jobseekers_Aggregate_Bool_Exp_Count>;
};

export type Competencies_Of_Jobseekers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Competencies_Of_Jobseekers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Aggregate_Fields = {
  __typename?: 'competencies_of_jobseekers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Competencies_Of_Jobseekers_Max_Fields>;
  min?: Maybe<Competencies_Of_Jobseekers_Min_Fields>;
};


/** aggregate fields of "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Competencies_Of_Jobseekers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Competencies_Of_Jobseekers_Max_Order_By>;
  min?: InputMaybe<Competencies_Of_Jobseekers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Arr_Rel_Insert_Input = {
  data: Array<Competencies_Of_Jobseekers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Competencies_Of_Jobseekers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "competencies_of_jobseekers". All fields are combined with a logical 'AND'. */
export type Competencies_Of_Jobseekers_Bool_Exp = {
  _and?: InputMaybe<Array<Competencies_Of_Jobseekers_Bool_Exp>>;
  _not?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
  _or?: InputMaybe<Array<Competencies_Of_Jobseekers_Bool_Exp>>;
  competence_code?: InputMaybe<String_Comparison_Exp>;
  competencies_of_jobseekers_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker_education?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  jobseeker_education_id?: InputMaybe<Uuid_Comparison_Exp>;
  reference_name?: InputMaybe<String_Comparison_Exp>;
  subject_competence_info?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
  subject_competence_info_aggregate?: InputMaybe<Subject_Competence_Info_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "competencies_of_jobseekers" */
export enum Competencies_Of_Jobseekers_Constraint {
  /** unique or primary key constraint on columns "competencies_of_jobseekers_id" */
  CompetenciesOfJobseekersPkey = 'competencies_of_jobseekers_pkey'
}

/** input type for inserting data into table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Insert_Input = {
  competence_code?: InputMaybe<Scalars['String']>;
  competencies_of_jobseekers_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_education?: InputMaybe<Jobseeker_Education_Obj_Rel_Insert_Input>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  reference_name?: InputMaybe<Scalars['String']>;
  subject_competence_info?: InputMaybe<Subject_Competence_Info_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Competencies_Of_Jobseekers_Max_Fields = {
  __typename?: 'competencies_of_jobseekers_max_fields';
  competence_code?: Maybe<Scalars['String']>;
  competencies_of_jobseekers_id?: Maybe<Scalars['uuid']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  reference_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Max_Order_By = {
  competence_code?: InputMaybe<Order_By>;
  competencies_of_jobseekers_id?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  reference_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Competencies_Of_Jobseekers_Min_Fields = {
  __typename?: 'competencies_of_jobseekers_min_fields';
  competence_code?: Maybe<Scalars['String']>;
  competencies_of_jobseekers_id?: Maybe<Scalars['uuid']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  reference_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Min_Order_By = {
  competence_code?: InputMaybe<Order_By>;
  competencies_of_jobseekers_id?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  reference_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Mutation_Response = {
  __typename?: 'competencies_of_jobseekers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Competencies_Of_Jobseekers>;
};

/** input type for inserting object relation for remote table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Obj_Rel_Insert_Input = {
  data: Competencies_Of_Jobseekers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Competencies_Of_Jobseekers_On_Conflict>;
};

/** on_conflict condition type for table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_On_Conflict = {
  constraint: Competencies_Of_Jobseekers_Constraint;
  update_columns?: Array<Competencies_Of_Jobseekers_Update_Column>;
  where?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
};

/** Ordering options when selecting data from "competencies_of_jobseekers". */
export type Competencies_Of_Jobseekers_Order_By = {
  competence_code?: InputMaybe<Order_By>;
  competencies_of_jobseekers_id?: InputMaybe<Order_By>;
  jobseeker_education?: InputMaybe<Jobseeker_Education_Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  reference_name?: InputMaybe<Order_By>;
  subject_competence_info_aggregate?: InputMaybe<Subject_Competence_Info_Aggregate_Order_By>;
};

/** primary key columns input for table: competencies_of_jobseekers */
export type Competencies_Of_Jobseekers_Pk_Columns_Input = {
  competencies_of_jobseekers_id: Scalars['uuid'];
};

/** select columns of table "competencies_of_jobseekers" */
export enum Competencies_Of_Jobseekers_Select_Column {
  /** column name */
  CompetenceCode = 'competence_code',
  /** column name */
  CompetenciesOfJobseekersId = 'competencies_of_jobseekers_id',
  /** column name */
  JobseekerEducationId = 'jobseeker_education_id',
  /** column name */
  ReferenceName = 'reference_name'
}

/** input type for updating data in table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Set_Input = {
  competence_code?: InputMaybe<Scalars['String']>;
  competencies_of_jobseekers_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  reference_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "competencies_of_jobseekers" */
export type Competencies_Of_Jobseekers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Competencies_Of_Jobseekers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Competencies_Of_Jobseekers_Stream_Cursor_Value_Input = {
  competence_code?: InputMaybe<Scalars['String']>;
  competencies_of_jobseekers_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  reference_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "competencies_of_jobseekers" */
export enum Competencies_Of_Jobseekers_Update_Column {
  /** column name */
  CompetenceCode = 'competence_code',
  /** column name */
  CompetenciesOfJobseekersId = 'competencies_of_jobseekers_id',
  /** column name */
  JobseekerEducationId = 'jobseeker_education_id',
  /** column name */
  ReferenceName = 'reference_name'
}

export type Competencies_Of_Jobseekers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Competencies_Of_Jobseekers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Competencies_Of_Jobseekers_Bool_Exp;
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

/** columns and relationships of "driving_license" */
export type Driving_License = {
  __typename?: 'driving_license';
  driving_license_id: Scalars['uuid'];
  /** An array relationship */
  driving_license_jobseeker_ids: Array<Driving_License_Jobseeker_Id>;
  /** An aggregate relationship */
  driving_license_jobseeker_ids_aggregate: Driving_License_Jobseeker_Id_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "driving_license" */
export type Driving_LicenseDriving_License_Jobseeker_IdsArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Jobseeker_Id_Order_By>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};


/** columns and relationships of "driving_license" */
export type Driving_LicenseDriving_License_Jobseeker_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Jobseeker_Id_Order_By>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};

/** aggregated selection of "driving_license" */
export type Driving_License_Aggregate = {
  __typename?: 'driving_license_aggregate';
  aggregate?: Maybe<Driving_License_Aggregate_Fields>;
  nodes: Array<Driving_License>;
};

/** aggregate fields of "driving_license" */
export type Driving_License_Aggregate_Fields = {
  __typename?: 'driving_license_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Driving_License_Max_Fields>;
  min?: Maybe<Driving_License_Min_Fields>;
};


/** aggregate fields of "driving_license" */
export type Driving_License_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Driving_License_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "driving_license". All fields are combined with a logical 'AND'. */
export type Driving_License_Bool_Exp = {
  _and?: InputMaybe<Array<Driving_License_Bool_Exp>>;
  _not?: InputMaybe<Driving_License_Bool_Exp>;
  _or?: InputMaybe<Array<Driving_License_Bool_Exp>>;
  driving_license_id?: InputMaybe<Uuid_Comparison_Exp>;
  driving_license_jobseeker_ids?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
  driving_license_jobseeker_ids_aggregate?: InputMaybe<Driving_License_Jobseeker_Id_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "driving_license" */
export enum Driving_License_Constraint {
  /** unique or primary key constraint on columns "name" */
  DrivingLicenseNameKey = 'driving_license_name_key',
  /** unique or primary key constraint on columns "driving_license_id" */
  DrivingLicensePkey = 'driving_license_pkey'
}

/** input type for inserting data into table "driving_license" */
export type Driving_License_Insert_Input = {
  driving_license_id?: InputMaybe<Scalars['uuid']>;
  driving_license_jobseeker_ids?: InputMaybe<Driving_License_Jobseeker_Id_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id = {
  __typename?: 'driving_license_jobseeker_id';
  /** An object relationship */
  driving_license: Driving_License;
  driving_license_id: Scalars['uuid'];
  /** An object relationship */
  jobseeker: Jobseeker;
  jobseeker_id: Scalars['uuid'];
};

/** aggregated selection of "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Aggregate = {
  __typename?: 'driving_license_jobseeker_id_aggregate';
  aggregate?: Maybe<Driving_License_Jobseeker_Id_Aggregate_Fields>;
  nodes: Array<Driving_License_Jobseeker_Id>;
};

export type Driving_License_Jobseeker_Id_Aggregate_Bool_Exp = {
  count?: InputMaybe<Driving_License_Jobseeker_Id_Aggregate_Bool_Exp_Count>;
};

export type Driving_License_Jobseeker_Id_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Aggregate_Fields = {
  __typename?: 'driving_license_jobseeker_id_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Driving_License_Jobseeker_Id_Max_Fields>;
  min?: Maybe<Driving_License_Jobseeker_Id_Min_Fields>;
};


/** aggregate fields of "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Driving_License_Jobseeker_Id_Max_Order_By>;
  min?: InputMaybe<Driving_License_Jobseeker_Id_Min_Order_By>;
};

/** input type for inserting array relation for remote table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Arr_Rel_Insert_Input = {
  data: Array<Driving_License_Jobseeker_Id_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Driving_License_Jobseeker_Id_On_Conflict>;
};

/** Boolean expression to filter rows from the table "driving_license_jobseeker_id". All fields are combined with a logical 'AND'. */
export type Driving_License_Jobseeker_Id_Bool_Exp = {
  _and?: InputMaybe<Array<Driving_License_Jobseeker_Id_Bool_Exp>>;
  _not?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
  _or?: InputMaybe<Array<Driving_License_Jobseeker_Id_Bool_Exp>>;
  driving_license?: InputMaybe<Driving_License_Bool_Exp>;
  driving_license_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "driving_license_jobseeker_id" */
export enum Driving_License_Jobseeker_Id_Constraint {
  /** unique or primary key constraint on columns "driving_license_id", "jobseeker_id" */
  DrivingLicenseJobseekerPkey = 'driving_license_jobseeker_pkey'
}

/** input type for inserting data into table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Insert_Input = {
  driving_license?: InputMaybe<Driving_License_Obj_Rel_Insert_Input>;
  driving_license_id?: InputMaybe<Scalars['uuid']>;
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Driving_License_Jobseeker_Id_Max_Fields = {
  __typename?: 'driving_license_jobseeker_id_max_fields';
  driving_license_id?: Maybe<Scalars['uuid']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Max_Order_By = {
  driving_license_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Driving_License_Jobseeker_Id_Min_Fields = {
  __typename?: 'driving_license_jobseeker_id_min_fields';
  driving_license_id?: Maybe<Scalars['uuid']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Min_Order_By = {
  driving_license_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Mutation_Response = {
  __typename?: 'driving_license_jobseeker_id_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Driving_License_Jobseeker_Id>;
};

/** on_conflict condition type for table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_On_Conflict = {
  constraint: Driving_License_Jobseeker_Id_Constraint;
  update_columns?: Array<Driving_License_Jobseeker_Id_Update_Column>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};

/** Ordering options when selecting data from "driving_license_jobseeker_id". */
export type Driving_License_Jobseeker_Id_Order_By = {
  driving_license?: InputMaybe<Driving_License_Order_By>;
  driving_license_id?: InputMaybe<Order_By>;
  jobseeker?: InputMaybe<Jobseeker_Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: driving_license_jobseeker_id */
export type Driving_License_Jobseeker_Id_Pk_Columns_Input = {
  driving_license_id: Scalars['uuid'];
  jobseeker_id: Scalars['uuid'];
};

/** select columns of table "driving_license_jobseeker_id" */
export enum Driving_License_Jobseeker_Id_Select_Column {
  /** column name */
  DrivingLicenseId = 'driving_license_id',
  /** column name */
  JobseekerId = 'jobseeker_id'
}

/** input type for updating data in table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Set_Input = {
  driving_license_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "driving_license_jobseeker_id" */
export type Driving_License_Jobseeker_Id_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Driving_License_Jobseeker_Id_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Driving_License_Jobseeker_Id_Stream_Cursor_Value_Input = {
  driving_license_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "driving_license_jobseeker_id" */
export enum Driving_License_Jobseeker_Id_Update_Column {
  /** column name */
  DrivingLicenseId = 'driving_license_id',
  /** column name */
  JobseekerId = 'jobseeker_id'
}

export type Driving_License_Jobseeker_Id_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Driving_License_Jobseeker_Id_Set_Input>;
  /** filter the rows which have to be updated */
  where: Driving_License_Jobseeker_Id_Bool_Exp;
};

/** aggregate max on columns */
export type Driving_License_Max_Fields = {
  __typename?: 'driving_license_max_fields';
  driving_license_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Driving_License_Min_Fields = {
  __typename?: 'driving_license_min_fields';
  driving_license_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "driving_license" */
export type Driving_License_Mutation_Response = {
  __typename?: 'driving_license_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Driving_License>;
};

/** input type for inserting object relation for remote table "driving_license" */
export type Driving_License_Obj_Rel_Insert_Input = {
  data: Driving_License_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Driving_License_On_Conflict>;
};

/** on_conflict condition type for table "driving_license" */
export type Driving_License_On_Conflict = {
  constraint: Driving_License_Constraint;
  update_columns?: Array<Driving_License_Update_Column>;
  where?: InputMaybe<Driving_License_Bool_Exp>;
};

/** Ordering options when selecting data from "driving_license". */
export type Driving_License_Order_By = {
  driving_license_id?: InputMaybe<Order_By>;
  driving_license_jobseeker_ids_aggregate?: InputMaybe<Driving_License_Jobseeker_Id_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: driving_license */
export type Driving_License_Pk_Columns_Input = {
  driving_license_id: Scalars['uuid'];
};

/** select columns of table "driving_license" */
export enum Driving_License_Select_Column {
  /** column name */
  DrivingLicenseId = 'driving_license_id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "driving_license" */
export type Driving_License_Set_Input = {
  driving_license_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "driving_license" */
export type Driving_License_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Driving_License_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Driving_License_Stream_Cursor_Value_Input = {
  driving_license_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "driving_license" */
export enum Driving_License_Update_Column {
  /** column name */
  DrivingLicenseId = 'driving_license_id',
  /** column name */
  Name = 'name'
}

export type Driving_License_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Driving_License_Set_Input>;
  /** filter the rows which have to be updated */
  where: Driving_License_Bool_Exp;
};

/** columns and relationships of "educational_institution" */
export type Educational_Institution = {
  __typename?: 'educational_institution';
  educational_institution_id: Scalars['uuid'];
  /** An object relationship */
  jobseeker_education?: Maybe<Jobseeker_Education>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  name_institution: Scalars['String'];
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
  jobseeker_education?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  jobseeker_education_id?: InputMaybe<Uuid_Comparison_Exp>;
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
  jobseeker_education?: InputMaybe<Jobseeker_Education_Obj_Rel_Insert_Input>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  name_institution?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Educational_Institution_Max_Fields = {
  __typename?: 'educational_institution_max_fields';
  educational_institution_id?: Maybe<Scalars['uuid']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  name_institution?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "educational_institution" */
export type Educational_Institution_Max_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  name_institution?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Educational_Institution_Min_Fields = {
  __typename?: 'educational_institution_min_fields';
  educational_institution_id?: Maybe<Scalars['uuid']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  name_institution?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "educational_institution" */
export type Educational_Institution_Min_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
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

/** on_conflict condition type for table "educational_institution" */
export type Educational_Institution_On_Conflict = {
  constraint: Educational_Institution_Constraint;
  update_columns?: Array<Educational_Institution_Update_Column>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};

/** Ordering options when selecting data from "educational_institution". */
export type Educational_Institution_Order_By = {
  educational_institution_id?: InputMaybe<Order_By>;
  jobseeker_education?: InputMaybe<Jobseeker_Education_Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
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
  JobseekerEducationId = 'jobseeker_education_id',
  /** column name */
  NameInstitution = 'name_institution'
}

/** input type for updating data in table "educational_institution" */
export type Educational_Institution_Set_Input = {
  educational_institution_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
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
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  name_institution?: InputMaybe<Scalars['String']>;
};

/** update columns of table "educational_institution" */
export enum Educational_Institution_Update_Column {
  /** column name */
  EducationalInstitutionId = 'educational_institution_id',
  /** column name */
  JobseekerEducationId = 'jobseeker_education_id',
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
  date_assignment_ogrnip?: Maybe<Scalars['date']>;
  email: Scalars['String'];
  employer_id: Scalars['uuid'];
  employer_name?: Maybe<Scalars['String']>;
  inn_employer?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  organizations: Array<Organization>;
  /** An aggregate relationship */
  organizations_aggregate: Organization_Aggregate;
  phone?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};


/** columns and relationships of "employer" */
export type EmployerOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "employer" */
export type EmployerOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
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
  avg?: Maybe<Employer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Employer_Max_Fields>;
  min?: Maybe<Employer_Min_Fields>;
  stddev?: Maybe<Employer_Stddev_Fields>;
  stddev_pop?: Maybe<Employer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Employer_Stddev_Samp_Fields>;
  sum?: Maybe<Employer_Sum_Fields>;
  var_pop?: Maybe<Employer_Var_Pop_Fields>;
  var_samp?: Maybe<Employer_Var_Samp_Fields>;
  variance?: Maybe<Employer_Variance_Fields>;
};


/** aggregate fields of "employer" */
export type Employer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Employer_Avg_Fields = {
  __typename?: 'employer_avg_fields';
  inn_employer?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "employer". All fields are combined with a logical 'AND'. */
export type Employer_Bool_Exp = {
  _and?: InputMaybe<Array<Employer_Bool_Exp>>;
  _not?: InputMaybe<Employer_Bool_Exp>;
  _or?: InputMaybe<Array<Employer_Bool_Exp>>;
  date_assignment_ogrnip?: InputMaybe<Date_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  employer_id?: InputMaybe<Uuid_Comparison_Exp>;
  employer_name?: InputMaybe<String_Comparison_Exp>;
  inn_employer?: InputMaybe<Bigint_Comparison_Exp>;
  organizations?: InputMaybe<Organization_Bool_Exp>;
  organizations_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "employer" */
export enum Employer_Constraint {
  /** unique or primary key constraint on columns "email" */
  EmployerEmailKey = 'employer_email_key',
  /** unique or primary key constraint on columns "employer_name" */
  EmployerEmployerNameKey = 'employer_employer_name_key',
  /** unique or primary key constraint on columns "inn_employer" */
  EmployerInnEmployerKey = 'employer_inn_employer_key',
  /** unique or primary key constraint on columns "employer_id" */
  EmployerPkey = 'employer_pkey'
}

/** input type for incrementing numeric columns in table "employer" */
export type Employer_Inc_Input = {
  inn_employer?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "employer" */
export type Employer_Insert_Input = {
  date_assignment_ogrnip?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  employer_id?: InputMaybe<Scalars['uuid']>;
  employer_name?: InputMaybe<Scalars['String']>;
  inn_employer?: InputMaybe<Scalars['bigint']>;
  organizations?: InputMaybe<Organization_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Employer_Max_Fields = {
  __typename?: 'employer_max_fields';
  date_assignment_ogrnip?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  employer_id?: Maybe<Scalars['uuid']>;
  employer_name?: Maybe<Scalars['String']>;
  inn_employer?: Maybe<Scalars['bigint']>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Employer_Min_Fields = {
  __typename?: 'employer_min_fields';
  date_assignment_ogrnip?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  employer_id?: Maybe<Scalars['uuid']>;
  employer_name?: Maybe<Scalars['String']>;
  inn_employer?: Maybe<Scalars['bigint']>;
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
  date_assignment_ogrnip?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  employer_id?: InputMaybe<Order_By>;
  employer_name?: InputMaybe<Order_By>;
  inn_employer?: InputMaybe<Order_By>;
  organizations_aggregate?: InputMaybe<Organization_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: employer */
export type Employer_Pk_Columns_Input = {
  employer_id: Scalars['uuid'];
};

/** select columns of table "employer" */
export enum Employer_Select_Column {
  /** column name */
  DateAssignmentOgrnip = 'date_assignment_ogrnip',
  /** column name */
  Email = 'email',
  /** column name */
  EmployerId = 'employer_id',
  /** column name */
  EmployerName = 'employer_name',
  /** column name */
  InnEmployer = 'inn_employer',
  /** column name */
  Phone = 'phone',
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "employer" */
export type Employer_Set_Input = {
  date_assignment_ogrnip?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  employer_id?: InputMaybe<Scalars['uuid']>;
  employer_name?: InputMaybe<Scalars['String']>;
  inn_employer?: InputMaybe<Scalars['bigint']>;
  phone?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Employer_Stddev_Fields = {
  __typename?: 'employer_stddev_fields';
  inn_employer?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Employer_Stddev_Pop_Fields = {
  __typename?: 'employer_stddev_pop_fields';
  inn_employer?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Employer_Stddev_Samp_Fields = {
  __typename?: 'employer_stddev_samp_fields';
  inn_employer?: Maybe<Scalars['Float']>;
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
  date_assignment_ogrnip?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  employer_id?: InputMaybe<Scalars['uuid']>;
  employer_name?: InputMaybe<Scalars['String']>;
  inn_employer?: InputMaybe<Scalars['bigint']>;
  phone?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Employer_Sum_Fields = {
  __typename?: 'employer_sum_fields';
  inn_employer?: Maybe<Scalars['bigint']>;
};

/** update columns of table "employer" */
export enum Employer_Update_Column {
  /** column name */
  DateAssignmentOgrnip = 'date_assignment_ogrnip',
  /** column name */
  Email = 'email',
  /** column name */
  EmployerId = 'employer_id',
  /** column name */
  EmployerName = 'employer_name',
  /** column name */
  InnEmployer = 'inn_employer',
  /** column name */
  Phone = 'phone',
  /** column name */
  Verified = 'verified'
}

export type Employer_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Employer_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Employer_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Employer_Var_Pop_Fields = {
  __typename?: 'employer_var_pop_fields';
  inn_employer?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Employer_Var_Samp_Fields = {
  __typename?: 'employer_var_samp_fields';
  inn_employer?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Employer_Variance_Fields = {
  __typename?: 'employer_variance_fields';
  inn_employer?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "jobseeker" */
export type Jobseeker = {
  __typename?: 'jobseeker';
  /** An object relationship */
  account?: Maybe<Account>;
  account_id?: Maybe<Scalars['uuid']>;
  citizenship?: Maybe<Scalars['String']>;
  /** An object relationship */
  city_of_residence?: Maybe<City_Of_Residence>;
  city_of_residence_id?: Maybe<Scalars['uuid']>;
  dateBirth?: Maybe<Scalars['date']>;
  /** An array relationship */
  driving_license_jobseeker_ids: Array<Driving_License_Jobseeker_Id>;
  /** An aggregate relationship */
  driving_license_jobseeker_ids_aggregate: Driving_License_Jobseeker_Id_Aggregate;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** An array relationship */
  jobseeker_additional_educations: Array<Jobseeker_Additional_Education>;
  /** An aggregate relationship */
  jobseeker_additional_educations_aggregate: Jobseeker_Additional_Education_Aggregate;
  /** An array relationship */
  jobseeker_educations: Array<Jobseeker_Education>;
  /** An aggregate relationship */
  jobseeker_educations_aggregate: Jobseeker_Education_Aggregate;
  jobseeker_id: Scalars['uuid'];
  /** An array relationship */
  jobseeker_vacancies: Array<Jobseeker_Vacancy>;
  /** An aggregate relationship */
  jobseeker_vacancies_aggregate: Jobseeker_Vacancy_Aggregate;
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  /** An array relationship */
  resumes: Array<Resume>;
  /** An aggregate relationship */
  resumes_aggregate: Resume_Aggregate;
  /** An array relationship */
  work_experiences: Array<Work_Experience>;
  /** An aggregate relationship */
  work_experiences_aggregate: Work_Experience_Aggregate;
};


/** columns and relationships of "jobseeker" */
export type JobseekerDriving_License_Jobseeker_IdsArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Jobseeker_Id_Order_By>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerDriving_License_Jobseeker_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Jobseeker_Id_Order_By>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_Additional_EducationsArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Additional_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_Additional_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Additional_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
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
export type JobseekerJobseeker_VacanciesArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Vacancy_Order_By>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerJobseeker_Vacancies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Vacancy_Order_By>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerResumesArgs = {
  distinct_on?: InputMaybe<Array<Resume_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resume_Order_By>>;
  where?: InputMaybe<Resume_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerResumes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resume_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resume_Order_By>>;
  where?: InputMaybe<Resume_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerWork_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};


/** columns and relationships of "jobseeker" */
export type JobseekerWork_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};

/** columns and relationships of "jobseeker_additional_education" */
export type Jobseeker_Additional_Education = {
  __typename?: 'jobseeker_additional_education';
  /** An object relationship */
  additional_education: Additional_Education;
  additional_education_id: Scalars['uuid'];
  /** An object relationship */
  jobseeker: Jobseeker;
  jobseeker_id: Scalars['uuid'];
};

/** aggregated selection of "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Aggregate = {
  __typename?: 'jobseeker_additional_education_aggregate';
  aggregate?: Maybe<Jobseeker_Additional_Education_Aggregate_Fields>;
  nodes: Array<Jobseeker_Additional_Education>;
};

export type Jobseeker_Additional_Education_Aggregate_Bool_Exp = {
  count?: InputMaybe<Jobseeker_Additional_Education_Aggregate_Bool_Exp_Count>;
};

export type Jobseeker_Additional_Education_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Aggregate_Fields = {
  __typename?: 'jobseeker_additional_education_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Jobseeker_Additional_Education_Max_Fields>;
  min?: Maybe<Jobseeker_Additional_Education_Min_Fields>;
};


/** aggregate fields of "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Jobseeker_Additional_Education_Max_Order_By>;
  min?: InputMaybe<Jobseeker_Additional_Education_Min_Order_By>;
};

/** input type for inserting array relation for remote table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Arr_Rel_Insert_Input = {
  data: Array<Jobseeker_Additional_Education_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_Additional_Education_On_Conflict>;
};

/** Boolean expression to filter rows from the table "jobseeker_additional_education". All fields are combined with a logical 'AND'. */
export type Jobseeker_Additional_Education_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Additional_Education_Bool_Exp>>;
  _not?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
  _or?: InputMaybe<Array<Jobseeker_Additional_Education_Bool_Exp>>;
  additional_education?: InputMaybe<Additional_Education_Bool_Exp>;
  additional_education_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobseeker_additional_education" */
export enum Jobseeker_Additional_Education_Constraint {
  /** unique or primary key constraint on columns "additional_education_id", "jobseeker_id" */
  JobseekerAdditionalEducationPkey = 'Jobseeker_additional_education_pkey'
}

/** input type for inserting data into table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Insert_Input = {
  additional_education?: InputMaybe<Additional_Education_Obj_Rel_Insert_Input>;
  additional_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Jobseeker_Additional_Education_Max_Fields = {
  __typename?: 'jobseeker_additional_education_max_fields';
  additional_education_id?: Maybe<Scalars['uuid']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Max_Order_By = {
  additional_education_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Jobseeker_Additional_Education_Min_Fields = {
  __typename?: 'jobseeker_additional_education_min_fields';
  additional_education_id?: Maybe<Scalars['uuid']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Min_Order_By = {
  additional_education_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Mutation_Response = {
  __typename?: 'jobseeker_additional_education_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobseeker_Additional_Education>;
};

/** on_conflict condition type for table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_On_Conflict = {
  constraint: Jobseeker_Additional_Education_Constraint;
  update_columns?: Array<Jobseeker_Additional_Education_Update_Column>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
};

/** Ordering options when selecting data from "jobseeker_additional_education". */
export type Jobseeker_Additional_Education_Order_By = {
  additional_education?: InputMaybe<Additional_Education_Order_By>;
  additional_education_id?: InputMaybe<Order_By>;
  jobseeker?: InputMaybe<Jobseeker_Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jobseeker_additional_education */
export type Jobseeker_Additional_Education_Pk_Columns_Input = {
  additional_education_id: Scalars['uuid'];
  jobseeker_id: Scalars['uuid'];
};

/** select columns of table "jobseeker_additional_education" */
export enum Jobseeker_Additional_Education_Select_Column {
  /** column name */
  AdditionalEducationId = 'additional_education_id',
  /** column name */
  JobseekerId = 'jobseeker_id'
}

/** input type for updating data in table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Set_Input = {
  additional_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "jobseeker_additional_education" */
export type Jobseeker_Additional_Education_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobseeker_Additional_Education_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Jobseeker_Additional_Education_Stream_Cursor_Value_Input = {
  additional_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "jobseeker_additional_education" */
export enum Jobseeker_Additional_Education_Update_Column {
  /** column name */
  AdditionalEducationId = 'additional_education_id',
  /** column name */
  JobseekerId = 'jobseeker_id'
}

export type Jobseeker_Additional_Education_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobseeker_Additional_Education_Set_Input>;
  /** filter the rows which have to be updated */
  where: Jobseeker_Additional_Education_Bool_Exp;
};

/** aggregated selection of "jobseeker" */
export type Jobseeker_Aggregate = {
  __typename?: 'jobseeker_aggregate';
  aggregate?: Maybe<Jobseeker_Aggregate_Fields>;
  nodes: Array<Jobseeker>;
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

/** Boolean expression to filter rows from the table "jobseeker". All fields are combined with a logical 'AND'. */
export type Jobseeker_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Bool_Exp>>;
  _not?: InputMaybe<Jobseeker_Bool_Exp>;
  _or?: InputMaybe<Array<Jobseeker_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  citizenship?: InputMaybe<String_Comparison_Exp>;
  city_of_residence?: InputMaybe<City_Of_Residence_Bool_Exp>;
  city_of_residence_id?: InputMaybe<Uuid_Comparison_Exp>;
  dateBirth?: InputMaybe<Date_Comparison_Exp>;
  driving_license_jobseeker_ids?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
  driving_license_jobseeker_ids_aggregate?: InputMaybe<Driving_License_Jobseeker_Id_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  jobseeker_additional_educations?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
  jobseeker_additional_educations_aggregate?: InputMaybe<Jobseeker_Additional_Education_Aggregate_Bool_Exp>;
  jobseeker_educations?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Bool_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker_vacancies?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
  jobseeker_vacancies_aggregate?: InputMaybe<Jobseeker_Vacancy_Aggregate_Bool_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  middleName?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  resumes?: InputMaybe<Resume_Bool_Exp>;
  resumes_aggregate?: InputMaybe<Resume_Aggregate_Bool_Exp>;
  work_experiences?: InputMaybe<Work_Experience_Bool_Exp>;
  work_experiences_aggregate?: InputMaybe<Work_Experience_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "jobseeker" */
export enum Jobseeker_Constraint {
  /** unique or primary key constraint on columns "account_id" */
  JobseekerAccountIdKey = 'jobseeker_account_id_key',
  /** unique or primary key constraint on columns "email" */
  JobseekerEmailKey = 'jobseeker_email_key',
  /** unique or primary key constraint on columns "phone" */
  JobseekerPhoneKey = 'jobseeker_phone_key',
  /** unique or primary key constraint on columns "jobseeker_id" */
  JobseekerPkey = 'jobseeker_pkey'
}

/** columns and relationships of "jobseeker_education" */
export type Jobseeker_Education = {
  __typename?: 'jobseeker_education';
  average_score?: Maybe<Scalars['Float']>;
  /** An array relationship */
  competencies_of_jobseekers: Array<Competencies_Of_Jobseekers>;
  /** An aggregate relationship */
  competencies_of_jobseekers_aggregate: Competencies_Of_Jobseekers_Aggregate;
  education_form: Scalars['String'];
  /** An array relationship */
  educational_institutions: Array<Educational_Institution>;
  /** An aggregate relationship */
  educational_institutions_aggregate: Educational_Institution_Aggregate;
  end_date?: Maybe<Scalars['date']>;
  faculity: Scalars['String'];
  group: Scalars['String'];
  /** An object relationship */
  jobseeker?: Maybe<Jobseeker>;
  jobseeker_education_id: Scalars['uuid'];
  jobseeker_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  jobseeker_performances: Array<Jobseeker_Performance>;
  /** An aggregate relationship */
  jobseeker_performances_aggregate: Jobseeker_Performance_Aggregate;
  /** An object relationship */
  resume?: Maybe<Resume>;
  resume_id?: Maybe<Scalars['uuid']>;
  short_description?: Maybe<Scalars['String']>;
  speciality: Scalars['String'];
  start_date?: Maybe<Scalars['date']>;
};


/** columns and relationships of "jobseeker_education" */
export type Jobseeker_EducationCompetencies_Of_JobseekersArgs = {
  distinct_on?: InputMaybe<Array<Competencies_Of_Jobseekers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Competencies_Of_Jobseekers_Order_By>>;
  where?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
};


/** columns and relationships of "jobseeker_education" */
export type Jobseeker_EducationCompetencies_Of_Jobseekers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Competencies_Of_Jobseekers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Competencies_Of_Jobseekers_Order_By>>;
  where?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
};


/** columns and relationships of "jobseeker_education" */
export type Jobseeker_EducationEducational_InstitutionsArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};


/** columns and relationships of "jobseeker_education" */
export type Jobseeker_EducationEducational_Institutions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Educational_Institution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Educational_Institution_Order_By>>;
  where?: InputMaybe<Educational_Institution_Bool_Exp>;
};


/** columns and relationships of "jobseeker_education" */
export type Jobseeker_EducationJobseeker_PerformancesArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Performance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Performance_Order_By>>;
  where?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
};


/** columns and relationships of "jobseeker_education" */
export type Jobseeker_EducationJobseeker_Performances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Performance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Performance_Order_By>>;
  where?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
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
  avg?: Maybe<Jobseeker_Education_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jobseeker_Education_Max_Fields>;
  min?: Maybe<Jobseeker_Education_Min_Fields>;
  stddev?: Maybe<Jobseeker_Education_Stddev_Fields>;
  stddev_pop?: Maybe<Jobseeker_Education_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jobseeker_Education_Stddev_Samp_Fields>;
  sum?: Maybe<Jobseeker_Education_Sum_Fields>;
  var_pop?: Maybe<Jobseeker_Education_Var_Pop_Fields>;
  var_samp?: Maybe<Jobseeker_Education_Var_Samp_Fields>;
  variance?: Maybe<Jobseeker_Education_Variance_Fields>;
};


/** aggregate fields of "jobseeker_education" */
export type Jobseeker_Education_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "jobseeker_education" */
export type Jobseeker_Education_Aggregate_Order_By = {
  avg?: InputMaybe<Jobseeker_Education_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Jobseeker_Education_Max_Order_By>;
  min?: InputMaybe<Jobseeker_Education_Min_Order_By>;
  stddev?: InputMaybe<Jobseeker_Education_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Jobseeker_Education_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Jobseeker_Education_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Jobseeker_Education_Sum_Order_By>;
  var_pop?: InputMaybe<Jobseeker_Education_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Jobseeker_Education_Var_Samp_Order_By>;
  variance?: InputMaybe<Jobseeker_Education_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "jobseeker_education" */
export type Jobseeker_Education_Arr_Rel_Insert_Input = {
  data: Array<Jobseeker_Education_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_Education_On_Conflict>;
};

/** aggregate avg on columns */
export type Jobseeker_Education_Avg_Fields = {
  __typename?: 'jobseeker_education_avg_fields';
  average_score?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Avg_Order_By = {
  average_score?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "jobseeker_education". All fields are combined with a logical 'AND'. */
export type Jobseeker_Education_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Education_Bool_Exp>>;
  _not?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  _or?: InputMaybe<Array<Jobseeker_Education_Bool_Exp>>;
  average_score?: InputMaybe<Float_Comparison_Exp>;
  competencies_of_jobseekers?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
  competencies_of_jobseekers_aggregate?: InputMaybe<Competencies_Of_Jobseekers_Aggregate_Bool_Exp>;
  education_form?: InputMaybe<String_Comparison_Exp>;
  educational_institutions?: InputMaybe<Educational_Institution_Bool_Exp>;
  educational_institutions_aggregate?: InputMaybe<Educational_Institution_Aggregate_Bool_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  faculity?: InputMaybe<String_Comparison_Exp>;
  group?: InputMaybe<String_Comparison_Exp>;
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  jobseeker_education_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker_performances?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
  jobseeker_performances_aggregate?: InputMaybe<Jobseeker_Performance_Aggregate_Bool_Exp>;
  resume?: InputMaybe<Resume_Bool_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
  short_description?: InputMaybe<String_Comparison_Exp>;
  speciality?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobseeker_education" */
export enum Jobseeker_Education_Constraint {
  /** unique or primary key constraint on columns "jobseeker_education_id" */
  JobseekerEducationPkey = 'jobseeker_education_pkey'
}

/** input type for incrementing numeric columns in table "jobseeker_education" */
export type Jobseeker_Education_Inc_Input = {
  average_score?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "jobseeker_education" */
export type Jobseeker_Education_Insert_Input = {
  average_score?: InputMaybe<Scalars['Float']>;
  competencies_of_jobseekers?: InputMaybe<Competencies_Of_Jobseekers_Arr_Rel_Insert_Input>;
  education_form?: InputMaybe<Scalars['String']>;
  educational_institutions?: InputMaybe<Educational_Institution_Arr_Rel_Insert_Input>;
  end_date?: InputMaybe<Scalars['date']>;
  faculity?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_performances?: InputMaybe<Jobseeker_Performance_Arr_Rel_Insert_Input>;
  resume?: InputMaybe<Resume_Obj_Rel_Insert_Input>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  speciality?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Jobseeker_Education_Max_Fields = {
  __typename?: 'jobseeker_education_max_fields';
  average_score?: Maybe<Scalars['Float']>;
  education_form?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  faculity?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  resume_id?: Maybe<Scalars['uuid']>;
  short_description?: Maybe<Scalars['String']>;
  speciality?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Max_Order_By = {
  average_score?: InputMaybe<Order_By>;
  education_form?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  faculity?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  speciality?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Jobseeker_Education_Min_Fields = {
  __typename?: 'jobseeker_education_min_fields';
  average_score?: Maybe<Scalars['Float']>;
  education_form?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  faculity?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  resume_id?: Maybe<Scalars['uuid']>;
  short_description?: Maybe<Scalars['String']>;
  speciality?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Min_Order_By = {
  average_score?: InputMaybe<Order_By>;
  education_form?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  faculity?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
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

/** input type for inserting object relation for remote table "jobseeker_education" */
export type Jobseeker_Education_Obj_Rel_Insert_Input = {
  data: Jobseeker_Education_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_Education_On_Conflict>;
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
  competencies_of_jobseekers_aggregate?: InputMaybe<Competencies_Of_Jobseekers_Aggregate_Order_By>;
  education_form?: InputMaybe<Order_By>;
  educational_institutions_aggregate?: InputMaybe<Educational_Institution_Aggregate_Order_By>;
  end_date?: InputMaybe<Order_By>;
  faculity?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  jobseeker?: InputMaybe<Jobseeker_Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  jobseeker_performances_aggregate?: InputMaybe<Jobseeker_Performance_Aggregate_Order_By>;
  resume?: InputMaybe<Resume_Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
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
  EducationForm = 'education_form',
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
  ResumeId = 'resume_id',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  Speciality = 'speciality',
  /** column name */
  StartDate = 'start_date'
}

/** input type for updating data in table "jobseeker_education" */
export type Jobseeker_Education_Set_Input = {
  average_score?: InputMaybe<Scalars['Float']>;
  education_form?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  faculity?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  speciality?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Jobseeker_Education_Stddev_Fields = {
  __typename?: 'jobseeker_education_stddev_fields';
  average_score?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Stddev_Order_By = {
  average_score?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Jobseeker_Education_Stddev_Pop_Fields = {
  __typename?: 'jobseeker_education_stddev_pop_fields';
  average_score?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Stddev_Pop_Order_By = {
  average_score?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Jobseeker_Education_Stddev_Samp_Fields = {
  __typename?: 'jobseeker_education_stddev_samp_fields';
  average_score?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Stddev_Samp_Order_By = {
  average_score?: InputMaybe<Order_By>;
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
  average_score?: InputMaybe<Scalars['Float']>;
  education_form?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  faculity?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  speciality?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
};

/** aggregate sum on columns */
export type Jobseeker_Education_Sum_Fields = {
  __typename?: 'jobseeker_education_sum_fields';
  average_score?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Sum_Order_By = {
  average_score?: InputMaybe<Order_By>;
};

/** update columns of table "jobseeker_education" */
export enum Jobseeker_Education_Update_Column {
  /** column name */
  AverageScore = 'average_score',
  /** column name */
  EducationForm = 'education_form',
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
  ResumeId = 'resume_id',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  Speciality = 'speciality',
  /** column name */
  StartDate = 'start_date'
}

export type Jobseeker_Education_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Jobseeker_Education_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobseeker_Education_Set_Input>;
  /** filter the rows which have to be updated */
  where: Jobseeker_Education_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Jobseeker_Education_Var_Pop_Fields = {
  __typename?: 'jobseeker_education_var_pop_fields';
  average_score?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Var_Pop_Order_By = {
  average_score?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Jobseeker_Education_Var_Samp_Fields = {
  __typename?: 'jobseeker_education_var_samp_fields';
  average_score?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Var_Samp_Order_By = {
  average_score?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Jobseeker_Education_Variance_Fields = {
  __typename?: 'jobseeker_education_variance_fields';
  average_score?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "jobseeker_education" */
export type Jobseeker_Education_Variance_Order_By = {
  average_score?: InputMaybe<Order_By>;
};

/** input type for inserting data into table "jobseeker" */
export type Jobseeker_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  citizenship?: InputMaybe<Scalars['String']>;
  city_of_residence?: InputMaybe<City_Of_Residence_Obj_Rel_Insert_Input>;
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  dateBirth?: InputMaybe<Scalars['date']>;
  driving_license_jobseeker_ids?: InputMaybe<Driving_License_Jobseeker_Id_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  jobseeker_additional_educations?: InputMaybe<Jobseeker_Additional_Education_Arr_Rel_Insert_Input>;
  jobseeker_educations?: InputMaybe<Jobseeker_Education_Arr_Rel_Insert_Input>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_vacancies?: InputMaybe<Jobseeker_Vacancy_Arr_Rel_Insert_Input>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  resumes?: InputMaybe<Resume_Arr_Rel_Insert_Input>;
  work_experiences?: InputMaybe<Work_Experience_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Jobseeker_Max_Fields = {
  __typename?: 'jobseeker_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  citizenship?: Maybe<Scalars['String']>;
  city_of_residence_id?: Maybe<Scalars['uuid']>;
  dateBirth?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Jobseeker_Min_Fields = {
  __typename?: 'jobseeker_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  citizenship?: Maybe<Scalars['String']>;
  city_of_residence_id?: Maybe<Scalars['uuid']>;
  dateBirth?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
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
  citizenship?: InputMaybe<Order_By>;
  city_of_residence?: InputMaybe<City_Of_Residence_Order_By>;
  city_of_residence_id?: InputMaybe<Order_By>;
  dateBirth?: InputMaybe<Order_By>;
  driving_license_jobseeker_ids_aggregate?: InputMaybe<Driving_License_Jobseeker_Id_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  jobseeker_additional_educations_aggregate?: InputMaybe<Jobseeker_Additional_Education_Aggregate_Order_By>;
  jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  jobseeker_vacancies_aggregate?: InputMaybe<Jobseeker_Vacancy_Aggregate_Order_By>;
  lastName?: InputMaybe<Order_By>;
  middleName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  resumes_aggregate?: InputMaybe<Resume_Aggregate_Order_By>;
  work_experiences_aggregate?: InputMaybe<Work_Experience_Aggregate_Order_By>;
};

/** columns and relationships of "jobseeker_performance" */
export type Jobseeker_Performance = {
  __typename?: 'jobseeker_performance';
  date_evalution: Scalars['date'];
  discipline: Scalars['String'];
  form: Scalars['String'];
  /** An object relationship */
  jobseeker_education: Jobseeker_Education;
  jobseeker_education_id: Scalars['uuid'];
  jobseeker_performance_id: Scalars['uuid'];
  mark: Scalars['Int'];
  semester: Scalars['Int'];
};

/** aggregated selection of "jobseeker_performance" */
export type Jobseeker_Performance_Aggregate = {
  __typename?: 'jobseeker_performance_aggregate';
  aggregate?: Maybe<Jobseeker_Performance_Aggregate_Fields>;
  nodes: Array<Jobseeker_Performance>;
};

export type Jobseeker_Performance_Aggregate_Bool_Exp = {
  count?: InputMaybe<Jobseeker_Performance_Aggregate_Bool_Exp_Count>;
};

export type Jobseeker_Performance_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Jobseeker_Performance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "jobseeker_performance" */
export type Jobseeker_Performance_Aggregate_Fields = {
  __typename?: 'jobseeker_performance_aggregate_fields';
  avg?: Maybe<Jobseeker_Performance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jobseeker_Performance_Max_Fields>;
  min?: Maybe<Jobseeker_Performance_Min_Fields>;
  stddev?: Maybe<Jobseeker_Performance_Stddev_Fields>;
  stddev_pop?: Maybe<Jobseeker_Performance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jobseeker_Performance_Stddev_Samp_Fields>;
  sum?: Maybe<Jobseeker_Performance_Sum_Fields>;
  var_pop?: Maybe<Jobseeker_Performance_Var_Pop_Fields>;
  var_samp?: Maybe<Jobseeker_Performance_Var_Samp_Fields>;
  variance?: Maybe<Jobseeker_Performance_Variance_Fields>;
};


/** aggregate fields of "jobseeker_performance" */
export type Jobseeker_Performance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobseeker_Performance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "jobseeker_performance" */
export type Jobseeker_Performance_Aggregate_Order_By = {
  avg?: InputMaybe<Jobseeker_Performance_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Jobseeker_Performance_Max_Order_By>;
  min?: InputMaybe<Jobseeker_Performance_Min_Order_By>;
  stddev?: InputMaybe<Jobseeker_Performance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Jobseeker_Performance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Jobseeker_Performance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Jobseeker_Performance_Sum_Order_By>;
  var_pop?: InputMaybe<Jobseeker_Performance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Jobseeker_Performance_Var_Samp_Order_By>;
  variance?: InputMaybe<Jobseeker_Performance_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "jobseeker_performance" */
export type Jobseeker_Performance_Arr_Rel_Insert_Input = {
  data: Array<Jobseeker_Performance_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_Performance_On_Conflict>;
};

/** aggregate avg on columns */
export type Jobseeker_Performance_Avg_Fields = {
  __typename?: 'jobseeker_performance_avg_fields';
  mark?: Maybe<Scalars['Float']>;
  semester?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Avg_Order_By = {
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "jobseeker_performance". All fields are combined with a logical 'AND'. */
export type Jobseeker_Performance_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Performance_Bool_Exp>>;
  _not?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
  _or?: InputMaybe<Array<Jobseeker_Performance_Bool_Exp>>;
  date_evalution?: InputMaybe<Date_Comparison_Exp>;
  discipline?: InputMaybe<String_Comparison_Exp>;
  form?: InputMaybe<String_Comparison_Exp>;
  jobseeker_education?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  jobseeker_education_id?: InputMaybe<Uuid_Comparison_Exp>;
  jobseeker_performance_id?: InputMaybe<Uuid_Comparison_Exp>;
  mark?: InputMaybe<Int_Comparison_Exp>;
  semester?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobseeker_performance" */
export enum Jobseeker_Performance_Constraint {
  /** unique or primary key constraint on columns "jobseeker_performance_id" */
  JobseekerPerformancePkey = 'jobseeker_performance_pkey'
}

/** input type for incrementing numeric columns in table "jobseeker_performance" */
export type Jobseeker_Performance_Inc_Input = {
  mark?: InputMaybe<Scalars['Int']>;
  semester?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "jobseeker_performance" */
export type Jobseeker_Performance_Insert_Input = {
  date_evalution?: InputMaybe<Scalars['date']>;
  discipline?: InputMaybe<Scalars['String']>;
  form?: InputMaybe<Scalars['String']>;
  jobseeker_education?: InputMaybe<Jobseeker_Education_Obj_Rel_Insert_Input>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_performance_id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['Int']>;
  semester?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Jobseeker_Performance_Max_Fields = {
  __typename?: 'jobseeker_performance_max_fields';
  date_evalution?: Maybe<Scalars['date']>;
  discipline?: Maybe<Scalars['String']>;
  form?: Maybe<Scalars['String']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  jobseeker_performance_id?: Maybe<Scalars['uuid']>;
  mark?: Maybe<Scalars['Int']>;
  semester?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Max_Order_By = {
  date_evalution?: InputMaybe<Order_By>;
  discipline?: InputMaybe<Order_By>;
  form?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_performance_id?: InputMaybe<Order_By>;
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Jobseeker_Performance_Min_Fields = {
  __typename?: 'jobseeker_performance_min_fields';
  date_evalution?: Maybe<Scalars['date']>;
  discipline?: Maybe<Scalars['String']>;
  form?: Maybe<Scalars['String']>;
  jobseeker_education_id?: Maybe<Scalars['uuid']>;
  jobseeker_performance_id?: Maybe<Scalars['uuid']>;
  mark?: Maybe<Scalars['Int']>;
  semester?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Min_Order_By = {
  date_evalution?: InputMaybe<Order_By>;
  discipline?: InputMaybe<Order_By>;
  form?: InputMaybe<Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_performance_id?: InputMaybe<Order_By>;
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "jobseeker_performance" */
export type Jobseeker_Performance_Mutation_Response = {
  __typename?: 'jobseeker_performance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobseeker_Performance>;
};

/** on_conflict condition type for table "jobseeker_performance" */
export type Jobseeker_Performance_On_Conflict = {
  constraint: Jobseeker_Performance_Constraint;
  update_columns?: Array<Jobseeker_Performance_Update_Column>;
  where?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
};

/** Ordering options when selecting data from "jobseeker_performance". */
export type Jobseeker_Performance_Order_By = {
  date_evalution?: InputMaybe<Order_By>;
  discipline?: InputMaybe<Order_By>;
  form?: InputMaybe<Order_By>;
  jobseeker_education?: InputMaybe<Jobseeker_Education_Order_By>;
  jobseeker_education_id?: InputMaybe<Order_By>;
  jobseeker_performance_id?: InputMaybe<Order_By>;
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jobseeker_performance */
export type Jobseeker_Performance_Pk_Columns_Input = {
  jobseeker_performance_id: Scalars['uuid'];
};

/** select columns of table "jobseeker_performance" */
export enum Jobseeker_Performance_Select_Column {
  /** column name */
  DateEvalution = 'date_evalution',
  /** column name */
  Discipline = 'discipline',
  /** column name */
  Form = 'form',
  /** column name */
  JobseekerEducationId = 'jobseeker_education_id',
  /** column name */
  JobseekerPerformanceId = 'jobseeker_performance_id',
  /** column name */
  Mark = 'mark',
  /** column name */
  Semester = 'semester'
}

/** input type for updating data in table "jobseeker_performance" */
export type Jobseeker_Performance_Set_Input = {
  date_evalution?: InputMaybe<Scalars['date']>;
  discipline?: InputMaybe<Scalars['String']>;
  form?: InputMaybe<Scalars['String']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_performance_id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['Int']>;
  semester?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Jobseeker_Performance_Stddev_Fields = {
  __typename?: 'jobseeker_performance_stddev_fields';
  mark?: Maybe<Scalars['Float']>;
  semester?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Stddev_Order_By = {
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Jobseeker_Performance_Stddev_Pop_Fields = {
  __typename?: 'jobseeker_performance_stddev_pop_fields';
  mark?: Maybe<Scalars['Float']>;
  semester?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Stddev_Pop_Order_By = {
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Jobseeker_Performance_Stddev_Samp_Fields = {
  __typename?: 'jobseeker_performance_stddev_samp_fields';
  mark?: Maybe<Scalars['Float']>;
  semester?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Stddev_Samp_Order_By = {
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "jobseeker_performance" */
export type Jobseeker_Performance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobseeker_Performance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Jobseeker_Performance_Stream_Cursor_Value_Input = {
  date_evalution?: InputMaybe<Scalars['date']>;
  discipline?: InputMaybe<Scalars['String']>;
  form?: InputMaybe<Scalars['String']>;
  jobseeker_education_id?: InputMaybe<Scalars['uuid']>;
  jobseeker_performance_id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['Int']>;
  semester?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Jobseeker_Performance_Sum_Fields = {
  __typename?: 'jobseeker_performance_sum_fields';
  mark?: Maybe<Scalars['Int']>;
  semester?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Sum_Order_By = {
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** update columns of table "jobseeker_performance" */
export enum Jobseeker_Performance_Update_Column {
  /** column name */
  DateEvalution = 'date_evalution',
  /** column name */
  Discipline = 'discipline',
  /** column name */
  Form = 'form',
  /** column name */
  JobseekerEducationId = 'jobseeker_education_id',
  /** column name */
  JobseekerPerformanceId = 'jobseeker_performance_id',
  /** column name */
  Mark = 'mark',
  /** column name */
  Semester = 'semester'
}

export type Jobseeker_Performance_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Jobseeker_Performance_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobseeker_Performance_Set_Input>;
  /** filter the rows which have to be updated */
  where: Jobseeker_Performance_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Jobseeker_Performance_Var_Pop_Fields = {
  __typename?: 'jobseeker_performance_var_pop_fields';
  mark?: Maybe<Scalars['Float']>;
  semester?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Var_Pop_Order_By = {
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Jobseeker_Performance_Var_Samp_Fields = {
  __typename?: 'jobseeker_performance_var_samp_fields';
  mark?: Maybe<Scalars['Float']>;
  semester?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Var_Samp_Order_By = {
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Jobseeker_Performance_Variance_Fields = {
  __typename?: 'jobseeker_performance_variance_fields';
  mark?: Maybe<Scalars['Float']>;
  semester?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "jobseeker_performance" */
export type Jobseeker_Performance_Variance_Order_By = {
  mark?: InputMaybe<Order_By>;
  semester?: InputMaybe<Order_By>;
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
  Citizenship = 'citizenship',
  /** column name */
  CityOfResidenceId = 'city_of_residence_id',
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
  citizenship?: InputMaybe<Scalars['String']>;
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  dateBirth?: InputMaybe<Scalars['date']>;
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
  citizenship?: InputMaybe<Scalars['String']>;
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  dateBirth?: InputMaybe<Scalars['date']>;
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
  Citizenship = 'citizenship',
  /** column name */
  CityOfResidenceId = 'city_of_residence_id',
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

/** columns and relationships of "jobseeker_vacancy" */
export type Jobseeker_Vacancy = {
  __typename?: 'jobseeker_vacancy';
  /** An object relationship */
  jobseeker: Jobseeker;
  jobseeker_id: Scalars['uuid'];
  /** An object relationship */
  vacancy: Vacancy;
  vacancy_id: Scalars['uuid'];
};

/** aggregated selection of "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Aggregate = {
  __typename?: 'jobseeker_vacancy_aggregate';
  aggregate?: Maybe<Jobseeker_Vacancy_Aggregate_Fields>;
  nodes: Array<Jobseeker_Vacancy>;
};

export type Jobseeker_Vacancy_Aggregate_Bool_Exp = {
  count?: InputMaybe<Jobseeker_Vacancy_Aggregate_Bool_Exp_Count>;
};

export type Jobseeker_Vacancy_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Aggregate_Fields = {
  __typename?: 'jobseeker_vacancy_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Jobseeker_Vacancy_Max_Fields>;
  min?: Maybe<Jobseeker_Vacancy_Min_Fields>;
};


/** aggregate fields of "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Jobseeker_Vacancy_Max_Order_By>;
  min?: InputMaybe<Jobseeker_Vacancy_Min_Order_By>;
};

/** input type for inserting array relation for remote table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Arr_Rel_Insert_Input = {
  data: Array<Jobseeker_Vacancy_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobseeker_Vacancy_On_Conflict>;
};

/** Boolean expression to filter rows from the table "jobseeker_vacancy". All fields are combined with a logical 'AND'. */
export type Jobseeker_Vacancy_Bool_Exp = {
  _and?: InputMaybe<Array<Jobseeker_Vacancy_Bool_Exp>>;
  _not?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
  _or?: InputMaybe<Array<Jobseeker_Vacancy_Bool_Exp>>;
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
  vacancy?: InputMaybe<Vacancy_Bool_Exp>;
  vacancy_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobseeker_vacancy" */
export enum Jobseeker_Vacancy_Constraint {
  /** unique or primary key constraint on columns "vacancy_id", "jobseeker_id" */
  JobseekerVacancyPkey = 'jobseeker_vacancy_pkey'
}

/** input type for inserting data into table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Insert_Input = {
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  vacancy?: InputMaybe<Vacancy_Obj_Rel_Insert_Input>;
  vacancy_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Jobseeker_Vacancy_Max_Fields = {
  __typename?: 'jobseeker_vacancy_max_fields';
  jobseeker_id?: Maybe<Scalars['uuid']>;
  vacancy_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Max_Order_By = {
  jobseeker_id?: InputMaybe<Order_By>;
  vacancy_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Jobseeker_Vacancy_Min_Fields = {
  __typename?: 'jobseeker_vacancy_min_fields';
  jobseeker_id?: Maybe<Scalars['uuid']>;
  vacancy_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Min_Order_By = {
  jobseeker_id?: InputMaybe<Order_By>;
  vacancy_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Mutation_Response = {
  __typename?: 'jobseeker_vacancy_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobseeker_Vacancy>;
};

/** on_conflict condition type for table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_On_Conflict = {
  constraint: Jobseeker_Vacancy_Constraint;
  update_columns?: Array<Jobseeker_Vacancy_Update_Column>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
};

/** Ordering options when selecting data from "jobseeker_vacancy". */
export type Jobseeker_Vacancy_Order_By = {
  jobseeker?: InputMaybe<Jobseeker_Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  vacancy?: InputMaybe<Vacancy_Order_By>;
  vacancy_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jobseeker_vacancy */
export type Jobseeker_Vacancy_Pk_Columns_Input = {
  jobseeker_id: Scalars['uuid'];
  vacancy_id: Scalars['uuid'];
};

/** select columns of table "jobseeker_vacancy" */
export enum Jobseeker_Vacancy_Select_Column {
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  VacancyId = 'vacancy_id'
}

/** input type for updating data in table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Set_Input = {
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  vacancy_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "jobseeker_vacancy" */
export type Jobseeker_Vacancy_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobseeker_Vacancy_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Jobseeker_Vacancy_Stream_Cursor_Value_Input = {
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  vacancy_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "jobseeker_vacancy" */
export enum Jobseeker_Vacancy_Update_Column {
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  VacancyId = 'vacancy_id'
}

export type Jobseeker_Vacancy_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobseeker_Vacancy_Set_Input>;
  /** filter the rows which have to be updated */
  where: Jobseeker_Vacancy_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "additional_education" */
  delete_additional_education?: Maybe<Additional_Education_Mutation_Response>;
  /** delete single row from the table: "additional_education" */
  delete_additional_education_by_pk?: Maybe<Additional_Education>;
  /** delete data from the table: "city_of_residence" */
  delete_city_of_residence?: Maybe<City_Of_Residence_Mutation_Response>;
  /** delete single row from the table: "city_of_residence" */
  delete_city_of_residence_by_pk?: Maybe<City_Of_Residence>;
  /** delete data from the table: "competencies_of_jobseekers" */
  delete_competencies_of_jobseekers?: Maybe<Competencies_Of_Jobseekers_Mutation_Response>;
  /** delete single row from the table: "competencies_of_jobseekers" */
  delete_competencies_of_jobseekers_by_pk?: Maybe<Competencies_Of_Jobseekers>;
  /** delete data from the table: "driving_license" */
  delete_driving_license?: Maybe<Driving_License_Mutation_Response>;
  /** delete single row from the table: "driving_license" */
  delete_driving_license_by_pk?: Maybe<Driving_License>;
  /** delete data from the table: "driving_license_jobseeker_id" */
  delete_driving_license_jobseeker_id?: Maybe<Driving_License_Jobseeker_Id_Mutation_Response>;
  /** delete single row from the table: "driving_license_jobseeker_id" */
  delete_driving_license_jobseeker_id_by_pk?: Maybe<Driving_License_Jobseeker_Id>;
  /** delete data from the table: "educational_institution" */
  delete_educational_institution?: Maybe<Educational_Institution_Mutation_Response>;
  /** delete single row from the table: "educational_institution" */
  delete_educational_institution_by_pk?: Maybe<Educational_Institution>;
  /** delete data from the table: "employer" */
  delete_employer?: Maybe<Employer_Mutation_Response>;
  /** delete single row from the table: "employer" */
  delete_employer_by_pk?: Maybe<Employer>;
  /** delete data from the table: "jobseeker" */
  delete_jobseeker?: Maybe<Jobseeker_Mutation_Response>;
  /** delete data from the table: "jobseeker_additional_education" */
  delete_jobseeker_additional_education?: Maybe<Jobseeker_Additional_Education_Mutation_Response>;
  /** delete single row from the table: "jobseeker_additional_education" */
  delete_jobseeker_additional_education_by_pk?: Maybe<Jobseeker_Additional_Education>;
  /** delete single row from the table: "jobseeker" */
  delete_jobseeker_by_pk?: Maybe<Jobseeker>;
  /** delete data from the table: "jobseeker_education" */
  delete_jobseeker_education?: Maybe<Jobseeker_Education_Mutation_Response>;
  /** delete single row from the table: "jobseeker_education" */
  delete_jobseeker_education_by_pk?: Maybe<Jobseeker_Education>;
  /** delete data from the table: "jobseeker_performance" */
  delete_jobseeker_performance?: Maybe<Jobseeker_Performance_Mutation_Response>;
  /** delete single row from the table: "jobseeker_performance" */
  delete_jobseeker_performance_by_pk?: Maybe<Jobseeker_Performance>;
  /** delete data from the table: "jobseeker_vacancy" */
  delete_jobseeker_vacancy?: Maybe<Jobseeker_Vacancy_Mutation_Response>;
  /** delete single row from the table: "jobseeker_vacancy" */
  delete_jobseeker_vacancy_by_pk?: Maybe<Jobseeker_Vacancy>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "resume" */
  delete_resume?: Maybe<Resume_Mutation_Response>;
  /** delete single row from the table: "resume" */
  delete_resume_by_pk?: Maybe<Resume>;
  /** delete data from the table: "subject_competence_info" */
  delete_subject_competence_info?: Maybe<Subject_Competence_Info_Mutation_Response>;
  /** delete single row from the table: "subject_competence_info" */
  delete_subject_competence_info_by_pk?: Maybe<Subject_Competence_Info>;
  /** delete data from the table: "type_of_employment" */
  delete_type_of_employment?: Maybe<Type_Of_Employment_Mutation_Response>;
  /** delete single row from the table: "type_of_employment" */
  delete_type_of_employment_by_pk?: Maybe<Type_Of_Employment>;
  /** delete data from the table: "type_of_employment_resume_id" */
  delete_type_of_employment_resume_id?: Maybe<Type_Of_Employment_Resume_Id_Mutation_Response>;
  /** delete single row from the table: "type_of_employment_resume_id" */
  delete_type_of_employment_resume_id_by_pk?: Maybe<Type_Of_Employment_Resume_Id>;
  /** delete data from the table: "vacancy" */
  delete_vacancy?: Maybe<Vacancy_Mutation_Response>;
  /** delete single row from the table: "vacancy" */
  delete_vacancy_by_pk?: Maybe<Vacancy>;
  /** delete data from the table: "work_experience" */
  delete_work_experience?: Maybe<Work_Experience_Mutation_Response>;
  /** delete single row from the table: "work_experience" */
  delete_work_experience_by_pk?: Maybe<Work_Experience>;
  /** delete data from the table: "work_schedule" */
  delete_work_schedule?: Maybe<Work_Schedule_Mutation_Response>;
  /** delete single row from the table: "work_schedule" */
  delete_work_schedule_by_pk?: Maybe<Work_Schedule>;
  /** delete data from the table: "work_schedule_resume_id" */
  delete_work_schedule_resume_id?: Maybe<Work_Schedule_Resume_Id_Mutation_Response>;
  /** delete single row from the table: "work_schedule_resume_id" */
  delete_work_schedule_resume_id_by_pk?: Maybe<Work_Schedule_Resume_Id>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "additional_education" */
  insert_additional_education?: Maybe<Additional_Education_Mutation_Response>;
  /** insert a single row into the table: "additional_education" */
  insert_additional_education_one?: Maybe<Additional_Education>;
  /** insert data into the table: "city_of_residence" */
  insert_city_of_residence?: Maybe<City_Of_Residence_Mutation_Response>;
  /** insert a single row into the table: "city_of_residence" */
  insert_city_of_residence_one?: Maybe<City_Of_Residence>;
  /** insert data into the table: "competencies_of_jobseekers" */
  insert_competencies_of_jobseekers?: Maybe<Competencies_Of_Jobseekers_Mutation_Response>;
  /** insert a single row into the table: "competencies_of_jobseekers" */
  insert_competencies_of_jobseekers_one?: Maybe<Competencies_Of_Jobseekers>;
  /** insert data into the table: "driving_license" */
  insert_driving_license?: Maybe<Driving_License_Mutation_Response>;
  /** insert data into the table: "driving_license_jobseeker_id" */
  insert_driving_license_jobseeker_id?: Maybe<Driving_License_Jobseeker_Id_Mutation_Response>;
  /** insert a single row into the table: "driving_license_jobseeker_id" */
  insert_driving_license_jobseeker_id_one?: Maybe<Driving_License_Jobseeker_Id>;
  /** insert a single row into the table: "driving_license" */
  insert_driving_license_one?: Maybe<Driving_License>;
  /** insert data into the table: "educational_institution" */
  insert_educational_institution?: Maybe<Educational_Institution_Mutation_Response>;
  /** insert a single row into the table: "educational_institution" */
  insert_educational_institution_one?: Maybe<Educational_Institution>;
  /** insert data into the table: "employer" */
  insert_employer?: Maybe<Employer_Mutation_Response>;
  /** insert a single row into the table: "employer" */
  insert_employer_one?: Maybe<Employer>;
  /** insert data into the table: "jobseeker" */
  insert_jobseeker?: Maybe<Jobseeker_Mutation_Response>;
  /** insert data into the table: "jobseeker_additional_education" */
  insert_jobseeker_additional_education?: Maybe<Jobseeker_Additional_Education_Mutation_Response>;
  /** insert a single row into the table: "jobseeker_additional_education" */
  insert_jobseeker_additional_education_one?: Maybe<Jobseeker_Additional_Education>;
  /** insert data into the table: "jobseeker_education" */
  insert_jobseeker_education?: Maybe<Jobseeker_Education_Mutation_Response>;
  /** insert a single row into the table: "jobseeker_education" */
  insert_jobseeker_education_one?: Maybe<Jobseeker_Education>;
  /** insert a single row into the table: "jobseeker" */
  insert_jobseeker_one?: Maybe<Jobseeker>;
  /** insert data into the table: "jobseeker_performance" */
  insert_jobseeker_performance?: Maybe<Jobseeker_Performance_Mutation_Response>;
  /** insert a single row into the table: "jobseeker_performance" */
  insert_jobseeker_performance_one?: Maybe<Jobseeker_Performance>;
  /** insert data into the table: "jobseeker_vacancy" */
  insert_jobseeker_vacancy?: Maybe<Jobseeker_Vacancy_Mutation_Response>;
  /** insert a single row into the table: "jobseeker_vacancy" */
  insert_jobseeker_vacancy_one?: Maybe<Jobseeker_Vacancy>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** insert data into the table: "resume" */
  insert_resume?: Maybe<Resume_Mutation_Response>;
  /** insert a single row into the table: "resume" */
  insert_resume_one?: Maybe<Resume>;
  /** insert data into the table: "subject_competence_info" */
  insert_subject_competence_info?: Maybe<Subject_Competence_Info_Mutation_Response>;
  /** insert a single row into the table: "subject_competence_info" */
  insert_subject_competence_info_one?: Maybe<Subject_Competence_Info>;
  /** insert data into the table: "type_of_employment" */
  insert_type_of_employment?: Maybe<Type_Of_Employment_Mutation_Response>;
  /** insert a single row into the table: "type_of_employment" */
  insert_type_of_employment_one?: Maybe<Type_Of_Employment>;
  /** insert data into the table: "type_of_employment_resume_id" */
  insert_type_of_employment_resume_id?: Maybe<Type_Of_Employment_Resume_Id_Mutation_Response>;
  /** insert a single row into the table: "type_of_employment_resume_id" */
  insert_type_of_employment_resume_id_one?: Maybe<Type_Of_Employment_Resume_Id>;
  /** insert data into the table: "vacancy" */
  insert_vacancy?: Maybe<Vacancy_Mutation_Response>;
  /** insert a single row into the table: "vacancy" */
  insert_vacancy_one?: Maybe<Vacancy>;
  /** insert data into the table: "work_experience" */
  insert_work_experience?: Maybe<Work_Experience_Mutation_Response>;
  /** insert a single row into the table: "work_experience" */
  insert_work_experience_one?: Maybe<Work_Experience>;
  /** insert data into the table: "work_schedule" */
  insert_work_schedule?: Maybe<Work_Schedule_Mutation_Response>;
  /** insert a single row into the table: "work_schedule" */
  insert_work_schedule_one?: Maybe<Work_Schedule>;
  /** insert data into the table: "work_schedule_resume_id" */
  insert_work_schedule_resume_id?: Maybe<Work_Schedule_Resume_Id_Mutation_Response>;
  /** insert a single row into the table: "work_schedule_resume_id" */
  insert_work_schedule_resume_id_one?: Maybe<Work_Schedule_Resume_Id>;
  login_handler?: Maybe<Response>;
  password_change_handle?: Maybe<Res>;
  reg_Employer?: Maybe<SampleOutput>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
  /** update data of the table: "additional_education" */
  update_additional_education?: Maybe<Additional_Education_Mutation_Response>;
  /** update single row of the table: "additional_education" */
  update_additional_education_by_pk?: Maybe<Additional_Education>;
  /** update multiples rows of table: "additional_education" */
  update_additional_education_many?: Maybe<Array<Maybe<Additional_Education_Mutation_Response>>>;
  /** update data of the table: "city_of_residence" */
  update_city_of_residence?: Maybe<City_Of_Residence_Mutation_Response>;
  /** update single row of the table: "city_of_residence" */
  update_city_of_residence_by_pk?: Maybe<City_Of_Residence>;
  /** update multiples rows of table: "city_of_residence" */
  update_city_of_residence_many?: Maybe<Array<Maybe<City_Of_Residence_Mutation_Response>>>;
  /** update data of the table: "competencies_of_jobseekers" */
  update_competencies_of_jobseekers?: Maybe<Competencies_Of_Jobseekers_Mutation_Response>;
  /** update single row of the table: "competencies_of_jobseekers" */
  update_competencies_of_jobseekers_by_pk?: Maybe<Competencies_Of_Jobseekers>;
  /** update multiples rows of table: "competencies_of_jobseekers" */
  update_competencies_of_jobseekers_many?: Maybe<Array<Maybe<Competencies_Of_Jobseekers_Mutation_Response>>>;
  /** update data of the table: "driving_license" */
  update_driving_license?: Maybe<Driving_License_Mutation_Response>;
  /** update single row of the table: "driving_license" */
  update_driving_license_by_pk?: Maybe<Driving_License>;
  /** update data of the table: "driving_license_jobseeker_id" */
  update_driving_license_jobseeker_id?: Maybe<Driving_License_Jobseeker_Id_Mutation_Response>;
  /** update single row of the table: "driving_license_jobseeker_id" */
  update_driving_license_jobseeker_id_by_pk?: Maybe<Driving_License_Jobseeker_Id>;
  /** update multiples rows of table: "driving_license_jobseeker_id" */
  update_driving_license_jobseeker_id_many?: Maybe<Array<Maybe<Driving_License_Jobseeker_Id_Mutation_Response>>>;
  /** update multiples rows of table: "driving_license" */
  update_driving_license_many?: Maybe<Array<Maybe<Driving_License_Mutation_Response>>>;
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
  /** update data of the table: "jobseeker" */
  update_jobseeker?: Maybe<Jobseeker_Mutation_Response>;
  /** update data of the table: "jobseeker_additional_education" */
  update_jobseeker_additional_education?: Maybe<Jobseeker_Additional_Education_Mutation_Response>;
  /** update single row of the table: "jobseeker_additional_education" */
  update_jobseeker_additional_education_by_pk?: Maybe<Jobseeker_Additional_Education>;
  /** update multiples rows of table: "jobseeker_additional_education" */
  update_jobseeker_additional_education_many?: Maybe<Array<Maybe<Jobseeker_Additional_Education_Mutation_Response>>>;
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
  /** update data of the table: "jobseeker_performance" */
  update_jobseeker_performance?: Maybe<Jobseeker_Performance_Mutation_Response>;
  /** update single row of the table: "jobseeker_performance" */
  update_jobseeker_performance_by_pk?: Maybe<Jobseeker_Performance>;
  /** update multiples rows of table: "jobseeker_performance" */
  update_jobseeker_performance_many?: Maybe<Array<Maybe<Jobseeker_Performance_Mutation_Response>>>;
  /** update data of the table: "jobseeker_vacancy" */
  update_jobseeker_vacancy?: Maybe<Jobseeker_Vacancy_Mutation_Response>;
  /** update single row of the table: "jobseeker_vacancy" */
  update_jobseeker_vacancy_by_pk?: Maybe<Jobseeker_Vacancy>;
  /** update multiples rows of table: "jobseeker_vacancy" */
  update_jobseeker_vacancy_many?: Maybe<Array<Maybe<Jobseeker_Vacancy_Mutation_Response>>>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update multiples rows of table: "organization" */
  update_organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>;
  /** update data of the table: "resume" */
  update_resume?: Maybe<Resume_Mutation_Response>;
  /** update single row of the table: "resume" */
  update_resume_by_pk?: Maybe<Resume>;
  /** update multiples rows of table: "resume" */
  update_resume_many?: Maybe<Array<Maybe<Resume_Mutation_Response>>>;
  /** update data of the table: "subject_competence_info" */
  update_subject_competence_info?: Maybe<Subject_Competence_Info_Mutation_Response>;
  /** update single row of the table: "subject_competence_info" */
  update_subject_competence_info_by_pk?: Maybe<Subject_Competence_Info>;
  /** update multiples rows of table: "subject_competence_info" */
  update_subject_competence_info_many?: Maybe<Array<Maybe<Subject_Competence_Info_Mutation_Response>>>;
  /** update data of the table: "type_of_employment" */
  update_type_of_employment?: Maybe<Type_Of_Employment_Mutation_Response>;
  /** update single row of the table: "type_of_employment" */
  update_type_of_employment_by_pk?: Maybe<Type_Of_Employment>;
  /** update multiples rows of table: "type_of_employment" */
  update_type_of_employment_many?: Maybe<Array<Maybe<Type_Of_Employment_Mutation_Response>>>;
  /** update data of the table: "type_of_employment_resume_id" */
  update_type_of_employment_resume_id?: Maybe<Type_Of_Employment_Resume_Id_Mutation_Response>;
  /** update single row of the table: "type_of_employment_resume_id" */
  update_type_of_employment_resume_id_by_pk?: Maybe<Type_Of_Employment_Resume_Id>;
  /** update multiples rows of table: "type_of_employment_resume_id" */
  update_type_of_employment_resume_id_many?: Maybe<Array<Maybe<Type_Of_Employment_Resume_Id_Mutation_Response>>>;
  /** update data of the table: "vacancy" */
  update_vacancy?: Maybe<Vacancy_Mutation_Response>;
  /** update single row of the table: "vacancy" */
  update_vacancy_by_pk?: Maybe<Vacancy>;
  /** update multiples rows of table: "vacancy" */
  update_vacancy_many?: Maybe<Array<Maybe<Vacancy_Mutation_Response>>>;
  /** update data of the table: "work_experience" */
  update_work_experience?: Maybe<Work_Experience_Mutation_Response>;
  /** update single row of the table: "work_experience" */
  update_work_experience_by_pk?: Maybe<Work_Experience>;
  /** update multiples rows of table: "work_experience" */
  update_work_experience_many?: Maybe<Array<Maybe<Work_Experience_Mutation_Response>>>;
  /** update data of the table: "work_schedule" */
  update_work_schedule?: Maybe<Work_Schedule_Mutation_Response>;
  /** update single row of the table: "work_schedule" */
  update_work_schedule_by_pk?: Maybe<Work_Schedule>;
  /** update multiples rows of table: "work_schedule" */
  update_work_schedule_many?: Maybe<Array<Maybe<Work_Schedule_Mutation_Response>>>;
  /** update data of the table: "work_schedule_resume_id" */
  update_work_schedule_resume_id?: Maybe<Work_Schedule_Resume_Id_Mutation_Response>;
  /** update single row of the table: "work_schedule_resume_id" */
  update_work_schedule_resume_id_by_pk?: Maybe<Work_Schedule_Resume_Id>;
  /** update multiples rows of table: "work_schedule_resume_id" */
  update_work_schedule_resume_id_many?: Maybe<Array<Maybe<Work_Schedule_Resume_Id_Mutation_Response>>>;
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
export type Mutation_RootDelete_Additional_EducationArgs = {
  where: Additional_Education_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Additional_Education_By_PkArgs = {
  additional_education_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_City_Of_ResidenceArgs = {
  where: City_Of_Residence_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_City_Of_Residence_By_PkArgs = {
  city_of_residence_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Competencies_Of_JobseekersArgs = {
  where: Competencies_Of_Jobseekers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Competencies_Of_Jobseekers_By_PkArgs = {
  competencies_of_jobseekers_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Driving_LicenseArgs = {
  where: Driving_License_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Driving_License_By_PkArgs = {
  driving_license_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Driving_License_Jobseeker_IdArgs = {
  where: Driving_License_Jobseeker_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Driving_License_Jobseeker_Id_By_PkArgs = {
  driving_license_id: Scalars['uuid'];
  jobseeker_id: Scalars['uuid'];
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
  employer_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_JobseekerArgs = {
  where: Jobseeker_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobseeker_Additional_EducationArgs = {
  where: Jobseeker_Additional_Education_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobseeker_Additional_Education_By_PkArgs = {
  additional_education_id: Scalars['uuid'];
  jobseeker_id: Scalars['uuid'];
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
export type Mutation_RootDelete_Jobseeker_PerformanceArgs = {
  where: Jobseeker_Performance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobseeker_Performance_By_PkArgs = {
  jobseeker_performance_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Jobseeker_VacancyArgs = {
  where: Jobseeker_Vacancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobseeker_Vacancy_By_PkArgs = {
  jobseeker_id: Scalars['uuid'];
  vacancy_id: Scalars['uuid'];
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
export type Mutation_RootDelete_ResumeArgs = {
  where: Resume_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resume_By_PkArgs = {
  resume_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Subject_Competence_InfoArgs = {
  where: Subject_Competence_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subject_Competence_Info_By_PkArgs = {
  subject_competence_info_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Type_Of_EmploymentArgs = {
  where: Type_Of_Employment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Type_Of_Employment_By_PkArgs = {
  type_of_employment_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Type_Of_Employment_Resume_IdArgs = {
  where: Type_Of_Employment_Resume_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Type_Of_Employment_Resume_Id_By_PkArgs = {
  resume_id: Scalars['uuid'];
  type_of_employment_id: Scalars['uuid'];
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
export type Mutation_RootDelete_Work_ExperienceArgs = {
  where: Work_Experience_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Experience_By_PkArgs = {
  work_experience_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Work_ScheduleArgs = {
  where: Work_Schedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Schedule_By_PkArgs = {
  work_schedule_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Work_Schedule_Resume_IdArgs = {
  where: Work_Schedule_Resume_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Schedule_Resume_Id_By_PkArgs = {
  resume_id: Scalars['uuid'];
  work_schedule_id: Scalars['uuid'];
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
export type Mutation_RootInsert_Additional_EducationArgs = {
  objects: Array<Additional_Education_Insert_Input>;
  on_conflict?: InputMaybe<Additional_Education_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Additional_Education_OneArgs = {
  object: Additional_Education_Insert_Input;
  on_conflict?: InputMaybe<Additional_Education_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_City_Of_ResidenceArgs = {
  objects: Array<City_Of_Residence_Insert_Input>;
  on_conflict?: InputMaybe<City_Of_Residence_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_City_Of_Residence_OneArgs = {
  object: City_Of_Residence_Insert_Input;
  on_conflict?: InputMaybe<City_Of_Residence_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Competencies_Of_JobseekersArgs = {
  objects: Array<Competencies_Of_Jobseekers_Insert_Input>;
  on_conflict?: InputMaybe<Competencies_Of_Jobseekers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Competencies_Of_Jobseekers_OneArgs = {
  object: Competencies_Of_Jobseekers_Insert_Input;
  on_conflict?: InputMaybe<Competencies_Of_Jobseekers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Driving_LicenseArgs = {
  objects: Array<Driving_License_Insert_Input>;
  on_conflict?: InputMaybe<Driving_License_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Driving_License_Jobseeker_IdArgs = {
  objects: Array<Driving_License_Jobseeker_Id_Insert_Input>;
  on_conflict?: InputMaybe<Driving_License_Jobseeker_Id_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Driving_License_Jobseeker_Id_OneArgs = {
  object: Driving_License_Jobseeker_Id_Insert_Input;
  on_conflict?: InputMaybe<Driving_License_Jobseeker_Id_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Driving_License_OneArgs = {
  object: Driving_License_Insert_Input;
  on_conflict?: InputMaybe<Driving_License_On_Conflict>;
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
export type Mutation_RootInsert_JobseekerArgs = {
  objects: Array<Jobseeker_Insert_Input>;
  on_conflict?: InputMaybe<Jobseeker_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobseeker_Additional_EducationArgs = {
  objects: Array<Jobseeker_Additional_Education_Insert_Input>;
  on_conflict?: InputMaybe<Jobseeker_Additional_Education_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobseeker_Additional_Education_OneArgs = {
  object: Jobseeker_Additional_Education_Insert_Input;
  on_conflict?: InputMaybe<Jobseeker_Additional_Education_On_Conflict>;
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
export type Mutation_RootInsert_Jobseeker_PerformanceArgs = {
  objects: Array<Jobseeker_Performance_Insert_Input>;
  on_conflict?: InputMaybe<Jobseeker_Performance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobseeker_Performance_OneArgs = {
  object: Jobseeker_Performance_Insert_Input;
  on_conflict?: InputMaybe<Jobseeker_Performance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobseeker_VacancyArgs = {
  objects: Array<Jobseeker_Vacancy_Insert_Input>;
  on_conflict?: InputMaybe<Jobseeker_Vacancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobseeker_Vacancy_OneArgs = {
  object: Jobseeker_Vacancy_Insert_Input;
  on_conflict?: InputMaybe<Jobseeker_Vacancy_On_Conflict>;
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
export type Mutation_RootInsert_ResumeArgs = {
  objects: Array<Resume_Insert_Input>;
  on_conflict?: InputMaybe<Resume_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resume_OneArgs = {
  object: Resume_Insert_Input;
  on_conflict?: InputMaybe<Resume_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_Competence_InfoArgs = {
  objects: Array<Subject_Competence_Info_Insert_Input>;
  on_conflict?: InputMaybe<Subject_Competence_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_Competence_Info_OneArgs = {
  object: Subject_Competence_Info_Insert_Input;
  on_conflict?: InputMaybe<Subject_Competence_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Type_Of_EmploymentArgs = {
  objects: Array<Type_Of_Employment_Insert_Input>;
  on_conflict?: InputMaybe<Type_Of_Employment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Type_Of_Employment_OneArgs = {
  object: Type_Of_Employment_Insert_Input;
  on_conflict?: InputMaybe<Type_Of_Employment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Type_Of_Employment_Resume_IdArgs = {
  objects: Array<Type_Of_Employment_Resume_Id_Insert_Input>;
  on_conflict?: InputMaybe<Type_Of_Employment_Resume_Id_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Type_Of_Employment_Resume_Id_OneArgs = {
  object: Type_Of_Employment_Resume_Id_Insert_Input;
  on_conflict?: InputMaybe<Type_Of_Employment_Resume_Id_On_Conflict>;
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
export type Mutation_RootInsert_Work_ExperienceArgs = {
  objects: Array<Work_Experience_Insert_Input>;
  on_conflict?: InputMaybe<Work_Experience_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Experience_OneArgs = {
  object: Work_Experience_Insert_Input;
  on_conflict?: InputMaybe<Work_Experience_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_ScheduleArgs = {
  objects: Array<Work_Schedule_Insert_Input>;
  on_conflict?: InputMaybe<Work_Schedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Schedule_OneArgs = {
  object: Work_Schedule_Insert_Input;
  on_conflict?: InputMaybe<Work_Schedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Schedule_Resume_IdArgs = {
  objects: Array<Work_Schedule_Resume_Id_Insert_Input>;
  on_conflict?: InputMaybe<Work_Schedule_Resume_Id_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Schedule_Resume_Id_OneArgs = {
  object: Work_Schedule_Resume_Id_Insert_Input;
  on_conflict?: InputMaybe<Work_Schedule_Resume_Id_On_Conflict>;
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
export type Mutation_RootReg_EmployerArgs = {
  arg: SampleInput;
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
export type Mutation_RootUpdate_Additional_EducationArgs = {
  _set?: InputMaybe<Additional_Education_Set_Input>;
  where: Additional_Education_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Additional_Education_By_PkArgs = {
  _set?: InputMaybe<Additional_Education_Set_Input>;
  pk_columns: Additional_Education_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Additional_Education_ManyArgs = {
  updates: Array<Additional_Education_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_City_Of_ResidenceArgs = {
  _inc?: InputMaybe<City_Of_Residence_Inc_Input>;
  _set?: InputMaybe<City_Of_Residence_Set_Input>;
  where: City_Of_Residence_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_City_Of_Residence_By_PkArgs = {
  _inc?: InputMaybe<City_Of_Residence_Inc_Input>;
  _set?: InputMaybe<City_Of_Residence_Set_Input>;
  pk_columns: City_Of_Residence_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_City_Of_Residence_ManyArgs = {
  updates: Array<City_Of_Residence_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Competencies_Of_JobseekersArgs = {
  _set?: InputMaybe<Competencies_Of_Jobseekers_Set_Input>;
  where: Competencies_Of_Jobseekers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Competencies_Of_Jobseekers_By_PkArgs = {
  _set?: InputMaybe<Competencies_Of_Jobseekers_Set_Input>;
  pk_columns: Competencies_Of_Jobseekers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Competencies_Of_Jobseekers_ManyArgs = {
  updates: Array<Competencies_Of_Jobseekers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Driving_LicenseArgs = {
  _set?: InputMaybe<Driving_License_Set_Input>;
  where: Driving_License_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Driving_License_By_PkArgs = {
  _set?: InputMaybe<Driving_License_Set_Input>;
  pk_columns: Driving_License_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Driving_License_Jobseeker_IdArgs = {
  _set?: InputMaybe<Driving_License_Jobseeker_Id_Set_Input>;
  where: Driving_License_Jobseeker_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Driving_License_Jobseeker_Id_By_PkArgs = {
  _set?: InputMaybe<Driving_License_Jobseeker_Id_Set_Input>;
  pk_columns: Driving_License_Jobseeker_Id_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Driving_License_Jobseeker_Id_ManyArgs = {
  updates: Array<Driving_License_Jobseeker_Id_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Driving_License_ManyArgs = {
  updates: Array<Driving_License_Updates>;
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
  _inc?: InputMaybe<Employer_Inc_Input>;
  _set?: InputMaybe<Employer_Set_Input>;
  where: Employer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employer_By_PkArgs = {
  _inc?: InputMaybe<Employer_Inc_Input>;
  _set?: InputMaybe<Employer_Set_Input>;
  pk_columns: Employer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Employer_ManyArgs = {
  updates: Array<Employer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_JobseekerArgs = {
  _set?: InputMaybe<Jobseeker_Set_Input>;
  where: Jobseeker_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Additional_EducationArgs = {
  _set?: InputMaybe<Jobseeker_Additional_Education_Set_Input>;
  where: Jobseeker_Additional_Education_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Additional_Education_By_PkArgs = {
  _set?: InputMaybe<Jobseeker_Additional_Education_Set_Input>;
  pk_columns: Jobseeker_Additional_Education_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Additional_Education_ManyArgs = {
  updates: Array<Jobseeker_Additional_Education_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_By_PkArgs = {
  _set?: InputMaybe<Jobseeker_Set_Input>;
  pk_columns: Jobseeker_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_EducationArgs = {
  _inc?: InputMaybe<Jobseeker_Education_Inc_Input>;
  _set?: InputMaybe<Jobseeker_Education_Set_Input>;
  where: Jobseeker_Education_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Education_By_PkArgs = {
  _inc?: InputMaybe<Jobseeker_Education_Inc_Input>;
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
export type Mutation_RootUpdate_Jobseeker_PerformanceArgs = {
  _inc?: InputMaybe<Jobseeker_Performance_Inc_Input>;
  _set?: InputMaybe<Jobseeker_Performance_Set_Input>;
  where: Jobseeker_Performance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Performance_By_PkArgs = {
  _inc?: InputMaybe<Jobseeker_Performance_Inc_Input>;
  _set?: InputMaybe<Jobseeker_Performance_Set_Input>;
  pk_columns: Jobseeker_Performance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Performance_ManyArgs = {
  updates: Array<Jobseeker_Performance_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_VacancyArgs = {
  _set?: InputMaybe<Jobseeker_Vacancy_Set_Input>;
  where: Jobseeker_Vacancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Vacancy_By_PkArgs = {
  _set?: InputMaybe<Jobseeker_Vacancy_Set_Input>;
  pk_columns: Jobseeker_Vacancy_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jobseeker_Vacancy_ManyArgs = {
  updates: Array<Jobseeker_Vacancy_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
  updates: Array<Organization_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ResumeArgs = {
  _inc?: InputMaybe<Resume_Inc_Input>;
  _set?: InputMaybe<Resume_Set_Input>;
  where: Resume_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resume_By_PkArgs = {
  _inc?: InputMaybe<Resume_Inc_Input>;
  _set?: InputMaybe<Resume_Set_Input>;
  pk_columns: Resume_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resume_ManyArgs = {
  updates: Array<Resume_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Competence_InfoArgs = {
  _inc?: InputMaybe<Subject_Competence_Info_Inc_Input>;
  _set?: InputMaybe<Subject_Competence_Info_Set_Input>;
  where: Subject_Competence_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Competence_Info_By_PkArgs = {
  _inc?: InputMaybe<Subject_Competence_Info_Inc_Input>;
  _set?: InputMaybe<Subject_Competence_Info_Set_Input>;
  pk_columns: Subject_Competence_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Competence_Info_ManyArgs = {
  updates: Array<Subject_Competence_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Type_Of_EmploymentArgs = {
  _set?: InputMaybe<Type_Of_Employment_Set_Input>;
  where: Type_Of_Employment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Type_Of_Employment_By_PkArgs = {
  _set?: InputMaybe<Type_Of_Employment_Set_Input>;
  pk_columns: Type_Of_Employment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Type_Of_Employment_ManyArgs = {
  updates: Array<Type_Of_Employment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Type_Of_Employment_Resume_IdArgs = {
  _set?: InputMaybe<Type_Of_Employment_Resume_Id_Set_Input>;
  where: Type_Of_Employment_Resume_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Type_Of_Employment_Resume_Id_By_PkArgs = {
  _set?: InputMaybe<Type_Of_Employment_Resume_Id_Set_Input>;
  pk_columns: Type_Of_Employment_Resume_Id_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Type_Of_Employment_Resume_Id_ManyArgs = {
  updates: Array<Type_Of_Employment_Resume_Id_Updates>;
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


/** mutation root */
export type Mutation_RootUpdate_Work_ExperienceArgs = {
  _set?: InputMaybe<Work_Experience_Set_Input>;
  where: Work_Experience_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Experience_By_PkArgs = {
  _set?: InputMaybe<Work_Experience_Set_Input>;
  pk_columns: Work_Experience_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Experience_ManyArgs = {
  updates: Array<Work_Experience_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Work_ScheduleArgs = {
  _set?: InputMaybe<Work_Schedule_Set_Input>;
  where: Work_Schedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Schedule_By_PkArgs = {
  _set?: InputMaybe<Work_Schedule_Set_Input>;
  pk_columns: Work_Schedule_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Schedule_ManyArgs = {
  updates: Array<Work_Schedule_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Schedule_Resume_IdArgs = {
  _set?: InputMaybe<Work_Schedule_Resume_Id_Set_Input>;
  where: Work_Schedule_Resume_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Schedule_Resume_Id_By_PkArgs = {
  _set?: InputMaybe<Work_Schedule_Resume_Id_Set_Input>;
  pk_columns: Work_Schedule_Resume_Id_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Schedule_Resume_Id_ManyArgs = {
  updates: Array<Work_Schedule_Resume_Id_Updates>;
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
  /** An object relationship */
  account?: Maybe<Account>;
  account_id?: Maybe<Scalars['uuid']>;
  date_registration: Scalars['date'];
  /** An object relationship */
  employer?: Maybe<Employer>;
  employer_id?: Maybe<Scalars['uuid']>;
  id_organization: Scalars['uuid'];
  inn_organization: Scalars['bigint'];
  kpp_organization: Scalars['bigint'];
  legal_address?: Maybe<Scalars['String']>;
  main_activity: Scalars['String'];
  name_organization: Scalars['String'];
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

export type Organization_Aggregate_Bool_Exp = {
  count?: InputMaybe<Organization_Aggregate_Bool_Exp_Count>;
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
  avg?: Maybe<Organization_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization" */
export type Organization_Aggregate_Order_By = {
  avg?: InputMaybe<Organization_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organization_Max_Order_By>;
  min?: InputMaybe<Organization_Min_Order_By>;
  stddev?: InputMaybe<Organization_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Organization_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Organization_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Organization_Sum_Order_By>;
  var_pop?: InputMaybe<Organization_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Organization_Var_Samp_Order_By>;
  variance?: InputMaybe<Organization_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organization" */
export type Organization_Arr_Rel_Insert_Input = {
  data: Array<Organization_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  __typename?: 'organization_avg_fields';
  inn_organization?: Maybe<Scalars['Float']>;
  kpp_organization?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organization" */
export type Organization_Avg_Order_By = {
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  date_registration?: InputMaybe<Date_Comparison_Exp>;
  employer?: InputMaybe<Employer_Bool_Exp>;
  employer_id?: InputMaybe<Uuid_Comparison_Exp>;
  id_organization?: InputMaybe<Uuid_Comparison_Exp>;
  inn_organization?: InputMaybe<Bigint_Comparison_Exp>;
  kpp_organization?: InputMaybe<Bigint_Comparison_Exp>;
  legal_address?: InputMaybe<String_Comparison_Exp>;
  main_activity?: InputMaybe<String_Comparison_Exp>;
  name_organization?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "inn_organization" */
  OrganizationInnOrganizationKey = 'organization_inn_organization_key',
  /** unique or primary key constraint on columns "kpp_organization" */
  OrganizationKppOrganizationKey = 'organization_kpp_organization_key',
  /** unique or primary key constraint on columns "name_organization" */
  OrganizationNameOrganizationKey = 'organization_name_organization_key',
  /** unique or primary key constraint on columns "id_organization" */
  OrganizationPkey = 'organization_pkey'
}

/** input type for incrementing numeric columns in table "organization" */
export type Organization_Inc_Input = {
  inn_organization?: InputMaybe<Scalars['bigint']>;
  kpp_organization?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  date_registration?: InputMaybe<Scalars['date']>;
  employer?: InputMaybe<Employer_Obj_Rel_Insert_Input>;
  employer_id?: InputMaybe<Scalars['uuid']>;
  id_organization?: InputMaybe<Scalars['uuid']>;
  inn_organization?: InputMaybe<Scalars['bigint']>;
  kpp_organization?: InputMaybe<Scalars['bigint']>;
  legal_address?: InputMaybe<Scalars['String']>;
  main_activity?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  date_registration?: Maybe<Scalars['date']>;
  employer_id?: Maybe<Scalars['uuid']>;
  id_organization?: Maybe<Scalars['uuid']>;
  inn_organization?: Maybe<Scalars['bigint']>;
  kpp_organization?: Maybe<Scalars['bigint']>;
  legal_address?: Maybe<Scalars['String']>;
  main_activity?: Maybe<Scalars['String']>;
  name_organization?: Maybe<Scalars['String']>;
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
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  date_registration?: Maybe<Scalars['date']>;
  employer_id?: Maybe<Scalars['uuid']>;
  id_organization?: Maybe<Scalars['uuid']>;
  inn_organization?: Maybe<Scalars['bigint']>;
  kpp_organization?: Maybe<Scalars['bigint']>;
  legal_address?: Maybe<Scalars['String']>;
  main_activity?: Maybe<Scalars['String']>;
  name_organization?: Maybe<Scalars['String']>;
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
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  date_registration?: InputMaybe<Order_By>;
  employer?: InputMaybe<Employer_Order_By>;
  employer_id?: InputMaybe<Order_By>;
  id_organization?: InputMaybe<Order_By>;
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
  legal_address?: InputMaybe<Order_By>;
  main_activity?: InputMaybe<Order_By>;
  name_organization?: InputMaybe<Order_By>;
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
  NameOrganization = 'name_organization'
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  date_registration?: InputMaybe<Scalars['date']>;
  employer_id?: InputMaybe<Scalars['uuid']>;
  id_organization?: InputMaybe<Scalars['uuid']>;
  inn_organization?: InputMaybe<Scalars['bigint']>;
  kpp_organization?: InputMaybe<Scalars['bigint']>;
  legal_address?: InputMaybe<Scalars['String']>;
  main_activity?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  __typename?: 'organization_stddev_fields';
  inn_organization?: Maybe<Scalars['Float']>;
  kpp_organization?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organization" */
export type Organization_Stddev_Order_By = {
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  __typename?: 'organization_stddev_pop_fields';
  inn_organization?: Maybe<Scalars['Float']>;
  kpp_organization?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organization" */
export type Organization_Stddev_Pop_Order_By = {
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  __typename?: 'organization_stddev_samp_fields';
  inn_organization?: Maybe<Scalars['Float']>;
  kpp_organization?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organization" */
export type Organization_Stddev_Samp_Order_By = {
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
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
  inn_organization?: InputMaybe<Scalars['bigint']>;
  kpp_organization?: InputMaybe<Scalars['bigint']>;
  legal_address?: InputMaybe<Scalars['String']>;
  main_activity?: InputMaybe<Scalars['String']>;
  name_organization?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  __typename?: 'organization_sum_fields';
  inn_organization?: Maybe<Scalars['bigint']>;
  kpp_organization?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "organization" */
export type Organization_Sum_Order_By = {
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
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
  NameOrganization = 'name_organization'
}

export type Organization_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organization_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  __typename?: 'organization_var_pop_fields';
  inn_organization?: Maybe<Scalars['Float']>;
  kpp_organization?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organization" */
export type Organization_Var_Pop_Order_By = {
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  __typename?: 'organization_var_samp_fields';
  inn_organization?: Maybe<Scalars['Float']>;
  kpp_organization?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organization" */
export type Organization_Var_Samp_Order_By = {
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  __typename?: 'organization_variance_fields';
  inn_organization?: Maybe<Scalars['Float']>;
  kpp_organization?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organization" */
export type Organization_Variance_Order_By = {
  inn_organization?: InputMaybe<Order_By>;
  kpp_organization?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  _service: _Service;
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "additional_education" */
  additional_education: Array<Additional_Education>;
  /** fetch aggregated fields from the table: "additional_education" */
  additional_education_aggregate: Additional_Education_Aggregate;
  /** fetch data from the table: "additional_education" using primary key columns */
  additional_education_by_pk?: Maybe<Additional_Education>;
  /** fetch data from the table: "city_of_residence" */
  city_of_residence: Array<City_Of_Residence>;
  /** fetch aggregated fields from the table: "city_of_residence" */
  city_of_residence_aggregate: City_Of_Residence_Aggregate;
  /** fetch data from the table: "city_of_residence" using primary key columns */
  city_of_residence_by_pk?: Maybe<City_Of_Residence>;
  /** An array relationship */
  competencies_of_jobseekers: Array<Competencies_Of_Jobseekers>;
  /** An aggregate relationship */
  competencies_of_jobseekers_aggregate: Competencies_Of_Jobseekers_Aggregate;
  /** fetch data from the table: "competencies_of_jobseekers" using primary key columns */
  competencies_of_jobseekers_by_pk?: Maybe<Competencies_Of_Jobseekers>;
  /** fetch data from the table: "driving_license" */
  driving_license: Array<Driving_License>;
  /** fetch aggregated fields from the table: "driving_license" */
  driving_license_aggregate: Driving_License_Aggregate;
  /** fetch data from the table: "driving_license" using primary key columns */
  driving_license_by_pk?: Maybe<Driving_License>;
  /** fetch data from the table: "driving_license_jobseeker_id" */
  driving_license_jobseeker_id: Array<Driving_License_Jobseeker_Id>;
  /** fetch aggregated fields from the table: "driving_license_jobseeker_id" */
  driving_license_jobseeker_id_aggregate: Driving_License_Jobseeker_Id_Aggregate;
  /** fetch data from the table: "driving_license_jobseeker_id" using primary key columns */
  driving_license_jobseeker_id_by_pk?: Maybe<Driving_License_Jobseeker_Id>;
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
  /** fetch data from the table: "jobseeker" */
  jobseeker: Array<Jobseeker>;
  /** fetch data from the table: "jobseeker_additional_education" */
  jobseeker_additional_education: Array<Jobseeker_Additional_Education>;
  /** fetch aggregated fields from the table: "jobseeker_additional_education" */
  jobseeker_additional_education_aggregate: Jobseeker_Additional_Education_Aggregate;
  /** fetch data from the table: "jobseeker_additional_education" using primary key columns */
  jobseeker_additional_education_by_pk?: Maybe<Jobseeker_Additional_Education>;
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
  /** fetch data from the table: "jobseeker_performance" */
  jobseeker_performance: Array<Jobseeker_Performance>;
  /** fetch aggregated fields from the table: "jobseeker_performance" */
  jobseeker_performance_aggregate: Jobseeker_Performance_Aggregate;
  /** fetch data from the table: "jobseeker_performance" using primary key columns */
  jobseeker_performance_by_pk?: Maybe<Jobseeker_Performance>;
  /** fetch data from the table: "jobseeker_vacancy" */
  jobseeker_vacancy: Array<Jobseeker_Vacancy>;
  /** fetch aggregated fields from the table: "jobseeker_vacancy" */
  jobseeker_vacancy_aggregate: Jobseeker_Vacancy_Aggregate;
  /** fetch data from the table: "jobseeker_vacancy" using primary key columns */
  jobseeker_vacancy_by_pk?: Maybe<Jobseeker_Vacancy>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "resume" */
  resume: Array<Resume>;
  /** fetch aggregated fields from the table: "resume" */
  resume_aggregate: Resume_Aggregate;
  /** fetch data from the table: "resume" using primary key columns */
  resume_by_pk?: Maybe<Resume>;
  /** An array relationship */
  subject_competence_info: Array<Subject_Competence_Info>;
  /** An aggregate relationship */
  subject_competence_info_aggregate: Subject_Competence_Info_Aggregate;
  /** fetch data from the table: "subject_competence_info" using primary key columns */
  subject_competence_info_by_pk?: Maybe<Subject_Competence_Info>;
  /** fetch data from the table: "type_of_employment" */
  type_of_employment: Array<Type_Of_Employment>;
  /** fetch aggregated fields from the table: "type_of_employment" */
  type_of_employment_aggregate: Type_Of_Employment_Aggregate;
  /** fetch data from the table: "type_of_employment" using primary key columns */
  type_of_employment_by_pk?: Maybe<Type_Of_Employment>;
  /** fetch data from the table: "type_of_employment_resume_id" */
  type_of_employment_resume_id: Array<Type_Of_Employment_Resume_Id>;
  /** fetch aggregated fields from the table: "type_of_employment_resume_id" */
  type_of_employment_resume_id_aggregate: Type_Of_Employment_Resume_Id_Aggregate;
  /** fetch data from the table: "type_of_employment_resume_id" using primary key columns */
  type_of_employment_resume_id_by_pk?: Maybe<Type_Of_Employment_Resume_Id>;
  /** fetch data from the table: "vacancy" */
  vacancy: Array<Vacancy>;
  /** fetch aggregated fields from the table: "vacancy" */
  vacancy_aggregate: Vacancy_Aggregate;
  /** fetch data from the table: "vacancy" using primary key columns */
  vacancy_by_pk?: Maybe<Vacancy>;
  /** fetch data from the table: "work_experience" */
  work_experience: Array<Work_Experience>;
  /** fetch aggregated fields from the table: "work_experience" */
  work_experience_aggregate: Work_Experience_Aggregate;
  /** fetch data from the table: "work_experience" using primary key columns */
  work_experience_by_pk?: Maybe<Work_Experience>;
  /** fetch data from the table: "work_schedule" */
  work_schedule: Array<Work_Schedule>;
  /** fetch aggregated fields from the table: "work_schedule" */
  work_schedule_aggregate: Work_Schedule_Aggregate;
  /** fetch data from the table: "work_schedule" using primary key columns */
  work_schedule_by_pk?: Maybe<Work_Schedule>;
  /** fetch data from the table: "work_schedule_resume_id" */
  work_schedule_resume_id: Array<Work_Schedule_Resume_Id>;
  /** fetch aggregated fields from the table: "work_schedule_resume_id" */
  work_schedule_resume_id_aggregate: Work_Schedule_Resume_Id_Aggregate;
  /** fetch data from the table: "work_schedule_resume_id" using primary key columns */
  work_schedule_resume_id_by_pk?: Maybe<Work_Schedule_Resume_Id>;
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


export type Query_RootAdditional_EducationArgs = {
  distinct_on?: InputMaybe<Array<Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Additional_Education_Order_By>>;
  where?: InputMaybe<Additional_Education_Bool_Exp>;
};


export type Query_RootAdditional_Education_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Additional_Education_Order_By>>;
  where?: InputMaybe<Additional_Education_Bool_Exp>;
};


export type Query_RootAdditional_Education_By_PkArgs = {
  additional_education_id: Scalars['uuid'];
};


export type Query_RootCity_Of_ResidenceArgs = {
  distinct_on?: InputMaybe<Array<City_Of_Residence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Of_Residence_Order_By>>;
  where?: InputMaybe<City_Of_Residence_Bool_Exp>;
};


export type Query_RootCity_Of_Residence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<City_Of_Residence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Of_Residence_Order_By>>;
  where?: InputMaybe<City_Of_Residence_Bool_Exp>;
};


export type Query_RootCity_Of_Residence_By_PkArgs = {
  city_of_residence_id: Scalars['uuid'];
};


export type Query_RootCompetencies_Of_JobseekersArgs = {
  distinct_on?: InputMaybe<Array<Competencies_Of_Jobseekers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Competencies_Of_Jobseekers_Order_By>>;
  where?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
};


export type Query_RootCompetencies_Of_Jobseekers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Competencies_Of_Jobseekers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Competencies_Of_Jobseekers_Order_By>>;
  where?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
};


export type Query_RootCompetencies_Of_Jobseekers_By_PkArgs = {
  competencies_of_jobseekers_id: Scalars['uuid'];
};


export type Query_RootDriving_LicenseArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Order_By>>;
  where?: InputMaybe<Driving_License_Bool_Exp>;
};


export type Query_RootDriving_License_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Order_By>>;
  where?: InputMaybe<Driving_License_Bool_Exp>;
};


export type Query_RootDriving_License_By_PkArgs = {
  driving_license_id: Scalars['uuid'];
};


export type Query_RootDriving_License_Jobseeker_IdArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Jobseeker_Id_Order_By>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};


export type Query_RootDriving_License_Jobseeker_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Jobseeker_Id_Order_By>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};


export type Query_RootDriving_License_Jobseeker_Id_By_PkArgs = {
  driving_license_id: Scalars['uuid'];
  jobseeker_id: Scalars['uuid'];
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
  employer_id: Scalars['uuid'];
};


export type Query_RootJobseekerArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


export type Query_RootJobseeker_Additional_EducationArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Additional_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
};


export type Query_RootJobseeker_Additional_Education_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Additional_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
};


export type Query_RootJobseeker_Additional_Education_By_PkArgs = {
  additional_education_id: Scalars['uuid'];
  jobseeker_id: Scalars['uuid'];
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


export type Query_RootJobseeker_PerformanceArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Performance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Performance_Order_By>>;
  where?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
};


export type Query_RootJobseeker_Performance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Performance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Performance_Order_By>>;
  where?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
};


export type Query_RootJobseeker_Performance_By_PkArgs = {
  jobseeker_performance_id: Scalars['uuid'];
};


export type Query_RootJobseeker_VacancyArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Vacancy_Order_By>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
};


export type Query_RootJobseeker_Vacancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Vacancy_Order_By>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
};


export type Query_RootJobseeker_Vacancy_By_PkArgs = {
  jobseeker_id: Scalars['uuid'];
  vacancy_id: Scalars['uuid'];
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


export type Query_RootResumeArgs = {
  distinct_on?: InputMaybe<Array<Resume_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resume_Order_By>>;
  where?: InputMaybe<Resume_Bool_Exp>;
};


export type Query_RootResume_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resume_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resume_Order_By>>;
  where?: InputMaybe<Resume_Bool_Exp>;
};


export type Query_RootResume_By_PkArgs = {
  resume_id: Scalars['uuid'];
};


export type Query_RootSubject_Competence_InfoArgs = {
  distinct_on?: InputMaybe<Array<Subject_Competence_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subject_Competence_Info_Order_By>>;
  where?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
};


export type Query_RootSubject_Competence_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Competence_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subject_Competence_Info_Order_By>>;
  where?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
};


export type Query_RootSubject_Competence_Info_By_PkArgs = {
  subject_competence_info_id: Scalars['uuid'];
};


export type Query_RootType_Of_EmploymentArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Bool_Exp>;
};


export type Query_RootType_Of_Employment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Bool_Exp>;
};


export type Query_RootType_Of_Employment_By_PkArgs = {
  type_of_employment_id: Scalars['uuid'];
};


export type Query_RootType_Of_Employment_Resume_IdArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};


export type Query_RootType_Of_Employment_Resume_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};


export type Query_RootType_Of_Employment_Resume_Id_By_PkArgs = {
  resume_id: Scalars['uuid'];
  type_of_employment_id: Scalars['uuid'];
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


export type Query_RootWork_ExperienceArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};


export type Query_RootWork_Experience_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};


export type Query_RootWork_Experience_By_PkArgs = {
  work_experience_id: Scalars['uuid'];
};


export type Query_RootWork_ScheduleArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


export type Query_RootWork_Schedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


export type Query_RootWork_Schedule_By_PkArgs = {
  work_schedule_id: Scalars['uuid'];
};


export type Query_RootWork_Schedule_Resume_IdArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Resume_Id_Order_By>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};


export type Query_RootWork_Schedule_Resume_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Resume_Id_Order_By>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};


export type Query_RootWork_Schedule_Resume_Id_By_PkArgs = {
  resume_id: Scalars['uuid'];
  work_schedule_id: Scalars['uuid'];
};

export type Res = {
  __typename?: 'res';
  access_token: Scalars['String'];
  account_id: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type Response = {
  __typename?: 'response';
  access_token: Scalars['String'];
  account_id: Scalars['String'];
  role: Scalars['String'];
};

/** columns and relationships of "resume" */
export type Resume = {
  __typename?: 'resume';
  /** An object relationship */
  city_of_residence?: Maybe<City_Of_Residence>;
  city_of_residence_id?: Maybe<Scalars['uuid']>;
  date_create: Scalars['date'];
  desired_salary?: Maybe<Scalars['Int']>;
  job_position: Scalars['String'];
  /** An object relationship */
  jobseeker: Jobseeker;
  /** An array relationship */
  jobseeker_educations: Array<Jobseeker_Education>;
  /** An aggregate relationship */
  jobseeker_educations_aggregate: Jobseeker_Education_Aggregate;
  jobseeker_id: Scalars['uuid'];
  kids?: Maybe<Scalars['Boolean']>;
  name_resume: Scalars['String'];
  relocate?: Maybe<Scalars['Boolean']>;
  resume_id: Scalars['uuid'];
  short_description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  type_of_employment_resume_ids: Array<Type_Of_Employment_Resume_Id>;
  /** An aggregate relationship */
  type_of_employment_resume_ids_aggregate: Type_Of_Employment_Resume_Id_Aggregate;
  /** An array relationship */
  work_experiences: Array<Work_Experience>;
  /** An aggregate relationship */
  work_experiences_aggregate: Work_Experience_Aggregate;
  /** An array relationship */
  work_schedule_resume_ids: Array<Work_Schedule_Resume_Id>;
  /** An aggregate relationship */
  work_schedule_resume_ids_aggregate: Work_Schedule_Resume_Id_Aggregate;
};


/** columns and relationships of "resume" */
export type ResumeJobseeker_EducationsArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


/** columns and relationships of "resume" */
export type ResumeJobseeker_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Education_Bool_Exp>;
};


/** columns and relationships of "resume" */
export type ResumeType_Of_Employment_Resume_IdsArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};


/** columns and relationships of "resume" */
export type ResumeType_Of_Employment_Resume_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};


/** columns and relationships of "resume" */
export type ResumeWork_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};


/** columns and relationships of "resume" */
export type ResumeWork_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};


/** columns and relationships of "resume" */
export type ResumeWork_Schedule_Resume_IdsArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Resume_Id_Order_By>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};


/** columns and relationships of "resume" */
export type ResumeWork_Schedule_Resume_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Resume_Id_Order_By>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};

/** aggregated selection of "resume" */
export type Resume_Aggregate = {
  __typename?: 'resume_aggregate';
  aggregate?: Maybe<Resume_Aggregate_Fields>;
  nodes: Array<Resume>;
};

export type Resume_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Resume_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Resume_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Resume_Aggregate_Bool_Exp_Count>;
};

export type Resume_Aggregate_Bool_Exp_Bool_And = {
  arguments: Resume_Select_Column_Resume_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Resume_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Resume_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Resume_Select_Column_Resume_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Resume_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Resume_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Resume_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Resume_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "resume" */
export type Resume_Aggregate_Fields = {
  __typename?: 'resume_aggregate_fields';
  avg?: Maybe<Resume_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Resume_Max_Fields>;
  min?: Maybe<Resume_Min_Fields>;
  stddev?: Maybe<Resume_Stddev_Fields>;
  stddev_pop?: Maybe<Resume_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Resume_Stddev_Samp_Fields>;
  sum?: Maybe<Resume_Sum_Fields>;
  var_pop?: Maybe<Resume_Var_Pop_Fields>;
  var_samp?: Maybe<Resume_Var_Samp_Fields>;
  variance?: Maybe<Resume_Variance_Fields>;
};


/** aggregate fields of "resume" */
export type Resume_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resume_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "resume" */
export type Resume_Aggregate_Order_By = {
  avg?: InputMaybe<Resume_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Resume_Max_Order_By>;
  min?: InputMaybe<Resume_Min_Order_By>;
  stddev?: InputMaybe<Resume_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Resume_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Resume_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Resume_Sum_Order_By>;
  var_pop?: InputMaybe<Resume_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Resume_Var_Samp_Order_By>;
  variance?: InputMaybe<Resume_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "resume" */
export type Resume_Arr_Rel_Insert_Input = {
  data: Array<Resume_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Resume_On_Conflict>;
};

/** aggregate avg on columns */
export type Resume_Avg_Fields = {
  __typename?: 'resume_avg_fields';
  desired_salary?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "resume" */
export type Resume_Avg_Order_By = {
  desired_salary?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "resume". All fields are combined with a logical 'AND'. */
export type Resume_Bool_Exp = {
  _and?: InputMaybe<Array<Resume_Bool_Exp>>;
  _not?: InputMaybe<Resume_Bool_Exp>;
  _or?: InputMaybe<Array<Resume_Bool_Exp>>;
  city_of_residence?: InputMaybe<City_Of_Residence_Bool_Exp>;
  city_of_residence_id?: InputMaybe<Uuid_Comparison_Exp>;
  date_create?: InputMaybe<Date_Comparison_Exp>;
  desired_salary?: InputMaybe<Int_Comparison_Exp>;
  job_position?: InputMaybe<String_Comparison_Exp>;
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  jobseeker_educations?: InputMaybe<Jobseeker_Education_Bool_Exp>;
  jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Bool_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
  kids?: InputMaybe<Boolean_Comparison_Exp>;
  name_resume?: InputMaybe<String_Comparison_Exp>;
  relocate?: InputMaybe<Boolean_Comparison_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
  short_description?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Boolean_Comparison_Exp>;
  type_of_employment_resume_ids?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
  type_of_employment_resume_ids_aggregate?: InputMaybe<Type_Of_Employment_Resume_Id_Aggregate_Bool_Exp>;
  work_experiences?: InputMaybe<Work_Experience_Bool_Exp>;
  work_experiences_aggregate?: InputMaybe<Work_Experience_Aggregate_Bool_Exp>;
  work_schedule_resume_ids?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
  work_schedule_resume_ids_aggregate?: InputMaybe<Work_Schedule_Resume_Id_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "resume" */
export enum Resume_Constraint {
  /** unique or primary key constraint on columns "name_resume" */
  ResumeNameResumeKey = 'resume_name_resume_key',
  /** unique or primary key constraint on columns "resume_id" */
  ResumePkey = 'resume_pkey'
}

/** input type for incrementing numeric columns in table "resume" */
export type Resume_Inc_Input = {
  desired_salary?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "resume" */
export type Resume_Insert_Input = {
  city_of_residence?: InputMaybe<City_Of_Residence_Obj_Rel_Insert_Input>;
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  date_create?: InputMaybe<Scalars['date']>;
  desired_salary?: InputMaybe<Scalars['Int']>;
  job_position?: InputMaybe<Scalars['String']>;
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  jobseeker_educations?: InputMaybe<Jobseeker_Education_Arr_Rel_Insert_Input>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  kids?: InputMaybe<Scalars['Boolean']>;
  name_resume?: InputMaybe<Scalars['String']>;
  relocate?: InputMaybe<Scalars['Boolean']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  type_of_employment_resume_ids?: InputMaybe<Type_Of_Employment_Resume_Id_Arr_Rel_Insert_Input>;
  work_experiences?: InputMaybe<Work_Experience_Arr_Rel_Insert_Input>;
  work_schedule_resume_ids?: InputMaybe<Work_Schedule_Resume_Id_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Resume_Max_Fields = {
  __typename?: 'resume_max_fields';
  city_of_residence_id?: Maybe<Scalars['uuid']>;
  date_create?: Maybe<Scalars['date']>;
  desired_salary?: Maybe<Scalars['Int']>;
  job_position?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  name_resume?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  short_description?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "resume" */
export type Resume_Max_Order_By = {
  city_of_residence_id?: InputMaybe<Order_By>;
  date_create?: InputMaybe<Order_By>;
  desired_salary?: InputMaybe<Order_By>;
  job_position?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  name_resume?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resume_Min_Fields = {
  __typename?: 'resume_min_fields';
  city_of_residence_id?: Maybe<Scalars['uuid']>;
  date_create?: Maybe<Scalars['date']>;
  desired_salary?: Maybe<Scalars['Int']>;
  job_position?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  name_resume?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  short_description?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "resume" */
export type Resume_Min_Order_By = {
  city_of_residence_id?: InputMaybe<Order_By>;
  date_create?: InputMaybe<Order_By>;
  desired_salary?: InputMaybe<Order_By>;
  job_position?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  name_resume?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "resume" */
export type Resume_Mutation_Response = {
  __typename?: 'resume_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Resume>;
};

/** input type for inserting object relation for remote table "resume" */
export type Resume_Obj_Rel_Insert_Input = {
  data: Resume_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Resume_On_Conflict>;
};

/** on_conflict condition type for table "resume" */
export type Resume_On_Conflict = {
  constraint: Resume_Constraint;
  update_columns?: Array<Resume_Update_Column>;
  where?: InputMaybe<Resume_Bool_Exp>;
};

/** Ordering options when selecting data from "resume". */
export type Resume_Order_By = {
  city_of_residence?: InputMaybe<City_Of_Residence_Order_By>;
  city_of_residence_id?: InputMaybe<Order_By>;
  date_create?: InputMaybe<Order_By>;
  desired_salary?: InputMaybe<Order_By>;
  job_position?: InputMaybe<Order_By>;
  jobseeker?: InputMaybe<Jobseeker_Order_By>;
  jobseeker_educations_aggregate?: InputMaybe<Jobseeker_Education_Aggregate_Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  kids?: InputMaybe<Order_By>;
  name_resume?: InputMaybe<Order_By>;
  relocate?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type_of_employment_resume_ids_aggregate?: InputMaybe<Type_Of_Employment_Resume_Id_Aggregate_Order_By>;
  work_experiences_aggregate?: InputMaybe<Work_Experience_Aggregate_Order_By>;
  work_schedule_resume_ids_aggregate?: InputMaybe<Work_Schedule_Resume_Id_Aggregate_Order_By>;
};

/** primary key columns input for table: resume */
export type Resume_Pk_Columns_Input = {
  resume_id: Scalars['uuid'];
};

/** select columns of table "resume" */
export enum Resume_Select_Column {
  /** column name */
  CityOfResidenceId = 'city_of_residence_id',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  DesiredSalary = 'desired_salary',
  /** column name */
  JobPosition = 'job_position',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  Kids = 'kids',
  /** column name */
  NameResume = 'name_resume',
  /** column name */
  Relocate = 'relocate',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  Status = 'status'
}

/** select "resume_aggregate_bool_exp_bool_and_arguments_columns" columns of table "resume" */
export enum Resume_Select_Column_Resume_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Kids = 'kids',
  /** column name */
  Relocate = 'relocate',
  /** column name */
  Status = 'status'
}

/** select "resume_aggregate_bool_exp_bool_or_arguments_columns" columns of table "resume" */
export enum Resume_Select_Column_Resume_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Kids = 'kids',
  /** column name */
  Relocate = 'relocate',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "resume" */
export type Resume_Set_Input = {
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  date_create?: InputMaybe<Scalars['date']>;
  desired_salary?: InputMaybe<Scalars['Int']>;
  job_position?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  kids?: InputMaybe<Scalars['Boolean']>;
  name_resume?: InputMaybe<Scalars['String']>;
  relocate?: InputMaybe<Scalars['Boolean']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Resume_Stddev_Fields = {
  __typename?: 'resume_stddev_fields';
  desired_salary?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "resume" */
export type Resume_Stddev_Order_By = {
  desired_salary?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Resume_Stddev_Pop_Fields = {
  __typename?: 'resume_stddev_pop_fields';
  desired_salary?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "resume" */
export type Resume_Stddev_Pop_Order_By = {
  desired_salary?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Resume_Stddev_Samp_Fields = {
  __typename?: 'resume_stddev_samp_fields';
  desired_salary?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "resume" */
export type Resume_Stddev_Samp_Order_By = {
  desired_salary?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "resume" */
export type Resume_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resume_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resume_Stream_Cursor_Value_Input = {
  city_of_residence_id?: InputMaybe<Scalars['uuid']>;
  date_create?: InputMaybe<Scalars['date']>;
  desired_salary?: InputMaybe<Scalars['Int']>;
  job_position?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  kids?: InputMaybe<Scalars['Boolean']>;
  name_resume?: InputMaybe<Scalars['String']>;
  relocate?: InputMaybe<Scalars['Boolean']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Resume_Sum_Fields = {
  __typename?: 'resume_sum_fields';
  desired_salary?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "resume" */
export type Resume_Sum_Order_By = {
  desired_salary?: InputMaybe<Order_By>;
};

/** update columns of table "resume" */
export enum Resume_Update_Column {
  /** column name */
  CityOfResidenceId = 'city_of_residence_id',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  DesiredSalary = 'desired_salary',
  /** column name */
  JobPosition = 'job_position',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  Kids = 'kids',
  /** column name */
  NameResume = 'name_resume',
  /** column name */
  Relocate = 'relocate',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  Status = 'status'
}

export type Resume_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Resume_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resume_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resume_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Resume_Var_Pop_Fields = {
  __typename?: 'resume_var_pop_fields';
  desired_salary?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "resume" */
export type Resume_Var_Pop_Order_By = {
  desired_salary?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Resume_Var_Samp_Fields = {
  __typename?: 'resume_var_samp_fields';
  desired_salary?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "resume" */
export type Resume_Var_Samp_Order_By = {
  desired_salary?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Resume_Variance_Fields = {
  __typename?: 'resume_variance_fields';
  desired_salary?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "resume" */
export type Resume_Variance_Order_By = {
  desired_salary?: InputMaybe<Order_By>;
};

/** дисциплины относящиеся к определенным компетенциям */
export type Subject_Competence_Info = {
  __typename?: 'subject_competence_info';
  /** An object relationship */
  competencies_of_jobseeker: Competencies_Of_Jobseekers;
  competencies_of_jobseekers_id: Scalars['uuid'];
  completed: Scalars['Boolean'];
  percent: Scalars['Float'];
  subject_competence_info_id: Scalars['uuid'];
  subject_name: Scalars['String'];
};

/** aggregated selection of "subject_competence_info" */
export type Subject_Competence_Info_Aggregate = {
  __typename?: 'subject_competence_info_aggregate';
  aggregate?: Maybe<Subject_Competence_Info_Aggregate_Fields>;
  nodes: Array<Subject_Competence_Info>;
};

export type Subject_Competence_Info_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Subject_Competence_Info_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Subject_Competence_Info_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Subject_Competence_Info_Aggregate_Bool_Exp_Count>;
};

export type Subject_Competence_Info_Aggregate_Bool_Exp_Bool_And = {
  arguments: Subject_Competence_Info_Select_Column_Subject_Competence_Info_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Subject_Competence_Info_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Subject_Competence_Info_Select_Column_Subject_Competence_Info_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Subject_Competence_Info_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subject_Competence_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "subject_competence_info" */
export type Subject_Competence_Info_Aggregate_Fields = {
  __typename?: 'subject_competence_info_aggregate_fields';
  avg?: Maybe<Subject_Competence_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Subject_Competence_Info_Max_Fields>;
  min?: Maybe<Subject_Competence_Info_Min_Fields>;
  stddev?: Maybe<Subject_Competence_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Subject_Competence_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subject_Competence_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Subject_Competence_Info_Sum_Fields>;
  var_pop?: Maybe<Subject_Competence_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Subject_Competence_Info_Var_Samp_Fields>;
  variance?: Maybe<Subject_Competence_Info_Variance_Fields>;
};


/** aggregate fields of "subject_competence_info" */
export type Subject_Competence_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subject_Competence_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "subject_competence_info" */
export type Subject_Competence_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Subject_Competence_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subject_Competence_Info_Max_Order_By>;
  min?: InputMaybe<Subject_Competence_Info_Min_Order_By>;
  stddev?: InputMaybe<Subject_Competence_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subject_Competence_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subject_Competence_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subject_Competence_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Subject_Competence_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subject_Competence_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Subject_Competence_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "subject_competence_info" */
export type Subject_Competence_Info_Arr_Rel_Insert_Input = {
  data: Array<Subject_Competence_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subject_Competence_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Subject_Competence_Info_Avg_Fields = {
  __typename?: 'subject_competence_info_avg_fields';
  percent?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Avg_Order_By = {
  percent?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subject_competence_info". All fields are combined with a logical 'AND'. */
export type Subject_Competence_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Subject_Competence_Info_Bool_Exp>>;
  _not?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Subject_Competence_Info_Bool_Exp>>;
  competencies_of_jobseeker?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
  competencies_of_jobseekers_id?: InputMaybe<Uuid_Comparison_Exp>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  percent?: InputMaybe<Float_Comparison_Exp>;
  subject_competence_info_id?: InputMaybe<Uuid_Comparison_Exp>;
  subject_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subject_competence_info" */
export enum Subject_Competence_Info_Constraint {
  /** unique or primary key constraint on columns "subject_competence_info_id" */
  SubjectCompetenceInfoPkey = 'subject_competence_info_pkey'
}

/** input type for incrementing numeric columns in table "subject_competence_info" */
export type Subject_Competence_Info_Inc_Input = {
  percent?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "subject_competence_info" */
export type Subject_Competence_Info_Insert_Input = {
  competencies_of_jobseeker?: InputMaybe<Competencies_Of_Jobseekers_Obj_Rel_Insert_Input>;
  competencies_of_jobseekers_id?: InputMaybe<Scalars['uuid']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  percent?: InputMaybe<Scalars['Float']>;
  subject_competence_info_id?: InputMaybe<Scalars['uuid']>;
  subject_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Subject_Competence_Info_Max_Fields = {
  __typename?: 'subject_competence_info_max_fields';
  competencies_of_jobseekers_id?: Maybe<Scalars['uuid']>;
  percent?: Maybe<Scalars['Float']>;
  subject_competence_info_id?: Maybe<Scalars['uuid']>;
  subject_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Max_Order_By = {
  competencies_of_jobseekers_id?: InputMaybe<Order_By>;
  percent?: InputMaybe<Order_By>;
  subject_competence_info_id?: InputMaybe<Order_By>;
  subject_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subject_Competence_Info_Min_Fields = {
  __typename?: 'subject_competence_info_min_fields';
  competencies_of_jobseekers_id?: Maybe<Scalars['uuid']>;
  percent?: Maybe<Scalars['Float']>;
  subject_competence_info_id?: Maybe<Scalars['uuid']>;
  subject_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Min_Order_By = {
  competencies_of_jobseekers_id?: InputMaybe<Order_By>;
  percent?: InputMaybe<Order_By>;
  subject_competence_info_id?: InputMaybe<Order_By>;
  subject_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subject_competence_info" */
export type Subject_Competence_Info_Mutation_Response = {
  __typename?: 'subject_competence_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subject_Competence_Info>;
};

/** on_conflict condition type for table "subject_competence_info" */
export type Subject_Competence_Info_On_Conflict = {
  constraint: Subject_Competence_Info_Constraint;
  update_columns?: Array<Subject_Competence_Info_Update_Column>;
  where?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "subject_competence_info". */
export type Subject_Competence_Info_Order_By = {
  competencies_of_jobseeker?: InputMaybe<Competencies_Of_Jobseekers_Order_By>;
  competencies_of_jobseekers_id?: InputMaybe<Order_By>;
  completed?: InputMaybe<Order_By>;
  percent?: InputMaybe<Order_By>;
  subject_competence_info_id?: InputMaybe<Order_By>;
  subject_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subject_competence_info */
export type Subject_Competence_Info_Pk_Columns_Input = {
  subject_competence_info_id: Scalars['uuid'];
};

/** select columns of table "subject_competence_info" */
export enum Subject_Competence_Info_Select_Column {
  /** column name */
  CompetenciesOfJobseekersId = 'competencies_of_jobseekers_id',
  /** column name */
  Completed = 'completed',
  /** column name */
  Percent = 'percent',
  /** column name */
  SubjectCompetenceInfoId = 'subject_competence_info_id',
  /** column name */
  SubjectName = 'subject_name'
}

/** select "subject_competence_info_aggregate_bool_exp_bool_and_arguments_columns" columns of table "subject_competence_info" */
export enum Subject_Competence_Info_Select_Column_Subject_Competence_Info_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Completed = 'completed'
}

/** select "subject_competence_info_aggregate_bool_exp_bool_or_arguments_columns" columns of table "subject_competence_info" */
export enum Subject_Competence_Info_Select_Column_Subject_Competence_Info_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Completed = 'completed'
}

/** input type for updating data in table "subject_competence_info" */
export type Subject_Competence_Info_Set_Input = {
  competencies_of_jobseekers_id?: InputMaybe<Scalars['uuid']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  percent?: InputMaybe<Scalars['Float']>;
  subject_competence_info_id?: InputMaybe<Scalars['uuid']>;
  subject_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Subject_Competence_Info_Stddev_Fields = {
  __typename?: 'subject_competence_info_stddev_fields';
  percent?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Stddev_Order_By = {
  percent?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Subject_Competence_Info_Stddev_Pop_Fields = {
  __typename?: 'subject_competence_info_stddev_pop_fields';
  percent?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Stddev_Pop_Order_By = {
  percent?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Subject_Competence_Info_Stddev_Samp_Fields = {
  __typename?: 'subject_competence_info_stddev_samp_fields';
  percent?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Stddev_Samp_Order_By = {
  percent?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "subject_competence_info" */
export type Subject_Competence_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subject_Competence_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subject_Competence_Info_Stream_Cursor_Value_Input = {
  competencies_of_jobseekers_id?: InputMaybe<Scalars['uuid']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  percent?: InputMaybe<Scalars['Float']>;
  subject_competence_info_id?: InputMaybe<Scalars['uuid']>;
  subject_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Subject_Competence_Info_Sum_Fields = {
  __typename?: 'subject_competence_info_sum_fields';
  percent?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Sum_Order_By = {
  percent?: InputMaybe<Order_By>;
};

/** update columns of table "subject_competence_info" */
export enum Subject_Competence_Info_Update_Column {
  /** column name */
  CompetenciesOfJobseekersId = 'competencies_of_jobseekers_id',
  /** column name */
  Completed = 'completed',
  /** column name */
  Percent = 'percent',
  /** column name */
  SubjectCompetenceInfoId = 'subject_competence_info_id',
  /** column name */
  SubjectName = 'subject_name'
}

export type Subject_Competence_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subject_Competence_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subject_Competence_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subject_Competence_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subject_Competence_Info_Var_Pop_Fields = {
  __typename?: 'subject_competence_info_var_pop_fields';
  percent?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Var_Pop_Order_By = {
  percent?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Subject_Competence_Info_Var_Samp_Fields = {
  __typename?: 'subject_competence_info_var_samp_fields';
  percent?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Var_Samp_Order_By = {
  percent?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Subject_Competence_Info_Variance_Fields = {
  __typename?: 'subject_competence_info_variance_fields';
  percent?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "subject_competence_info" */
export type Subject_Competence_Info_Variance_Order_By = {
  percent?: InputMaybe<Order_By>;
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
  /** fetch data from the table: "additional_education" */
  additional_education: Array<Additional_Education>;
  /** fetch aggregated fields from the table: "additional_education" */
  additional_education_aggregate: Additional_Education_Aggregate;
  /** fetch data from the table: "additional_education" using primary key columns */
  additional_education_by_pk?: Maybe<Additional_Education>;
  /** fetch data from the table in a streaming manner: "additional_education" */
  additional_education_stream: Array<Additional_Education>;
  /** fetch data from the table: "city_of_residence" */
  city_of_residence: Array<City_Of_Residence>;
  /** fetch aggregated fields from the table: "city_of_residence" */
  city_of_residence_aggregate: City_Of_Residence_Aggregate;
  /** fetch data from the table: "city_of_residence" using primary key columns */
  city_of_residence_by_pk?: Maybe<City_Of_Residence>;
  /** fetch data from the table in a streaming manner: "city_of_residence" */
  city_of_residence_stream: Array<City_Of_Residence>;
  /** An array relationship */
  competencies_of_jobseekers: Array<Competencies_Of_Jobseekers>;
  /** An aggregate relationship */
  competencies_of_jobseekers_aggregate: Competencies_Of_Jobseekers_Aggregate;
  /** fetch data from the table: "competencies_of_jobseekers" using primary key columns */
  competencies_of_jobseekers_by_pk?: Maybe<Competencies_Of_Jobseekers>;
  /** fetch data from the table in a streaming manner: "competencies_of_jobseekers" */
  competencies_of_jobseekers_stream: Array<Competencies_Of_Jobseekers>;
  /** fetch data from the table: "driving_license" */
  driving_license: Array<Driving_License>;
  /** fetch aggregated fields from the table: "driving_license" */
  driving_license_aggregate: Driving_License_Aggregate;
  /** fetch data from the table: "driving_license" using primary key columns */
  driving_license_by_pk?: Maybe<Driving_License>;
  /** fetch data from the table: "driving_license_jobseeker_id" */
  driving_license_jobseeker_id: Array<Driving_License_Jobseeker_Id>;
  /** fetch aggregated fields from the table: "driving_license_jobseeker_id" */
  driving_license_jobseeker_id_aggregate: Driving_License_Jobseeker_Id_Aggregate;
  /** fetch data from the table: "driving_license_jobseeker_id" using primary key columns */
  driving_license_jobseeker_id_by_pk?: Maybe<Driving_License_Jobseeker_Id>;
  /** fetch data from the table in a streaming manner: "driving_license_jobseeker_id" */
  driving_license_jobseeker_id_stream: Array<Driving_License_Jobseeker_Id>;
  /** fetch data from the table in a streaming manner: "driving_license" */
  driving_license_stream: Array<Driving_License>;
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
  /** fetch data from the table: "jobseeker" */
  jobseeker: Array<Jobseeker>;
  /** fetch data from the table: "jobseeker_additional_education" */
  jobseeker_additional_education: Array<Jobseeker_Additional_Education>;
  /** fetch aggregated fields from the table: "jobseeker_additional_education" */
  jobseeker_additional_education_aggregate: Jobseeker_Additional_Education_Aggregate;
  /** fetch data from the table: "jobseeker_additional_education" using primary key columns */
  jobseeker_additional_education_by_pk?: Maybe<Jobseeker_Additional_Education>;
  /** fetch data from the table in a streaming manner: "jobseeker_additional_education" */
  jobseeker_additional_education_stream: Array<Jobseeker_Additional_Education>;
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
  /** fetch data from the table: "jobseeker_performance" */
  jobseeker_performance: Array<Jobseeker_Performance>;
  /** fetch aggregated fields from the table: "jobseeker_performance" */
  jobseeker_performance_aggregate: Jobseeker_Performance_Aggregate;
  /** fetch data from the table: "jobseeker_performance" using primary key columns */
  jobseeker_performance_by_pk?: Maybe<Jobseeker_Performance>;
  /** fetch data from the table in a streaming manner: "jobseeker_performance" */
  jobseeker_performance_stream: Array<Jobseeker_Performance>;
  /** fetch data from the table in a streaming manner: "jobseeker" */
  jobseeker_stream: Array<Jobseeker>;
  /** fetch data from the table: "jobseeker_vacancy" */
  jobseeker_vacancy: Array<Jobseeker_Vacancy>;
  /** fetch aggregated fields from the table: "jobseeker_vacancy" */
  jobseeker_vacancy_aggregate: Jobseeker_Vacancy_Aggregate;
  /** fetch data from the table: "jobseeker_vacancy" using primary key columns */
  jobseeker_vacancy_by_pk?: Maybe<Jobseeker_Vacancy>;
  /** fetch data from the table in a streaming manner: "jobseeker_vacancy" */
  jobseeker_vacancy_stream: Array<Jobseeker_Vacancy>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
  /** fetch data from the table: "resume" */
  resume: Array<Resume>;
  /** fetch aggregated fields from the table: "resume" */
  resume_aggregate: Resume_Aggregate;
  /** fetch data from the table: "resume" using primary key columns */
  resume_by_pk?: Maybe<Resume>;
  /** fetch data from the table in a streaming manner: "resume" */
  resume_stream: Array<Resume>;
  /** An array relationship */
  subject_competence_info: Array<Subject_Competence_Info>;
  /** An aggregate relationship */
  subject_competence_info_aggregate: Subject_Competence_Info_Aggregate;
  /** fetch data from the table: "subject_competence_info" using primary key columns */
  subject_competence_info_by_pk?: Maybe<Subject_Competence_Info>;
  /** fetch data from the table in a streaming manner: "subject_competence_info" */
  subject_competence_info_stream: Array<Subject_Competence_Info>;
  /** fetch data from the table: "type_of_employment" */
  type_of_employment: Array<Type_Of_Employment>;
  /** fetch aggregated fields from the table: "type_of_employment" */
  type_of_employment_aggregate: Type_Of_Employment_Aggregate;
  /** fetch data from the table: "type_of_employment" using primary key columns */
  type_of_employment_by_pk?: Maybe<Type_Of_Employment>;
  /** fetch data from the table: "type_of_employment_resume_id" */
  type_of_employment_resume_id: Array<Type_Of_Employment_Resume_Id>;
  /** fetch aggregated fields from the table: "type_of_employment_resume_id" */
  type_of_employment_resume_id_aggregate: Type_Of_Employment_Resume_Id_Aggregate;
  /** fetch data from the table: "type_of_employment_resume_id" using primary key columns */
  type_of_employment_resume_id_by_pk?: Maybe<Type_Of_Employment_Resume_Id>;
  /** fetch data from the table in a streaming manner: "type_of_employment_resume_id" */
  type_of_employment_resume_id_stream: Array<Type_Of_Employment_Resume_Id>;
  /** fetch data from the table in a streaming manner: "type_of_employment" */
  type_of_employment_stream: Array<Type_Of_Employment>;
  /** fetch data from the table: "vacancy" */
  vacancy: Array<Vacancy>;
  /** fetch aggregated fields from the table: "vacancy" */
  vacancy_aggregate: Vacancy_Aggregate;
  /** fetch data from the table: "vacancy" using primary key columns */
  vacancy_by_pk?: Maybe<Vacancy>;
  /** fetch data from the table in a streaming manner: "vacancy" */
  vacancy_stream: Array<Vacancy>;
  /** fetch data from the table: "work_experience" */
  work_experience: Array<Work_Experience>;
  /** fetch aggregated fields from the table: "work_experience" */
  work_experience_aggregate: Work_Experience_Aggregate;
  /** fetch data from the table: "work_experience" using primary key columns */
  work_experience_by_pk?: Maybe<Work_Experience>;
  /** fetch data from the table in a streaming manner: "work_experience" */
  work_experience_stream: Array<Work_Experience>;
  /** fetch data from the table: "work_schedule" */
  work_schedule: Array<Work_Schedule>;
  /** fetch aggregated fields from the table: "work_schedule" */
  work_schedule_aggregate: Work_Schedule_Aggregate;
  /** fetch data from the table: "work_schedule" using primary key columns */
  work_schedule_by_pk?: Maybe<Work_Schedule>;
  /** fetch data from the table: "work_schedule_resume_id" */
  work_schedule_resume_id: Array<Work_Schedule_Resume_Id>;
  /** fetch aggregated fields from the table: "work_schedule_resume_id" */
  work_schedule_resume_id_aggregate: Work_Schedule_Resume_Id_Aggregate;
  /** fetch data from the table: "work_schedule_resume_id" using primary key columns */
  work_schedule_resume_id_by_pk?: Maybe<Work_Schedule_Resume_Id>;
  /** fetch data from the table in a streaming manner: "work_schedule_resume_id" */
  work_schedule_resume_id_stream: Array<Work_Schedule_Resume_Id>;
  /** fetch data from the table in a streaming manner: "work_schedule" */
  work_schedule_stream: Array<Work_Schedule>;
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


export type Subscription_RootAdditional_EducationArgs = {
  distinct_on?: InputMaybe<Array<Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Additional_Education_Order_By>>;
  where?: InputMaybe<Additional_Education_Bool_Exp>;
};


export type Subscription_RootAdditional_Education_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Additional_Education_Order_By>>;
  where?: InputMaybe<Additional_Education_Bool_Exp>;
};


export type Subscription_RootAdditional_Education_By_PkArgs = {
  additional_education_id: Scalars['uuid'];
};


export type Subscription_RootAdditional_Education_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Additional_Education_Stream_Cursor_Input>>;
  where?: InputMaybe<Additional_Education_Bool_Exp>;
};


export type Subscription_RootCity_Of_ResidenceArgs = {
  distinct_on?: InputMaybe<Array<City_Of_Residence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Of_Residence_Order_By>>;
  where?: InputMaybe<City_Of_Residence_Bool_Exp>;
};


export type Subscription_RootCity_Of_Residence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<City_Of_Residence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Of_Residence_Order_By>>;
  where?: InputMaybe<City_Of_Residence_Bool_Exp>;
};


export type Subscription_RootCity_Of_Residence_By_PkArgs = {
  city_of_residence_id: Scalars['uuid'];
};


export type Subscription_RootCity_Of_Residence_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<City_Of_Residence_Stream_Cursor_Input>>;
  where?: InputMaybe<City_Of_Residence_Bool_Exp>;
};


export type Subscription_RootCompetencies_Of_JobseekersArgs = {
  distinct_on?: InputMaybe<Array<Competencies_Of_Jobseekers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Competencies_Of_Jobseekers_Order_By>>;
  where?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
};


export type Subscription_RootCompetencies_Of_Jobseekers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Competencies_Of_Jobseekers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Competencies_Of_Jobseekers_Order_By>>;
  where?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
};


export type Subscription_RootCompetencies_Of_Jobseekers_By_PkArgs = {
  competencies_of_jobseekers_id: Scalars['uuid'];
};


export type Subscription_RootCompetencies_Of_Jobseekers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Competencies_Of_Jobseekers_Stream_Cursor_Input>>;
  where?: InputMaybe<Competencies_Of_Jobseekers_Bool_Exp>;
};


export type Subscription_RootDriving_LicenseArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Order_By>>;
  where?: InputMaybe<Driving_License_Bool_Exp>;
};


export type Subscription_RootDriving_License_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Order_By>>;
  where?: InputMaybe<Driving_License_Bool_Exp>;
};


export type Subscription_RootDriving_License_By_PkArgs = {
  driving_license_id: Scalars['uuid'];
};


export type Subscription_RootDriving_License_Jobseeker_IdArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Jobseeker_Id_Order_By>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};


export type Subscription_RootDriving_License_Jobseeker_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Driving_License_Jobseeker_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Driving_License_Jobseeker_Id_Order_By>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};


export type Subscription_RootDriving_License_Jobseeker_Id_By_PkArgs = {
  driving_license_id: Scalars['uuid'];
  jobseeker_id: Scalars['uuid'];
};


export type Subscription_RootDriving_License_Jobseeker_Id_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Driving_License_Jobseeker_Id_Stream_Cursor_Input>>;
  where?: InputMaybe<Driving_License_Jobseeker_Id_Bool_Exp>;
};


export type Subscription_RootDriving_License_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Driving_License_Stream_Cursor_Input>>;
  where?: InputMaybe<Driving_License_Bool_Exp>;
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
  employer_id: Scalars['uuid'];
};


export type Subscription_RootEmployer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Employer_Stream_Cursor_Input>>;
  where?: InputMaybe<Employer_Bool_Exp>;
};


export type Subscription_RootJobseekerArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Order_By>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


export type Subscription_RootJobseeker_Additional_EducationArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Additional_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
};


export type Subscription_RootJobseeker_Additional_Education_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Additional_Education_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Additional_Education_Order_By>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
};


export type Subscription_RootJobseeker_Additional_Education_By_PkArgs = {
  additional_education_id: Scalars['uuid'];
  jobseeker_id: Scalars['uuid'];
};


export type Subscription_RootJobseeker_Additional_Education_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Jobseeker_Additional_Education_Stream_Cursor_Input>>;
  where?: InputMaybe<Jobseeker_Additional_Education_Bool_Exp>;
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


export type Subscription_RootJobseeker_PerformanceArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Performance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Performance_Order_By>>;
  where?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
};


export type Subscription_RootJobseeker_Performance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Performance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Performance_Order_By>>;
  where?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
};


export type Subscription_RootJobseeker_Performance_By_PkArgs = {
  jobseeker_performance_id: Scalars['uuid'];
};


export type Subscription_RootJobseeker_Performance_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Jobseeker_Performance_Stream_Cursor_Input>>;
  where?: InputMaybe<Jobseeker_Performance_Bool_Exp>;
};


export type Subscription_RootJobseeker_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Jobseeker_Stream_Cursor_Input>>;
  where?: InputMaybe<Jobseeker_Bool_Exp>;
};


export type Subscription_RootJobseeker_VacancyArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Vacancy_Order_By>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
};


export type Subscription_RootJobseeker_Vacancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Vacancy_Order_By>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
};


export type Subscription_RootJobseeker_Vacancy_By_PkArgs = {
  jobseeker_id: Scalars['uuid'];
  vacancy_id: Scalars['uuid'];
};


export type Subscription_RootJobseeker_Vacancy_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Jobseeker_Vacancy_Stream_Cursor_Input>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
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


export type Subscription_RootResumeArgs = {
  distinct_on?: InputMaybe<Array<Resume_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resume_Order_By>>;
  where?: InputMaybe<Resume_Bool_Exp>;
};


export type Subscription_RootResume_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resume_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Resume_Order_By>>;
  where?: InputMaybe<Resume_Bool_Exp>;
};


export type Subscription_RootResume_By_PkArgs = {
  resume_id: Scalars['uuid'];
};


export type Subscription_RootResume_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Resume_Stream_Cursor_Input>>;
  where?: InputMaybe<Resume_Bool_Exp>;
};


export type Subscription_RootSubject_Competence_InfoArgs = {
  distinct_on?: InputMaybe<Array<Subject_Competence_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subject_Competence_Info_Order_By>>;
  where?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
};


export type Subscription_RootSubject_Competence_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Competence_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subject_Competence_Info_Order_By>>;
  where?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
};


export type Subscription_RootSubject_Competence_Info_By_PkArgs = {
  subject_competence_info_id: Scalars['uuid'];
};


export type Subscription_RootSubject_Competence_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Subject_Competence_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Subject_Competence_Info_Bool_Exp>;
};


export type Subscription_RootType_Of_EmploymentArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Bool_Exp>;
};


export type Subscription_RootType_Of_Employment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Bool_Exp>;
};


export type Subscription_RootType_Of_Employment_By_PkArgs = {
  type_of_employment_id: Scalars['uuid'];
};


export type Subscription_RootType_Of_Employment_Resume_IdArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};


export type Subscription_RootType_Of_Employment_Resume_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};


export type Subscription_RootType_Of_Employment_Resume_Id_By_PkArgs = {
  resume_id: Scalars['uuid'];
  type_of_employment_id: Scalars['uuid'];
};


export type Subscription_RootType_Of_Employment_Resume_Id_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Type_Of_Employment_Resume_Id_Stream_Cursor_Input>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};


export type Subscription_RootType_Of_Employment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Type_Of_Employment_Stream_Cursor_Input>>;
  where?: InputMaybe<Type_Of_Employment_Bool_Exp>;
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


export type Subscription_RootWork_ExperienceArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};


export type Subscription_RootWork_Experience_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Experience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Experience_Order_By>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};


export type Subscription_RootWork_Experience_By_PkArgs = {
  work_experience_id: Scalars['uuid'];
};


export type Subscription_RootWork_Experience_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Work_Experience_Stream_Cursor_Input>>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};


export type Subscription_RootWork_ScheduleArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


export type Subscription_RootWork_Schedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Order_By>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};


export type Subscription_RootWork_Schedule_By_PkArgs = {
  work_schedule_id: Scalars['uuid'];
};


export type Subscription_RootWork_Schedule_Resume_IdArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Resume_Id_Order_By>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};


export type Subscription_RootWork_Schedule_Resume_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Resume_Id_Order_By>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};


export type Subscription_RootWork_Schedule_Resume_Id_By_PkArgs = {
  resume_id: Scalars['uuid'];
  work_schedule_id: Scalars['uuid'];
};


export type Subscription_RootWork_Schedule_Resume_Id_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Work_Schedule_Resume_Id_Stream_Cursor_Input>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};


export type Subscription_RootWork_Schedule_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Work_Schedule_Stream_Cursor_Input>>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};

/** columns and relationships of "type_of_employment" */
export type Type_Of_Employment = {
  __typename?: 'type_of_employment';
  name?: Maybe<Scalars['String']>;
  type_of_employment_id: Scalars['uuid'];
  /** An array relationship */
  type_of_employment_resume_ids: Array<Type_Of_Employment_Resume_Id>;
  /** An aggregate relationship */
  type_of_employment_resume_ids_aggregate: Type_Of_Employment_Resume_Id_Aggregate;
};


/** columns and relationships of "type_of_employment" */
export type Type_Of_EmploymentType_Of_Employment_Resume_IdsArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};


/** columns and relationships of "type_of_employment" */
export type Type_Of_EmploymentType_Of_Employment_Resume_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Order_By>>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};

/** aggregated selection of "type_of_employment" */
export type Type_Of_Employment_Aggregate = {
  __typename?: 'type_of_employment_aggregate';
  aggregate?: Maybe<Type_Of_Employment_Aggregate_Fields>;
  nodes: Array<Type_Of_Employment>;
};

/** aggregate fields of "type_of_employment" */
export type Type_Of_Employment_Aggregate_Fields = {
  __typename?: 'type_of_employment_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Type_Of_Employment_Max_Fields>;
  min?: Maybe<Type_Of_Employment_Min_Fields>;
};


/** aggregate fields of "type_of_employment" */
export type Type_Of_Employment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Type_Of_Employment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "type_of_employment". All fields are combined with a logical 'AND'. */
export type Type_Of_Employment_Bool_Exp = {
  _and?: InputMaybe<Array<Type_Of_Employment_Bool_Exp>>;
  _not?: InputMaybe<Type_Of_Employment_Bool_Exp>;
  _or?: InputMaybe<Array<Type_Of_Employment_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  type_of_employment_id?: InputMaybe<Uuid_Comparison_Exp>;
  type_of_employment_resume_ids?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
  type_of_employment_resume_ids_aggregate?: InputMaybe<Type_Of_Employment_Resume_Id_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "type_of_employment" */
export enum Type_Of_Employment_Constraint {
  /** unique or primary key constraint on columns "type_of_employment_id" */
  TypeOfEmploymentPkey = 'Type_of_employment_pkey'
}

/** input type for inserting data into table "type_of_employment" */
export type Type_Of_Employment_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  type_of_employment_id?: InputMaybe<Scalars['uuid']>;
  type_of_employment_resume_ids?: InputMaybe<Type_Of_Employment_Resume_Id_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Type_Of_Employment_Max_Fields = {
  __typename?: 'type_of_employment_max_fields';
  name?: Maybe<Scalars['String']>;
  type_of_employment_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Type_Of_Employment_Min_Fields = {
  __typename?: 'type_of_employment_min_fields';
  name?: Maybe<Scalars['String']>;
  type_of_employment_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "type_of_employment" */
export type Type_Of_Employment_Mutation_Response = {
  __typename?: 'type_of_employment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Type_Of_Employment>;
};

/** input type for inserting object relation for remote table "type_of_employment" */
export type Type_Of_Employment_Obj_Rel_Insert_Input = {
  data: Type_Of_Employment_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Type_Of_Employment_On_Conflict>;
};

/** on_conflict condition type for table "type_of_employment" */
export type Type_Of_Employment_On_Conflict = {
  constraint: Type_Of_Employment_Constraint;
  update_columns?: Array<Type_Of_Employment_Update_Column>;
  where?: InputMaybe<Type_Of_Employment_Bool_Exp>;
};

/** Ordering options when selecting data from "type_of_employment". */
export type Type_Of_Employment_Order_By = {
  name?: InputMaybe<Order_By>;
  type_of_employment_id?: InputMaybe<Order_By>;
  type_of_employment_resume_ids_aggregate?: InputMaybe<Type_Of_Employment_Resume_Id_Aggregate_Order_By>;
};

/** primary key columns input for table: type_of_employment */
export type Type_Of_Employment_Pk_Columns_Input = {
  type_of_employment_id: Scalars['uuid'];
};

/** columns and relationships of "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id = {
  __typename?: 'type_of_employment_resume_id';
  /** An object relationship */
  resume: Resume;
  resume_id: Scalars['uuid'];
  /** An object relationship */
  type_of_employment: Type_Of_Employment;
  type_of_employment_id: Scalars['uuid'];
};

/** aggregated selection of "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Aggregate = {
  __typename?: 'type_of_employment_resume_id_aggregate';
  aggregate?: Maybe<Type_Of_Employment_Resume_Id_Aggregate_Fields>;
  nodes: Array<Type_Of_Employment_Resume_Id>;
};

export type Type_Of_Employment_Resume_Id_Aggregate_Bool_Exp = {
  count?: InputMaybe<Type_Of_Employment_Resume_Id_Aggregate_Bool_Exp_Count>;
};

export type Type_Of_Employment_Resume_Id_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Aggregate_Fields = {
  __typename?: 'type_of_employment_resume_id_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Type_Of_Employment_Resume_Id_Max_Fields>;
  min?: Maybe<Type_Of_Employment_Resume_Id_Min_Fields>;
};


/** aggregate fields of "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Type_Of_Employment_Resume_Id_Max_Order_By>;
  min?: InputMaybe<Type_Of_Employment_Resume_Id_Min_Order_By>;
};

/** input type for inserting array relation for remote table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Arr_Rel_Insert_Input = {
  data: Array<Type_Of_Employment_Resume_Id_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Type_Of_Employment_Resume_Id_On_Conflict>;
};

/** Boolean expression to filter rows from the table "type_of_employment_resume_id". All fields are combined with a logical 'AND'. */
export type Type_Of_Employment_Resume_Id_Bool_Exp = {
  _and?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Bool_Exp>>;
  _not?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
  _or?: InputMaybe<Array<Type_Of_Employment_Resume_Id_Bool_Exp>>;
  resume?: InputMaybe<Resume_Bool_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
  type_of_employment?: InputMaybe<Type_Of_Employment_Bool_Exp>;
  type_of_employment_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "type_of_employment_resume_id" */
export enum Type_Of_Employment_Resume_Id_Constraint {
  /** unique or primary key constraint on columns "type_of_employment_id", "resume_id" */
  TypeOfEmploymentResumeIdPkey = 'type_of_employment_resume_id_pkey'
}

/** input type for inserting data into table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Insert_Input = {
  resume?: InputMaybe<Resume_Obj_Rel_Insert_Input>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  type_of_employment?: InputMaybe<Type_Of_Employment_Obj_Rel_Insert_Input>;
  type_of_employment_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Type_Of_Employment_Resume_Id_Max_Fields = {
  __typename?: 'type_of_employment_resume_id_max_fields';
  resume_id?: Maybe<Scalars['uuid']>;
  type_of_employment_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Max_Order_By = {
  resume_id?: InputMaybe<Order_By>;
  type_of_employment_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Type_Of_Employment_Resume_Id_Min_Fields = {
  __typename?: 'type_of_employment_resume_id_min_fields';
  resume_id?: Maybe<Scalars['uuid']>;
  type_of_employment_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Min_Order_By = {
  resume_id?: InputMaybe<Order_By>;
  type_of_employment_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Mutation_Response = {
  __typename?: 'type_of_employment_resume_id_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Type_Of_Employment_Resume_Id>;
};

/** on_conflict condition type for table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_On_Conflict = {
  constraint: Type_Of_Employment_Resume_Id_Constraint;
  update_columns?: Array<Type_Of_Employment_Resume_Id_Update_Column>;
  where?: InputMaybe<Type_Of_Employment_Resume_Id_Bool_Exp>;
};

/** Ordering options when selecting data from "type_of_employment_resume_id". */
export type Type_Of_Employment_Resume_Id_Order_By = {
  resume?: InputMaybe<Resume_Order_By>;
  resume_id?: InputMaybe<Order_By>;
  type_of_employment?: InputMaybe<Type_Of_Employment_Order_By>;
  type_of_employment_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: type_of_employment_resume_id */
export type Type_Of_Employment_Resume_Id_Pk_Columns_Input = {
  resume_id: Scalars['uuid'];
  type_of_employment_id: Scalars['uuid'];
};

/** select columns of table "type_of_employment_resume_id" */
export enum Type_Of_Employment_Resume_Id_Select_Column {
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  TypeOfEmploymentId = 'type_of_employment_id'
}

/** input type for updating data in table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Set_Input = {
  resume_id?: InputMaybe<Scalars['uuid']>;
  type_of_employment_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "type_of_employment_resume_id" */
export type Type_Of_Employment_Resume_Id_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Type_Of_Employment_Resume_Id_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Type_Of_Employment_Resume_Id_Stream_Cursor_Value_Input = {
  resume_id?: InputMaybe<Scalars['uuid']>;
  type_of_employment_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "type_of_employment_resume_id" */
export enum Type_Of_Employment_Resume_Id_Update_Column {
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  TypeOfEmploymentId = 'type_of_employment_id'
}

export type Type_Of_Employment_Resume_Id_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Type_Of_Employment_Resume_Id_Set_Input>;
  /** filter the rows which have to be updated */
  where: Type_Of_Employment_Resume_Id_Bool_Exp;
};

/** select columns of table "type_of_employment" */
export enum Type_Of_Employment_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  TypeOfEmploymentId = 'type_of_employment_id'
}

/** input type for updating data in table "type_of_employment" */
export type Type_Of_Employment_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  type_of_employment_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "type_of_employment" */
export type Type_Of_Employment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Type_Of_Employment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Type_Of_Employment_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
  type_of_employment_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "type_of_employment" */
export enum Type_Of_Employment_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  TypeOfEmploymentId = 'type_of_employment_id'
}

export type Type_Of_Employment_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Type_Of_Employment_Set_Input>;
  /** filter the rows which have to be updated */
  where: Type_Of_Employment_Bool_Exp;
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
  citi_of_residence_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  city_of_residence?: Maybe<City_Of_Residence>;
  create_date: Scalars['date'];
  descriptions: Scalars['String'];
  experience?: Maybe<Scalars['String']>;
  /** An array relationship */
  jobseeker_vacancies: Array<Jobseeker_Vacancy>;
  /** An aggregate relationship */
  jobseeker_vacancies_aggregate: Jobseeker_Vacancy_Aggregate;
  key_skills?: Maybe<Scalars['String']>;
  link_vacancy?: Maybe<Scalars['String']>;
  name_vacancy?: Maybe<Scalars['String']>;
  organization: Scalars['String'];
  salary?: Maybe<Scalars['Int']>;
  vacancy_id: Scalars['uuid'];
};


/** columns and relationships of "vacancy" */
export type VacancyJobseeker_VacanciesArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Vacancy_Order_By>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
};


/** columns and relationships of "vacancy" */
export type VacancyJobseeker_Vacancies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobseeker_Vacancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobseeker_Vacancy_Order_By>>;
  where?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
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
  citi_of_residence_id?: InputMaybe<Uuid_Comparison_Exp>;
  city_of_residence?: InputMaybe<City_Of_Residence_Bool_Exp>;
  create_date?: InputMaybe<Date_Comparison_Exp>;
  descriptions?: InputMaybe<String_Comparison_Exp>;
  experience?: InputMaybe<String_Comparison_Exp>;
  jobseeker_vacancies?: InputMaybe<Jobseeker_Vacancy_Bool_Exp>;
  jobseeker_vacancies_aggregate?: InputMaybe<Jobseeker_Vacancy_Aggregate_Bool_Exp>;
  key_skills?: InputMaybe<String_Comparison_Exp>;
  link_vacancy?: InputMaybe<String_Comparison_Exp>;
  name_vacancy?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<String_Comparison_Exp>;
  salary?: InputMaybe<Int_Comparison_Exp>;
  vacancy_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "vacancy" */
export enum Vacancy_Constraint {
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
  citi_of_residence_id?: InputMaybe<Scalars['uuid']>;
  city_of_residence?: InputMaybe<City_Of_Residence_Obj_Rel_Insert_Input>;
  create_date?: InputMaybe<Scalars['date']>;
  descriptions?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  jobseeker_vacancies?: InputMaybe<Jobseeker_Vacancy_Arr_Rel_Insert_Input>;
  key_skills?: InputMaybe<Scalars['String']>;
  link_vacancy?: InputMaybe<Scalars['String']>;
  name_vacancy?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Int']>;
  vacancy_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Vacancy_Max_Fields = {
  __typename?: 'vacancy_max_fields';
  citi_of_residence_id?: Maybe<Scalars['uuid']>;
  create_date?: Maybe<Scalars['date']>;
  descriptions?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  key_skills?: Maybe<Scalars['String']>;
  link_vacancy?: Maybe<Scalars['String']>;
  name_vacancy?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Int']>;
  vacancy_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Vacancy_Min_Fields = {
  __typename?: 'vacancy_min_fields';
  citi_of_residence_id?: Maybe<Scalars['uuid']>;
  create_date?: Maybe<Scalars['date']>;
  descriptions?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  key_skills?: Maybe<Scalars['String']>;
  link_vacancy?: Maybe<Scalars['String']>;
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
  citi_of_residence_id?: InputMaybe<Order_By>;
  city_of_residence?: InputMaybe<City_Of_Residence_Order_By>;
  create_date?: InputMaybe<Order_By>;
  descriptions?: InputMaybe<Order_By>;
  experience?: InputMaybe<Order_By>;
  jobseeker_vacancies_aggregate?: InputMaybe<Jobseeker_Vacancy_Aggregate_Order_By>;
  key_skills?: InputMaybe<Order_By>;
  link_vacancy?: InputMaybe<Order_By>;
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
  CitiOfResidenceId = 'citi_of_residence_id',
  /** column name */
  CreateDate = 'create_date',
  /** column name */
  Descriptions = 'descriptions',
  /** column name */
  Experience = 'experience',
  /** column name */
  KeySkills = 'key_skills',
  /** column name */
  LinkVacancy = 'link_vacancy',
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
  citi_of_residence_id?: InputMaybe<Scalars['uuid']>;
  create_date?: InputMaybe<Scalars['date']>;
  descriptions?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  key_skills?: InputMaybe<Scalars['String']>;
  link_vacancy?: InputMaybe<Scalars['String']>;
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
  citi_of_residence_id?: InputMaybe<Scalars['uuid']>;
  create_date?: InputMaybe<Scalars['date']>;
  descriptions?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  key_skills?: InputMaybe<Scalars['String']>;
  link_vacancy?: InputMaybe<Scalars['String']>;
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
  CitiOfResidenceId = 'citi_of_residence_id',
  /** column name */
  CreateDate = 'create_date',
  /** column name */
  Descriptions = 'descriptions',
  /** column name */
  Experience = 'experience',
  /** column name */
  KeySkills = 'key_skills',
  /** column name */
  LinkVacancy = 'link_vacancy',
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

/** columns and relationships of "work_experience" */
export type Work_Experience = {
  __typename?: 'work_experience';
  date_of_dismissal: Scalars['date'];
  date_of_employment: Scalars['date'];
  job_position: Scalars['String'];
  /** An object relationship */
  jobseeker?: Maybe<Jobseeker>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  organization: Scalars['String'];
  /** An object relationship */
  resume?: Maybe<Resume>;
  resume_id?: Maybe<Scalars['uuid']>;
  short_description: Scalars['String'];
  work_experience_id: Scalars['uuid'];
};

/** aggregated selection of "work_experience" */
export type Work_Experience_Aggregate = {
  __typename?: 'work_experience_aggregate';
  aggregate?: Maybe<Work_Experience_Aggregate_Fields>;
  nodes: Array<Work_Experience>;
};

export type Work_Experience_Aggregate_Bool_Exp = {
  count?: InputMaybe<Work_Experience_Aggregate_Bool_Exp_Count>;
};

export type Work_Experience_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Work_Experience_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Work_Experience_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "work_experience" */
export type Work_Experience_Aggregate_Fields = {
  __typename?: 'work_experience_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Experience_Max_Fields>;
  min?: Maybe<Work_Experience_Min_Fields>;
};


/** aggregate fields of "work_experience" */
export type Work_Experience_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Work_Experience_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "work_experience" */
export type Work_Experience_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Work_Experience_Max_Order_By>;
  min?: InputMaybe<Work_Experience_Min_Order_By>;
};

/** input type for inserting array relation for remote table "work_experience" */
export type Work_Experience_Arr_Rel_Insert_Input = {
  data: Array<Work_Experience_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Work_Experience_On_Conflict>;
};

/** Boolean expression to filter rows from the table "work_experience". All fields are combined with a logical 'AND'. */
export type Work_Experience_Bool_Exp = {
  _and?: InputMaybe<Array<Work_Experience_Bool_Exp>>;
  _not?: InputMaybe<Work_Experience_Bool_Exp>;
  _or?: InputMaybe<Array<Work_Experience_Bool_Exp>>;
  date_of_dismissal?: InputMaybe<Date_Comparison_Exp>;
  date_of_employment?: InputMaybe<Date_Comparison_Exp>;
  job_position?: InputMaybe<String_Comparison_Exp>;
  jobseeker?: InputMaybe<Jobseeker_Bool_Exp>;
  jobseeker_id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<String_Comparison_Exp>;
  resume?: InputMaybe<Resume_Bool_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
  short_description?: InputMaybe<String_Comparison_Exp>;
  work_experience_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_experience" */
export enum Work_Experience_Constraint {
  /** unique or primary key constraint on columns "work_experience_id" */
  WorkExperiencePkey = 'work_experience_pkey'
}

/** input type for inserting data into table "work_experience" */
export type Work_Experience_Insert_Input = {
  date_of_dismissal?: InputMaybe<Scalars['date']>;
  date_of_employment?: InputMaybe<Scalars['date']>;
  job_position?: InputMaybe<Scalars['String']>;
  jobseeker?: InputMaybe<Jobseeker_Obj_Rel_Insert_Input>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<Resume_Obj_Rel_Insert_Input>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  work_experience_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Work_Experience_Max_Fields = {
  __typename?: 'work_experience_max_fields';
  date_of_dismissal?: Maybe<Scalars['date']>;
  date_of_employment?: Maybe<Scalars['date']>;
  job_position?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  organization?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  short_description?: Maybe<Scalars['String']>;
  work_experience_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "work_experience" */
export type Work_Experience_Max_Order_By = {
  date_of_dismissal?: InputMaybe<Order_By>;
  date_of_employment?: InputMaybe<Order_By>;
  job_position?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  work_experience_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Experience_Min_Fields = {
  __typename?: 'work_experience_min_fields';
  date_of_dismissal?: Maybe<Scalars['date']>;
  date_of_employment?: Maybe<Scalars['date']>;
  job_position?: Maybe<Scalars['String']>;
  jobseeker_id?: Maybe<Scalars['uuid']>;
  organization?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  short_description?: Maybe<Scalars['String']>;
  work_experience_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "work_experience" */
export type Work_Experience_Min_Order_By = {
  date_of_dismissal?: InputMaybe<Order_By>;
  date_of_employment?: InputMaybe<Order_By>;
  job_position?: InputMaybe<Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  work_experience_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "work_experience" */
export type Work_Experience_Mutation_Response = {
  __typename?: 'work_experience_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Experience>;
};

/** on_conflict condition type for table "work_experience" */
export type Work_Experience_On_Conflict = {
  constraint: Work_Experience_Constraint;
  update_columns?: Array<Work_Experience_Update_Column>;
  where?: InputMaybe<Work_Experience_Bool_Exp>;
};

/** Ordering options when selecting data from "work_experience". */
export type Work_Experience_Order_By = {
  date_of_dismissal?: InputMaybe<Order_By>;
  date_of_employment?: InputMaybe<Order_By>;
  job_position?: InputMaybe<Order_By>;
  jobseeker?: InputMaybe<Jobseeker_Order_By>;
  jobseeker_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Order_By>;
  resume?: InputMaybe<Resume_Order_By>;
  resume_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  work_experience_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: work_experience */
export type Work_Experience_Pk_Columns_Input = {
  work_experience_id: Scalars['uuid'];
};

/** select columns of table "work_experience" */
export enum Work_Experience_Select_Column {
  /** column name */
  DateOfDismissal = 'date_of_dismissal',
  /** column name */
  DateOfEmployment = 'date_of_employment',
  /** column name */
  JobPosition = 'job_position',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  Organization = 'organization',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  WorkExperienceId = 'work_experience_id'
}

/** input type for updating data in table "work_experience" */
export type Work_Experience_Set_Input = {
  date_of_dismissal?: InputMaybe<Scalars['date']>;
  date_of_employment?: InputMaybe<Scalars['date']>;
  job_position?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  work_experience_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "work_experience" */
export type Work_Experience_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_Experience_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_Experience_Stream_Cursor_Value_Input = {
  date_of_dismissal?: InputMaybe<Scalars['date']>;
  date_of_employment?: InputMaybe<Scalars['date']>;
  job_position?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  short_description?: InputMaybe<Scalars['String']>;
  work_experience_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "work_experience" */
export enum Work_Experience_Update_Column {
  /** column name */
  DateOfDismissal = 'date_of_dismissal',
  /** column name */
  DateOfEmployment = 'date_of_employment',
  /** column name */
  JobPosition = 'job_position',
  /** column name */
  JobseekerId = 'jobseeker_id',
  /** column name */
  Organization = 'organization',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  WorkExperienceId = 'work_experience_id'
}

export type Work_Experience_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Work_Experience_Set_Input>;
  /** filter the rows which have to be updated */
  where: Work_Experience_Bool_Exp;
};

/** columns and relationships of "work_schedule" */
export type Work_Schedule = {
  __typename?: 'work_schedule';
  name?: Maybe<Scalars['String']>;
  work_schedule_id: Scalars['uuid'];
  /** An array relationship */
  work_schedule_resume_ids: Array<Work_Schedule_Resume_Id>;
  /** An aggregate relationship */
  work_schedule_resume_ids_aggregate: Work_Schedule_Resume_Id_Aggregate;
};


/** columns and relationships of "work_schedule" */
export type Work_ScheduleWork_Schedule_Resume_IdsArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Resume_Id_Order_By>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};


/** columns and relationships of "work_schedule" */
export type Work_ScheduleWork_Schedule_Resume_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Work_Schedule_Resume_Id_Order_By>>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};

/** aggregated selection of "work_schedule" */
export type Work_Schedule_Aggregate = {
  __typename?: 'work_schedule_aggregate';
  aggregate?: Maybe<Work_Schedule_Aggregate_Fields>;
  nodes: Array<Work_Schedule>;
};

/** aggregate fields of "work_schedule" */
export type Work_Schedule_Aggregate_Fields = {
  __typename?: 'work_schedule_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Schedule_Max_Fields>;
  min?: Maybe<Work_Schedule_Min_Fields>;
};


/** aggregate fields of "work_schedule" */
export type Work_Schedule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Work_Schedule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "work_schedule". All fields are combined with a logical 'AND'. */
export type Work_Schedule_Bool_Exp = {
  _and?: InputMaybe<Array<Work_Schedule_Bool_Exp>>;
  _not?: InputMaybe<Work_Schedule_Bool_Exp>;
  _or?: InputMaybe<Array<Work_Schedule_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  work_schedule_id?: InputMaybe<Uuid_Comparison_Exp>;
  work_schedule_resume_ids?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
  work_schedule_resume_ids_aggregate?: InputMaybe<Work_Schedule_Resume_Id_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "work_schedule" */
export enum Work_Schedule_Constraint {
  /** unique or primary key constraint on columns "name" */
  WorkScheduleNameKey = 'work_schedule_name_key',
  /** unique or primary key constraint on columns "work_schedule_id" */
  WorkSchedulePkey = 'work_schedule_pkey'
}

/** input type for inserting data into table "work_schedule" */
export type Work_Schedule_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  work_schedule_id?: InputMaybe<Scalars['uuid']>;
  work_schedule_resume_ids?: InputMaybe<Work_Schedule_Resume_Id_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Work_Schedule_Max_Fields = {
  __typename?: 'work_schedule_max_fields';
  name?: Maybe<Scalars['String']>;
  work_schedule_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Work_Schedule_Min_Fields = {
  __typename?: 'work_schedule_min_fields';
  name?: Maybe<Scalars['String']>;
  work_schedule_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "work_schedule" */
export type Work_Schedule_Mutation_Response = {
  __typename?: 'work_schedule_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Schedule>;
};

/** input type for inserting object relation for remote table "work_schedule" */
export type Work_Schedule_Obj_Rel_Insert_Input = {
  data: Work_Schedule_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Work_Schedule_On_Conflict>;
};

/** on_conflict condition type for table "work_schedule" */
export type Work_Schedule_On_Conflict = {
  constraint: Work_Schedule_Constraint;
  update_columns?: Array<Work_Schedule_Update_Column>;
  where?: InputMaybe<Work_Schedule_Bool_Exp>;
};

/** Ordering options when selecting data from "work_schedule". */
export type Work_Schedule_Order_By = {
  name?: InputMaybe<Order_By>;
  work_schedule_id?: InputMaybe<Order_By>;
  work_schedule_resume_ids_aggregate?: InputMaybe<Work_Schedule_Resume_Id_Aggregate_Order_By>;
};

/** primary key columns input for table: work_schedule */
export type Work_Schedule_Pk_Columns_Input = {
  work_schedule_id: Scalars['uuid'];
};

/** columns and relationships of "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id = {
  __typename?: 'work_schedule_resume_id';
  /** An object relationship */
  resume: Resume;
  resume_id: Scalars['uuid'];
  /** An object relationship */
  work_schedule: Work_Schedule;
  work_schedule_id: Scalars['uuid'];
};

/** aggregated selection of "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Aggregate = {
  __typename?: 'work_schedule_resume_id_aggregate';
  aggregate?: Maybe<Work_Schedule_Resume_Id_Aggregate_Fields>;
  nodes: Array<Work_Schedule_Resume_Id>;
};

export type Work_Schedule_Resume_Id_Aggregate_Bool_Exp = {
  count?: InputMaybe<Work_Schedule_Resume_Id_Aggregate_Bool_Exp_Count>;
};

export type Work_Schedule_Resume_Id_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Aggregate_Fields = {
  __typename?: 'work_schedule_resume_id_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Schedule_Resume_Id_Max_Fields>;
  min?: Maybe<Work_Schedule_Resume_Id_Min_Fields>;
};


/** aggregate fields of "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Work_Schedule_Resume_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Work_Schedule_Resume_Id_Max_Order_By>;
  min?: InputMaybe<Work_Schedule_Resume_Id_Min_Order_By>;
};

/** input type for inserting array relation for remote table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Arr_Rel_Insert_Input = {
  data: Array<Work_Schedule_Resume_Id_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Work_Schedule_Resume_Id_On_Conflict>;
};

/** Boolean expression to filter rows from the table "work_schedule_resume_id". All fields are combined with a logical 'AND'. */
export type Work_Schedule_Resume_Id_Bool_Exp = {
  _and?: InputMaybe<Array<Work_Schedule_Resume_Id_Bool_Exp>>;
  _not?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
  _or?: InputMaybe<Array<Work_Schedule_Resume_Id_Bool_Exp>>;
  resume?: InputMaybe<Resume_Bool_Exp>;
  resume_id?: InputMaybe<Uuid_Comparison_Exp>;
  work_schedule?: InputMaybe<Work_Schedule_Bool_Exp>;
  work_schedule_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_schedule_resume_id" */
export enum Work_Schedule_Resume_Id_Constraint {
  /** unique or primary key constraint on columns "resume_id", "work_schedule_id" */
  WorkScheduleResumePkey = 'work_schedule_resume_pkey'
}

/** input type for inserting data into table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Insert_Input = {
  resume?: InputMaybe<Resume_Obj_Rel_Insert_Input>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  work_schedule?: InputMaybe<Work_Schedule_Obj_Rel_Insert_Input>;
  work_schedule_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Work_Schedule_Resume_Id_Max_Fields = {
  __typename?: 'work_schedule_resume_id_max_fields';
  resume_id?: Maybe<Scalars['uuid']>;
  work_schedule_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Max_Order_By = {
  resume_id?: InputMaybe<Order_By>;
  work_schedule_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Schedule_Resume_Id_Min_Fields = {
  __typename?: 'work_schedule_resume_id_min_fields';
  resume_id?: Maybe<Scalars['uuid']>;
  work_schedule_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Min_Order_By = {
  resume_id?: InputMaybe<Order_By>;
  work_schedule_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Mutation_Response = {
  __typename?: 'work_schedule_resume_id_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Schedule_Resume_Id>;
};

/** on_conflict condition type for table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_On_Conflict = {
  constraint: Work_Schedule_Resume_Id_Constraint;
  update_columns?: Array<Work_Schedule_Resume_Id_Update_Column>;
  where?: InputMaybe<Work_Schedule_Resume_Id_Bool_Exp>;
};

/** Ordering options when selecting data from "work_schedule_resume_id". */
export type Work_Schedule_Resume_Id_Order_By = {
  resume?: InputMaybe<Resume_Order_By>;
  resume_id?: InputMaybe<Order_By>;
  work_schedule?: InputMaybe<Work_Schedule_Order_By>;
  work_schedule_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: work_schedule_resume_id */
export type Work_Schedule_Resume_Id_Pk_Columns_Input = {
  resume_id: Scalars['uuid'];
  work_schedule_id: Scalars['uuid'];
};

/** select columns of table "work_schedule_resume_id" */
export enum Work_Schedule_Resume_Id_Select_Column {
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  WorkScheduleId = 'work_schedule_id'
}

/** input type for updating data in table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Set_Input = {
  resume_id?: InputMaybe<Scalars['uuid']>;
  work_schedule_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "work_schedule_resume_id" */
export type Work_Schedule_Resume_Id_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_Schedule_Resume_Id_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_Schedule_Resume_Id_Stream_Cursor_Value_Input = {
  resume_id?: InputMaybe<Scalars['uuid']>;
  work_schedule_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "work_schedule_resume_id" */
export enum Work_Schedule_Resume_Id_Update_Column {
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  WorkScheduleId = 'work_schedule_id'
}

export type Work_Schedule_Resume_Id_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Work_Schedule_Resume_Id_Set_Input>;
  /** filter the rows which have to be updated */
  where: Work_Schedule_Resume_Id_Bool_Exp;
};

/** select columns of table "work_schedule" */
export enum Work_Schedule_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  WorkScheduleId = 'work_schedule_id'
}

/** input type for updating data in table "work_schedule" */
export type Work_Schedule_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  work_schedule_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "work_schedule" */
export type Work_Schedule_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_Schedule_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_Schedule_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
  work_schedule_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "work_schedule" */
export enum Work_Schedule_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  WorkScheduleId = 'work_schedule_id'
}

export type Work_Schedule_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Work_Schedule_Set_Input>;
  /** filter the rows which have to be updated */
  where: Work_Schedule_Bool_Exp;
};

export type GetJobseekerAccountQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetJobseekerAccountQuery = { __typename?: 'query_root', account: Array<{ __typename?: 'account', RefreshToken?: string | null, account_id: string, avatar?: string | null, login: string, password: string, role: string }> };

export type GetJobseekerProfileQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetJobseekerProfileQuery = { __typename?: 'query_root', jobseeker: Array<{ __typename?: 'jobseeker', email?: string | null, lastName: string, middleName: string, name: string, phone?: string | null, gender?: string | null, dateBirth?: any | null }> };

export type GetResumeQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type GetResumeQuery = { __typename?: 'query_root', resume: Array<{ __typename?: 'resume', date_create: any, job_position: string, name_resume: string, resume_id: string, status?: boolean | null }> };

export type MutationAuthUserMutationVariables = Exact<{
  login?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type MutationAuthUserMutation = { __typename?: 'mutation_root', login_handler?: { __typename?: 'response', account_id: string, role: string, access_token: string } | null };

export type UpdateJobseekerProfileMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
  dateBirth?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
}>;


export type UpdateJobseekerProfileMutation = { __typename?: 'mutation_root', update_jobseeker?: { __typename?: 'jobseeker_mutation_response', returning: Array<{ __typename?: 'jobseeker', dateBirth?: any | null, email?: string | null, phone?: string | null }> } | null };

export type InsertNameResumeMutationVariables = Exact<{
  job_position?: InputMaybe<Scalars['String']>;
  jobseeker_id?: InputMaybe<Scalars['uuid']>;
  name_resume?: InputMaybe<Scalars['String']>;
}>;


export type InsertNameResumeMutation = { __typename?: 'mutation_root', insert_resume_one?: { __typename?: 'resume', job_position: string, jobseeker_id: string, name_resume: string, resume_id: string, date_create: any } | null };

export type DeleteResumeMutationVariables = Exact<{
  resume_id?: InputMaybe<Scalars['uuid']>;
}>;


export type DeleteResumeMutation = { __typename?: 'mutation_root', delete_resume?: { __typename?: 'resume_mutation_response', returning: Array<{ __typename?: 'resume', name_resume: string }> } | null };


export const GetJobseekerAccountDocument = gql`
    query GetJobseekerAccount($_eq: uuid = "") {
  account(where: {account_id: {_eq: $_eq}}) {
    RefreshToken
    account_id
    avatar
    login
    password
    role
  }
}
    `;

/**
 * __useGetJobseekerAccountQuery__
 *
 * To run a query within a React component, call `useGetJobseekerAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobseekerAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobseekerAccountQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetJobseekerAccountQuery(baseOptions?: Apollo.QueryHookOptions<GetJobseekerAccountQuery, GetJobseekerAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobseekerAccountQuery, GetJobseekerAccountQueryVariables>(GetJobseekerAccountDocument, options);
      }
export function useGetJobseekerAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobseekerAccountQuery, GetJobseekerAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobseekerAccountQuery, GetJobseekerAccountQueryVariables>(GetJobseekerAccountDocument, options);
        }
export type GetJobseekerAccountQueryHookResult = ReturnType<typeof useGetJobseekerAccountQuery>;
export type GetJobseekerAccountLazyQueryHookResult = ReturnType<typeof useGetJobseekerAccountLazyQuery>;
export type GetJobseekerAccountQueryResult = Apollo.QueryResult<GetJobseekerAccountQuery, GetJobseekerAccountQueryVariables>;
export const GetJobseekerProfileDocument = gql`
    query GetJobseekerProfile($_eq: uuid = "") {
  jobseeker(where: {account_id: {_eq: $_eq}}) {
    email
    lastName
    middleName
    name
    phone
    gender
    dateBirth
  }
}
    `;

/**
 * __useGetJobseekerProfileQuery__
 *
 * To run a query within a React component, call `useGetJobseekerProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobseekerProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobseekerProfileQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetJobseekerProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetJobseekerProfileQuery, GetJobseekerProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobseekerProfileQuery, GetJobseekerProfileQueryVariables>(GetJobseekerProfileDocument, options);
      }
export function useGetJobseekerProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobseekerProfileQuery, GetJobseekerProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobseekerProfileQuery, GetJobseekerProfileQueryVariables>(GetJobseekerProfileDocument, options);
        }
export type GetJobseekerProfileQueryHookResult = ReturnType<typeof useGetJobseekerProfileQuery>;
export type GetJobseekerProfileLazyQueryHookResult = ReturnType<typeof useGetJobseekerProfileLazyQuery>;
export type GetJobseekerProfileQueryResult = Apollo.QueryResult<GetJobseekerProfileQuery, GetJobseekerProfileQueryVariables>;
export const GetResumeDocument = gql`
    query GetResume($_eq: uuid = "") {
  resume(where: {jobseeker_id: {_eq: $_eq}}) {
    date_create
    job_position
    name_resume
    resume_id
    status
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
export const MutationAuthUserDocument = gql`
    mutation MutationAuthUser($login: String = "", $password: String = "") {
  login_handler(login: $login, password: $password) {
    account_id
    role
    access_token
  }
}
    `;
export type MutationAuthUserMutationFn = Apollo.MutationFunction<MutationAuthUserMutation, MutationAuthUserMutationVariables>;

/**
 * __useMutationAuthUserMutation__
 *
 * To run a mutation, you first call `useMutationAuthUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationAuthUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationAuthUserMutation, { data, loading, error }] = useMutationAuthUserMutation({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useMutationAuthUserMutation(baseOptions?: Apollo.MutationHookOptions<MutationAuthUserMutation, MutationAuthUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationAuthUserMutation, MutationAuthUserMutationVariables>(MutationAuthUserDocument, options);
      }
export type MutationAuthUserMutationHookResult = ReturnType<typeof useMutationAuthUserMutation>;
export type MutationAuthUserMutationResult = Apollo.MutationResult<MutationAuthUserMutation>;
export type MutationAuthUserMutationOptions = Apollo.BaseMutationOptions<MutationAuthUserMutation, MutationAuthUserMutationVariables>;
export const UpdateJobseekerProfileDocument = gql`
    mutation UpdateJobseekerProfile($_eq: uuid = "", $dateBirth: date = "", $email: String = "", $phone: String = "") {
  update_jobseeker(
    where: {account_id: {_eq: $_eq}}
    _set: {dateBirth: $dateBirth, email: $email, phone: $phone}
  ) {
    returning {
      dateBirth
      email
      phone
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
 *      _eq: // value for '_eq'
 *      dateBirth: // value for 'dateBirth'
 *      email: // value for 'email'
 *      phone: // value for 'phone'
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
export const InsertNameResumeDocument = gql`
    mutation InsertNameResume($job_position: String = "", $jobseeker_id: uuid = "", $name_resume: String = "") {
  insert_resume_one(
    object: {jobseeker_id: $jobseeker_id, name_resume: $name_resume, job_position: $job_position}
  ) {
    job_position
    jobseeker_id
    name_resume
    resume_id
    date_create
  }
}
    `;
export type InsertNameResumeMutationFn = Apollo.MutationFunction<InsertNameResumeMutation, InsertNameResumeMutationVariables>;

/**
 * __useInsertNameResumeMutation__
 *
 * To run a mutation, you first call `useInsertNameResumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNameResumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNameResumeMutation, { data, loading, error }] = useInsertNameResumeMutation({
 *   variables: {
 *      job_position: // value for 'job_position'
 *      jobseeker_id: // value for 'jobseeker_id'
 *      name_resume: // value for 'name_resume'
 *   },
 * });
 */
export function useInsertNameResumeMutation(baseOptions?: Apollo.MutationHookOptions<InsertNameResumeMutation, InsertNameResumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertNameResumeMutation, InsertNameResumeMutationVariables>(InsertNameResumeDocument, options);
      }
export type InsertNameResumeMutationHookResult = ReturnType<typeof useInsertNameResumeMutation>;
export type InsertNameResumeMutationResult = Apollo.MutationResult<InsertNameResumeMutation>;
export type InsertNameResumeMutationOptions = Apollo.BaseMutationOptions<InsertNameResumeMutation, InsertNameResumeMutationVariables>;
export const DeleteResumeDocument = gql`
    mutation DeleteResume($resume_id: uuid = "") {
  delete_resume(where: {resume_id: {_eq: $resume_id}}) {
    returning {
      name_resume
    }
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