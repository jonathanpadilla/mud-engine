import type { IArea } from './IArea'
import type { IPlace } from '@domain/entities/place'

export default class Area implements IArea {
  constructor(
    public id: string = '',
    public name: string = '',
    public maximumLevel: number = 1,
    public minimumLevel: number = 1,
    public places: Array<IPlace> = [],
  ) {}

  addPlace(place: IPlace): void {
    this.places.push(place)
  }

  removePlace(placeId: string): void {
    this.places = this.places.filter((place) => place.id !== placeId)
  }
}
