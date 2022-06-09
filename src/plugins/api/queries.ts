/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCalenderDate = /* GraphQL */ `
  query GetCalenderDate($id: ID!) {
    getCalenderDate(id: $id) {
      id
      date
      description
      isRest
      isHoliday
      createdAt
      updatedAt
    }
  }
`;
export const listCalenderDates = /* GraphQL */ `
  query ListCalenderDates(
    $filter: ModelCalenderDateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalenderDates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        description
        isRest
        isHoliday
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      id
      date
      dateTime
      number
      type
      status
      name
      note
      createdAt
      updatedAt
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        dateTime
        number
        type
        status
        name
        note
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const reservationByDateTime = /* GraphQL */ `
  query ReservationByDateTime(
    $status: ReservationStatus!
    $dateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ReservationByDateTime(
      status: $status
      dateTime: $dateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        dateTime
        number
        type
        status
        name
        note
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      type
      publishedYearMonth
      publishedAt
      content
      title
      thumbnail {
        bucket
        region
        key
      }
      createdAt
      updatedAt
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
        type
        publishedYearMonth
        publishedAt
        content
        title
        thumbnail {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const articleByPublishedAt = /* GraphQL */ `
  query ArticleByPublishedAt(
    $type: ArticleType!
    $publishedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ArticleByPublishedAt(
      type: $type
      publishedAt: $publishedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        publishedYearMonth
        publishedAt
        content
        title
        thumbnail {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
