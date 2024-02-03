import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL:z.string().min(1, { message: "Database URL Required in env" }),
    GOOGLE_CLIENT_ID:z.string().min(1, { message: "Google client id is required in env" }),
    GOOGLE_CLIENT_SECRET:z.string().min(1, { message: "Google client secret is Required in env" }),
    NEXTAUTH_URL:z.string().min(1, { message: "Nextauth url is Required in env" }),
    NEXTAUTH_SECRET:z.string().min(1, { message: "Nextauth secret is Required in env" })
})

export const env = envSchema.parse(process.env);