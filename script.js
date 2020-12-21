let doc = document.getElementById('mafat');
doc.addEventListener('click',keyPlay);
function keyPlay(){
    if(document.getElementById('showimg').style.display ==='none'){
        console.log("going to show pic");
        document.getElementById('showimg').style.display ='block';
    } else {
        document.getElementById('showimg').style.display ='none';
    }
}
let sec = document.getElementById('sec');
sec.addEventListener('click',keytwo);
function keytwo(event){
    console.log("hi");
    if(document.getElementById('secimg').style.display ==='none'){
        console.log("going to show pic");
        document.getElementById('secimg').style.display ='block';
    } else {
        document.getElementById('secimg').style.display ='none';
    }
}
let third = document.getElementById('third');
third.addEventListener('click',keythird);
function keythird(){
    console.log("hi");
    if(document.getElementById('thirdimg').style.display ==='none'){
        console.log("going to show pic");
        document.getElementById('thirdimg').style.display ='block';
    } else {
        document.getElementById('thirdimg').style.display ='none';
    }
}



