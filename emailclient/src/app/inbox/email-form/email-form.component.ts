import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputComponent } from 'shared/input/input.component';
import { EmailDetails, SendEmailParams } from 'inbox/email.model';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styles: [],
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup;
  @Input({ required: true }) email!: EmailDetails;
  @Output() data = new EventEmitter<SendEmailParams>();

  ngOnInit(): void {
    const { from, subject, text, to } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) return;
    this.data.emit(this.emailForm.value);
  }
}
