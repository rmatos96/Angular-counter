import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero: number=0;

  aumentar(){
    this.numero++
  }

  abaixar(){
    this.numero--
  }
}
