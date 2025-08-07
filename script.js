const anos = [
  {
    nombre: "Año 1",
    semestres: [
      ["MAT060","EFI100","ACA260","IAC001","FIS100","MAT070","IWI131"],
      ["MAT061","MAT071","EFI101","FIS109","HRW1","IAC002","QUI010"]
    ]
  },
  {
    nombre: "Año 2",
    semestres: [
      ["ICS001","DEW0","FIS119","HRW2","ACA261","MAT023"],
      ["ICS002","FIS129","HRW3","ACA262","MAT032","IAC003"]
    ]
  },
  {
    nombre: "Año 3",
    semestres: [
      ["IAC005","IAC004","IAC006","ICS010","ICS009","ACA263"],
      ["ACA264","IAC007","ICS015","IAC009","ICS013","IAC008"]
    ]
  },
  {
    nombre: "Año 4",
    semestres: [
      ["IAC013","IAC014","IAC012","ACA265","IAC011","IAC010"],
      ["IAC017","ACA266","IAC015","IAC018","IAC016","IAC019"]
    ]
  },
  {
    nombre: "Año 5",
    semestres: [
      ["IAC023","IAC021","IAC022","IAC024","IAC020","IAC025"],
      ["IAC027","IAC028","IAC029","IAC030","IAC026","IAC031"]
    ]
  }
];
// Definición de ramos y requisitos
const ramos = {
  "MAT060": {nombre:"ÁLGEBRA Y GEOMETRÍA",requisitos:[]},
  "EFI100": {nombre:"EDUCACIÓN FÍSICA I",requisitos:[]},
  "ACA260": {nombre:"INGLÉS TÉCNICO AERONÁUTICO",requisitos:[]},
  "IAC001": {nombre:"INTRODUCCIÓN A LA AERONÁUTICA",requisitos:[]},
  "FIS100": {nombre:"INTRODUCCIÓN A LA FÍSICA",requisitos:[]},
  "MAT070": {nombre:"INTRODUCCIÓN AL CÁLCULO",requisitos:[]},
  "IWI131": {nombre:"PROGRAMACIÓN",requisitos:[]},
  "MAT061": {nombre:"ÁLGEBRA LINEAL",requisitos:["MAT060"]},
  "MAT071": {nombre:"CÁLCULO EN UNA VARIABLE",requisitos:["MAT070"]},
  "EFI101": {nombre:"EDUCACIÓN FÍSICA II",requisitos:["EFI100"]},
  "FIS109": {nombre:"FÍSICA BÁSICA I",requisitos:["MAT060","MAT070","FIS100"]},
  "HRW1": {nombre:"HUMANÍSTICO I",requisitos:[]},
  "IAC002": {nombre:"MANEJO TIC",requisitos:[]},
  "QUI010": {nombre:"QUÍMICA Y SOCIEDAD",requisitos:[]},
  "ICS001": {nombre:"ADMINISTRACIÓN DE EMPRESAS",requisitos:[]},
  "DEW0": {nombre:"DEPORTES",requisitos:["EFI101"]},
  "FIS119": {nombre:"FÍSICA BÁSICA II",requisitos:["MAT071","FIS109","MAT061"]},
  "HRW2": {nombre:"HUMANÍSTICO II",requisitos:[]},
  "ACA261": {nombre:"INGLÉS BÁSICO AERONÁUTICO",requisitos:["ACA260"]},
  "MAT023": {nombre:"MATEMÁTICAS III",requisitos:["MAT071","MAT061"]},
  "ICS002": {nombre:"CONTABILIDAD I",requisitos:["ICS001"]},
  "FIS129": {nombre:"FÍSICA BÁSICA III",requisitos:["FIS119"]},
  "HRW3": {nombre:"HUMANÍSTICO III",requisitos:[]},
  "ACA262": {nombre:"INGLÉS MEDIO AERONÁUTICO I",requisitos:["ACA261"]},
  "MAT032": {nombre:"PROBABILIDAD Y ESTADÍSTICA COMERCIAL",requisitos:["MAT023"]},
  "IAC003": {nombre:"TALLER INTEGRACIÓN I",requisitos:["ICS001","IAC001"]},
  "IAC005": {nombre:"CIENCIAS AERONÁUTICAS I",requisitos:["FIS129","ACA262"]},
  "IAC004": {nombre:"ECONOMÍA Y FINANZAS AERONÁUTICA",requisitos:["ICS002"]},
  "IAC006": {nombre:"ÉTICA PROFESIONAL Y RSE",requisitos:["HRW2","IAC003"]},
  "ICS010": {nombre:"GESTIÓN DE INVESTIGACIÓN DE OPERACIONES",requisitos:["MAT032"]},
  "ICS009": {nombre:"INGENIERÍA ECONÓMICA",requisitos:["ICS002"]},
  "ACA263": {nombre:"INGLÉS MEDIO AERONÁUTICO II",requisitos:["ACA262"]},
  "ICS013": {nombre:"ECONOMETRÍA",requisitos:["MAT032"]},
  "IAC008": {nombre:"ELECTIVO LIBRE",requisitos:[]},
  "IAC007": {nombre:"EMPRESAS AERONÁUTICAS I",requisitos:["IAC004","ICS009"]},
  "ACA264": {nombre:"INGLÉS AVANZADO AERONÁUTICO I",requisitos:["ACA263"]},
  "ICS015": {nombre:"RECURSOS HUMANOS",requisitos:["ICS001"]},
  "IAC009": {nombre:"TALLER INTEGRACIÓN II",requisitos:["IAC005","IAC006"]},
  "IAC013": {nombre:"CIENCIAS AERONÁUTICAS II",requisitos:["IAC005"]},
  "IAC014": {nombre:"ELECTIVO ACA I",requisitos:[]},
  "IAC012": {nombre:"INFRAESTRUCTURA Y SERVICIOS AERONÁUTICOS",requisitos:["IAC007","ACA264","IAC009"]},
  "ACA265": {nombre:"INGLÉS AVANZADO AERONÁUTICO II",requisitos:["ACA264"]},
  "IAC011": {nombre:"LEGISLACIÓN AERONÁUTICA",requisitos:["IAC007"]},
  "IAC010": {nombre:"MARKETING AERONÁUTICO",requisitos:["IAC007"]},
  "IAC017": {nombre:"EMPRESAS AERONÁUTICAS II",requisitos:["IAC012","IAC010"]},
  "ACA266": {nombre:"INGLÉS CONVERSACIONAL AERONÁUTICO",requisitos:["ACA265"]},
  "IAC015": {nombre:"LIDERAZGO Y NEGOCIACIÓN",requisitos:["ICS015","IAC006"]},
  "IAC018": {nombre:"OPERACIONES Y LOGÍSTICA AERONÁUTICA",requisitos:["IAC013","IAC012"]},
  "IAC016": {nombre:"SEGURIDAD OPERACIONAL Y SMS",requisitos:["IAC011","IAC012"]},
  "IAC019": {nombre:"TALLER INTEGRACIÓN III",requisitos:["IAC009"]},
  "IAC023": {nombre:"DECISIONES FINANCIERAS AERONÁUTICAS",requisitos:["IAC017","IAC018"]},
  "IAC021": {nombre:"EVALUACIÓN DE PROYECTOS AERONÁUTICOS",requisitos:["IAC017"]},
  "IAC022": {nombre:"GESTIÓN ESTRATÉGICA",requisitos:["IAC015","IAC017"]},
  "IAC024": {nombre:"MODERN COMMERCIAL AVIATION",requisitos:["IAC018","ACA266"]},
  "IAC020": {nombre:"SISTEMAS DE GESTIÓN DE CALIDAD",requisitos:["IAC016","IAC018"]},
  "IAC025": {nombre:"TRABAJO TITULACIÓN I",requisitos:["IAC019"]},
  "IAC027": {nombre:"AERONÁUTICA Y ESPACIO",requisitos:["IAC021"]},
  "IAC028": {nombre:"CASOS EN AVIACIÓN COMERCIAL",requisitos:["IAC022","IAC023"]},
  "IAC029": {nombre:"ELECTIVO ACA II",requisitos:[]},
  "IAC030": {nombre:"INTERNATIONAL AVIATION FEATURES",requisitos:["ACA266"]},
  "IAC026": {nombre:"SISTEMAS INTEGRADOS DE GESTIÓN",requisitos:["IAC022","IAC020"]},
  "IAC031": {nombre:"TRABAJO TITULACIÓN II",requisitos:["IAC025","IAC024"]}
};

