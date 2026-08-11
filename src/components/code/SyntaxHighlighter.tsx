import { useMemo } from 'react';

type Kind = 'comment' | 'string' | 'number' | 'keyword' | 'func' | 'plain';

const TOKEN_RE =
  /(\/\/.*|#[^\n]*)|(`(?:[^`\\]|\\.)*`|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|(\b(?:def|class|import|from|return|if|elif|else|for|while|try|except|with|lambda|async|await|const|let|var|function|export|default|new|typeof|instanceof|in|of|this|True|False|None|true|false|null|undefined)\b)|([A-Za-z_]\w*(?=\())|(\b[A-Za-z_]\w*\b)/g;

const KIND_CLASS: Record<Kind, string> = {
  comment: 'text-obsidian-400 italic',
  string: 'text-emerald-400',
  number: 'text-violet-300',
  keyword: 'text-violet-400 font-medium',
  func: 'text-emerald-300',
  plain: 'text-obsidian-200',
};

function highlightLine(line: string) {
  const nodes: { text: string; kind: Kind }[] = [];
  let lastIndex = 0;
  const re = new RegExp(TOKEN_RE.source, 'g');
  let m: RegExpExecArray | null;

  while ((m = re.exec(line)) !== null) {
    if (m.index > lastIndex) {
      nodes.push({ text: line.slice(lastIndex, m.index), kind: 'plain' });
    }

    let kind: Kind = 'plain';
    if (m[1]) kind = 'comment';
    else if (m[2]) kind = 'string';
    else if (m[3]) kind = 'number';
    else if (m[4]) kind = 'keyword';
    else if (m[5]) kind = 'func';

    nodes.push({ text: m[0], kind });
    lastIndex = re.lastIndex;
  }

  if (lastIndex < line.length) {
    nodes.push({ text: line.slice(lastIndex), kind: 'plain' });
  }

  return nodes;
}

export default function SyntaxHighlighter({ code }: { code: string }) {
  const lines = useMemo(() => code.split('\n'), [code]);

  return (
    <div className="overflow-auto max-h-[60vh] bg-obsidian-950/80">
      <pre className="p-4 sm:p-5 text-[13px] leading-6 font-mono">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none w-8 shrink-0 text-right pr-3 text-obsidian-500">
              {i + 1}
            </span>
            <code className="whitespace-pre text-obsidian-200">
              {highlightLine(line).map((n, j) => (
                <span key={j} className={KIND_CLASS[n.kind]}>
                  {n.text}
                </span>
              ))}
            </code>
          </div>
        ))}
      </pre>
    </div>
  );
}
