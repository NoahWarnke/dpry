import {UI} from 'ui';
import {ActivationCard} from 'activationcard';


/**
 * Represents a vending machine that gives out Activation Cards.
 */
export class VendingMachine {
  
  private ui: UI;
  public entity: Entity;
  
  constructor(transf: Transform, ui: UI) {
    
    this.ui = ui;
    
    this.entity = new Entity();
    this.entity.addComponent(transf);
    this.entity.addComponent(new GLTFShape("Models/machine1_v4.gltf"));
    
    let col = new Material();
    col.albedoColor = Color3.Red();
    this.entity.addComponent(col);
    

    
    engine.addEntity(this.entity);
    
    let button = new Entity();
    button.addComponent(new Transform({
      position: new Vector3(0.3, -0.1, -0.1)
    }));
    button.addComponent(new GLTFShape("Models/machine_button.gltf"));
    button.setParent(this.entity);
    
    button.addComponent(new OnClick(() => {
      this.vend();
    }));
    
  }
  
  public vend() {
    let card = ActivationCard.generate();
    this.ui.addInventoryItem(card);
    this.ui.addMessage('You have been vended a ' + card.suitName + ' card.');
  }
}
