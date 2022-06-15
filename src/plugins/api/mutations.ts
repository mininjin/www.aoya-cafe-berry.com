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
export const createBento = /* GraphQL */ `
  mutation CreateBento(
    $input: CreateBentoInput!
    $condition: ModelBentoConditionInput
  ) {
    createBento(input: $input, condition: $condition) {
      id
      description
      price {
        adult
        child
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
export const updateBento = /* GraphQL */ `
  mutation UpdateBento(
    $input: UpdateBentoInput!
    $condition: ModelBentoConditionInput
  ) {
    updateBento(input: $input, condition: $condition) {
      id
      description
      price {
        adult
        child
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
export const deleteBento = /* GraphQL */ `
  mutation DeleteBento(
    $input: DeleteBentoInput!
    $condition: ModelBentoConditionInput
  ) {
    deleteBento(input: $input, condition: $condition) {
      id
      description
      price {
        adult
        child
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
