

export interface ActionHook{

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
  config:any;



}
