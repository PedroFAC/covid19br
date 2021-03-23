import { create } from "apisauce";

const api = create({
  baseURL: "https://covid19-brazil-api.now.sh/api/report/v1",
});

export default api;
