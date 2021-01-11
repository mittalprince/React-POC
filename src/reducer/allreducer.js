import empdata_json from './../data/employeedata.json';

function empdatareducer(state = empdata_json, action){
    switch(action.type){
        case "ADD_NEW_EMP":
            let empdata = [...state,action.payload];
            return empdata;
        case "DEL_EMP":
            let storedata = [...state];
            let pos = action.index;
            console.log("index before splice", action.index);
            storedata.splice(pos,1);
            console.log("after splice",storedata);
            return storedata;
        default:
            return state;
    }
}

export default empdatareducer;