export interface SocialMediaProps {
  name: string;
  url: string;
}

export class SocialMedia {
  private props: SocialMediaProps;

  constructor(props: SocialMediaProps) {
    this.props = { ...props };
  }

  public get name(): string {
    return this.props.name;
  }
  public set name(name: string) {
    this.props.name = name;
  }

  public get url(): string {
    return this.props.url;
  }
  public set url(url: string) {
    this.props.url = url;
  }
}
