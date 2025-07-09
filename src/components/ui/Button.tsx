// src/components/ui/Button.tsx

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="bg-accent text-white px-5 py-2 rounded hover:opacity-90 transition">
      {children}
    </button>
  );
}
