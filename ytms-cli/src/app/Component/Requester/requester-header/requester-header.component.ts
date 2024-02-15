import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../../Core/services/auth.service";
import {Router} from "@angular/router";
import {JwtService} from "../../../Core/services/jwt.service";

@Component({
  selector: 'app-requester-header',
  templateUrl: './requester-header.component.html',
  styleUrls: ['./requester-header.component.css']
})
export class RequesterHeaderComponent {

  isLoggedIn = false;
  username: string = '';

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor(public authService: AuthService,
              private jwtService: JwtService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      const token = this.authService.getToken();
      this.username = this.jwtService.getFullNameFromToken(token);
    }
  }

  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout() {
    this.authService.removeToken();
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}