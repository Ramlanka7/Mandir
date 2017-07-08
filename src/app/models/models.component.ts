import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  goToShippingTab() {
    this.selectedIndex = 1;
  }

  goToBillingTab() {
    this.selectedIndex = 0;
  }

  goToReviewTab() {
    this.selectedIndex = 2;
  }

  placeOrder() {
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
  }

}
