-- 분류가 없는 상품이 들어가면 화면의 분류 필터와 데이터 정합성이 깨진다.
CREATE TRIGGER IF NOT EXISTS products_category_required_insert
BEFORE INSERT ON products
WHEN NEW.category_id IS NULL
BEGIN
  SELECT RAISE(ABORT, 'category_id is required');
END;

CREATE TRIGGER IF NOT EXISTS products_category_required_update
BEFORE UPDATE OF category_id ON products
WHEN NEW.category_id IS NULL
BEGIN
  SELECT RAISE(ABORT, 'category_id is required');
END;
