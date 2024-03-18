import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {GeheimschriftService} from "./geheimschrift.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  nachricht = '';

  ueberschrift = 'Geheimschrift='
  unter = '';
  antwort = '';

  constructor(private readonly geheimschriftService: GeheimschriftService) {
  }

  ngOnInit(): void {
        this.unter = this.geheimschriftService.zuGeheimschrift(this.ueberschrift.substring(0, this.ueberschrift.length - 2));
  }

  nachrichtEingegeben(text: string): void {
    this.nachricht = this.geheimschriftService.zuGeheimschrift(text);
  }

  antwortEingegeben(text: string): void {
    this.antwort = this.geheimschriftService.vonGeheimschrift(text);
  }


}
