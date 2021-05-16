const AddPopularProduct = (props) => {
  const { shopping, addToShoppingList } = props;
  const populars = [
    { text: "ail", emoji: "🧄" },
    { text: "avocat", emoji: "🥑" },
    { text: "aubergine", emoji: "🍆" },
    { text: "brocoli", emoji: "🥦" },
    { text: "carotte", emoji: "🥕" },
    { text: "concombre", emoji: "🥒" },
    { text: "maïs", emoji: "🌽" },
    { text: "oignon", emoji: "🧅" },
    { text: "olive", emoji: "🫒" },
    { text: "piment", emoji: "🌶" },
    { text: "poivron", emoji: "🫑" },
    { text: "salade", emoji: "🥬" },
    { text: "tomate", emoji: "🍅" },
  ];
  const populars2 = [
    { text: "abricot", emoji: "🍑" },
    { text: "banane", emoji: "🍌" },
    { text: "cerise", emoji: "🍒" },
    { text: "citron", emoji: "🍋" },
    { text: "coco", emoji: "🥥" },
    { text: "fraise", emoji: "🍓" },
    { text: "kiwi", emoji: "🥝" },
    { text: "oranges", emoji: "🍊" },
    { text: "pastèque", emoji: "🍉" },
    { text: "pomme", emoji: "🍏" },
    { text: "raisin", emoji: "🍇" },
  ];
  const populars3 = [
    { text: "bagel", emoji: "🥯" },
    { text: "bento", emoji: "🍱" },
    { text: "brochette", emoji: "🍡" },
    { text: "cacahuète", emoji: "🥜" },
    { text: "chocolat", emoji: "🍫" },
    { text: "donut", emoji: "🍩" },
    { text: "hamburger", emoji: "🍔" },
    { text: "lait", emoji: "🥛" },
    { text: "pain", emoji: "🥖" },
    { text: "pizza", emoji: "🍕" },
    { text: "ravioli", emoji: "🥟" },
    { text: "tacos", emoji: "🌮" },
    { text: "tarte", emoji: "🥗" },
  ];

  return (
    <section>
      <h3 className="h4 mb-4">Avez-vous besoin de : </h3>
      <h3 className="h4 text-success fw-bold mb-3">Légumes ?</h3>

      <div className="mb-3 d-flex flex-wrap justify-content-start">
        {populars.map((el) => (
          <button
            key={el.text}
            className="btn btn-outline-success me-2 mb-2 d-flex align-items-center fs-5 text"
            onClick={() => addToShoppingList(el.text)}
            disabled={shopping.includes(el.text)}
          >
            {el.text}{" "}
            <span className="fs-1" role="img" aria-hidden>
              {el.emoji}
            </span>
          </button>
        ))}
      </div>

      <h3 className="h4 text-warning mb-3 fw-bold">Fruits ?</h3>
      <div className="mb-3 d-flex flex-wrap justify-start">
        {populars2.map((el) => (
          <button
            key={el.text}
            className="btn btn-outline-warning me-2 mb-2 d-flex align-items-center fs-5 text"
            onClick={() => addToShoppingList(el.text)}
            disabled={shopping.includes(el.text)}
          >
            {el.text}{" "}
            <span className="fs-1" role="img" aria-hidden>
              {el.emoji}
            </span>
          </button>
        ))}
      </div>
      <h3 className="h4 text-secondary mb-3 fw-bold">Divers ?</h3>
      <div className="mb-3 d-flex flex-wrap justify-content-start">
        {populars3.map((el) => (
          <button
            key={el.text}
            className="btn btn-outline-secondary me-2 mb-2 d-flex align-items-center fs-5 text"
            onClick={() => addToShoppingList(el.text)}
            disabled={shopping.includes(el.text)}
          >
            {el.text}{" "}
            <span className="fs-1" role="img" aria-hidden>
              {el.emoji}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default AddPopularProduct;
