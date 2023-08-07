document.getElementById('homebut').addEventListener('click', function(){
    document.getElementById('home').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})

document.getElementById('skillbut').addEventListener('click', () =>{
    document.getElementById('skillbg').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})


document.getElementById('cerbut').addEventListener('click', function(){
    document.getElementById('certification').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})


document.getElementById('librarybut').addEventListener('click', ()=>{
    document.getElementById('library').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})

document.getElementById('probut').addEventListener('click',function(){
    document.getElementById('projects').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})

document.getElementById('edubut').addEventListener('click',function(){
    document.getElementById('education').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})