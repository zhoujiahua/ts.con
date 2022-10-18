import { Info } from "@/interfaces/Home";

export class Person {
  uname: string;
  age: number;
  sex: string;
  public constructor(uname: string, age: number, sex: string) {
    this.uname = uname;
    this.sex = sex;
    this.age = age;
  }
  public greeter() {
    return { uname: this.uname, age: this.age, sex: this.sex };
  }
}

export class Student extends Person {
  private money: number = 0;
  public constructor(uname: string, age: number, sex: string) {
    super(uname, age, sex);
  }

  public getMoney(): number {
    return this.money;
  }

  public setMoney(money: number): void {
    this.money = money;
  }

  public getInfo(): Info {
    return {
      uname: this.uname,
      age: this.age,
      sex: this.sex,
      money: this.money,
    };
  }
}
