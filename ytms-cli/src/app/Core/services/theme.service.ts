import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'light'; // Default theme
  private themes: string[] = ['light', 'dark'];

  constructor() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && this.themes.includes(savedTheme)) {
      this.setTheme(savedTheme);
    }
  }

  getThemes(): string[] {
    return this.themes;
  }

  setTheme(theme: string): void {
    // Remove existing theme classes from body
    document.body.classList.remove(`theme-${this.currentTheme}`);

    // Add new theme class to body
    document.body.classList.add(`theme-${theme}`);

    this.currentTheme = theme; // Update current theme

    // Save the selected theme in local storage
    localStorage.setItem('selectedTheme', theme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }
}
