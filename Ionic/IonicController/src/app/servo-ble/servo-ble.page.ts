import { Component, OnInit, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
;

@Component({
  selector: 'app-servo-ble',
  templateUrl: './servo-ble.page.html',
  styleUrls: ['./servo-ble.page.scss'],
})
export class ServoBlePage implements OnInit {

  devices: any[] = [];
  statusMessage: string = '';

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private ble: BLE,
    private ngZone: NgZone
  ) { }
  
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
    this.scan();
  }
  
  scan(){
    this.setStatus('Scanning for Bluetooth LE Devices')
    this.devices = [];
    this.ble.scan([], 2000).subscribe({
      next: (device) => this.onDeviceDiscovered(device),
      error: (error) => this.scanError(error)
    });
  }//end of scan

  onDeviceDiscovered(device: any){
    console.log('Discovered ' + JSON.stringify(device));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }//end of onDeviceDiscovered

  scanError(error: any) {
    this.setStatus('Error ' + error);
    var toast = this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low eneregy devices',
      position: 'middle',
      duration: 5000
    });
  }//end of scanError

  setStatus(message: string) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    })
  }//end of setStatus

  startControl(device: any)
  {
    console.log("selected device");
    this.navCtrl.navigateForward(['servo-controller', device]);
  }

  ngOnInit() {
  }//end of ngOnInit

}//end of servoBLEPage
