import {UI} from 'ui';

/**
 * Represents an activation machine that, when given an Activation Card, gives out a Voxel Card.
 */
export class ActivationMachine {
  
  public entity: Entity;
  
  constructor(transf: Transform, ui: UI) {
    
    this.entity = new Entity();
    this.entity.addComponent(transf);
    this.entity.addComponent(new GLTFShape("Models/machine1_v3.gltf"));
    
    let col = new Material();
    col.albedoColor = Color3.Blue();
    this.entity.addComponent(col);
    
    this.entity.addComponent(new OnClick(() => {
      ui.addMessage('Activation machine clicked!');
    }));
    
    engine.addEntity(this.entity);
  }
}
