import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExchangeRatesResponse } from '../../shared';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private httpClient: HttpClient) {}

  getExchangeRates(): Observable<ExchangeRatesResponse> {
    const api = env.exchange.api;
    const base = env.exchange.base;
    return this.httpClient.get<ExchangeRatesResponse>(`${api}?base=${base}`);
  }

  getCurrencies(): Observable<string[]> {
    return this.getExchangeRates().pipe(
      map((exchangeRates) => {
        return Object.keys(exchangeRates.rates);
      })
    );
  }

  getExchangeValue(value: number, currency: string): Observable<number> {
    return this.getExchangeRates().pipe(
      map((exchangeRates) => {
        const currencyValue = exchangeRates.rates[currency];
        return value / currencyValue;
      })
    );
  }
}
