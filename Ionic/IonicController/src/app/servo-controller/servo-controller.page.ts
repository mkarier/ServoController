import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';


@Component({
  selector: 'app-servo-controller',
  templateUrl: './servo-controller.page.html',
  styleUrls: ['./servo-controller.page.scss'],
})
export class ServoControllerPage implements OnInit {

  static SERVICE_UUID: string = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
  static CHARACTERISTIC_UUID: string = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
  periperal: any = {};
  statusMessage: string = '';
  position: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private ble: BLE,
    private toastCtrl: ToastController,
    private ngZone: NgZone) { 
      let device = navParams.get('device');
      this.setStatus('Connecting to ' + device.name || device.id);
      this.ble.connect(device.id).subscribe(
        peripheral => this.onConnect(peripheral),
        peripheral => this.onDeviceDisconnected(peripheral)
      );

    }//end of constructor

  onConnect(peripheral: any)
  {
    this.ngZone.run(() => {
      this.setStatus('');
      this.periperal = peripheral;
      this.ble.read(this.periperal.id, ServoControllerPage.SERVICE_UUID, ServoControllerPage.CHARACTERISTIC_UUID ).then(
        buffer => {
          let data = new Uint8Array(buffer);
          console.log('read in : ' + data[0]);
        }//end of buffer
      )//end of then
    });//end of ngZone.run
  }//end of onConnect

  onDeviceDisconnected(peripheral: any) {
    let toast = this.toastCtrl.create({
      message: 'The ' + this.periperal.name + ' unexpectedly disconnected',
      duration: 3000,
      position: 'middle'
    });
  }//end of onDeviceDiconnected

  setStatus(message: string){
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }//end of setStatus


  increasePosition(){
    var data = new Uint8Array(1);
    data[0] = this.position++ % 180;
    this.ble.write(this.periperal.id, ServoControllerPage.SERVICE_UUID, ServoControllerPage.CHARACTERISTIC_UUID, data);
  }//end of increasePosition

  decreasePosition(){
    if(this.position > 0)
    {
      var data = new Uint8Array(1);
      data[0] = this.position--;
      this.ble.write(this.periperal.id, ServoControllerPage.SERVICE_UUID, ServoControllerPage.CHARACTERISTIC_UUID, data);
    }//end of if
  }//end of decreasePosition

  ngOnInit() {
  }

}//end of class
