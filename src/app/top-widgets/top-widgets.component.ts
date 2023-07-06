import { Component, OnInit } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent implements OnInit {

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  Table = Table;
  TableBody = TableBody;
  TableCell = TableCell;
  TableContainer = TableContainer;
  TableHead = TableHead;
  TableRow = TableRow;
  Paper = Paper;
  KeyboardArrowDownIcon = KeyboardArrowDownIcon;

    const rows = [  
    {
      id:1,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img: "VM",
      
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon />
      ),
    },
    {
      id:2,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Pending",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:3,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon />
      ),
    },
    {
      id:4,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:5,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Pending",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:6,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Unreconcilled",
      arrow: (
        <KeyboardArrowDownIcon />
      ),
    },
    {
      id:7,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:8,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:9,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:10,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "VM",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    
  ];

 


  constructor() { }

  ngOnInit(): void {
  }

}
