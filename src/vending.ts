
export class VendingMachine {
  
  public entity: Entity;
  
  constructor(transf: Transform) {
    
    let this.entity = new Entity();
    this.entity.addComponent(transf);
    this.entity.addComponent(new BoxShape());
    this.entity.addComponent(new OnClick(() => {
      log('Vending machine clicked!');
    }));
    
    engine.addEntity(this.entity);
  }
}
