import { User } from './../../app.models';
import { Content } from 'src/app/app.models';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-materia-item',
  templateUrl: './materia-item.component.html',
  styleUrls: ['./materia-item.component.scss']
})
export class MateriaItemComponent implements OnInit {

  @Input() public materia: Content;
  @Input() public locked = true;

  @Input()
  public set user(user: User) {

    if (!user) { return; }
    if (!this.materia.roles || this.materia.roles.length <= 0) {
      this.locked = false;
      return;
    }

    for (const role of this.materia.roles) {
      if (user[role]) { this.locked = false; }
    }

  }

  @Input() public model: string;

  constructor(
    public router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  openMateria() {

    if (this.locked) {

      if (!this.materia.model_slug) {
        this.toastr.error('No existe una compra configurada para el contenido. Contacta con un administrador.');
      } else {
        this.router.navigate(['/pagar', this.materia.model_slug]);
      }

    } else {
      this.router.navigate(['/curso', this.materia.id]);
    }

  }

}
