import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  imports: [RouterModule, Header,Sidebar, Footer],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
