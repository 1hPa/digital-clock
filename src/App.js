import React from 'react';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        timelag : '',
        nowTime : ''
    }
  }

  componentDidMount(){
    setInterval(() => ){
      this.setState({
        nowTime: this.getTime(this.state.timelag)
      });
    }, 1000)
  }

  //Get date and time
  getTime(timelag = 0) {
    let japanTime = new Date().getTime()
    let nowTime = new Date(japaneTime + timelag*60*60*1000)
    let year = nowTime.getFullYear()
    let month = nowTime.getMonth() + 1
    let date = nowTime.getDate()
    let hours = nowTime.getHours()
    let minutes = nowTime.getMinutes()
    let seconds = nowTime.getSeconds()

    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`

    const time = `${year}? ${month}? ${date}? ${hours}:${minutes}:${seconds}`
    return time
  }
    doChange = (e) => {
      e.preventDefault()
      this.setState({
      timelag: e.target.value
    })
  }
}

export default App;
