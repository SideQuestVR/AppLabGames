import { Component } from '@angular/core';

export interface App{
  name: string;
  apps_id: number;
  users_id: number;
  summary: string;
  image_url: string;
  supports_go: boolean;
  supports_quest: boolean;
  supports_link: boolean;
  supports_other: boolean;
  is_webxr: boolean;
  early_access: boolean;
  created: string;
  updated: string;
  license: string;
  downloads: string;
  sort_rating: string;
  number_of_rating: string;
  num_reviews: number|null;
  is_app_lab: string;
  oculus_url: string;
  external_listing_url: string;
  hot_sort_rating: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AppLab Games';
  apps: App[] = [];
  isEmbed: boolean;
  isLight: boolean;
  constructor() {
    const url = new URL(window.location.href);
    this.isEmbed = !!url.searchParams.get('embed');
    this.isLight = !!url.searchParams.get('light');
    if (this.isEmbed) {
      this.loadApps();
    } else {
      window.location.href = 'https://sidequestvr.com/apps/applab/0/rating';
    }
  }

  async loadApps(): Promise<void> {
    try {
      const resp = await fetch('https://api.sidequestvr.com/v2/apps?limit=500&is_app_lab=true&has_oculus_url=true&sortOn=downloads&descending=true&cache_bust=' + new Date().getTime());
      this.apps = await resp.json();
    } catch (e) {
      alert(e);
    }
  }
}
