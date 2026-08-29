const products = [
  { id: 'bag', name: '미니멀 토트백', price: 89000, category: '잡화', description: '각을 살린 검정 가죽 토트백', image: '/products/bag.png' },
  { id: 'watch', name: '클래식 손목시계', price: 145000, category: '잡화', description: '흰 문자판에 검정 가죽 밴드', image: '/products/watch.png' },
  { id: 'perfume', name: '시트러스 오드뚜왈렛', price: 78000, category: '뷰티', description: '상쾌한 시트러스 계열 향수', image: '/products/perfume.png' },
  { id: 'lipstick', name: '매트 레드 립스틱', price: 32000, category: '뷰티', description: '발색이 선명한 매트 타입', image: '/products/lipstick.png' },
  { id: 'shoe', name: '러닝화 블루', price: 112000, category: '신발', description: '쿠션이 두꺼운 남성 러닝화', image: '/products/shoe.png' },
  { id: 'shoe2', name: '러닝화 핑크', price: 112000, category: '신발', description: '같은 모델의 여성 러닝화', image: '/products/shoe2.png' },
  { id: 'wine', name: '레드와인 피노타지', price: 42000, category: '식품', description: '남아프리카산 드라이 레드와인', image: '/products/wine.png' },
  { id: 'pasta', name: '이탈리아 파스타 면', price: 6500, category: '식품', description: '세몰리나 100% 숏 파스타 450g', image: '/products/pasta.png' }
];

