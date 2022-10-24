import moment from "moment"

export const calculateElapsedTime = time => {
  console.log("Time to subtract", time)
  const currentTime = moment(new Date())
  const elapsedTime = currentTime.diff(time)
  const duration = moment.duration(elapsedTime)
  const durationAsSeconds = duration.asSeconds()
  console.log("Elapsed time is", durationAsSeconds)
  if (durationAsSeconds < 60) {
    return `${moment(durationAsSeconds).seconds()} seconds`
  } else {
    if (elapsedTime >= 60 && elapsedTime < 3600) {
      return `${moment(durationAsSeconds).minutes()} minutes`
    } else {
      return `${moment(durationAsSeconds).hours()} hours`
    }
  }
}
