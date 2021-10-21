
//화면 스크롤 배지
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500){// 화면Y축 500px보다 높으면
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'//숫자는 그냥 사용 가능하지만 문자로 입력하는 부분은 ''처리 필수!!!
    });
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
    //badgeEl이 0.6초동안 에니메이션 처리되면서, 
    //opacity: 0 으로 점점수렴하게 된다
  }else{
    //배지 보이기
    
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));
//header .badges 를 찾아 화면에 scroll이벤트를 추가하여 
//화면이 스크롤 되면 콘솔에 scroll! 표시!!
// _.throttle(함수, 시간) 기능을 사용해서 과부하 방지!!

toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  // scrollTo 플러그인이 있어야지만 사용가능!!!!!
  gsap.to(window, .7, {
    scrollTo: 0
  });
});




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
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView:5,   //한번에 보여지는 슬라이드 수
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});



/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  // 요소가 보여야 하면,
  } else {
    promotionEl.classList.remove('hide')
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObjct(selector, delay, size){
  // gasp.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자// 애니메이션 동작 시간
    {// 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObjct('.floating1' , 1, 15);
floatingObjct('.floating2' , .5, 15);
floatingObjct('.floating3' , 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEls) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEls, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //뷰포트 최상단부터 최하단까지 0~1이다. (상단에서80%
      //triggerHook 감시하고 있는 요소가 뷰포트에 어느 지점에서 감시 되었는지 판단할것인가 지정해주는 옵션
    })
    .setClassToggle(spyEls, 'show')
    .addTo(new ScrollMagic.Controller());
});
