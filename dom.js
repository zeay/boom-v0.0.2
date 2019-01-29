'use strict'
var section=document.getElementById('result');
var footerArea=document.getElementsByTagName('footer')[0];
console.log(footerArea);
var asideArea=document.getElementsByTagName('aside')[0];
var getElements;
window.onload = function () {
    var inlineContent;
    var inputArea = document.getElementById('mainContainer');
    var result = document.getElementById('resultArea');
    var box;
        box = document.getElementById('query');
    var query;
    var error = document.getElementById('error');
    var web = document.getElementById('web');
    var videos = document.getElementById('video');
    var clickEvent=[]
//button work
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    
 //---------------------------------------------------------------------------//
    //web Search
    web.addEventListener('click',function(){
        query = document.getElementById('query').value;
        if (query === '') {
             err();
        } else {
            error.style.display = 'none';
            footerArea.style.display='none';
            inlineContent();
            /*console.log(query);*/
            makeSearch(query);
        }

    });
    //video search
    videos.addEventListener('click',function(){
        query = document.getElementById('query').value;
        if (query === '') {
             err();
        } else {
            error.style.display = 'none';
            footerArea.style.display='none';
            inlineContent();
            /*console.log(query);*/
            videoSearch(query);
        }
    });
       //on Home Page
       box.addEventListener('keypress', function(event) {
            enterFunction(event);
    }) 
    
      //enter function()
function enterFunction(event){
        console.log('I m Excuting enterFunction')
        query = document.getElementById('query').value;
            if (event.keyCode === 13 && query !=="" ) {
                    footerArea.style.display='none';
                    inlineContent();
                    makeSearch(query);
                }else if(query ===""){
                    box.placeholder="Ahh! You have to Fill In Here Error!";
                }
}
//makingInline Content
    function inlineContent(){
        console.log('I m Excuting inline')
        inputArea.innerHTML = '';
        result.innerHTML='';
        next.style.display='none';
        prev.style.display='none';
        var links="<button class='inlineButton firstButton'>Web</button><button class='inlineButton'>Video</button><!-- <button class='inlineButton'>Image</button> -->";
        var element = "<div class='row'><div class='col-md-12 col-lg-12'><div class='inline-content'><a href='index.html'><img src='im/icon.jpg' class='inline-img' alt='Boom Logo'></a><input type='text' autocomplete='on' id='query' placeholder='Enter Your Search Query and Press Enter'><hr class='hr'>"+links+"</div></div></div>";
        inputArea.innerHTML += element;
         box = document.getElementById('query');
        console.log(box);
        console.log(query);
        box.value=query;
        getElements=document.getElementsByClassName('inlineButton');
        console.log(getElements);
        //making active class active and producin and stoppin searc
         getElements[0].addEventListener('click',function(e){
                e.preventDefault();
                producinSear(getElements[0]);
         })
        getElements[1].addEventListener('click',function(e){
                e.preventDefault();
                producinSear(getElements[1]);
         })
       box.addEventListener('keypress', function(event){
           console.log('I m Excuting inline box addEvent');
            enterFunction(event);
       })
    }
    //producinSear
    function producinSear(element){
        console.log(element);
        console.log('I m doin it');
        var value1=element.classList.contains('active');
        /*var value2=element[1].classList.contains('active');*/
        console.log(value1)
    //producing Serch
         if(element.innerText === 'Web'){
             //console.log(value);
            if(!value1){
               console.log('i m hittin web');
               makeSearch(box.value); 
            }
        }else if(element.innerText === 'Video'){
            if(!value1){
            console.log('i m hittin video');
            videoSearch(box.value);
            }
        }
    }
    
    //error Function
  function err(){
            error.className = 'styleError';
            error.innerHTML = "It's Empty ,You need to fill your query";
    }

}