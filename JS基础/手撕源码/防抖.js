// 抖动效果
function task() {
    console.log("run task")
}

// 防止抖动

function forbidden () {
    let timer;
        console.log("sss")
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(task,1000)
    }

document.addEventListener('scroll', forbidden)

function debounce(func, ms = 1000) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, ms)
    }
  }
  
  // 测试
  const task = () => { console.log('run task') }
  const debounceTask = debounce(task, 1000)
  window.addEventListener('scroll', debounceTask)
  
