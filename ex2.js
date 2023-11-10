function trans(){
    let inputMount = +document.getElementById('mount').value;
    let from= +document.getElementById('from').value;
    let to = +document.getElementById('to').value;
    //khoi tao rate giua 2 cot from va to
    let rate = from / to;
    let result = inputMount * rate;
    document.getElementById('result').innerText=result;
}
