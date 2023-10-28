import { Link, useLoaderData } from "react-router-dom";
const HotelsGrid = () => {
  const { hotels } = useLoaderData();
  //   console.log(hotels);

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {hotels?.map((hotel) => {
        const { name, img, price } = hotel;

        return (
          <Link
            key={hotel.id}
            to={`/hotels/${hotel.id}`}
            className="card w-full  shadow-xl hover:shadow-2xl transition duration-300 "
          >
            <figure className="px-4 pt-4">
              <img
                src={img}
                alt={name}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{name}</h2>
              <span className="text-secondary">{"$" + price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default HotelsGrid;
