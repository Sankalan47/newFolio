import { gql } from "graphql-tag";

export const GET_BLOGS = gql`
  {
    user(username: "imnoob") {
      publication {
        posts(page: 0) {
          title
          slug
          brief
          coverImage
        }
      }
    }
  }
`;
