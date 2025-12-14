/* TUFARMA - sitio ordenado por secciones (estilo corporativo)
   Configura datos rápidos aquí: WhatsApp, textos, etc.
*/
const CONFIG = {
  whatsappNumberE164: "+525500000000", // <- CAMBIA AQUÍ tu número real (con +52)
  whatsappDefaultMessage: "Hola, me gustaría solicitar información sobre los servicios de TUFARMA.",
  locationText: "CDMX / Edo. Méx",
  scheduleText: "Lun–Sáb 9:00–18:00",
  emailText: "contacto@tufarma.com"
};

const CLINIC_SERVICES = [
  {
    "id": "toxina",
    "title": "Aplicación de toxina botulínica",
    "items": [
      "Corrección de líneas de expresión (frente, entrecejo, patas de gallo).",
      "Tratamientos de sonrisa gingival, bruxismo y afinamiento del rostro.",
      "Microtox en piel para poros finos y efecto “glass skin”."
    ],
    "icon": "assets/img/icon-toxina.png",
    "thumb": "assets/img/services/toxina.jpg"
  },
  {
    "id": "peelings",
    "title": "Quimioexfoliaciones (peelings químicos)",
    "items": [
      "Tratamiento de manchas y fotoenvejecimiento.",
      "Protocolos para acné activo y cicatrices residuales.",
      "Esquemas combinados según tipo de piel y necesidad estética."
    ],
    "icon": "assets/img/icon-peelings.png",
    "thumb": "assets/img/services/peelings.jpg"
  },
  {
    "id": "dermapen",
    "title": "Tratamientos con Dermapen",
    "items": [
      "Inducción de colágeno para rejuvenecimiento facial global.",
      "Manejo de cicatrices de acné.",
      "Rejuvenecimiento periocular dirigido.",
      "Combinación con cócteles vitamínicos y ácido hialurónico no reticulado."
    ],
    "icon": "assets/img/icon-dermapen.png",
    "thumb": "assets/img/services/dermapen.jpg"
  },
  {
    "id": "mesoterapia",
    "title": "Mesoterapia facial y corporal",
    "items": [
      "Reafirmación y mejora de la luminosidad cutánea.",
      "Lipólisis localizada en brazos, abdomen, muslos u otras zonas de grasa.",
      "Hidratación profunda mediante vitaminas y aminoácidos."
    ],
    "icon": "assets/img/icon-mesoterapia.png",
    "thumb": "assets/img/services/mesoterapia.jpg"
  },
  {
    "id": "escleroterapia",
    "title": "Escleroterapia para várices",
    "items": [
      "Eliminación de telangiectasias y venas pequeñas superficiales.",
      "Mejora estética progresiva del aspecto de las piernas.",
      "Sesiones personalizadas de acuerdo al patrón vascular."
    ],
    "icon": "assets/img/icon-escleroterapia.png",
    "thumb": "assets/img/services/escleroterapia.jpg"
  },
  {
    "id": "hiperpigmentacion",
    "title": "Tratamiento para hiperpigmentación íntima",
    "items": [
      "Despigmentación progresiva con activos seguros para la zona.",
      "Protocolos combinados (peeling, dermapen y mesoterapia).",
      "Resultados graduales y personalizados según el fototipo."
    ],
    "icon": "assets/img/icon-hiperpigmentacion.png",
    "thumb": "assets/img/services/hiperpigmentacion.jpg"
  }
];

const DISTRIB_CATEGORIES = [
  {
    title: "Dermocosmética",
    desc: "Líneas de cuidado de piel, hidratación, antioxidantes y rutinas.",
    status: "Próximamente"
  },
  {
    title: "Belleza íntima",
    desc: "Productos para higiene íntima, cuidado y protocolos. Incluye Íntimo Renovacell.",
    status: "Activo"
  },
  {
    title: "Accesorios & cuidado",
    desc: "Complementos, kits y productos de apoyo para tratamientos.",
    status: "Editable"
  },
  {
    title: "Farmacia",
    desc: "Surtido de medicamentos y atención. Completa con tus categorías reales.",
    status: "Editable"
  }
];

const PROCESOS = [
  {
    title: "Escleroterapia para várices",
    desc: "Video breve de procedimiento en pierna. Ideal para la sección de procesos.",
    src: "assets/videos/proceso_1.mp4",
    cta: "Pedir información"
  },
  {
    title: "Evaluación / valoración facial",
    desc: "Clip tipo valoración/testimonio para mostrar seguimiento o evaluación.",
    src: "assets/videos/proceso_2.mp4",
    cta: "Agendar valoración"
  }
];


