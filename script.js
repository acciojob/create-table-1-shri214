    var i=3;
	var j=1;
	var k=2;
function insert_Row() {
    //Write your code here
	
  let str=`<tr><td>Row${i} cell${j}</td><td>Row${i} cell${k}</td></tr>`
	var table=document.querySelector("table");
	table.innerHTML+=str;
	i++;
}
