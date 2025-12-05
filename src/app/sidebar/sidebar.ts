import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  @Input() moduleName: string = "";
  username: string = "";

  constructor(private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.username = this.cookieService.get("userId");
  }

  toggleMenu(event: Event) {
    event.preventDefault();
    const parent = (event.currentTarget as HTMLElement).closest('.nav-item');
    parent?.classList.toggle('menu-open');
  }
}
