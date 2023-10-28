import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { Link } from "react-router-dom";

export const loader = async ({ params }) => {
  const response = await customFetch(`/hotel/${params.id}`);
  const hotel = response.data;
  return { hotel };
};

const SingleHotel = () => {
  const { hotel } = useLoaderData();
  // console.log(hotel);

  // console.log(hotel[0].name);

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        <img
          src={hotel[0].img}
          alt={hotel[0].name}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />

        <div>
          <h1 className="capitalize text-3xl font-bold">{hotel[0].name}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2"></h4>

          <p className="mt-3 text-xl">{"$" + hotel[0].price}</p>

          <p className="mt-6 leading-8">{hotel[0].description}</p>
        </div>
      </div>
    </section>
  );
};
export default SingleHotel;
