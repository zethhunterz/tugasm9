import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';

@Component({
  imports: [RouterModule, Header, Sidebar, Footer],
  selector: 'app-dashboard2',
  styleUrl: './dashboard2.css',
  templateUrl: './dashboard2.html',
})
export class Dashboard2 {}
