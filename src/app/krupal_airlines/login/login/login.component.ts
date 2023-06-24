import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  date: Date | undefined;

  onInputChange(inputId: string) {
  const input = document.getElementById(inputId) as HTMLInputElement;
  const label = document.querySelector(`label[for="${inputId}"]`);

  if (input.value.trim() !== '') {
    label?.classList.add('active');
  } else {
    label?.classList.remove('active');
  }
}

isInputFilled(inputId: string): boolean {
  const input = document.getElementById(inputId) as HTMLInputElement;
  return input.value.trim() !== '';
}


  ngOnInit(): void {
  }

}
