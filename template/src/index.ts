class Main {
  name: string;
  constructor(name: string) {
    this.name = name || 'realign';
  }
  public getName(): string {
    return this.name;
  }
}

export default Main;
