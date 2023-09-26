import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from 'auth/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: '',
  styles: [],
})
export class SignoutComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.signout().subscribe(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }
}
