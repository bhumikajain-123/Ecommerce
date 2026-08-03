function Rating({ rating }) {
  return (
    <span className="text-warning">
      {"⭐".repeat(rating)}
    </span>
  );
}

export default Rating;