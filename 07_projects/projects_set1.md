# Projects related to DOM

Stack Blitz link projects link: [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 1: Color Scheme Switcher 
### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="violet"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>
```
### CSS
``` css
html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
#violet {
  background-color: violet;
}
```
### JS
```js
const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function (btn) {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    // here e is event object
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});

```

## Project 2: BMI Calculator
### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>

```
### CSS
```css
.container {
  width: 575px;
  height: 825px;

  background-color: #869462;
  padding-left: 30px;
  justify-content: center;
  
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}
```
### js
```js
const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    // ** IMP : height and weight ko form ke bahar nahi likhna hai, nahi to empty values aayengi variables main, cause page khulte hi ye code run ho jata hai 
    // and since form me kuch nahi fill kia to empty values variable m chale jayegi

    if(height === '' || isNaN(height) || height <= 0){
        results.innerHTML = `Please provide a valid height! ${height}`;
    }else if(weight === '' || isNaN(weight) || weight <= 0){
        results.innerHTML = `Please provide a valid weight! ${weight}`;
    }else{
        // calculate BMI
       const bmi = (weight / ((height * height)/10000)).toFixed(2); // height in cm, so divide by 10000
        // now showing results
        results.innerHTML = `<span>BMI : ${bmi}</span>`;

        const bmi_guideline = document.createElement('p');
        if(bmi < 18.6){
            bmi_guideline.innerHTML = `You are underweight.`;
        }else if (bmi > 24.9){
            bmi_guideline.innerHTML = `You are overweight.`;
        }else{
            bmi_guideline.innerHTML = `You have a healthy weight.`;
        }
        console.log(bmi_guideline);
        document.getElementById('results').appendChild(bmi_guideline);
    }

    // in else part you could even write simply:
    /*
        else{
            const bmi = (weight / ((height * height)/10000)).toFixed(2); // height in cm, so divide by 10000
            if(bmi <18.6){
                results.innerHTML = `<span>BMI : ${bmi}</span> <p>You are underweight.</p>`;
            } ese hi ........... baki dono ka ...... 
        }
    */

});
```