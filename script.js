





 let body = document.querySelector('body');
 let Flaglanguage=false;
 let flag=false;



function Create(NameOfClass,textContentName,Path) {
    let name=document.createElement('div');
    name.className+=NameOfClass;
    name.textContent=textContentName;
    Path.appendChild(name);
  
    
   
}
function fillFistRow(newArrOfKeys,keys){
   const index=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,25,26,27,39,40,50,51]
    for(let i = 0; i < newArrOfKeys.length; i++) {
    keys[index[i]].textContent=newArrOfKeys[i];
    keys[index[i]].setAttribute('keyname', keys[index[i]].innerText);
    
}
}

function fillNewLang(firstRowArr,newArrOfKeys,keys){
    let j=0;
    for(let  i = 0; i < newArrOfKeys.length+firstRowArr.length; i++) {
       
    if (i<firstRowArr.length) {
        keys[i].textContent=firstRowArr[i];
    }
    else{
        keys[i].textContent=newArrOfKeys[j];
        j++
    }
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}
}



function getCaretPosition(ctrl) {
 
    if (document.selection) {
        ctrl.focus();
        var range = document.selection.createRange();
        var rangelen = range.text.length;
        range.moveStart('character', -ctrl.value.length);
        var start = range.text.length - rangelen;
        return {
            'start': start,
            'end': start + rangelen
        };
    } 
    else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
        return {
            'start': ctrl.selectionStart,
            'end': ctrl.selectionEnd
        };
    } else {
        return {
            'start': 0,
            'end': 0
        };
    }
}





function fill(firstRowKeys,RowKeys) {
    for (let i = 0; i < rows.length; i++) {
        switch (i) {
            case 0:
                for (let j = 0; j < firstRowKeys.length-7; j++) {
                    if(firstRowKeys[j]=='Backspace'){
                        Create("keys backspace_key",firstRowKeys[j],rows[i]);
                        continue;
                    }
                   Create("keys",firstRowKeys[j],rows[i]);
                   
                }
                break;
            case 1:
                for (let j = 0; j < RowKeys.length; j++) {
                    if(RowKeys[j]=='Tab'){
                        Create("keys tab_key",RowKeys[j],rows[i]);
                        continue;
                    }
                    else if(RowKeys[j]=='slash'){
                        Create("keys slash_key",RowKeys[j],rows[i]);
                        continue;
                    }
                   else if(RowKeys[j]=='Caps Lock'){
                        Create("keys caps_lock_key",RowKeys[j],rows[i]);
                        continue;
                    }
                   else  if(RowKeys[j]=='Enter'){
                        Create("keys enter_key",RowKeys[j],rows[i]);
                        continue;
                    }
                    else if(RowKeys[j]=='L Shift'){
                        Create("keys shift_key shift_left",RowKeys[j],rows[i]);
                        continue;
                    }
                   else  if(RowKeys[j]=='R Shift'){
                        Create("keys shift_key shift_right",RowKeys[j],rows[i]);
                        continue;
                    }
                   else if(RowKeys[j]=='L Ctrl'){
                        Create("keys ctrl_key ctrl_left",RowKeys[j],rows[i]);
                        continue;
                    }
                   else if(RowKeys[j]=='R Ctrl'){
                        Create("keys ctrl_key ctrl_right",RowKeys[j],rows[i]);
                        continue;
                    }
                   else if(RowKeys[j]=='Win'){
                        Create("keys win_key",RowKeys[j],rows[i]);
                        continue;
                    }
                    else  if(RowKeys[j]==''){
                        Create("keys space_key",RowKeys[j],rows[i]);
                        continue;
                    }
                    else  if(RowKeys[j]=='del'){
                        Create("keys del_key",RowKeys[j],rows[i]);
                        continue;
                    }
                    else  if(RowKeys[j]=='↑'){
                        Create("keys arrow arrow_up",RowKeys[j],rows[i]);
                        continue;
                    }
                    else  if(RowKeys[j]=='←'){
                        Create("keys arrow arrow_left",RowKeys[j],rows[i]);
                        continue;
                    }
                    else  if(RowKeys[j]=='→'){
                        Create("keys arrow arrow_right",RowKeys[j],rows[i]);
                        continue;
                    }
                    else  if(RowKeys[j]=='↓'){
                        Create("keys arrow arrow_down",RowKeys[j],rows[i]);
                        continue;
                    }
                   Create("keys",RowKeys[j],rows[i]);
                   
                }
    
    
    break;
    
            default:
                break;
        }
        
    }
}
let discStr="shift + L Ctrl - смена языка;\t зажатие/зажатие кнопки shift - отображение символов \n "

