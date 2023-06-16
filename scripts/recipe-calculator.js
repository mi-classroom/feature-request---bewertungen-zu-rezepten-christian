window.addEventListener("DOMContentLoaded", (event) => {

    const amount = document.querySelector(".js-recipe-calculator-amount");
    const amountBase = document.querySelector("[data-amount-base]").dataset.amountBase;

    const recalculateRecipe = (value) => {
        const recipeIngredients = document.querySelectorAll(".js-recipe-calculator-ingredients [data-amount]");
        recipeIngredients.forEach((recipeIngredient) => {
            const ingredientAmount = recipeIngredient.dataset.amount;
            const ingredientAmountUnit = recipeIngredient.dataset.unit;

            const newAmount = (ingredientAmount / amountBase) * value;
            recipeIngredient.innerHTML = newAmount + " " + ingredientAmountUnit;
        });

        console.log(amountBase)
    };

    amount.addEventListener("change", (event) => {
        event.preventDefault();
        const newValue = event.target.value;
        recalculateRecipe(newValue);

    });

});