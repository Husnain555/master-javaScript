import express from "express";
import type { Request, Response } from "express";
import { Resend } from "resend";
import "dotenv/config";
import { fileURLToPath } from "url";
import path from "path";
import { readFile } from "fs/promises";


const app = express();
const apiKey = process.env.RESEND_API_KEY;
console.log(apiKey)
const resend = new Resend(apiKey);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, "../templates/email-template.html");
const html = await readFile(htmlPath, "utf8");app.get("/", async (req: Request, res: Response) => {
    console.log(html,'html')
    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["talk2mughals@gmail.com"],
        subject: "👋 Welcome to my application!",
        html,
    });
    console.log(data,'data');

    if (error) {
        return res.status(400).json({ error });
    }

    res.status(200).json({ data });
});

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});
