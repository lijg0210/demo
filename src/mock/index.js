import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/api/leftData', {code: 0, data: data.leftData})
Mock.mock('/api/navData', {code: 0, data: data.navData})