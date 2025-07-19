import express, { Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req : Request, res : Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(process.env.PORT || 7000, () => {
  console.log(`Server is running on port ${process.env.PORT || 7000}`);
});