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

//화면 스크롤 배지
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500){// 화면Y축 500px보다 높으면
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'//숫자는 그냥 사용 가능하지만 문자로 입력하는 부분은 ''처리 필수!!!

    });
    //badgeEl이 0.6초동안 에니메이션 처리되면서, 
    //opacity: 0 으로 점점수렴하게 된다
  }else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
//header .badges 를 찾아 화면에 scroll이벤트를 추가하여 
//화면이 스크롤 되면 콘솔에 scroll! 표시!!
// _.throttle(함수, 시간) 기능을 사용해서 과부하 방지!!


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay:  (index) * .7,// 0.7, 1.4, 2.1, 2.7초.
    opacity:1
  });
});


//Swiper
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-conrainer', {
  // direction:'horizontal' 기본값이 수평 슬라이드이다. 생략가능!!!
  slidesPerView: 3,//한번에 보여줄 슬라이드 개수
  spaceBetween: 10,// 슬라이드 사이 여백
  centeredSlides:true,// 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000//기본값은 3000(3초)
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자!!
    Clickable: true//사용자 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});








