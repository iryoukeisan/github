function fio2add()
{
//var num = parseInt(123);
var a = form1.paco2.value;
var b = form1.pao2.value;
var c = form1.fio2.value;
var d = (713*c/100)-(a/0.8)-b
/*docment.getElementById('bmi').textElement = bmi; */
//window.alert(`ok`);
form1.result.value = d;
document.getElementById('keisansiki').textContent = "713" + "×" + c/100 + "-" + a + "/0.8" +  "-" + b + "=" + d;
}

function selectboxChange(){
  form1.fio2.value=form1.select.value;
}
