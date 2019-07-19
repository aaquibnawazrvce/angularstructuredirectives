import { Component, OnInit } from '@angular/core';
import { Role } from '../models/colors';

@Component({
  selector: 'app-switchexample',
  templateUrl: './switchexample.component.html',
  styleUrls: ['./switchexample.component.css']
})
export class SwitchexampleComponent implements OnInit {

  private role: Role;
  constructor() {
    this.role = 'green';
  }

  ngOnInit() {
  }

}
