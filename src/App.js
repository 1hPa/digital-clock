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
  }
}

export default App;
