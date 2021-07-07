var obj;

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {
      var image = document.createElement("img")
      var nomeDrink = document.createElement("h1");
      var categoria = document.createElement("h2");
      var tipologia = document.createElement("h3");
      // ingredienti
      var ing1 = document.createElement("p");
      var ing2 = document.createElement("p");
      var ing3 = document.createElement("p");
      var ing4 = document.createElement("p");
      var ing5 = document.createElement("p");

      var istruzioni = document.createElement("p");

      nomeDrink.innerHTML = obj.meals[0].strMeal;
      document.body.appendChild(nomeDrink);  

      image.src = obj.meals[0].strMealThumb;
      document.body.appendChild(image);

      categoria.innerHTML = obj.meals[0].strCategory;
      document.body.appendChild(categoria); 
      
      ing1.innerHTML = obj.meals[0].strIngredient1;
      document.body.appendChild(ing1);

      ing2.innerHTML = obj.meals[0].strIngredient2;
      document.body.appendChild(ing2);

      ing3.innerHTML = obj.meals[0].strIngredient3;
      document.body.appendChild(ing3);

      ing4.innerHTML = obj.meals[0].strIngredient4;
      document.body.appendChild(ing4);

      ing5.innerHTML = obj.meals[0].strIngredient5;
      document.body.appendChild(ing5);

      istruzioni.innerHTML = obj.meals[0].strInstructions;
      document.body.appendChild(istruzioni);

    })





