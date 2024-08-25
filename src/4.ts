class Key {
  private readonly signature: number

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected readonly tenants: Person[] = [];
  protected door: boolean;

  protected constructor(public key: Key) {}

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log('The person is coming in...');
    } else {
      console.log('The door is closed');
    }
  }

  public openDoor(key: number) {}
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: number) {
    if (key === this.key.getSignature()) {
      this.door = true;
      console.log('The door is opened');
    } else {
      console.log('Wrong key');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};