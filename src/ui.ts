import {InventoryItem} from 'inventoryitem';
import {UserData} from 'userdata';


/**
 * All the UI elements for the scene.
 */
export class UI {
  

  private userState: {[index: string]: UserData};
  private canvas: UICanvas;
  private messages: String[];
  private stack: UIContainerStack;
  private inventory: UIScrollRect;
  private invenCount: number = 0;
  
  constructor(userState: {[index: string]: UserData}, address: string) {
    
    this.userState = userState;
    this.messages = [];
    
    // Create screenspace component
    this.canvas = new UICanvas();
    
    let sidebar = new UIContainerRect(this.canvas);
    sidebar.adaptWidth = false;
    sidebar.adaptHeight = false;
    sidebar.width = '22%';
    sidebar.hAlign = 'right';
    sidebar.vAlign = 'bottom';
    sidebar.height = '70%';
    sidebar.color = Color4.Black();


    
    let messageArea = new UIScrollRect(sidebar);
    messageArea.width = '100%';
    messageArea.height = '40%';
    messageArea.vAlign = 'top';
    messageArea.hAlign = 'left';
    //messageArea.backgroundColor = Color4.Gray();
    messageArea.isVertical = true;
    
    this.stack = new UIContainerStack(messageArea);
    let stack = this.stack;
    stack.width = '100%';
    stack.hAlign = 'left';
    stack.vAlign = 'top';
    stack.height = '100%';
    //stack.color = Color4.Red();
    stack.stackOrientation = UIStackOrientation.VERTICAL;
    
    
    this.inventory = new UIScrollRect(sidebar);
    this.inventory.width = '100%';
    this.inventory.height = '50%';
    this.inventory.vAlign = 'bottom';
    this.inventory.hAlign = 'left';
    //inventory.backgroundColor = Color4.Gray();
    this.inventory.isVertical = true;
        
  
    this.addMessage("Welcome to the Democratic People's Republic of Yetepey!");
    this.addMessage("Address: " + address);
  }
  
  public addMessage(message: string) {
    this.messages.push(message);
    
    let text = new UIText(this.stack);
    text.value = message;
    text.color = Color4.White();
    text.vAlign = 'top';
    text.hAlign = 'left';
  }
  
  public addInventoryItem(item: InventoryItem) {
    let img = new UIImage(this.inventory, new Texture(item.img));
    img.width = 64;
    img.height = 64;
    img.positionX = ((this.invenCount % 4) * 25) + '%';
    img.vAlign = 'top';
    img.hAlign = 'left';
    this.invenCount++;
  }
}
