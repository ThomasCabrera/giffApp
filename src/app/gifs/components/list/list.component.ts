import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public gifs: Gif[] = [];
}
