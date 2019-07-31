import {UI} from 'ui';


/**
 * Represents a vending machine that gives out Activation Cards.
 */
export class VendingMachine {
  
  public entity: Entity;
  
  constructor(transf: Transform, ui: UI) {
    
    this.entity = new Entity();
    this.entity.addComponent(transf);
    this.entity.addComponent(new GLTFShape("Models/machine2_v3.gltf"));
    
    let col = new Material();
    col.albedoColor = Color3.Red();
    this.entity.addComponent(col);
    
    this.entity.addComponent(new OnClick(() => {
      ui.addMessage('Vending machine clicked!');
    }));
    
    engine.addEntity(this.entity);
  }
}
