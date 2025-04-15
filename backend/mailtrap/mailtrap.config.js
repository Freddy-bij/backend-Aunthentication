import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";


dotenv.config();
 
const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN ,
  endpoint:process.env.MAILTRAP_ENDPOINT
});

const recipients = [
  {
    email:"freddybijanja31@gmail.com",
  }
]

 const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};

client
  .send({
    from:sender,
    to:recipients,
    subjects:"you are awesome!",
    text:"congrats for sending test email with mailtrap",
    category:"integration Test"
  })
    .then(console.log , console.error);
    
