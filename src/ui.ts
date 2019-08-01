
/**
 * All the UI elements for the scene.
 */
export class UI {
  
  messages: String[];
  
  stack: UIContainerStack;
  
  constructor() {
    
    this.messages = [];
    
    // Create screenspace component
    const canvas = new UICanvas();
    
    let sidebar = new UIContainerRect(canvas);
    sidebar.adaptWidth = false;
    sidebar.adaptHeight = false;
    sidebar.width = '22%';
    sidebar.hAlign = 'right';
    sidebar.vAlign = 'bottom';
    sidebar.height = '70%';
    sidebar.color = Color4.Black();


    
    let messageArea = new UIScrollRect(sidebar);
    messageArea.width = '100%';
    messageArea.height = '50%';
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
    
    
    let inventory = new UIScrollRect(sidebar);
    inventory.width = '100%';
    inventory.height = '50%';
    inventory.vAlign = 'bottom';
    inventory.hAlign = 'left';
    //inventory.backgroundColor = Color4.Gray();
    inventory.isVertical = true;
        
  
    this.addMessage("Welcome to the Democratic People's Republic of Yapetey!");
  }
  
  public addMessage(message: string) {
    this.messages.push(message);
    
    let text = new UIText(this.stack);
    text.value = message;
    text.color = Color4.White();
    text.vAlign = 'top';
    text.hAlign = 'left';
  }
}
