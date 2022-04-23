import React from 'react';
import moment from 'moment-timezone';
import styles from './weeklyWeather.module.scss';
import { SvgSelector } from '../icons/SvgSelector';
const WeeklyWeather = ({weeklyWeather, timezone}) => {
  return (
    <>
      <div className="weekly">
        <h3 className="weekly__title">Weekly <span>Weather</span></h3>
        {weeklyWeather?.map((item, i) => {
          if(i === 0) return;
          return (
            <div key={item.dt} className="weekly__card">
              <div className="weekly__inner">
                <div className="weekly__left-content">
                  <div>
                    <h3>
                      {moment.unix(item.dt).tz(timezone).format('dddd')}
                    </h3>
                    <h4>
                      <span>{Math.floor(item.temp.max)}&deg;C</span>
                      <span>{Math.floor(item.temp.min)}&deg;C</span>
                    </h4>
                  </div>
                  <div className="weekly__sun-times">
                    <div>
                      <span>Sunrise</span>
                      <span>
                        {moment.unix(item.sunrise).tz(timezone).format('LT')}
                      </span>
                    </div>
                    <div>
                      <span>Sunset</span>
                      <span>
                        {moment.unix(item.sunset).tz(timezone).format('LT')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="weekly__right-content">
                  <div className="weekly__icon-wrapper">

                  <SvgSelector id={item.weather[0].icon}/>
                  </div>
                  <h5>{item.weather[0].description}</h5>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default WeeklyWeather;