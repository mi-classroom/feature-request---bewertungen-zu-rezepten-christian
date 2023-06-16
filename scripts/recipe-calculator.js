window.addEventListener("DOMContentLoaded", (event) => {

    const amount = document.querySelector(".js-recipe-calculator-amount");
    const amountBase = document.querySelector("[data-amount-base]").dataset.amountBase;
    const recipeCalculatorIngredients = document.querySelector(".js-recipe-calculator-ingredients");

    const recalculateRecipe = (value) => {
        const recipeIngredients = recipeCalculatorIngredients.querySelectorAll("[data-amount]");
        recipeIngredients.forEach((recipeIngredient) => {
            const ingredientAmount = recipeIngredient.dataset.amount;
            const ingredientAmountUnit = recipeIngredient.dataset.unit;
            const newAmount = (ingredientAmount / amountBase) * value;

            recipeIngredient.innerHTML = newAmount + " " + ingredientAmountUnit;
            recipeCalculatorIngredients.classList.toggle("has-been-changed");
        });

    };

    amount.addEventListener("change", (event) => {
        event.preventDefault();
        const newValue = event.target.value;
        recalculateRecipe(newValue);
    });


    amount.addEventListener("submit", (event) => {
        event.preventDefault();
        const newValue = event.target.querySelector("input").value;
        recalculateRecipe(newValue);
    });

});