const html = `<!doctype html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>INU</title><style>
:root{--white:#fff;--surface:#fafafa;--soft:#f9fafb;--page:#f0f0f0;--disabled:#f2f4f6;--line:#e0e3e7;--blue:#4269f6;--ink:#232b35;--black:#131516;--muted:#8a8a8a;--green:#3d8a26}*{box-sizing:border-box}body{margin:0;color:var(--ink);background:var(--white);font-family:system-ui,-apple-system,"Malgun Gothic","Noto Sans KR",sans-serif;font-size:14px}button{font:inherit;cursor:pointer}a{color:inherit;text-decoration:none}.top{height:86px;border-bottom:1px solid var(--line);display:flex;align-items:center;padding:0 38px;gap:28px}.mark{width:48px;height:44px;background:var(--blue);color:#fff;display:grid;place-items:center;font-size:24px}.word{font-weight:700;font-size:20px}.search{height:36px;border:1px solid var(--blue);display:flex;align-items:center;flex:1;max-width:690px;color:var(--muted);padding:0 12px}.search b{color:var(--ink);font-weight:400;margin-right:30px}.tools{margin-left:auto;display:flex;gap:18px}.subnav{height:44px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:center;gap:27px;color:var(--muted);font-size:13px}.layout{display:flex}.rail{width:166px;background:var(--soft);border-right:1px solid var(--line);padding:22px 16px;flex:0 0 166px}.rail h3{font-size:16px;margin:0 0 17px;color:var(--black)}.rail button{display:block;width:100%;text-align:left;border:0;background:none;padding:7px 0;color:var(--ink)}.rail button.active{color:var(--blue);font-weight:700}.main{padding:21px 20px;flex:1;min-width:0}.main h1{font-size:22px;margin:0 0 8px;color:var(--black)}.hero{min-height:170px;background:url(/model-hero.png) center/cover no-repeat;padding:28px 32px;margin-bottom:28px;display:flex;flex-direction:column;justify-content:flex-end}.hero p{font-size:14px;margin:0;color:var(--ink);max-width:360px;line-height:1.7}.hero h1{font-size:22px!important;margin:0 0 8px!important}.bar{height:146px;background:var(--white);border:1px solid var(--line);display:grid;place-items:center;margin-bottom:33px}.bar span{background:#2e2e2e;color:#fff;padding:24px 42px;font-size:20px;letter-spacing:.03em}.sort{height:33px;background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;align-items:center;gap:20px;padding:0 8px;margin-bottom:22px;color:var(--muted)}.sort button{border:0;background:none;padding:0;color:inherit}.sort button.active{color:var(--blue);font-weight:700}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px 30px}.card{min-width:0}.photo{width:100%;aspect-ratio:1;background:var(--white);display:grid;place-items:center}.photo img{width:100%;height:100%;object-fit:contain}.card h2{font-size:13px;font-weight:400;margin:13px 0 7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.price{font-size:20px;color:var(--black);font-weight:700;margin:0 0 7px}.meta{font-size:13px;color:var(--muted);line-height:1.55}.detail{max-width:1120px;margin:0 auto;padding:40px 20px;display:grid;grid-template-columns:1fr 548px;gap:34px}.detail-photo{aspect-ratio:1;display:grid;place-items:center}.detail-photo img{width:100%;height:100%;object-fit:contain}.detail h1{font-size:22px;color:var(--black);margin:20px 0 8px}.detail .desc{color:var(--muted);margin-bottom:22px}.detail .big{font-size:20px;font-weight:700;color:var(--black);margin:8px 0 24px}.qty{display:flex;align-items:center;gap:12px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:20px 0}.qty button{width:34px;height:32px;background:var(--white);border:1px solid var(--line)}.qty input{width:52px;height:32px;text-align:center;border:1px solid var(--line)}.primary{height:46px;border:1px solid var(--blue);background:var(--blue);color:#fff;width:100%;margin-top:24px}.cart{max-width:1175px;margin:0 auto;padding:45px 0;display:grid;grid-template-columns:786px 375px;gap:14px}.cart h1{font-size:40px;color:var(--black);margin:0 0 40px;grid-column:1/-1}.items{border:1px solid var(--line)}.item{display:grid;grid-template-columns:40px 130px 1fr;gap:20px;padding:20px;border-bottom:9px solid var(--disabled);min-height:220px}.item:last-child{border-bottom:0}.item input{width:30px;height:30px;margin-top:45px}.item img{width:130px;height:130px;object-fit:contain}.item h2{font-size:18px;font-weight:400;margin:4px 0 12px}.item .price{font-size:20px}.step{font-size:21px;color:var(--muted);text-align:right;grid-column:1/-1;margin-top:-73px;margin-bottom:39px}.summary{border:1px solid var(--line);padding:25px;height:288px}.summary h2{font-size:20px;margin:0 0 23px}.sumrow{display:flex;justify-content:space-between;margin:12px 0}.total{border-top:1px solid var(--line);margin-top:23px;padding-top:20px;font-size:20px;font-weight:700;text-align:right}.empty{padding:70px 20px;text-align:center;color:var(--muted)}@media(max-width:900px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cart{display:block;padding:30px 18px}.summary{margin-top:14px}.step{margin:0 0 25px;text-align:left}.cart h1{margin-bottom:25px}.detail{grid-template-columns:1fr}.subnav{overflow:auto;justify-content:flex-start;padding:0 15px}.top{padding:0 15px;gap:10px}.word{display:none}.rail{width:130px;flex-basis:130px}}
/* Modern editorial layer: lightweight, open-source-friendly CSS only. */
body{background:var(--white);color:var(--ink);letter-spacing:0}
.top{height:72px;padding:0 32px;gap:16px;border-bottom:1px solid var(--line)}
.mark{width:38px;height:38px;background:var(--white);color:var(--ink);border:1px solid var(--line);font-size:20px}
.word{display:none}.brand{display:flex;align-items:center;gap:9px;color:var(--black);font-size:22px;font-weight:700;letter-spacing:.08em}.brand img{width:24px;height:24px}.tools{font-size:13px;color:var(--ink)}
.subnav{height:50px;justify-content:flex-start;padding:0 34px;gap:28px;font-size:13px;color:var(--ink);border-bottom:1px solid var(--line)}
.subnav a:first-child{border-bottom:0!important}.subnav a.active{font-weight:700;border-bottom:2px solid var(--ink);height:50px;display:flex;align-items:center}
.layout{display:block}.rail{width:100%;height:54px;padding:0 34px;display:flex;align-items:center;gap:26px;background:var(--white);border-right:0;border-bottom:1px solid var(--line)}
.rail h3{font-size:13px;margin:0;color:var(--muted);font-weight:400}.rail button{width:auto;padding:0;font-size:13px}.rail button.active{color:var(--black);font-weight:700}
.main{max-width:1280px;margin:0 auto;padding:34px 34px 80px}.main>h1{display:none}
.hero{min-height:172px;margin:0 0 44px;padding:32px 36px;background:var(--soft) url(/model-hero.png) center/cover no-repeat;border:0;justify-content:flex-end}.hero h1{font-size:22px!important;font-weight:700;color:var(--black)}.hero p{font-size:14px;color:var(--muted);line-height:1.7}
.grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:52px 24px}.photo{background:var(--soft);transition:background-color .2s ease}.card:hover .photo{background:var(--disabled)}.card h2{font-size:13px;margin:16px 0 8px;color:var(--ink)}.price{font-size:18px;margin-bottom:8px}.meta{font-size:13px;line-height:1.65;color:var(--muted)}
.detail{max-width:1240px;padding:56px 34px 90px;grid-template-columns:minmax(0,1fr) 520px;gap:72px}.detail-photo{background:var(--soft)}.detail h1{font-size:22px;margin-top:0}.detail .desc{font-size:14px;line-height:1.7}.primary{background:var(--ink);border-color:var(--ink);height:48px}.qty{padding:22px 0}
.cart{max-width:1200px;padding:56px 34px 90px;grid-template-columns:minmax(0,1fr) 340px;gap:28px}.cart h1{font-size:40px;margin-bottom:32px}.items{border:0;border-top:1px solid var(--line)}.item{padding:24px 0;grid-template-columns:38px 132px 1fr;border-bottom:1px solid var(--line);min-height:190px}.summary{border:1px solid var(--line);padding:24px;height:fit-content}.summary .primary{background:var(--ink);border-color:var(--ink)}
@media(max-width:900px){.top{padding:0 18px}.subnav{padding:0 18px;gap:20px}.rail{padding:0 18px;gap:18px;overflow:auto}.main{padding:24px 18px 56px}.hero{margin-bottom:30px;padding:24px}.grid{gap:36px 14px}.detail{display:block;padding:24px 18px 60px}.detail-photo{margin-bottom:28px}.cart{padding:30px 18px 60px}.cart h1{font-size:32px}.item{grid-template-columns:30px 96px 1fr;gap:14px}.item img{width:96px;height:96px}}</style></head><body><div id="app"></div><script>
const P=${JSON.stringify(products)};const money=n=>new Intl.NumberFormat('ko-KR').format(n)+'원';let cart=JSON.parse(localStorage.getItem('cart')||'{}');const save=()=>localStorage.setItem('cart',JSON.stringify(cart));const get=id=>P.find(p=>p.id===id);const count=()=>Object.values(cart).reduce((a,b)=>a+b,0);function header(){return '<header class="top"><a class="mark" href="#/" aria-label="전체 상품">☰</a><a class="brand" href="#/" aria-label="INU 전체 상품"><img src="/inu-mark.svg" alt=""><span>INU</span></a><div class="tools"><a href="#/cart">장바구니 ('+count()+')</a></div></header><nav class="subnav"><a href="#/">상품</a><a href="#/category/잡화">잡화</a><a href="#/category/뷰티">뷰티</a><a href="#/category/신발">신발</a><a href="#/category/식품">식품</a></nav>'}function home(cat){let list=cat?P.filter(p=>p.category===cat):P;return header()+'<div class="layout"><aside class="rail"><h3>분류</h3><button class="'+(!cat?'active':'')+'" onclick="location.hash=&quot;#/&quot;">전체 상품</button>'+['잡화','뷰티','신발','식품'].map(c=>'<button class="'+(cat===c?'active':'')+'" onclick="location.hash=&quot;#/category/'+c+'&quot;" >'+c+'</button>').join('')+'</aside><main class="main"><div class="hero"><h1>'+(cat||'상품')+'</h1><p>당신의 삶을 아름답게</p></div><div class="grid">'+list.map(card).join('')+'</div></main></div>'}function card(p){return '<article class="card"><a href="#/product/'+p.id+'"><div class="photo"><img src="'+p.image+'" alt="'+p.name+'"></div><h2>'+p.name+'</h2><p class="price">'+money(p.price)+'</p><div class="meta">'+p.category+'<br>'+p.description+'</div></a></article>'}function detail(p){let q=cart[p.id]||1;return header()+'<main class="detail"><div class="detail-photo"><img src="'+p.image+'" alt="'+p.name+'"></div><section><h1>'+p.name+'</h1><p class="desc">'+p.description+'</p><p class="big">'+money(p.price)+'</p><div class="qty"><span>수량</span><button onclick="changeQty(\\''+p.id+'\\',-1)">−</button><input id="qty" type="number" min="1" max="99" value="'+q+'" onchange="setQty(\\''+p.id+'\\',this.value)"><button onclick="changeQty(\\''+p.id+'\\',1)">＋</button></div><button class="primary" onclick="add(\\''+p.id+'\\')">장바구니 담기</button></section></main>'}function cartPage(){let rows=Object.entries(cart).filter(([,q])=>q>0);if(!rows.length)return header()+'<main class="cart"><h1>장바구니</h1><div class="items"><div class="empty">장바구니가 비어 있습니다.</div></div></main>';let total=rows.reduce((s,[id,q])=>s+get(id).price*q,0);return header()+'<main class="cart"><h1>장바구니</h1><div class="step">01 상품 선택 › <b>02 장바구니</b> › 03 주문 완료</div><div class="items">'+rows.map(([id,q])=>{let p=get(id);return '<div class="item"><input type="checkbox" checked><img src="'+p.image+'" alt="'+p.name+'"><div><h2>'+p.name+'</h2><p class="meta">'+p.description+'</p><p class="price">'+money(p.price*q)+'</p><button onclick="changeQty(\\''+id+'\\',-1)">−</button> '+q+' <button onclick="changeQty(\\''+id+'\\',1)">＋</button> <button onclick="removeItem(\\''+id+'\\')">삭제</button></div></div>'}).join('')+'</div><aside class="summary"><h2>주문 예상 금액</h2><div class="sumrow"><span>총 상품 가격</span><b>'+money(total)+'</b></div><div class="sumrow"><span>총 배송비</span><b>0원</b></div><div class="total">'+money(total)+'</div><button class="primary" onclick="order()">주문하기</button></aside></main>'}function add(id){cart[id]=Math.min(99,(cart[id]||0)+1);save();location.hash='#/cart'}function setQty(id,v){cart[id]=Math.max(1,Math.min(99,Number(v)||1));save();render()}function changeQty(id,d){setQty(id,(cart[id]||1)+d)}function removeItem(id){delete cart[id];save();render()}function order(){const n='ORD-'+Date.now().toString().slice(-8);localStorage.removeItem('cart');cart={};document.getElementById('app').innerHTML=header()+'<main class="cart"><h1>주문 완료</h1><div class="items"><div class="empty"><p>주문이 접수되었습니다.</p><p>주문 번호: '+n+'</p></div></div></main>'}function syncNav(){const path=location.hash.slice(1)||'/';document.querySelectorAll('.subnav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+path))}function render(){let path=location.hash.slice(1)||'/';if(path==='/cart')app.innerHTML=cartPage();else if(path.startsWith('/product/'))app.innerHTML=detail(get(path.split('/')[2]));else app.innerHTML=home(path.startsWith('/category/')?decodeURIComponent(path.split('/')[2]):'')}window.addEventListener('hashchange',()=>{render();syncNav()});render();syncNav();
</script></body></html>`;

