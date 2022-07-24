export class Dog {
  id: string;
  name: string;
  age: string;
  kind: string;
  sex: string;
  image: string;

  constructor(id: string, name: string, age: string, kind: string, sex: string, image: string){
    this.id = id;
    this.name = name;
    this.age = age;
    this.kind = kind;
    this.sex = sex;
    this.image = image;
  };
}