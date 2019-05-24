import { Content } from 'src/app/app.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epsi-materia-item',
  templateUrl: './materia-item.component.html',
  styleUrls: ['./materia-item.component.scss']
})
export class MateriaItemComponent implements OnInit {

  @Input() public materia: Content;

  constructor() { }

  ngOnInit() {
  }

}
