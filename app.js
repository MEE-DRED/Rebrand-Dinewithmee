// ============================================
// DINE WITH MEE — Unified app.js
// Includes data + UI logic for home and marketplace
// ============================================

const MEALS = [
  // West Africa
  { id: 'w1', region: 'West Africa', name: 'Jollof Rice & Chicken', desc: 'Smoky party rice with marinated grilled chicken, ripe plantain, and coleslaw.', price: 14.99, emoji: '🍛', tag: 'bestseller' },
  { id: 'w2', region: 'West Africa', name: 'Egusi Soup & Fufu', desc: 'Ground melon seed soup with assorted meat and pounded yam.', price: 16.50, emoji: '🥘', tag: '' },
  { id: 'w3', region: 'West Africa', name: 'Suya Platter', desc: 'Spiced beef skewers with onions, tomatoes, and suya spice dip.', price: 12.00, emoji: '🍢', tag: 'popular' },
  { id: 'w4', region: 'West Africa', name: 'Kelewele', desc: 'Ghanaian spiced fried plantains with ginger, chili, and cloves.', price: 8.50, emoji: '🍌', tag: '' },
  { id: 'w5', region: 'West Africa', name: 'Thieboudienne', desc: "Senegal's national dish — rice and fish in rich tomato sauce with vegetables.", price: 17.00, emoji: '🐟', tag: 'chef special' },

  // East Africa
  { id: 'e1', region: 'East Africa', name: 'Nyama Choma', desc: 'Kenyan charcoal-roasted goat meat with kachumbari fresh salsa.', price: 18.00, emoji: '🍖', tag: 'popular' },
  { id: 'e2', region: 'East Africa', name: 'Injera & Doro Wat', desc: 'Ethiopian spongy flatbread with spiced chicken stew (berbere).', price: 15.50, emoji: '🫓', tag: 'bestseller' },
  { id: 'e3', region: 'East Africa', name: 'Pilau Rice', desc: 'Kenyan spiced pilau with whole spices, tender beef, and caramelised onions.', price: 13.00, emoji: '🍚', tag: '' },
  { id: 'e4', region: 'East Africa', name: 'Ugali & Sukuma Wiki', desc: 'East African maize porridge with collard greens and fried eggs.', price: 9.00, emoji: '🌽', tag: '' },

  // Central Africa
  { id: 'c1', region: 'Central Africa', name: 'Poulet DG', desc: "Cameroon's Director General chicken — fried plantains, vegetables, tomato sauce.", price: 16.00, emoji: '🍗', tag: 'chef special' },
  { id: 'c2', region: 'Central Africa', name: 'Saka Saka', desc: 'Congolese cassava leaf stew cooked with palm oil and smoked fish.', price: 14.00, emoji: '🥬', tag: '' },

  // Southern Africa
  { id: 's1', region: 'Southern Africa', name: 'Braai Platter', desc: 'South African barbecue — boerewors, ribs, corn, chakalaka relish.', price: 22.00, emoji: '🥩', tag: 'popular' },
  { id: 's2', region: 'Southern Africa', name: 'Sadza & Nyama', desc: 'Zimbabwean white maize meal with slow-cooked beef and tomato gravy.', price: 11.50, emoji: '🍲', tag: '' },

  // North Africa
  { id: 'n1', region: 'North Africa', name: 'Lamb Tagine', desc: 'Moroccan slow-cooked lamb with preserved lemons, olives, and harissa.', price: 19.00, emoji: '🫕', tag: 'bestseller' },
  { id: 'n2', region: 'North Africa', name: 'Couscous Royale', desc: 'Fluffy semolina with seven vegetables, merguez, and ras el hanout broth.', price: 16.50, emoji: '🍽️', tag: '' },
];

