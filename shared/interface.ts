export interface Store{
  id:number,
  name:string,
  description:string,
  image:string,
  thumb:string,
  url?:string,
}

export interface StoreModal extends Store{
  open:boolean 
}
