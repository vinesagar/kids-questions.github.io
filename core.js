M.AutoInit();
function getValue(String){
    var e = document.getElementById(String);
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function toValue(int){
    return getRndInteger(Math.pow(10,int-1),Math.pow(10,int)-1);
  }
function byValue(by,to){
    return getRndInteger(Math.pow(10,by-1),to);
  }
function signValue(sign) {
      switch (sign) {
          case 'add':
              return '+'
              break;

          case 'div':
              return '÷'
              break;
          
          case 'mul':
              return '×'
              break;
          
          case 'sub':
              return '-'
              break;
          default:
              return '?'
              break;
      }
  }
  function makeQuestion(sign,to,by,byDigit){
      var gapCount = sign=='×'?byDigit:1;
      var gap='';
      for (let index = 0; index < gapCount; index++) {
          gap+='<br>';
      }
      return '<div class="col s12 m6">      <div class="row" >          <div class="col s6 offset-s3 right-align">              <h5>'+to+'</h5>              <h5>'+sign+' '+by+'</h5>              <div class="divider black"></div>      '+gap+'      <div class="divider black"></div>          </div>                </div>        </div>';
  }
function getQuestions(){
    var sign=getValue('sign');
    var toDigit=getValue('to-digits');
    var byDigit=getValue('by_digits');
    sign = signValue(sign);
    var questions='';
    for (let index = 0; index < 8; index++) {
        var to = toValue(toDigit);
    var by= byDigit<toDigit? byValue(byDigit,toDigit):byValue(byDigit,byDigit);
        questions+=makeQuestion(sign,to,by,byDigit);
    }
    return questions;
}
