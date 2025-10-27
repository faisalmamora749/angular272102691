import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  @Input() moduleName: string = "";

  toggleMenu(event: Event) {
    event.preventDefault();
    const parent = (event.currentTarget as HTMLElement).closest('.nav-item');
    parent?.classList.toggle('menu-open');
  }
}
