import { Entity, model, property } from '@loopback/repository';

@model(
  {
    settings: {
      strict: false,
      mysql: {
        table: 'posts'
      }
    }
  }
)
export class Posts extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @property({
    type: 'number',
  })
  userId?: number;

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
  title: string;


  constructor(data?: Partial<Posts>) {
    super(data);
  }
}

export interface PostsRelations {
  // describe navigational properties here
}

export type PostsWithRelations = Posts & PostsRelations;
