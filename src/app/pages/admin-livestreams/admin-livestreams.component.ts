import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-livestreams',
  templateUrl: './admin-livestreams.component.html',
  styleUrls: ['./admin-livestreams.component.scss']
})
export class AdminLivestreamsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.LIVESTREAM,
    instructions: `
    <p>Los pasos para iniciar la transmisión en YouTube son los siguientes:<p>
    <ol class="text-left"><li>Haz click en el siguiente enlace, debes de tener iniciada sesión con tu cuenta de Google: <a href="https://www.youtube.com/my_live_events?action_create_live_event=1" target="_blank">YouTube</a></li> <li>Configura los datos de la transmisión como <strong>título</strong>, <strong>fecha y hora</strong> y lo más importante, asegurate de seleccionar el tipo de emisión en
    <strong>"Más rápido"</strong></li> <li>Asegurate de tener la transmisión como <strong>"Oculto"</strong></li> <li>En la sección de <strong>Configuración Avanzada</strong> puedes cambiar más opciones. Cuando estés listo presiona el botón <strong>Emitir en directo ahora</strong></li> <li>YouTube avisará de que está <strong>Todo Listo</strong> para emitir, presiona el botón <strong>Aceptar</strong>, ésto abrirá una ventana con Google Hangouts</li> <li>Espera unos momentos para que la transmisión esté preparada, cuando aparezca el botón <strong>Empezar Emisión</strong> presionalo para comenzar el evento</li> <li>Da click en <strong>Aceptar</strong> en el diálogo de Retransmisión</li> <li>Cuando el estado de la transmisión sea <strong>En Directo</strong>, regresa a la ventana anterior y da click sobre <strong>el título o la imágen</strong> del evento que acabas de crear.
    Ésto abrirá una nueva ventana con la transmisión, copia el link que está en la barra de direcciones. <strong>Éste link será el que tendrás que llenar en la sección de URL</strong></li></ol>
    `,
    fullEdit: true,
    headers: [
      {field: 'title', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
      {field: 'date', type: 'date', label: 'Fecha'},
      {field: 'url', type: 'text', label: 'URL de YouTube'},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
