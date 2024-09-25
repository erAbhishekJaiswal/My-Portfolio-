const btn = document.getElementById("btn");
const close =document.getElementById("close")
const newbtn =document.getElementsByClassName("navbtn");
const lists =document.getElementsByClassName("molist");

btn.addEventListener('click',()=>{
    if(btn.style.display==='none'){
        lists[0].style.display='none'
        
    }else{
        btn.style.display='none';
        close.style.display='block'
        lists[0].style.display='block'
    }
})

close.addEventListener('click',()=>{
    close.style.display='none'
    btn.style.display='block';
    lists[0].style.display='none'
})