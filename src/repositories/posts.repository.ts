import {DefaultCrudRepository} from '@loopback/repository';
import {Posts, PostsRelations} from '../models';
import {PostsDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostsRepository extends DefaultCrudRepository<
  Posts,
  typeof Posts.prototype.id,
  PostsRelations
> {
  constructor(
    @inject('datasources.postsDB') dataSource: PostsDbDataSource,
  ) {
    super(Posts, dataSource);
  }
}
