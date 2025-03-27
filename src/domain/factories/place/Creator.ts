import type { IPlace } from '@domain/entities'

abstract class Creator {
  public abstract createPlace(code: string, security: number): IPlace
}

export default Creator
