import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.cantinasenai.com.br",
  params: {
    key: "07ad11b5bb6e2de98a535070ba93cdaf"
  }
});