const INGREDIENTS = [
  { id: 'i1', region: 'West Africa', name: 'Uda / Negro Pepper', desc: 'Aromatic West African spice for soups, stews, and postpartum dishes.', price: 4.99, emoji: '🌶️' },
  { id: 'i2', region: 'West Africa', name: 'Red Palm Oil (500ml)', desc: 'Unrefined palm oil rich in carotenoids and vitamin E. Signature flavour.', price: 7.50, emoji: '🫙' },
  { id: 'i3', region: 'West Africa', name: 'Locust Beans (Iru)', desc: 'Fermented locust beans — umami seasoning for soups and sauces.', price: 3.99, emoji: '🫘' },
  { id: 'i4', region: 'East Africa', name: 'Berbere Spice Blend', desc: 'Ethiopian spice mix with chili, fenugreek, korarima, and rue.', price: 6.50, emoji: '🌿' },
  { id: 'i5', region: 'East Africa', name: 'Ugali Maize Flour (1kg)', desc: 'Finely milled white maize flour for authentic ugali and sadza.', price: 5.00, emoji: '🌾' },
  { id: 'i6', region: 'North Africa', name: 'Harissa Paste (200g)', desc: 'Tunisian hot chili paste with coriander, caraway, garlic, and olive oil.', price: 5.99, emoji: '🌶️' },
  { id: 'i7', region: 'Southern Africa', name: 'Chakalaka Relish', desc: 'Spicy bean and vegetable relish. Perfect with braai or pap.', price: 4.50, emoji: '🫙' },
  { id: 'i8', region: 'Central Africa', name: 'Mbongo Spice', desc: 'Cameroonian black spice from burnt bark — deep, smoky, unique.', price: 5.75, emoji: '🖤' },
];

const CHEFS = [
  { id: 'ch1', name: 'Chef Amara Diallo', country: '🇸🇳 Senegal', specialty: 'West African Coastal Cuisine', meals: ['Thieboudienne', 'Yassa Poulet', 'Mafé'], bio: 'Award-winning chef from Dakar with 12 years bringing Senegali flavours to the world.', emoji: '👨🏾‍🍳', rating: 4.9, reviews: 312 },
  { id: 'ch2', name: 'Chef Ngozi Okafor', country: '🇳🇬 Nigeria', specialty: 'Nigerian Homestyle & Festive', meals: ['Egusi Soup', 'Jollof Rice', 'Ogbono Soup'], bio: 'Lagos-born culinary artist and food science graduate championing nutritious African cooking.', emoji: '👩🏾‍🍳', rating: 4.8, reviews: 278 },
  { id: 'ch3', name: 'Chef Tadesse Bekele', country: '🇪🇹 Ethiopia', specialty: 'Ethiopian & Eritrean', meals: ['Doro Wat', 'Tibs', 'Kitfo'], bio: 'From Addis Ababa, Tadesse specialises in injera and ancient Ethiopian spice traditions.', emoji: '👨🏿‍🍳', rating: 4.9, reviews: 194 },
  { id: 'ch4', name: 'Chef Fatima El-Amin', country: '🇲🇦 Morocco', specialty: 'North African & Maghrebi', meals: ['Lamb Tagine', 'Couscous Royale', 'Pastilla'], bio: 'Marrakech-trained chef with a modern twist on traditional Moroccan slow cooking.', emoji: '👩🏽‍🍳', rating: 4.7, reviews: 241 },
  { id: 'ch5', name: 'Chef Bongani Dlamini', country: '🇿🇦 South Africa', specialty: 'Southern African Braai & Fusion', meals: ['Braai Platter', 'Bobotie', 'Bunny Chow'], bio: 'Cape Town chef fusing Zulu tradition with contemporary African fine dining.', emoji: '👨🏾‍🍳', rating: 4.8, reviews: 167 },
  { id: 'ch6', name: 'Chef Marie-Claire Mballa', country: '🇨🇲 Cameroon', specialty: 'Central African & Francophone', meals: ['Poulet DG', 'Ndolé', 'Okok'], bio: 'Yaoundé native and cookbook author preserving endangered Central African recipes.', emoji: '👩🏿‍🍳', rating: 4.9, reviews: 203 },
];

const TESTIMONIALS = [
  { text: "Dine with Mee changed how my family eats. We now get authentic Ghanaian meals delivered with full nutrition info. Life-changing!", name: 'Abena Mensah', role: 'Mother of 3 · Accra', emoji: '🇬🇭', stars: 5 },
  { text: "As a nutritionist, I recommend this platform constantly. The telenutrition sessions are professional and the meal data is excellent.", name: 'Dr. Kofi Asante', role: 'Clinical Nutritionist · London', emoji: '👨🏾‍⚕️', stars: 5 },
  { text: "I discovered ingredients I had not seen since leaving Senegal. The marketplace is a goldmine for the diaspora!", name: 'Mariama Bah', role: 'Chef & Entrepreneur · Paris', emoji: '🇫🇷', stars: 5 },
];

