import { BasicPipeWithMultiParamsPipe } from './basic-pipe-with-multi-params.pipe';

describe('BasicPipeWithMultiParamsPipe', () => {
  it('create an instance', () => {
    const pipe = new BasicPipeWithMultiParamsPipe();
    expect(pipe).toBeTruthy();
  });
});