Create("container","",body)
let container=document.querySelector(".container");
Create("discription",discStr,container)
Create("theme","Change theme",container);
let themeButton=document.querySelector(".theme")
Create("keyboard_wrapp","",container);
let keyboardWrapp=document.querySelector(".keyboard_wrapp");

Create("keyboard_keys","",keyboardWrapp);
let keyboardKeys=document.querySelector(".keyboard_keys");

    Create("row","",keyboardKeys);
    Create("row main-row","",keyboardKeys);
    

let rows=Array.from(document.querySelectorAll(".row"));
let firstRowKeys=['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','[',']','slash',';','"',',','.'];
let firstRowKeysOnly=['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
let firstRowRusKeys=['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace','Х','Ъ','/','Ж','Э','Б','Ю'];
let firstRowRusKeysLetters=['Ё','1','2','3','4','5','6','7','8','9','0','0','=','Backspace','Х','Ъ','/','Ж','Э','Б','Ю'];
let firstRowEngKeys=['~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace','{','}','|',':','"','<','>']
let RowKeys=['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','slash','del','Caps Lock','A','S','D','F','G','H','J','K','L',';','"','Enter','L Shift','Z','X','C','V','B','N','M',',','.','/','?','R Shift','↑','L Ctrl','Win','Alt','','Alt','Fn','R Ctrl','←','↓','→']
let RusRowKeys=['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','slash','del','Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','L Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','.',',','R Shift','↑','L Ctrl','Win','Alt','','Alt','Fn','R Ctrl','←','↓','→']

console.log(rows);


let lang='eng';
window.addEventListener('beforeunload', (event) => {
    localStorage.setItem('curLang',lang);
})

lang=localStorage.getItem('curLang')
if(lang=='eng'){
    fill(firstRowKeys,RowKeys);
}
else{fill(firstRowRusKeys,RusRowKeys);}


let text_input=document.createElement('textarea');
    text_input.classList.add('text');
    container.appendChild(text_input);
    text_input=document.querySelector(".text");
    console.log(text_input);


























    
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');
let tab=document.querySelector('.tab_key')
let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let delet=document.querySelector('.del_key');
let ctrlKeyLeft=document.querySelector('.ctrl_left')
let ctrlKeyRight=document.querySelector('.ctrl_right')
let arrows=document.querySelectorAll('.arrow')
let slash=document.querySelector('.slash_key')






for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}


body.onselectstart=function(){return false;}

let languageFlag=false;


themeButton.addEventListener('click',()=>{
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    body.classList.toggle('active');
    themeButton.classList.toggle('active');
    

})

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        
        if(e.code == 'Delete') {
            delet.classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'Tab') {
            tab.classList.add('active')
            text_input.value+='\t'
            e.preventDefault();
        }
        if(e.code == 'ShiftLeft') {
            if(lang=='eng'){fillFistRow(firstRowEngKeys,keys,rows);}
            else{fillFistRow(firstRowRusKeys,keys,rows);}
            shift_left.classList.add('active')
            languageFlag=true;  
           
            
        }
        if(e.code == 'ShiftRight') {
            shift_right.classList.add('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('caps_lock_key_active')
           
        }
        if(e.code == 'ControlLeft') {
            ctrlKeyLeft.classList.add('active');
        }
        if(e.code == 'ControlRight') {
            ctrlKeyRight.classList.add('active');
        }
       if(e.code=='ArrowUp'){arrows[0].classList.add('active')}
        if(e.code=='ArrowLeft'){arrows[1].classList.add('active')}
        if(e.code=='ArrowRight'){arrows[3].classList.add('active')}
        if(e.code=='ArrowDown'){arrows[2].classList.add('active')}
        if(e.code=='Backslash'){slash.classList.add('active')}
          

        if(e.code == 'ControlLeft' && languageFlag &&lang=='eng') {
            ctrlKeyLeft.classList.add('active');
            fillNewLang(firstRowKeysOnly,RusRowKeys,keys);
            languageFlag=false;
            lang='rus'
          
            
        }
        if(e.code == 'ControlLeft' && languageFlag&&lang=='rus') {
            ctrlKeyLeft.classList.add('active');
            fillNewLang(firstRowKeysOnly,RowKeys,keys);
            languageFlag=false;
            lang='eng'
        }
      
      
    }
})




