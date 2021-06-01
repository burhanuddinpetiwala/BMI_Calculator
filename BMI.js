const form178 = document.querySelector("form");  // Calling the form178 tag
const divTag178 = document.querySelectorAll("div")[0];
const div178 = document.querySelectorAll("div")[1];  // Calling the div tag
let Category = "" 
// Taking input from the user for height and weight and using it to calculate BMI 
form178.addEventListener('submit', function(event){
    event.preventDefault();

    const height178 = parseFloat(document.querySelectorAll('input')[0].value);
    const Weight178 = parseFloat(document.querySelectorAll('input')[1].value);

    if(!height178){
        alert("Please Enter a valid Height (in meters)");
    }
    else if(!Weight178){
        alert("Please Enter a valid weight (in kgs)");
    }
    else {
        var BMI178 = (Weight178/height178**2).toFixed(2);

        ctgry(); // Calling ctgry function which would get different BMI range categories
    }
        // Defining variable Category which would hold different BMI ranges
    // Defining function to hold different BMI ranges
    function ctgry(){
        if(BMI178 < 16.0){
            Category = "Severely Underweight";  
        }
        else if(BMI178 >= 16.0 && BMI178 <= 18.4){
            Category = "Underweight";
        }
        else if(BMI178 > 18.4 && BMI178 <= 24.9){
            Category = "Normal";
        }
        else if(BMI178 > 24.9 && BMI178 <= 29.9){
            Category = "Overweight";
        }
        else if(BMI178 > 29.9 && BMI178 <= 34.9){
            Category = "Moderately Obese";
        }
        else if(BMI178 > 34.9 && BMI178 <= 39.9){
            Category = "Severely Obese";
        }
        else{
            Category = "Morbidly Obese";
        }
        // Printing the BMI and Category
        divTag178.innerHTML = `<p>Your BMI is: ${BMI178}</p>`;
        div178.innerHTML = `<p>You are <span>${Category}</span></p>`;
}
        console.log(Category);

        divTag178.style.fontSize = "25px";
        div178.style.fontSize = "25px"  // Increasing font size of div tag
        // Calling the span tag defined under innerhtml
        let spanTag = document.querySelector("span");
        spanTag.style.fontWeight = "21px"
        spanTag.style.fontSize = "30px";
                // Different styling are hold for different BMI categories.
            if(Category == "Severely Underweight"){
                spanTag.style.color = "cyan";
            }
            else if(Category == "Underweight"){
                spanTag.style.color =  "rgb(0, 253, 190)";
            }
            else if(Category == "Normal"){
                spanTag.style.color = "rgb(0, 255, 149)";
            }
            else if(Category == "Overweight"){
                spanTag.style.color = "rgb(200, 255, 0)";
            }
            else if(Category == "Moderately Obese"){
                spanTag.style.color = "rgb(251, 255, 0)";
            }
            else if(Category == "Severely Obese"){
                spanTag.style.color = "rgb(255, 230, 0)";
            }
            else{
                spanTag.style.color = "rgb(255, 30, 0)";
            }
})