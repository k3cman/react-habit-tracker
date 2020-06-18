import { DayEvent } from "./DayEvent.model";
import { DayEventChore } from "./enums/DayEventChore";

export class WeekDays {
  public label: string = "";
  public date: Date = new Date();
  events: (DayEvent | DayEventChore)[] = [];
}
