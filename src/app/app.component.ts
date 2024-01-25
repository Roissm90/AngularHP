import { RequestService } from './services/request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularHP';

  constructor(
    private requestService: RequestService
  ) {}
}
