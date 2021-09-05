var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
function t1(){
  if(a==0){
    a=1;
    document.all.trt1.style.backgroundImage='url(../images/thumb.png)';
  } else{
    a=0;
    document.all.trt1.style.backgroundImage='';
  }
  score();
}
function t2(){
  if(b==0){
    b=1;
    document.all.trt2.style.backgroundImage='url(../images/thumb.png)';
  } else{
    b=0;
    document.all.trt2.style.backgroundImage='';
  }
  score();
}
function t3(){
  if(c==0){
    c=1;
    document.all.trt3.style.backgroundImage='url(../images/thumb.png)';
  } else{
    c=0;
    document.all.trt3.style.backgroundImage='';
  }
  score();
}
function t4(){
  if(d==0){
    d=1;
    document.all.trt4.style.backgroundImage='url(../images/thumb.png)';
  } else{
    d=0;
    document.all.trt4.style.backgroundImage='';
  }
  score();
}
function t5(){
  if(e==0){
    e=1;
    document.all.trt5.style.backgroundImage='url(../images/thumb.png)';
  } else{
    e=0;
    document.all.trt5.style.backgroundImage='';
  }
  score();
}
function t6(){
  if(f==0){
    f=1;
    document.all.trt6.style.backgroundImage='url(../images/thumb.png)';
  } else{
    f=0;
    document.all.trt6.style.backgroundImage='';
  }
  score();
}

function score(){
  g=a+b+c+d+e-f;
  document.getElementById('output').textContent = 'Centor Score：' + g + '点';
}
