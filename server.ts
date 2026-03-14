import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, service, message } = req.body;
    const recipient = process.env.CONTACT_EMAIL || "gruhaconstruction1@gmail.com";

    console.log(`Sending inquiry from ${name} (${email}) to ${recipient}`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);

    // In a real production environment, you would use nodemailer here:
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: recipient,
      subject: `New Inquiry: ${service} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    });
    */

    // For the demo, we'll simulate a successful send
    setTimeout(() => {
      res.json({ success: true, message: "Inquiry sent successfully to " + recipient });
    }, 1000);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
