import 'jsdom-global/register';
import expect from 'expect';
import sinon from 'sinon';

import binding from '../src';
describe(`binding`, () => {

  it(`binds namespace to any value`, () => {
    const object = binding('list.index', 1234);
    expect(object.list.index).toEqual(1234);
  });

  it('binds namespace and attach to global object', () => {
      const globalObject= {};
      binding('list.index', 1234, globalObject);
      expect(globalObject.list.index).toEqual(1234);
  })

})
