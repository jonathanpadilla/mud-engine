import { Place, PlaceType } from '@domain/entities'
import type { IPlace } from '@domain/entities'
import Creator from './Creator'

export default class RoomPlaceFactory extends Creator {
  public createPlace(code: string, security: number): IPlace {
    return new Place([], code, [], '', false, [], PlaceType.ROOM, [], security)
  }
}
