/*
  Warnings:

  - The primary key for the `Location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `offset` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `Location` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Location` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dob_age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `dob_date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `registered_age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `registered_date` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `locationId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `loginId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `nameId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `pictureId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Name` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Name` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Picture` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Picture` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Login` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Login` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `coordinatesId` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetId` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timezoneId` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dobId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_ref` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nat` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registeredId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Street" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "userId_ref" INTEGER,
    CONSTRAINT "Street_userId_ref_fkey" FOREIGN KEY ("userId_ref") REFERENCES "User" ("id_ref") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Coordinates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "userId_ref" INTEGER,
    CONSTRAINT "Coordinates_userId_ref_fkey" FOREIGN KEY ("userId_ref") REFERENCES "User" ("id_ref") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Timezone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "offset" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId_ref" INTEGER,
    CONSTRAINT "Timezone_userId_ref_fkey" FOREIGN KEY ("userId_ref") REFERENCES "User" ("id_ref") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "age" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Registered" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "age" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Id" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "timezoneId" INTEGER NOT NULL,
    "streetId" INTEGER NOT NULL,
    "coordinatesId" INTEGER NOT NULL,
    CONSTRAINT "Location_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "Timezone" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Location_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "Street" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Location_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Location" ("city", "country", "id", "postcode", "state") SELECT "city", "country", "id", "postcode", "state" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
CREATE UNIQUE INDEX "Location_timezoneId_key" ON "Location"("timezoneId");
CREATE UNIQUE INDEX "Location_streetId_key" ON "Location"("streetId");
CREATE UNIQUE INDEX "Location_coordinatesId_key" ON "Location"("coordinatesId");
CREATE TABLE "new_User" (
    "id_ref" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "nat" TEXT NOT NULL,
    "nameId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "loginId" INTEGER NOT NULL,
    "dobId" INTEGER NOT NULL,
    "registeredId" INTEGER NOT NULL,
    "idId" INTEGER NOT NULL,
    "pictureId" INTEGER NOT NULL,
    CONSTRAINT "User_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_loginId_fkey" FOREIGN KEY ("loginId") REFERENCES "Login" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_dobId_fkey" FOREIGN KEY ("dobId") REFERENCES "Dob" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_registeredId_fkey" FOREIGN KEY ("registeredId") REFERENCES "Registered" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_idId_fkey" FOREIGN KEY ("idId") REFERENCES "Id" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("cell", "email", "gender", "locationId", "loginId", "nameId", "phone", "pictureId") SELECT "cell", "email", "gender", "locationId", "loginId", "nameId", "phone", "pictureId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_nameId_key" ON "User"("nameId");
CREATE UNIQUE INDEX "User_locationId_key" ON "User"("locationId");
CREATE UNIQUE INDEX "User_loginId_key" ON "User"("loginId");
CREATE UNIQUE INDEX "User_dobId_key" ON "User"("dobId");
CREATE UNIQUE INDEX "User_registeredId_key" ON "User"("registeredId");
CREATE UNIQUE INDEX "User_idId_key" ON "User"("idId");
CREATE UNIQUE INDEX "User_pictureId_key" ON "User"("pictureId");
CREATE TABLE "new_Name" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "first" TEXT NOT NULL,
    "last" TEXT NOT NULL
);
INSERT INTO "new_Name" ("first", "id", "last", "title") SELECT "first", "id", "last", "title" FROM "Name";
DROP TABLE "Name";
ALTER TABLE "new_Name" RENAME TO "Name";
CREATE TABLE "new_Picture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "large" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL
);
INSERT INTO "new_Picture" ("id", "large", "medium", "thumbnail") SELECT "id", "large", "medium", "thumbnail" FROM "Picture";
DROP TABLE "Picture";
ALTER TABLE "new_Picture" RENAME TO "Picture";
CREATE TABLE "new_Login" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "md5" TEXT NOT NULL,
    "sha1" TEXT NOT NULL,
    "sha256" TEXT NOT NULL
);
INSERT INTO "new_Login" ("id", "md5", "password", "salt", "sha1", "sha256", "username") SELECT "id", "md5", "password", "salt", "sha1", "sha256", "username" FROM "Login";
DROP TABLE "Login";
ALTER TABLE "new_Login" RENAME TO "Login";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
