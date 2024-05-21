/*
  Warnings:

  - You are about to drop the column `assignor_id` on the `payables` table. All the data in the column will be lost.
  - Added the required column `assignorId` to the `payables` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_payables" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "emissionDate" DATETIME NOT NULL,
    "assignorId" TEXT NOT NULL
);
INSERT INTO "new_payables" ("emissionDate", "id", "value") SELECT "emissionDate", "id", "value" FROM "payables";
DROP TABLE "payables";
ALTER TABLE "new_payables" RENAME TO "payables";
PRAGMA foreign_key_check("payables");
PRAGMA foreign_keys=ON;
