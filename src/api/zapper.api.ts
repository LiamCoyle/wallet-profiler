import axios from "axios";

const zapperUrl = "https://api.zapper.fi/v2/";

const option = {
  headers: {
    accept: "*/*",
    Authorization:
      "Basic " + Buffer.from(process.env.ZAPPER_API_KEY!).toString("base64"),
  },
};

const zapperApi = {
  getBalances: (address: string) => {
    return axios
      .get(
        zapperUrl + "balances?addresses%5B%5D=" + address + "&bundled=false",
        option
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};

module.exports = zapperApi;
