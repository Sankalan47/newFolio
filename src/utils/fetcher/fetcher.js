import { request } from "graphql-request";

const URL = "https://gql.hashnode.com/";
export const fetcher = (query) => request(URL, query);
