import { Postagem } from "./Postagem"

export class Usuario {

    public id: number
    public nomeCompleto: string
    public usuario: string
    public email: string
    public senha: string
    public tipo: string
    public foto: string

    public postagem: Postagem[]



}