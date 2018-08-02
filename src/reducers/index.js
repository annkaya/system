const init = {
    fetched_data:{
        location:'',
        time:''
    },
    data_loaded: false,
    current_count:10
    
}
  
//state : undefined || null

        

export default (state = init, action) =>{
    switch (action.type){
        case 'INCREAMENT_COUNT':
        return{
            ...state,
            current_count: action.payload
        }
 

        case 'DECREAMENT_COUNT':
        return{
            ...state,
            current_count: action.payload
        }


    }
}