import axios from "axios";
import type { ICryptoResponse } from "../interfaces/crypto.interface";

export function getCrypto(): Promise<ICryptoResponse> {
  return axios
    .get<ICryptoResponse>("https://api.coinlore.net/api/tickers/")
    .then((res) => res.data);
}
