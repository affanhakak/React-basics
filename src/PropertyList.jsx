export default function PropertyList({ place, price, rating }) {
  return (
    <div className="places">
      <h2>{place}</h2>
      <h3> $-{price} a night</h3>
      <h4>{rating}***</h4>
    </div>
  );
}
