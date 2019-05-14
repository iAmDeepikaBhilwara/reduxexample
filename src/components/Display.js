import React from 'react';
import {connect} from 'react-redux';
import {clickMe} from '../actions/action';

let Display= ({whatsUp,stateObject,saySomething})=>(
    <div>
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

Display=connect(
    mapStateToProps,
    mapDispatchToProps
)(Display)

export default Display;
