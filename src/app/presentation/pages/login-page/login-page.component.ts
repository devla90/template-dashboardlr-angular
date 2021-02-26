import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public async login(email: string, password: string) {
    try {
        const url = "";
        console.log("email:"+email + " -- password:"+password);
        // this.navigateTo(url);
    } catch (e) {
        this.errorMessage = 'Wrong Credentials!';
        console.error('Unable to Login!\n', e);
    }
}

public navigateTo(url?: string) {
    url = url || 'nav';
    this.router.navigate([url], { replaceUrl: true });
}

}
