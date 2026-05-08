import { createServer } from "../server/index";

// Export the Express server as a Vercel serverless function
const app = createServer();
export default app;
