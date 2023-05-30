/*
  Warnings:

  - You are about to alter the column `postcode` on the `Location` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postcode" INTEGER NOT NULL,
    "timezoneId" INTEGER NOT NULL,
    "streetId" INTEGER NOT NULL,
    "coordinatesId" INTEGER NOT NULL,
    CONSTRAINT "Location_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "Timezone" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Location_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "Street" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Location_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Location" ("city", "coordinatesId", "country", "id", "postcode", "state", "streetId", "timezoneId") SELECT "city", "coordinatesId", "country", "id", "postcode", "state", "streetId", "timezoneId" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
CREATE UNIQUE INDEX "Location_timezoneId_key" ON "Location"("timezoneId");
CREATE UNIQUE INDEX "Location_streetId_key" ON "Location"("streetId");
CREATE UNIQUE INDEX "Location_coordinatesId_key" ON "Location"("coordinatesId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
