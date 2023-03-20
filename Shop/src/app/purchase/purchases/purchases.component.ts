import { Component, OnInit } from '@angular/core';
import { PurchasesService } from '../services/purchases.service';
import { IPurchase } from '../templates/IPurcharse';

@Component({
  selector: 'purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit{

  displayedColumns: string[] = ['id', 'productDescription', 'dateOperation', 'state'];
  purchases!:IPurchase[];
  constructor(private psvc:PurchasesService){

  }
  ngOnInit(): void {
    
    this.psvc.getPurchases(0,0).subscribe(
      res=> {
        this.purchases =  res;
      }
    );
  }


}

