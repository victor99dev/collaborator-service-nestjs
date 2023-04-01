import { Address } from 'src/domain/value-objects';

export class GetAddressViewModel {
  static toHttp(address: Address) {
    return {
      street_address: address.streetAddress,
      number: address.number,
      city: address.city,
      state: address.state,
      country: address.country,
    };
  }
}
