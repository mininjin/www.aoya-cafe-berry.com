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

export type SearchableCalenderDateFilterInput = {
  id?: SearchableIDFilterInput | null,
  date?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  isRest?: SearchableBooleanFilterInput | null,
  isHoliday?: SearchableBooleanFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableCalenderDateFilterInput | null > | null,
  or?: Array< SearchableCalenderDateFilterInput | null > | null,
  not?: SearchableCalenderDateFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableCalenderDateSortInput = {
  field?: SearchableCalenderDateSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCalenderDateSortableFields {
  id = "id",
  date = "date",
  description = "description",
  isRest = "isRest",
  isHoliday = "isHoliday",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableCalenderDateAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableCalenderDateAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableCalenderDateAggregateField {
  id = "id",
  date = "date",
  description = "description",
  isRest = "isRest",
  isHoliday = "isHoliday",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableCalenderDateConnection = {
  __typename: "SearchableCalenderDateConnection",
  items:  Array<CalenderDate | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
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


export type SearchableArticleFilterInput = {
  id?: SearchableIDFilterInput | null,
  publishedYearMonth?: SearchableStringFilterInput | null,
  publishedAt?: SearchableStringFilterInput | null,
  content?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  type?: SearchableStringFilterInput | null,
  and?: Array< SearchableArticleFilterInput | null > | null,
  or?: Array< SearchableArticleFilterInput | null > | null,
  not?: SearchableArticleFilterInput | null,
};

export type SearchableArticleSortInput = {
  field?: SearchableArticleSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableArticleSortableFields {
  id = "id",
  publishedYearMonth = "publishedYearMonth",
  publishedAt = "publishedAt",
  content = "content",
  title = "title",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableArticleAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableArticleAggregateField,
};

export enum SearchableArticleAggregateField {
  id = "id",
  type = "type",
  publishedYearMonth = "publishedYearMonth",
  publishedAt = "publishedAt",
  content = "content",
  title = "title",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableArticleConnection = {
  __typename: "SearchableArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
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

export type SearchCalenderDatesQueryVariables = {
  filter?: SearchableCalenderDateFilterInput | null,
  sort?: Array< SearchableCalenderDateSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableCalenderDateAggregationInput | null > | null,
};

export type SearchCalenderDatesQuery = {
  searchCalenderDates?:  {
    __typename: "SearchableCalenderDateConnection",
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
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
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

export type SearchArticlesQueryVariables = {
  filter?: SearchableArticleFilterInput | null,
  sort?: Array< SearchableArticleSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableArticleAggregationInput | null > | null,
};

export type SearchArticlesQuery = {
  searchArticles?:  {
    __typename: "SearchableArticleConnection",
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
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
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
