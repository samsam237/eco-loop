const materials = [
 {id:"carton",name:"Carton & papier",nameEn:"Cardboard & paper",icon:"▤",desc:"Tri, regroupement et transformation en nouvelle matière papier/carton.",descEn:"Sorting, aggregation and transformation into new paper/cardboard material."},
 {id:"pet",name:"PET",nameEn:"PET",icon:"◉",desc:"Collecte, tri et acheminement vers des filières de recyclage du plastique.",descEn:"Collection, sorting and routing to plastic recycling streams."},
 {id:"hdpe",name:"HDPE / plastiques",nameEn:"HDPE / plastics",icon:"◇",desc:"Matières plastiques pouvant être regroupées selon leur type et leur qualité.",descEn:"Plastic materials that can be grouped by type and quality."},
 {id:"organic",name:"Déchets organiques",nameEn:"Organic waste",icon:"✿",desc:"Potentiel de compostage, valorisation organique ou autres usages selon la filière.",descEn:"Potential for composting, organic recovery or other uses depending on the stream."},
 {id:"wood",name:"Sciure & bois",nameEn:"Sawdust & wood",icon:"⌁",desc:"Matières issues notamment des menuiseries, pouvant alimenter différentes filières.",descEn:"Materials from woodworking that can feed different value chains."},
 {id:"glass",name:"Verre",nameEn:"Glass",icon:"◌",desc:"Collecte et regroupement pour réemploi ou recyclage selon les débouchés.",descEn:"Collection and aggregation for reuse or recycling depending on outlets."},
 {id:"metal",name:"Métaux",nameEn:"Metals",icon:"▣",desc:"Flux à forte valeur potentielle, notamment lorsqu’ils sont correctement triés.",descEn:"Potentially high-value streams, especially when properly sorted."},
 {id:"textile",name:"Textiles",nameEn:"Textiles",icon:"▦",desc:"Réemploi, transformation, upcycling et valorisation de textiles.",descEn:"Reuse, transformation, upcycling and recovery of textiles."},
 {id:"oil",name:"Huiles usagées",nameEn:"Used oils",icon:"●",desc:"Filière spécifique nécessitant des pratiques de collecte et de traitement adaptées.",descEn:"A specific stream requiring suitable collection and treatment practices."},
 {id:"ewaste",name:"Déchets électroniques",nameEn:"Electronic waste",icon:"▤",desc:"Réemploi, réparation, récupération de composants et traitement spécialisé.",descEn:"Reuse, repair, component recovery and specialized treatment."}
];
const demoData = {
 producers:[{id:"P001",name:"Imprimerie Nouvelle Génération",city:"Yaoundé",material:"Carton / Papier",weight:850,quality:"Triée",frequency:"Chaque semaine"}],
 recyclers:[
  {id:"V001",name:"EcoPapier Yaoundé",material:"Carton / Papier",need:"500–1 000 kg",distance:"6,2 km",score:94},
  {id:"V002",name:"RecyTech",material:"Papier / carton",need:"1–3 tonnes",distance:"14 km",score:82},
  {id:"V003",name:"Papeco",material:"Papier",need:"300–700 kg",distance:"19 km",score:74}
 ],
 collectors:[{id:"C001",name:"Collecte Express",distance:"6,2 km",status:"Disponible"}]
};