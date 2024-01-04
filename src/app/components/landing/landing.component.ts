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
      this.basicCoin = this.coingreekService.getBasicCoins();
      this.coinList = this.coingreekService.coinPagination(1);
      this.isLoading = false;
      this.isError = false;
  }

  navigateToCoin(coin: any) {
    this.router.navigate([`coin/${coin.id}`])
  }

  pageChange(numb: any) {
    this.currentPage = numb;
    this.coinList = this.coingreekService.coinPagination(this.currentPage)
  }
 
  ngOnInit(): void {
   this.setupPage();   
  }

}
