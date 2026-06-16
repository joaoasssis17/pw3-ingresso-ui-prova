import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Filme } from '../../../core/model/filme';

@Component({
  selector: 'app-card-filme',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-filme.html',
  styleUrl: './card-filme.css',
})
export class CardFilme {
  @Input() filme!: Filme;


  exibir() {
    console.log(this.filme)
  }

}
