export class Bird {
  public sing(): void {
    process.stdout.write('tweet tweet\n');
  }
}

export class Dove extends Bird {
  public sing(): void {
    process.stdout.write('whoohoo whohoo\n');
  }
}

export class Robin extends Bird {
  public sing(): void {
    process.stdout.write('wee wee\n');
  }
}

const dove: Dove = new Dove();
dove.sing(); // -> whoohoo whohoo
