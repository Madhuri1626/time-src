import React, { Component } from 'react';
import './style.css'
class App extends Component {
    constructor(props){
        super(props)
        this.state={curTime:""}
    }
    componentDidMount() {
        setInterval(() => {
            var today = new Date(),
            curTime =today.getHours() +":" +today.getMinutes() +":" +today.getSeconds();
            this.setState({ curTime });
        }, 1000);
      }

    componentDidUpdate(){
        if(this.state.curTime==='9:52:55'){
            
            alert('take a break');
        }
    }
    render() {
        return(
        <>
        <>
        <center className='card'>
        <h1 className='timer'>{this.state.curTime}PM</h1>
        </center>
        </>
        
        </>
        )
        
    }
    
        
  }
    


export default App