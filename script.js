const btn = document.querySelectorAll('.btn');
var str = '₹ ';
const atmid = document.getElementById('atm-id');
let circleAmount = document.getElementById('circle-amount');

document.getElementById('form').addEventListener('submit',function(e){
    // e.preventDefault();
    // console.log(atmid.value)
    if (circleAmount.value == 0) {
      alert('value bhi dal bhai')
    }
    validateDigit(atmid.value);
})

btn.forEach(element => {
    
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
    alert('Enter VAlid ATM id');
    return false;
  }
}