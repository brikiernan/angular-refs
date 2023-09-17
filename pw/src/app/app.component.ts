import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  letters = false;
  numbers = false;
  symbols = false;
  password = '';
  length = 0;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeLetters() {
    this.letters = !this.letters;
  }

  onChangeNumbers() {
    this.numbers = !this.numbers;
  }

  onChangeSymbols() {
    this.symbols = !this.symbols;
  }

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.letters) {
      validChars += letters;
    }
    if (this.numbers) {
      validChars += numbers;
    }
    if (this.symbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars.charAt(index);
    }

    this.password = generatedPassword;
  }
}
