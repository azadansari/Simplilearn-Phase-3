
// this class is responsible to map the json data from backend technology
export class Product {
  constructor(
    public pid:number,
    public pname:string,
    public price:string,
    public url:string){}
}
