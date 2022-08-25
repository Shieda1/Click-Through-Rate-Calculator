// https://calculator.swiftutors.com/click-through-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const clickThroughRateRadio = document.getElementById('clickThroughRateRadio');
const totalClicksRadio = document.getElementById('totalClicksRadio');
const adImpressionsRadio = document.getElementById('adImpressionsRadio');

let clickThroughRate;
let totalClicks = v1;
let adImpressions = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

clickThroughRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Clicks';
  variable2.textContent = 'Ad Impressions';
  totalClicks = v1;
  adImpressions = v2;
  result.textContent = '';
});

totalClicksRadio.addEventListener('click', function() {
  variable1.textContent = '(CTR) Click Through Rate (%)';
  variable2.textContent = 'Ad Impressions';
  clickThroughRate = v1;
  adImpressions = v2;
  result.textContent = '';
});

adImpressionsRadio.addEventListener('click', function() {
  variable1.textContent = '(CTR) Click Through Rate (%)';
  variable2.textContent = 'Total Clicks';
  clickThroughRate = v1;
  totalClicks = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(clickThroughRateRadio.checked)
    result.textContent = `Click Through Rate = ${computeClickThroughRate().toFixed(2)} %`;

  else if(totalClicksRadio.checked)
    result.textContent = `Total Clicks = ${computeTotalClicks().toFixed(2)}`;

  else if(adImpressionsRadio.checked)
    result.textContent = `Ad Impressions = ${computeAdImpressions().toFixed(2)}`;
})

// calculation

function computeClickThroughRate() {
  return (Number(totalClicks.value) / Number(adImpressions.value)) * 100;
}

function computeTotalClicks() {
  return (Number(clickThroughRate.value) / 100) * Number(adImpressions.value);
}

function computeAdImpressions() {
  return Number(totalClicks.value) / (Number(clickThroughRate.value) / 100);
}