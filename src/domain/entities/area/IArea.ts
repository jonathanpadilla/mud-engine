import { IPlace } from '@domain/entities/place'

export interface IArea {
  id: string
  name: string
  minimumLevel: number
  maximumLevel: number
  places: Array<IPlace>
}
