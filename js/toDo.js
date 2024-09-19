
let number=0;
document.getElementById("btn-add").addEventListener("click",function(){
    const inputText=document.getElementById("inputText").value;
    document.getElementById("inputText").value='';
 
    number++
    const tr=document.createElement('tr')
    tr.innerHTML=`
    <td>${number}</td>
    <td>${inputText}</td>
    <td><button class="delate-btn" "btn btn-error">Clear</button></td>
    `
    const defaultText=document.getElementById("defaultText")
    defaultText.appendChild(tr)
        const delateBtn=tr.querySelector(".delate-btn");
        delateBtn.addEventListener("click",function(){
            tr.remove()
        })
           
})
//all clear

document.getElementById("clear-btn").addEventListener("click",function(){
    const defaultText=document.getElementById("defaultText");
    defaultText.innerHTML='';
    
})