const textEncoder = new TextEncoder();
const toHex = bytes => Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
const fromHex = value => Uint8Array.from(String(value).match(/.{2}/g) || [], pair => parseInt(pair, 16));
const toToken = bytes => toHex(bytes);
async function digest(value) { return new Uint8Array(await crypto.subtle.digest('SHA-256', textEncoder.encode(value))); }
async function hashPassword(password, salt = crypto.getRandomValues(new Uint8Array(16))) {
  const key = await crypto.subtle.importKey('raw', textEncoder.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, key, 256));
  return `pbkdf2$100000$${toHex(salt)}$${toHex(bits)}`;
}
async function verifyPassword(password, encoded) {
  const [, iterations, saltText, expectedText] = String(encoded || '').split('$');
  if (!iterations || !saltText || !expectedText) return false;
  const actual = fromHex((await hashPassword(password, fromHex(saltText))).split('$').pop());
  const expected = fromHex(expectedText);
  if (actual.length !== expected.length) return false;
  let diff = 0; for (let i = 0; i < actual.length; i++) diff |= actual[i] ^ expected[i];
  return diff === 0;
}
function cookies(request) { return Object.fromEntries((request.headers.get('cookie') || '').split(';').map(v => v.trim().split('=').map(decodeURIComponent)).filter(v => v.length === 2)); }
async function currentUser(request, env) {
  if (!env.DB) return null;
  const token = cookies(request).inu_session;
  if (!token) return null;
  const tokenHash = toToken(await digest(token));
  const row = await env.DB.prepare("SELECT u.id, u.email, u.name FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at > datetime('now')").bind(tokenHash).first();
  return row || null;
}
async function requestJson(request) { try { return await request.json(); } catch { return null; } }
function json(data, status = 200, headers = {}) { return Response.json(data, { status, headers }); }
async function englishDescriptionApi(request, env) {
  if (!env.AI) return json({ error: 'Workers AI가 연결되지 않았습니다.' }, 503);
  const body = await requestJson(request) || {}; const name = String(body.name || '').trim(); const description = String(body.description || '').trim();
  if (!name || !description || name.length > 200 || description.length > 1000) return json({ error: '상품 정보가 올바르지 않습니다.' }, 400);
  try {
    const result = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', { messages: [{ role: 'system', content: 'You write concise, natural English product copy for international shoppers. Do not invent specifications, prices, brands, certifications, or guarantees. Use only the supplied product name and description. Return one polished paragraph of 2-3 sentences.' }, { role: 'user', content: `Product name: ${name}\nDescription: ${description}` }], max_tokens: 180, temperature: 0.7 });
    const text = String(result?.response || '').trim(); if (!text) throw new Error('empty AI response'); return json({ description: text });
  } catch (error) { console.error('Workers AI error', error); return json({ error: '영어 상품 소개를 만들지 못했습니다. 잠시 후 다시 시도해 주세요.' }, 502); }
}
async function authApi(request, env, url) {
  if (!env.DB) return json({ error: '데이터베이스가 연결되지 않았습니다.' }, 503);
  const body = await requestJson(request) || {};
  if (url.pathname === '/api/auth/english' && request.method === 'POST') return englishDescriptionApi(request, env);
  if (url.pathname === '/api/auth/signup' && request.method === 'POST') {
    const email = String(body.email || '').trim().toLowerCase(); const name = String(body.name || '').trim(); const password = String(body.password || '');
    if (!email.includes('@') || !name || password.length < 8) return json({ error: '이메일, 이름과 8자 이상 비밀번호를 입력해 주세요.' }, 400);
    try { const stored = await hashPassword(password); const result = await env.DB.prepare('INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)').bind(email, stored, name).run(); return json({ ok: true, user: { id: result.meta.last_row_id, email, name } }, 201); }
    catch (error) { console.error('signup failed', error); const duplicate = String(error && error.message).toUpperCase().includes('UNIQUE'); return json({ error: duplicate ? '이미 가입된 이메일입니다.' : '회원가입 처리 중 오류가 발생했습니다.' }, duplicate ? 409 : 500); }
  }
  if (url.pathname === '/api/auth/login' && request.method === 'POST') {
    const email = String(body.email || '').trim().toLowerCase(); const password = String(body.password || ''); const user = await env.DB.prepare('SELECT id, email, name, password_hash FROM users WHERE email=?').bind(email).first();
    if (!user || !(await verifyPassword(password, user.password_hash))) return json({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' }, 401);
    const token = toToken(crypto.getRandomValues(new Uint8Array(32))); const tokenHash = toToken(await digest(token));
    await env.DB.prepare("INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, datetime('now', '+30 days'))").bind(tokenHash, user.id).run();
    return json({ ok: true, user: { id: user.id, email: user.email, name: user.name } }, 200, { 'Set-Cookie': `inu_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=2592000` });
  }
  if (url.pathname === '/api/auth/logout' && request.method === 'POST') {
    const token = cookies(request).inu_session; if (token) await env.DB.prepare('DELETE FROM sessions WHERE token_hash=?').bind(toToken(await digest(token))).run();
    return json({ ok: true }, 200, { 'Set-Cookie': 'inu_session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0' });
  }
  if (url.pathname === '/api/auth/me' && request.method === 'GET') {
    const user = await currentUser(request, env); if (!user) return json({ user: null, orders: [] });
    const orders = await env.DB.prepare('SELECT id, total, status, created_at FROM orders WHERE user_id=? ORDER BY created_at DESC').bind(user.id).all();
    const items = await env.DB.prepare('SELECT oi.order_id, oi.product_id, oi.qty, oi.price, p.name, p.image_url AS image FROM order_items oi JOIN orders o ON o.id=oi.order_id JOIN products p ON p.id=oi.product_id WHERE o.user_id=? ORDER BY oi.id').bind(user.id).all();
    const byOrder = Object.fromEntries(orders.results.map(order => [order.id, { ...order, items: [] }]));
    for (const item of items.results) byOrder[item.order_id]?.items.push(item);
    return json({ user, orders: Object.values(byOrder) });
  }
  return json({ error: '지원하지 않는 요청입니다.' }, 404);
}
async function orderApi(request, env) {
  const user = await currentUser(request, env); if (!user) return json({ error: '로그인이 필요합니다.' }, 401);
  const body = await requestJson(request) || {}; const items = Array.isArray(body.items) ? body.items : [];
  if (!items.length || items.length > 99) return json({ error: '주문할 상품이 없습니다.' }, 400);
  const normalized = items.map(i => ({ id: String(i.product_id || ''), qty: Math.max(1, Math.min(99, Number(i.qty) || 0)) })).filter(i => i.id && i.qty);
  const rows = []; for (const item of normalized) { const product = await env.DB.prepare('SELECT id, price FROM products WHERE id=?').bind(item.id).first(); if (!product) return json({ error: '존재하지 않는 상품입니다.' }, 400); rows.push({ ...item, price: product.price }); }
  const total = rows.reduce((sum, item) => sum + item.price * item.qty, 0); const orderId = `ORD-${crypto.randomUUID()}`;
  await env.DB.batch([env.DB.prepare("INSERT INTO orders (id, user_id, total, status) VALUES (?, ?, ?, 'pending')").bind(orderId, user.id, total), ...rows.map(item => env.DB.prepare('INSERT INTO order_items (order_id, product_id, qty, price) VALUES (?, ?, ?, ?)').bind(orderId, item.id, item.qty, item.price))]);
  return json({ ok: true, order: { id: orderId, total, status: 'pending' } }, 201);
}

async function paymentConfirmApi(request, env) {
  const user = await currentUser(request, env); if (!user) return json({ error: '로그인이 필요합니다.' }, 401);
  if (!env.TOSS_SECRET_KEY) return json({ error: '결제 설정이 완료되지 않았습니다.' }, 503);
  const body = await requestJson(request) || {}; const paymentKey = String(body.paymentKey || ''); const orderId = String(body.orderId || ''); const amount = Number(body.amount);
  if (!paymentKey || !orderId || !Number.isInteger(amount) || amount < 0) return json({ error: '결제 정보가 올바르지 않습니다.' }, 400);
  const order = await env.DB.prepare('SELECT id, total, status FROM orders WHERE id=? AND user_id=?').bind(orderId, user.id).first();
  if (!order) return json({ error: '주문을 찾을 수 없습니다.' }, 404);
  if (order.status === 'paid') return json({ error: '이미 결제 완료된 주문입니다.' }, 409);
  if (order.total !== amount) return json({ error: '결제 금액이 주문 금액과 다릅니다.' }, 400);
  const auth = btoa(`${env.TOSS_SECRET_KEY}:`);
  const toss = await fetch('https://api.tosspayments.com/v1/payments/confirm', { method: 'POST', headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ paymentKey, orderId, amount }) });
  const result = await toss.json().catch(() => ({}));
  if (!toss.ok) return json({ error: result.message || '결제 승인에 실패했습니다.', code: result.code || 'PAYMENT_FAILED' }, toss.status >= 500 ? 502 : 400);
  await env.DB.prepare("UPDATE orders SET status='paid', payment_key=?, payment_method=?, approved_at=datetime('now') WHERE id=? AND user_id=? AND status='pending'").bind(paymentKey, result.method || null, orderId, user.id).run();
  return json({ ok: true, payment: { orderId, paymentKey, status: 'paid', method: result.method || null } });
}

