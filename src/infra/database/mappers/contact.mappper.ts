import { Contact } from 'src/domain/value-objects';
import { Contacts as RawContacts } from '@prisma/client';

export class PrismaContactMapper {
  static toPrisma(contact: Contact) {
    return {
      email: contact.email,
      telephone: contact.telephone,
      social_network: contact.socialNetwork,
    };
  }
  static toDomain(raw: RawContacts): Contact {
    return new Contact({
      email: raw.email,
      telephone: raw.telephone,
      socialNetwork: raw.social_network,
    });
  }
}
