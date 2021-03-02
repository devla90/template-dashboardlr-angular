import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // Definimos temática de imágenes
  styleImage = 'rain';
  form: FormGroup;

  email: string;
    password: string;
    errorMessage: string;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): any {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // ESTA FUNCION ES ACTIVADA POR EL NGSTYLE
  unsplashClass(): any {
    return {
      'min-height': '100%',
      /* LLAMADA RANDOMICA AL SERVICIO DE IMAGENES DE UNSPLASH - CON IMAGENES DE TAMAÑO 1200X900 */
      /*SE LE AÑADE LA VARIABLE DE styleUrls PARA ESTABLECER LA TEMATICA*/
      background: `url("https://source.unsplash.com/random/1200x900?"${this.styleImage}) no-repeat center center`,
      'background-size': 'cover',
      position: 'relative',
    };
  }

  login(event: Event): any {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(`USER: ${value.email} - PASSWORD: ${value.password}`);
      this.router.navigate(["admin"], { replaceUrl: true });
    }
  }

}
