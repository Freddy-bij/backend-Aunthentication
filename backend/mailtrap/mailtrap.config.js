import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();
 

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT



const client = new MailtrapClient({
  token: TOKEN,
  endpoint: ENDPOINT
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};

const recipients = [
  {
    email: "freddybijanja31@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(response => console.log("Email sent:", response))
  .catch(error => console.error("Error sending email:", error));