const MEDICAMENTOS = [
  {
    "name": "ACIDO ACETIL",
    "presentation": "tabs 100 mg",
    "img": "assets/img/medicamentos/acido-acetil-tabs-100-mg.webp"
  },
  {
    "name": "ACIDO FOLICO",
    "presentation": "tabs 400mcg",
    "img": "assets/img/medicamentos/acido-folico-tabs-400mcg.webp"
  },
  {
    "name": "ACICLOVIR",
    "presentation": "suspensión 200mg/5ml",
    "img": "assets/img/medicamentos/aciclovir-suspension-200mg-5ml.webp"
  },
  {
    "name": "ACICLOVIR",
    "presentation": "CREMA 5%",
    "img": "assets/img/medicamentos/aciclovir-crema-5.webp"
  },
  {
    "name": "ACICLOVIR",
    "presentation": "COMPRIMIDOS 400MG",
    "img": "assets/img/medicamentos/aciclovir-comprimidos-400mg.webp"
  },
  {
    "name": "ALBENDAZOL-QUINFAMIDA",
    "presentation": "SUSPENSIÓN PED 100MG-200MG/10ML",
    "img": "assets/img/medicamentos/albendazol-quinfamida-suspension-ped-100mg-200mg-10ml.webp"
  },
  {
    "name": "ALBENDAZOL-QUINFAMIDA",
    "presentation": "TABS 200MG-150MG",
    "img": "assets/img/medicamentos/albendazol-quinfamida-tabs-200mg-150mg.webp"
  },
  {
    "name": "ALBENDAZOL",
    "presentation": "SUSPENSION 400MG/ 20 ML",
    "img": "assets/img/medicamentos/albendazol-suspension-400mg-20-ml.webp"
  },
  {
    "name": "ALOPURINOL",
    "presentation": "TABS 300MG",
    "img": "assets/img/medicamentos/alopurinol-tabs-300mg.webp"
  },
  {
    "name": "ALUMINIO-MAGNESIO- SIMETICONA",
    "presentation": "SUSPENSIÓN 3.7G/4G/0.5G/100ML",
    "img": "assets/img/medicamentos/aluminio-magnesio-simeticona-suspension-3-7g-4g-0-5g-100ml.webp"
  },
  {
    "name": "ALGESTONA- ESTRADIOL",
    "presentation": "SOL INYECT 150MG/10MG 1 AMP",
    "img": "assets/img/medicamentos/algestona-estradiol-sol-inyect-150mg-10mg-1-amp.webp"
  },
  {
    "name": "AMLODIPINO",
    "presentation": "TABS 5MG",
    "img": "assets/img/medicamentos/amlodipino-tabs-5mg.webp"
  },
  {
    "name": "ATORVASTATINA",
    "presentation": "TABS 20 MG",
    "img": "assets/img/medicamentos/atorvastatina-tabs-20-mg.webp"
  },
  {
    "name": "AMBROXOL- DEXTROMETORFANO",
    "presentation": "SOLUCION 400MG-400MG/100ML",
    "img": "assets/img/medicamentos/ambroxol-dextrometorfano-solucion-400mg-400mg-100ml.webp"
  },
  {
    "name": "AMBROXOL",
    "presentation": "SOLUCION 0.300G",
    "img": "assets/img/medicamentos/ambroxol-solucion-0-300g.webp"
  },
  {
    "name": "AMBROXOL",
    "presentation": "TABS 30MG",
    "img": "assets/img/medicamentos/ambroxol-tabs-30mg.webp"
  },
  {
    "name": "AMBROXOL- DEXTROMETORFANO",
    "presentation": "SOLUCION 150MG/113MG/100ML",
    "img": "assets/img/medicamentos/ambroxol-dextrometorfano-solucion-150mg-113mg-100ml.webp"
  },
  {
    "name": "AMBROXOL- LORATADINA",
    "presentation": "TABS 30 MG/ 5MG",
    "img": "assets/img/medicamentos/ambroxol-loratadina-tabs-30-mg-5mg.webp"
  },
  {
    "name": "AMBROXOL - SALBUTAMOL",
    "presentation": "150MG-40 MG/100 ML",
    "img": "assets/img/medicamentos/ambroxol-salbutamol-150mg-40-mg-100-ml.webp"
  },
  {
    "name": "AMANTIDINA-CLORFE- PARACETAMOL",
    "presentation": "CAPSULAS 50MG/3MG/300MG",
    "img": "assets/img/medicamentos/amantidina-clorfe-paracetamol-capsulas-50mg-3mg-300mg.webp"
  },
  {
    "name": "AMANTIDINA-CLORFE- PARACETAMOL",
    "presentation": "JARABE 0.5G/0.02G/ 3.00G",
    "img": "assets/img/medicamentos/amantidina-clorfe-paracetamol-jarabe-0-5g-0-02g-3-00g.webp"
  },
  {
    "name": "AMOXICILINA",
    "presentation": "CAPS 500MG",
    "img": "assets/img/medicamentos/amoxicilina-caps-500mg.webp"
  },
  {
    "name": "AMOXICILINA",
    "presentation": "SUSPENSION 500MG/5ML",
    "img": "assets/img/medicamentos/amoxicilina-suspension-500mg-5ml.webp"
  },
  {
    "name": "AMOXICILINA- ACIDO CLAVULANICO",
    "presentation": "SUSPENSION 250MG-62.5MG/5ML",
    "img": "assets/img/medicamentos/amoxicilina-acido-clavulanico-suspension-250mg-62-5mg-5ml.webp"
  },
  {
    "name": "AMOXICILINA-ACIDO CLAVULANICO",
    "presentation": "SUSP JUNIOR 12 HR 400MG-57MG/5ML",
    "img": "assets/img/medicamentos/amoxicilina-acido-clavulanico-susp-junior-12-hr-400mg-57mg-5ml.webp"
  },
  {
    "name": "AMOXICILINA-ACIDO CLAVULANICO",
    "presentation": "TABS 500MG/125MG",
    "img": "assets/img/medicamentos/amoxicilina-acido-clavulanico-tabs-500mg-125mg.webp"
  },
  {
    "name": "AMOXICILINA-ACIDO CLAVULANICO",
    "presentation": "TABS 875MG/125MG",
    "img": "assets/img/medicamentos/amoxicilina-acido-clavulanico-tabs-875mg-125mg.webp"
  },
  {
    "name": "AMPICILINA",
    "presentation": "SUSP 250MG/5ML",
    "img": "assets/img/medicamentos/ampicilina-susp-250mg-5ml.webp"
  },
  {
    "name": "AMPICILINA",
    "presentation": "CAPS 500MG",
    "img": "assets/img/medicamentos/ampicilina-caps-500mg.webp"
  },
  {
    "name": "AMPICILINA AMPIGRIN",
    "presentation": "SOLUCION INEYECTABLE 250MG",
    "img": "assets/img/medicamentos/ampicilina-ampigrin-solucion-ineyectable-250mg.webp"
  },
  {
    "name": "AZITROMICINA",
    "presentation": "TABS 500MG",
    "img": "assets/img/medicamentos/azitromicina-tabs-500mg.webp"
  },
  {
    "name": "BETAMETASONA",
    "presentation": "SOL INYECT 8MG/2ML",
    "img": "assets/img/medicamentos/betametasona-sol-inyect-8mg-2ml.webp"
  },
  {
    "name": "BENZOCAINA",
    "presentation": "GEL 0.1G (ENCIAS)",
    "img": "assets/img/medicamentos/benzocaina-gel-0-1g-encias.webp"
  },
  {
    "name": "BETAMETASONA",
    "presentation": "CREMA 0.10 G",
    "img": "assets/img/medicamentos/betametasona-crema-0-10-g.webp"
  },
  {
    "name": "BARMICIL COMPUESTO",
    "presentation": "",
    "img": "assets/img/medicamentos/barmicil-compuesto.webp"
  },
  {
    "name": "BEZAFIBRATO",
    "presentation": "TAB 200MG",
    "img": "assets/img/medicamentos/bezafibrato-tab-200mg.webp"
  },
  {
    "name": "BENZONATATO",
    "presentation": "CAP 100MG",
    "img": "assets/img/medicamentos/benzonatato-cap-100mg.webp"
  },
  {
    "name": "BROMURO DE PINAVERIO",
    "presentation": "TAB 100MG",
    "img": "assets/img/medicamentos/bromuro-de-pinaverio-tab-100mg.webp"
  },
  {
    "name": "BROMHEXINA",
    "presentation": "SOL INFANTIL 80MG/100ML",
    "img": "assets/img/medicamentos/bromhexina-sol-infantil-80mg-100ml.webp"
  },
  {
    "name": "BROMHEXINA",
    "presentation": "SOL ADULTO 160MG/100ML",
    "img": "assets/img/medicamentos/bromhexina-sol-adulto-160mg-100ml.webp"
  },
  {
    "name": "BUTILHIOSCINA",
    "presentation": "TAB 10MG",
    "img": "assets/img/medicamentos/butilhioscina-tab-10mg.webp"
  },
  {
    "name": "BUTILHIOSCINA/PARACETAMOL",
    "presentation": "SOLUCIÓN GOTAS",
    "img": "assets/img/medicamentos/butilhioscina-paracetamol-solucion-gotas.webp"
  },
  {
    "name": "BUTILHIOSCINA/PARACETAMOL",
    "presentation": "TABLETAS",
    "img": "assets/img/medicamentos/butilhioscina-paracetamol-tabletas.webp"
  },
  {
    "name": "BUTILHIOSCINA/METAMIZOL SODICO",
    "presentation": "GRAGEAS 10MG/250MG",
    "img": "assets/img/medicamentos/butilhioscina-metamizol-sodico-grageas-10mg-250mg.webp"
  },
  {
    "name": "HIOSCINA",
    "presentation": "SOL INYECTABLE 20MG/1ML",
    "img": "assets/img/medicamentos/hioscina-sol-inyectable-20mg-1ml.webp"
  },
  {
    "name": "BENIPENICILINA PROCAINA 400.000 U",
    "presentation": "SOL INYECTABLE",
    "img": "assets/img/medicamentos/benipenicilina-procaina-400-000-u-sol-inyectable.webp"
  },
  {
    "name": "CALCIO",
    "presentation": "COMPRIMIDOS EFERV. 500 MG",
    "img": "assets/img/medicamentos/calcio-comprimidos-eferv-500-mg.webp"
  },
  {
    "name": "CAPTOPRL",
    "presentation": "25MG",
    "img": "assets/img/medicamentos/captoprl-25mg.webp"
  },
  {
    "name": "CINARIZINA",
    "presentation": "TABLETAS 75MG",
    "img": "assets/img/medicamentos/cinarizina-tabletas-75mg.webp"
  },
  {
    "name": "CARBAMACEPINA",
    "presentation": "TABLETAS 200MG",
    "img": "assets/img/medicamentos/carbamacepina-tabletas-200mg.webp"
  },
  {
    "name": "CISAPRIDA",
    "presentation": "TABLETAS 10 MG",
    "img": "assets/img/medicamentos/cisaprida-tabletas-10-mg.webp"
  },
  {
    "name": "CETIRIZINA",
    "presentation": "TABLETAS 10MG",
    "img": "assets/img/medicamentos/cetirizina-tabletas-10mg.webp"
  },
  {
    "name": "CEFALEXINA",
    "presentation": "TABLETAS 500 MG",
    "img": "assets/img/medicamentos/cefalexina-tabletas-500-mg.webp"
  },
  {
    "name": "CIPROFLOXACINO",
    "presentation": "TABLETAS 500 MG",
    "img": "assets/img/medicamentos/ciprofloxacino-tabletas-500-mg.webp"
  },
  {
    "name": "COMBEDI DL DICLOFENACO Y COMPLEJO B",
    "presentation": "",
    "img": "assets/img/medicamentos/combedi-dl-diclofenaco-y-complejo-b.webp"
  },
  {
    "name": "COMBEDI DX DEXA Y COMPLEJO B",
    "presentation": "",
    "img": "assets/img/medicamentos/combedi-dx-dexa-y-complejo-b.webp"
  },
  {
    "name": "CEFTRIAXONA",
    "presentation": "SOL INYECTABLE 1GR",
    "img": "assets/img/medicamentos/ceftriaxona-sol-inyectable-1gr.webp"
  },
  {
    "name": "MASFEROL (FENILIEFRINA,CLORFE ETC.)",
    "presentation": "TABLETAS",
    "img": "assets/img/medicamentos/masferol-feniliefrina-clorfe-etc-tabletas.webp"
  },
  {
    "name": "CLARITROMICINA",
    "presentation": "TABLETAS 500 MG",
    "img": "assets/img/medicamentos/claritromicina-tabletas-500-mg.webp"
  },
  {
    "name": "CLINDAMICINA",
    "presentation": "TABLETAS 300 MG",
    "img": "assets/img/medicamentos/clindamicina-tabletas-300-mg.webp"
  },
  {
    "name": "CLORURO DE CETILPIRIDINO",
    "presentation": "TABS 1.45. 1 cada 2 horas, sin exceder 8 al día",
    "img": "assets/img/medicamentos/cloruro-de-cetilpiridino-tabs-1-45-1-cada-2-horas-sin-exceder-8-al-dia.webp"
  },
  {
    "name": "CLORURO DE CETILPIRIDINO/BENZOCAINA",
    "presentation": "TABS 2.5/10MG 1 cada 2 hrs sin exceder 8 al día",
    "img": "assets/img/medicamentos/cloruro-de-cetilpiridino-benzocaina-tabs-2-5-10mg-1-cada-2-hrs-sin-exceder-8-al-dia.webp"
  },
  {
    "name": "CLOTRIMAZOL",
    "presentation": "3 OVULOS / TUBO  10 G/ CREMA 200MG",
    "img": "assets/img/medicamentos/clotrimazol-3-ovulos-tubo-10-g-crema-200mg.webp"
  },
  {
    "name": "CLINDAMICINA/KETOCONAZOL",
    "presentation": "CREMA 2-8 G / 100 MG",
    "img": "assets/img/medicamentos/clindamicina-ketoconazol-crema-2-8-g-100-mg.webp"
  },
  {
    "name": "CLONIXINATO DE LISINA",
    "presentation": "TABLETAS 250 MG",
    "img": "assets/img/medicamentos/clonixinato-de-lisina-tabletas-250-mg.webp"
  },
  {
    "name": "DEXTROMETOFANO GUAFENESINA PARACETAMOL",
    "presentation": "Jarabae pediatrico 0.50g 5.0g 0.25/100 ml",
    "img": "assets/img/medicamentos/dextrometofano-guafenesina-paracetamol-jarabae-pediatrico-0-50g-5-0g-0-25-100-ml.webp"
  },
  {
    "name": "DEXTROMETOFANO GUAFENESINA PARACETAMOL",
    "presentation": "Jarabe pediatrico 0.150g-1.2g-3g/100ml",
    "img": "assets/img/medicamentos/dextrometofano-guafenesina-paracetamol-jarabe-pediatrico-0-150g-1-2g-3g-100ml.webp"
  },
  {
    "name": "DEXTROMETOFANO GUAFENESINA FENILEFRINA",
    "presentation": "Jarabe adulto .300g-2.4g-0..50g/100ml",
    "img": "assets/img/medicamentos/dextrometofano-guafenesina-fenilefrina-jarabe-adulto-300g-2-4g-0-50g-100ml.webp"
  },
  {
    "name": "DEXTROMETOFANO GUAFENESINA CLORFENAMINA",
    "presentation": "JARABE ADULTO 0.150-2.0G-0.020G/100ML",
    "img": "assets/img/medicamentos/dextrometofano-guafenesina-clorfenamina-jarabe-adulto-0-150-2-0g-0-020g-100ml.webp"
  },
  {
    "name": "DEXNE OFTALMICO(DEXA,NEOMICINA)",
    "presentation": "SOLUCION",
    "img": "assets/img/medicamentos/dexne-oftalmico-dexa-neomicina-solucion.webp"
  },
  {
    "name": "DEXNE OTICO (DEXA, NEO, LIDOCAINA)",
    "presentation": "SOLUCION",
    "img": "assets/img/medicamentos/dexne-otico-dexa-neo-lidocaina-solucion.webp"
  },
  {
    "name": "DEXNE NASAL (DEXA, NEO, FENILEFRINA)",
    "presentation": "SOLUCION",
    "img": "assets/img/medicamentos/dexne-nasal-dexa-neo-fenilefrina-solucion.webp"
  },
  {
    "name": "DEXAMETASONA-CLORFENAMINA",
    "presentation": "TABLETAS  0.25/2.0MG",
    "img": "assets/img/medicamentos/dexametasona-clorfenamina-tabletas-0-25-2-0mg.webp"
  },
  {
    "name": "DEXAMETASONA",
    "presentation": "TABLETAS 1MG",
    "img": "assets/img/medicamentos/dexametasona-tabletas-1mg.webp"
  },
  {
    "name": "DEXAMETASONA",
    "presentation": "SOLUCION INYECTABLE 8MG/2ML",
    "img": "assets/img/medicamentos/dexametasona-solucion-inyectable-8mg-2ml.webp"
  },
  {
    "name": "DICLOFENACO ACIDO LIBRE",
    "presentation": "SUSPENSIÓN 0.18G/100ML",
    "img": "assets/img/medicamentos/diclofenaco-acido-libre-suspension-0-18g-100ml.webp"
  },
  {
    "name": "Diclofenaco",
    "presentation": "TABLETAS 100MG",
    "img": "assets/img/medicamentos/diclofenaco-tabletas-100mg.webp"
  },
  {
    "name": "DICLOFENACO GEL",
    "presentation": "",
    "img": "assets/img/medicamentos/diclofenaco-gel.webp"
  },
  {
    "name": "DICLOFENCACO",
    "presentation": "SOLUCION INYECTABLE 75MG/3ML",
    "img": "assets/img/medicamentos/diclofencaco-solucion-inyectable-75mg-3ml.webp"
  },
  {
    "name": "DICLOFENACO-COMPLEJO B",
    "presentation": "TABLETAS",
    "img": "assets/img/medicamentos/diclofenaco-complejo-b-tabletas.webp"
  },
  {
    "name": "DIFENIDOL",
    "presentation": "TABLETAS 25MG",
    "img": "assets/img/medicamentos/difenidol-tabletas-25mg.webp"
  },
  {
    "name": "DIOSMINA-HISPERIDINA",
    "presentation": "TABLETAS 450MG-50MG",
    "img": "assets/img/medicamentos/diosmina-hisperidina-tabletas-450mg-50mg.webp"
  },
  {
    "name": "DIMENHIDRINATO",
    "presentation": "SOLUCIÓN 25MG/ML GOTAS INFANTIL",
    "img": "assets/img/medicamentos/dimenhidrinato-solucion-25mg-ml-gotas-infantil.webp"
  },
  {
    "name": "DIMENHIDRINATO",
    "presentation": "CAPS 50MG",
    "img": "assets/img/medicamentos/dimenhidrinato-caps-50mg.webp"
  },
  {
    "name": "DICLOXACILINA",
    "presentation": "CAPS 500MG",
    "img": "assets/img/medicamentos/dicloxacilina-caps-500mg.webp"
  },
  {
    "name": "DICLOXACILINA",
    "presentation": "SUSPENSION 250MG/5ML",
    "img": "assets/img/medicamentos/dicloxacilina-suspension-250mg-5ml.webp"
  },
  {
    "name": "DIMETICONA",
    "presentation": "SUSP PEDIATRICA 10G/100ML",
    "img": "assets/img/medicamentos/dimeticona-susp-pediatrica-10g-100ml.webp"
  },
  {
    "name": "ENOXAPARINA SÓDICA",
    "presentation": "40MG/0.4ML",
    "img": "assets/img/medicamentos/enoxaparina-sodica-40mg-0-4ml.webp"
  },
  {
    "name": "ERITROMICINA",
    "presentation": "SUSP 5G/100ML",
    "img": "assets/img/medicamentos/eritromicina-susp-5g-100ml.webp"
  },
  {
    "name": "ERITROMICINA",
    "presentation": "TABS 500MG",
    "img": "assets/img/medicamentos/eritromicina-tabs-500mg.webp"
  },
  {
    "name": "ENALAPRIL",
    "presentation": "TABS 10MG",
    "img": "assets/img/medicamentos/enalapril-tabs-10mg.webp"
  },
  {
    "name": "HIPROMELOSA",
    "presentation": "SOLUCION 0.5%",
    "img": "assets/img/medicamentos/hipromelosa-solucion-0-5.webp"
  },
  {
    "name": "HIDROXIDO DE ALUMINIO, MAGENSIO, DIMETICONA",
    "presentation": "SUSPENSIÓN",
    "img": "assets/img/medicamentos/hidroxido-de-aluminio-magensio-dimeticona-suspension.webp"
  },
  {
    "name": "IBUPROFENO",
    "presentation": "SUSPENSIÓN 40MG/ML",
    "img": "assets/img/medicamentos/ibuprofeno-suspension-40mg-ml.webp"
  },
  {
    "name": "IBUPROFENO",
    "presentation": "SUSPENSION 2G/100ML",
    "img": "assets/img/medicamentos/ibuprofeno-suspension-2g-100ml.webp"
  },
  {
    "name": "IBUPROFENO",
    "presentation": "TABS 400MG",
    "img": "assets/img/medicamentos/ibuprofeno-tabs-400mg.webp"
  },
  {
    "name": "IBUPROFENO",
    "presentation": "TABS 800MG",
    "img": "assets/img/medicamentos/ibuprofeno-tabs-800mg.webp"
  },
  {
    "name": "IVERMECTINA",
    "presentation": "TABLETAS 6MG",
    "img": "assets/img/medicamentos/ivermectina-tabletas-6mg.webp"
  },
  {
    "name": "ITAMOL",
    "presentation": "",
    "img": "assets/img/medicamentos/itamol.webp"
  },
  {
    "name": "INDOMETACINA/BETAMETA/METOCARBAMOL",
    "presentation": "CAPSULAS 25MG-0.75MG-215MG",
    "img": "assets/img/medicamentos/indometacina-betameta-metocarbamol-capsulas-25mg-0-75mg-215mg.webp"
  },
  {
    "name": "INDOMETACINA/BETAMETASONA",
    "presentation": "CAPSULAS 25MG/0.5MG",
    "img": "assets/img/medicamentos/indometacina-betametasona-capsulas-25mg-0-5mg.webp"
  },
  {
    "name": "KETOCONAZOL",
    "presentation": "TABS 200MG",
    "img": "assets/img/medicamentos/ketoconazol-tabs-200mg.webp"
  },
  {
    "name": "KETOCONAZOL",
    "presentation": "CREMA 2%",
    "img": "assets/img/medicamentos/ketoconazol-crema-2.webp"
  },
  {
    "name": "KETOROLACO",
    "presentation": "TABS 10MG",
    "img": "assets/img/medicamentos/ketorolaco-tabs-10mg.webp"
  },
  {
    "name": "KETOROLACO",
    "presentation": "SOL INYECTABLE 30MG/1ML",
    "img": "assets/img/medicamentos/ketorolaco-sol-inyectable-30mg-1ml.webp"
  },
  {
    "name": "KETOROLACO- TRAMADOL",
    "presentation": "SUBLINGUAL 10MG-25MG",
    "img": "assets/img/medicamentos/ketorolaco-tramadol-sublingual-10mg-25mg.webp"
  },
  {
    "name": "KETOROLACO- TRAMADOL",
    "presentation": "SOLUCIÓN INYECTABLE 10MG-25MG",
    "img": "assets/img/medicamentos/ketorolaco-tramadol-solucion-inyectable-10mg-25mg.webp"
  },
  {
    "name": "LACTULOSA",
    "presentation": "JARABE 66.7G/100ML.",
    "img": "assets/img/medicamentos/lactulosa-jarabe-66-7g-100ml.webp"
  },
  {
    "name": "LADEXGEL (para, lora, dextrometorfano)",
    "presentation": "CAPS 30MG, 2MG, 10MG",
    "img": "assets/img/medicamentos/ladexgel-para-lora-dextrometorfano-caps-30mg-2mg-10mg.webp"
  },
  {
    "name": "LECHE DE MAGNESIA/HIDROXIDO DE MAGNESIO",
    "presentation": "SUSPENSION 8.5G.",
    "img": "assets/img/medicamentos/leche-de-magnesia-hidroxido-de-magnesio-suspension-8-5g.webp"
  },
  {
    "name": "LANSOPRAZOL",
    "presentation": "CAPSULAS 30MG",
    "img": "assets/img/medicamentos/lansoprazol-capsulas-30mg.webp"
  },
  {
    "name": "LEVONORGESTREL",
    "presentation": "1.5MG 1 TABLETA",
    "img": "assets/img/medicamentos/levonorgestrel-1-5mg-1-tableta.webp"
  },
  {
    "name": "LEVOFLOXACINO",
    "presentation": "",
    "img": "assets/img/medicamentos/levofloxacino.webp"
  },
  {
    "name": "LIDOCAINA-HIDROCORTI-OXIDO DE ZINC--SUBACETATO DE ALUMINO",
    "presentation": "UNGÜENTO 50MG-2.5MG-180MG-35MG",
    "img": "assets/img/medicamentos/lidocaina-hidrocorti-oxido-de-zinc-subacetato-de-alumino-unguento-50mg-2-5mg-180mg-35mg.webp"
  },
  {
    "name": "LOSARTAN",
    "presentation": "TAB 50MG",
    "img": "assets/img/medicamentos/losartan-tab-50mg.webp"
  },
  {
    "name": "LOPERAMIDA",
    "presentation": "TABS 2MG",
    "img": "assets/img/medicamentos/loperamida-tabs-2mg.webp"
  },
  {
    "name": "LORATADINA",
    "presentation": "JARABE 100MG/100ML",
    "img": "assets/img/medicamentos/loratadina-jarabe-100mg-100ml.webp"
  },
  {
    "name": "LORATADINA/BETAMETASONA",
    "presentation": "TABS 5.00MG/.25MG",
    "img": "assets/img/medicamentos/loratadina-betametasona-tabs-5-00mg-25mg.webp"
  },
  {
    "name": "MELATONINA",
    "presentation": "TABS 3 MG 1 TAB 20 MIN ANTES DE ACOSTARSE",
    "img": "assets/img/medicamentos/melatonina-tabs-3-mg-1-tab-20-min-antes-de-acostarse.webp"
  },
  {
    "name": "MAGALDRATO/DIMETICONA",
    "presentation": "GEL 8G-1G/100ML",
    "img": "assets/img/medicamentos/magaldrato-dimeticona-gel-8g-1g-100ml.webp"
  },
  {
    "name": "MELOXICAM",
    "presentation": "TABS 15 MG",
    "img": "assets/img/medicamentos/meloxicam-tabs-15-mg.webp"
  },
  {
    "name": "METFORMINA",
    "presentation": "TABS 850MG",
    "img": "assets/img/medicamentos/metformina-tabs-850mg.webp"
  },
  {
    "name": "METFORMINA- GLIBENCLAMIDA",
    "presentation": "TABS 500MG-5MG",
    "img": "assets/img/medicamentos/metformina-glibenclamida-tabs-500mg-5mg.webp"
  },
  {
    "name": "METAMIZOL SÓDICO",
    "presentation": "COMPRIMIDOS 500MG",
    "img": "assets/img/medicamentos/metamizol-sodico-comprimidos-500mg.webp"
  },
  {
    "name": "METOCLOPRAMIDA",
    "presentation": "SOL INYECTABLE 10MG/2ML",
    "img": "assets/img/medicamentos/metoclopramida-sol-inyectable-10mg-2ml.webp"
  },
  {
    "name": "METOCLOPRAMIDA",
    "presentation": "TABS 10MG",
    "img": "assets/img/medicamentos/metoclopramida-tabs-10mg.webp"
  },
  {
    "name": "METOCLOPRAMIDA",
    "presentation": "SOLUCION ORAL 400MG/100ML GOTERO",
    "img": "assets/img/medicamentos/metoclopramida-solucion-oral-400mg-100ml-gotero.webp"
  },
  {
    "name": "METRONIDAZOL",
    "presentation": "SUSPENSION 250/5ml",
    "img": "assets/img/medicamentos/metronidazol-suspension-250-5ml.webp"
  },
  {
    "name": "METRONIDAZOL-DIYODOHIDROXIQUINOLEINA",
    "presentation": "SUSPENSIÓN 2.5G/2.0G/100 ML",
    "img": "assets/img/medicamentos/metronidazol-diyodohidroxiquinoleina-suspension-2-5g-2-0g-100-ml.webp"
  },
  {
    "name": "METRONIDAZOL-DIYODOHIDROXIQUINOLEINA",
    "presentation": "TABS 400/200MG",
    "img": "assets/img/medicamentos/metronidazol-diyodohidroxiquinoleina-tabs-400-200mg.webp"
  },
  {
    "name": "MONTELUKAST",
    "presentation": "TABS 10MG",
    "img": "assets/img/medicamentos/montelukast-tabs-10mg.webp"
  },
  {
    "name": "MICONAZOL",
    "presentation": "CREMA 2%",
    "img": "assets/img/medicamentos/miconazol-crema-2.webp"
  },
  {
    "name": "METOPROLOL",
    "presentation": "TABS 100MG",
    "img": "assets/img/medicamentos/metoprolol-tabs-100mg.webp"
  },
  {
    "name": "NITROFURANTOINA",
    "presentation": "",
    "img": "assets/img/medicamentos/nitrofurantoina.webp"
  },
  {
    "name": "baRMICIL COMPUESTO",
    "presentation": "TABS 30MG",
    "img": "assets/img/medicamentos/barmicil-compuesto-tabs-30mg.webp"
  },
  {
    "name": "NAPROXENO- LIDOCAINA",
    "presentation": "GEL 10G/2G",
    "img": "assets/img/medicamentos/naproxeno-lidocaina-gel-10g-2g.webp"
  },
  {
    "name": "NAPROXENO",
    "presentation": "TABS 500MG",
    "img": "assets/img/medicamentos/naproxeno-tabs-500mg.webp"
  },
  {
    "name": "NAPROXENO",
    "presentation": "TABS 550MG",
    "img": "assets/img/medicamentos/naproxeno-tabs-550mg.webp"
  },
  {
    "name": "NEOMICINA-CAOLIN-PECTINA",
    "presentation": "TABS 129MG-280MG-30MG",
    "img": "assets/img/medicamentos/neomicina-caolin-pectina-tabs-129mg-280mg-30mg.webp"
  },
  {
    "name": "NEOMICINA-CAOLIN-PECTINA",
    "presentation": "SUSP 0.733G-10G-0.7G/100ML",
    "img": "assets/img/medicamentos/neomicina-caolin-pectina-susp-0-733g-10g-0-7g-100ml.webp"
  },
  {
    "name": "FENIRAMINA/NAFAZOLINA OFTALMICO",
    "presentation": "3MG/0.16MG/1ML SOLUCION",
    "img": "assets/img/medicamentos/feniramina-nafazolina-oftalmico-3mg-0-16mg-1ml-solucion.webp"
  },
  {
    "name": "OMEPRAZOL",
    "presentation": "SOL INYECT 40MG",
    "img": "assets/img/medicamentos/omeprazol-sol-inyect-40mg.webp"
  },
  {
    "name": "OXIMETAZOLINA",
    "presentation": "SOLUCION 0.05%",
    "img": "assets/img/medicamentos/oximetazolina-solucion-0-05.webp"
  },
  {
    "name": "ORLISTAT",
    "presentation": "TAB 120MG",
    "img": "assets/img/medicamentos/orlistat-tab-120mg.webp"
  },
  {
    "name": "PAROXETINA",
    "presentation": "TABS 20MG",
    "img": "assets/img/medicamentos/paroxetina-tabs-20mg.webp"
  },
  {
    "name": "PANTOPRAZOL",
    "presentation": "TABS 40MG",
    "img": "assets/img/medicamentos/pantoprazol-tabs-40mg.webp"
  },
  {
    "name": "PROPANOLOL",
    "presentation": "TABS 40MG",
    "img": "assets/img/medicamentos/propanolol-tabs-40mg.webp"
  },
  {
    "name": "PARACETAMOL",
    "presentation": "GOTAS 100MG/ML",
    "img": "assets/img/medicamentos/paracetamol-gotas-100mg-ml.webp"
  },
  {
    "name": "PARACETAMOL",
    "presentation": "JARABE 3.2G/100ML",
    "img": "assets/img/medicamentos/paracetamol-jarabe-3-2g-100ml.webp"
  },
  {
    "name": "PARACETAMOL",
    "presentation": "TABS 750MG",
    "img": "assets/img/medicamentos/paracetamol-tabs-750mg.webp"
  },
  {
    "name": "PARACETAMOL-NAPROXENO SÓDICO",
    "presentation": "TABS 300MG-275MG",
    "img": "assets/img/medicamentos/paracetamol-naproxeno-sodico-tabs-300mg-275mg.webp"
  },
  {
    "name": "PARACETAMOL-NAPROXENO SÓDICO",
    "presentation": "SUSPENSION 2.5G-2/100ML",
    "img": "assets/img/medicamentos/paracetamol-naproxeno-sodico-suspension-2-5g-2-100ml.webp"
  },
  {
    "name": "PRAVASTATINA",
    "presentation": "TABS 20MG",
    "img": "assets/img/medicamentos/pravastatina-tabs-20mg.webp"
  },
  {
    "name": "PREGABALINA",
    "presentation": "CAPS 75MG",
    "img": "assets/img/medicamentos/pregabalina-caps-75mg.webp"
  },
  {
    "name": "NIFUROXAZIDA",
    "presentation": "CAPS 400MG",
    "img": "assets/img/medicamentos/nifuroxazida-caps-400mg.webp"
  },
  {
    "name": "SALBUTAMOL",
    "presentation": "AEROSOL 100 MICROGRAMOS",
    "img": "assets/img/medicamentos/salbutamol-aerosol-100-microgramos.webp"
  },
  {
    "name": "SERTRALINA",
    "presentation": "TABS 50MG",
    "img": "assets/img/medicamentos/sertralina-tabs-50mg.webp"
  },
  {
    "name": "SENOSIDOS A Y B",
    "presentation": "12MG/50MG  CAPS",
    "img": "assets/img/medicamentos/senosidos-a-y-b-12mg-50mg-caps.webp"
  },
  {
    "name": "SILDENAFIL",
    "presentation": "CAPS 100MG",
    "img": "assets/img/medicamentos/sildenafil-caps-100mg.webp"
  },
  {
    "name": "TRIMETROPRIM-SULFAMETOXAZOL",
    "presentation": "40MG/200MG/ 5ML SUSPENSION",
    "img": "assets/img/medicamentos/trimetroprim-sulfametoxazol-40mg-200mg-5ml-suspension.webp"
  },
  {
    "name": "TRIMETROPRIM-SULFAMETOXAZOL",
    "presentation": "800MG/160MG TABLETAS",
    "img": "assets/img/medicamentos/trimetroprim-sulfametoxazol-800mg-160mg-tabletas.webp"
  },
  {
    "name": "TERBINAFINA",
    "presentation": "CREMA 1 GR/100G",
    "img": "assets/img/medicamentos/terbinafina-crema-1-gr-100g.webp"
  },
  {
    "name": "TELMISARTAN",
    "presentation": "TABS 40MG",
    "img": "assets/img/medicamentos/telmisartan-tabs-40mg.webp"
  },
  {
    "name": "TRIMEBUTINA",
    "presentation": "TABS 200MG",
    "img": "assets/img/medicamentos/trimebutina-tabs-200mg.webp"
  },
  {
    "name": "SULFATIAZOL",
    "presentation": "POLVOS",
    "img": "assets/img/medicamentos/sulfatiazol-polvos.webp"
  },
  {
    "name": "BAÑO COLOIDE",
    "presentation": "POLVO",
    "img": "assets/img/medicamentos/bano-coloide-polvo.webp"
  },
  {
    "name": "POLVO DE HABA",
    "presentation": "",
    "img": "assets/img/medicamentos/polvo-de-haba.webp"
  },
  {
    "name": "BORAX",
    "presentation": "",
    "img": "assets/img/medicamentos/borax.webp"
  },
  {
    "name": "ALCANFOR",
    "presentation": "",
    "img": "assets/img/medicamentos/alcanfor.webp"
  },
  {
    "name": "ANIS ESTRELLA",
    "presentation": "",
    "img": "assets/img/medicamentos/anis-estrella.webp"
  },
  {
    "name": "PARACETAMOL-FENILEFRINA-LORATADINA LARITOL G",
    "presentation": "GRANULADO 600MG/10MG/25MG MANZANA CANELA",
    "img": "assets/img/medicamentos/paracetamol-fenilefrina-loratadina-laritol-g-granulado-600mg-10mg-25mg-manzana-canela.webp"
  },
  {
    "name": "RETINOL Y ERGOCALCIFEROL",
    "presentation": "",
    "img": "assets/img/medicamentos/retinol-y-ergocalciferol.webp"
  },
  {
    "name": "GLUCOSAMINA, CONDROITINA, ACIDO ASCORBICO",
    "presentation": "",
    "img": "assets/img/medicamentos/glucosamina-condroitina-acido-ascorbico.webp"
  },
  {
    "name": "ANIMALIN C PRTEINA DE SOYA VITC",
    "presentation": "",
    "img": "assets/img/medicamentos/animalin-c-prteina-de-soya-vitc.webp"
  },
  {
    "name": "VITA KID C",
    "presentation": "",
    "img": "assets/img/medicamentos/vita-kid-c.webp"
  },
  {
    "name": "LACTIV (INULINA Y PROBIOTICOS)",
    "presentation": "",
    "img": "assets/img/medicamentos/lactiv-inulina-y-probioticos.webp"
  },
  {
    "name": "PSYLLUM PLANTAGO",
    "presentation": "",
    "img": "assets/img/medicamentos/psyllum-plantago.webp"
  },
  {
    "name": "Lactopram (lactobacillus)",
    "presentation": "",
    "img": "assets/img/medicamentos/lactopram-lactobacillus.webp"
  },
  {
    "name": "VALERIANA OFFICINALIAS/PASSIFLORA INCARNATA",
    "presentation": "",
    "img": "assets/img/medicamentos/valeriana-officinalias-passiflora-incarnata.webp"
  },
  {
    "name": "VITAMINA A Y D, CALCIO, FOSFORO, OMEGA 3 (ADEVIT)",
    "presentation": "",
    "img": "assets/img/medicamentos/vitamina-a-y-d-calcio-fosforo-omega-3-adevit.webp"
  },
  {
    "name": "ACIDO ASCORBICO",
    "presentation": "",
    "img": "assets/img/medicamentos/acido-ascorbico.webp"
  },
  {
    "name": "VITAMINA B1, B6, B12",
    "presentation": "",
    "img": "assets/img/medicamentos/vitamina-b1-b6-b12.webp"
  },
  {
    "name": "Gelcavit",
    "presentation": "",
    "img": "assets/img/medicamentos/gelcavit.webp"
  },
  {
    "name": "FERLOR AF SUPLEMENTO ALIMENTICIO",
    "presentation": "",
    "img": "assets/img/medicamentos/ferlor-af-suplemento-alimenticio.webp"
  },
  {
    "name": "ROCA VIT",
    "presentation": "",
    "img": "assets/img/medicamentos/roca-vit.webp"
  },
  {
    "name": "PARACETAMOL 10G/100ML",
    "presentation": "",
    "img": "assets/img/medicamentos/paracetamol-10g-100ml.webp"
  }
];

