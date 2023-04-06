import { Address } from 'src/domain/value-objects';
import { Addresses as RawAdrresses } from '@prisma/client';

export class PrismaAddressMapper {
  static toPrisma(address: Address) {
    return {
      street_address: address.streetAddress,
      number: address.number,
      city: address.city,
      state: address.state,
      country: address.country,
    };
  }

  static toDomain(raw: RawAdrresses): Address {
    return new Address({
      streetAddress: raw.street_address,
      number: raw.number,
      city: raw.city,
      state: raw.state,
      country: raw.country,
    });
  }
}
