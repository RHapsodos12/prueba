import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  constructor(public alertController: AlertController) { }

  romance(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Romance",
      subHeader: '¡El romance es la sección más seleccionada!',

      buttons: ['OK']
    });
    await alert.present();
  }

  ficcion(){
    this.presentAlert2();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Ficción",
      subHeader: '¡La ficción es una buena elección!',

      buttons: ['OK']
    });
    await alert.present();
  }

  poesia(){
    this.presentAlert3();
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Poesía",
      subHeader: '¡La poesía es muy popular aquí!',

      buttons: ['OK']
    });
    await alert.present();
  }

  comedia(){
    this.presentAlert4();
  }

  async presentAlert4() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Comedia",
      subHeader: '¡Es un buen día para reir!',

      buttons: ['OK']
    });
    await alert.present();
  }

  cuentos(){
    this.presentAlert5();
  }

  async presentAlert5() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Cuentos",
      subHeader: '¡Vayamos a lugares fantásticos!',

      buttons: ['OK']
    });
    await alert.present();
  }

  leyenda(){
    this.presentAlert6();
  }

  async presentAlert6() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Leyenda",
      subHeader: '¡Pasa un buen rato con las leyendas más populares!',

      buttons: ['OK']
    });
    await alert.present();
  }

  fabula(){
    this.presentAlert7();
  }

  async presentAlert7() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Fabula",
      subHeader: '¡Disfruta tu tiempo con las fabulas!',

      buttons: ['OK']
    });
    await alert.present();
  }

  diarios(){
    this.presentAlert8();
  }

  async presentAlert8() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Diarios",
      subHeader: '¡Explora los secretos de los demás!',

      buttons: ['OK']
    });
    await alert.present();
  }

  desamor(){
    this.presentAlert9();
  }

  async presentAlert9() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Desamor",
      subHeader: '¿Listo para un corazón roto?',

      buttons: ['OK']
    });
    await alert.present();
  }

  tragedia(){
    this.presentAlert10();
  }

  async presentAlert10() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Tragedia",
      subHeader: '¡Siente la emoción con nosotros!',

      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
