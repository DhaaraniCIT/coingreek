import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoingreeksService } from 'src/app/services/coingreeks.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  @Output() selectedCoin = new EventEmitter();

  @Output() pageNumber = new EventEmitter();

  @Input() coinList: any;

  constructor() { }

  coinLink(coin:any) {
    this.selectedCoin.emit(coin); 
  }

  pageChange(i: number) {
    this.pageNumber.emit(i)
  }

  ngOnInit(): void {
  }

}

