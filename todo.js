listcontainer=document.querySelector('#list-container')
sea=document.querySelector('.sea')

function tod(){
    if(sea.value===''){
        alert('Please enter Something')
    }else{
        let li=document.createElement('li')
        li.innerHTML=sea.value
        listcontainer.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
        }
    sea.value=''
    data()
}

listcontainer.addEventListener('click',(t)=>{
    if(t.target.tagName==="LI"){
        t.target.classList.toggle("checked")
    }else if(t.target.tagName==="SPAN"){
        t.target.parentElement.remove()
    }

})
function data(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function show(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
show()







// function todo(){
// if(sea.value==""){
//     alert('YOu have to write something')
// }else{
//     let li=document.createElement("li")
//     li.innerHTML=sea.value
//     listcontainer.appendChild(li)
//     let span=document.createElement("span")
//     span.innerHTML="\u00d7"
//     li.appendChild(span)
// }
// sea.value=""
// data()
// }
// listcontainer.addEventListener('click',(f)=> {
//     if(f.target.tagName=="LI"){
//         f.target.classList.toggle('checked')
//         data()
//     }else if(f.target.tagName=="SPAN"){
//         f.target.parentElement.remove()
    
//     }
    
// })
// function data(){
// localStorage.setItem("data",listcontainer.innerHTML)
// }
// function show(){
//     listcontainer.innerHTML=localStorage.getItem("data")
// }
// show()