/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCalenderDateInput = {
  id?: string | null,
  date: string,
  description: string,
  isRest: boolean,
  isHoliday: boolean,
  unusualOpening?: OpeningInput | null,
  reservation?: ReservationInput | null,
};

export type OpeningInput = {
  start: string,
  end: string,
};

export type ReservationInput = {
  lunch: ReservationStatus,
  bento: ReservationStatus,
};

export enum ReservationStatus {
  AVAILABLE = "AVAILABLE",
  BUSY = "BUSY",
  UNAVAILABLE = "UNAVAILABLE",
}


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
  unusualOpening?: Opening | null,
  reservation?: Reservation | null,
  createdAt: string,
  updatedAt: string,
};

export type Opening = {
  __typename: "Opening",
  start: string,
  end: string,
};

export type Reservation = {
  __typename: "Reservation",
  lunch: ReservationStatus,
  bento: ReservationStatus,
};

export type UpdateCalenderDateInput = {
  id: string,
  date?: string | null,
  description?: string | null,
  isRest?: boolean | null,
  isHoliday?: boolean | null,
  unusualOpening?: OpeningInput | null,
  reservation?: ReservationInput | null,
};

export type DeleteCalenderDateInput = {
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

export type CreateBentoInput = {
  id?: string | null,
  description: string,
  price: BentoPriceInput,
  images: Array< S3ObjectInput | null >,
};

export type BentoPriceInput = {
  adult: number,
  child: number,
  bentoId?: string | null,
};

export type ModelBentoConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelBentoConditionInput | null > | null,
  or?: Array< ModelBentoConditionInput | null > | null,
  not?: ModelBentoConditionInput | null,
};

export type Bento = {
  __typename: "Bento",
  id: string,
  description: string,
  price: BentoPrice,
  images:  Array<S3Object | null >,
  createdAt: string,
  updatedAt: string,
};

export type BentoPrice = {
  __typename: "BentoPrice",
  adult: number,
  child: number,
  bentoId?: string | null,
};

export type UpdateBentoInput = {
  id: string,
  description?: string | null,
  price?: BentoPriceInput | null,
  images?: Array< S3ObjectInput | null > | null,
};

export type DeleteBentoInput = {
  id: string,
};

export type CreateReservationContentInput = {
  id?: string | null,
  name: string,
  date: string,
  time: string,
  type: ReservationType,
  number: ReservationNumberInput,
  note?: string | null,
  price?: BentoPriceInput | null,
};

export enum ReservationType {
  LUNCH = "LUNCH",
  TEE = "TEE",
  BENTO = "BENTO",
}


export type ReservationNumberInput = {
  adults: number,
  children: number,
};

export type ModelReservationContentConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  type?: ModelReservationTypeInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelReservationContentConditionInput | null > | null,
  or?: Array< ModelReservationContentConditionInput | null > | null,
  not?: ModelReservationContentConditionInput | null,
};

export type ModelReservationTypeInput = {
  eq?: ReservationType | null,
  ne?: ReservationType | null,
};

export type ReservationContent = {
  __typename: "ReservationContent",
  id: string,
  name: string,
  date: string,
  time: string,
  type: ReservationType,
  number: ReservationNumber,
  note?: string | null,
  price?: BentoPrice | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ReservationNumber = {
  __typename: "ReservationNumber",
  adults: number,
  children: number,
};

export type UpdateReservationContentInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  time?: string | null,
  type?: ReservationType | null,
  number?: ReservationNumberInput | null,
  note?: string | null,
  price?: BentoPriceInput | null,
};

export type DeleteReservationContentInput = {
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


export type ModelBentoFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBentoFilterInput | null > | null,
  or?: Array< ModelBentoFilterInput | null > | null,
  not?: ModelBentoFilterInput | null,
};

export type ModelBentoConnection = {
  __typename: "ModelBentoConnection",
  items:  Array<Bento | null >,
  nextToken?: string | null,
};

export type ModelReservationContentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  type?: ModelReservationTypeInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelReservationContentFilterInput | null > | null,
  or?: Array< ModelReservationContentFilterInput | null > | null,
  not?: ModelReservationContentFilterInput | null,
};

export type ModelReservationContentConnection = {
  __typename: "ModelReservationContentConnection",
  items:  Array<ReservationContent | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCalenderDateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  isRest?: ModelSubscriptionBooleanInput | null,
  isHoliday?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCalenderDateFilterInput | null > | null,
  or?: Array< ModelSubscriptionCalenderDateFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionArticleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  publishedYearMonth?: ModelSubscriptionStringInput | null,
  publishedAt?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
};

