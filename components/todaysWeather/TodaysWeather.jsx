import React from 'react';
import { SvgSelector } from '../icons/SvgSelector';
import moment from 'moment-timezone';

import styles from './todaysWeather.module.scss'
const TodaysWeather = ({city, weather, timezone}) => {
  return (
    <div className={styles.card}>
    <div className={styles.inner}>
      <div className={styles.text}>
      <span className={styles.temp_max}>{Math.floor(weather.temp.max)}&deg;C</span>
      <span className={styles.temp_min}>{Math.floor(weather.temp.min)}&deg;C</span>
      <p>Today</p>
      </div>
      <div className={styles.logo}>
        <SvgSelector id={weather.weather[0].icon}/>
        <p className={styles.description}>{weather.weather[0].description}</p>
      </div>
    </div>
    <div className={styles.footer}>
      <span>Time: 20:20</span>
      <span>City: {city.name} ({city.country})</span>
      <div className={styles.sun_times}>
        <div>
          <span>Sunrise</span>
          <span>{moment.unix(weather.sunrise).tz(timezone).format('LT')}</span>
        </div>
        <div>
          <span>Sunset</span>
          <span>{moment.unix(weather.sunset).tz(timezone).format('LT')}</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TodaysWeather;