import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public personalInformation = "Павлин Минков, Студент Софтуерно Инженерство 3ти курс";
  public hobies = "Гледане на филми, Баскетбол";
  public favoriteCreatorLink = "https://www.youtube.com/@TomScottGo";
  public personalChannelDescription = "Код и кафе - кратки клипове съдържащи последните новини в програмирането всяка сутрин";
  public evaluation = 0.10;
}
