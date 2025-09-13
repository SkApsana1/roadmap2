const selectBox=document.querySelector('.select-box');
const selectOption=document.querySelector('.select-option');
const ivalue=document.querySelector('#ivalue');
const optionSearch=document.querySelector('#optionSearch');
const options=document.querySelector('.options');
const optionsList =document.querySelectorAll('.options li');

selectOption.addEventListener('click',function(){
    selectBox.classList.toggle('active');
})
optionsList.forEach(function(optionsListSingle){
    optionsListSingle.addEventListener('click',function(){
        text=this.textContent;
        ivalue.value=text;
        selectBox.classList.remove('active');
    })
})

