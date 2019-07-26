import {VendingMachine} from 'vending';
import {ActivationMachine} from 'activation';


let vending = new VendingMachine(new Transform({
  position: new Vector3(6, 0.5, 8)
}));

let activation = new ActivationMachine(new Transform({
  position: new Vector3(10, 0.5, 8)
}));