function waLink(message){
  const num = (CONFIG.whatsappNumberE164 || "").replace(/\s/g,"");
  const text = encodeURIComponent(message || CONFIG.whatsappDefaultMessage || "");
  return `https://wa.me/${num.replace("+","")}?text=${text}`;
}

function qs(sel, parent=document){ return parent.querySelector(sel); }
function qsa(sel, parent=document){ return [...parent.querySelectorAll(sel)]; }


function esc(v){
  return String(v ?? "").replace(/[&<>"']/g, (c)=>({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
  }[c]));
}

function initYear(){
  const y = qs("#year");
  if(y) y.textContent = new Date().getFullYear();
}

function initTopbar(){
  const btn = qs("#menuBtn");
  const mob = qs("#mobileNav");
  if(!btn || !mob) return;
  btn.addEventListener("click", ()=>{
    const open = mob.style.display === "block";
    mob.style.display = open ? "none" : "block";
    btn.setAttribute("aria-expanded", String(!open));
  });
  qsa("a", mob).forEach(a=>a.addEventListener("click", ()=> mob.style.display="none"));
}

function initWhatsApp(){
  const btns = qsa("[data-wa]");
  btns.forEach(b=>{
    b.setAttribute("href", waLink(b.getAttribute("data-wa") || undefined));
    b.setAttribute("target","_blank");
    b.setAttribute("rel","noopener");
  });
  const num = qs("#waNumber");
  if(num) num.textContent = CONFIG.whatsappNumberE164;
  const loc = qs("#locText"); if(loc) loc.textContent = CONFIG.locationText;
  const sch = qs("#schText"); if(sch) sch.textContent = CONFIG.scheduleText;
  const mail = qs("#mailText"); if(mail) mail.textContent = CONFIG.emailText;
}

