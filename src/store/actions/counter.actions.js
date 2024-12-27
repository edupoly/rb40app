import { DEC, INC } from "./actions"

export function incCounter(){
    return {type:INC}
}
export function decCounter(){
    return {type:DEC}
}