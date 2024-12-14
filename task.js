let grandparent=document.getElementById("grandparent");
let parent=document.getElementById("parent");
let child=document.getElementById("child");

grandparent.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("grandparent invoked");
    grandparent.style.transitionDuration="5s";
    grandparent.style.backgroundColor="blue";
    grandparent.style.borderRadius="50%";
})

parent.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("parent invoked");
    parent.style.transitionDuration="5s";
    parent.style.backgroundColor="deeppink";
    parent.style.borderRadius="50%";
})
child.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("child invoked");
    child.style.transitionDuration="5s";
    child.style.backgroundColor="aqua";
    child.style.borderRadius="50%";
})