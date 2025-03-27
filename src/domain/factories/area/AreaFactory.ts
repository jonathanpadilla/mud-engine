import { Area } from '@domain/entities/area'
import type { IArea } from '@domain/entities/area'
import Creator from './Creator'

export default class AreaFactory extends Creator {
  public createArea(name: string): IArea {
    return new Area('', name, 1, 1, [])
  }
}
