import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

recaptcha:any[];
  resolved(captchaResponse:any[]){
    this.recaptcha=captchaResponse;
    console.log(this.recaptcha);
    
  }

}
