import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import {ConfigMailer} from "./../../config/config.email";
import * as uniqid from 'uniqid';
// import {AutorisationService} from './../autorisation/autorisation.service';
import {BaseService} from "./../../com/base.service";

@Injectable()
export class EmailConfigService {

  constructor(private mailerService:MailerService) {
              // super(mailerService);
  }

  replaceUserPattern(replaceObj:any):string {
    let regexp = new RegExp(replaceObj.replace,'gi');
    return replaceObj.strReplace.replace(regexp,replaceObj.by);
}

async accountIsValidate(body:any){
  let link:any = ConfigMailer.homeLink;
  let mailObject = Object.assign({},ConfigMailer.user_account_validate);
  mailObject.from = this.replaceUserPattern({strReplace : mailObject.from,replace : ConfigMailer.PATTERN.EMAIL,by : ConfigMailer.admin_adress});
  mailObject.to = this.replaceUserPattern({ strReplace : mailObject.to,replace : ConfigMailer.PATTERN.TO,by : body.login});
  mailObject.html = this.replaceUserPattern({strReplace : mailObject.html,replace : ConfigMailer.PATTERN.LINK,by : link});
  await this.mailerService.sendMail(mailObject);
}

/**@Method sendUserEmail()
**Envoie d'email à l'utilisateur pour l'informer de la prise en compte de son inscription.
**/
 async sendUserEmail(body:any) {
  let mailObject = Object.assign({},ConfigMailer.send_user_email);
  mailObject.from = this.replaceUserPattern({strReplace : mailObject.from,replace : ConfigMailer.PATTERN.EMAIL,by : ConfigMailer.admin_adress});
  mailObject.to = this.replaceUserPattern({ strReplace : mailObject.to,replace : ConfigMailer.PATTERN.TO,by : body.login});
  //envoie un email à l'admin
  this.sendAdminEmail(body);
  await this.mailerService.sendMail(mailObject);
  }

  /**@Method sendAdminEmail()
  **Envoie d'email à l'administrteur pour l'informer de l'attente d'une validation d'une inscription
  **/
  async sendAdminEmail(body:any) {
    let mailObject = Object.assign({},ConfigMailer.send_admin_email);
    mailObject.from = this.replaceUserPattern({strReplace : mailObject.from,replace : ConfigMailer.PATTERN.EMAIL,by : ConfigMailer.admin_adress});
    mailObject.to = this.replaceUserPattern({ strReplace : mailObject.to,replace : ConfigMailer.PATTERN.TO,by : body.admin_adress});
    await this.mailerService.sendMail(mailObject);
   }

/**@Method fogotPassword()
** Envoie un mail à l'utilisateur pour qu'il reinitialise son mot de passe.
**@Param body.password
**/
 async fogotPassword(body:any) {
   let obj:any={};
    let mailObject = Object.assign({},ConfigMailer.email_user_fogot_pass);
    let link:any = ConfigMailer.forgoPassLink;
    //GENERER LE UNIQ KEY
    let uniq_key = uniqid();
    mailObject.from = this.replaceUserPattern({strReplace : mailObject.from,replace : ConfigMailer.PATTERN.EMAIL,by : ConfigMailer.admin_adress});
    mailObject.to = this.replaceUserPattern({ strReplace : mailObject.to,replace : ConfigMailer.PATTERN.TO,by : body.login});
    link = this.replaceUserPattern({strReplace:link,replace :ConfigMailer.PATTERN.ID, by : body.id});
    link = this.replaceUserPattern({strReplace:link,replace :ConfigMailer.PATTERN.KEY,by : uniq_key });
    mailObject.html = this.replaceUserPattern({strReplace : mailObject.html,replace : ConfigMailer.PATTERN.LINK,by : link});
    //this.autorisationService.addAtorisation(body.id, uniq_key);
   let mailSender = await this.mailerService.sendMail(mailObject);
   obj = Object.assign({},{mailSender:mailSender.accepted[0],uniq_key:uniq_key,idUser:body.id});
   return obj;
  }

}
