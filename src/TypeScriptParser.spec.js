import assert from 'power-assert';
import {parse} from './TypeScriptParser';

describe('TypeScriptParser', () => {
  it('should parse typescript code', () => {
    const code = `/** bbb */
var foo = 123;
/** aaaa */
@hoge()
function aaa() {}
/* foo */
    `;
    const comments = parse(code);
    assert.equal(comments[0].text, '/** bbb */');
    assert.equal(comments[0].start, 0);
    assert.equal(comments[0].end, '/** bbb */'.length);
    assert.equal(comments[1].text, '/** aaaa */');
    assert.equal(comments.length, 2);
  });
});

