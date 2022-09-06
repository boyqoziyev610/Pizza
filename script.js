"use strict";

{
    const btnShow = document.querySelector(".show-but");
    const result = document.querySelector("#res");

    btnShow.addEventListener("click", () => {
        const checkbox = document.querySelector('input[type="checkbox"]:checked');
        result.innerText = checkbox.value
    });

}

{
    let btnShow1 = document.querySelector(".un");
    let result1 =("h5")



    btnShow1.addEventListener("click", () => {
        let checkbox1 = document.querySelector('.val');
        let change = document.querySelector('.hom')
        result1.innerText = checkbox1.value
        result1.innerText = change.value
    });

}

{
    document.querySelector('.b-10').addEventListener('click', () => {
        let data = document.querySelector('.s-10').value;
        document.querySelector('.out-10').innerHTML = data;
    });
        
}

