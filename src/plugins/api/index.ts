import utils from "@/plugins/utils";
import {
  ListCalenderDatesQueryVariables,
  ListCalenderDatesQuery,
  UpdateCalenderDateInput,
  UpdateCalenderDateMutationVariables,
  CreateCalenderDateInput,
  CreateCalenderDateMutationVariables,
  UpdateCalenderDateMutation,
  CreateCalenderDateMutation,
  ArticleByPublishedAtQuery,
  ArticleByPublishedAtQueryVariables,
  ArticleType,
  ModelSortDirection,
  CreateArticleInput,
  CreateArticleMutationVariables,
  UpdateArticleInput,
  UpdateArticleMutationVariables,
  DeleteArticleMutationVariables,
} from "./types";
import { API, graphqlOperation } from "aws-amplify";
import { listCalenderDates, articleByPublishedAt } from "./queries";
import {
  updateCalenderDate,
  createCalenderDate,
  createArticle,
  updateArticle,
  deleteArticle,
} from "./mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import auth from "@/plugins/auth";

export default {
  getCalenderDatum: async (between: [string, string]) => {
    const variables: ListCalenderDatesQueryVariables = {
      filter: { date: { between } },
    };
    const isAuthenticated = await auth.isAuthenticated();
    return (await API.graphql({
      ...graphqlOperation(listCalenderDates, variables),
      authMode: isAuthenticated ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
    })) as GraphQLResult<ListCalenderDatesQuery>;
  },
  updateCalenderData: async (input: UpdateCalenderDateInput) => {
    const variables: UpdateCalenderDateMutationVariables = {
      input,
    };
    return (await API.graphql(
      graphqlOperation(updateCalenderDate, variables)
    )) as GraphQLResult<UpdateCalenderDateMutation>;
  },
  createCalenderData: async (input: CreateCalenderDateInput) => {
    const variables: CreateCalenderDateMutationVariables = { input };
    return (await API.graphql(
      graphqlOperation(createCalenderDate, variables)
    )) as GraphQLResult<CreateCalenderDateMutation>;
  },
  articleByPublishedAt: async (
    input: Omit<ArticleByPublishedAtQueryVariables, "type">
  ) => {
    const variables: ArticleByPublishedAtQueryVariables = {
      type: ArticleType.DEFAULT,
      sortDirection: ModelSortDirection.DESC,
      ...input,
    };
    const isAuthenticated = await auth.isAuthenticated();
    return (await API.graphql({
      ...graphqlOperation(articleByPublishedAt, variables),
      authMode: isAuthenticated ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
    })) as GraphQLResult<ArticleByPublishedAtQuery>;
  },
  createArticle: async ({
    title,
    content,
    publishDate,
    thumbnail,
  }: Pick<CreateArticleInput, "content" | "title" | "thumbnail"> & {
    publishDate: string;
  }) => {
    const variables: CreateArticleMutationVariables = {
      input: {
        title,
        content,
        thumbnail,
        type: ArticleType.DEFAULT,
        publishedAt: utils.getTimeStampFromDate(publishDate),
        publishedYearMonth: utils.getMonthStringFromDate(publishDate),
      },
    };
    return API.graphql(graphqlOperation(createArticle, variables));
  },
  updateArticle: async ({
    title,
    content,
    publishDate,
    thumbnail,
    id,
  }: Pick<UpdateArticleInput, "content" | "title" | "thumbnail" | "id"> & {
    publishDate: string;
  }) => {
    const variables: UpdateArticleMutationVariables = {
      input: {
        id,
        title,
        content,
        thumbnail,
        type: ArticleType.DEFAULT,
        publishedAt: utils.getTimeStampFromDate(publishDate),
        publishedYearMonth: utils.getMonthStringFromDate(publishDate),
      },
    };
    return API.graphql(graphqlOperation(updateArticle, variables));
  },
  deleteArticle: async (variables: DeleteArticleMutationVariables) => {
    return API.graphql(graphqlOperation(deleteArticle, variables));
  },
};
