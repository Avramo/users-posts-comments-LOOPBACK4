import {DefaultCrudRepository} from '@loopback/repository';
import {Users, UsersRelations} from '../models';
import {UsersPostsCommentsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {
  constructor(
    @inject('datasources.users_posts_comments') dataSource: UsersPostsCommentsDataSource,
  ) {
    super(Users, dataSource);
  }
}
