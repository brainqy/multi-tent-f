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

  getThemeStylesheet(): string {
    return `styles/theme-${this.themeService.getCurrentTheme()}.scss`;
  }

  getBodyClasses(): string {
    return `theme-${this.themeService.getCurrentTheme()}`;
  }
  constructor(private themeService: ThemeService) {
    this.applyTheme();
  }

  private applyTheme(): void {
    const currentTheme = this.themeService.getCurrentTheme();
    document.body.classList.add(`theme-${currentTheme}`);
  }

  switchTheme(theme: string): void {
    this.themeService.setTheme(theme);
    document.body.className = ''; // Remove all existing theme classes
    this.applyTheme(); // Apply the new theme
  }
}
