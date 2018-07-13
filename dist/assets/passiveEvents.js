  console.log('* * * here * * *');

  document.getElementById("body2").addEventListener('mouseup', onMouseUp); // {passive: true, capture: false}
  document.getElementById("body2").addEventListener('mouseup', onMouseUp, true); // {passive: true, capture: true}
  document.getElementById("body2").addEventListener('mouseup', onMouseUp, false); // {passive: true, capture: false}
  document.getElementById("body2").addEventListener('mouseup', onMouseUp, {passive: false}); // {passive: false, capture: false}
  document.getElementById("body2").addEventListener('mouseup', onMouseUp, {passive: false, capture: false}); // {passive: false, capture: false}
  document.getElementById("body2").addEventListener('mouseup', onMouseUp, {passive: false, capture: true}); // {passive: false, capture: true}
  document.getElementById("body2").addEventListener('mouseup', onMouseUp, {passive: true, capture: false}); // {passive: true, capture: false}
  document.getElementById("body2").addEventListener('mouseup', onMouseUp, {passive: true, capture: true}); // {passive: true, capture: true}

  function onMouseUp() {
    console.log('here');
  }

  // document.addEventListener('wheel', (evt) => {
  //   // ... do stuff with evt
  //   console.log('done1');
  // }, {
  //   passive: true
  // });
  //
  // document.addEventListener('mousewheel', (evt) => {
  //   console.log('done2');
  // }, {
  //   passive: true
  // });
  //
  // document.addEventListener('touchstart', (evt) => {
  //   console.log('done3');
  // }, {
  //   passive: true
  // });
  //
  // document.addEventListener('touchmove', (evt) => {
  //   console.log('done4');
  // }, {
  //   passive: true
  // });
