const btn = document.querySelectorAll('.btn');
var str = '₹ ';
const atmid = document.getElementById('atm-id');


document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    // console.log(atmid.value)
    validateDigit(atmid.value);
})

btn.forEach(element => {
    let circleAmount = document.getElementById('circle-amount');
    element.addEventListener('click' , function(){
      let updatedValue = (circleAmount.value = str.concat(element.value));
    })
});

function validateDigit(atmid) {
  var regExp = /^[0-9]{6,6}$/;
  var phone = atmid.match(regExp);
  if (phone) {
    console.log('yes');
    return true;
  }else{
    console.log('no');
    return false;
  }
}