window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code=='Backslash'){slash.classList.remove('active')}
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_left.classList.remove('active')
            shift_right.classList.remove('remove')
            languageFlag=false

            if(lang=='eng'){fillFistRow(firstRowKeys,keys,rows);}
            else{fillFistRow(firstRowRusKeysLetters,keys,rows);}

            
        }
        if(e.code == 'ShiftRight') {
            shift_right.classList.remove('active')
            shift_left.classList.remove('remove')
        }
        if(e.code == 'Delete') {
            delet.classList.remove('active')
        }
      
        if(e.code == 'ControlLeft') {
            ctrlKeyLeft.classList.remove('active');
        }
        if(e.code == 'ControlRight') {
            ctrlKeyRight.classList.remove('active');
        }
        if(e.code=='ArrowUp'){arrows[0].classList.remove('active')}
        if(e.code=='ArrowLeft'){arrows[1].classList.remove('active')}
        if(e.code=='ArrowRight'){arrows[3].classList.remove('active')}
        if(e.code=='ArrowDown'){arrows[2].classList.remove('active')}
        


        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },400)
    }
})



keys.forEach(function(el){
    let flag;
    el.addEventListener('click',function(e){
      
        let pos;
        let str;
        
        
        if(this.textContent==''){
            text_input.value+=" ";
            this.classList.add('active');
        }
        else if(this.textContent=='Enter'){
            text_input.value+="\n";
            this.classList.add('active');
        }
        else if(this.textContent=='Tab'){
            text_input.value+="\t";
            this.classList.add('active');
        }

        else  if(this.textContent=='Backspace'){
            pos=getCaretPosition(text_input);
            console.log(pos);
            str=text_input.value;
            console.log(str);
            str = str.slice(0,pos.start-1);
            text_input.value=str;
            this.classList.add('active');
        }
        else if(this.textContent=='Caps Lock' ){
            this.classList.toggle('caps_lock_key_active');
            
        }

        else if(this.textContent=='R Ctrl'||this.textContent=='L Ctrl'||this.textContent=='Fn'||this.textContent=='del'||this.textContent=='Win'||this.textContent=='R Shift'||this.textContent=='Alt'){
            this.classList.add('active');
            
        }
        else if(this.textContent=='slash'){
            text_input.value+='\\';
            this.classList.add('active');
        }
        else if(this.textContent=='L Shift'){
            this.classList.toggle('shift_key_active')
            if(lang=='eng'){fillFistRow(firstRowEngKeys,keys,rows)}
            else{fillFistRow(firstRowRusKeys,keys,rows)}
            
        }
       
        else{
            if(caps_lock_key.classList.contains('caps_lock_key_active')){
                this.classList.add('active');
                text_input.value+=this.textContent.toUpperCase();
                
            }
          
            else{
                if(!shift_left.classList.contains('shift_key_active')){
                    fillFistRow(firstRowKeys,keys,rows);
                }
                this.classList.add('active');
                text_input.value+=this.textContent.toLowerCase();}
                
            
        }
        setTimeout(()=> {
            this.classList.remove('active')
        },400)
        
    })
     
})
