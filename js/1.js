// 斐波拉契数列 一串 第三项为前两项之和组成的数列，请尝试实现 
// 1 1 2 3 5 8 …. 
// input number 
// output number 
// example  foo(3)  return 2 
// const foo = (index) => { 

// } 


// 递归 会重复计算
// function fn(n){
//     if(n==1 || n==2){
//         return 1;
//     }
//     return fn(n-1)+fn(n-2);
// }

function fn(n){
    let v1 = 1,v2 = 1,temp;
    for(let i=3;i<n;i++){
        temp = v1 + v2;
        v1 = v2;
        v2 = temp;
    }
    return temp;
}