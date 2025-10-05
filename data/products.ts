export type Category = 'acero-dorado' | 'acero-blanco'
// Se agrega la nueva subcategoría 'tobilleras'
export type Subcategory = 'anillos' | 'aros' | 'collares' | 'pulseras' | 'brazaletes' | 'tobilleras'

export type Product = {
  id: string
  title: string
  price: number
  category: Category
  subcategory: Subcategory
  images: string[]
  description: string
  featured?: boolean
  outOfStock?: boolean
}

export const products: Product[] = [
  // ACERO DORADO/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Anillos
  { id: 'gd-ring-01', title: 'Anillo Dual', price: 7500, category: 'acero-dorado', subcategory: 'anillos', images:[ '/placeholder/Anillo_Dual.jpg','/placeholder/Anillo_Dual2.jpg'], description: 'Anillo de acero dorado con un diseño moderno de bandas múltiples que se cruzan y entrelazan en la parte frontal. Las bandas son lisas, redondeadas y tienen un acabado pulido brillante, creando un efecto de profundidad y movimiento.' , featured: true },
  { id: 'gd-ring-02', title: 'Anillo Golden', price: 9000, category: 'acero-dorado', subcategory: 'anillos', images:[ '/placeholder/Anillo_Golden.jpg','/placeholder/Anillo_Golden2.jpg'], description: 'Anillo de acero dorado, de diseño abierto y regulable. Está inspirado en el clásico trébol de cuatro hojas, presentando un borde completamente perlado. Alterna tréboles lisos y pulidos con otros que tienen incrustaciones de zirconias brillantes (pavé).' },
  { id: 'gd-ring-03', title: 'Anillo Corazon Tina', price: 4000, category: 'acero-dorado', subcategory: 'anillos', images: ['/placeholder/Anillo_Corazon_Tina.jpg'], description: 'Anillo de acero dorado con un dije de corazón.' },
  { id: 'gd-ring-04', title: 'Anillo Midi Florcita', price: 3400, category: 'acero-dorado', subcategory: 'anillos', images: ['/placeholder/Anillo_Midi_Florcita.jpg'], description: 'Anillo midi de acero dorado con diseño de flor.' },
  { id: 'gd-ring-05', title: 'Anillo Altea', price: 5400, category: 'acero-dorado', subcategory: 'anillos', images: ['/placeholder/Anillo_Altea.jpg','/placeholder/Anillo_Altea(1).jpg'], description: 'Anillo de acero dorado modelo Altea.', featured: true  },

  //Aros
  { id: 'gd-ear-01', title: 'Aros Prisma', price: 5700, category: 'acero-dorado', subcategory: 'aros', images:[ '/placeholder/Aros_Prisma.jpg'], description: 'Aro de acero dorado con un diseño minimalista en forma de mosquetón o eslabón rectangular. El centro está adornado con una única zirconia brillante de talla baguette, sujeta por cuatro grapas.' },
  { id: 'gd-ear-02', title: 'Aros Bold', price: 6200, category: 'acero-dorado', subcategory: 'aros', images:[ '/placeholder/Aros_Bold.jpg'], description: 'Aro tipo argolla (huggie) de acero dorado. Es un diseño clásico y atemporal, que se destaca por su forma ancha, de perfil redondeado y una superficie lisa con acabado pulido brillante.' ,outOfStock: true },
  { id: 'gd-ear-03', title: 'Aros Stardust', price: 8400, category: 'acero-dorado', subcategory: 'aros', images:[ '/placeholder/Aros_Stardust.jpg'], description: 'Aro tipo argolla pequeña (huggie) de acero dorado. Su diseño presenta una textura que simula la forma del bambú, con incrustaciones de zirconias brillantes.' },

  //Collares
  { id: 'gd-neck-01', title: 'Collar Degno', price: 6600, category: 'acero-dorado', subcategory: 'collares', images:[ '/placeholder/Collar_Degno.jpg'], description: 'Collar de acero dorado con cadena fina. El dije es una medalla de forma orgánica e irregular con una superficie texturizada que crea un efecto de metal fundido y pulido.' , featured: true },
  { id: 'gd-neck-02', title: 'Collar Dos Corazones', price: 11200, category: 'acero-dorado', subcategory: 'collares', images:[ '/placeholder/Collar_Dos_Corazones.jpg'], description: 'Collar de acero dorado con una cadena fina y dos dijes de corazón lisos, uno de ellos colgante' },
  { id: 'gd-neck-03', title: 'Collar Estrella de Mar con Perlas', price: 3200, category: 'acero-dorado', subcategory: 'collares', images: ['/placeholder/Collar_Estrella_de_Mar_con_Perlas.jpg','/placeholder/Collar_Estrella_de_Mar_con_Perlas2.jpg'], description: 'Collar de acero dorado con dije de estrella de mar y perlas.' },

  //Pulseras
  { id: 'gd-brace-02', title: 'Pulsera Atenea', price: 4200, category: 'acero-dorado', subcategory: 'pulseras', images:[ '/placeholder/Pulsera_Atenea2_D.jpg','/placeholder/Pulsera_Atenea_D.jpg'], description: 'Pulsera de diseño delicado y elegante en acero dorado, compuesta por una cadena fina y flexible tipo "viborita", decorada con pequeñas esferas lisas y pulidas que están distribuidas a lo largo de la cadena.',outOfStock: true} ,
  { id: 'gd-brace-03', title: 'Pulsera Cleopatra', price: 7500, category: 'acero-dorado', subcategory: 'pulseras', images:[ '/placeholder/Pulsera_Cleopatra.jpg','/placeholder/Pulsera_Cleopatra2.jpg'], description: 'Pulsera de acero dorado, formada por múltiples hebras de cadena plana (tipo espiga) que se entrelazan para crear un diseño de trenza ancha y texturizada. Cuenta con un cierre mosquetón y cadena de extensión para un ajuste perfecto.', featured: true },
  { id: 'gd-brace-04', title: 'Pulsera cadena Avena con bolitas', price: 2700, category: 'acero-dorado', subcategory: 'pulseras', images: ['/placeholder/Pulsera_cadena_Avena_con_bolitas_D.jpg'], description: 'Pulsera de acero dorado con cadena tipo avena y bolitas decorativas.' },
  { id: 'gd-brace-05', title: 'Pulsera Trebol liso', price: 5000, category: 'acero-dorado', subcategory: 'pulseras', images: ['/placeholder/Pulsera_Trebol_liso.jpg'], description: 'Pulsera de acero dorado con dijes de trébol lisos.' },

  //Brazaletes
  { id: '01', title: 'Brazalete Chunky', price: 12500, category: 'acero-dorado', subcategory: 'brazaletes', images:[ '/placeholder/Brazalete_Chunky_Chunky.jpg','/placeholder/Brazalete_Chunky_Chunky2.jpg'], description: 'Brazalete rígido de acero dorado con acabado pulido tipo espejo. Es un diseño abierto y escultural, con dos extremos macizos que simulan grandes gotas de metal líquido. Posee una bisagra lateral para facilitar su apertura y cierre.' , featured: true },

  // ACERO BLANCO//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Anillos
  { id: 'sw-ring-01', title: 'Anillo Eclipse', price: 7500, category: 'acero-blanco', subcategory: 'anillos', images:[ '/placeholder/Anillo_Eclipse.jpg'], description: 'Anillo de acero blanco con un diseño abierto y regulable. Su banda es lisa y pulida, y aumenta de grosor gradualmente desde la parte posterior hacia los dos extremos redondeados y macizos.' ,outOfStock: true} ,
  { id: 'sw-ring-03', title: 'Anillo Unión', price: 7500, category: 'acero-blanco', subcategory: 'anillos', images:[ '/placeholder/Anillo_Union.jpg','/placeholder/Anillo_Union2.jpg'], description: 'Anillo de acero blanco, de diseño abierto y regulable. La parte frontal presenta una forma fluida que simula un nudo simple o un eslabón de cadena alargado, con un acabado liso y pulido.', featured: true },
  { id: 'sw-ring-04', title: 'Anillo doble mariposa', price: 4000, category: 'acero-blanco', subcategory: 'anillos', images: ['/placeholder/Anillo_Doble_Mariposa.jpg'], description: 'Anillo de acero blanco con diseño de doble mariposa.' },
  { id: 'sw-ring-05', title: 'Anillo Cristal Lila', price: 4000, category: 'acero-blanco', subcategory: 'anillos', images: ['/placeholder/Anillo_Cristal_Lila.jpg','/placeholder/Anillo_Cristal_Lila2.jpg'], description: 'Anillo de acero blanco adornado con un cristal lila.' },
  { id: 'sw-ring-06', title: 'Anillo Mariposa Rosa', price: 4200, category: 'acero-blanco', subcategory: 'anillos', images: ['/placeholder/Anillo_Mariposa_Rosa.jpg'], description: 'Anillo de acero blanco con una mariposa de color rosa.' },
  { id: 'sw-ring-07', title: 'Anillo Mariposita', price: 4200, category: 'acero-blanco', subcategory: 'anillos', images: ['/placeholder/Anillo_Mariposa_Cristal.jpg'], description: 'Anillo delicado de acero blanco con una pequeña mariposa.', outOfStock: true },

  //Aros
  { id: 'sw-ear-01', title: 'Aros Gotas', price: 2600, category: 'acero-blanco', subcategory: 'aros', images:[ '/placeholder/Aros_Gotas.jpg'], description: 'Aro de acero blanco con un diseño audaz y escultural. Su forma es orgánica, maciza y fluida, con un acabado pulido tipo espejo que simula una gran gota de metal líquido.' },
  { id: 'sw-ear-02', title: 'Aros Wave', price: 6800, category: 'acero-blanco', subcategory: 'aros', images:[ '/placeholder/Aros_Wave.jpg'], description: 'Aro tipo argolla (huggie) de acero blanco. Se distingue por su forma orgánica e irregular, con una superficie ondulada y fluida que tiene un acabado pulido brillante, simulando el movimiento del metal líquido o el agua.' , featured: true },
  { id: 'sw-ear-03', title: 'Aros Cristal', price: 6500, category: 'acero-blanco', subcategory: 'aros', images:[ '/placeholder/Aros_Cristal.jpg'], description: 'Aro tipo argolla ancha (huggie) de acero blanco. El frente está decorado con una franja central de zirconias brillantes, mientras que los laterales de la argolla presentan un delicado patrón de destellos calados.' },

  //Collares
  { id: 'sw-neck-01', title: 'Collar Gota', price: 6100, category: 'acero-blanco', subcategory: 'collares', images:[ '/placeholder/Collar_Gota.jpg'], description: 'Collar de acero blanco con un dije macizo en forma de gota lisa y pulida, en una cadena fina tipo viborita.' },
  { id: 'sw-neck-02', title: 'Collar Corazón', price: 4600, category: 'acero-blanco', subcategory: 'collares', images:[ '/placeholder/Choker_Corazon.jpg','/placeholder/Choker_Corazon2.jpg'], description: 'Dije metálico de color plateado, con forma de corazón hueco y asimétrico. Cuelga de un cordón largo de gamuza sintética negra que se anuda al cuello.' },
  { id: 'sw-neck-03', title: 'Collar Cruz', price: 3800, category: 'acero-blanco', subcategory: 'collares', images:[ '/placeholder/Collar_Cruz.jpg'], description: 'Collar de acero blanco con un dije de cruz calada (hueca), con bordes anchos y pulidos.' },

  //Pulseras
  { id: 'sw-brace-01', title: 'Pulsera Atenea', price: 4600, category: 'acero-blanco', subcategory: 'pulseras', images:[ '/placeholder/Pulsera_Atenea_P.jpg','/placeholder/Pulsera_Atenea2_P.jpg'], description: 'Pulsera de diseño delicado y elegante en acero blanco, compuesta por una cadena fina y flexible tipo "viborita", decorada con pequeñas esferas lisas y pulidas que están distribuidas a lo largo de la cadena.',outOfStock: true} ,
  { id: 'sw-brace-03', title: 'Pulsera Charms', price: 9500, category: 'acero-blanco', subcategory: 'pulseras', images:[ '/placeholder/Pulsera_Charms.jpg','/placeholder/Pulsera_Charms2.jpg',], description: 'Pulsera de acero blanco estilo Pandora. Incluye varios dijes colgantes: una rosa, un moño y un corazón esmaltado en rosa con la inscripción en inglés "HUG ME". La pulsera cuenta con cierre mosquetón y cadena de extensión.',outOfStock: true} ,
  { id: 'sw-brace-04', title: 'Pulsera Paperclip', price: 8400, category: 'acero-blanco', subcategory: 'pulseras', images:[ '/placeholder/Pulsera_Paperclip.jpg','/placeholder/Pulsera_Paperclip2.jpg'], description: 'Pulsera de acero blanco formada por eslabones grandes rectangulares estilo paperclip. Su diseño se distingue por el detalle de pequeñas esferas de acero en la unión de cada eslabón.', featured: true },
  { id: 'sw-brace-05', title: 'Pulsera cadena Avena con bolitas', price: 2700, category: 'acero-blanco', subcategory: 'pulseras', images: ['/placeholder/Pulsera_cadena_Avena_con_bolitas_P.jpg'], description: 'Pulsera de acero blanco con cadena tipo avena y bolitas decorativas.' },

  //Brazaletes
  // (No hay brazaletes de acero blanco en la lista)

  //Tobilleras
  { id: 'sw-ank-01', title: 'Tobillera vibes verano', price: 3000, category: 'acero-blanco', subcategory: 'tobilleras', images: ['/placeholder/Tobillera_vibes_verano.jpg'], description: 'Tobillera de acero blanco con dijes veraniegos, ideal para complementar tu look.' },
]