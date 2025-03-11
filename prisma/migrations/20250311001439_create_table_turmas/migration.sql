-- CreateTable
CREATE TABLE "turmas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "data_inicio" DATE NOT NULL,
    "data_termino" DATE NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("id")
);
