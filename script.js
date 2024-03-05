const inputs = Array.from(document.querySelectorAll('input'))
const labels = Array.from(document.querySelectorAll('label'))

const input = document.querySelector('input')
const check = document.querySelector('#send')
let result = document.querySelector('.result')


check.addEventListener('click', function() {
  for (let i = 0; i < inputs.length - 1; i++) {
    //如果第二沒打勾
    if (inputs[1].checked == false) {
      //但是第三個打勾，那就會滅世界
      if (inputs[2].checked == true) {
        result.innerHTML = labels[0].textContent
        return 0
      } //如果第一個打勾
    } else if (inputs[0].checked == true) {
      if (inputs[1].checked || inputs[2].checked) {
        result.innerHTML = '有什麼障礙?'
      }
    } else {
      result.innerHTML = '幸福美滿的世界'
    }

  }

})