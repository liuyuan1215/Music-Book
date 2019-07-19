// 给定一个链表，删除对应的一项
// input linkedlist targt
// out put linkedlist
// data struct
// function linkedlist (){
// this.val = null;
// this.next = null;
// }

//example 1->2->3->4   3   return 1->2->4


const foo = (linkList,target)=>{
    if(linkList.val === target){
        linkList = linkList.next;
    }
    let node = linkList;
    while(node.next){
        if(node.next.val === target){
            node.next = node.next.next;
            return;
        }else{
            node = node.next;
        }
    }
}