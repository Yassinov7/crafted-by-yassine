export default function TagChip({ tag, onClick }) {
    return (
        <button
            onClick={() => onClick && onClick(tag)}
            className="text-xs bg-muted/50 hover:bg-accent/20 text-foreground px-2 py-1 rounded-full transition-colors duration-200"
        >
            #{tag.name}
        </button>
    );
}