import { Component } from '@angular/core';
import { Banner } from "../../shared/components/banner/banner";
import { EmCartaz } from "../../shared/components/em-cartaz/em-cartaz";

@Component({
  selector: 'app-home',
  imports: [Banner, EmCartaz],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
