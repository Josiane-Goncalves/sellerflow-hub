type SummaryCardProps = {
  title: string;
  value: number;
  description: string;
};

function SummaryCard({ title, value, description }: SummaryCardProps) {
  return (
    <article className="summary-card">
      <span className="summary-card__title">{title}</span>
      <strong className="summary-card__value">{value}</strong>
      <p className="summary-card__description">{description}</p>
    </article>
  );
}

export default SummaryCard;