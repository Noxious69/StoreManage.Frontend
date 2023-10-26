import { Component,  } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-insertneworder',
  templateUrl: './insertneworder.component.html',
  styleUrls: ['./insertneworder.component.css']
})
export class InsertneworderComponent {
  dateValue = new FormControl();
}
