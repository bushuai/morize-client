import Taro from '@tarojs/taro'
import { Query } from '../libs/av-weapp'
import Article from '../models/Article'

const markers = [{
  id: 1,
  longitude: 113.503147,
  latitude: 23.161879,
  width: 18,
  height: 18,
  iconPath: '/assets/icons/hidden.png'
},
{
  id: 2,
  longitude: 120.391308,
  latitude: 36.081845,
  width: 18,
  height: 18,
  iconPath: '/assets/icons/end.png'
},
{
  id: 3,
  longitude: 120.589079,
  latitude: 31.30544
}]

const planningRoute = {
  points: [
    { longitude: 113.503147, latitude: 23.161879 },
    { longitude: 113.75151, latitude: 23.031035 },
    { longitude: 114.060815, latitude: 22.552317 },
    { longitude: 114.348273, latitude: 22.712434 },
    { longitude: 114.427611, latitude: 23.105515 },
    { longitude: 115.649881, latitude: 22.921369 },
    { longitude: 116.693928, latitude: 23.358432 },
    { longitude: 116.618039, latitude: 23.66595 },
    { longitude: 117.659786, latitude: 24.514678 },
    { longitude: 118.131217, latitude: 24.495739 },
    { longitude: 118.675087, latitude: 24.880786 },
    { longitude: 119.016587, latitude: 25.441727 },
    { longitude: 119.310944, latitude: 26.073796 },
    { longitude: 119.551258, latitude: 26.673513 },
    { longitude: 120.718337, latitude: 27.992328 },
    { longitude: 121.438131, latitude: 28.655743 },
    { longitude: 121.428932, latitude: 28.651686 },
    { longitude: 121.617505, latitude: 29.8697 },
    { longitude: 120.584956, latitude: 30.043928 },
    { longitude: 120.22161, latitude: 30.261778 },
    { longitude: 121.472149, latitude: 31.238279 },
    { longitude: 120.589079, latitude: 31.30544 },
    { longitude: 119.977369, latitude: 31.813499 },
    { longitude: 118.799942, latitude: 32.068436 },
    { longitude: 119.430049, latitude: 32.408538 },
    { longitude: 119.029908, latitude: 33.621416 },
    { longitude: 119.21848, latitude: 34.6008 },
    { longitude: 118.353807, latitude: 35.120201 },
    { longitude: 120.391308, latitude: 36.081845 },
    { longitude: 120.391308, latitude: 36.081845 },
    { longitude: 120.391308, latitude: 36.081845 }
  ],
  color: "#2a91e0",
  width: 2,
  dottedLine: false,
  arrowLine: false,
  borderWidth:5
}

const finishedRoute = {
  points: [
    { longitude: 113.503147, latitude: 23.161879 },
    { longitude: 113.75151, latitude: 23.031035 },
    { longitude: 114.060815, latitude: 22.552317 },
    { longitude: 114.348273, latitude: 22.712434 },
    { longitude: 114.427611, latitude: 23.105515 },
    { longitude: 115.649881, latitude: 22.921369 },
    { longitude: 116.693928, latitude: 23.358432 },
    { longitude: 116.618039, latitude: 23.66595 },
    { longitude: 117.659786, latitude: 24.514678 },
    { longitude: 118.131217, latitude: 24.495739 },
    { longitude: 118.675087, latitude: 24.880786 },
    { longitude: 119.016587, latitude: 25.441727 },
    { longitude: 119.310944, latitude: 26.073796 },
    { longitude: 119.551258, latitude: 26.673513 },
    { longitude: 120.718337, latitude: 27.992328 },
    { longitude: 121.438131, latitude: 28.655743 },
    { longitude: 121.428932, latitude: 28.651686 },
    { longitude: 121.617505, latitude: 29.8697 },
    { longitude: 120.584956, latitude: 30.043928 },
    { longitude: 120.22161, latitude: 30.261778 },
    { longitude: 121.472149, latitude: 31.238279 },
    { longitude: 120.589079, latitude: 31.30544 }
  ],
  color: "#ff0000",
  width: 2,
  dottedLine: false,
  arrowLine: false,
  borderWidth:5
}

export const fetchPlanningRoute = () => {
  return planningRoute
}

export const fetchFinishedRoute = () => {
  return finishedRoute
}

export const fetchRouteMarkers = async () => {
  return markers
}
