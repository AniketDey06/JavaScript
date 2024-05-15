const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const r = document.querySelector('#results');

    if (h === '' || h <= 0 || isNaN(h)) {
        r.innerHTML = "not Valid height";
    }else if (w === '' || w <= 0 || isNaN(w)) {
        r.innerHTML = "not Valid weight";
    }
    else{
        const bmi = (w/((h*h)/1000)).toFixed(2)
        if (bmi<18.6) {
            r.innerHTML = `<span>${bmi}</span></br><span>Under Weight</span>`;
        } else if(bmi>18.6 && bmi<24.9){
            r.innerHTML = `<span>${bmi}</span></br><span>Normal Range</span>`;
        } else {
            r.innerHTML = `<span>${bmi}</span></br><span>over Weight</span>`;
        }
    }

})