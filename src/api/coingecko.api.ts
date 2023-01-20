import axios from "axios";

const coingeckoUrl = "https://api.coingecko.com/api/v3/";

const option = {
  headers: {
    accept: "application/json",
  },
};

const coingeckoApi = {
  getCoinList: () => {
    return axios
      .get(coingeckoUrl + "coins/list", option)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};

module.exports = coingeckoApi;
