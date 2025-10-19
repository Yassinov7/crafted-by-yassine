export default function CategoryBadge({ category, onClick, active }) {
    return (
        <button
            onClick={() => onClick && onClick(category)}
            className={`text-xs px-3 py-1 rounded-full transition-all duration-200 ${active
                    ? 'bg-accent text-background'
                    : 'bg-muted text-foreground hover:bg-accent/20'
                }`}
        >
            {category.name}
        </button>
    );
}