
document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission action

    // Get values from the form
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;

    // Convert height to meters. 1 foot = 0.3048 meters, 1 inch = 0.0254 meters
    const heightInMeters = (feet * 0.3048) + (inches * 0.0254);

    // Calculate BMI. Formula: weight (kg) / [height (m)]^2
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display the result
    let resultText = `Your BMI is ${bmi.toFixed(2)}. `;
    if(bmi < 18.5) {
        resultText += "You are underweight.";
    } else if(bmi >= 18.5 && bmi < 24.9) {
        resultText += "You have a normal weight.";
    } else if(bmi >= 25 && bmi < 29.9) {
        resultText += "You are overweight.";
    } else {
        resultText += "You are obese.";
    }

    // Consider gender in advice (simple implementation)
    if(gender === 'male') {
        resultText += " Keep up the good work, sir!";
    } else {
        resultText += " Keep up the good work, ma'am!";
    }

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result').textContent = resultText;
});




const scrollDownBtn = document.querySelector('.scroll-down-btn');

scrollDownBtn.addEventListener('click', function() {
  // Option 1: Scroll the entire page down smoothly
  // window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });

  // Option 2: Scroll to a specific element
  const targetSection = document.getElementById('target-section');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});



function analyzeNutrition() {
    const appId = '4c13b49c'; // Should be kept secure
    const appKey = 'd383f303b39949beba98398e3964aaaf'; // Should be kept secure
    const ingredient = document.getElementById('ingredientInput').value;
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(ingredient)}`;

    fetch(url, {
        method: 'GET', // Even though it's a GET request, specifying the method for clarity
    })
    .then(response => response.json())
    .then(data => {
        displayNutritionResults(data);
    })
    .catch(error => {
        console.error('Error fetching nutrition data:', error);
    });
}

function displayNutritionResults(data) {
    const resultsDiv = document.getElementById('nutritionResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (!data || data.calories === 0) {
        resultsDiv.innerHTML = '<p>No nutritional data found for this ingredient. Please try another.</p>';
        return;
    }

    // Displaying basic information
    const calories = document.createElement('p');
    calories.textContent = `Calories: ${data.calories}`;
    resultsDiv.appendChild(calories);

    const weight = document.createElement('p');
    weight.textContent = `Weight: ${data.totalWeight.toFixed(2)}g`;
    resultsDiv.appendChild(weight);

    // Adding more nutritional information
    if (data.totalNutrients) {
        const nutrients = data.totalNutrients;

        const fat = document.createElement('p');
        fat.textContent = `Fat: ${nutrients.FAT ? nutrients.FAT.quantity.toFixed(2) + nutrients.FAT.unit : 'N/A'}`;
        resultsDiv.appendChild(fat);

        const carbs = document.createElement('p');
        carbs.textContent = `Carbohydrates: ${nutrients.CHOCDF ? nutrients.CHOCDF.quantity.toFixed(2) + nutrients.CHOCDF.unit : 'N/A'}`;
        resultsDiv.appendChild(carbs);

        const sugar = document.createElement('p');
        sugar.textContent = `Sugar: ${nutrients.SUGAR ? nutrients.SUGAR.quantity.toFixed(2) + nutrients.SUGAR.unit : 'N/A'}`;
        resultsDiv.appendChild(sugar);

        const protein = document.createElement('p');
        protein.textContent = `Protein: ${nutrients.PROCNT ? nutrients.PROCNT.quantity.toFixed(2) + nutrients.PROCNT.unit : 'N/A'}`;
        resultsDiv.appendChild(protein);

        const cholesterol = document.createElement('p');
        cholesterol.textContent = `Cholesterol: ${nutrients.CHOLE ? nutrients.CHOLE.quantity.toFixed(2) + nutrients.CHOLE.unit : 'N/A'}`;
        resultsDiv.appendChild(cholesterol);

        const sodium = document.createElement('p');
        sodium.textContent = `Sodium: ${nutrients.NA ? nutrients.NA.quantity.toFixed(2) + nutrients.NA.unit : 'N/A'}`;
        resultsDiv.appendChild(sodium);

        // Extend this section to include other nutrients as needed
    } else {
        const noNutrientInfo = document.createElement('p');
        noNutrientInfo.textContent = "Nutritional details are not available for this ingredient.";
        resultsDiv.appendChild(noNutrientInfo);
    }
}




const APP_ID = "7f3cdd81";
const APP_KEY = "f35c9e2ab984e2630f670689483d3ed7";

function searchRecipe() {
  const query = document.getElementById('search-query').value;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const recipes = data.hits.map(hit => hit.recipe);
      displayRecipes(recipes);
    })
    .catch(error => console.error('Error:', error));
}

function displayRecipes(recipes) {
  const resultDiv = document.getElementById('search-result');
  resultDiv.innerHTML = '';

  recipes.forEach(recipe => {
    const div = document.createElement('div');
    div.className = 'recipe';
    div.innerHTML = `
      <h3>${recipe.label}</h3>
      <img src="${recipe.image}" alt="${recipe.label}">
      <p><a href="${recipe.url}" target="_blank">View Recipe</a></p>
    `;
    resultDiv.appendChild(div);
  });
}
