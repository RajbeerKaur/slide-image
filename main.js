
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns .ForEach(dropdown ); {
     
    const select = dropdown.querySelector('.select');
    const sign = dropdown.querySelector('.sign');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');
}

//click event

select.addEventListener('click');{

select.classlist.toggle('select-clicked');

sign.classlist.toggle('sign-rotate');

menu.classlist.toggle('menu-open');

}

//all option

options.forEach(option);{
    option.addEventListener('click');{

        selected.innerText =option.innerText;

        select.classlist.remove('select-clicked');

        sign.classlist.remove('sign-rotate');

        menu.classlist.remove('menu-open');

        options.forEach(option);{
            option.classlist.remove('active');
console.log("dropdowns");
        }
    }  
}