import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs';

export interface MathForm {
  val1: number;
  val2: number;
  answer: string;
}

@Directive({
  selector: '[appAnswerHighlight]',
  standalone: true,
})
export class AnswerHighlightDirective {
  constructor(
    private ref: ElementRef<HTMLInputElement>,
    private controlName: NgControl
  ) {}

  ngOnInit() {
    this.controlName.control?.parent?.valueChanges
      .pipe(
        map<MathForm, number>(({ answer, val1, val2 }) => {
          return Math.abs((val1 + val2 - parseInt(answer)) / (val1 + val2));
        })
      )
      .subscribe((value) => {
        if (value < 0.2) {
          this.ref.nativeElement.classList.add('close');
        } else {
          this.ref.nativeElement.classList.remove('close');
        }
      });
  }
}
