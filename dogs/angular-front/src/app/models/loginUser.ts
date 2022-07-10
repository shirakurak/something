export class LoginUser {
  id: string;
  name: string;
  password: string;

  constructor(id: string, password: string, name?: string){
    this.id = id;
    this.password = password;
    this.name = name;
  };
}