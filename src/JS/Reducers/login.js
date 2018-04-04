export const getLoginData = (state = [], action) =>{
    switch (action.type){
        case "UPDATE_PAGESTATUS_DATA" :
            return action.data;
        default :
            return state;
    }
}