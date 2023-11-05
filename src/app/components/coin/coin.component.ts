import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoingreeksService } from 'src/app/services/coingreeks.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  coinDetails: any;

  constructor(
    private router: ActivatedRoute,
    private coingreekService: CoingreeksService
  ) { }

  getTextColor(rate: number): string {
    return rate > 0 ? 'text-success' : 'text-danger'
  }

  ngOnInit(): void {
    const coin = this.router.snapshot.params['coin']
    this.coingreekService.getCoinDetail(coin).subscribe((coins) => {
      this.coinDetails = coins
      console.log("cdc", this.coinDetails)
      console.log('dede', this.coinDetails.price_change_percentage_24h)
    })
  }

}
