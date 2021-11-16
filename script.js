const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')

let stepNum = 1

next.addEventListener('click', () => {
  stepNum++
  if (stepNum > circles.length) {
    stepNum = 4
  }
  update()
})

prev.addEventListener('click', () => {
  stepNum--
  if (stepNum < 1) {
    stepNum = 1
  }
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < stepNum) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (stepNum === 1) {
    prev.disabled = true
  } else if (stepNum === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
