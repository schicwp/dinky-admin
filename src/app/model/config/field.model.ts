
export interface Field{

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
  type:string;
  required:boolean;
  indexed:boolean;
  config:any;



}
