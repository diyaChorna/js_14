let sel = x =>document.querySelector(x);
let person = document.forms['person'];

person.button.addEventListener('click', function(){
    let text = person.text.value;
    if(text==""){
        person.reset();
    }
    else{
        person.reset();
        let inputPerson = person.inputPerson.value;
        person.inputPerson.placeholder = text;
    }
})

sel('.inputPlaceholder').onfocus = function() {
    document.body.style.background = 'red';
}

sel('.inputPlaceholder').onblur = function() {
    let inputPlaceholder2 = person2.inputPlaceholder.value;
    document.body.style.background = 'gray';
    person2.inputPlaceholder.placeholder = inputPlaceholder2;
    person2.inputPlaceholder.value = ''
}
