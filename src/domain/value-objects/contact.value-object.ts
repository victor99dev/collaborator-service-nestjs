export interface ContactProps {
  email: string;
  telephone: string;
  socialNetwork?: string;
}

export class Contact {
  private props: ContactProps;

  constructor(props: ContactProps) {
    this.props = { ...props };
  }

  public get email(): string {
    return this.props.email;
  }
  public set email(email: string) {
    this.props.email = email;
  }

  public get telephone(): string {
    return this.props.telephone;
  }
  public set telephone(telephone: string) {
    this.props.telephone = telephone;
  }

  public get socialNetwork(): string {
    return this.props.socialNetwork;
  }
  public set socialNetwork(socialNetwork: string) {
    this.props.socialNetwork = socialNetwork;
  }
}
