import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
