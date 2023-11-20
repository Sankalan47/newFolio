import { gql } from "graphql-tag";

export const GET_BLOGS = gql`
  query {
    publication(host: "sankalan.hashnode.dev") {
      posts(first: 0) {
        edges {
          node {
            title
            slug
            brief
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;
