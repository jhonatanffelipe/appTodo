import { IParseMailTemplateDTO } from '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMaiContactDTO {
  name: string;
  email: string;
}

interface ISendMailDTO {
  to: IMaiContactDTO;
  from?: IMaiContactDTO;
  subject: string;
  templateData: IParseMailTemplateDTO;
}

export { ISendMailDTO };
