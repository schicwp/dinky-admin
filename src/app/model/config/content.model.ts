
export interface Content {
  id:string
  type:string,
  version:number
  created:Date
  modified:Date
  workflow:string
  state:string
  owner:string
  modifiedBy:string
  createdBy:string
  assignedUser:string
  assignedGroup:string
  searchVersions:{[a:string]:number}
  permissions
  content:any
}
