
/**
 * Represents an activation machine that, when given an Activation Card, gives out a Voxel Card.
 */
export class ActivationMachine {
  
  public entity: Entity;
  
  constructor(transf: Transform) {
    
    this.entity = new Entity();
    this.entity.addComponent(transf);
    this.entity.addComponent(new BoxShape());
    
    let col = new Material();
    col.albedoColor = Color3.Blue();
    this.entity.addComponent(col);
    
    this.entity.addComponent(new OnClick(() => {
      log('Activation machine clicked!');
    }));
    
    engine.addEntity(this.entity);
  }
}
