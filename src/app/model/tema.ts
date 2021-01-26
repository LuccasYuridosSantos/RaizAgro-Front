import { Postagem } from "./Postagem"

export class Tema{

    public id: number
    public categoria: string
    public ativo: boolean
    public descricao: string
    
    public postagem: Postagem[]
}