import type {
  IPlace,
  IPlaceAttr,
  IPlaceExit,
  IPlaceNpc,
  IPlacePlayer,
} from './IPlace'
import type { PlaceType } from './Place.enums'

export default class Place implements IPlace {
  constructor(
    public attrs: Array<IPlaceAttr> = [],
    public code: string,
    public exits: Array<IPlaceExit> = [],
    public id: string = '',
    public isExitToOtherArea: boolean = false,
    public npcs: Array<IPlaceNpc> = [],
    public placeType: PlaceType,
    public players: Array<IPlacePlayer> = [],
    public security: number,
  ) {}

  addPlayer(player: IPlacePlayer): void {
    const playerExists = this.players.find((p) => p.id === player.id)
    if (!playerExists) this.players.push(player)
  }

  removePlayer(playerId: string): void {
    this.players = this.players.filter((player) => player.id !== playerId)
  }

  addNpc(npc: IPlaceNpc): void {
    const npcExists = this.npcs.find((npc) => npc.id === npc.id)
    if (!npcExists) this.npcs.push(npc)
  }

  removeNpc(npcName: string): void {
    this.npcs = this.npcs.filter((npc) => npc.name !== npcName)
  }

  addExit(exit: IPlaceExit): void {
    const currentPlace = this.exits.find((e) => e.id === exit.id)
    if (currentPlace)
      throw new Error(`the site already has an exit to ${exit.id}`)

    const orientation = this.exits.find(
      (e) => e.orientation === exit.orientation,
    )
    if (orientation)
      throw new Error(`the site already has an exit to ${exit.orientation}`)

    this.exits.push(exit)
  }

  removeExit(exitId: IPlaceExit['id']): void {
    this.exits = this.exits.filter((e) => e.id !== exitId)
  }

  getVisibleExits(): Array<IPlaceExit> {
    return this.exits.filter((e) => e.visible && !e.disabled)
  }

  toJSON(): IPlace {
    return {
      attrs: this.attrs,
      code: this.code,
      exits: this.exits,
      id: this.id,
      isExitToOtherArea: this.isExitToOtherArea,
      npcs: this.npcs,
      placeType: this.placeType,
      players: this.players,
      security: this.security,
    }
  }
}
