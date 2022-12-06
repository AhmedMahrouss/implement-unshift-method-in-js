const add = (arr, ...newVal) => {
    let i= arr.length + newVal.length -1;  //i=(3)+(3)-1 start by 5
    for( i ; i >= newVal.length; i--) {    //i>2 <<condition
        arr[i] = arr[i - newVal.length ]; 
                                          //array[5]=array[5-3]
                                          //array[4]=array[4-3]
                                          //array[3]=array[3-3]
                                          //array[2]=array[2-3]
                                          //result =>>> [4,5,6,4,5,6]                                      
    }                                      
    for(i; i >= 0; i--) {     //i=2 start by 2                   
        arr[i] = newVal[i];       //array[2]=newVal[2]                   
    }                             //array[1]=newVal[1]
    return arr.length;            //array[0]=newVal[0]
}                                 //result =>>> [1,2,3,4,5,6]
array = [4,5,6];              
console.log(add(array,1,2,3));
console.log(array);