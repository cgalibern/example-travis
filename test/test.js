var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function () {
          it('should return -1 when the value is not present', function () {
                  assert.equal(-1, [1,2,3].indexOf(5));
                  assert.equal(-1, [1,2,3].indexOf(0));
          });
    });
    describe('#length', function () {
          it('should return correct length', function () {
                  assert.equal([1,2,3].length, 3);
                  assert.equal([1,2,3,9].length, 4);
                  assert.equal([].length, 0);
                  assert.equal(["bad length test"].length, 1);
          });
    });});

