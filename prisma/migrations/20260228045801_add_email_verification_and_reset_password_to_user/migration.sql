-- AlterTable
ALTER TABLE "users" ADD COLUMN     "email_verification_token" TEXT,
ADD COLUMN     "email_verification_token_expires_at" TIMESTAMP(3),
ADD COLUMN     "is_email_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reset_password_token" TEXT,
ADD COLUMN     "reset_password_token_expires_at" TIMESTAMP(3);
