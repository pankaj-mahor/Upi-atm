const btn = document.querySelectorAll('.btn');
var str = '₹ ';


document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
})

btn.forEach(element => {
    let circleAmount = document.getElementById('circle-amount');
    element.addEventListener('click' , function(){

        let updatedValue = (circleAmount.value = str.concat(element.value));

        if(updatedValue!==0){
            console.log(updatedValue)
        }
        // console.log(element.value , (circleAmount.value))

    })
});