function initHeroSlides(){
  const imgs = qsa(".heroSlides img");
  if(!imgs.length) return;
  let idx = 0;
  imgs[idx].classList.add("active");
  const next = ()=>{
    imgs[idx].classList.remove("active");
    idx = (idx+1) % imgs.length;
    imgs[idx].classList.add("active");
  };
  let timer = setInterval(next, 4200);

  const prevBtn = qs("#slidePrev");
  const nextBtn = qs("#slideNext");
  const jump = (dir)=>{
    clearInterval(timer);
    imgs[idx].classList.remove("active");
    idx = (idx + dir + imgs.length) % imgs.length;
    imgs[idx].classList.add("active");
    timer = setInterval(next, 4200);
  };
  prevBtn?.addEventListener("click", ()=> jump(-1));
  nextBtn?.addEventListener("click", ()=> jump(1));
}

function initAccordion(){
  qsa("[data-acc]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const item = btn.closest(".accordionItem");
      const panel = qs(".accordionPanel", item);
      const isOpen = item.classList.toggle("open");
      btn.querySelector(".m").textContent = isOpen ? "Ocultar" : "Ver";
      panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : "0px";
    });
  });
  const first = qs(".accordionItem");
  if(first && window.innerWidth > 980){
    const btn = qs("[data-acc]", first);
    btn?.click();
  }
}

