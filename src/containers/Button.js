import React from 'react';
import {connect} from 'react-redux';
import {clickMe} from '../actions/action';

let Button= ({whatsUp,stateObject,saySomething})=>(
    <div>
        <button onClick={saySomething}>
        Click here</button>
        <h2>{whatsUp}</h2>
    </div>

)

const mapStateToProps=(state)=>({
    whatsUp:state.say,
    stateObject:state
})

const mapDispatchToProps=(dispatch)=>({
    saySomething:()=>{dispatch(clickMe)}
})

Button=connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)

export default Button;
