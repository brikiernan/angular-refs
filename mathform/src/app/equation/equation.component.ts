import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { delay, filter, scan } from 'rxjs';

import { MathValidator } from '../math-validator';
import { AnswerHighlightDirective } from '../answer-highlight.directive';

@Component({
  selector: 'app-equation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AnswerHighlightDirective],
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent {
  average = 0;

  form = new FormGroup(
    {
      val1: new FormControl(this.randomNum()),
      val2: new FormControl(this.randomNum()),
      answer: new FormControl(''),
    },
    [MathValidator.add('val1', 'val2', 'answer')]
  );

  get val1() {
    return this.form.value.val1;
  }

  get val2() {
    return this.form.value.val2;
  }

  ngOnInit() {
    this.form.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(200),
        scan((acc) => ({ solved: acc.solved + 1, start: acc.start }), {
          solved: 0,
          start: new Date(),
        })
      )
      .subscribe(({ solved, start }) => {
        this.average = (new Date().getTime() - start.getTime()) / solved / 1000;

        this.form.setValue({
          answer: '',
          val1: this.randomNum(),
          val2: this.randomNum(),
        });
      });
  }

  randomNum() {
    return Math.floor(Math.random() * 10);
  }
}
