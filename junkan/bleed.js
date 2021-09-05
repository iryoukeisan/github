var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var x = 0;

function t1(){
  if(a==0){
    a=4.5;
    document.all.trt1.style.backgroundImage='url(../images/thumb.png)';
  } else{
    a=0;
    document.all.trt1.style.backgroundImage='';
  }
  score();
}
function t2(){
  if(b==0){
    b=4;
    document.all.trt2.style.backgroundImage='url(../images/thumb.png)';
  } else{
    b=0;
    document.all.trt2.style.backgroundImage='';
  }
  score();
}
function t3(){
  if(c==0){
    c=4;
    document.all.trt3.style.backgroundImage='url(../images/thumb.png)';
  } else{
    c=0;
    document.all.trt3.style.backgroundImage='';
  }
  score();
}
function t4(){
  if(d==0){
    d=3.5;
    document.all.trt4.style.backgroundImage='url(../images/thumb.png)';
  } else{
    d=0;
    document.all.trt4.style.backgroundImage='';
  }
  score();
}
function t5(){
  if(e==0){
    e=2.5;
    document.all.trt5.style.backgroundImage='url(../images/thumb.png)';
  } else{
    e=0;
    document.all.trt5.style.backgroundImage='';
  }
  score();
}
function t6(){
  if(f==0){
    f=2.5;
    document.all.trt6.style.backgroundImage='url(../images/thumb.png)';
  } else{
    f=0;
    document.all.trt6.style.backgroundImage='';
  }
  score();
}

function t7(){
  if(g==0){
    g=2.5;
    document.all.trt7.style.backgroundImage='url(../images/thumb.png)';
  } else{
    g=0;
    document.all.trt7.style.backgroundImage='';
  }
  score();
}

function t8(){
  if(h==0){
    h=2;
    document.all.trt8.style.backgroundImage='url(../images/thumb.png)';
  } else{
    h=0;
    document.all.trt8.style.backgroundImage='';
  }
  score();
}

function t9(){
  if(i==0){
    i=2;
    document.all.trt9.style.backgroundImage='url(../images/thumb.png)';
  } else{
    i=0;
    document.all.trt9.style.backgroundImage='';
  }
  score();
}

function t10(){
  if(j==0){
    j=2;
    document.all.trt10.style.backgroundImage='url(../images/thumb.png)';
  } else{
    j=0;
    document.all.trt10.style.backgroundImage='';
  }
  score();
}

function t11(){
  if(k==0){
    k=1;
    document.all.trt11.style.backgroundImage='url(../images/thumb.png)';
  } else{
    k=0;
    document.all.trt11.style.backgroundImage='';
  }
  score();
}

function t12(){
  if(l==0){
    l=1;
    document.all.trt12.style.backgroundImage='url(../images/thumb.png)';
  } else{
    l=0;
    document.all.trt12.style.backgroundImage='';
  }
  score();
}

function t13(){
  if(m==0){
    m=1;
    document.all.trt13.style.backgroundImage='url(../images/thumb.png)';
  } else{
    m=0;
    document.all.trt13.style.backgroundImage='';
  }
  score();
}


function score(){
  x=a+b+c+d+e+f+g+h+i+j+k+l+m;
  if (x>=7){
    document.getElementById('output').textContent = '出血リスク評価：' + x + '点　高リスク';
  } else {
    document.getElementById('output').textContent = '出血リスク評価：' + x + '点　低リスク';
  }
}
