import {tablePremiums} from './table_premiums.mjs';

let displacement = null;
let rateClass = null;
const displacementSelect = document.getElementById('displacement-select');
displacementSelect.addEventListener('change', e => {
  displacement = displacementSelect.options[displacementSelect.selectedIndex].value;
  displayPremium();
}, false);

let sixtyFive = false;
const sixtyFiveCheckbox = document.getElementById('sixty-five');
sixtyFiveCheckbox.addEventListener('change', e => {
  sixtyFive = sixtyFiveCheckbox.checked;
  displayPremium();
}, false);

let collector = false;
const collectorCheckbox = document.getElementById('collector');
collectorCheckbox.addEventListener('change', e => {
  collector = collectorCheckbox.checked;
  displayPremium();
}, false);

let territory = null;
const territorySelect = document.getElementById('territory-select');
territorySelect.addEventListener('change', e => {
  territory = territorySelect.options[territorySelect.selectedIndex].value;
  displayPremium();
}, false);

let discount = null;
const discountSelect = document.getElementById('discount-select');
discountSelect.addEventListener('change', e => {
  discount = discountSelect.options[discountSelect.selectedIndex].value;
  displayPremium();
}, false);

const displayPremium = () => {
  if (displacement && territory && discount) {

    rateClass = displacement
    if (sixtyFive) { rateClass = parseInt(rateClass, 10) + 10; }
    if (collector) { rateClass = parseInt(rateClass, 10) + 400; }

    const baseRatePremium = tablePremiums[rateClass][territory]
    const claimRatedPremium = baseRatePremium * discount
    const roundedPremium = Math.round(claimRatedPremium)

    const rateClassDisplayElement = document.getElementById('rate-class-display');
    const territoryDisplayElement = document.getElementById('territory-display');
    const liabilityDisplayElement = document.getElementById('liability-display');
    const discountDisplayElement = document.getElementById('discount-display');
    const premiumDisplayElement = document.getElementById('premium-display');
    const feeDisplayElement = document.getElementById('fee-display');
    const totalDisplayElement = document.getElementById('total-display');

    rateClassDisplayElement.innerHTML = rateClass;
    territoryDisplayElement.innerHTML = territory;
    liabilityDisplayElement.innerHTML = '$200k';
    discountDisplayElement.innerHTML = `${Math.round((discount - 1) * 100)}%`;
    premiumDisplayElement.innerHTML = `$${roundedPremium}`;
    feeDisplayElement.innerHTML = '$33'
    totalDisplayElement.innerHTML = `$${roundedPremium + 33}`
  }
}
