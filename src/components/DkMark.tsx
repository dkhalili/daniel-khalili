interface DkMarkProps {
  className?: string;
  title?: string;
  tone?: "brand" | "solid";
}

export default function DkMark({
  className,
  title = "Daniel Khalili",
  tone = "brand",
}: DkMarkProps) {
  const primaryFill = tone === "brand" ? "#00D4FF" : "currentColor";
  const secondaryFill = tone === "brand" ? "#E8E8ED" : "currentColor";

  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 42H82C126 42 154 75 154 128C154 181 126 214 82 214H30V42ZM62 72V184H80C106 184 122 163 122 128C122 93 106 72 80 72H62Z"
        fill={primaryFill}
      />
      <path
        d="M166 42H198V110L224 42H256L220 126L256 214H222L198 145V214H166V42Z"
        fill={secondaryFill}
      />
    </svg>
  );
}
