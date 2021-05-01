import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([ Breakpoints.XSmall ])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
  }

}

