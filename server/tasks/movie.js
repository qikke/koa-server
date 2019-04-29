const cp = require('child_process')
const { resolve } = require('path')
const getData = require('./api')

  ; (async () => {
    const script = resolve(__dirname, '../crawler/trailer-list')
    const child = cp.fork(script, [])
    let invoked = false

    child.on('error', err => {
      if (invoked) return
      invoked = true
      console.log(err)
    })

    child.on('exit', code => {
      if (invoked) return
      invoked = true
      let err = code === 0 ? null : new Error(`exit code ${code}`)
      console.log(err)
    })

    child.on('message', data => {
      let result = data.result
      // 获取详细信息
      getData(result)
    })

  })()

