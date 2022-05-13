/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      publishedAt
      title
      content
      thumbnail
      createdAt
      updatedAt
      owner
      editors
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        publishedAt
        title
        content
        thumbnail
        createdAt
        updatedAt
        owner
        editors
      }
      nextToken
    }
  }
`;
