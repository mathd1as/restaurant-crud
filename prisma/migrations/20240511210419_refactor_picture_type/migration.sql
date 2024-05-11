-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_restaurants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "openingTime" TEXT NOT NULL,
    "closingTime" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_restaurants" ("address", "closingTime", "createdAt", "id", "name", "openingTime", "picture", "updateAt") SELECT "address", "closingTime", "createdAt", "id", "name", "openingTime", "picture", "updateAt" FROM "restaurants";
DROP TABLE "restaurants";
ALTER TABLE "new_restaurants" RENAME TO "restaurants";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
