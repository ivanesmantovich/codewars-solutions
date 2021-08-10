function cakes(recipe, available) {
  let amountOfCakes = 0;
  let amountOfIngredients = Object.keys(recipe).length;

  function makeCake() {
    let successful = 0;

    for (let [key, value] of Object.entries(recipe)) {
      if (!available.hasOwnProperty(key)) available[key] = 0;
      available[key] -= recipe[key];
      if (available[key] >= 0) successful += 1;
    }

    if (successful == amountOfIngredients) amountOfCakes += 1;
  }

  while (true) {
    let initialValue = amountOfCakes;
    makeCake();
    if (amountOfCakes == initialValue) return amountOfCakes;
  }
}
