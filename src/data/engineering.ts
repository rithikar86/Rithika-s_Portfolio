import {
  FileText,
  Scissors,
  Database,
  Bot,
  PenTool,
  Code2,
  GitBranch,
  Terminal,
  HeartHandshake,
  Megaphone,
  Users,
  PencilLine,
  Puzzle,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

export type PipelineStage = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export const pipelineStages: PipelineStage[] = [
  {
    title: 'Document Input',
    desc: 'Ingest PDFs and unstructured documents',
    icon: FileText,
  },
  {
    title: 'Chunking & Embeddings',
    desc: 'Split text and embed vectors with FAISS',
    icon: Scissors,
  },
  {
    title: 'Vector Store Indexing',
    desc: 'Index embeddings for semantic search',
    icon: Database,
  },
  {
    title: 'Local LLM Context Querying',
    desc: 'Context-aware answers via Ollama + Llama 3.2',
    icon: Bot,
  },
];

export const tradeoffs = [
  {
    title: 'Local Ollama over Cloud APIs',
    body: 'Chose on-device Llama 3.2 execution for privacy, zero token costs, and offline reliability — no data ever leaves the machine.',
  },
  {
    title: 'FAISS for similarity search',
    body: 'In-memory vector store gives fast retrieval without provisioning external infrastructure or cloud databases.',
  },
  {
    title: 'Modular LangChain pipelines',
    body: 'Chains decouple embedding, retrieval, and generation so models can be swapped without rewriting the application.',
  },
];

export const devTools = [
  { icon: PenTool, name: 'Figma', role: 'Wireframing & interactive prototypes' },
  { icon: Code2, name: 'VS Code', role: 'Primary editor & extensions' },
  { icon: Database, name: 'MongoDB Compass', role: 'Document inspection & queries' },
  { icon: GitBranch, name: 'Git & GitHub', role: 'Version control & collaboration' },
  { icon: Terminal, name: 'Terminal', role: 'CLI-first workflow' },
];

export const devSetupChips = ['MERN', 'Python', 'GenAI', 'RAG', 'Ollama'];

export const community = [
  {
    icon: HeartHandshake,
    title: 'NSS Sub-coordinator',
    desc: 'Coordinating community service drives and volunteer teams across campus.',
  },
  {
    icon: Megaphone,
    title: 'Campus-wide Events',
    desc: 'Organizing technical symposiums and inter-department events end-to-end.',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    desc: 'Leading cross-functional project groups through planning, build, and delivery.',
  },
];

export const communityChips = ['NSS Certified', 'Event Organizing', 'Mentoring'];

export const creative = [
  {
    icon: PencilLine,
    title: 'Technical Sketching',
    desc: 'Translating interfaces, flows, and architecture into clear visual plans.',
  },
  {
    icon: Puzzle,
    title: 'SQL Logic Puzzles',
    desc: 'Sharpening query optimization and analytical reasoning through logic games.',
  },
  {
    icon: Trophy,
    title: 'Competitive Wins',
    desc: '2nd Prize — She Hacks Hackathon for the Women Safety App prototype.',
  },
];

export type CodeSnippet = {
  title: string;
  language: string;
  code: string;
};

export const codeSnippets: Record<string, CodeSnippet> = {
  'Private Document Intelligence AI': {
    title: 'Private Document Intelligence AI',
    language: 'Python',
    code: `from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.llms import Ollama
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Local RAG pipeline - runs fully offline, no cloud APIs
def build_rag_engine(pdf_text: str) -> FAISS:
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500, chunk_overlap=80
    )
    chunks = splitter.split_text(pdf_text)

    embeddings = HuggingFaceEmbeddings(
        model_name="all-MiniLM-L6-v2"
    )
    store = FAISS.from_texts(chunks, embeddings)
    return store  # persisted locally

def ask(store: FAISS, question: str) -> str:
    context = store.similarity_search(question, k=4)
    llm = Ollama(model="llama3.2")
    prompt = (
        "Answer using the context only:\\n"
        f"{context}\\nQ: {question}"
    )
    return llm.invoke(prompt)`,
  },
  'CIETM Conference Management System': {
    title: 'CIETM Conference Management System',
    language: 'JavaScript',
    code: `// Express route - conference participant registration
router.post("/api/participants/register", async (req, res) => {
  try {
    const { name, email, paperTitle } = req.body;

    const existing = await Participant.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Already registered" });
    }

    const participant = await Participant.create({
      name,
      email,
      paperTitle,
      status: "pending",
    });

    res.status(201).json(participant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});`,
  },
  'Customer Segmentation (RFM Analysis)': {
    title: 'Customer Segmentation (RFM Analysis)',
    language: 'Python',
    code: `import pandas as pd

# RFM: Recency, Frequency, Monetary
def compute_rfm(df: pd.DataFrame) -> pd.DataFrame:
    now = df["order_date"].max()

    rfm = df.groupby("customer_id").agg(
        recency=("order_date", lambda d: (now - d.max()).days),
        frequency=("order_id", "nunique"),
        monetary=("amount", "sum"),
    )

    def segment(row):
        if row.monetary >= high_value and row.recency <= 30:
            return "High-Value"
        if row.frequency >= 5:
            return "Loyal"
        return "At-Risk"

    rfm["segment"] = rfm.apply(segment, axis=1)
    return rfm`,
  },
  'Women Safety App': {
    title: 'Women Safety App',
    language: 'Java',
    code: `// Double-shake SOS detection (Android)
public class ShakeDetector implements SensorEventListener {
    private long lastShake = 0L;
    private static final long SHAKE_WINDOW = 400;

    @Override
    public void onSensorChanged(SensorEvent event) {
        long now = System.currentTimeMillis();
        float acc = Math.abs(event.values[0])
                  + Math.abs(event.values[1])
                  + Math.abs(event.values[2]);

        if (acc > 27) { // strong shake threshold
            if (now - lastShake < SHAKE_WINDOW) {
                triggerSOS(); // live GPS + auto-SMS + alarm
            }
            lastShake = now;
        }
    }
}`,
  },
  'Movie Search Application': {
    title: 'Movie Search Application',
    language: 'JavaScript',
    code: `import { useEffect, useState } from "react";

// Debounced search hook - avoids API spam
export function useDebouncedSearch(term, delay = 400) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!term.trim()) {
        return setResults([]);
      }
      const data = await fetch(
        \`/api/movies?q=\${term}\`
      ).then((res) => res.json());
      setResults(data);
    }, delay);

    return () => clearTimeout(timer);
  }, [term, delay]);

  return results;
}`,
  },
};
