import type { ICryptoResponse } from "../interfaces/crypto.interface";

export function getCrypto(): Promise<ICryptoResponse> {
  return fetch("https://api.coinlore.net/api/tickers/").then((res) =>
    res.json()
  );
}
