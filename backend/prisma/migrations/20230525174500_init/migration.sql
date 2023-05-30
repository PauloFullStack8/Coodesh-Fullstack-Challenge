-- CreateTable
CREATE TABLE "Name" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "first" TEXT NOT NULL,
    "last" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "offset" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "md5" TEXT NOT NULL,
    "sha1" TEXT NOT NULL,
    "sha256" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "large" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gender" TEXT NOT NULL,
    "nameId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "loginId" TEXT NOT NULL,
    "dob_date" TEXT NOT NULL,
    "dob_age" INTEGER NOT NULL,
    "registered_date" TEXT NOT NULL,
    "registered_age" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "pictureId" TEXT NOT NULL,
    CONSTRAINT "User_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "Name" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_loginId_fkey" FOREIGN KEY ("loginId") REFERENCES "Login" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nameId_key" ON "User"("nameId");

-- CreateIndex
CREATE UNIQUE INDEX "User_locationId_key" ON "User"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "User_loginId_key" ON "User"("loginId");

-- CreateIndex
CREATE UNIQUE INDEX "User_pictureId_key" ON "User"("pictureId");
