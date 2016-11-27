var inStock = [
  'apples',
  'eggs',
  'milk',
  'cookies',
  'cheese',
  'bread',
  'lettuce',
  'carrot',
  'broccoli',
  'pizza',
  'potato',
  'crackers',
  'onion',
  'tofu',
  'frozen dinner',
  'cucumber'
];
var search;

function print(message) {
    document.write('<p>' + message + '</p>');
}
(function(){ //IIFE, the break statements are present to close the prompt
  // when answer is provided
  while (true) {
      search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
      search = search.toLowerCase();
      if (search === 'quit') {
          break;
      } else if (search === 'list') {
          print(inStock.join(', ')); //The join() method joins all elements of an array into a string.
          break;
      } else {
          if (inStock.indexOf(search) > -1) { //The indexOf() method returns the first index at which a given element can be found in the array,
            // or -1 if it is not present.
              print('Yes we have ' + search + ' in the store');
              break;
          } else { //if value is not found, then this is printed
              print(search + ' is not in stock.');
              break;
          }
      }
  }
})();
