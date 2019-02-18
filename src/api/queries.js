import gql from 'graphql-tag';

export const GetAdventureById = gql`
  query adventureById($id: ID) {
    adventure(where: { id: $id }) {
      id
      title
    }
  }
`;
