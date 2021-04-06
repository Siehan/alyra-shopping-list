const AddPopularProduct = (props) => {
  const { shopping, addToShoppingList } = props;
  const populars = [
    { text: "pain", emoji: "🥖" },
    { text: "lait", emoji: "🥛" },
    { text: "pizza", emoji: "🍕" },
    { text: "salade", emoji: "🥬" },
    { text: "abricot", emoji: "🍑" },
    { text: "banane", emoji: "🍌" },
    { text: "cerise", emoji: "🍒" },
    { text: "citron", emoji: "🍋" },
    { text: "fraise", emoji: "🍓" },
    { text: "kiwi", emoji: "🥝" },
    { text: "coco", emoji: "🥥" },
    { text: "oranges", emoji: "🍊" },
    { text: "pastèque", emoji: "🍉" },
    { text: "raisin", emoji: "🍇" },
    { text: "pomme", emoji: "🍏" },
    { text: "piment", emoji: "🌶" },
    { text: "maïs", emoji: "🌽" },
    { text: "avocat", emoji: "🥑" },
    { text: "aubergine", emoji: "🍆" },
    { text: "tomate", emoji: "🍅" },
    { text: "brocolit", emoji: "🥦" },
    { text: "concombre", emoji: "🥒" },
    { text: "carotte", emoji: "🥕" },
    { text: "poivron", emoji: "🫑" },
    { text: "ail", emoji: "🧄" },
    { text: "olive", emoji: "🫒" },
    { text: "oignon", emoji: "🧅" },
    { text: "bagel", emoji: "🥯" },
    { text: "tacos", emoji: "🌮" },
    { text: "hamburger", emoji: "🍔" },
    { text: "ravioli", emoji: "🥟" },
    { text: "bento", emoji: "🍱" },
    { text: "donut", emoji: "🍩" },
    { text: "chocolat", emoji: "🍫" },
    { text: "cacahuète", emoji: "🥜" },
    { text: "tarte", emoji: "🥗" },
    { text: "brochette", emoji: "🍡" },
  ];

  return (
    <section>
      <h3 className="h5">Avez-vous besoin de ?</h3>
      <div className="mb-3 d-flex flex-wrap align-items-center">
        {populars.map((el) => (
          <button
            key={el.text}
            className="btn btn-outline-success me-2 mb-2 d-flex align-items-center"
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
