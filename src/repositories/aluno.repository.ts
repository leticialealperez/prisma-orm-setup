import { Aluno } from "@prisma/client";
import { prismaClient } from "../database/prisma.client";

// DTO => Data Transfer Object => Objeto de Transferencia de dados
interface CreateAlunoDTO {
  nome: string;
  sobrenome: string;
  cpf: string;
  email: string;
  ativo?: boolean;
  idade?: number;
}

// Repository => um tipo de classe/conceito para algo que armazena ou gerencia os dados da aplicação
export class AlunosRepository {
  async listAll(): Promise<Aluno[]> {
    const listaAlunos = await prismaClient.aluno.findMany(); // SELECT * FROM alunos;

    return listaAlunos;
  }

  async getById(id: number): Promise<Aluno | null> {
    const aluno = await prismaClient.aluno.findUnique({ where: { id } });
    // SELECT * FROM alunos WHERE id = 1;

    return aluno;
  }

  async create(dto: CreateAlunoDTO): Promise<Aluno> {
    const novoAluno = await prismaClient.aluno.create({
      data: { ...dto },
    });
    // INSERT INTO alunos (nome, sobrenome, ...) VALUES ("Leticia", '....)

    return novoAluno;
  }

  // update

  // delete
}
