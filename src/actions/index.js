export const increamentCounter =(count) =>{
    return{
        type:"INCREAMENT_COUNT",
        payload:count+1

    }
}
export const decreamentCounter = (count) => {
    return{
        type:"DECREAMENT_COUNT",
        payload:count-1
    }
}
