import Product from "./Product";
import { useState } from "react";

const ShoppingList = (props) => {
  const { shopping, removeFromShoppingList /*filter, setFilter*/ } = props;
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredShopping = shopping.filter((el) => el.startsWith(filter));

  return (
    //<h2 className="mb-3 h4">Produits à acheter ({shopping.length}):</h2> (mettre en dehors de react pour commenter)
    <>
      <h2 className="mb-3 h4">Vous avez {shopping.length} produits à acheter :</h2>
      <div className="input-group mb-3">
        <span role="img" aria-label="search" className="input-group-text">
          🔎
        </span>
        <input
          type="search"
          value={filter}
          //onChange={(e) => setFilter(e.target.value)}
          onChange={handleInputChange}
          placeholder="Rechercher dans votre liste des courses ..."
          aria-label="Chercher"
          className="form-control"
        />
      </div>
      {filter && (
        <p className="d-flex justify-content-between">
          <span>
            Produits qui commencent par <i>{filter}</i>
          </span>
          <button className="btn btn-light btn-sm" onClick={() => setFilter("")}>
            <span role="img" aria-hidden>
              🔄
            </span>{" "}
            Réinitialiser
          </button>
        </p>
      )}
      <ol className="list-group mb-3 shadow">
        {filteredShopping.map((el) => {
          return (
            <li key={el} className="list-group-item">
              <Product product={el} removeFromShoppingList={removeFromShoppingList} />
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default ShoppingList;
