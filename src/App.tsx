import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
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

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>Resumo do estoque</h2>
          <p>Visão geral dos produtos cadastrados no SellerFlow Hub.</p>
        </div>

        <div className="summary-grid">
          <SummaryCard
            title="Produtos cadastrados"
            value={totalProducts}
            description="Total de itens registrados no sistema."
          />

          <SummaryCard
            title="Estoque baixo"
            value={lowStockProducts}
            description="Produtos que precisam de reposição em breve."
          />

          <SummaryCard
            title="Sem estoque"
            value={outOfStockProducts}
            description="Produtos indisponíveis para venda."
          />
        </div>
      </section>
    </main>
  );
}

export default App;