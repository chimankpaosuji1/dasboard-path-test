import { Component, OnInit } from '@angular/core';
import {
  faLocation,
  faSearch,
  faBoxes,
  faMoneyBill,
  faBriefcase,
  faCircleXmark,
  faGreaterThan,
  faLessThan,
  faFloppyDisk,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent implements OnInit {

  faSearch = faSearch;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faBriefcase = faBriefcase;
  faCircleXmark = faCircleXmark;
   faGreaterThan = faGreaterThan;
   faLessThan = faLessThan;
   faFloppyDisk = faFloppyDisk;
   faFilter = faFilter;
  constructor() { }

  ngOnInit(): void {
  }

}
