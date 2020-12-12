const celsius_input = document.querySelector(".celsius_input");
const convert_btn = document.querySelector(".convert_btn");


convert_btn.addEventListener('click', () => {
    // console.log(celsius, celsius_input.value);
    const result = document.querySelector(".result_conteiner");
    if (celsius_input.value.replace(/ /g, "")) {

        result.removeAttribute("id");
        const celsius = Number(celsius_input.value);
        const faranheit = ((celsius * (9 / 5)) + 32);
        const kelvin = (celsius + 273.15);
        celsius_input.value = '';
        show_loading();
        setTimeout(show_results(celsius, kelvin, faranheit), 1000);

    } else {
        result.removeAttribute('id');
        show_error('Invalid number pleasse try again');
        celsius_input.value = "";
    };
});

function show_error(error_text) {
    const msg = document.createElement('h6');
    msg.textContent = error_text;
    msg.classList.add('error');
    const input_conteiner = document.getElementById("input_conteiner");
    input_conteiner.insertBefore(msg, input_conteiner.firstChild);
    setTimeout(() => input_conteiner.removeChild(msg), 2500);
};

function show_results(celsius, kelvin, faranheit) {
    const kelvin_value = document.querySelector('#kelvin');
    const faranheit_value = document.querySelector("#faranheit");
    const celsius_value = document.querySelector("#celsius");
    const result = document.querySelector('.result_conteiner');
    const loading = document.querySelector('#loading');
    kelvin_value.firstChild.textContent = kelvin;
    faranheit_value.firstChild.textContent = faranheit;
    celsius_value.firstChild.textContent = celsius;
    setTimeout(() => (result.id = 'result_conteiner_show'), 500);

};

function show_loading() {
    const loading = document.querySelector("#loading");
    loading.style.display = "flex";
    setTimeout(() => loading.style.display = "none", 500);

};