function initReveal(){
  const els = qsa(".reveal");
  if(!els.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add("on");
    });
  }, { threshold: 0.12 });
  els.forEach(el=> io.observe(el));
}

function mountServices(){
  const wrap = qs("#servicesAccordion");
  if(!wrap) return;
  wrap.innerHTML = CLINIC_SERVICES.map((s)=>{
    const icon = s.icon || "assets/img/icon-toxina.png";
    const lis = (s.items||[]).map(it=>`<li>${it}</li>`).join("");
    return `
      <div class="accordionItem" id="svc-${s.id}">
        <button class="accordionBtn" type="button" data-acc>
          <div class="svcMedia">
            <img class="svcThumb" src="${s.thumb || icon}" alt="${s.title}">
            <img class="svcIcon" src="${icon}" alt="">
          </div>
          <div>
            <div class="t">${s.title}</div>
            <div style="color:var(--muted); font-weight:800; font-size:12px; margin-top:2px;">Información clara • Protocolos personalizados</div>
          </div>
          <div class="m">Ver</div>
        </button>
        <div class="accordionPanel">
          <div class="inner">
            <ul class="list">${lis}</ul>
            <div class="tagRow">
              <span class="tag">Evaluación</span>
              <span class="tag">Protocolo</span>
              <span class="tag">Seguimiento</span>
            </div>
            <div class="btnRow" style="margin-top:14px">
              <a class="btn small primary" data-wa="Hola, quiero información de: ${s.title}">Solicitar por WhatsApp</a>
              <a class="btn small" href="#contacto">Agendar</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function mountDistrib(){
  const wrap = qs("#distribGrid");
  if(!wrap) return;
  wrap.innerHTML = DISTRIB_CATEGORIES.map(c=>`
    <div class="card reveal">
      <div class="icon">✦</div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="tagRow"><span class="tag">${c.status}</span></div>
    </div>
  `).join("");
}

function mountProcesos(){
  const wrap = qs("#procesosGrid");
  if(!wrap) return;
  wrap.innerHTML = PROCESOS.map(v=>`
    <div class="mediaCard reveal">
      <video src="${v.src}" controls playsinline preload="metadata"></video>
      <div class="cap">
        <strong>${v.title}</strong>
        <span>${v.desc}</span>
      </div>
    </div>
  `).join("");
}

function mountMedicamentos(){
  const carousel = qs("#medsCarousel");
  const fullWrap = qs("#medFull");
  const grid = qs("#medsGrid");
  const input = qs("#medSearch");
  const count = qs("#medCount");
  const toggle = qs("#toggleMeds");
  const prevBtn = qs("#medPrev");
  const nextBtn = qs("#medNext");

  // Si no existe el carrusel o contenedor, no hacemos nada.
  if(!carousel && !grid) return;

  const all = MEDICAMENTOS || [];
  if(count) count.textContent = `${all.length} medicamento${all.length===1 ? "" : "s"}`;

  const cardHTML = (m)=>`
    <article class="medCard reveal">
      <img src="${esc(m.img)}" alt="${esc(m.name)} ${esc(m.presentation || "")}" loading="lazy">
      <div class="body">
        <div class="name">${esc(m.name)}</div>
        <div class="pres">${esc(m.presentation || "")}</div>
        <div class="actions">
          <a class="primary" data-wa="Hola, me interesa: ${esc(m.name)} (${esc(m.presentation || "s/p")}). ¿Me das precio y disponibilidad?">WhatsApp</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </article>
  `;

  // 1) Vista rápida: 5 medicamentos (tipo carrusel)
  const preview = all.slice(0,5);
  if(carousel){
    carousel.innerHTML = preview.map(cardHTML).join("");
  }

  // Flechas del carrusel
  const scrollByPage = (dir)=>{
    if(!carousel) return;
    const amount = Math.max(260, Math.floor(carousel.clientWidth * 0.85));
    carousel.scrollBy({ left: dir * amount, behavior: "smooth" });
  };
  prevBtn?.addEventListener("click", ()=>scrollByPage(-1));
  nextBtn?.addEventListener("click", ()=>scrollByPage(1));

  // 2) Catálogo completo (colapsable)
  let fullMounted = false;

  const norm = (s)=>String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");

  const renderFull = (list)=>{
    if(!grid) return;
    grid.innerHTML = list.map(cardHTML).join("");
    if(count) count.textContent = `${list.length} medicamento${list.length===1 ? "" : "s"}`;
    initWhatsApp();
    initReveal();
  };

  const openFull = ()=>{
    if(!fullWrap) return;
    fullWrap.hidden = false;
    toggle && (toggle.textContent = "Ocultar catálogo");
    if(!fullMounted){
      renderFull(all);
      fullMounted = true;

      input?.addEventListener("input", ()=>{
        const q = norm(input.value).trim();
        if(!q){ renderFull(all); return; }
        const filtered = all.filter(m=>{
          const hay = norm((m.name||"") + " " + (m.presentation||""));
          return hay.includes(q);
        });
        renderFull(filtered);
      });
    }
  };

  const closeFull = ()=>{
    if(!fullWrap) return;
    fullWrap.hidden = true;
    toggle && (toggle.textContent = "Ver catálogo completo");
  };

  toggle?.addEventListener("click", ()=>{
    if(fullWrap?.hidden) openFull();
    else closeFull();
  });

  // Inicializaciones para la vista rápida
  initWhatsApp();
  initReveal();
}

function boot(){
  initYear();
  initTopbar();
  mountServices();
  mountDistrib();
  mountProcesos();
  mountMedicamentos();
  initWhatsApp();
  initHeroSlides();
  initAccordion();
  initReveal();
}

document.addEventListener("DOMContentLoaded", boot);