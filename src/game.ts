import {VendingMachine} from 'vending';
import {ActivationMachine} from 'activation';
import {Scenery} from 'scenery';
import {UI} from 'ui';
import {UserData} from 'userdata';

import * as EthereumController from "@decentraland/EthereumController";

// Define a wrapper function for all game setup. This lets us do async stuff inside it.
async function setup() {
  
  let userState: {[index: string]: UserData} = {};
  let address = undefined;
  
  // Add user's eth ID to userState array.
  // Currently not multiplayer,so just one user.
  try {
    address = await EthereumController.getUserAccount()
    log (address);
    userState[address] = new UserData;
  } catch (error) {
    log(error.toString());
  }
  
  // UI
  let ui = new UI(userState, address);

  // Vending machine
  let vending = new VendingMachine(new Transform({
    position: new Vector3(5, 4.3, 86),
    rotation: Quaternion.Euler(0, 15, 0)
  }), ui);

  // Activation machine
  let activation = new ActivationMachine(new Transform({
    position: new Vector3(13, 0, 116),
    rotation: Quaternion.Euler(0, -45, 0)
  }), ui);

  // Scenery (including the gallery)
  let scenery = new Scenery();
}

// Call our wrapper.
setup();
