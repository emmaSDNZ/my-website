import { FaDatabase } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { PiRobotFill } from "react-icons/pi";
import { SiMicrodotblog } from "react-icons/si";
import { FaBrain } from "react-icons/fa";

export const diccMyServices = {
  aiAgents: {
    Icon: PiRobotFill,
    title: "AI Agents & LLM Integration",
    description: "Automatización de procesos mediante agentes inteligentes e integración de modelos LLM en sistemas empresariales.",
    tags: ["Python", "LangChain", "Ollama", "APIs", "RAG"]
  },
  machineLearning: {
    Icon: FaBrain,
    title: "Machine Learning",
    description: "Modelos predictivos y sistemas inteligentes enfocados en optimizar operaciones y decisiones.",
    tags: ["TensorFlow", "PyTorch", "MLflow"]
  },
  dataAnalytics: {
    Icon: DiGoogleAnalytics,
    title: "Data Analytics",
    description: "Análisis avanzado de datos y visualizaciones para la toma de decisiones estratégicas.",
    tags: ["Pandas", "Power BI", "EDA"]
  },
  webDevelopment: {
    Icon: FaLaptopCode,
    title: "Web Development",
    description: "Desarrollo de aplicaciones web modernas y escalables para productos digitales.",
    tags: ["React", "Next.js", "Node.js"]
  },
  microServices: {
    Icon: SiMicrodotblog,
    title: "Microservices Architecture",
    description: "Diseño e implementación de arquitecturas desacopladas, seguras y altamente disponibles.",
    tags: ["Docker", "APIs", "CI/CD"]
  },
  database: {
    Icon: FaDatabase,
    title: "Database Engineering",
    description: "Diseño, administración y optimización de bases de datos relacionales y NoSQL.",
    tags: ["SQL Server", "MongoDB", "Optimization"]
  }
};
