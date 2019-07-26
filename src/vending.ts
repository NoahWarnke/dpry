
/**
 * Represents a vending machine that gives out Activation Cards.
 */
export class VendingMachine {
  
  public entity: Entity;
  
  constructor(transf: Transform) {
    
    this.entity = new Entity();
    this.entity.addComponent(transf);
    this.entity.addComponent(new BoxShape());
    
    let col = new Material();
    col.albedoColor = Color3.Red();
    this.entity.addComponent(col);
    
    this.entity.addComponent(new OnClick(() => {
      log('Vending machine clicked!');
    }));
    
    engine.addEntity(this.entity);
  }
}
