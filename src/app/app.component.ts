import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentTab: string = 'recipe';

  onNavigate(featureName: string) {
    this.currentTab = featureName;
  }
}
