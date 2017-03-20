// If life was easy, we could just do things the easy way:
 /*var getElementsByClassName = function (className) {
   return Array.from(document.getElementsByClassName(className));
 };*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var elements = document;
  var matches  = [];
	var regex = new RegExp(className);
      
  function searchElements(element) {
    for(var i = 0; i < element.childNodes.length; i++) {
      if(element.childNodes[i].childNodes.length != 0) {
        searchElements(element.childNodes[i]);
      }
      if(element.childNodes[i].getAttribute && element.childNodes[i].getAttribute('class')) {
        if(regex.test(element.childNodes[i].getAttribute('class'))) {
          matches.unshift(element.childNodes[i]);
        }
      }
    }
  }
  
  searchElements(elements);  
  return matches;
};
