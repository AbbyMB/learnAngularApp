import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];


  constructor() { }

  ngOnInit() {
      this.title = 'Customers';
      this.people = [
        {id: 1, name: 'larry Bird', city: 'Boston', orderTotal: 9.99, customerSince: new Date (1986, 3, 3) },
        {id: 2, name : 'Magic Johnson', city: 'LA', orderTotal: 12.99, customerSince: new Date (1990, 3, 12) },
        {id: 3, name : 'michael Jordan', city: 'Chicago', orderTotal: 7.99, customerSince: new Date (1992, 3, 12) },
      ];
  }

}
