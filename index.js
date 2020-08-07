var arr = [1,2,3,4,5,6,7,8,9];

function myFunction() {
  var nHTML = '';
  arr.forEach(function(item, index) {
    nHTML += '<div ' + 'id=id-' + index + '>' + item + '</div>';
  });

  document.getElementById("number").innerHTML = nHTML;
}

function shuffle() {
	var tempArr = arr;
    var length = tempArr.length, temp, index;
    while (length > 0) {
        index = Math.floor(Math.random() * length);
        length--;
        temp = tempArr[length];
        tempArr[length] = tempArr[index];
        tempArr[index] = temp;
    }
    var nHTML = '';
  	tempArr.forEach(function(item, index) {
    	nHTML += '<div ' + 'id=id-' + index + '>' + item + '</div>';
  	});

  	document.getElementById("number").innerHTML = nHTML;
}

function sort() {
	var tempArr = arr;
	var sortedArr = tempArr.sort(function(a,b){return a-b});
    var nHTML = '';
  	sortedArr.forEach(function(item, index) {
    	nHTML += '<div ' + 'id=id-' + index + '>' + item + '</div>';
  	});

  	document.getElementById("number").innerHTML = nHTML;
}