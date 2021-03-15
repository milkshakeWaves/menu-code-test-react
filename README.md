Menu project
====================================
## Run the project
- `npm start`

## Run the tests
- `npm test` (runs all the tests)
- `npm run test-ts`(only runs ts tests)
- `npm run test-tsx` (only runs tsx components tests)

## Instructions
- The main page has 2 sections, one per diner, where you can select the dishes by clicking on the category (starters, mains, desserts);
- Once the dish has been selected, it changes color to green and the total bill is updated (right bottom of the screen);
- To unselect a dish, just click on it and it turn white, and the tot is updated as well;
- When the 2 diners want to confirm the meals, just click on the confirm button:
  - if the order is rule compliant, a message of success is shown;
  - if at least one rule has been broken, an alert is shown with the first problem to fix;
- Once the order is correclty placed, the counter is reset.
