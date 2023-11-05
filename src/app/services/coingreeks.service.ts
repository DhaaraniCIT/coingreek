import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CoingreeksService {

  constructor(
    private apiService: ApiService
  ) { }

  getBasicCoins() {
    return this.apiService.get(`/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`, {})
  }

  coinPagination(pageNo: number) {
    return this.apiService.get(`/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNo}&sparkline=false`, {})
  }

  getCoinDetail(coin: string) {
    return this.apiService.get(`/${coin}`,{})
  }

}
