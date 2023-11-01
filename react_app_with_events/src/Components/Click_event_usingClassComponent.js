import React, {Component} from "react";
class Click_event_usingClassComponent extends Component{
    Click_fun() {
        alert('Nice - from Class Component');        
    }
   
    render(){
        const Click_Arrowfun = (name) => {
            alert('Arrow Function - from Class Component - ' + name);        
        }
        const Click_Props = (name, data) => {
            data = "Arrow Function with Props - from Class Component - ";
            alert('Arrow Function with Props - from Class Component - ' + name);        
        }
        return (
                <div>
                <h1>Hi , I am React.... , from Class Component </h1>
                <button onClick={this.Click_fun}>Click Me</button>
                <button onClick={() => Click_Arrowfun("Az")}>I am ArrowFun</button>
                <button onClick={() => Click_Props(this.props.name)}>Click_Props</button>
                <button onClick={() => Click_Props(this.props.data)}>Click_Props</button>
                </div>    
        )
    }
}

export default Click_event_usingClassComponent;