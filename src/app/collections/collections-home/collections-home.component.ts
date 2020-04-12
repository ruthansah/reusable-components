import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name: 'James', age: 24, job: 'Designer', employed: false},
    {name: 'Karen', age: 28, job: 'Product Owner', employed: true},
    {name: 'Mikayla', age: 32, job: 'Engineer', employed: true}
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ];  

  constructor() { }

  ngOnInit(): void {
  }

}
