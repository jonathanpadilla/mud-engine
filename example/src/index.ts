import { RoomPlaceFactory, AreaFactory } from '../../dist'

// instance
const roomFactory = new RoomPlaceFactory()
const areaFactory = new AreaFactory()

// create rooms
const room1 = roomFactory.createPlace('ROOM_01', 1)
const room2 = roomFactory.createPlace('ROOM_02', 1)
const room3 = roomFactory.createPlace('ROOM_03', 1)
console.log({ room1, room2, room3 })

// create area
const area1 = areaFactory.createArea('AREA_01')
console.log({ area1 })
