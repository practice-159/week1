import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import React from "react";

import "./App.css";
import Card from "./components/Card";
import Table from "./components/Table";
import productJSON from "./product.json";
import "./styles/style.css";
import type { productType } from "./types/product";

function App() {
  const products = productJSON;
  const [selectProduct, setSelectProduct] = useState<productType | null>(null);

  return (
    <div className="container my-5 mx-auto">
      <div className="row">
        {/* 左側列表 */}
        <div className="col-6">
          <div className="fs-2">產品列表</div>
          <Table products={products} setSelectProduct={setSelectProduct} />
        </div>
        {/* 右側列表 */}
        <div className="col-6">
          {selectProduct && (
            <React.Fragment>
              <div className="fs-2">商品明細</div>
              <Card selectProduct={selectProduct} />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
