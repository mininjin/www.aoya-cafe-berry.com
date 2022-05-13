/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($owner: String, $editors: String) {
    onCreateArticle(owner: $owner, editors: $editors) {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($owner: String, $editors: String) {
    onUpdateArticle(owner: $owner, editors: $editors) {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($owner: String, $editors: String) {
    onDeleteArticle(owner: $owner, editors: $editors) {
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
