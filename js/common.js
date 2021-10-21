//seach 로고를 클릭가능하게!
const seachEl = document.querySelector('.search');
const seachInputEl = seachEl.querySelector('input');

seachEl.addEventListener('click', function () {
  //logic
  seachInputEl.focus();
});


//통합검색어 추가
seachInputEl.addEventListener('focus', function () {//헨들러
  seachEl.classList.add('focused');
  seachInputEl.setAttribute('placeholder', '통합검색');
});
seachInputEl.addEventListener('blur', function () {//헨들러
  seachEl.classList.remove('focused');
  seachInputEl.setAttribute('placeholder', '');
});


//년도 자동갱신
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021

