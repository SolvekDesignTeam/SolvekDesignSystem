
  function initGsap() {
    var tl = gsap.timeline();

   // .to() 메서드는 요소를 특정 상태로 애니메이션
    tl.to('.txtbox ul li', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.inOut',
      y:0,
      stagger: 0.1
    });
    
    tl.to('.solution-box', {
      opacity: 1,
      scale: 1,
      duration:2.5,
      ease: "elastic.out(1,0.5)",
    },'-=0.9')
    
    tl.to('.solution-box .sol-l-img img', {
      opacity: 1,
      scale: 1,
      duration:1,
      stagger: 0.1,
      ease: 'power2.inOut',
      transformOrigin: "center",
    },'<')

    tl.to('.line-01', {
      duration: 2,
      opacity: 1,
      ease: "elastic.out(1,0.5)",
      y:0,
      stagger: 0.1
    },'-=2') 

    tl.to('.line-02', {
      duration: 1,
      opacity: 2,
      ease: "elastic.out(1,0.5)",
      y:0,
      stagger: 0.1
    },'-=1.9')
    
    tl.to('.sol-txt', {
      scale: 1,
      duration: 2,
      ease: "elastic.out(1,1)",
    },'-=2')

    tl.to("#mainRect", {
      opacity: 1,
      duration: 0.7,
      ease: "power2.inOut"
    },'-=2');

    tl.to(["#mainLine", "#subLine"], {
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
      ease: "power1.inOut"
    },'-=1');
    
    tl.to(".smallRect", {
      opacity: 1,
      duration: 0.3,
      stagger: 0.15,
      ease: "power1.inOut"
    },'-=1');

    tl.to(".sol-txt p", {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut"
    },'-=1');

    tl.to(".hello", {
      opacity: 1,
      duration: 2,
      y:0,
      ease: "elastic.out(1,0.5)",
    },'-=2');

    tl.to(".hello p", {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut"
    },'-=1.5'); 

    tl.to(".hello-close", {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut"
    },'-=1.8');
    
    tl.to('.hello-search', {
      scale: 1,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    },'-=1.2');
    
    tl.to('.popupdiv', {
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    },'-=1.2');

    tl.to('.popup p', {
      opacity: 1,
      y:0,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    },'-=1.2');
    
    tl.to('.popup-close', {
      opacity: 1,
      y:0,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    },'-=1.2');
    
    tl.to('.popup-content div', {
      opacity: 1,
      y:0,
      duration: 1.5,
      stagger: 0.1,
      ease: "elastic.out(1,1)",
    },'-=1.2');
    
    
  }
