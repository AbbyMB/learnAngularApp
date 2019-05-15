import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
      this.title = 'Customers';
      this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => this.people = customers);
      // this.people = [
      //   {id: 1, name: 'Larry Bird', city: 'Boston', orderTotal: 9.99, customerSince: new Date (1986, 3, 3) },
      //   {id: 2, name : 'Magic Johnson', city: 'LA', orderTotal: 12.99, customerSince: new Date (1990, 3, 12) },
      // ];
  }

}
