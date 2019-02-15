

export enum SortDirection{
  ASC = "ASC",
  DESC = "DESC"
}

export class Sort{
  public constructor(
  public field:string,
  public direction:SortDirection
  ){}

  public toString = () : string => {
    return `${this.field},${this.direction}`;
  }

  public asc():boolean{
    return this.direction == SortDirection.ASC;
  }

  public desc():boolean{
    return this.direction == SortDirection.DESC;
  }
}
