
export class ContentSubmission {
  public constructor(
  public id:string = null,
  public type:string = null,
  public version:number = null,
  public workflow:string = null,
  public action:string = null,
  public content:any = null,
  ){}
}
