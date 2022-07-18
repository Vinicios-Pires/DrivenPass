-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "expireIn" TIMESTAMP(3) NOT NULL,
    "password" INTEGER NOT NULL,
    "virtual" BOOLEAN NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typesCard" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "typesCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cards_title_key" ON "cards"("title");

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "typesCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
