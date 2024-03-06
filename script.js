const inputs = Array.from(document.querySelectorAll('input'))
const labels = Array.from(document.querySelectorAll('label'))

const input = document.querySelector('input')
const check = document.querySelector('#send')
let result = document.querySelector('.result')


check.addEventListener('click', function() {
  for (let i = 0; i < inputs.length - 1; i++) {
    //1為一組，2、3為一組
    if (inputs[0].checked) {
      //是否還有勾選2或3
      if (inputs[1].checked || inputs[2].checked) {
        result.innerHTML = '有什麼障礙?'
        return 0
      } else {
        //只有勾選1的話
        result.innerHTML = labels[0].textContent
      }
      //如果3打勾
    } else if (inputs[2].checked) {
      //判斷2有沒有打勾
      if (inputs[1].checked) {
        result.innerHTML = '幸福美滿的世界'
      } else {
        result.innerHTML = labels[0].textContent
      }
      //判斷2有沒有打勾
    } else if (inputs[1].checked){
      result.innerHTML = '幸福美滿的世界'
    } else {
      result.innerHTML = '有什麼障礙?'
    }

  }

})