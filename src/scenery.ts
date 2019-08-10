
export class Scenery {
  
  constructor() {
    let gallery = new Entity();
    
    gallery.addComponent(new GLTFShape('Models/gallery_v6.gltf'));
    gallery.addComponent(new Transform({
      position: new Vector3(8, 0, 104),
    }));
    
    engine.addEntity(gallery);
    
    let tower = new Entity();
    
    tower.addComponent(new GLTFShape("Models/Ytower_78m50em.gltf"));
    tower.addComponent(new Transform({
      position: new Vector3(8, 0, 152)
    }));
    
    engine.addEntity(tower);
  }
}
