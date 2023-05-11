import { request } from "graphql-request";

const URL = "https://api.hashnode.com/";
export const fetcher = (query) => request(URL, query);
