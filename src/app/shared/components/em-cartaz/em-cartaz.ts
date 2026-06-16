import { Component, inject, OnInit } from '@angular/core';
import { CardFilme } from '../card-filme/card-filme';
import { Container } from "../container/container";
import { Filme } from '../../../core/model/filme';
import { FilmeService } from '../../../core/services/filme-service';
import { Observable, of  } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-em-cartaz',
  imports: [CardFilme, Container, AsyncPipe],
  templateUrl: './em-cartaz.html',
  styleUrl: './em-cartaz.css',
})
export class EmCartaz implements OnInit {
  
  filmes: Observable<Filme[]> = of([]);

  private filmeService = inject(FilmeService);

  ngOnInit(): void{
    this.filmes = this.filmeService.findCartaz();
  }

}
