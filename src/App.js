import './App.scss';

function App() {
  // 邏輯可執行的地方
  const title = <h1>My Website</h1>;
  // 副標題是否要顯示
  const showSubtitle = true;
  let subtitle;
  if (showSubtitle) {
    subtitle = <p>歡迎來到我的網站</p>;
  }
  // 產品清單
  const productList = [
    {
      id: 1,
      name: "產品A",
      price: 200,
      isSale: true,
      salePrice: 160
    },
    {
      id: 2,
      name: "產品B",
      price: 800,
      isSale: false,
      salePrice: 800
    },
    {
      id: 3,
      name: "產品C",
      price: 1000,
      isSale: true,
      salePrice: 900
    },
    {
      id: 4,
      name: "產品D",
      price: 1200,
      isSale: true,
      salePrice: 950
    },
  ];

  const productListElement = productList.map(product => {
    let priceElement = <p>$ {product.price}</p>;
    if (product.isSale) {
      priceElement = (<p>
        $ <s>{product.price}</s> {product.salePrice}
      </p>)
    }

    return (<div key={product.id} className="col">
      <div className="card">
        <img src={`https://picsum.photos/id/${product.id}/1000/600`} alt="" />
        <div className="card-body">
          <h3>{product.name}</h3>
          {priceElement}
        </div>
      </div>
    </div>)
  });

  console.log("productListElement", productListElement);

  return (
    <div className="App">
      <header className="App-header">
        {title}
        {subtitle}
      </header>
      <section>
        <div className="row">
          {productListElement}
        </div>
      </section>
    </div>
  );
}

export default App;
