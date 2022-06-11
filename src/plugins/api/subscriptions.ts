/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCalenderDate = /* GraphQL */ `
  subscription OnCreateCalenderDate {
    onCreateCalenderDate {
      id
      date
      description
      isRest
      isHoliday
      unusualOpening
      reservation {
        lunch
        bento
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCalenderDate = /* GraphQL */ `
  subscription OnUpdateCalenderDate {
    onUpdateCalenderDate {
      id
      date
      description
      isRest
      isHoliday
      unusualOpening
      reservation {
        lunch
        bento
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCalenderDate = /* GraphQL */ `
  subscription OnDeleteCalenderDate {
    onDeleteCalenderDate {
      id
      date
      description
      isRest
      isHoliday
      unusualOpening
      reservation {
        lunch
        bento
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
