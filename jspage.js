function currentTime() {
    let p1 = document.getElementById("p1")
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let ss = date.getSeconds();
    let current_time = hr + ":" + mn + ":" + ss;
    p1.innerHTML = current_time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
currentTime();



// Logic for temperature converter
function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");
   
    if (inputValue == "") {
        alert("Please Enter any Number....")
        location.reload()
    }
    switch (type1.value) {
        case "celcius":
            switch (type2.value) {
                case "celcius":let Celcius = Number.parseInt(inputValue) * 1
                                result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
                                break;
                case "fahrenheit":let Fahrenheit = Number.parseInt(inputValue) * (9 / 5) + 32
                                 result.innerHTML = Fahrenheit.toFixed(3) + " F"
                                break;
                case "kelvin":let Kelvin = Number.parseInt(inputValue) + 273.15
                result.innerHTML = Kelvin.toFixed(3) + " K"
                                break;
                case "rankine":let Rankine = Number.parseInt(inputValue) * (9 / 5) + 491.67
                result.innerHTML = Rankine.toFixed(3) + " R"
                                break;
                case "Delisle":let Delisle = (100-Number.parseInt(inputValue))*1.5        
                result.innerHTML = Delisle.toFixed(3) +  ` &deg;De` 
                                break;
                case "Réaumur":let Réaumur = Number.parseInt(inputValue)*(4/5)
                result.innerHTML = Réaumur.toFixed(3) + ` &deg;Ré`
                                break;
                case "Rømer":let Rømer = Number.parseInt(inputValue)*(21/40)+7.5
                result.innerHTML = Rømer.toFixed(3) + ` &deg;Rø` 
                                break;
            
                default:
                    break;
            }
            break;
        case "fahrenheit":
            switch (type2.value) {
                case "celcius":
                    let Celcius = Number.parseInt(inputValue) - 32 * (5 / 9)
                    result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
                    
                    break;
                case "fahrenheit":let Fahrenheit = Number.parseInt(inputValue) 
                result.innerHTML = Fahrenheit.toFixed(3) + " F"
                    
                    break;
                case  "kelvin":let Kelvin = (Number.parseInt(inputValue) - 32) * (5 / 9) + 273.15
                result.innerHTML = Kelvin.toFixed(3) + " K"
                    
                    break;
                case "Delisle":let Delisle = (212-Number.parseInt(inputValue)) * (5 / 6)
                result.innerHTML = Delisle.toFixed(3) + ` &deg;De`
                    
                    break;
                case "rankine":let Rankine = Number.parseInt(inputValue) + 459.67
                result.innerHTML = Rankine.toFixed(3) + " R"
                    
                    break;
                case "Réaumur":let Réaumur = (Number.parseInt(inputValue)-32)*(4/9)
                result.innerHTML = Réaumur.toFixed(3) + ` &deg;Ré`
                    
                    break;
                case "Rømer":let Rømer = (Number.parseInt(inputValue)-32)*(7/24)+7.5
                result.innerHTML = Rømer.toFixed(3) + ` &deg;Rø`
                    
                    break;
            }
            break;
            case "kelvin":
            switch (type2.value) {
                case "celcius":
                    let Celcius = Number.parseInt(inputValue) - 273.15
                    result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
                     break;
                case "fahrenheit":let Fahrenheit = Number.parseInt(inputValue) - 273.15 * (9 / 5) + 32
                result.innerHTML = Fahrenheit.toFixed(3) + " F"
                break;
                case  "kelvin":let Kelvin = Number.parseInt(inputValue)
                result.innerHTML = Kelvin.toFixed(3) + " K" 
                    break;
                case "Delisle":let Delisle = (373.15-Number.parseInt(inputValue)) *(3/2)
                result.innerHTML = Delisle.toFixed(3) + ` &deg;De`
                    break;
                case "rankine":let Rankine = Number.parseInt(inputValue) * 1.8
                result.innerHTML = Rankine.toFixed(3) + " R"
                    break;
                case "Réaumur":let Réaumur =( Number.parseInt(inputValue)-273.15)*(4/5)
                result.innerHTML = Réaumur.toFixed(3) + ` &deg;Ré`  
                    break;
                case "Rømer": let Rømer = (Number.parseInt(inputValue)-273.15)*(21/40)+7.5
                result.innerHTML = Rømer.toFixed(3) + ` &deg;Rø`
                    break;
            }
            break;
            case "rankine":
            switch (type2.value) {
                case "celcius":
                    let Celcius = Number.parseInt(inputValue) - 491.67 * (5 / 9)
                 result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
                     break;
                case "fahrenheit":let Fahrenheit = Number.parseInt(inputValue) - 495.67
                result.innerHTML = Fahrenheit.toFixed(3) + " F"
                break;
                case  "kelvin":let Kelvin = Number.parseInt(inputValue) * (5 / 9)
                result.innerHTML = Kelvin.toFixed(3) + " K"
                    break;
                case "Delisle":let Delisle = (671.67-Number.parseInt(inputValue)) *(5/6)
                result.innerHTML = Delisle.toFixed(3) + ` &deg;De`
                    break;
                case "rankine":let Rankine = Number.parseInt(inputValue) * 1
                result.innerHTML = Rankine.toFixed(3) + " R"
                    break;
                case "Réaumur":let Réaumur =( Number.parseInt(inputValue)-491.67)*(4/9)
                result.innerHTML = Réaumur.toFixed(3) + ` &deg;Ré`  
                    break;
                case "Rømer": let Rømer = (Number.parseInt(inputValue)-491.67)*(7/24)+7.5
                result.innerHTML = Rømer.toFixed(3) + ` &deg;Rø`
                    break;
            }
            break;
            case  "Delisle":
            switch (type2.value) {
                case "celcius":
                    let Celcius = 100- Number.parseInt(inputValue) *(2/3)
                    result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
                     break;
                case "fahrenheit":let Fahrenheit =212- Number.parseInt(inputValue) * (6 / 5)
                result.innerHTML = Fahrenheit.toFixed(3) + " F"
                break;
                case  "kelvin":let Kelvin = 373.15-Number.parseInt(inputValue) * (2 / 3)
                result.innerHTML = Kelvin.toFixed(3) + " K"
                    break;
                case "Delisle":let Delisle = Number.parseInt(inputValue)
                result.innerHTML = Delisle.toFixed(3) + ` &deg;De`
                    break;
                case "rankine":let Rankine = 671.67-Number.parseInt(inputValue) *(6/5)
                result.innerHTML = Rankine.toFixed(3) + " R"
                    break;
                case "Réaumur":let Réaumur = 80- Number.parseInt(inputValue)*(8/15)
                result.innerHTML = Réaumur.toFixed(3) + ` &deg;Ré` 
                    break;
                case "Rømer": let Rømer = (Number.parseInt(inputValue)-491.67)*(7/24)+7.5
                result.innerHTML = Rømer.toFixed(3) + ` &deg;Rø`
                    break;
            }
            break;
            case  "Réaumur":
            switch (type2.value) {
                case "celcius":
                    let Celcius = Number.parseInt(inputValue) *(5/4)
                    result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
                     break;
                case "fahrenheit":let Fahrenheit =Number.parseInt(inputValue) * (9 / 4)+32
                result.innerHTML = Fahrenheit.toFixed(3) + " F"
                break;
                case  "kelvin":let Kelvin = Number.parseInt(inputValue) * (5 / 4) +273.15
                result.innerHTML = Kelvin.toFixed(3) + " K"
                    break;
                case "Delisle":let Delisle = (80- Number.parseInt(inputValue))*(15/8)
                result.innerHTML = Delisle.toFixed(3) + ` &deg;De`
                    break;
                case "rankine": let Rankine = Number.parseInt(inputValue) *(9/4)+491.67
                result.innerHTML = Rankine.toFixed(3) + " R"
                    break;
                case "Réaumur":let Réaumur = Number.parseInt(inputValue)
                result.innerHTML = Réaumur.toFixed(3) + ` &deg;Ré` 
                    break;
                case "Rømer": let Rømer = Number.parseInt(inputValue)*(21/32)+7.5
                result.innerHTML = Rømer.toFixed(3) + ` &deg;Rø`
                    break;
            }
            break;
            case "Rømer":
            switch (type2.value) {
                case "celcius":
                    let Celcius = (Number.parseInt(inputValue)  - 7.5)*(40/21)
            result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
                     break;
                case "fahrenheit":  let Fahrenheit =(Number.parseInt(inputValue)  - 7.5)*(24/7)+32
                result.innerHTML = Fahrenheit.toFixed(3) + " F"
                break;
                case  "kelvin":let Kelvin = (Number.parseInt(inputValue)  - 7.5)*(40/21)+273.15
                result.innerHTML = Kelvin.toFixed(3) + " K"
                    break;
                case "Delisle":let Delisle = (60- Number.parseInt(inputValue))*205/7
                result.innerHTML = Delisle.toFixed(3) + ` &deg;De`
                    break;
                case "rankine":   let Rankine = (Number.parseInt(inputValue)  - 7.5)*(24/7)+491.67
                result.innerHTML = Rankine.toFixed(3) + " R"
                    break;
                case "Réaumur":let Réaumur = (Number.parseInt(inputValue)-7.5)*(32/21)
                result.innerHTML = Réaumur.toFixed(3) + ` &deg;Ré`
                    break;
                case "Rømer":  let Rømer = Number.parseInt(inputValue)
                result.innerHTML = Rømer.toFixed(3) + ` &deg;Rø`
                    break;
            }
            break;
    }
    
}
    
     

