import gql from 'graphql-tag';

export const getGuides = gql`
  query users($first: Int, $role: UserRole) {
    users(first: $first, where: { userRole: $role }) {
      id
      fullName
      profile
      profilePictureUrl
      region
      city
      country
      adventures {
        id
      }
    }
  }
`;

export const getAdventures = gql`
  query adventures($first: Int) {
    adventures(first: $first) {
      id
      title
      dates
      inclusionList
      exclusionList
      categories
      thingsToCarryList
      description
      address
      price
      reviews
      media {
        id
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
      season
      minimumAge
    }
  }
`;

export const getAdventureById = gql`
  query adventureById($id: ID) {
    adventure(where: { id: $id }) {
      id
      title
      dates
      inclusionList
      exclusionList
      categories
      thingsToCarryList
      description
      address
      price
      reviews
      media {
        id
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
      season
      minimumAge
    }
  }
`;
