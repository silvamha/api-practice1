import { defineConfig } from 'vite';
import dotenv from "dotenv"

dotenv.config()

// Vite configuration file
export default defineConfig({
  server: {
    define:{
        "process.env":process,
    },
    port: 3000, // You can change the port if needed
    open:true,
    
  }
});
