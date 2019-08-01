
export class Scenery {
  
  constructor() {
    
    let gallery = new Entity();
    
    gallery.addComponent(new GLTFShape('Models/gallery_v6.gltf'));
    gallery.addComponent(new Transform({
      position: new Vector3(8, 0, 104),
    }));
    
    engine.addEntity(gallery);
  }
}
