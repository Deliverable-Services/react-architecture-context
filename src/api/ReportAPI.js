import API from "./API";

const ReportAPI = () => {
  const getInitialReportsData = async () => {
    try {
      const { data, status } = await API.get("/reports");

      if (status) {
        return data;
      }
    } catch (error) {
      console.log({ error });
      return false;
    }
  };
};

export default ReportAPI;
