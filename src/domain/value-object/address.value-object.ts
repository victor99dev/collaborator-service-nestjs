export interface AddressProps {
  streetAddress: string;
  number: string;
  city: string;
  state: string;
  country: string;
}

export class Address {
  private props: AddressProps;

  constructor(props: AddressProps) {
    this.props = { ...props };
  }

  public get streetAddress(): string {
    return this.props.streetAddress;
  }
  public set streetAddress(streetAddress: string) {
    this.props.streetAddress = streetAddress;
  }

  public get number(): string {
    return this.props.number;
  }
  public set number(number: string) {
    this.props.number = number;
  }

  public get city(): string {
    return this.props.city;
  }
  public set city(city: string) {
    this.props.city = city;
  }

  public get state(): string {
    return this.props.state;
  }
  public set state(state: string) {
    this.props.state = state;
  }

  public get country(): string {
    return this.props.country;
  }
  public set country(country: string) {
    this.props.country = country;
  }
}
