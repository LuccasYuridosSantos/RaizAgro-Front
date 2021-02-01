import { Postagem } from "./postagem"

export class usuario{
    public id: number;
    public nomeCompleto: string;
    public usuario: string;
    public email: string;
    public senha: string;
    public foto: string;
    public tipo: string;
    public postagem: Postagem[];
}