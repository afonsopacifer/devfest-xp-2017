const bulletsStatus = (allBullets, currentPosition) => {

  allBullets.forEach((bullet, index) => {
    index === currentPosition
    ? bullet.classList.add('bullet--active')
    : bullet.classList.remove('bullet--active')
  })

}

export default bulletsStatus;
