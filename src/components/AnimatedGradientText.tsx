

type AnimatedGradientTextProps = {
  text: string;
  delay?: number;
  element?: 'h1' | 'h2' | 'h3';
};

export default function AnimatedGradientText({
  text,
  delay = 0,
  element: Element = 'h1',
}: AnimatedGradientTextProps) {
  return (
    <Element
      className="animated-gradient-text"
      style={{ ['--gradient-delay' as string]: `${delay}ms` }}
    >
      {text}
    </Element>
  );
}
