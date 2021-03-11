import { Test, TestingModule } from '@nestjs/testing';
import { EmailConfigController } from './emailconfig.controller';

describe('EmailConfig Controller', () => {
  let controller: EmailConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailConfigController],
    }).compile();

    controller = module.get<EmailConfigController>(EmailConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
