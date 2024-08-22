type RatingProps = {
  rating: number;
};

export default function Rating({ rating }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Полные звездочки */}
      {Array.from({ length: fullStars }, (_, index) => (
        <svg
          key={`full-star-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          width="20"
          height="20"
          className="text-yellow-500"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.20l-7.19-.61L12 2 9.19 8.63 2 9.20l5.46 4.73L5.82 21z" />
        </svg>
      ))}

      {/* Половинная звездочка */}
      {hasHalfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          width="20"
          height="20"
          className="text-yellow-500"
        >
          <path d="M22 9.20l-7.19-.61L12 2 9.19 8.63 2 9.20l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.20zM12 15.4l-3.76 2.27.99-4.28L6.1 10.9l4.38-.38L12 6.1v9.3z" />
        </svg>
      )}

      {/* Пустые звездочки */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <svg
          key={`empty-star-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          width="20"
          height="20"
          className="text-gray-300"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.20l-7.19-.61L12 2 9.19 8.63 2 9.20l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}