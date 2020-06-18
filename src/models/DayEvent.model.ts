import { TypeOfEvent } from "./enums/TypeOfEvent.enum";

export class DayEvent {
  type: TypeOfEvent = TypeOfEvent.TODO;
  label: string = "";
  done: boolean = false;
}
