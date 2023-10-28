import { Component, OnInit,  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-insertneworder',
  templateUrl: './insertneworder.component.html',
  styleUrls: ['./insertneworder.component.css'],
})
export class InsertneworderComponent implements OnInit {
  dateValue = new FormControl();
  
  myControl = new FormControl('');
  options: string[] = ['فنجون', 'قهوه خوری', 'تک'];
  color: string[] = ['قرمز', 'آبی', 'زرد'];
  filteredOptions: Observable<string[]> | undefined;
  filteredColor: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter()),
    );

    
  }

  private _filter(): string[] {
    return this.options || this.color  
  }

  keyNumber(event : KeyboardEvent){
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)){
      event.preventDefault();
    }
  }
  
  keyWord(event:KeyboardEvent){
    const letter = /[^a-zA-Zآ-ی]/g
    const inputChar = String.fromCharCode(event.charCode);
    if (letter.test(inputChar)){
      event.preventDefault();
    }
  }
}
