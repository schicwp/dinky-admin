

import {State} from "./state.model";
import {Action} from "./action.model";
export interface Workflow{

  name:string;
  states:State[]
  actions:Action[]


}
