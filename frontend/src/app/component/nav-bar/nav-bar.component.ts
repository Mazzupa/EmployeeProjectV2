import {Component, Input, OnInit} from '@angular/core';
import {EmployeeDTO} from '../../model/EmployeeDTO';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()
  user: EmployeeDTO;

  ngOnInit() {
  }
}
