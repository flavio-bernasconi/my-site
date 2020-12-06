import { client } from "./primic-config";
import Prismic from "prismic-javascript";

export const fetchDataFromPrismic = async () => {
  const response = await client.query(
    Prismic.Predicates.at("document.type", "projects")
  );
  if (response) {
    return response.results;
  }
};

export const fetchIntroFromPrismic = async () => {
  const response = await client.query(
    Prismic.Predicates.at("document.type", "intro")
  );
  if (response) {
    return response.results;
  }
};
