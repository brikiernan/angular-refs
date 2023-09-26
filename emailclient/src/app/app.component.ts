import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from 'auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SigninComponent,
    SignupComponent,
    RouterModule,
  ],

  template: `
    <div class="ui container">
      <div class="ui secondary pointing menu">
        <a routerLink="/" class="item">Angular Email</a>

        <div class="right menu">
          <ng-container *ngIf="authenticated$ | async; else unauthenticated">
            <a class="ui item" routerLink="/inbox" routerLinkActive="active"
              >Inbox</a
            >
            <a class="ui item" routerLink="/signout" routerLinkActive="active"
              >Sign Out</a
            >
          </ng-container>
          <ng-template #unauthenticated>
            <a
              class="ui item"
              routerLink="/"
              [routerLinkActiveOptions]="{ exact: true }"
              routerLinkActive="active"
              >Sign In</a
            >
            <a class="ui item" routerLink="/signup" routerLinkActive="active"
              >Sign Up</a
            >
          </ng-template>
        </div>
      </div>

      <router-outlet />
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  authenticated$: BehaviorSubject<boolean | null>;

  constructor(private auth: AuthService) {
    this.authenticated$ = this.auth.authenticated$;
  }

  ngOnInit() {
    this.auth.checkAuth().subscribe();
  }
}
