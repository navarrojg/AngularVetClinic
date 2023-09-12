import { Medicine } from '../shared/medicine.model';

export class Patient {
  public name: string;
  public age: number;
  public sex: string;
  public description: string;
  public imagePath: string;
  public bloodType: string;
  public medicine: Medicine[];

  constructor(
    name: string,
    age: number,
    sex: string,
    desc: string,
    imagePath: string,
    bloodType: string,
    medicine: Medicine[]
  ) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.description = desc;
    this.imagePath = imagePath;
    this.bloodType = bloodType;
    this.medicine = medicine;
  }
}
