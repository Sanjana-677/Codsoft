let ans=document.getElementById('ans');

buttons = document.querySelectorAll('button');
let screenvalue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        text = e.target.innerText;
        console.log('text is ',text);

        if(text=='X'){
            text ='*';
            screenvalue +=text;
            ans.value = screenvalue;
        }
        else if(text=='C')
        {
        screenvalue=' ';
          ans.value=screenvalue;
        }
        else if(text == '=')
        {
            ans.value = eval(screenvalue);
        }
        else{
            screenvalue +=text;
            ans.value = screenvalue;
        }
    })
}