async function orderDetailApi(request, env, orderId) {
  const user = await currentUser(request, env); if (!user) return json({ error: '로그인이 필요합니다.' }, 401);
  const order = await env.DB.prepare('SELECT id, total, status, payment_method, approved_at, created_at FROM orders WHERE id=? AND user_id=?').bind(orderId, user.id).first();
  if (!order) return json({ error: '주문을 찾을 수 없습니다.' }, 404);
  const items = await env.DB.prepare('SELECT oi.product_id, oi.qty, oi.price, p.name, p.image_url AS image FROM order_items oi JOIN products p ON p.id=oi.product_id WHERE oi.order_id=? ORDER BY oi.id').bind(orderId).all();
  return json({ order: { ...order, items: items.results } });
}

async function productsFromD1(env) {
  if (!env.DB) return products;
  await env.DB.batch(products.map(p => env.DB.prepare('INSERT OR IGNORE INTO products (id, name, price, description, category_id, image_url) VALUES (?, ?, ?, ?, (SELECT id FROM categories WHERE name = ?), ?)').bind(p.id, p.name, p.price, p.description, p.category, p.image)));
  const result = await env.DB.prepare('SELECT p.id, p.name, p.price, p.description, c.name AS category, p.image_url AS image FROM products p JOIN categories c ON c.id = p.category_id ORDER BY p.rowid').all();
  return result.results;
}

