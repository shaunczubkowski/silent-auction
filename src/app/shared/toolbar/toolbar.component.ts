import { Component, Input } from '@angular/core';
import { Actions } from './actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() title: string | undefined;
  @Input() color = 'primary';
  @Input() actions: Actions[] | undefined = [];

  constructor() {}
}
