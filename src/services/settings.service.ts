export class SettingsService {
  private alternativeBackground = false;

  setAlternativeBackground(alternativeBackground: boolean){
    this.alternativeBackground = alternativeBackground;
  }

  getAlternativeBackground(){
    return this.alternativeBackground;
  }
}