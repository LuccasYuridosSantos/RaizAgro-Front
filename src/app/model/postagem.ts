import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{

    public id: number
    public dataPostagem: Date
    public maduro: boolean
    public descricao: string
    public localizacao: string
    public tema: Tema
    public usuario: Usuario


}