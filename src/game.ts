import {VendingMachine} from 'vending';
import {ActivationMachine} from 'activation';
import {Scenery} from 'scenery';
import {UI} from 'ui';

// UI
let ui = new UI();

let vending = new VendingMachine(new Transform({
  position: new Vector3(5, 4.3, 86),
  rotation: Quaternion.Euler(0, 15, 0)
}), ui);

let activation = new ActivationMachine(new Transform({
  position: new Vector3(13, 0, 116),
  rotation: Quaternion.Euler(0, -45, 0)
}), ui);

let scenery = new Scenery();
