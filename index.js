document.addEventListener('DOMContentLoaded', ()=> {
  const quaters = document.querySelectorAll('.sub-grid-quater')
  quaters.forEach((el)=>{
    el.addEventListener('click', ()=>{
      parentEl = el.parentElement
      parentEl.classList.toggle('closed')
      const target = parentEl.dataset.quater
      const tableContent = document.querySelectorAll(`.accordion-sub-grid[data-quater="${target}"]`)
      tableContent.forEach((el)=>{
        el.classList.toggle('closed')
      })
    })
  })
  const accordions = document.querySelectorAll('.accordion-title')
  accordions.forEach((el)=>{
    el.addEventListener('click', (el)=>{
      const container = el.target.closest('.accordion')
      container.classList.toggle('open')
    })
  })
  const select = document.querySelector('.select-current')
  const selectOptions = document.querySelector('.select-options')

  select.addEventListener('click', () => {
    selectOptions.classList.toggle('open');
  });
  document.addEventListener('click', (event) => {
    if (!select.contains(event.target)) {
      selectOptions.classList.remove('open');
    }
    });
  const inputs = document.querySelectorAll('.first-block__content-cell-input');
  const output = document.querySelector('.first-block__content-cell-output');
  
  // Функция для расчета и вывода результата
  function calculateAndOutput() {
    const coefficient = parseFloat(inputs[0].value) || 0;
    const salary = parseFloat(inputs[1].value) || 0;
    const numberOfSalaries = parseFloat(inputs[2].value) || 0;

    let result = coefficient * salary * numberOfSalaries;
    if(result < 1) {
      result = 0
    }
    output.textContent = result.toLocaleString('ru-RU'); // Форматируем число в строку с разделением разрядов
  }

  // Добавляем обработчики событий на поля ввода
  inputs.forEach((el)=> {
    el.addEventListener('keydown', (evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault())
    el.addEventListener('input', calculateAndOutput)
  })

  // Вызываем функцию при загрузке страницы, чтобы инициализировать значение output
  calculateAndOutput();
})