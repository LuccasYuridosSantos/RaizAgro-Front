import { Tema } from "./tema"
import { usuario } from "./usuario"

export class Postagem{
    
    public id: number
    public descricao: string
    public localizacao: string
    public foto: string
    public dataPostagem: Date
    public contato: string
    public tema: Tema
    public usuario: usuario
}