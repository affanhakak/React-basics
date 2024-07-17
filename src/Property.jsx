import PropertyList from "./PropertyList";
import "./Property.css";

export default function Property({ properties }) {
  return (
    <div className="property-list">
      {properties.map((p) => {
        return (
          <PropertyList
            key={p.id}
            place={p.place}
            price={p.price}
            rating={p.rating}
          />
        );
      })}
    </div>
  );
}
