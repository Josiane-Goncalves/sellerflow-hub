import Header from "./components/Header";
import { mockProducts } from "./data/mockProducts";

function App() {
  const totalProducts = mockProducts.length;

  const lowStockProducts = mockProducts.filter(
    (product) => product.stock > 0 && product.stock <= product.minStock
  ).length;

  const outOfStockProducts = mockProducts.filter(
    (product) => product.stock === 0
  ).length;

  return (
    <main className="app">
      <Header />

      <section className="dashboard-placeholder">
        <h2>Resumo do estoque</h2>

        <p>Total de produtos cadastrados: {totalProducts}</p>
        <p>Produtos com estoque baixo: {lowStockProducts}</p>
        <p>Produtos sem estoque: {outOfStockProducts}</p>
      </section>
    </main>
  );
}

export default App;