import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './Core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ytms-cli';
  constructor() {
    
  }

}
