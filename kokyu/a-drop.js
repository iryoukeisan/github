var a = 0;
var d = 0;
var r = 0;
var o = 0;
var p = 0;
var x = 0;
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
  if(d==0){
    d=1;
    document.all.trt2.style.backgroundImage='url(../images/thumb.png)';
  } else{
    d=0;
    document.all.trt2.style.backgroundImage='';
  }
  score();
}
function t3(){
  if(r==0){
    r=1;
    document.all.trt3.style.backgroundImage='url(../images/thumb.png)';
  } else{
    r=0;
    document.all.trt3.style.backgroundImage='';
  }
  score();
}
function t4(){
  if(o==0){
    o=1;
    document.all.trt4.style.backgroundImage='url(../images/thumb.png)';
  } else{
    o=0;
    document.all.trt4.style.backgroundImage='';
  }
  score();
}
function t5(){
  if(p==0){
    p=1;
    document.all.trt5.style.backgroundImage='url(../images/thumb.png)';
  } else{
    p=0;
    document.all.trt5.style.backgroundImage='';
  }
  score();
}

function score(){
  x=a+d+r+o+p;
  switch (x) {
    case 0:
    document.getElementById('output').textContent = 'A-DROP：' + x + '点　軽症(外来)';
      break;
    case 1:
    if(p==1){
      document.getElementById('output').textContent = 'A-DROP：' + x + '点　超重症(入院、ICU検討)'
    } else{
      document.getElementById('output').textContent = 'A-DROP：' + x + '点　中等症(外来または入院)';
    }
      break;
    case 2:
    if(p==1){
      document.getElementById('output').textContent = 'A-DROP：' + x + '点　超重症(入院、ICU検討)'
    } else{
      document.getElementById('output').textContent = 'A-DROP：' + x + '点　中等症(外来または入院)';
    }
      break;
    case 3:
    if(p==1){
      document.getElementById('output').textContent = 'A-DROP：' + x + '点　超重症(入院、ICU検討)'
    } else{
      document.getElementById('output').textContent = 'A-DROP：' + x + '点　重症(入院)';
    }
      break;
    case 4:
      document.getElementById('output').textContent = 'A-DROP：' + x + '点　超重症(入院、ICU検討)'
      break;
    case 5:
      document.getElementById('output').textContent = 'A-DROP：' + x + '点　超重症(入院、ICU検討)'
      break;
  }
}
