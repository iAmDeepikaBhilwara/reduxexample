const reducer=(state={say:"Hi"},action)=>{
    switch(action.type){
        case 'CLICK_ME':
        return {say:'clicked'};
        default:
        return state;
    }
};

export default reducer;