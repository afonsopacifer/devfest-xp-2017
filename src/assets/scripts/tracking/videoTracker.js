const videoTracker = (videoElementId, cb1, cb2, ) => {
  const controlTracker = new tracking.ColorTracker(['magenta','yellow']);

  let move;

  controlTracker.on('track', e => {

    if (e.data.length === 0) {
      move = true;
    } else {
      if(move) {
        if (e.data[0].color === 'magenta') cb1();
        if (e.data[0].color === 'yellow') cb2();
      }
      move = false;
    }

  });

  return tracking.track(videoElementId, controlTracker, { camera: true });
}

export default videoTracker;
