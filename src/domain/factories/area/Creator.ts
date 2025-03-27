import type { IArea } from '@domain/entities/area'

abstract class Creator {
  public abstract createArea(name: string): IArea
}

export default Creator
