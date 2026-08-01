export type Lang = "en" | "km";

type Dict = Record<string, { en: string; km: string }>;

export const dictionary: Dict = {
  // Nav / header
  "nav.home": { en: "Home", km: "ទំព័រដើម" },
  "nav.shop": { en: "Shop", km: "ទំនិញ" },
  "nav.cart": { en: "Cart", km: "រទេះទំនិញ" },
  "nav.checkout": { en: "Checkout", km: "ការទូទាត់" },
  "nav.tagline": { en: "Menswear, Phnom Penh", km: "សំលៀកបំពាក់បុរស ភ្នំពេញ" },
  "nav.search": { en: "Search products", km: "ស្វែងរកទំនិញ" },

  // Home hero
  "home.hero.eyebrow": { en: "New Season Collection", km: "ការប្រមូលផ្តុំរដូវថ្មី" },
  "home.hero.title": { en: "Tailored Confidence.\nMade for Modern Men.", km: "ភាពជឿជាក់ដែលសមទំហំ។\nសម្រាប់បុរសសម័យទំនើប។" },
  "home.hero.subtitle": {
    en: "Premium menswear essentials — shirts, trousers, jackets and footwear — curated for Cambodia, priced in USD, delivered to your door.",
    km: "សំលៀកបំពាក់បុរសគុណភាពខ្ពស់ — អាវ ខោ អាវធំ និងស្បែកជើង — ជ្រើសរើសសម្រាប់កម្ពុជា កំណត់តម្លៃជាដុល្លារ ដឹកជញ្ជូនដល់ផ្ទះ។",
  },
  "home.hero.cta": { en: "Shop Collection", km: "ជ្រើសរើសទំនិញ" },
  "home.hero.ctaSecondary": { en: "Explore Lookbook", km: "មើលកាតាឡុក" },

  "home.categories.title": { en: "Shop by Category", km: "ជ្រើសរើសតាមប្រភេទ" },
  "home.categories.subtitle": { en: "Everything a modern wardrobe needs", km: "អ្វីៗគ្រប់យ៉ាងសម្រាប់ទូខោអាវទំនើប" },

  "home.featured.title": { en: "Featured Pieces", km: "ទំនិញពិសេស" },
  "home.featured.subtitle": { en: "Hand-picked favourites this month", km: "ជម្រើសពិសេសប្រចាំខែនេះ" },
  "home.featured.viewAll": { en: "View All Products", km: "មើលទំនិញទាំងអស់" },

  "home.values.shipping.title": { en: "Fast Delivery", km: "ដឹកជញ្ជូនលឿន" },
  "home.values.shipping.body": { en: "1–2 days in Phnom Penh, nationwide within the week.", km: "១-២ថ្ងៃក្នុងភ្នំពេញ ទូទាំងប្រទេសក្នុងមួយសប្តាហ៍។" },
  "home.values.cod.title": { en: "Cash on Delivery", km: "បង់ប្រាក់ពេលទទួលទំនិញ" },
  "home.values.cod.body": { en: "Pay with cash, ABA PAY or Wing at your doorstep.", km: "បង់ជាសាច់ប្រាក់ ABA PAY ឬ Wing នៅមុខផ្ទះ។" },
  "home.values.quality.title": { en: "Crafted Quality", km: "ជំនាញផលិតកម្មពិត" },
  "home.values.quality.body": { en: "Premium fabrics, built to outlast trends.", km: "សម្ភារៈគុណភាពខ្ពស់ ស្រស់ស្អាតយូរអង្វែង។" },
  "home.values.returns.title": { en: "Easy Exchange", km: "ប្តូរបានងាយស្រួល" },
  "home.values.returns.body": { en: "7-day size exchange on all orders.", km: "ប្តូរទំហំបានក្នុងរយៈពេល៧ថ្ងៃ។" },

  "home.banner.title": { en: "Join the NOVARO Circle", km: "ចូលរួមជាមួយ NOVARO" },
  "home.banner.body": { en: "Be first to know about new arrivals and private offers.", km: "ដឹងមុនគេអំពីទំនិញថ្មី និងការផ្តល់ជូនពិសេស។" },
  "home.banner.placeholder": { en: "Enter your email", km: "បញ្ចូលអ៊ីមែលរបស់អ្នក" },
  "home.banner.submit": { en: "Subscribe", km: "ចុះឈ្មោះ" },

  // Categories
  "category.all": { en: "All", km: "ទាំងអស់" },
  "category.shirts": { en: "Shirts", km: "អាវសម្លៀកបំពាក់" },
  "category.polos": { en: "Polos & Tees", km: "អាវប៉ូឡូ និងអាវយឺត" },
  "category.trousers": { en: "Trousers", km: "ខោ" },
  "category.outerwear": { en: "Outerwear", km: "អាវធំ" },
  "category.footwear": { en: "Footwear", km: "ស្បែកជើង" },
  "category.accessories": { en: "Accessories", km: "គ្រឿងបន្លាស់" },

  // Products listing
  "products.title": { en: "All Products", km: "ទំនិញទាំងអស់" },
  "products.subtitle": { en: "Explore the full NOVARO catalogue", km: "មើលកាតាឡុកពេញលេញរបស់ NOVARO" },
  "products.filter.category": { en: "Category", km: "ប្រភេទ" },
  "products.sort.label": { en: "Sort by", km: "តម្រៀបតាម" },
  "products.sort.featured": { en: "Featured", km: "ពិសេស" },
  "products.sort.priceLow": { en: "Price: Low to High", km: "តម្លៃ៖ ទាបទៅខ្ពស់" },
  "products.sort.priceHigh": { en: "Price: High to Low", km: "តម្លៃ៖ ខ្ពស់ទៅទាប" },
  "products.sort.newest": { en: "Newest", km: "ថ្មីបំផុត" },
  "products.count": { en: "products", km: "ទំនិញ" },
  "products.empty": { en: "No products match this filter.", km: "គ្មានទំនិញត្រូវនឹងតម្រងនេះទេ។" },
  "products.new": { en: "New", km: "ថ្មី" },
  "products.addToCart": { en: "Add to Cart", km: "ដាក់ចូលរទេះ" },

  // Product detail
  "product.back": { en: "Back to Shop", km: "ត្រឡប់ទៅទំនិញ" },
  "product.size": { en: "Size", km: "ទំហំ" },
  "product.sizeGuide": { en: "Size Guide", km: "មគ្គុទ្ទេសក៍ទំហំ" },
  "product.color": { en: "Color", km: "ពណ៌" },
  "product.quantity": { en: "Quantity", km: "ចំនួន" },
  "product.addToCart": { en: "Add to Cart", km: "ដាក់ចូលរទេះ" },
  "product.added": { en: "Added to cart", km: "បានដាក់ចូលរទេះ" },
  "product.selectSize": { en: "Please select a size", km: "សូមជ្រើសរើសទំហំ" },
  "product.sku": { en: "SKU", km: "លេខកូដទំនិញ" },
  "product.details": { en: "Details", km: "ព័ត៌មានលម្អិត" },
  "product.shipping": { en: "Shipping & Returns", km: "ការដឹកជញ្ជូន និងការប្តូរ" },
  "product.shippingBody": {
    en: "Free delivery in Phnom Penh on orders over $50. 7-day size exchange, item must be unworn with tags attached.",
    km: "ដឹកជញ្ជូនឥតគិតថ្លៃក្នុងភ្នំពេញ សម្រាប់ការបញ្ជាទិញលើស $50។ ប្តូរទំហំបានក្នុង៧ថ្ងៃ ទំនិញត្រូវនៅដដែលមិនទាន់ប្រើ។",
  },
  "product.care": { en: "Material & Care", km: "សម្ភារៈ និងការថែទាំ" },
  "product.related": { en: "You May Also Like", km: "អ្នកអាចនឹងចូលចិត្ត" },
  "product.inStock": { en: "In Stock", km: "មានស្តុក" },
  "product.lowStock": { en: "Low Stock", km: "ស្តុកជិតអស់" },

  // Cart
  "cart.title": { en: "Your Cart", km: "រទេះទំនិញរបស់អ្នក" },
  "cart.empty.title": { en: "Your cart is empty", km: "រទេះទំនិញរបស់អ្នកទទេ" },
  "cart.empty.body": { en: "Looks like you haven't added anything yet.", km: "មើលទៅដូចជាអ្នកមិនទាន់ដាក់ទំនិញនៅឡើយទេ។" },
  "cart.empty.cta": { en: "Continue Shopping", km: "បន្តទិញទំនិញ" },
  "cart.item": { en: "item", km: "មុខទំនិញ" },
  "cart.items": { en: "items", km: "មុខទំនិញ" },
  "cart.remove": { en: "Remove", km: "លុប" },
  "cart.subtotal": { en: "Subtotal", km: "សរុបរង" },
  "cart.shipping": { en: "Shipping", km: "ថ្លៃដឹកជញ្ជូន" },
  "cart.shippingFree": { en: "Free", km: "ឥតគិតថ្លៃ" },
  "cart.total": { en: "Total", km: "សរុប" },
  "cart.checkout": { en: "Proceed to Checkout", km: "បន្តទៅការទូទាត់" },
  "cart.continueShopping": { en: "Continue Shopping", km: "បន្តទិញទំនិញ" },
  "cart.freeShippingNotice": { en: "Add {amount} more for free shipping", km: "ទិញបន្ថែម {amount} ដើម្បីទទួលបានការដឹកជញ្ជូនឥតគិតថ្លៃ" },
  "cart.summary": { en: "Order Summary", km: "សេចក្តីសង្ខេបការបញ្ជាទិញ" },

  // Checkout
  "checkout.title": { en: "Checkout", km: "ការទូទាត់" },
  "checkout.contact": { en: "Contact Information", km: "ព័ត៌មានទំនាក់ទំនង" },
  "checkout.fullName": { en: "Full Name", km: "ឈ្មោះពេញ" },
  "checkout.phone": { en: "Phone Number", km: "លេខទូរស័ព្ទ" },
  "checkout.email": { en: "Email (optional)", km: "អ៊ីមែល (មិនចាំបាច់)" },
  "checkout.shippingAddress": { en: "Shipping Address", km: "អាសយដ្ឋានដឹកជញ្ជូន" },
  "checkout.address": { en: "Street Address", km: "អាសយដ្ឋានផ្លូវ" },
  "checkout.province": { en: "Province / City", km: "ខេត្ត / ក្រុង" },
  "checkout.notes": { en: "Order Notes (optional)", km: "ចំណាំបន្ថែម (មិនចាំបាច់)" },
  "checkout.payment": { en: "Payment Method", km: "វិធីបង់ប្រាក់" },
  "checkout.payment.cod": { en: "Cash on Delivery", km: "បង់ប្រាក់ពេលទទួលទំនិញ" },
  "checkout.payment.aba": { en: "ABA PAY", km: "ABA PAY" },
  "checkout.payment.wing": { en: "Wing Money", km: "វីង (Wing)" },
  "checkout.placeOrder": { en: "Place Order", km: "បញ្ជាទិញ" },
  "checkout.required": { en: "This field is required", km: "ត្រូវការបំពេញព័ត៌មាននេះ" },
  "checkout.phoneInvalid": { en: "Enter a valid Cambodia phone number", km: "សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ" },
  "checkout.success.title": { en: "Thank you for your order!", km: "សូមអរគុណសម្រាប់ការបញ្ជាទិញ!" },
  "checkout.success.body": {
    en: "Your order has been placed. Our team will call you shortly to confirm delivery.",
    km: "ការបញ្ជាទិញរបស់អ្នកបានជោគជ័យ។ ក្រុមការងាររបស់យើងនឹងហៅទូរស័ព្ទទៅអ្នកឆាប់ៗនេះ ដើម្បីបញ្ជាក់ការដឹកជញ្ជូន។",
  },
  "checkout.success.orderNumber": { en: "Order Number", km: "លេខការបញ្ជាទិញ" },
  "checkout.success.backHome": { en: "Back to Home", km: "ត្រឡប់ទៅទំព័រដើម" },
  "checkout.emptyRedirect": { en: "Your cart is empty. Add products before checking out.", km: "រទេះទំនិញរបស់អ្នកទទេ។ សូមបន្ថែមទំនិញមុននឹងទូទាត់។" },

  // Footer
  "footer.about": {
    en: "NOVARO is a Phnom Penh-based menswear label crafting understated, confident essentials for the modern Cambodian man.",
    km: "NOVARO គឺជាម៉ាកសំលៀកបំពាក់បុរសមានមូលដ្ឋាននៅភ្នំពេញ ផលិតសម្លៀកបំពាក់ដ៏សាមញ្ញ និងទំនុកចិត្តសម្រាប់បុរសកម្ពុជាសម័យទំនើប។",
  },
  "footer.shop": { en: "Shop", km: "ទំនិញ" },
  "footer.help": { en: "Help", km: "ជំនួយ" },
  "footer.contact": { en: "Contact", km: "ទំនាក់ទំនង" },
  "footer.faq": { en: "FAQ", km: "សំណួរញឹកញាប់" },
  "footer.shipping": { en: "Shipping Info", km: "ព័ត៌មានដឹកជញ្ជូន" },
  "footer.returns": { en: "Returns & Exchange", km: "ការប្តូរ និងប្តូរមកវិញ" },
  "footer.address": { en: "St. 240, Phnom Penh, Cambodia", km: "ផ្លូវ ២៤០, ភ្នំពេញ, កម្ពុជា" },
  "footer.rights": { en: "All rights reserved.", km: "រក្សាសិទ្ធិគ្រប់យ៉ាង។" },
  "footer.payments": { en: "We accept", km: "យើងទទួល" },

  // Common
  "common.currencyNote": { en: "Prices shown in USD", km: "តម្លៃបង្ហាញជាដុល្លារអាមេរិក" },
};

export function translate(lang: Lang, key: string): string {
  const entry = dictionary[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}
