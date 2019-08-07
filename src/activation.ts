import {UI} from 'ui';

/**
 * Represents an activation machine that, when given an Activation Card, gives out a Voxel Card.
 */
export class ActivationMachine {
  
  public ui: UI;
  public entity: Entity;
  
  constructor(transf: Transform, ui: UI) {
    
    this.ui = ui;
    this.entity = new Entity();
    this.entity.addComponent(transf);
    this.entity.addComponent(new GLTFShape("Models/machine2_v5.gltf"));
    
    let col = new Material();
    col.albedoColor = Color3.Blue();
    this.entity.addComponent(col);
    
    engine.addEntity(this.entity);
    
    let button = new Entity();
    button.addComponent(new Transform({
      position: new Vector3(0.3, -0.1, -0.1)
    }));
    button.addComponent(new GLTFShape("Models/machine_button_v2.gltf"));
    button.setParent(this.entity);
    
    button.addComponent(new OnClick(() => {
      this.activate();
    }));
  }
  
  public activate() {
    this.ui.addMessage('Activation machine clicked!');
  }
}
