export type CategoryId =
  | "shirts"
  | "polos"
  | "trousers"
  | "outerwear"
  | "footwear"
  | "accessories";

export type Localized = { en: string; km: string };

export type ProductColor = {
  name: Localized;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  sku: string;
  category: CategoryId;
  name: Localized;
  description: Localized;
  care: Localized;
  price: number;
  compareAtPrice?: number;
  sizes: string[];
  colors: ProductColor[];
  /** Real product photos, index-aligned with `colors` (images[i] shows colors[i]). Omitted for mock/placeholder items. */
  images?: string[];
  stock: number;
  featured?: boolean;
  isNew?: boolean;
};

export const categories: { id: CategoryId; labelKey: string }[] = [
  { id: "shirts", labelKey: "category.shirts" },
  { id: "polos", labelKey: "category.polos" },
  { id: "trousers", labelKey: "category.trousers" },
  { id: "outerwear", labelKey: "category.outerwear" },
  { id: "footwear", labelKey: "category.footwear" },
  { id: "accessories", labelKey: "category.accessories" },
];

const img = (file: string) => `/products/${file}`;

export const products: Product[] = [
  {
    id: "p01",
    slug: "obsidian-oxford-shirt",
    sku: "NV-SH-001",
    category: "shirts",
    name: { en: "Obsidian Oxford Shirt", km: "អាវអុកហ្វដ ពណ៌ខ្មៅសុវណ្ណ" },
    description: {
      en: "A refined oxford weave shirt in deep obsidian black, finished with brass-tone buttons and a tailored silhouette for evenings in the city.",
      km: "អាវត្បាញអុកហ្វដពណ៌ខ្មៅជ្រៅ តុបតែងដោយប៊ូតុងពណ៌សំរិទ្ធមាស និងទម្រង់សម ស័ក្តិសមសម្រាប់ល្ងាចនៅទីក្រុង។",
    },
    care: { en: "100% cotton. Machine wash cold, iron on low heat.", km: "កប្បាស ១០០%។ ត្រូវលាងជាមួយទឹកត្រជាក់ អ៊ុតកម្តៅទាប។" },
    price: 42,
    compareAtPrice: 52,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Obsidian Black", km: "ខ្មៅសុវណ្ណ" }, hex: "#17140f" },
      { name: { en: "Ivory", km: "ស ជូរ" }, hex: "#eee3cd" },
    ],
    stock: 24,
  },
  {
    id: "p02",
    slug: "brass-line-polo",
    sku: "NV-PL-002",
    category: "polos",
    name: { en: "Brass Line Polo", km: "អាវប៉ូឡូ បន្ទាត់សំរិទ្ធមាស" },
    description: {
      en: "A breathable pique polo with a subtle brass-gold collar trim — smart enough for the office, easy enough for the weekend.",
      km: "អាវប៉ូឡូបីកេ ដកដង្ហើមស្រួល មានគែមកអាវពណ៌សំរិទ្ធមាសបន្តិចបន្តួច សមទាំងធ្វើការ និងចុងសប្តាហ៍។",
    },
    care: { en: "Cotton-pique blend. Machine wash cold, do not bleach.", km: "កប្បាសបីកេលាយ។ លាងទឹកត្រជាក់ កុំប្រើសារធាតុបំបាត់ពណ៌។" },
    price: 17,
    compareAtPrice: 28,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: { en: "Warm Charcoal", km: "ធ្យូងក្តៅ" }, hex: "#2b241b" },
      { name: { en: "Brass Gold", km: "សំរិទ្ធមាស" }, hex: "#c9a455" },
      { name: { en: "Navy", km: "ខៀវចាស់" }, hex: "#212a35" },
    ],
    stock: 40,
    isNew: true,
  },
  {
    id: "p03",
    slug: "heritage-crewneck-tee",
    sku: "NV-PL-003",
    category: "polos",
    name: { en: "Heritage Crewneck Tee", km: "អាវយឺតកអាវមូល" },
    description: {
      en: "Heavyweight combed cotton tee with a boxy, modern cut and the NOVARO monogram woven at the hem.",
      km: "អាវយឺតកប្បាសក្រាស់ គុណភាពខ្ពស់ ទម្រង់ទំនើប មានស្លាកអក្សរ NOVARO ត្បាញនៅជាយអាវ។",
    },
    care: { en: "100% combed cotton. Wash inside out in cold water.", km: "កប្បាសពិសេស ១០០%។ ត្រឡប់អាវផ្នែកក្នុងចេញក្រៅ លាងទឹកត្រជាក់។" },
    price: 17,
    compareAtPrice: 19,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Ink Black", km: "ខ្មៅទឹកខ្មៅ" }, hex: "#14110d" },
      { name: { en: "Stone Grey", km: "ប្រផេះថ្ម" }, hex: "#8a8171" },
    ],
    stock: 60,
  },
  {
    id: "p04",
    slug: "tailored-wool-trouser",
    sku: "NV-TR-004",
    category: "trousers",
    name: { en: "Tailored Wool Trouser", km: "ខោកាត់ដេរដោយសូតវេស្ត" },
    description: {
      en: "A slim, tapered trouser cut from a wool-blend fabric with natural stretch — built for long days and sharp evenings.",
      km: "ខោកាត់តូចចង្អៀត ធ្វើពីក្រណាត់សូតវេស្តលាយ មានលទ្ធភាពទាញបន្តិច ស័ក្តិសមសម្រាប់ថ្ងៃវែង និងល្ងាចមានលក្ខណៈសមរម្យ។",
    },
    care: { en: "Wool blend. Dry clean recommended.", km: "សូតវេស្តលាយ។ ណែនាំឱ្យបោកអេតូនកម្តៅ។" },
    price: 58,
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: { en: "Espresso Brown", km: "ត្នោតកាហ្វេ" }, hex: "#382a1c" },
      { name: { en: "Deep Charcoal", km: "ធ្យូងជ្រៅ" }, hex: "#221f1c" },
    ],
    stock: 18,
  },
  {
    id: "p05",
    slug: "utility-cargo-trouser",
    sku: "NV-TR-005",
    category: "trousers",
    name: { en: "Utility Cargo Trouser", km: "ខោការហ្គោអឺទីលីធី" },
    description: {
      en: "Durable cotton-twill cargo trouser with reinforced stitching and brass-tone hardware for everyday movement.",
      km: "ខោការហ្គោធ្វើពីកប្បាសត្វីលទ្រនាប់រឹង ដេរខ្ជាប់ខ្ជួន និងគ្រឿងបន្លាស់ពណ៌សំរិទ្ធមាស សម្រាប់ការប្រើប្រាស់ប្រចាំថ្ងៃ។",
    },
    care: { en: "Cotton twill. Machine wash cold.", km: "កប្បាសត្វីល។ លាងម៉ាស៊ីនទឹកត្រជាក់។" },
    price: 36,
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: { en: "Olive Khaki", km: "ខាគីអូលីវ" }, hex: "#4a4530" }],
    stock: 30,
  },
  {
    id: "p06",
    slug: "signature-bomber-jacket",
    sku: "NV-OW-006",
    category: "outerwear",
    name: { en: "Signature Bomber Jacket", km: "អាវធំបុមប៊ែរ ស្លាកសញ្ញា" },
    description: {
      en: "A statement bomber in matte black with a brass-gold zipper and ribbed cuffs — the label's most requested outerwear piece.",
      km: "អាវធំបុមប៊ែរពណ៌ខ្មៅមិនរលោង មានស្នាមហ្ស៊ីបពណ៌សំរិទ្ធមាស និងកែងដៃមានជ្រូង — ជាទំនិញអាវធំដែលត្រូវបានស្នើសុំច្រើនបំផុត។",
    },
    care: { en: "Polyester shell. Wipe clean, do not machine wash.", km: "សម្ភារៈក្រៅប៉ូលីស្ទើរ។ សូមជូតសម្អាត កុំលាងម៉ាស៊ីន។" },
    price: 89,
    compareAtPrice: 110,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: { en: "Matte Black", km: "ខ្មៅមិនរលោង" }, hex: "#151210" },
      { name: { en: "Brass Gold", km: "សំរិទ្ធមាស" }, hex: "#b8944a" },
    ],
    stock: 15,
    isNew: true,
  },
  {
    id: "p07",
    slug: "overshirt-jacket",
    sku: "NV-OW-007",
    category: "outerwear",
    name: { en: "Brushed Overshirt Jacket", km: "អាវធំអូវើសឺត វាយសើម" },
    description: {
      en: "A brushed cotton overshirt that layers between a shirt and jacket — warm, textured, and effortlessly sharp.",
      km: "អាវធំអូវើសឺតកប្បាសវាយសើម សម្រាប់ពាក់ត្រង់កណ្តាលអាវធម្មតានិងអាវធំ — កក្តៅ មានវាយនភាព និងស្រស់ស្អាតដោយងាយ។",
    },
    care: { en: "Brushed cotton. Machine wash cold, tumble dry low.", km: "កប្បាសវាយសើម។ លាងម៉ាស៊ីនទឹកត្រជាក់ ស្ងួតកម្តៅទាប។" },
    price: 64,
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: { en: "Sandstone", km: "ថ្មខ្សាច់" }, hex: "#8a7355" }],
    stock: 20,
  },
  {
    id: "p08",
    slug: "minimalist-leather-derby",
    sku: "NV-FW-008",
    category: "footwear",
    name: { en: "Minimalist Leather Derby", km: "ស្បែកជើងឌែបប៊ី ស្បែកសាមញ្ញ" },
    description: {
      en: "Full-grain leather derby shoes with a clean silhouette and brass-gold eyelets, hand-finished for a subtle sheen.",
      km: "ស្បែកជើងឌែបប៊ីធ្វើពីស្បែកពិតគុណភាពខ្ពស់ ទម្រង់សាមញ្ញ មានប្រហោងខ្សែស្បែកជើងពណ៌សំរិទ្ធមាស ធ្វើដោយដៃឱ្យមានលោភពន្លឺបន្តិច។",
    },
    care: { en: "Genuine leather. Wipe with a dry cloth, use leather conditioner.", km: "ស្បែកពិត។ ជូតដោយក្រណាត់ស្ងួត ប្រើឡេការពារស្បែក។" },
    price: 76,
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: [
      { name: { en: "Espresso", km: "ត្នោតកាហ្វេ" }, hex: "#3b2a1c" },
      { name: { en: "Black", km: "ខ្មៅ" }, hex: "#1a1714" },
    ],
    stock: 22,
  },
  {
    id: "p09",
    slug: "everyday-canvas-sneaker",
    sku: "NV-FW-009",
    category: "footwear",
    name: { en: "Everyday Canvas Sneaker", km: "ស្បែកជើងកង់វាស់ ប្រើប្រចាំថ្ងៃ" },
    description: {
      en: "Low-profile canvas sneaker with a cream sole and gold-stitched detailing — an easy pairing for denim or trousers.",
      km: "ស្បែកជើងកង់វាស់ទាប បាតពណ៌ក្រែម និងគ្រឿងតុបតែងដេរខ្សែពណ៌មាស — ងាយស្រួលផ្គុំជាមួយខោខូវប៊យ ឬខោធម្មតា។",
    },
    care: { en: "Canvas upper. Spot clean only.", km: "គម្របកង់វាស់។ សម្អាតតែផ្នែកប្រឡាក់ប៉ុណ្ណោះ។" },
    price: 34,
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: [{ name: { en: "Cream", km: "ក្រែម" }, hex: "#e6dcc4" }],
    stock: 33,
    isNew: true,
  },
  {
    id: "p10",
    slug: "full-grain-leather-belt",
    sku: "NV-AC-010",
    category: "accessories",
    name: { en: "Full-Grain Leather Belt", km: "ខ្សែក្រវាត់ស្បែកពិត" },
    description: {
      en: "A full-grain leather belt with a solid brass buckle — the finishing touch for tailored trousers.",
      km: "ខ្សែក្រវាត់ធ្វើពីស្បែកពិត មានក្តាប់សំរិទ្ធមាសរឹងមាំ — ជាចំណុចបញ្ចប់ដ៏ល្អសម្រាប់ខោកាត់ដេរ។",
    },
    care: { en: "Genuine leather. Store flat or hanging.", km: "ស្បែកពិត។ ទុកដាក់ស្មើ ឬព្យួរ។" },
    price: 24,
    sizes: ["S/M", "L/XL"],
    colors: [{ name: { en: "Black", km: "ខ្មៅ" }, hex: "#171310" }],
    stock: 45,
  },
  {
    id: "p11",
    slug: "brass-buckle-wallet",
    sku: "NV-AC-011",
    category: "accessories",
    name: { en: "Brass Buckle Bifold Wallet", km: "កាបូបលុយបត់ក្តាប់សំរិទ្ធមាស" },
    description: {
      en: "A slim bifold wallet in pebbled leather with a brass corner accent and six card slots.",
      km: "កាបូបលុយបត់ស្តើង ធ្វើពីស្បែកមានវាយនភាព តុបតែងជ្រុងពណ៌សំរិទ្ធមាស និងមានប្រអប់ដាក់កាតប្រាំមួយ។",
    },
    care: { en: "Genuine leather. Keep away from moisture.", km: "ស្បែកពិត។ ជៀសវាងសំណើម។" },
    price: 22,
    sizes: ["One Size"],
    colors: [{ name: { en: "Black", km: "ខ្មៅ" }, hex: "#171310" }],
    stock: 50,
  },
  {
    id: "p12",
    slug: "linen-blend-resort-shirt",
    sku: "NV-SH-012",
    category: "shirts",
    name: { en: "Linen-Blend Resort Shirt", km: "អាវលីនលាយ រចនាបថតំបន់សម្រាក" },
    description: {
      en: "A breathable long-sleeve linen-cotton shirt cut for Cambodia's climate — roll the cuffs for warm afternoons, button up for evenings out.",
      km: "អាវលីនកប្បាសលាយដៃវែង ដកដង្ហើមស្រួល កាត់សម្រាប់អាកាសធាតុកម្ពុជា — មូរដៃពេលថ្ងៃក្តៅ ឬបិទប៊ូតុងសម្រាប់ល្ងាចនៅខាងក្រៅ។",
    },
    care: { en: "Linen-cotton blend. Machine wash cold, hang dry.", km: "លីនកប្បាសលាយ។ លាងម៉ាស៊ីនទឹកត្រជាក់ ព្យួរឱ្យស្ងួត។" },
    price: 39,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Rust Brown", km: "ត្នោតឥដ្ឋ" }, hex: "#8a5a3c" },
      { name: { en: "Olive Green", km: "បៃតងអូលីវ" }, hex: "#5c6440" },
      { name: { en: "Khaki Beige", km: "ខាគីលឿង" }, hex: "#c7b28c" },
      { name: { en: "Powder Blue", km: "ខៀវម្សៅ" }, hex: "#8fa3ad" },
    ],
    images: [
      img("1782353652860_878302247782589640_g2624158010987206290_6ea6de51f81961387c83fbb5fd8cfce7.jpg"),
      img("1782353653402_878302247782589640_g2624158010987206290_991633fa7312896b870d3ce5939665b9.jpg"),
      img("1782353654018_878302247782589640_g2624158010987206290_4a1f6cc688e4b759b4ca3f98427f7e67.jpg"),
      img("1782353654552_878302247782589640_g2624158010987206290_2eb6a91c122727fccf5d7b7fc39d624b.jpg"),
    ],
    stock: 28,
    isNew: true,
  },
  {
    id: "p13",
    slug: "quarter-zip-cable-knit-polo",
    sku: "NV-PL-013",
    category: "polos",
    name: { en: "Quarter-Zip Cable Knit Polo", km: "អាវប៉ូឡូត្បាញខ្សែ ហ្ស៊ីបពាក់កណ្តាល" },
    description: {
      en: "A textured cable-knit polo finished with a sleek quarter-zip placket — sharp enough for the office, relaxed enough for a Sunday out.",
      km: "អាវប៉ូឡូត្បាញខ្សែ មានវាយនភាព បំពាក់ដោយហ្ស៊ីបពាក់កណ្តាលដ៏ទាន់សម័យ — សមទាំងធ្វើការ និងថ្ងៃចុងសប្តាហ៍។",
    },
    care: { en: "Knit blend. Hand wash cold, dry flat.", km: "អុសលាយ។ លាងដៃទឹកត្រជាក់ ព្យួរស្ងួតលើផ្ទៃរាបស្មើ។" },
    price: 17,
    compareAtPrice: 33,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Storm Grey", km: "ប្រផេះព្យុះ" }, hex: "#8a8681" },
      { name: { en: "Umber Brown", km: "ត្នោតចាស់" }, hex: "#5b4632" },
      { name: { en: "Deep Navy", km: "ខៀវចាស់ជ្រៅ" }, hex: "#1f2733" },
      { name: { en: "Ivory Cream", km: "ក្រែមស" }, hex: "#e9e0cf" },
    ],
    images: [
      img("1782285076588_6462829250236084552_g2624158010987206290_5fa7b9bbc3e14e9078d72af4977cdf75.jpg"),
      img("1782285076619_6462829250236084552_g2624158010987206290_95ad9f4cde1ea81eaf7aa6db15edecd7.jpg"),
      img("1782285076656_6462829250236084552_g2624158010987206290_333a8d9c0dd7473a8dd42e76e8115513.jpg"),
      img("1782285076692_6462829250236084552_g2624158010987206290_7c967ac4952e4d723a324e7ecd67ff39.jpg"),
    ],
    stock: 26,
    featured: true,
    isNew: true,
  },
  {
    id: "p14",
    slug: "contrast-collar-knit-polo",
    sku: "NV-PL-014",
    category: "polos",
    name: { en: "Contrast-Collar Cable Knit Polo", km: "អាវប៉ូឡូត្បាញខ្សែ កអាវផ្ទុយពណ៌" },
    description: {
      en: "A relaxed cable-knit polo with a contrasting collar and cuffs — an easy layering piece for cooler evenings.",
      km: "អាវប៉ូឡូត្បាញខ្សែ ជាមួយកអាវ និងចុងដៃពណ៌ផ្ទុយគ្នា — សមស្រាប់ពាក់ត្រង់ក្នុងល្ងាចត្រជាក់។",
    },
    care: { en: "Knit blend. Hand wash cold, dry flat.", km: "អុសលាយ។ លាងដៃទឹកត្រជាក់ ព្យួរស្ងួតលើផ្ទៃរាបស្មើ។" },
    price: 17,
    compareAtPrice: 34,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Ocean Blue", km: "ខៀវសមុទ្រ" }, hex: "#3a5a78" },
      { name: { en: "Onyx Black", km: "ខ្មៅអូនិច" }, hex: "#17140f" },
      { name: { en: "Umber Brown", km: "ត្នោតចាស់" }, hex: "#5b4632" },
      { name: { en: "Ivory Cream", km: "ក្រែមស" }, hex: "#e9e0cf" },
    ],
    images: [
      img("1782285082645_6462829250236084552_g2624158010987206290_093ed9ea28fdc740018440198af61f06.jpg"),
      img("1782285082673_6462829250236084552_g2624158010987206290_e4264daf2b96b49db1f77bd57d904f1d.jpg"),
      img("1782285082706_6462829250236084552_g2624158010987206290_8858c93579bde66b89bd42847ad58953.jpg"),
      img("1782285082739_6462829250236084552_g2624158010987206290_115c47ccd964f5fe077c6ae0760be731.jpg"),
    ],
    stock: 24,
  },
  {
    id: "p15",
    slug: "racer-stripe-polo",
    sku: "NV-PL-015",
    category: "polos",
    name: { en: "Racer Stripe Polo", km: "អាវប៉ូឡូ ខ្សែក្រវាត់កីឡា" },
    description: {
      en: "A sporty polo with a bold brass-gold racer stripe across the chest — built for movement, styled for the street.",
      km: "អាវប៉ូឡូរចនាបថកីឡា មានខ្សែក្រវាត់ពណ៌សំរិទ្ធមាសដ៏លេចធ្លោនៅទ្រូង — ស័ក្តិសមទាំងលំហាត់ប្រាណ និងចេញក្រៅ។",
    },
    care: { en: "Cotton-poly blend. Machine wash cold.", km: "កប្បាសលាយប៉ូលីស្ទើរ។ លាងម៉ាស៊ីនទឹកត្រជាក់។" },
    price: 17,
    compareAtPrice: 30,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Onyx Black", km: "ខ្មៅអូនិច" }, hex: "#17140f" },
      { name: { en: "Ocean Blue", km: "ខៀវសមុទ្រ" }, hex: "#4a6c86" },
      { name: { en: "Umber Brown", km: "ត្នោតចាស់" }, hex: "#5b4632" },
      { name: { en: "Ivory White", km: "ស ក្រែម" }, hex: "#eae5da" },
    ],
    images: [
      img("1782354844994_3023714816477841166_g2624158010987206290_dbefe3fed98207ad9ae6f6071837c0b5.jpg"),
      img("1782354845013_3023714816477841166_g2624158010987206290_19ddda48820ea2f7cd9c3d2be2c44481.jpg"),
      img("1782354845031_3023714816477841166_g2624158010987206290_c9cabde2d9541ef8c52a32a2b260ed6c.jpg"),
      img("1782354845048_3023714816477841166_g2624158010987206290_8161873f653e04695b891894a83ae52c.jpg"),
    ],
    stock: 30,
    isNew: true,
  },
  {
    id: "p16",
    slug: "pinstripe-resort-coord-set",
    sku: "NV-SH-016",
    category: "shirts",
    name: { en: "Pinstripe Resort Co-ord Set", km: "សំពត់អាវឈុតត្បាញបន្ទាត់ សម្រាប់ដំណើរកម្សាន្ត" },
    description: {
      en: "A matching short-sleeve shirt and drawstring shorts in fine pinstripe — an effortless two-piece set for warm evenings and easy travel.",
      km: "ឈុតពីរផ្នែក អាវដៃខ្លី និងខោខ្លីមានខ្សែចង ត្បាញបន្ទាត់ស្តើង — ស័ក្តិសមសម្រាប់ល្ងាចក្តៅ និងការធ្វើដំណើរ។",
    },
    care: { en: "Cotton-viscose blend. Machine wash cold, hang dry.", km: "កប្បាសលាយវីស្កូស។ លាងម៉ាស៊ីនទឹកត្រជាក់ ព្យួរឱ្យស្ងួត។" },
    price: 46,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: { en: "Onyx Black", km: "ខ្មៅអូនិច" }, hex: "#171512" },
      { name: { en: "Deep Navy", km: "ខៀវចាស់ជ្រៅ" }, hex: "#1e2636" },
      { name: { en: "Ivory", km: "ក្រែមស" }, hex: "#e8e2d4" },
      { name: { en: "Burgundy", km: "ក្រហមទំពាំងបាយជូរ" }, hex: "#5c2028" },
    ],
    images: [
      img("1783063225757_2257238558574597291_g2624158010987206290_3a907578c37a338eeb0381f766940c2a.jpg"),
      img("1783063225792_2257238558574597291_g2624158010987206290_3808c72abc36ee10a6b162aaf7b52611.jpg"),
      img("1783063225843_2257238558574597291_g2624158010987206290_cfdaedfb7d07349215e5d600b4260628.jpg"),
      img("1783063225890_2257238558574597291_g2624158010987206290_265827cccbae5e777d47a1ddbfa9f736.jpg"),
    ],
    stock: 20,
    featured: true,
  },
  {
    id: "p17",
    slug: "honeycomb-waffle-knit-polo",
    sku: "NV-PL-017",
    category: "polos",
    name: { en: "Honeycomb Waffle Knit Polo", km: "អាវប៉ូឡូត្បាញរាងសំបុកឃ្មុំ" },
    description: {
      en: "A breathable waffle-textured knit polo with a soft structured collar — a quiet, tactile alternative to standard pique.",
      km: "អាវប៉ូឡូត្បាញរាងសំបុកឃ្មុំ ដកដង្ហើមស្រួល កអាវរឹងបន្តិច — ជម្រើសថ្មីក្រៅពីអាវប៉ូឡូបីកេធម្មតា។",
    },
    care: { en: "Cotton blend. Machine wash cold, do not tumble dry.", km: "កប្បាសលាយ។ លាងម៉ាស៊ីនទឹកត្រជាក់ កុំបង្ហោចក្តៅ។" },
    price: 17,
    compareAtPrice: 31,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Storm Grey", km: "ប្រផេះព្យុះ" }, hex: "#8f8d89" },
      { name: { en: "Camel Brown", km: "ត្នោតខ្សែក" }, hex: "#8a6a48" },
      { name: { en: "Ivory Cream", km: "ក្រែមស" }, hex: "#e6dfd0" },
      { name: { en: "Onyx Black", km: "ខ្មៅអូនិច" }, hex: "#1a1714" },
    ],
    images: [
      img("1783134733412_6462829250236084552_g2624158010987206290_c57074b18fadf1286a76680cf1e7367d.jpg"),
      img("1783134733933_6462829250236084552_g2624158010987206290_a851efabacaa129d86e02dbc07f1c530.jpg"),
      img("1783134734922_6462829250236084552_g2624158010987206290_aaadffbbef02c324e48eaf1c66f4507c.jpg"),
      img("1783134735528_6462829250236084552_g2624158010987206290_e27620aa3cb7995496814b584b90039f.jpg"),
    ],
    stock: 26,
  },
  {
    id: "p18",
    slug: "triple-stripe-track-jogger",
    sku: "NV-TR-018",
    category: "trousers",
    name: { en: "Triple-Stripe Track Jogger", km: "ខោហ្សុកឃឺ ខ្សែបន្ទាត់បី" },
    description: {
      en: "A tapered track jogger with side stripe detailing, elastic waist and ankle cuffs — athletic ease with a tailored line.",
      km: "ខោហ្សុកឃឺរាងចង្អៀត មានខ្សែបន្ទាត់ចំហៀង ចង្កេះមានជ្រូង និងចុងជើងចង្អៀត — ស្រួលពាក់ដូចខោកីឡា តែមើលទៅសមរម្យ។",
    },
    care: { en: "Polyester-cotton blend. Machine wash cold.", km: "ប៉ូលីស្ទើរលាយកប្បាស។ លាងម៉ាស៊ីនទឹកត្រជាក់។" },
    price: 33,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "White", km: "ស" }, hex: "#e9e7e2" },
      { name: { en: "Onyx Black", km: "ខ្មៅអូនិច" }, hex: "#17140f" },
      { name: { en: "Storm Grey", km: "ប្រផេះព្យុះ" }, hex: "#83807b" },
      { name: { en: "Deep Navy", km: "ខៀវចាស់ជ្រៅ" }, hex: "#1c2534" },
    ],
    images: [
      img("1783916810452_2889591867796236769_g2624158010987206290_11cb1fde2176dcb269f0f7f8f486845b.jpg"),
      img("1783916810996_2889591867796236769_g2624158010987206290_b3d957015439edec06c063c6da6063fc.jpg"),
      img("1783916811910_2889591867796236769_g2624158010987206290_cebfa35dd00e8c870fc7a2da1724d479.jpg"),
      img("1783916813264_2889591867796236769_g2624158010987206290_8077082aa2640ac8f1fbf78354171452.jpg"),
    ],
    stock: 28,
    featured: true,
    isNew: true,
  },
  {
    id: "p19",
    slug: "pinstripe-button-polo",
    sku: "NV-PL-019",
    category: "polos",
    name: { en: "Pinstripe Button Polo", km: "អាវប៉ូឡូប៊ូតុង ត្បាញបន្ទាត់" },
    description: {
      en: "A woven pinstripe polo with a structured button placket — a smart-casual staple for the modern office.",
      km: "អាវប៉ូឡូត្បាញបន្ទាត់ស្តើង មានប៊ូតុងកអាវរឹងបន្តិច — សមស្រាប់ការិយាល័យ និងកន្លែងធ្វើការសម័យទំនើប។",
    },
    care: { en: "Cotton blend. Machine wash cold, iron on low heat.", km: "កប្បាសលាយ។ លាងម៉ាស៊ីនទឹកត្រជាក់ អ៊ុតកម្តៅទាប។" },
    price: 17,
    compareAtPrice: 29,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Umber Brown", km: "ត្នោតចាស់" }, hex: "#4d3c2c" },
      { name: { en: "Storm Grey", km: "ប្រផេះព្យុះ" }, hex: "#9a988f" },
      { name: { en: "Deep Navy", km: "ខៀវចាស់ជ្រៅ" }, hex: "#1e2534" },
      { name: { en: "White", km: "ស" }, hex: "#e7e5df" },
    ],
    images: [
      img("1784187685351_3023714816477841166_g2624158010987206290_4a0173deddd060716ae3493c86afbc1e.jpg"),
      img("1784187685361_3023714816477841166_g2624158010987206290_63e23d247e36f3eb4f0b6fa4975fae59.jpg"),
      img("1784187685374_3023714816477841166_g2624158010987206290_a773d19b79de41fa45aa256cf1fb1e6c.jpg"),
      img("1784187685387_3023714816477841166_g2624158010987206290_02623f53e5bf09966e92eabd541190ff.jpg"),
    ],
    stock: 32,
  },
  {
    id: "p20",
    slug: "rugby-stripe-polo",
    sku: "NV-PL-020",
    category: "polos",
    name: { en: "Rugby Stripe Polo", km: "អាវប៉ូឡូ ខ្សែបន្ទាត់រ៉ាបប៊ី" },
    description: {
      en: "A bold rugby-stripe knit polo with a ribbed collar — heritage sport styling with a premium hand-feel.",
      km: "អាវប៉ូឡូត្បាញខ្សែបន្ទាត់រ៉ាបប៊ីដ៏លេចធ្លោ កអាវមានជ្រូង — រចនាបថកីឡាបុរាណ ជាមួយសម្ភារៈគុណភាពខ្ពស់។",
    },
    care: { en: "Cotton blend. Machine wash cold, do not bleach.", km: "កប្បាសលាយ។ លាងម៉ាស៊ីនទឹកត្រជាក់ កុំប្រើសារធាតុបំបាត់ពណ៌។" },
    price: 17,
    compareAtPrice: 36,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Onyx Black", km: "ខ្មៅអូនិច" }, hex: "#171512" },
      { name: { en: "Burgundy", km: "ក្រហមទំពាំងបាយជូរ" }, hex: "#5c2028" },
      { name: { en: "Forest Green", km: "បៃតងព្រៃ" }, hex: "#2e4632" },
      { name: { en: "Deep Navy", km: "ខៀវចាស់ជ្រៅ" }, hex: "#1c2740" },
    ],
    images: [
      img("1784605907139_2089339809559181830_g2624158010987206290_c7a0e7abb6a87627a06fc8f40c1c7e5b.jpg"),
      img("1784605907822_2089339809559181830_g2624158010987206290_0355e56cd8f66242cbc56b7f283cf8e2.jpg"),
      img("1784605908419_2089339809559181830_g2624158010987206290_12adae9bb49ee984c68e91ea68858b4f.jpg"),
      img("1784605908926_2089339809559181830_g2624158010987206290_101bdd43a83c6597087105fde6d60455.jpg"),
    ],
    stock: 22,
    featured: true,
  },
  {
    id: "p21",
    slug: "classic-button-polo",
    sku: "NV-PL-021",
    category: "polos",
    name: { en: "Classic Button Polo", km: "អាវប៉ូឡូប៊ូតុង បែបបុរាណ" },
    description: {
      en: "The everyday essential — a soft cotton-blend button polo, tailored fit, built for daily rotation.",
      km: "អាវប៉ូឡូចាំបាច់ប្រចាំថ្ងៃ ធ្វើពីកប្បាសលាយទន់ ទម្រង់សម ស័ក្តិសមសម្រាប់ពាក់រាល់ថ្ងៃ។",
    },
    care: { en: "Cotton blend. Machine wash cold.", km: "កប្បាសលាយ។ លាងម៉ាស៊ីនទឹកត្រជាក់។" },
    price: 17,
    compareAtPrice: 26,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: { en: "Umber Brown", km: "ត្នោតចាស់" }, hex: "#4a3626" },
      { name: { en: "Onyx Black", km: "ខ្មៅអូនិច" }, hex: "#161310" },
      { name: { en: "Deep Navy", km: "ខៀវចាស់ជ្រៅ" }, hex: "#1b2334" },
      { name: { en: "White / Navy Trim", km: "ស គែមខៀវ" }, hex: "#e7e4dc" },
    ],
    images: [
      img("1784685089846_2257238558574597291_g2624158010987206290_2f3a5bd0187e1786486ae67aa090c74c.jpg"),
      img("1784685090419_2257238558574597291_g2624158010987206290_fc8fef9c5323ea54eddc93fa3ca2fd0f.jpg"),
      img("1784685090910_2257238558574597291_g2624158010987206290_7eec10ae573a514e38227b0ae2d7c992.jpg"),
      img("1784685091868_2257238558574597291_g2624158010987206290_b110719232deec2ed75a41eb6a74da95.jpg"),
    ],
    stock: 35,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
