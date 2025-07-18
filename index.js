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
})