import React from 'react'
import HourlyCard from './HourlyCard'
import moment from 'moment-timezone';
import styles from './hourlyWeather.module.scss'

const HourlyWeather = ({ hourlyWeather, timezone }) => {
  return (
    <div className={styles.list}>
      {hourlyWeather?.map((item, i) => (
        <div key={item.dt} className={styles.info}>
          <h2>{i === 0 ? 'NOW' : moment.unix(item.dt).tz(timezone).format('LT')}</h2>
          <HourlyCard timezone={timezone} {...item} />
        </div>
      ))}
    </div>
  )
}

export default HourlyWeather
