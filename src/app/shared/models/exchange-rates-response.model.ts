import { ExchangeRates } from './exchange-rates.model';

export interface ExchangeRatesResponse {
  rates: ExchangeRates;
  base: string;
  date: string;
}
