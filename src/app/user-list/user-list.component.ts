import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

teamMates: Array<string>;

  constructor() { 
    this.teamMates = ['Nat', 'Li', 'Sexy man beast creature', 'D-money', 'Paul'];
  }

  ngOnInit() {
  }

}
