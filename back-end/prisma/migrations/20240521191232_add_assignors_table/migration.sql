/*
  Warnings:

  - You are about to drop the column `document` on the `payables` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `payables` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `payables` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `payables` table. All the data in the column will be lost.
  - Added the required column `assignor_id` to the `payables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emissionDate` to the `payables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `payables` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "assignors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "document" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_payables" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "emissionDate" DATETIME NOT NULL,
    "assignor_id" TEXT NOT NULL
);
INSERT INTO "new_payables" ("id") SELECT "id" FROM "payables";
DROP TABLE "payables";
ALTER TABLE "new_payables" RENAME TO "payables";
PRAGMA foreign_key_check("payables");
PRAGMA foreign_keys=ON;
