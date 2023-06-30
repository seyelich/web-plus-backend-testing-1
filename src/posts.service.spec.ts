import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    postsService.create(post);
    expect(postsService.find('2')).toEqual(post)
  });

  it('should find a post', () => {
    expect(postsService.find('1')).toEqual({ text: 'Some pre-existing post' })
  });
});