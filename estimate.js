const premiums = {
  // All premiums for $200k 3rd-party liability
  310: { D: 238, E: 236, F: 242, G: 211, H: 240, L: 239, N: 215, P: 226, R: 217, S: 200, V: 210, W: 216, X: 235, Y: 206, Z: 271 },
  311: { D: 680, E: 719, F: 756, G: 634, H: 707, L: 662, N: 640, P: 675, R: 660, S: 602, V: 626, W: 639, X: 685, Y: 614, Z: 780 },
  312: { D: 1410, E: 1467, F: 1463, G: 1249, H: 1450, L: 1375, N: 1291, P: 1344, R: 1302, S: 1182, V: 1229, W: 1223, X: 1345, Y: 1225, Z: 158 },
  313: { D: 1841, E: 2044, F: 1972, G: 1822, H: 1992, L: 1843, N: 1747, P: 1824, R: 1807, S: 1608, V: 1692, W: 1635, X: 1967, Y: 1663, Z: 214 },
  314: { D: 2144, E: 2228, F: 2215, G: 1866, H: 2192, L: 2132, N: 1965, P: 2120, R: 1930, S: 1782, V: 1944, W: 1918, X: 2171, Y: 1965, Z: 240 },
  320: { D: 183, E: 178, F: 182, G: 159, H: 182, L: 180, N: 162, P: 172, R: 163, S: 153, V: 158, W: 163, X: 180, Y: 156, Z: 204 },
  321: { D: 512, E: 539, F: 569, G: 474, H: 532, L: 498, N: 481, P: 507, R: 496, S: 449, V: 469, W: 480, X: 514, Y: 461, Z: 584 },
  322: { D: 1055, E: 1099, F: 1098, G: 938, H: 1090, L: 1031, N: 968, P: 1009, R: 977, S: 887, V: 921, W: 917, X: 1008, Y: 920, Z: 119 },
  323: { D: 1381, E: 1532, F: 1478, G: 1365, H: 1493, L: 1380, N: 1312, P: 1365, R: 1355, S: 1207, V: 1270, W: 1225, X: 1473, Y: 1246, Z: 160 },
  324: { D: 1609, E: 1669, F: 1663, G: 1400, H: 1644, L: 1599, N: 1473, P: 1591, R: 1448, S: 1337, V: 1455, W: 1436, X: 1632, Y: 1472, Z: 180 },
  710: { D: 76, E: 73, F: 73, G: 73, H: 73, L: 78, N: 76, P: 73, R: 73, S: 73, V: 72, W: 72, X: 72, Y: 73, Z: 82 },
  711: { D: 172, E: 170, F: 170, G: 170, H: 182, L: 177, N: 172, P: 170, R: 170, S: 162, V: 164, W: 161, X: 160, Y: 170, Z: 193 },
  712: { D: 300, E: 322, F: 311, G: 298, H: 314, L: 302, N: 293, P: 295, R: 276, S: 266, V: 285, W: 273, X: 275, Y: 276, Z: 337 },
  713: { D: 390, E: 420, F: 407, G: 388, H: 410, L: 399, N: 386, P: 388, R: 377, S: 388, V: 377, W: 361, X: 361, Y: 376, Z: 445 },
  714: { D: 432, E: 447, F: 426, G: 426, H: 453, L: 436, N: 459, P: 427, R: 397, S: 426, V: 407, W: 463, X: 393, Y: 412, Z: 510 },
  720: { D: 57, E: 56, F: 56, G: 56, H: 56, L: 57, N: 56, P: 56, R: 56, S: 56, V: 55, W: 53, X: 53, Y: 56, Z: 63 },
  721: { D: 130, E: 128, F: 128, G: 128, H: 135, L: 131, N: 130, P: 128, R: 128, S: 121, V: 126, W: 121, X: 120, Y: 128, Z: 142 },
  722: { D: 225, E: 239, F: 233, G: 221, H: 235, L: 225, N: 219, P: 221, R: 207, S: 202, V: 213, W: 205, X: 206, Y: 207, Z: 252 },
  723: { D: 290, E: 315, F: 305, G: 289, H: 307, L: 297, N: 288, P: 289, R: 280, S: 289, V: 282, W: 272, X: 269, Y: 281, Z: 334 },
  724: { D: 326, E: 335, F: 321, G: 321, H: 337, L: 327, N: 344, P: 322, R: 295, S: 321, V: 306, W: 347, X: 297, Y: 308, Z: 38 },
}


let rateClass = null;
let adjustedRateClass = null;
const rateSelect = document.getElementById('rate-class-select');
rateSelect.addEventListener('change', e => {
  rateClass = rateSelect.options[rateSelect.selectedIndex].value;
  displayPremium();
}, false);

let sixtyFive = false;
const sixtyFiveCheckbox = document.getElementById('sixty-five');
sixtyFiveCheckbox.addEventListener('change', e => {
  sixtyFive = sixtyFiveCheckbox.checked;
  console.log(`sixtyFive == ${sixtyFive}`)
  displayPremium();
}, false);

let collector = false;
const collectorCheckbox = document.getElementById('collector');
collectorCheckbox.addEventListener('change', e => {
  collector = collectorCheckbox.checked;
  console.log(`collector == ${collector}`)
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
  if (rateClass && territory && discount) {

    adjustedRateClass = rateClass
    if (sixtyFive) { adjustedRateClass = parseInt(adjustedRateClass, 10) + 10; }
    if (collector) { adjustedRateClass = parseInt(adjustedRateClass, 10) + 400; }

    baseRatePremium = premiums[adjustedRateClass][territory]
    claimRatedPremium = baseRatePremium * discount
    roundedPremium = Math.round(claimRatedPremium)

    const premiumDisplayElement = document.getElementById('premium-display');
    const rateClassDisplayElement = document.getElementById('rate-class-display');
    const territoryDisplayElement = document.getElementById('territory-display');
    const discountDisplayElement = document.getElementById('discount-display');

    premiumDisplayElement.innerHTML = `~$${roundedPremium}`;
    rateClassDisplayElement.innerHTML = `Rate Class: ${adjustedRateClass}`;
    territoryDisplayElement.innerHTML = `Territory: ${territory}`;
    discountDisplayElement.innerHTML = `Claim Rate: ${Math.round((discount - 1) * 100)}%`;
  }
}
