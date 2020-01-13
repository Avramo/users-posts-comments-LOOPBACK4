import { Entity, model, property } from '@loopback/repository';

@model(
  {
    settings: {
      strict: false,
      mysql: {
        table: 'comments'
      }
    }
  }
)
export class Comments extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @property({
    type: 'number',
    required: true,
  })
  postId: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Comments>) {
    super(data);
  }
}

export interface CommentsRelations {
  // describe navigational properties here
}

export type CommentsWithRelations = Comments & CommentsRelations;
