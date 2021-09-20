
function findSolution(e){
    function find(current, history){
     if(current == e){
            return history;
        }else if(current > e){
            return null;
            
        }else{
            return find(current + 5,`${history}  + 5`)||(current *3, `${history} * 3`)||(current + 2,`${history} + 2`)||(current * 4,`${history} * 4`);
        }
    }
    return find(1,"1");
    
}

var shower = document.getElementById('findBtn');


shower.addEventListener('click',function(){
    let solution = document.getElementById('result');
    let inputNum = document.getElementById('number');
    let randomNum = Math.random()*12345;
    inputNum.value=randomNum;
        return solution.textContent=(findSolution(randomNum)); 
        
});
