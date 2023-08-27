/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCalenderDate = /* GraphQL */ `
  subscription OnCreateCalenderDate(
    $filter: ModelSubscriptionCalenderDateFilterInput
  ) {
    onCreateCalenderDate(filter: $filter) {
      id
      date
      description
      isRest
      isHoliday
      unusualOpening {
        start
        end
        __typename
      }
      reservation {
        lunch
        bento
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCalenderDate = /* GraphQL */ `
  subscription OnUpdateCalenderDate(
    $filter: ModelSubscriptionCalenderDateFilterInput
  ) {
    onUpdateCalenderDate(filter: $filter) {
      id
      date
      description
      isRest
      isHoliday
      unusualOpening {
        start
        end
        __typename
      }
      reservation {
        lunch
        bento
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCalenderDate = /* GraphQL */ `
  subscription OnDeleteCalenderDate(
    $filter: ModelSubscriptionCalenderDateFilterInput
  ) {
    onDeleteCalenderDate(filter: $filter) {
      id
      date
      description
      isRest
      isHoliday
      unusualOpening {
        start
        end
        __typename
      }
      reservation {
        lunch
        bento
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onCreateArticle(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onUpdateArticle(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
    onDeleteArticle(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBento = /* GraphQL */ `
  subscription OnCreateBento($filter: ModelSubscriptionBentoFilterInput) {
    onCreateBento(filter: $filter) {
      id
      description
      price {
        adult
        child
        bentoId
        __typename
      }
      images {
        bucket
        region
        key
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBento = /* GraphQL */ `
  subscription OnUpdateBento($filter: ModelSubscriptionBentoFilterInput) {
    onUpdateBento(filter: $filter) {
      id
      description
      price {
        adult
        child
        bentoId
        __typename
      }
      images {
        bucket
        region
        key
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBento = /* GraphQL */ `
  subscription OnDeleteBento($filter: ModelSubscriptionBentoFilterInput) {
    onDeleteBento(filter: $filter) {
      id
      description
      price {
        adult
        child
        bentoId
        __typename
      }
      images {
        bucket
        region
        key
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateReservationContent = /* GraphQL */ `
  subscription OnCreateReservationContent(
    $filter: ModelSubscriptionReservationContentFilterInput
    $owner: String
  ) {
    onCreateReservationContent(filter: $filter, owner: $owner) {
      id
      name
      date
      time
      type
      number {
        adults
        children
        __typename
      }
      note
      price {
        adult
        child
        bentoId
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateReservationContent = /* GraphQL */ `
  subscription OnUpdateReservationContent(
    $filter: ModelSubscriptionReservationContentFilterInput
    $owner: String
  ) {
    onUpdateReservationContent(filter: $filter, owner: $owner) {
      id
      name
      date
      time
      type
      number {
        adults
        children
        __typename
      }
      note
      price {
        adult
        child
        bentoId
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteReservationContent = /* GraphQL */ `
  subscription OnDeleteReservationContent(
    $filter: ModelSubscriptionReservationContentFilterInput
    $owner: String
  ) {
    onDeleteReservationContent(filter: $filter, owner: $owner) {
      id
      name
      date
      time
      type
      number {
        adults
        children
        __typename
      }
      note
      price {
        adult
        child
        bentoId
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
