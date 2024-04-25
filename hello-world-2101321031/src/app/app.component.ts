import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleParagraphComponent } from './toggle-paragraph/toggle-paragraph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ToggleParagraphComponent],
})
export class AppComponent {
  public personalInformation =
    'Павлин Минков, Студент Софтуерно Инженерство 3ти курс';
  public hobies = 'Гледане на филми, Баскетбол';
  public favoriteCreatorLink = 'https://www.youtube.com/@TomScottGo';
  public personalChannelDescription =
    'Код и кафе - кратки клипове съдържащи последните новини в програмирането всяка сутрин';
  public evaluation = "Youtube Adsense, Sponsors";
}
