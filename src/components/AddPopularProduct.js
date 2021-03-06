const AddPopularProduct = (props) => {
  const { shopping, addToShoppingList } = props;
  const populars = [
    { text: "ail", emoji: "๐ง" },
    { text: "avocat", emoji: "๐ฅ" },
    { text: "aubergine", emoji: "๐" },
    { text: "brocoli", emoji: "๐ฅฆ" },
    { text: "carotte", emoji: "๐ฅ" },
    { text: "concombre", emoji: "๐ฅ" },
    { text: "maรฏs", emoji: "๐ฝ" },
    { text: "oignon", emoji: "๐ง" },
    { text: "olive", emoji: "๐ซ" },
    { text: "piment", emoji: "๐ถ" },
    { text: "poivron", emoji: "๐ซ" },
    { text: "salade", emoji: "๐ฅฌ" },
    { text: "tomate", emoji: "๐" },
  ];
  const populars2 = [
    { text: "abricot", emoji: "๐" },
    { text: "banane", emoji: "๐" },
    { text: "cerise", emoji: "๐" },
    { text: "citron", emoji: "๐" },
    { text: "coco", emoji: "๐ฅฅ" },
    { text: "fraise", emoji: "๐" },
    { text: "kiwi", emoji: "๐ฅ" },
    { text: "oranges", emoji: "๐" },
    { text: "pastรจque", emoji: "๐" },
    { text: "pomme", emoji: "๐" },
    { text: "raisin", emoji: "๐" },
  ];
  const populars3 = [
    { text: "bagel", emoji: "๐ฅฏ" },
    { text: "bento", emoji: "๐ฑ" },
    { text: "brochette", emoji: "๐ก" },
    { text: "cacahuรจte", emoji: "๐ฅ" },
    { text: "chocolat", emoji: "๐ซ" },
    { text: "donut", emoji: "๐ฉ" },
    { text: "hamburger", emoji: "๐" },
    { text: "lait", emoji: "๐ฅ" },
    { text: "pain", emoji: "๐ฅ" },
    { text: "pizza", emoji: "๐" },
    { text: "ravioli", emoji: "๐ฅ" },
    { text: "tacos", emoji: "๐ฎ" },
    { text: "tarte", emoji: "๐ฅ" },
  ];

  return (
    <section>
      <h3 className="h4 mb-4">Avez-vous besoin de : </h3>
      <h3 className="h4 text-success fw-bold mb-3">Lรฉgumes ?</h3>

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
