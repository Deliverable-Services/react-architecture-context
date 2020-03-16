const dev = {
  BASE_URL: "localhost:3000"
};

const prod = {
  BASE_URL: "https://niyotail.com/api/"
};

// - Default to dev if not set
const ENV = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default ENV;
