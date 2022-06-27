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
      unusualOpening {
        start
        end
      }
      reservation {
        lunch
        bento
      }
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
        unusualOpening {
          start
          end
        }
        reservation {
          lunch
          bento
        }
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
export const getBento = /* GraphQL */ `
  query GetBento($id: ID!) {
    getBento(id: $id) {
      id
      description
      price {
        adult
        child
        bentoId
      }
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBentos = /* GraphQL */ `
  query ListBentos(
    $filter: ModelBentoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBentos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        price {
          adult
          child
          bentoId
        }
        images {
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
export const getReservationContent = /* GraphQL */ `
  query GetReservationContent($id: ID!) {
    getReservationContent(id: $id) {
      id
      name
      date
      time
      type
      number {
        adults
        children
      }
      note
      price {
        adult
        child
        bentoId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listReservationContents = /* GraphQL */ `
  query ListReservationContents(
    $filter: ModelReservationContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservationContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        date
        time
        type
        number {
          adults
          children
        }
        note
        price {
          adult
          child
          bentoId
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
