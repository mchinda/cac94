import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import {RolesService} from "./roles.service";
import { BaseController } from "./../../com/base.controller";

@Controller('role')
export class RolesController extends BaseController {

  constructor(private readonly roleService: RolesService) {
    super(roleService);
  }

}
