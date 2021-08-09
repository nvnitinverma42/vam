import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'vamstar';
  jsonData = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 9 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
  85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
  "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
  "HeightCm": 167, "WeightKg": 82}];

  bmiCalValue:any;
  bmiCategory:any;
  bmiRange:any;


  ngOnInit(){

    this.bmiCalValue='';
    this.bmiCategory='';
    this.bmiRange=''

  
  
  }

  getBmi(weight:any,height:any){

    let heightInMtr = height/100;
    let cal = weight/heightInMtr;


    this.calHealthRisk(cal.toFixed(2))

    this.bimRange(cal.toFixed(2))
   

    return cal.toFixed(2)

  }

//   Low risk, Enhanced risk, Medium risk, High
// risk Very high risk

  calHealthRisk(cal:any){
    //console.log("djdjyyyyyyyyyyy",cal)
    if(cal <= 18.4){
      this.bmiCalValue = "18.4 and below";
      this.bmiCategory='Underweight'
      this.bmiRange ='18.4 and below'

    } else if(cal >= 18.5 && cal <= 24.9) {
      this.bmiCalValue = 'Malnutrition risk';
      this.bmiCategory='Normal Weight'
      this.bmiRange ='18.5 -24.9'

    } else if(cal >= 25 && cal <= 25.9) {
      this.bmiCalValue = 'Low risk';
      this.bmiCategory='Overweight';
      this.bmiRange ='25- 25.9'

    } else if(cal >= 30 && cal <= 34.9) {
      this.bmiCalValue = 'Enhanced risk';
      this.bmiCategory='Moderately Obese';
      this.bmiRange ='30- 34.9'

    } else if(cal >= 35 && cal <= 35.9) {
      this.bmiCalValue = "Medium risk";
      this.bmiCategory='Severely Obese'
      this.bmiRange ='35- 35.9'

    } else if(cal >= 40 ) {
      this.bmiCalValue = 'Very High risk'
      this.bmiCategory='40 and above'
    }

  }



    bimRange(cal:any){

    }

    
    
    

  





}
