import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { coinStruct } from '../model/coingreek.model';
import { basicCoin, coinLink } from '../model/fixture'

@Injectable({
  providedIn: 'root'
})
export class CoingreeksService {

  constructor(
    private apiService: ApiService
  ) { }

  getBasicCoins(): coinStruct[] {
    return basicCoin
  }

  coinPagination(pageNo: number): coinStruct[] {
    const end = pageNo * 10
    const start = end - 10
    return coinLink.slice(start, end)
  }

}
