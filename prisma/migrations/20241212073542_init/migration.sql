-- DropForeignKey
ALTER TABLE "datel" DROP CONSTRAINT "datel_witelId_fkey";

-- DropForeignKey
ALTER TABLE "permit" DROP CONSTRAINT "permit_siteId_fkey";

-- DropForeignKey
ALTER TABLE "permit" DROP CONSTRAINT "permit_userId_fkey";

-- DropForeignKey
ALTER TABLE "site" DROP CONSTRAINT "site_datelId_fkey";

-- DropForeignKey
ALTER TABLE "site" DROP CONSTRAINT "site_userId_fkey";

-- DropForeignKey
ALTER TABLE "site" DROP CONSTRAINT "site_witelId_fkey";

-- DropForeignKey
ALTER TABLE "visitorPIC" DROP CONSTRAINT "visitorPIC_permitId_fkey";

-- AddForeignKey
ALTER TABLE "datel" ADD CONSTRAINT "datel_witelId_fkey" FOREIGN KEY ("witelId") REFERENCES "witel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site" ADD CONSTRAINT "site_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site" ADD CONSTRAINT "site_witelId_fkey" FOREIGN KEY ("witelId") REFERENCES "witel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site" ADD CONSTRAINT "site_datelId_fkey" FOREIGN KEY ("datelId") REFERENCES "datel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permit" ADD CONSTRAINT "permit_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "site"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permit" ADD CONSTRAINT "permit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitorPIC" ADD CONSTRAINT "visitorPIC_permitId_fkey" FOREIGN KEY ("permitId") REFERENCES "permit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
