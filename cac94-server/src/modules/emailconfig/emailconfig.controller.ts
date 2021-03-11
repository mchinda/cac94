import { Controller, Get,Post,Body,Session,Res } from '@nestjs/common';
import { EmailConfigService } from "./emailconfig.service";

@Controller('/email')
export class EmailConfigController {

  constructor(private readonly emailConfigService: EmailConfigService) {

  }

  @Post('send-user-email')
  sendUserEmail(@Body() body:any) {
    return this.emailConfigService.sendUserEmail(body);
  }

  @Post('forgot-password')
  fogotPassword(@Body() body){
    console.log("forgot-password controller..." + body);
    return this.emailConfigService.fogotPassword(body);
  }
}
