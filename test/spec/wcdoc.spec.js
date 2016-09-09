import assert from 'power-assert';
import * as wcdoc from '../../src/WCDoc';

describe('wcdoc', () => {
  it('should parse all fixtures', done => {
    wcdoc.run({
      src: [__dirname + '/../fixture/*.*'],
      basePath: __dirname
    }).then(function(result) {
      assert.ok(result.length > 0);
      //console.log(result);
      done();
    });
  });
});

