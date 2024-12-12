-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Admin', 'User', 'Manager', 'Staff', 'Viewer');

-- CreateEnum
CREATE TYPE "detailStatus" AS ENUM ('Checking', 'Request', 'Approved', 'Rejected', 'PermitInProcess', 'PermitCompleted');

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'User',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datel" (
    "id" SERIAL NOT NULL,
    "namaDatel" TEXT NOT NULL,
    "witelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "datel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "witel" (
    "id" SERIAL NOT NULL,
    "namaWitel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "witel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "site" (
    "id" SERIAL NOT NULL,
    "pakid" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "treg" TEXT NOT NULL,
    "witelId" INTEGER NOT NULL,
    "datelId" INTEGER NOT NULL,
    "siteName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "ownLease" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permit" (
    "id" TEXT NOT NULL,
    "pekerjaan" TEXT NOT NULL,
    "detailPekerjaan" TEXT NOT NULL,
    "customer" TEXT,
    "catuan" TEXT,
    "noPermit" TEXT,
    "tglPermit" TIMESTAMP(3) NOT NULL,
    "tglExpired" TIMESTAMP(3) NOT NULL,
    "perusahaan" TEXT NOT NULL,
    "status" "detailStatus" NOT NULL DEFAULT 'Checking',
    "siteId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitorPIC" (
    "id" SERIAL NOT NULL,
    "namaPic" TEXT NOT NULL,
    "noHP" INTEGER NOT NULL,
    "email" TEXT,
    "nik" INTEGER NOT NULL,
    "area" TEXT NOT NULL,
    "permitId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "visitorPIC_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "visitorPIC_email_key" ON "visitorPIC"("email");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "datel" ADD CONSTRAINT "datel_witelId_fkey" FOREIGN KEY ("witelId") REFERENCES "witel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site" ADD CONSTRAINT "site_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site" ADD CONSTRAINT "site_witelId_fkey" FOREIGN KEY ("witelId") REFERENCES "witel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site" ADD CONSTRAINT "site_datelId_fkey" FOREIGN KEY ("datelId") REFERENCES "datel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permit" ADD CONSTRAINT "permit_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "site"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permit" ADD CONSTRAINT "permit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitorPIC" ADD CONSTRAINT "visitorPIC_permitId_fkey" FOREIGN KEY ("permitId") REFERENCES "permit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
