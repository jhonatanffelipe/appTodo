import { container } from 'tsyringe';

import { EtherealMailProvider } from './implementations/EtherealMailProvider';
import { GoogleMailProvider } from './implementations/GoogleMailProvider';
import { IMailProvider } from './models/IMailProvider';

const listMailProvider = {
  ethereal: container.resolve(EtherealMailProvider),
  google: container.resolve(GoogleMailProvider),
};

const mailProvider =
  process.env.MAIL_PROVIDER == 'google'
    ? listMailProvider.google
    : listMailProvider.ethereal || listMailProvider.ethereal;

container.registerInstance<IMailProvider>('MailProvider', mailProvider);
