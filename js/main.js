const slider = document.getElementById('scroll-container');
let isDown = false;
let startX;
let scrollLeft;
let velocity = 0;
let rafID = null;
let lastX = 0;

const step = () => {
  if (Math.abs(velocity) > 0.5) {
    slider.scrollLeft += velocity;
    velocity *= 0.95; // ແຮງສຽດທານ
    rafID = requestAnimationFrame(step);
  } else {
    // ເມື່ອຢຸດໄຫຼແລ້ວ ໃຫ້ມັນ Snap ເຂົ້າຫາຮູບທີ່ໃກ້ທີ່ສຸດແບບນິ້ມນວນ
    const cardWidth = slider.querySelector('div').offsetWidth + 16; // 16 ແມ່ນໄລຍະ gap
    const targetScroll = Math.round(slider.scrollLeft / cardWidth) * cardWidth;
    
    slider.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }
};

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  cancelAnimationFrame(rafID);
  
  // ປິດ Snap ຂອງ CSS ຖາວອນໃນ JS ເພື່ອບໍ່ໃຫ້ມັນມາຂັດຂວາງ
  slider.style.scrollSnapType = 'none';
  slider.style.scrollBehavior = 'auto';
  
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  lastX = e.pageX;
  velocity = 0;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  rafID = requestAnimationFrame(step);
});

slider.addEventListener('mouseleave', () => {
  if (isDown) {
    isDown = false;
    rafID = requestAnimationFrame(step);
  }
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  velocity = lastX - e.pageX; 
  lastX = e.pageX;
  slider.scrollLeft = scrollLeft - (x - startX) * 1.5;
});