import type { PlaceType, Orientation } from './Place.enums'

export type IPlaceType = `${PlaceType}`
export type OrientationType = `${Orientation}`

export interface IPlace {
  attrs?: Array<IPlaceAttr>
  code: string
  exits: Array<IPlaceExit>
  id?: string
  isExitToOtherArea?: boolean
  lightPost?: number
  npcs?: Array<IPlaceNpc>
  placeType: IPlaceType
  players: Array<IPlacePlayer>
  security: number
  windows?: number
}

export interface IPlaceAttr {
  code: string
  disabled?: boolean
  value: string | number | boolean
}

export interface IPlaceExit {
  disabled?: boolean
  distance?: number
  id: string
  lockable?: boolean
  locked?: boolean
  name: string
  opened: boolean
  orientation: OrientationType
  placeId: string
  unlocker?: Array<string>
  visible?: boolean
}

// temporal
export interface IPlaceNpc {
  id: string
  name: string
  quests: Array<IPlaceNpcQuest>
}

export interface IPlaceNpcQuest {
  questId: string
  requirements: Array<string>
}

export interface IPlacePlayer {
  id: string
  name: string
}
