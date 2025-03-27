import { RoomPlaceFactory } from '../../dist'

const factory = new RoomPlaceFactory()

const roomPlace = factory.createPlace('ROOM_01', 1)
console.log(roomPlace)
