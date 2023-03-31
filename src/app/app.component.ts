import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private tokenStorageService: TokenStorageService,private observer: BreakpointObserver,
            private cd: ChangeDetectorRef) { }
            
  // ngAfterViewInit(): void {
  //   this.sideNav.opened = true;
  //   this.observer.observe(['(max-width:800px)'])
  //   .subscribe(
  //     (res) => {
  //       if(res?.matches) {
  //         this.sideNav.mode = "over";
  //         this.sideNav.close();
  //       }else {
  //         this.sideNav.mode = "side";
  //         this.sideNav.open();
  //       }
  //     }
  //   );
  //   this.cd.detectChanges();
  // }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = user.username;
    }
  }
  public isAdmin() {
    return this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
