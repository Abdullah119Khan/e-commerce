import axios from "axios";

const API = "http://localhost:8000/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODBhMWM5Y2U1OTY0MmUwNzlkYzE4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTczNDU1MSwiZXhwIjoxNjcxNzM4MTUxfQ.QmGc0DO1g9Y57Yd55SBXVa-vcbTU-MF7fqHXH0JM62U";

export const publicRequest = axios.create({
  baseURL: API,
});

export const userRequest = axios.create({
  baseURL: API,
  headers: { token: `Bearer ${token}` },
});
