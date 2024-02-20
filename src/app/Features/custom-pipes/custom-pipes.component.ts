import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent {
  searchTerm = '';

  Employees: any = [
    { ID: 1, firstName: 'John', lastName: 'Smith', Location: 'England' },
    { ID: 2, firstName: 'Kevin', lastName: 'Peter', Location: 'India' },
    { ID: 3, firstName: 'Robert', lastName: 'Jr', Location: 'Russia' },
  ];

  customers: any = [
    {
      id: '1',
      lastName: 'Davolio',
      firstName: 'Nancy',
      address: '507 - 20th Ave. E.Apt. 2A',
      city: 'Seattle',
    },
    {
      id: '2',
      lastName: 'Fuller',
      firstName: 'Andrew',
      address: '908 W. Capital Way',
      city: 'Tacoma',
    },
    {
      id: '3',
      lastName: 'Leverling',
      firstName: 'Janet',
      address: '722 Moss Bay Blvd.',
      city: 'Kirkland',
    },
    {
      id: '4',
      lastName: 'Peacock',
      firstName: 'Margaret',
      address: '4110 Old Redmond Rd.',
      city: 'Redmond',
    },
    {
      id: '5',
      lastName: 'Buchanan',
      firstName: 'Steven',
      address: '14 Garrett Hill',
      city: 'London',
    },
    {
      id: '6',
      lastName: 'Suyama',
      firstName: 'Michael',
      address: 'Coventry House Miner Rd.',
      city: 'London',
    },
    {
      id: '7',
      lastName: 'King',
      firstName: 'Robert',
      address: 'Edgeham Hollow Winchester Way',
      city: 'London',
    },
    {
      id: '8',
      lastName: 'Callahan',
      firstName: 'Laura',
      address: '4726 - 11th Ave. N.E.',
      city: 'Seattle',
    },
    {
      id: '9',
      lastName: 'Dodsworth',
      firstName: 'Anne',
      address: '7 Houndstooth Rd.',
      city: 'London',
    },
  ];
}
