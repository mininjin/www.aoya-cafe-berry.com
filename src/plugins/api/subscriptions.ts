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
      reservations {
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
      reservations {
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
      reservations {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
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
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
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
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
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
