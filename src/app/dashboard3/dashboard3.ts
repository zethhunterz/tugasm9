import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';

@Component({
  imports: [RouterModule, Header, Sidebar, Footer],
  selector: 'app-dashboard3',
  styleUrl: './dashboard3.css',
  templateUrl: './dashboard3.html',
})
export class Dashboard3 {}
