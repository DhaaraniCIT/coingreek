import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoingreeksService } from 'src/app/services/coingreeks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() selectedCoin = new EventEmitter();

  @Input() coinList: any;

  @Input() basicCoin: any;

  constructor() { }

  getTextColor(rate: number): string {
    return rate > 0 ? 'text-success' : 'text-danger'
  }

  coinLink(coin:any) {
    this.selectedCoin.emit(coin); 
  }

  ngOnInit(): void {
  }

}

