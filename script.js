function sendREQ(e){
    e.preventDefault()
    let form = document.getElementById('order')
    let fail = false;

    let nameR = new RegExp("^[A-ZА-ЯІЇЙ][a-zа-яіїй]+ +[A-ZА-ЯІЇЙ][\.][A-ZА-ЯІЇЙ][\.]$");
    if (nameR.test(form.name.value)==false){
        document.getElementById('invalid-feedback-name').style.display = 'block';
        form.name.style.backgroundColor = 'red';
        fail = true;
        form.name.value = '';
    }else{
        document.getElementById('invalid-feedback-name').style.display = 'none';
        form.name.style.backgroundColor = 'white';
    }

    let delta = new Date().getTime() - new Date(form.datetime.value).getTime()
    //let dataR = /(0[1-9]|[12][0-9]|3[01])[\.](0[1-9]|1[012])[\.](19|20)\d\d/;
    if (Math.floor(delta/1000/60/60/24/365)< 14 || isNaN(delta)){
        document.getElementById('invalid-feedback-date').style.display = 'block';
        form.name.style.backgroundColor = 'red';
        form.datetime.value = '';
        fail = true;
    }else{
        document.getElementById('invalid-feedback-date').style.display = 'none';
        form.name.style.backgroundColor = 'white';
    }

    let addressR = new RegExp("^м[\.] ([A-ZА-ЯІЇЙ][a-zа-яіїй]+)$");
    if (addressR.test(form.adress.value)==false){
        document.getElementById('invalid-feedback-address').style.display = 'block';
        form.adress.style.backgroundColor = 'red';
        form.adress.value = '';        
        fail = true;
    }else{
        document.getElementById('invalid-feedback-address').style.display = 'none';
        form.adress.style.backgroundColor = 'white';
    }

    let emailR = new RegExp("^[a-zа-яіїй]+@[a-zа-яіїй]+.com$");
    if (emailR.test(form.email.value)==false){
        document.getElementById('invalid-feedback-email').style.display = 'block';
        form.email.style.backgroundColor = 'red';
        form.email.value = '';
        fail = true;
    }else{
        document.getElementById('invalid-feedback-email').style.display = 'none';
        form.email.style.backgroundColor = 'white';
    }

    let telegramR = new RegExp("^@[A-ZА-ЯІЇЙa-zа-яіїй]_[A-ZА-ЯІЇЙa-zа-яіїй]+$");//new RegExp("^@[A-ZА-ЯІЇЙa-zа-яіїй]_[A-ZА-ЯІЇЙa-zа-яіїй]{5}$");
    if (telegramR.test(form.telegram.value)==false){
        document.getElementById('invalid-feedback-telegram').style.display = 'block';
        form.telegram.style.backgroundColor = 'red';
        fail = true;
        form.telegram.value = '';
    }else{
        document.getElementById('invalid-feedback-telegram').style.display = 'none';
        form.telegram.style.backgroundColor = 'white';
    }
    if (fail==false){
        document.getElementById('res-name').innerText = "ПІБ: "+form.name.value;
        document.getElementById('res-date').innerText = "Дата народження: "+form.datetime.value;
        document.getElementById('res-adress').innerText = "Адреса: "+form.adress.value;
        document.getElementById('res-email').innerText = "Email: "+form.email.value;
        document.getElementById('res-telegram').innerText = "Telegram: "+form.telegram.value;
        /*let newW = window.open()
        newW.document.write("<p> ПІБ: "+form.name.value+"</p>"+"<p> Дата народження: "+form.datetime.value+"</p>"+
        "</p>"+"<p>Адреса: "+form.adress.value+"</p>"+ 
        "</p>"+"<p> Email: "+form.email.value+"</p>"+
        "</p>"+"<p> Telegram: "+form.telegram.value+"</p>")*/
    }
}

document.getElementById('order').onsubmit = (e)=>{sendREQ(e);}

six_cell = document.getElementById("six");
let change = false
six_cell.onmouseenter = (e)=>{
    change=false;
    e.target.style.backgroundColor = "#"+(Math.random().toString(16)+'000000').substring(2,8).toUpperCase()
}
six_cell.onmouseleave = (e)=>{
    if (change==false){
        e.target.style.backgroundColor = "white"
    }
}
six_cell.onclick = (e)=>{
    change=true;
    e.target.style.backgroundColor = document.getElementById("palit").value;
}

let dblcl = false;
six_cell.ondblclick = (e)=>{
    change=true;
    let rows = document.querySelectorAll('tr')
    let count = 0;
    let color = document.getElementById("palit").value;
    if (dblcl==true){
        color = "white";
        dblcl=false;
    }
    else{
        dblcl=true;
    }
    for (const row of rows){
        for (const child of row.children){
                if (parseInt(child.innerText) >= parseInt(six_cell.innerText)+(6*count) ){
                    child.style.backgroundColor = color;
                }
        }
        if (parseInt(row.children[5].innerText) >= parseInt(six_cell.innerText)){
            count +=1;
        }
        
    }
}