export class Enums{  // Класс с необходимыми перечислениями
  static CellStatusEnum = {occupied:"occupied", free:"free"};
  static ShipOrientationEnum = {Horizontal:"Horizontal", Vertical:"Vertical"};
  static BoardOwnerEnum = {player : "player", ai : "ai"};
  static CellHitResultEnum = {damaged : "damaged", miss : "miss"};
  static ShipStatusEnum = {alive : "alive", dead : "dead"};
}