import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CoingreeksService } from 'src/app/services/coingreeks.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  isLoading: boolean = true;

  basicCoin: any;
  
  coinList: any;

  isError: boolean = false;

  currentPage: number = 1;

  constructor(
    private coingreekService: CoingreeksService,
    private router: Router
  ) { }

  private setupPage() {
    forkJoin([
      this.coingreekService.getBasicCoins(),
      this.coingreekService.coinPagination(1)
    ]).subscribe((coins) => {
      this.basicCoin = coins[0];
      this.coinList = coins[1];
      this.isLoading = false;
      this.isError = false;
    }, (error) => {
      this.isLoading = false;
      this.isError = true;
    });
  }

  navigateToCoin(coin: any) {
    this.router.navigate([`coin/${coin.id}`])
  }

  pageChange(numb: any) {
    this.currentPage = numb;
    this.coingreekService.coinPagination(numb).subscribe((coin: any) => {
      this.coinList = coin
    })
  }
 
  ngOnInit(): void {
   this.setupPage();   
  }

}
