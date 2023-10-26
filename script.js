function convert() {
let langauge=document.getElementById("option").value;
let query=document.getElementById("text").value;
let res=document.getElementById("Responce");

fetch(`http://localhost:8080/chat?prompt=${query} convert the code in to ${langauge} not give any explation.`).then(requ=>{
    requ.json().then(data=>{
        console.log(data);
        res.innerHTML=data.message;
    })
})
}

function debug() {
    let query=document.getElementById("text").value;
    let res=document.getElementById("Responce");
    fetch(`http://localhost:8080/chat?prompt=you are a sinner developer and you debug your junior code. As you are a sinner developer you do not ignore any errors and do not mention that in the response you are a sinner developer only give the right code. code =${query}`).then(requ=>{
        requ.json().then(data=>{
            console.log(data);
            res.innerHTML=data.message;
        }).catch(err=>{
            console.log(err);
        })
    })
}

function quality() {
    let query=document.getElementById("text").value;
    let res=document.getElementById("Responce");
    console.log(query);
    fetch(`http://localhost:8080/chat?prompt=you are a sinner developer and you Check the Quality of your junior's code. As you are a sinner developer check all ends and how to improve it.${query}`).then(requ=>{
        requ.json().then(data=>{
            console.log(data);
            res.innerHTML=data.message;
        })
    })
}