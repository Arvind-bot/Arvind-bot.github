import "./CardList.styles.css";
import Card from "../Card/Card.component";
import NoContentBox from "../NoContentBox/NoContentBox.component";

const CardList = (props) => {
  const { items } = props || {};
  return (
    <div>
      {items && Array.isArray(items) && items.length > 0 ? (
        <div className="card-list">
          {items.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      ) : (
        <NoContentBox message="Sorry, there are no monsters to show." />
      )}
    </div>
  );
};

export default CardList;