export type ModelSubscriptionBentoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBentoFilterInput | null > | null,
  or?: Array< ModelSubscriptionBentoFilterInput | null > | null,
};

export type ModelSubscriptionReservationContentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  note?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReservationContentFilterInput | null > | null,
  or?: Array< ModelSubscriptionReservationContentFilterInput | null > | null,
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
    unusualOpening?:  {
      __typename: "Opening",
      start: string,
      end: string,
    } | null,
    reservation?:  {
      __typename: "Reservation",
      lunch: ReservationStatus,
      bento: ReservationStatus,
    } | null,
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
    unusualOpening?:  {
      __typename: "Opening",
      start: string,
      end: string,
    } | null,
    reservation?:  {
      __typename: "Reservation",
      lunch: ReservationStatus,
      bento: ReservationStatus,
    } | null,
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
    unusualOpening?:  {
      __typename: "Opening",
      start: string,
      end: string,
    } | null,
    reservation?:  {
      __typename: "Reservation",
      lunch: ReservationStatus,
      bento: ReservationStatus,
    } | null,
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

export type CreateBentoMutationVariables = {
  input: CreateBentoInput,
  condition?: ModelBentoConditionInput | null,
};

export type CreateBentoMutation = {
  createBento?:  {
    __typename: "Bento",
    id: string,
    description: string,
    price:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    },
    images:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBentoMutationVariables = {
  input: UpdateBentoInput,
  condition?: ModelBentoConditionInput | null,
};

export type UpdateBentoMutation = {
  updateBento?:  {
    __typename: "Bento",
    id: string,
    description: string,
    price:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    },
    images:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBentoMutationVariables = {
  input: DeleteBentoInput,
  condition?: ModelBentoConditionInput | null,
};

export type DeleteBentoMutation = {
  deleteBento?:  {
    __typename: "Bento",
    id: string,
    description: string,
    price:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    },
    images:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReservationContentMutationVariables = {
  input: CreateReservationContentInput,
  condition?: ModelReservationContentConditionInput | null,
};

export type CreateReservationContentMutation = {
  createReservationContent?:  {
    __typename: "ReservationContent",
    id: string,
    name: string,
    date: string,
    time: string,
    type: ReservationType,
    number:  {
      __typename: "ReservationNumber",
      adults: number,
      children: number,
    },
    note?: string | null,
    price?:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateReservationContentMutationVariables = {
  input: UpdateReservationContentInput,
  condition?: ModelReservationContentConditionInput | null,
};

export type UpdateReservationContentMutation = {
  updateReservationContent?:  {
    __typename: "ReservationContent",
    id: string,
    name: string,
    date: string,
    time: string,
    type: ReservationType,
    number:  {
      __typename: "ReservationNumber",
      adults: number,
      children: number,
    },
    note?: string | null,
    price?:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteReservationContentMutationVariables = {
  input: DeleteReservationContentInput,
  condition?: ModelReservationContentConditionInput | null,
};

export type DeleteReservationContentMutation = {
  deleteReservationContent?:  {
    __typename: "ReservationContent",
    id: string,
    name: string,
    date: string,
    time: string,
    type: ReservationType,
    number:  {
      __typename: "ReservationNumber",
      adults: number,
      children: number,
    },
    note?: string | null,
    price?:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    unusualOpening?:  {
      __typename: "Opening",
      start: string,
      end: string,
    } | null,
    reservation?:  {
      __typename: "Reservation",
      lunch: ReservationStatus,
      bento: ReservationStatus,
    } | null,
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
      unusualOpening?:  {
        __typename: "Opening",
        start: string,
        end: string,
      } | null,
      reservation?:  {
        __typename: "Reservation",
        lunch: ReservationStatus,
        bento: ReservationStatus,
      } | null,
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

export type GetBentoQueryVariables = {
  id: string,
};

export type GetBentoQuery = {
  getBento?:  {
    __typename: "Bento",
    id: string,
    description: string,
    price:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    },
    images:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBentosQueryVariables = {
  filter?: ModelBentoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBentosQuery = {
  listBentos?:  {
    __typename: "ModelBentoConnection",
    items:  Array< {
      __typename: "Bento",
      id: string,
      description: string,
      price:  {
        __typename: "BentoPrice",
        adult: number,
        child: number,
        bentoId?: string | null,
      },
      images:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReservationContentQueryVariables = {
  id: string,
};

export type GetReservationContentQuery = {
  getReservationContent?:  {
    __typename: "ReservationContent",
    id: string,
    name: string,
    date: string,
    time: string,
    type: ReservationType,
    number:  {
      __typename: "ReservationNumber",
      adults: number,
      children: number,
    },
    note?: string | null,
    price?:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListReservationContentsQueryVariables = {
  filter?: ModelReservationContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservationContentsQuery = {
  listReservationContents?:  {
    __typename: "ModelReservationContentConnection",
    items:  Array< {
      __typename: "ReservationContent",
      id: string,
      name: string,
      date: string,
      time: string,
      type: ReservationType,
      number:  {
        __typename: "ReservationNumber",
        adults: number,
        children: number,
      },
      note?: string | null,
      price?:  {
        __typename: "BentoPrice",
        adult: number,
        child: number,
        bentoId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCalenderDateSubscriptionVariables = {
  filter?: ModelSubscriptionCalenderDateFilterInput | null,
};

export type OnCreateCalenderDateSubscription = {
  onCreateCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    unusualOpening?:  {
      __typename: "Opening",
      start: string,
      end: string,
    } | null,
    reservation?:  {
      __typename: "Reservation",
      lunch: ReservationStatus,
      bento: ReservationStatus,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCalenderDateSubscriptionVariables = {
  filter?: ModelSubscriptionCalenderDateFilterInput | null,
};

export type OnUpdateCalenderDateSubscription = {
  onUpdateCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    unusualOpening?:  {
      __typename: "Opening",
      start: string,
      end: string,
    } | null,
    reservation?:  {
      __typename: "Reservation",
      lunch: ReservationStatus,
      bento: ReservationStatus,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCalenderDateSubscriptionVariables = {
  filter?: ModelSubscriptionCalenderDateFilterInput | null,
};

export type OnDeleteCalenderDateSubscription = {
  onDeleteCalenderDate?:  {
    __typename: "CalenderDate",
    id: string,
    date: string,
    description: string,
    isRest: boolean,
    isHoliday: boolean,
    unusualOpening?:  {
      __typename: "Opening",
      start: string,
      end: string,
    } | null,
    reservation?:  {
      __typename: "Reservation",
      lunch: ReservationStatus,
      bento: ReservationStatus,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
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

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
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

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
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

export type OnCreateBentoSubscriptionVariables = {
  filter?: ModelSubscriptionBentoFilterInput | null,
};

export type OnCreateBentoSubscription = {
  onCreateBento?:  {
    __typename: "Bento",
    id: string,
    description: string,
    price:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    },
    images:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBentoSubscriptionVariables = {
  filter?: ModelSubscriptionBentoFilterInput | null,
};

export type OnUpdateBentoSubscription = {
  onUpdateBento?:  {
    __typename: "Bento",
    id: string,
    description: string,
    price:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    },
    images:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBentoSubscriptionVariables = {
  filter?: ModelSubscriptionBentoFilterInput | null,
};

export type OnDeleteBentoSubscription = {
  onDeleteBento?:  {
    __typename: "Bento",
    id: string,
    description: string,
    price:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    },
    images:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReservationContentSubscriptionVariables = {
  filter?: ModelSubscriptionReservationContentFilterInput | null,
  owner?: string | null,
};

export type OnCreateReservationContentSubscription = {
  onCreateReservationContent?:  {
    __typename: "ReservationContent",
    id: string,
    name: string,
    date: string,
    time: string,
    type: ReservationType,
    number:  {
      __typename: "ReservationNumber",
      adults: number,
      children: number,
    },
    note?: string | null,
    price?:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateReservationContentSubscriptionVariables = {
  filter?: ModelSubscriptionReservationContentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateReservationContentSubscription = {
  onUpdateReservationContent?:  {
    __typename: "ReservationContent",
    id: string,
    name: string,
    date: string,
    time: string,
    type: ReservationType,
    number:  {
      __typename: "ReservationNumber",
      adults: number,
      children: number,
    },
    note?: string | null,
    price?:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteReservationContentSubscriptionVariables = {
  filter?: ModelSubscriptionReservationContentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteReservationContentSubscription = {
  onDeleteReservationContent?:  {
    __typename: "ReservationContent",
    id: string,
    name: string,
    date: string,
    time: string,
    type: ReservationType,
    number:  {
      __typename: "ReservationNumber",
      adults: number,
      children: number,
    },
    note?: string | null,
    price?:  {
      __typename: "BentoPrice",
      adult: number,
      child: number,
      bentoId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
