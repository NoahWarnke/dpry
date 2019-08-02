import {InventoryItem} from 'inventoryitem';

export class ActivationCard extends InventoryItem {
  
  public suit: number;
  public suitName: string;
  
  public static suitNames: string[] = [
    "heart",
    "club",
    "spade",
    "diamond"
  ];
  constructor(suit: number) {
    super("textures/" + ActivationCard.suitNames[suit] + ".png");
    this.suit = suit;
    this.suitName = ActivationCard.suitNames[suit];
  }
  
  public static generate() {
     return new ActivationCard(Math.floor(Math.random() * 4))
  }
}
