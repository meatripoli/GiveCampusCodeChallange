const assert = require("chai").assert;
const codeObj = require('../functions.js');

describe('repeatedNumbers', function(){
  let msg='should return the longest continuous stretch of a single number';
  let test1 = [1,7,3];
  let test2 = [1,7,7,3,9,9,9,4,9];
  let test3 = [1,7,7,3];
  it('Input 1 '+msg, function(){
    assert.deepEqual(1,codeObj.repeatedNumbers(test1));
  });
  it('Input 2 '+msg, function(){
    assert.deepEqual(3,codeObj.repeatedNumbers(test2));
  });
  it('Input 3 '+msg, function(){
    assert.deepEqual(2,codeObj.repeatedNumbers(test3));
  });
});

describe('findYearRange', function(){
  let msg=' should return the list of year(s) in which the most people were alive at the same time';
  let test1 = [[1900, 1975], [1970, 2000], [1950, 1985], [1900, 1920], [1910, 1920], [1900, 1920], [1915, 1920], [1919, 1925]];
  let test2 = [[1982, 2017], [1923, 2004], [1988, 2015], [1910, 1988], [1990, 2005], [2004, 2010]];
  let test3 = [[1982, 2017], [1982, 2004], [1988, 2004], [1988, 1988], [1990, 2004]];
  let test4 =[[1910, 1950], [1900, 1951], [1945, 2000]];
  it('Input 1 '+msg, function(){
    assert.deepEqual([1919,1920],codeObj.findYearRange(test1));
  });
  it('Input 2 '+msg, function(){
    assert.deepEqual([2004],codeObj.findYearRange(test2));
  });
  it('Input 3 '+msg, function(){
    assert.deepEqual([1988],codeObj.findYearRange(test3));
  });
  it('Input 4 '+msg, function(){
    assert.deepEqual([1945, 1946, 1947, 1948, 1949, 1950],codeObj.findYearRange(test4));
  });
});