import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@Angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px`);

  constructor(zone: NgZone, 
    private userService: UserService,
    private router: Router) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  users: Observable<User[]>;
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()){
        this.sidenav.close();
      }
    })
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
