import gql from 'graphql-tag';

export const getAdventureById = gql`
  query adventureById($id: ID) {
    adventure(where: { id: $id }) {
      id
      title
      categories
      description
      address
      price
      reviews
      inclusions
      media {
        imageUrl
      }
      guide {
        id
        country
        city
        profilePictureUrl
        auth0ProfilePictureUrl
        aboutMe
        flagIcon
        fullName
        firstName
        lastName
        adventures {
          id
        }
      }
      durationInDays
      distance
      elevation
      difficulty
      inclusions
      season
      minimumAge
    }
  }
`;
