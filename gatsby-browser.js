export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`This application has been updated. \n Reload to display the latest version?`)

  if (answer === true) {
    window.location.reload()
  }
}
