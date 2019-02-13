

import {ActionHook} from "./action-hook.model";
export interface Action{

  /*"name": "PutInBag",
   "entryPoint": true,
   "nextState": "InBag",
   "sourceStates": [],
   "allowedGroups": [],
   "hooks": [
     {
       "name": "AddToSearch",
       "config": {
         "index": "bagindex"
         }
     }
   ]
   },
   */
  name:string;
  entryPoint:boolean;
  nextState:string;
  sourceStates:string[];
  allowedGroups:string[];
  hooks:ActionHook[];



}
