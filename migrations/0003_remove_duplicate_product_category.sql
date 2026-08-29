-- 분류명 문자열은 categories.name 하나만 보존하고 products에서는 제거한다.
ALTER TABLE products DROP COLUMN category;
