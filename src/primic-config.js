import Prismic from "prismic-javascript";

const apiEndpoint = "https://flavio-bernasconi-website.cdn.prismic.io/api/v2";
const accessToken =
  "MC5YNFl1ZVJFQUFDTUFtd0tq.77-9Oe-_ve-_vXkP77-9IO-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_vVzvv73vv73vv73vv71k77-977-977-977-9cO-_vSwd77-9";

export const client = Prismic.client(apiEndpoint, { accessToken });
