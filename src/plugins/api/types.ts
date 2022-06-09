/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCalenderDateInput = {
  id?: string | null,
  date: string,
  description: string,
  isRest: boolean,
  isHoliday: boolean,
};

export type ModelCalenderDateConditionInput = {
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isRest?: ModelBooleanInput | null,
  isHoliday?: ModelBooleanInput | null,
  and?: Array< ModelCalenderDateConditionInput | null > | null,
  or?: Array< ModelCalenderDateConditionInput | null > | null,
  not?: ModelCalenderDateConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type CalenderDate = {
  __typename: "CalenderDate",
  id: string,
  date: string,
  description: string,
  isRest: boolean,
  isHoliday: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCalenderDateInput = {
  id: string,
  date?: string | null,
  description?: string | null,
  isRest?: boolean | null,
  isHoliday?: boolean | null,
};

export type DeleteCalenderDateInput = {
  id: string,
};

export type CreateReservationInput = {
  id?: string | null,
  date: string,
  dateTime: string,
  number: number,
  type: ReservationType,
  status: ReservationStatus,
  name?: string | null,
  note?: string | null,
};

export enum ReservationType {
  LUNCH = "LUNCH",
  TEA = "TEA",
  BENTO = "BENTO",
}


export enum ReservationStatus {
  REQUESTED = "REQUESTED",
  APPROVED = "APPROVED",
  ENDED = "ENDED",
}


export type ModelReservationConditionInput = {
  date?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  number?: ModelIntInput | null,
  type?: ModelReservationTypeInput | null,
  status?: ModelReservationStatusInput | null,
  name?: ModelStringInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelReservationConditionInput | null > | null,
  or?: Array< ModelReservationConditionInput | null > | null,
  not?: ModelReservationConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelReservationTypeInput = {
  eq?: ReservationType | null,
  ne?: ReservationType | null,
};

export type ModelReservationStatusInput = {
  eq?: ReservationStatus | null,
  ne?: ReservationStatus | null,
};

export type Reservation = {
  __typename: "Reservation",
  id: string,
  date: string,
  dateTime: string,
  number: number,
  type: ReservationType,
  status: ReservationStatus,
  name?: string | null,
  note?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReservationInput = {
  id: string,
  date?: string | null,
  dateTime?: string | null,
  number?: number | null,
  type?: ReservationType | null,
  status?: ReservationStatus | null,
  name?: string | null,
  note?: string | null,
};

export type DeleteReservationInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  type: ArticleType,
  publishedYearMonth: string,
  publishedAt: string,
  content: string,
  title: string,
  thumbnail: S3ObjectInput,
};

export enum ArticleType {
  DEFAULT = "DEFAULT",
}


export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelArticleConditionInput = {
  type?: ModelArticleTypeInput | null,
  publishedYearMonth?: ModelStringInput | null,
  publishedAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type ModelArticleTypeInput = {
  eq?: ArticleType | null,
  ne?: ArticleType | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  type: ArticleType,
  publishedYearMonth: string,
  publishedAt: string,
  content: string,
  title: string,
  thumbnail: S3Object,
  createdAt: string,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateArticleInput = {
  id: string,
  type?: ArticleType | null,
  publishedYearMonth?: string | null,
  publishedAt?: string | null,
  content?: string | null,
  title?: string | null,
  thumbnail?: S3ObjectInput | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type ModelCalenderDateFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isRest?: ModelBooleanInput | null,
  isHoliday?: ModelBooleanInput | null,
  and?: Array< ModelCalenderDateFilterInput | null > | null,
  or?: Array< ModelCalenderDateFilterInput | null > | null,
  not?: ModelCalenderDateFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCalenderDateConnection = {
  __typename: "ModelCalenderDateConnection",
  items:  Array<CalenderDate | null >,
  nextToken?: string | null,
};

export type ModelReservationFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  number?: ModelIntInput | null,
  type?: ModelReservationTypeInput | null,
  status?: ModelReservationStatusInput | null,
  name?: ModelStringInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelReservationFilterInput | null > | null,
  or?: Array< ModelReservationFilterInput | null > | null,
  not?: ModelReservationFilterInput | null,
};

export type ModelReservationConnection = {
  __typename: "ModelReservationConnection",
  items:  Array<Reservation | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelArticleTypeInput | null,
  publishedYearMonth?: ModelStringInput | null,
  publishedAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type CreateCalenderDateMutationVariables = {
  input: CreateCalenderDateInput,
  condition?: ModelCalenderDateConditionInput | null,
};

export type CreateCalenderDateMutation = {
  createCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCalenderDateMutationVariables = {
  input: UpdateCalenderDateInput,
  condition?: ModelCalenderDateConditionInput | null,
};

export type UpdateCalenderDateMutation = {
  updateCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCalenderDateMutationVariables = {
  input: DeleteCalenderDateInput,
  condition?: ModelCalenderDateConditionInput | null,
};

export type DeleteCalenderDateMutation = {
  deleteCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReservationMutationVariables = {
  input: CreateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type CreateReservationMutation = {
  createReservation?:  {
    __typename: "Reservation",
    id: string,
    date: string,
    dateTime: string,
    number: number,
    type: ReservationType,
    status: ReservationStatus,
    name?: string | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReservationMutationVariables = {
  input: UpdateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type UpdateReservationMutation = {
  updateReservation?:  {
    __typename: "Reservation",
    id: string,
    date: string,
    dateTime: string,
    number: number,
    type: ReservationType,
    status: ReservationStatus,
    name?: string | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReservationMutationVariables = {
  input: DeleteReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type DeleteReservationMutation = {
  deleteReservation?:  {
    __typename: "Reservation",
    id: string,
    date: string,
    dateTime: string,
    number: number,
    type: ReservationType,
    status: ReservationStatus,
    name?: string | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    type: ArticleType,
    publishedYearMonth: string,
    publishedAt: string,
    content: string,
    title: string,
    thumbnail:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    type: ArticleType,
    publishedYearMonth: string,
    publishedAt: string,
    content: string,
    title: string,
    thumbnail:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    type: ArticleType,
    publishedYearMonth: string,
    publishedAt: string,
    content: string,
    title: string,
    thumbnail:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCalenderDateQueryVariables = {
  id: string,
};

export type GetCalenderDateQuery = {
  getCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCalenderDatesQueryVariables = {
  filter?: ModelCalenderDateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCalenderDatesQuery = {
  listCalenderDates?:  {
    __typename: "ModelCalenderDateConnection",
    items:  Array< {
      __typename: "CalenderDate",
      id: string,
      date: string,
      description: string,
      isRest: boolean,
      isHoliday: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReservationQueryVariables = {
  id: string,
};

export type GetReservationQuery = {
  getReservation?:  {
    __typename: "Reservation",
    id: string,
    date: string,
    dateTime: string,
    number: number,
    type: ReservationType,
    status: ReservationStatus,
    name?: string | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReservationsQueryVariables = {
  filter?: ModelReservationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservationsQuery = {
  listReservations?:  {
    __typename: "ModelReservationConnection",
    items:  Array< {
      __typename: "Reservation",
      id: string,
      date: string,
      dateTime: string,
      number: number,
      type: ReservationType,
      status: ReservationStatus,
      name?: string | null,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReservationByDateTimeQueryVariables = {
  status: ReservationStatus,
  dateTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReservationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReservationByDateTimeQuery = {
  ReservationByDateTime?:  {
    __typename: "ModelReservationConnection",
    items:  Array< {
      __typename: "Reservation",
      id: string,
      date: string,
      dateTime: string,
      number: number,
      type: ReservationType,
      status: ReservationStatus,
      name?: string | null,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    type: ArticleType,
    publishedYearMonth: string,
    publishedAt: string,
    content: string,
    title: string,
    thumbnail:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      type: ArticleType,
      publishedYearMonth: string,
      publishedAt: string,
      content: string,
      title: string,
      thumbnail:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ArticleByPublishedAtQueryVariables = {
  type: ArticleType,
  publishedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ArticleByPublishedAtQuery = {
  ArticleByPublishedAt?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      type: ArticleType,
      publishedYearMonth: string,
      publishedAt: string,
      content: string,
      title: string,
      thumbnail:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCalenderDateSubscription = {
  onCreateCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCalenderDateSubscription = {
  onUpdateCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCalenderDateSubscription = {
  onDeleteCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReservationSubscription = {
  onCreateReservation?:  {
    __typename: "Reservation",
    id: string,
    date: string,
    dateTime: string,
    number: number,
    type: ReservationType,
    status: ReservationStatus,
    name?: string | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReservationSubscription = {
  onUpdateReservation?:  {
    __typename: "Reservation",
    id: string,
    date: string,
    dateTime: string,
    number: number,
    type: ReservationType,
    status: ReservationStatus,
    name?: string | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReservationSubscription = {
  onDeleteReservation?:  {
    __typename: "Reservation",
    id: string,
    date: string,
    dateTime: string,
    number: number,
    type: ReservationType,
    status: ReservationStatus,
    name?: string | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    type: ArticleType,
    publishedYearMonth: string,
    publishedAt: string,
    content: string,
    title: string,
    thumbnail:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    type: ArticleType,
    publishedYearMonth: string,
    publishedAt: string,
    content: string,
    title: string,
    thumbnail:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    type: ArticleType,
    publishedYearMonth: string,
    publishedAt: string,
    content: string,
    title: string,
    thumbnail:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
