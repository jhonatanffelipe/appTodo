import nodemailer, { Transporter } from 'nodemailer';
import { inject, injectable } from 'tsyringe';
import { IMailTemplateProvider } from '../../MailTemplateProvider/models/IMailTemplateProvider';
import { ISendMailDTO } from '../dtos/ISendMailDTO';

import { IMailProvider } from '../models/IMailProvider';

@injectable()
class GoogleMailProvider implements IMailProvider {
  private client: Transporter;
  private pass = process.env.GMAIL_PASSWORD;
  private user = process.env.GMAIL_USER;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: this.user,
        pass: this.pass,
      },
    });
    this.client = transporter;
  }

  async sendMail({ to, from, templateData, subject }: ISendMailDTO): Promise<void> {
    await this.client.sendMail({
      from: {
        name: from?.name || 'Equipe GoBarber',
        address: from?.email || 'equipe@gobarber.com',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });
  }
}

export { GoogleMailProvider };
