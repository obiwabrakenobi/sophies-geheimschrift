import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeheimschriftService {

  private readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?';
  private readonly geheimalphabet = 'DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc?!';

  constructor() { }

  zuGeheimschrift(text: string): string {
    let geheimesResultat = '';
    for(const c of text) {
      const index = this.alphabet.indexOf(c);
      geheimesResultat += index === -1 ? c : this.geheimalphabet[index];
    }
    return geheimesResultat;
  }

  vonGeheimschrift(text: string): string {
    let result = '';
    for(const c of text) {
      const index = this.geheimalphabet.indexOf(c);
      result += index === -1 ? c : this.alphabet[index];
    }
    return result;
  }
}
