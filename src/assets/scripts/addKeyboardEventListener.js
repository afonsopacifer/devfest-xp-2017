const addKeyboardEventListener = (btnCode, cb) => {

  window.addEventListener('keydown', (e) => {
    const pressButton = e.which == btnCode || e.keyCode == btnCode;
    if (pressButton) cb();
  });

}

export default addKeyboardEventListener;
