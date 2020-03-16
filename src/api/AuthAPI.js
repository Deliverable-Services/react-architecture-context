import API from "./API";

const AuthAPI = () => {
  const login = async (username, password) => {
    try {
      const { data, status } = await API.post("/somewhere", {
        data: {
          username,
          password
        }
      });

      if (status) {
        return data;
      }
    } catch (error) {
      console.log({ error });
      return false;
    }
  };
};

export default AuthAPI;
