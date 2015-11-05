var music = require('../musicService/music'),
    assert = require('assert');
   
describe('music', function() {
   
   describe('getScale()', function() {
      
      it('should return C D E F G A B C when asked for C', function () {

          assert.equal('C D E F G A B C', music.getScale('C'));
      });
      it('should return E F# G# A B C# D# when asked for E', function () {
         
         assert.equal('E F# G# A B C# D#', music.getScale('E')); 
      });
      it('should return A B C D E F G A when asked for Amin', function () {
          
          assert.equal('A B C D E F G A', music.getScale('Amin'));
      });
      it('should return false when asked for an unknown key', function () {
          assert.equal(undefined, music.getScale('unknown'));
      });
   });
});
