var element = document.querySelector('#container');


var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 26; i++) {
    var item = document.createElement('h1');
    item.innerText = 'Masai School ' + nextItem++;
    element.appendChild(item);
  }
}


element.addEventListener('scroll', function() {
  if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
    loadMore();
  }
});

loadMore();