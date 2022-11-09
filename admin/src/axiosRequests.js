import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjUyYmU4MjVjNGE0ZGE4Y2I4NGZkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzY0NTYxMSwiZXhwIjoxNjY3ODE4NDExfQ.QHVMgZworLQghtfmGXgEYuRo8cBJkACJNG0wBP6Z6Ns";
// // console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
