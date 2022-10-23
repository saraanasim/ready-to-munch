import moment from "moment"

export const calculateElapsedTime = time => {
  const currentTime = moment(new Date())
  const elapsedTime = moment(currentTime - time).seconds
  if (elapsedTime < 60) {
    return moment(currentTime).seconds()
  } else {
    if (elapsedTime >= 60 && elapsedTime < 3600) {
      return moment(currentTime).minutes()
    } else {
      return moment(currentTime).hours()
    }
  }
}
