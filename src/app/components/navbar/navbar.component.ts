import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../../shared/menu/menu-items";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { ROUTESUSER } from '../../shared/menu/menu-items';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { User } from 'src/app/shared/services/users/users.model';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

var misc: any = {
  sidebar_mini_active: true
};

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

  focus;
  listTitles: any[];
  location: Location;
  public menuItems: any[];
  public isCollapsed = true;
  public menu;

  sidenavOpen: boolean = true;

  // Data
  user: User

  // Image
  imgAvatar = 'assets/img/default/avatar.png'

  constructor(
    location: Location,
    private userService: UsersService,
    private jwtService: JwtService,
    private notifyService: NotifyService,
    private element: ElementRef,
    private router: Router,
    private authService: AuthService,
  ) {
    this.user = this.userService.user
    this.location = location;
    this.router.events.subscribe((event: Event) => {
       if (event instanceof NavigationStart) {
           // Show loading indicator

       }
       if (event instanceof NavigationEnd) {
           // Hide loading indicator

           if (window.innerWidth < 1200) {
             document.body.classList.remove("g-sidenav-pinned");
             document.body.classList.add("g-sidenav-hidden");
             this.sidenavOpen = false;
           }
       }

       if (event instanceof NavigationError) {
           // Hide loading indicator

           // Present error to user
           console.log(event.error);
       }
   });

  }

  ngOnInit() {
    if (this.authService.userRole == 1) {
      this.menu = ROUTES
    }
    else if (this.authService.userRole == 2) {
      this.menu = ROUTESUSER
    }
    this.menuItems = this.menu.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }

  navigatePage(path: String) {
    if (path == 'notifications') {
      return this.router.navigate(['/global/notifications'])
    }
    else if (path == 'profile') {
      return this.router.navigate(['/global/profile'])
    }
    else if (path == 'settings') {
      return this.router.navigate(['/global/settings'])
    }
    else if (path == 'home') {
      return this.router.navigate(['/auth/login'])
    }
  }

  successMessage() {
    let title = 'Success'
    let message = 'Loging in right now'
    this.notifyService.openToastr(title, message)
  }

  logout() {
    this.jwtService.destroyToken()
    this.navigatePage('home')
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function() {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }

  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }

  openSidebar() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }

  toggleSidenav() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }

  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
