function createSummaryItem(category, score, icon, color) {
  return `
    <div class="summary-item ${color}">
      <img alt="${category} icon" src="${icon}">
      <h3 class="summary-title">${category}</h3>
      <p class="summary-text">${score} / <span>100</span></p>
    </div>
  `;
}

fetch('./data.json').then((response) => {
  return response.json();
}).then((data) => {
  const $summaryList = document.querySelector('.summary-list');
  let total = 0;

  data.forEach((category) => {
    total += category.score;
    $summaryList.innerHTML += createSummaryItem(category.category, category.score, category.icon, category.color);
  });

  const result = total / data.length;
  
  const $total = document.querySelector('.score-number span');

  $total.textContent = result.toFixed(0);
});
