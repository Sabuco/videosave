import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public pageTitle: string;

  constructor() {
    this.pageTitle = "Identificate";
  }

  ngOnInit(): void {
  }

}
