import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';

import { NgForm }   from '@angular/forms';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

   heroe: HeroeModel = new HeroeModel();

  constructor() { }

  ngOnInit() {
  }

guardar ( form: NgForm )
{

   console.log(form);
   console.log(this.heroe);

}


}
