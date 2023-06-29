

const weightValue = document.getElementById("result");
const resultPara = document.querySelector(".text-result");
const computeBtn = document.getElementById("compute-bmi");


function calculateBmi() {
  const heightEl = document.getElementById("input-field").value;
  const weightEl = document.getElementById("input-fields").value;

      let bmiValue = (weightEl / ((heightEl * heightEl) / 10000)).toFixed(2);

    weightValue.textContent = bmiValue;

  if(heightEl === "" || heightEl > 255 || isNaN(heightEl)){
    alert("Enter a valid height")
    weightValue.textContent = ""
  }else if(weightEl === "" || weightEl > 442 || isNaN(weightEl)){
    alert("Enter a valid weight")
    weightValue.textContent = ""
  }else{

    if(bmiValue < 18.5){
      resultPara.textContent = "Weight Condition: You are Underweight"
    }else if(bmiValue >= 18.5 && bmiValue < 25){
      resultPara.textContent = "Weight Condition: You are perfectly healthy"
    } else if (bmiValue >= 25 && bmiValue < 30){
      resultPara.textContent = "Weight Condition: You are Overweight"
    } else if(bmiValue >= 30 && bmiValue < 190){
      resultPara.textContent = "Weight Condition: You are Obese"
    } else if(bmiValue >= 190){
      alert("The highest ever recorded BMI is 186. Please meet a doctor.")
      weightValue.textContent = ""
    }
  }
  
}



computeBtn.addEventListener("click", calculateBmi);
