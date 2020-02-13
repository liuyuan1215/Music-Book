// async function timeout(){
//     return 'hello'
// }
// // console.log(timeout());
// timeout().then(result=>{
//     console.log(result);
// })
// console.log('111');

function timeout(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(222);
            resolve();
        },2000)
    })
}

async function fn(){
    await timeout();
    console.log(333);
}

fn()