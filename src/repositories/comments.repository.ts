import {DefaultCrudRepository} from '@loopback/repository';
import {Comments, CommentsRelations} from '../models';
import {CommentsDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CommentsRepository extends DefaultCrudRepository<
  Comments,
  typeof Comments.prototype.id,
  CommentsRelations
> {
  constructor(
    @inject('datasources.commentsDB') dataSource: CommentsDbDataSource,
  ) {
    super(Comments, dataSource);
  }
}
