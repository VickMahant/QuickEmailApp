//===============================================================

$(document).bind('mobileinit',function(){
		$.mobile.selectmenu.prototype.options.nativeMenu = false;
	});
//================================================================
var select = document.getElementById('select');
//data
var arrayOfPhoneNumbers = [];
var ajax = new XMLHttpRequest();

//event handlers
ajax.onload = function(){
  if(ajax.status === 200 || ajax.status === 0){
    arrayOfPhoneNumbers = ajax.responseText.split("\r");
    //fill the select object with phone number
    select.innerHTML = "";
    var record = []
    for(var i=1;i<arrayOfPhoneNumbers.length;i++){
      //get record and split it up
      record = arrayOfPhoneNumbers[i].split(",");
      //join first name and last name
      var name = record[0] + " " + record[1];
      //create text node for the option element
      var text = document.createTextNode(name);
      //create option element
      var opt = document.createElement('option');  
      //place text inside option element
      opt.appendChild(text);
      //put in the phone number as the option's value
      opt.value = record[2];
      //append option to select element
      select.appendChild(opt);  
    }
  }
}
select.onchange = function(){
  var i = select.selectedIndex;
  //alert(select.options[i].value);
  var answer = confirm("Call" + select.options[i].innerHTML + "?");
  location.assign("tel:" + select.options[i].value);
}
select.ondblclick = function(){
  var i = select.selectedIndex;
  //alert(select.options[i].value);
  var answer = confirm("Call" + select.option[i].innerHTML + "?");
  //document.location.href = "tel:" + select.options[i].innerHTML;
}

//activities
var doc = "http://dl.dropboxusercontent.com/u/92537132/Mobiles%20Apps/QuickEmailApp/PhoneNumbers.csv"
ajax.open("GET",doc,true);
ajax.send();



