import React from "react";

// function Click_event(){
//     function func_Alert(){
//         alert('Cooooool . . .') ;
//     }

    function Click_event(props){
        const func_Alert = (name) => {
            alert('Cooooool . . . props - ' + name) ;
        }

    return (
        <div>
            <h1> Hi , I am React.....King , How about you ?</h1>
            {/* <button onClick={func_Alert}>Hit me</button> */}
            <button onClick={() => func_Alert(props.name)}>Hit props</button>
        </div>
    
    )
}

export default Click_event