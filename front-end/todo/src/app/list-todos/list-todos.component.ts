import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'learn to dance'},
    {id: 2, description: 'become a masterdebater'},
    {id: 3, description: 'do something weird'}
  ]

  constructor() { }

  ngOnInit(): void {}
  

}
