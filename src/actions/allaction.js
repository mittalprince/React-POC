//Action creator, should return a plain object
export function addNewEmp(payload){
    const action = {
        type: "ADD_NEW_EMP",
        payload
    }
    return action;
}

export function delEmp(index){
    const action = {
        type: "DEL_EMP",
        index
    }
    return action;
}
