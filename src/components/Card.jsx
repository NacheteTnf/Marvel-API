import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
  let navigate = useNavigate();
  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div
                className="card"
                key={item.id}
                onClick={() => navigate(`/${type}/${item.id}`)}
              >
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={`${item.name ? item.name : item.title} image`}
                />
                <div className="title">
                  <h3>{item.name ? item.name : item.title}</h3>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Card;
