-- CreateEnum
CREATE TYPE "SituacaoAluno" AS ENUM ('pendente', 'regular', 'bloqueado');

-- CreateTable
CREATE TABLE "matriculas" (
    "id" SERIAL NOT NULL,
    "id_turma" INTEGER NOT NULL,
    "id_aluno" INTEGER NOT NULL,
    "data_matricula" DATE NOT NULL,
    "situacao" "SituacaoAluno" NOT NULL DEFAULT 'pendente',

    CONSTRAINT "matriculas_pkey" PRIMARY KEY ("id")
);
