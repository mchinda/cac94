import { UsersEntity } from './users.entity';

describe('Users Entity', () => {
  it('should be defined', () => {
    expect(new Users.Entity()).toBeDefined();
  });
});
