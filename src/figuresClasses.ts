export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('your error message');
    }

    const arrOfSides = [a, b, c];
    const maxSide = Math.max(...arrOfSides);
    const smallerSidesSum = arrOfSides
      .filter((item) => item < maxSide)
      .reduce((acc, currentValue) => acc + currentValue);

    if (maxSide >= smallerSidesSum) {
      throw new Error('your error message');
    }
  }

  public shape = 'triangle';

  public getArea(): number {
    const a = this.a;
    const b = this.b;
    const c = this.c;

    const p = (a + b + c) / 2;

    const area = p * (p - a) * (p - b) * (p - c);

    return Math.trunc(Math.sqrt(area) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('your error message');
    }
  }

  public shape = 'circle';

  public getArea(): number {
    return Math.trunc(Math.PI * Math.pow(this.r, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('your error message');
    }
  }

  public shape = 'rectangle';

  public getArea(): number {
    const a = this.a;
    const b = this.b;

    return Math.trunc(a * b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