export default { async fetch(request, env) { const url = new URL(request.url); const isAsset = /\.(?:svg|png|jpg|jpeg|webp|gif)$/i.test(url.pathname); if (isAsset && env.ASSETS) return env.ASSETS.fetch(request); if (url.pathname.startsWith('/api/auth/')) return authApi(request, env, url); if (url.pathname === '/api/payments/config' && request.method === 'GET') return json({ clientKey: env.TOSS_CLIENT_KEY || '' }); if (url.pathname === '/api/payments/confirm' && request.method === 'POST') return paymentConfirmApi(request, env); if (url.pathname === '/api/orders' && request.method === 'POST') return orderApi(request, env); if (url.pathname.startsWith('/api/orders/') && request.method === 'GET') return orderDetailApi(request, env, decodeURIComponent(url.pathname.split('/')[3] || '')); if (url.pathname === '/api/products') { try { return Response.json(await productsFromD1(env), { headers: { 'cache-control': 'no-store' } }); } catch (error) { return Response.json({ error: '상품 데이터를 불러오지 못했습니다.' }, { status: 500 }); } } try { const dbProducts = await productsFromD1(env); const dbHtml = html.replace(JSON.stringify(products), JSON.stringify(dbProducts)); return new Response(dbHtml.replace('</body>', '<script src="/app.js?v=9"></script></body>'), { headers: { 'content-type': 'text/html; charset=UTF-8' } }); } catch (error) { return new Response(html.replace('</body>', '<script src="/app.js?v=9"></script></body>'), { headers: { 'content-type': 'text/html; charset=UTF-8' } }); } } };
