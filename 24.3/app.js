Array.prototype.filter = function (filter_func){
    let filtered_elements = [];
    for (let i=0;i<this.length;i++){
        if(filter_func(this[i])){
            filtered_elements.push(this[i]);
        }
    } 
    return filtered_elements;
}

function is_odd(num){
    return num%2==1;
}

//console.log([1,2,3,4,5,6].filter(is_odd));

Array.prototype.find= function(find_func){
    for(let i =0 ; i <this.length;i++){
        if(find_func(this[i])){
            return this[i];
        }
    }
    return null;
}

//console.log([8,10,4,5,2].find(is_odd));


Array.prototype.reduce = function (reduce_func,s = 0){
    let result = s;
    for (let n of this){
        result = reduce_func(s, n);
    }
    return result;
}
function sum(n,m){
    return n+m;
}

//console.log([1, 1, 1].reduce(sum));


