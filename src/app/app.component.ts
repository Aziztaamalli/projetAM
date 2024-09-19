import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { HomeComponent } from "./home/home.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
