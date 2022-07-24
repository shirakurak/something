export class User {
  id: string;
  name: string;
  password: string;
  address: string;
  roll: string;

  constructor(id: string, password: string, name?: string, address?: string, roll?: string){
    this.id = id;
    this.password = password;
    this.name = name;
    this.address = address;
    this.roll = roll;
  }

}