import { Component, Input, OnInit } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';








@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, SmallCardComponent, BigCardComponent, MenuBarComponent, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
