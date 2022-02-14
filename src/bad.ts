export class Dog {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    process.stdout.write('wuff wuff\n');
  }
}

export class Cat {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    process.stdout.write('meow meow\n');
  }
}

const pocky: Cat = new Cat('Pocky');
pocky.makeSound(); // -> meow meow

const toshii: Dog = new Dog('Pocky');
toshii.makeSound(); // -> wuff wuff
