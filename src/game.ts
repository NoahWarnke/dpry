import {VendingMachine} from 'vending';
import {ActivationMachine} from 'activation';
import {UI} from 'ui';

// UI
let ui = new UI();

let vending = new VendingMachine(new Transform({
  position: new Vector3(6, 0.5, 8)
}), ui);

let activation = new ActivationMachine(new Transform({
  position: new Vector3(10, 0.5, 8)
}), ui);
