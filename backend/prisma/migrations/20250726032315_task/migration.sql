/*
  Warnings:

  - The values [Aguardando] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('Pendente', 'Em_Andamento', 'Concluido');
ALTER TABLE "Task" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
COMMIT;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Pendente',
ALTER COLUMN "finalDate" DROP NOT NULL;
