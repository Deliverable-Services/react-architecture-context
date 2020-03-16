import axios from "axios";

// - Configurations
import ENV from "../configs/env";

// - Connect with AUTH to check for withCredentials
const API = async () =>
  await axios.create({
    baseURL: ENV.BASE_URL,
    timeout: 1000,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "replace with Authcontext token"
    },
    withCredentials: false
  });

export default API;