const contenedor = document.getElementById("malla");
const aprobados = new Set();

anos.forEach(ano => {
  const col = document.createElement("div");
  col.classList.add("columna-ano");
  const titulo = document.createElement("h2");
  titulo.textContent = ano.nombre;
  col.appendChild(titulo);

  const semestresWrapper = document.createElement("div");
  semestresWrapper.classList.add("semestres-paralelos");

  ano.semestres.forEach((semestre, i) => {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");
    semestreDiv.innerHTML = `<h3>Semestre ${i + 1}</h3>`;

    semestre.forEach(cod => {
      const div = document.createElement("div");
      div.classList.add("ramo");
      if (ramos[cod].requisitos.length > 0) div.classList.add("bloqueado");
      div.id = cod;
      div.innerHTML = `<strong>${cod}</strong><br>${ramos[cod].nombre}`;
      div.addEventListener("click", () => toggleRamo(cod, div));
      semestreDiv.appendChild(div);
    });

    semestresWrapper.appendChild(semestreDiv);
  });

  col.appendChild(semestresWrapper);
  contenedor.appendChild(col);
});

function toggleRamo(cod, div) {
  if (div.classList.contains("bloqueado")) return;

  if (div.classList.contains("aprobado")) {
    div.classList.remove("aprobado");
    aprobados.delete(cod);
  } else {
    div.classList.add("aprobado");
    aprobados.add(cod);
  }

  actualizarBloqueos();
}

function actualizarBloqueos() {
  Object.keys(ramos).forEach(cod => {
    const div = document.getElementById(cod);
    if (!div) return;
    if (div.classList.contains("aprobado")) return;
    const reqs = ramos[cod].requisitos;
    const desbloqueado = reqs.every(r => aprobados.has(r));
    if (desbloqueado) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });
}
