import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lista-suspensa',
  templateUrl: './lista-suspensa.component.html',
  styleUrls: ['./lista-suspensa.component.scss'],
})
export class ListaSuspensaComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {}


  teste(){
    this.router.navigate(['home']);
  }
}
