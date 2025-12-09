import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['home']);
  }

  goJoinParty() {
    this.router.navigate(['joinparty']);
  }

  goAdmin() {
    this.router.navigate(['admin/add']);
  }

  goContact() {
    this.router.navigate(['contact']);
  }
}
