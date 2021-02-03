import { Tema } from "./tema"
import { usuario } from "./usuario"

export class Postagem{
    public id: number
    public titulo: string
    public descricao: string
    public localizacao: string
    public foto: string
    public dataPostagem: Date
    public email: string
    public telefone: string
    public tema: Tema
    public usuario: usuario
}