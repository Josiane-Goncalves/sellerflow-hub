export type MarketplaceName =
  | "Mercado Livre"
  | "Shopee"
  | "Amazon"
  | "SHEIN"
  | "Loja física";

export type ProductStatus = "ativo" | "pausado" | "sem estoque";

export type Product = {
  id: number;
  sku: string;
  name: string;
  category: string;
  costPrice: number;
  salePrice: number;
  stock: number;
  minStock: number;
  marketplaces: MarketplaceName[];
  status: ProductStatus;
};