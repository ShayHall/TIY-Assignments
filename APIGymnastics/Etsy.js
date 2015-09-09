// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');
    test = require('mocha').it,
    expect = require('chai').expect;

test('this is the easy one', function(){
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

function isArray(items) {
  return items;
};

  expect(items.length).to.equal(25); // It's haunting me now...
});

test('finding the average price', function(){
// var yourAnswer = "start with `items`, use `array` methods
//*items.json is an array of dictionaries(objects)
var yourAnswer = 0;
//to calculate average priuce, we need:
// each item's price
var prices = [ ];

var item = items[0];

expect(items[0]).to.be.an('object');
expect(item.price).to.be.a('number');
expect(item.price).to.be.equal(12);
prices.push(item.price);
expect(prices).to.deep.equal([12]);
//* sum of all items's prices
//*total number of items
//
//* average = sum of all item prices/number of items


  expect(items.length).to.equal(25);

  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});

test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */
  function pricedBetween(items, min, max){
    return [];
  }//
  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
  ]);
});

test('pond hopping', function(){
  expect( items.filter(title, price) ).to.deep.equal({
    title: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
