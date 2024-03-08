import { Component } from '@angular/core';
import { ThemeService } from 'src/app/Core/services/theme.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  sideNavStatus: boolean = false;
  selectedTheme!: string;
 // themes: string[];
 themes: string[] = ['light', 'dark'];

  constructor(private themeService: ThemeService) {
    const selectedTheme = localStorage.getItem('selectedTheme');
    this.themes = this.themes;
    console.log("this.themes",this.themes);
  }

  applyTheme(): void {
    this.themeService.setTheme(this.selectedTheme);
    // Logic to switch theme based on selectedTheme value
    // You can call your theme service or set CSS variables here
}

}
