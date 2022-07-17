export class User {
  id: string;
  name: string;
  password: string;
  roll: string;

  constructor(id: string, password: string, name?: string, roll?: string){
    this.id = id;
    this.password = password;
    this.name = name;
    this.roll = roll;
  };
}