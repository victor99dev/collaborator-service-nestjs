import { Contact } from 'src/domain/value-objects';

export class GetContactViewModel {
  static toHttp(address: Contact) {
    return {
      email: address.email,
      telephone: address.telephone,
      social_network: address.socialNetwork,
    };
  }
}
