let res=document.querySelector('#res-data');
let hiddenval=document.querySelector('#phonehidden');
let submit=document.querySelector('#submit');



let element = document.querySelector("#phonenumber");
element.addEventListener('click',(e) =>{
let phoneMask = IMask(element, {
        mask: '+{998}00 000 00 00',
        lazy: false,  
        placeholderChar: ' '
        }); 
    })






submit.addEventListener('click',(e) =>{
    let tek=element.value.replaceAll(' ','');
    let rep=tek.replace("+998", '');
    let pattern='^[389][012345789][0-9]{7}$';
    let result=rep.match(pattern);
    if (result!=null)
        {
            hiddenval.value=rep;
            // element.disabled=true;
            if (element.classList.contains('alert-costum'))
            {
                element.classList.remove('alert-costum');
            }
            element.classList.add('succses');
            res.innerHTML=`
            <div class="input-group mb-3">
            <input type="number" max="99999" name='auth' placeholder="Tasdiqlash parolini kiriting" id="authcode" class="form-control p-2">
            </div>
            `;
            setTimeout(()=> {
                submit.setAttribute('type','submit');
            },1000);
            // setTimeout('btnsubmit', 100);
            // function btmsubmit(){
            //     submit.setAttribute('type','submit');
            // };            
            
            
        }
    else
        {
            element.classList.add('alert-costum');
            if (element.classList.contains('succses'))
                {
                    element.classList.remove('succses');
                }
            res.innerHTML=`
            <div class="alert alert-danger" role="alert">
                Siz To'g'ri telefon raqam kiritmadingiz
            </div>
            `;
        }
})
