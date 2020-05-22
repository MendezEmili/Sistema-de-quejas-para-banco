import { Component, OnInit } from '@angular/core';

export interface FormModel {
  captcha?: string;
}


@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css'],

  
  styles: [`
  .error { color: crimson; }
  .success { color: green; }
` ]
})
export class RecaptchaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formModel: FormModel = {};
}
