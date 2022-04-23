import moment from 'moment'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HourlyWeather from '../../components/hourlyWeather/HourlyWeather'
import SearchBox from '../../components/searchBox/SearchBox'
import TodaysWeather from '../../components/todaysWeather/TodaysWeather'
import WeeklyWeather from '../../components/weeklyWeather/WeeklyWeather'
import cities from '../../lib/city.list.json'
import { weatherApi } from '../../service/config'

export const getServerSideProps = async (context) => {
  const city = cities.find((city) => city.id.toString() === context.params.city);
  
  try {
    const res = await weatherApi.getCurrentWeather(city.coord.lat, city.coord.lon);
    return {
      props: {
        city: city,
        timezone: res.data.timezone,
        currentWeather: res.data.current,
        dailyWeather: res.data.daily,
        hourlyWeather: getHourlyWeather(res.data.hourly, res.data.timezone),
      },
    }
  }catch(err) {
    return err.message
  }
}

const getHourlyWeather = (hourlyData, timezone) => {
  const endOfDay = moment().tz(timezone).endOf('day').valueOf()
  const eodTimeStamp = Math.floor(endOfDay / 1000)

  const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp)
  return todaysData
}

const City = ({
  hourlyWeather,
  city,
  timezone,
  dailyWeather,
}) => {
  return (
    <div>
      <Head>
        <title>{city.name} Weather</title>
      </Head>
      <div className="page-wrapper">
        <div className="container">
          <Link href='/'>
            <span className='back-link'>&larr; Home</span>
          </Link>
          <SearchBox placeholder='Search for another location...'/>
          <TodaysWeather
            city={city}
            timezone={timezone}
            weather={dailyWeather[0]}
          />
          <HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />
          <WeeklyWeather weeklyWeather={dailyWeather} timezone={timezone} />
        </div>
      </div>
    </div>
  )
}

export default City
