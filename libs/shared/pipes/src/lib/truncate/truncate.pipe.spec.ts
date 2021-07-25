import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();
  const strBeforeTransform = 'I must explain to you how all this mistaken idea';
  const strAfterTransform = 'I must explain to you...';

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return a truncate string', () => {
    expect(pipe.transform(strBeforeTransform)).toBe(strAfterTransform);
  });

  it('should truncate the string to a certain length', () => {
    expect(pipe.transform(strBeforeTransform).length).toBe(24);
  });

  it('should truncate the string to a certain length with disabled complete words and empty ellipsis', () => {
    expect(pipe.transform(strBeforeTransform, 25, false, '').length).toBe(25);
  });
});
