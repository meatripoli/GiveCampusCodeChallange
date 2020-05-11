const assert = require("chai").assert;
const codeObj = require('../functions.js');

describe('repeatedNumbers', function(){
  let msg='should return the longest continuous stretch of a single number which is';
  let testObj={
    1: {input:[1,7,3], result:1},
    2: {input:[1,7,7,3,9,9,9,4,9], result:3},
    3: {input:[1,7,7,3], result:2},
    4: {input:[1,7,3,1,7,3,1,7,3], result:1},
    5: {input:[1,1,1,1,1,1,1,1], result:8},
    6: {input:[1], result:1},
    7: {input:[1,1,1,1,1,1,1,2], result:7},
    8: {input:[2,1,1,1,1,1,1,1], result:7},
    9: {input:[1,1,1,1,2,1,1,1], result:4},
    10: {input:[1,1,1,2,1,1,1,1], result:4},
  }
  let testKeys=Object.keys(testObj);
  testKeys.forEach(key=>{
    it(`Input ${key} ${msg} ${testObj[key].result}`, function(){
      assert.deepEqual(testObj[key].result,codeObj.repeatedNumbers(testObj[key].input));
    });
  })
  
});

describe('findYearRange', function(){
  let msg='should return the list of year(s) in which the most people were alive at the same time which is';
  let testObj={
    1: {input:[[1900, 1975], [1970, 2000], [1950, 1985], [1900, 1920], [1910, 1920], [1900, 1920], [1915, 1920], [1919, 1925]], result:[1919,1920]},
    2: {input:[[1982, 2017], [1923, 2004], [1988, 2015], [1910, 1988], [1990, 2005], [2004, 2010]], result:[2004]},
    3: {input:[[1982, 2017], [1982, 2004], [1988, 2004], [1988, 1988], [1990, 2004]], result:[1988]},
    4: {input:[[1910, 1950], [1900, 1951], [1945, 2000]], result:[1945, 1946, 1947, 1948, 1949, 1950]},
    5: {input:[[1845, 1899], [1900, 1940], [1945, 2000]], result:[1845, 1846, 1847, 1848, 1849, 1850, 1851,1852, 1853, 1854, 1855, 1856, 1857, 1858,1859, 1860, 1861, 1862, 1863, 1864, 1865,1866, 1867, 1868, 1869, 1870, 1871, 1872,1873, 1874, 1875, 1876, 1877, 1878, 1879,1880, 1881, 1882, 1883, 1884, 1885, 1886,1887, 1888, 1889, 1890, 1891, 1892, 1893,1894, 1895, 1896, 1897, 1898, 1899]},
    6: {input:[[1845, 1899], [1900, 1947], [1945, 2000]], result:[1945, 1946, 1947]},
    7: {input:[[1900, 1947], [1945, 2000], [2005,2030]], result:[1945, 1946, 1947]},
    8: {input:[[1900, 1905]], result:[1900, 1901, 1902, 1903, 1904, 1905]},
    9: {input:[[1900, 1915],[1900, 1910],[1900, 1905]], result:[1900, 1901, 1902, 1903, 1904, 1905]},
    10: {input:[[1900, 1905],[1900, 1905],[1900, 1905]], result:[1900, 1901, 1902, 1903, 1904, 1905]},
  }
  let testKeys=Object.keys(testObj);
  testKeys.forEach(key=>{
    it(`Input ${key} ${msg} ${testObj[key].result}`, function(){
      assert.deepEqual(testObj[key].result,codeObj.findYearRange(testObj[key].input));
    });
  })
});