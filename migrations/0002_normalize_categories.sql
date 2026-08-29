-- 상품 분류를 문자열 중복 저장에서 공통 참조 테이블로 보완한다.
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL COLLATE NOCASE UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT OR IGNORE INTO categories (name)
SELECT DISTINCT category FROM products WHERE category IS NOT NULL AND category <> '';

ALTER TABLE products ADD COLUMN category_id INTEGER REFERENCES categories(id) ON DELETE RESTRICT;

UPDATE products
SET category_id = (SELECT id FROM categories WHERE categories.name = products.category);

CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_orders_status_created_at ON orders(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);
