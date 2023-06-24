import { Component, OnInit, Input } from '@angular/core';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
  isSideNavCollapsed = false;
  screenWidth = 0;

  // onToggleSideNav(data: SideNavToggle): void {
  //   this.screenWidth = data.screenWidth;
  //   this.isSideNavCollapsed = data.collapsed;
  // }
  // @Input() collapsed = false;
  // // @Input() screenWidth = 0;



  getBodyClass(): string {
    let styleClass = '';
    if(this.isSideNavCollapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.isSideNavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

   onToggleSideNav(data: SideNavToggle): void {
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
   }
  ngOnInit(): void {
  }

}
