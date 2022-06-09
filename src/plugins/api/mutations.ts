/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCalenderDate = /* GraphQL */ `
  mutation CreateCalenderDate(
    $input: CreateCalenderDateInput!
    $condition: ModelCalenderDateConditionInput
  ) {
    createCalenderDate(input: $input, condition: $condition) {
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
export const updateCalenderDate = /* GraphQL */ `
  mutation UpdateCalenderDate(
    $input: UpdateCalenderDateInput!
    $condition: ModelCalenderDateConditionInput
  ) {
    updateCalenderDate(input: $input, condition: $condition) {
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
export const deleteCalenderDate = /* GraphQL */ `
  mutation DeleteCalenderDate(
    $input: DeleteCalenderDateInput!
    $condition: ModelCalenderDateConditionInput
  ) {
    deleteCalenderDate(input: $input, condition: $condition) {
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
export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
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
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
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
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
