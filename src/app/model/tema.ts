import { Postagem } from "./postagem"

export class Tema{
    public id: number
    public nome: string
    public descricao: string
    public postagem: Postagem[]

}