// ── Cart System ──────────────────────────────
const Cart = {
  get() {
    return JSON.parse(localStorage.getItem('dwm_cart') || '[]');
  },
  save(items) {
    localStorage.setItem('dwm_cart', JSON.stringify(items));
    Cart.updateCount();
  },
  add(item) {
    const items = Cart.get();
    const existing = items.find(i => i.id === item.id);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ ...item, qty: 1 });
    }
    Cart.save(items);
    showToast(`${item.name} added to cart 🛒`);
  },
  remove(id) {
    const items = Cart.get().filter(i => i.id !== id);
    Cart.save(items);
    Cart.renderSidebar();
  },
  changeQty(id, delta) {
    const items = Cart.get();
    const item = items.find(i => i.id === id);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) return Cart.remove(id);
    }
    Cart.save(items);
    Cart.renderSidebar();
  },
  total() {
    return Cart.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },
  updateCount() {
    document.querySelectorAll('.cart-count').forEach(el => {
      const c = Cart.count();
      el.textContent = c;
      el.style.display = c > 0 ? 'flex' : 'none';
    });
  },
  renderSidebar() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    const items = Cart.get();

    if (items.length === 0) {
      container.innerHTML = `<div class="cart-empty">
        <span class="emoji">🍽️</span>
        Your cart is empty.<br>Explore our marketplace!
      </div>`;
      const totalEmpty = document.getElementById('cart-total-amount');
      if (totalEmpty) totalEmpty.textContent = '$0.00';
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.emoji || '🍲'}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="Cart.changeQty('${item.id}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="Cart.changeQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `).join('');

    const total = document.getElementById('cart-total-amount');
    if (total) total.textContent = `$${Cart.total().toFixed(2)}`;
  }
};

// ── Toast ─────────────────────────────────────
function showToast(msg, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ── Render Helpers ────────────────────────────
function renderMealCards(meals, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = meals.map(meal => {
    const tagHTML = meal.tag
      ? `<span style="position:absolute;top:14px;left:14px;background:var(--gold);color:var(--green-deep);font-size:10px;font-weight:700;padding:4px 10px;border-radius:100px;text-transform:uppercase;letter-spacing:0.06em">${meal.tag}</span>`
      : '';

    return `
      <div class="meal-card" data-region="${meal.region}">
        <div class="meal-img-placeholder" style="position:relative">
          ${meal.emoji}
          ${tagHTML}
        </div>
        <div class="meal-body">
          <div class="meal-region">${meal.region}</div>
          <h3>${meal.name}</h3>
          <p>${meal.desc}</p>
          <div class="meal-footer">
            <span class="meal-price">$${meal.price.toFixed(2)}</span>
            <button class="btn-add-cart" onclick='Cart.add(${JSON.stringify({ id: meal.id, name: meal.name, price: meal.price, emoji: meal.emoji })})'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderIngredientCards(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="meal-card">
      <div class="meal-img-placeholder">${item.emoji}</div>
      <div class="meal-body">
        <div class="meal-region">${item.region}</div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="meal-footer">
          <span class="meal-price">$${item.price.toFixed(2)}</span>
          <button class="btn-add-cart" onclick='Cart.add(${JSON.stringify({ id: item.id, name: item.name, price: item.price, emoji: item.emoji })})'>
            + Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderChefCards(chefs, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = chefs.map(chef => `
    <div class="chef-mini-card">
      <div class="chef-avatar">${chef.emoji}</div>
      <h4>${chef.name}</h4>
      <div class="country">${chef.country}</div>
      <p>${chef.specialty}</p>
      <div style="margin-top:8px;font-size:12px;color:var(--gold);">
        ★ ${chef.rating} <span style="color:var(--text-light)">(${chef.reviews} reviews)</span>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="stars">${'★'.repeat(t.stars)}</div>
      <p>"${t.text}"</p>
      <div class="testimonial-author">
        <div class="t-avatar">${t.emoji}</div>
        <div class="t-info">
          <div class="name">${t.name}</div>
          <div class="role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Navbar and UI Init ───────────────────────
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const cartBtn = document.getElementById('cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartClose = document.getElementById('cart-close');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  function openCart() {
    cartOverlay?.classList.add('open');
    cartSidebar?.classList.add('open');
    Cart.renderSidebar();
  }

  function closeCart() {
    cartOverlay?.classList.remove('open');
    cartSidebar?.classList.remove('open');
  }

  cartBtn?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.2)' : '';
    }
  });

  Cart.updateCount();
}

// ── Form Validation ───────────────────────────
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function showError(inputId, msg) {
  const input = document.getElementById(inputId);
  const errEl = document.getElementById(`${inputId}-err`);
  if (input) input.classList.add('error');
  if (errEl) {
    errEl.textContent = msg;
    errEl.classList.add('show');
  }
}

function clearError(inputId) {
  const input = document.getElementById(inputId);
  const errEl = document.getElementById(`${inputId}-err`);
  if (input) input.classList.remove('error');
  if (errEl) errEl.classList.remove('show');
}

function initLoginForm() {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    clearError('email');
    clearError('password');

    if (!validateEmail(email)) {
      showError('email', 'Enter a valid email address');
      valid = false;
    }
    if (!validatePassword(password)) {
      showError('password', 'Password must be at least 6 characters');
      valid = false;
    }

    if (valid) {
      showToast('Welcome back! Logging you in… ✨');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    }
  });
}

function initSignupForm() {
  const form = document.getElementById('signup-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    clearError('name');
    clearError('email');
    clearError('password');

    if (name.length < 2) {
      showError('name', 'Please enter your full name');
      valid = false;
    }
    if (!validateEmail(email)) {
      showError('email', 'Enter a valid email address');
      valid = false;
    }
    if (!validatePassword(password)) {
      showError('password', 'Password must be at least 6 characters');
      valid = false;
    }

    if (valid) {
      showToast('Account created! Welcome to Dine with Mee 🎉');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1800);
    }
  });
}

function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Session booked! A nutritionist will confirm shortly 📅');
    form.reset();
  });
}

// ── Home and Marketplace Rendering ───────────
function initHomeSections() {
  renderMealCards(MEALS.slice(0, 6), 'featured-meals');
  renderChefCards(CHEFS.slice(0, 4), 'chef-preview');
  renderTestimonials();
}

let currentMealRegion = 'All';

function renderMarketplaceMeals() {
  const meals = currentMealRegion === 'All'
    ? MEALS
    : MEALS.filter(m => m.region === currentMealRegion);

  renderMealCards(meals, 'marketplace-meals');

  const countEl = document.getElementById('meal-count');
  if (countEl) {
    countEl.textContent = `${meals.length} meal${meals.length !== 1 ? 's' : ''} found`;
  }
}

function switchTab(tab) {
  const mealsPanel = document.getElementById('panel-meals');
  const ingredientsPanel = document.getElementById('panel-ingredients');
  const mealsBtn = document.getElementById('tab-meals');
  const ingredientsBtn = document.getElementById('tab-ingredients');

  if (!mealsPanel || !ingredientsPanel || !mealsBtn || !ingredientsBtn) return;

  mealsPanel.style.display = tab === 'meals' ? '' : 'none';
  ingredientsPanel.style.display = tab === 'ingredients' ? '' : 'none';
  mealsBtn.classList.toggle('active', tab === 'meals');
  ingredientsBtn.classList.toggle('active', tab === 'ingredients');

  if (tab === 'meals') {
    renderMarketplaceMeals();
  } else {
    renderIngredientCards(INGREDIENTS, 'marketplace-ingredients');
  }
}

function filterRegion(region, btn) {
  currentMealRegion = region;
  document.querySelectorAll('#region-filter .region-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMarketplaceMeals();
}

function filterIngredients(region, btn) {
  document.querySelectorAll('#ingredient-region-filter .region-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const filtered = region === 'All'
    ? INGREDIENTS
    : INGREDIENTS.filter(i => i.region === region);

  renderIngredientCards(filtered, 'marketplace-ingredients');
}

function initMarketplace() {
  if (!document.getElementById('marketplace-meals')) return;
  renderMarketplaceMeals();
  renderIngredientCards(INGREDIENTS, 'marketplace-ingredients');
}

// ── Scroll Animation ──────────────────────────
function initScrollAnimation() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.meal-card, .health-card, .chef-mini-card, .info-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHomeSections();
  initMarketplace();
  initLoginForm();
  initSignupForm();
  initBookingForm();
  initScrollAnimation();
});
