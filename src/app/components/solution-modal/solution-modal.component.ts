import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

export interface DialogData {
  myData: String;
}



@Component({
  selector: 'app-solution-modal',
  templateUrl: './solution-modal.component.html',
  styleUrls: ['./solution-modal.component.scss']
})
export class SolutionModalComponent {
  contentToDisplay !: any;
  solutionData = [
    {
      solution: "combles",
      content: "<header>\r\n        <h1>Isolation des Combles<\/h1>\r\n        <img src=\"..\/..\/..\/assets\/solutions\/combles.png\" alt=\"Isolation des Combles - SOLUCE ENERGIE\">\r\n    <\/header>\r\n\r\n    <section>\r\n        <h2>Optimisez l'efficacit\u00E9 \u00E9nerg\u00E9tique de votre habitation<\/h2>\r\n\r\n        <p>L'isolation des combles est une solution incontournable pour am\u00E9liorer la performance \u00E9nerg\u00E9tique de votre maison. En isolant cette partie souvent n\u00E9glig\u00E9e, vous pouvez b\u00E9n\u00E9ficier de nombreux avantages tant sur le plan du confort que des \u00E9conomies d'\u00E9nergie.<\/p>\r\n        \r\n        <h3>Avantages de l'Isolation des Combles :<\/h3>\r\n        <ul>\r\n            <li><strong>\u00C9conomies d'\u00C9nergie :<\/strong> Une isolation efficace r\u00E9duit la perte de chaleur, diminuant ainsi vos besoins en chauffage en hiver et en climatisation en \u00E9t\u00E9. Cela se traduit par des factures d'\u00E9nergie plus basses.<\/li>\r\n            <li><strong>Confort Thermique :<\/strong> L'isolation des combles cr\u00E9e une barri\u00E8re thermique, maintenant une temp\u00E9rature agr\u00E9able dans votre maison tout au long de l'ann\u00E9e. Adieu aux pi\u00E8ces froides en hiver et aux chaleurs excessives en \u00E9t\u00E9.<\/li>\r\n            <li><strong>Valorisation Immobili\u00E8re :<\/strong> Investir dans l'isolation des combles augmente la valeur de votre propri\u00E9t\u00E9. Les acheteurs et locataires sont de plus en plus attentifs \u00E0 l'efficacit\u00E9 \u00E9nerg\u00E9tique.<\/li>\r\n            <li><strong>\u00C9cologie :<\/strong> En r\u00E9duisant votre consommation \u00E9nerg\u00E9tique, vous contribuez \u00E0 la protection de l'environnement. Moins de besoins en \u00E9nergie signifient une empreinte carbone r\u00E9duite.<\/li>\r\n        <\/ul>\r\n\r\n        <h3>Co\u00FBt de l'Isolation des Combles :<\/h3>\r\n        <p>Le co\u00FBt de l'isolation des combles d\u00E9pend de plusieurs facteurs, tels que la taille de la zone \u00E0 isoler, le type d'isolant choisi, et la complexit\u00E9 des travaux. Cependant, consid\u00E9rez cela comme un investissement rentable \u00E0 long terme, car les \u00E9conomies d'\u00E9nergie compensent souvent les co\u00FBts initiaux.<\/p>\r\n\r\n        <h3>Processus d'Isolation :<\/h3>\r\n        <p>Nos experts en r\u00E9novation \u00E9nerg\u00E9tique suivent un processus rigoureux pour assurer des r\u00E9sultats optimaux. Apr\u00E8s une \u00E9valuation pr\u00E9cise de vos besoins, nous s\u00E9lectionnons les mat\u00E9riaux isolants les plus adapt\u00E9s. L'installation est r\u00E9alis\u00E9e avec soin, garantissant une isolation durable et efficace.<\/p>\r\n\r\n        <p>Contactez-nous d\u00E8s maintenant pour profiter de l'expertise de notre \u00E9quipe dans l'isolation des combles. Am\u00E9liorez le confort de votre habitation tout en contribuant \u00E0 la pr\u00E9servation de l'environnement.<\/p>\r\n    <\/section>"
    },
    {
      solution: "ces",
      content:"<header>\r\n        <h1>Chauffe-eau Solaire<\/h1>\r\n        <img src=\"..\/..\/..\/assets\/solutions\/chauffe-eau-solaire.png\" alt=\"Chauffe-eau Solaire - SOLUCE ENERGIE\">\r\n    <\/header>\r\n\r\n    <section>\r\n        <h2>Une solution \u00E9cologique et \u00E9conomique<\/h2>\r\n\r\n        <p>Le chauffe-eau solaire est une alternative verte et rentable pour r\u00E9pondre \u00E0 vos besoins en eau chaude. SOLUCE ENERGIE propose des installations performantes pour maximiser les avantages de cette solution durable.<\/p>\r\n        \r\n        <h3>Avantages du Chauffe-eau Solaire :<\/h3>\r\n        <ul>\r\n            <li><strong>\u00C9nergie Renouvelable :<\/strong> Exploitez l'\u00E9nergie solaire, une ressource in\u00E9puisable et propre, pour chauffer votre eau sanitaire. Contribuez \u00E0 la transition vers une \u00E9nergie plus verte.<\/li>\r\n            <li><strong>\u00C9conomies d'\u00C9nergie :<\/strong> R\u00E9duisez votre d\u00E9pendance aux \u00E9nergies fossiles et diminuez vos factures d'\u00E9lectricit\u00E9 gr\u00E2ce \u00E0 une source d'\u00E9nergie gratuite et naturelle.<\/li>\r\n            <li><strong>Impact Environnemental Faible :<\/strong> R\u00E9duisez votre empreinte carbone en optant pour une solution respectueuse de l'environnement. Le chauffe-eau solaire \u00E9met moins de gaz \u00E0 effet de serre que les syst\u00E8mes traditionnels.<\/li>\r\n            <li><strong>Fiabilit\u00E9 :<\/strong> Nos installations de chauffe-eau solaire sont con\u00E7ues pour assurer une performance fiable et constante, m\u00EAme dans des conditions climatiques variables.<\/li>\r\n        <\/ul>\r\n\r\n        <h3>Co\u00FBt de l'Installation :<\/h3>\r\n        <p>Le co\u00FBt initial de l'installation d'un chauffe-eau solaire peut varier en fonction de la taille du syst\u00E8me et des sp\u00E9cificit\u00E9s de votre habitation. Cependant, de nombreuses incitations fiscales et subventions sont disponibles, rendant cette solution plus accessible.<\/p>\r\n\r\n        <h3>Processus d'Installation :<\/h3>\r\n        <p>Nos experts \u00E9valuent votre situation pour concevoir une installation sur mesure. Nous installons des capteurs solaires sur votre toit pour capter l'\u00E9nergie du soleil, qui est ensuite convertie en chaleur pour chauffer votre eau sanitaire.<\/p>\r\n\r\n        <p>Contactez-nous d\u00E8s maintenant pour tirer parti des avantages \u00E9cologiques et \u00E9conomiques du chauffe-eau solaire. Faites le choix d'une \u00E9nergie propre et renouvelable.<\/p>\r\n    <\/section>"
    },
    {
      solution: "cet",
      content: "<header>\r\n    <h1>Chauffe-eau Thermodynamique<\/h1>\r\n    <img src=\"..\/..\/..\/assets\/solutions\/thermodynamique.png\" alt=\"Chauffe-eau Thermodynamique - SOLUCE ENERGIE\">\r\n<\/header>\r\n\r\n<section>\r\n    <h2>Une solution \u00E9conome en \u00E9nergie<\/h2>\r\n\r\n    <p>Le chauffe-eau thermodynamique est une option innovante pour r\u00E9pondre \u00E0 vos besoins en eau chaude tout en r\u00E9duisant votre empreinte \u00E9nerg\u00E9tique. SOLUCE ENERGIE propose des installations performantes pour un confort optimal au quotidien.<\/p>\r\n    \r\n    <h3>Avantages du Chauffe-eau Thermodynamique :<\/h3>\r\n    <ul>\r\n        <li><strong>\u00C9nergie Renouvelable :<\/strong> Exploitez l'\u00E9nergie pr\u00E9sente dans l'air ambiant pour chauffer votre eau sanitaire. Une source d'\u00E9nergie renouvelable et gratuite.<\/li>\r\n        <li><strong>\u00C9conomies d'\u00C9nergie :<\/strong> R\u00E9duisez votre consommation d'\u00E9lectricit\u00E9 en utilisant la chaleur de l'air pour chauffer l'eau, offrant une solution plus efficace que les chauffe-eau traditionnels.<\/li>\r\n        <li><strong>Adaptabilit\u00E9 :<\/strong> Le chauffe-eau thermodynamique fonctionne de mani\u00E8re efficace dans une vari\u00E9t\u00E9 de conditions climatiques, assurant un approvisionnement constant en eau chaude.<\/li>\r\n        <li><strong>Confort Continu :<\/strong> B\u00E9n\u00E9ficiez d'une source d'eau chaude stable et constante, adapt\u00E9e aux besoins de votre foyer, tout en r\u00E9alisant des \u00E9conomies d'\u00E9nergie substantielles.<\/li>\r\n    <\/ul>\r\n\r\n    <h3>Co\u00FBt de l'Installation :<\/h3>\r\n    <p>Le co\u00FBt initial de l'installation d'un chauffe-eau thermodynamique varie en fonction de la capacit\u00E9 du syst\u00E8me et des sp\u00E9cificit\u00E9s de votre habitation. Des \u00E9conomies significatives sur les co\u00FBts \u00E9nerg\u00E9tiques \u00E0 long terme compensent g\u00E9n\u00E9ralement l'investissement initial.<\/p>\r\n\r\n    <h3>Processus d'Installation :<\/h3>\r\n    <p>Nos experts \u00E9valuent vos besoins en eau chaude et votre environnement pour concevoir une installation sur mesure. Le chauffe-eau thermodynamique est install\u00E9 de mani\u00E8re professionnelle pour garantir une performance optimale.<\/p>\r\n\r\n    <p>Contactez-nous d\u00E8s maintenant pour profiter des avantages \u00E9nerg\u00E9tiques et \u00E9conomiques du chauffe-eau thermodynamique. Optez pour une solution moderne et respectueuse de l'environnement.<\/p>\r\n<\/section>"
    },
    {
      solution: "pacae",
      content: "<header>\r\n    <h1>Pompe \u00E0 Chaleur Air-Eau<\/h1>\r\n    <img src=\"..\/..\/..\/assets\/solutions\/aireau.png\" alt=\"Pompe \u00E0 Chaleur Air-Eau - SOLUCE ENERGIE\">\r\n<\/header>\r\n\r\n<section>\r\n    <h2>Une solution efficace pour le chauffage et la production d'eau chaude<\/h2>\r\n\r\n    <p>La pompe \u00E0 chaleur air-eau est une technologie moderne qui utilise l'\u00E9nergie pr\u00E9sente dans l'air ext\u00E9rieur pour chauffer votre habitation et produire de l'eau chaude sanitaire. SOLUCE ENERGIE propose des installations performantes pour un confort optimal tout au long de l'ann\u00E9e.<\/p>\r\n    \r\n    <h3>Avantages de la Pompe \u00E0 Chaleur Air-Eau :<\/h3>\r\n    <ul>\r\n        <li><strong>Efficacit\u00E9 \u00C9nerg\u00E9tique :<\/strong> Exploitez l'\u00E9nergie gratuite de l'air ext\u00E9rieur pour chauffer votre maison et votre eau. Une solution \u00E9cologique et \u00E9conomique.<\/li>\r\n        <li><strong>Chauffage et Eau Chaude :<\/strong> La pompe \u00E0 chaleur air-eau assure le chauffage de votre habitation en hiver et peut \u00E9galement produire de l'eau chaude sanitaire toute l'ann\u00E9e.<\/li>\r\n        <li><strong>\u00C9conomies d'\u00C9nergie :<\/strong> R\u00E9duisez votre consommation d'\u00E9nergie et vos factures gr\u00E2ce \u00E0 une technologie qui exploite les ressources renouvelables.<\/li>\r\n        <li><strong>Confort Thermique :<\/strong> Profitez d'un chauffage homog\u00E8ne et d'une production d'eau chaude constante pour un confort optimal dans votre foyer.<\/li>\r\n    <\/ul>\r\n\r\n    <h3>Co\u00FBt de l'Installation :<\/h3>\r\n    <p>Le co\u00FBt initial de l'installation d'une pompe \u00E0 chaleur air-eau d\u00E9pend de la taille de votre habitation et de vos besoins en chauffage. Cependant, les \u00E9conomies d'\u00E9nergie r\u00E9alis\u00E9es contribuent souvent \u00E0 rentabiliser rapidement l'investissement initial.<\/p>\r\n\r\n    <h3>Processus d'Installation :<\/h3>\r\n    <p>Nos experts \u00E9valuent vos besoins en chauffage et en eau chaude, puis con\u00E7oivent et installent une solution sur mesure. Nous veillons \u00E0 une mise en place professionnelle pour garantir la performance et la durabilit\u00E9 de votre installation.<\/p>\r\n\r\n    <p>Contactez-nous d\u00E8s maintenant pour d\u00E9couvrir comment la pompe \u00E0 chaleur air-eau peut am\u00E9liorer l'efficacit\u00E9 \u00E9nerg\u00E9tique de votre habitation. Faites le choix d'un chauffage respectueux de l'environnement et \u00E9conomique.<\/p>\r\n<\/section>\r\n"
    },
    {
      solution: "pacaa",
      content: "<header>\r\n    <h1>Pompe \u00E0 Chaleur Air-Air<\/h1>\r\n    <img src=\"..\/..\/..\/assets\/solutions\/airair.png\" alt=\"Pompe \u00E0 Chaleur Air-Air - SOLUCE ENERGIE\">\r\n<\/header>\r\n\r\n<section>\r\n    <h2>Un chauffage et une climatisation r\u00E9versibles<\/h2>\r\n\r\n    <p>La pompe \u00E0 chaleur air-air est une solution polyvalente qui utilise l'\u00E9nergie pr\u00E9sente dans l'air ext\u00E9rieur pour chauffer votre int\u00E9rieur en hiver et le rafra\u00EEchir en \u00E9t\u00E9. SOLUCE ENERGIE propose des installations performantes pour un confort optimal tout au long de l'ann\u00E9e.<\/p>\r\n    \r\n    <h3>Avantages de la Pompe \u00E0 Chaleur Air-Air :<\/h3>\r\n    <ul>\r\n        <li><strong>Chauffage et Climatisation :<\/strong> B\u00E9n\u00E9ficiez d'un syst\u00E8me r\u00E9versible qui assure le chauffage en hiver et la climatisation en \u00E9t\u00E9, offrant un confort thermique toute l'ann\u00E9e.<\/li>\r\n        <li><strong>Efficacit\u00E9 \u00C9nerg\u00E9tique :<\/strong> Utilisez l'\u00E9nergie gratuite de l'air ext\u00E9rieur pour chauffer ou rafra\u00EEchir votre espace, tout en r\u00E9duisant la consommation d'\u00E9nergie.<\/li>\r\n        <li><strong>Contr\u00F4le Individualis\u00E9 :<\/strong> G\u00E9rez la temp\u00E9rature de chaque pi\u00E8ce de mani\u00E8re ind\u00E9pendante, assurant un confort personnalis\u00E9 et des \u00E9conomies d'\u00E9nergie.<\/li>\r\n        <li><strong>Installation Facile :<\/strong> La pompe \u00E0 chaleur air-air est relativement simple \u00E0 installer, n\u00E9cessitant moins de travaux que certains autres syst\u00E8mes de chauffage et climatisation.<\/li>\r\n    <\/ul>\r\n\r\n    <h3>Co\u00FBt de l'Installation :<\/h3>\r\n    <p>Le co\u00FBt initial de l'installation d'une pompe \u00E0 chaleur air-air d\u00E9pend de la taille de votre espace et de vos besoins en chauffage et climatisation. Cette solution offre g\u00E9n\u00E9ralement un bon rapport qualit\u00E9-prix.<\/p>\r\n\r\n    <h3>Processus d'Installation :<\/h3>\r\n    <p>Nos experts \u00E9valuent votre espace et vos besoins thermiques, puis con\u00E7oivent et installent une solution sur mesure. La pompe \u00E0 chaleur air-air est mise en place de mani\u00E8re professionnelle pour garantir une performance optimale.<\/p>\r\n\r\n    <p>Contactez-nous d\u00E8s maintenant pour d\u00E9couvrir comment la pompe \u00E0 chaleur air-air peut am\u00E9liorer le confort de votre habitation tout en optimisant l'efficacit\u00E9 \u00E9nerg\u00E9tique. Faites le choix d'une solution r\u00E9versible et \u00E9conomique.<\/p>\r\n<\/section>\r\n"
    },
    {
      solution: "cs",
      content: "<header>\r\n    <h1>Chauffage Solaire<\/h1>\r\n    <img src=\"..\/..\/..\/assets\/solutions\/chauffage-solaire.png\" alt=\"Chauffage Solaire - SOLUCE ENERGIE\">\r\n<\/header>\r\n\r\n<section>\r\n    <h2>Une source de chaleur propre et renouvelable<\/h2>\r\n\r\n    <p>Le chauffage solaire utilise l'\u00E9nergie du soleil pour chauffer votre habitation de mani\u00E8re propre et renouvelable. SOLUCE ENERGIE propose des installations performantes pour un chauffage \u00E9conomique et respectueux de l'environnement.<\/p>\r\n    \r\n    <h3>Avantages du Chauffage Solaire :<\/h3>\r\n    <ul>\r\n        <li><strong>\u00C9nergie Renouvelable :<\/strong> Exploitez la puissance du soleil comme source in\u00E9puisable d'\u00E9nergie pour chauffer votre maison de mani\u00E8re \u00E9cologique.<\/li>\r\n        <li><strong>R\u00E9duction des Co\u00FBts \u00C9nerg\u00E9tiques :<\/strong> Profitez d'une r\u00E9duction significative de vos factures d'\u00E9nergie en utilisant une source gratuite et disponible en abondance.<\/li>\r\n        <li><strong>\u00C9cologie :<\/strong> R\u00E9duisez votre empreinte carbone en optant pour une source de chauffage respectueuse de l'environnement, sans \u00E9missions de gaz \u00E0 effet de serre.<\/li>\r\n        <li><strong>Autonomie \u00C9nerg\u00E9tique :<\/strong> Le chauffage solaire vous offre une plus grande ind\u00E9pendance \u00E9nerg\u00E9tique, surtout lorsque combin\u00E9 \u00E0 un stockage efficace de l'\u00E9nergie.<\/li>\r\n    <\/ul>\r\n\r\n    <h3>Co\u00FBt de l'Installation :<\/h3>\r\n    <p>Le co\u00FBt initial de l'installation d'un chauffage solaire d\u00E9pend de la taille de votre syst\u00E8me et de vos besoins en chauffage. Cependant, consid\u00E9rez cela comme un investissement durable avec des \u00E9conomies \u00E0 long terme.<\/p>\r\n\r\n    <h3>Processus d'Installation :<\/h3>\r\n    <p>Nos experts \u00E9valuent votre habitation, la disponibilit\u00E9 de l'ensoleillement, et con\u00E7oivent une installation sur mesure. Nous assurons une mise en place professionnelle pour garantir un chauffage solaire efficace.<\/p>\r\n\r\n    <p>Contactez-nous d\u00E8s maintenant pour d\u00E9couvrir comment le chauffage solaire peut contribuer \u00E0 un confort thermique tout en respectant l'environnement. Optez pour une solution durable et \u00E9conomique.<\/p>\r\n<\/section>\r\n"
    },
    {
      solution: "panneaux",
      content: "<header>\r\n    <h1>Panneaux Photovolta\u00EFques<\/h1>\r\n    <img src=\"..\/..\/..\/assets\/solutions\/photovoltaiques.png\" alt=\"Panneaux Photovolta\u00EFques - SOLUCE ENERGIE\">\r\n<\/header>\r\n\r\n<section>\r\n    <h2>Transformez la lumi\u00E8re du soleil en \u00E9lectricit\u00E9<\/h2>\r\n\r\n    <p>Les panneaux photovolta\u00EFques sont une solution innovante pour produire de l'\u00E9lectricit\u00E9 \u00E0 partir de l'\u00E9nergie solaire. SOLUCE ENERGIE propose des installations performantes pour une production d'\u00E9nergie propre et durable.<\/p>\r\n    \r\n    <h3>Avantages des Panneaux Photovolta\u00EFques :<\/h3>\r\n    <ul>\r\n        <li><strong>\u00C9nergie Renouvelable :<\/strong> Transformez la lumi\u00E8re du soleil en \u00E9lectricit\u00E9 propre et renouvelable pour alimenter votre habitation.<\/li>\r\n        <li><strong>R\u00E9duction de la Facture d'\u00C9lectricit\u00E9 :<\/strong> Profitez de l'autoconsommation d'\u00E9lectricit\u00E9 et r\u00E9duisez vos factures en utilisant l'\u00E9nergie solaire produite sur place.<\/li>\r\n        <li><strong>Impact Environnemental Faible :<\/strong> Contribuez \u00E0 la r\u00E9duction des \u00E9missions de CO2 en choisissant une source d'\u00E9nergie respectueuse de l'environnement.<\/li>\r\n        <li><strong>Autonomie \u00C9nerg\u00E9tique :<\/strong> Les panneaux photovolta\u00EFques offrent une plus grande ind\u00E9pendance \u00E9nerg\u00E9tique, notamment lorsqu'ils sont associ\u00E9s \u00E0 des solutions de stockage.<\/li>\r\n    <\/ul>\r\n\r\n    <h3>Co\u00FBt de l'Installation :<\/h3>\r\n    <p>Le co\u00FBt initial de l'installation de panneaux photovolta\u00EFques d\u00E9pend de la taille du syst\u00E8me et de la configuration de votre toit. Cependant, de nombreuses incitations fiscales peuvent rendre cette solution plus accessible.<\/p>\r\n\r\n    <h3>Processus d'Installation :<\/h3>\r\n    <p>Nos experts \u00E9valuent votre toit, la disponibilit\u00E9 de l'ensoleillement, et con\u00E7oivent une installation sur mesure. Nous assurons une mise en place professionnelle pour garantir une production d'\u00E9nergie optimale.<\/p>\r\n\r\n    <p>Contactez-nous d\u00E8s maintenant pour d\u00E9couvrir comment les panneaux photovolta\u00EFques peuvent transformer votre toit en une source d'\u00E9nergie propre et renouvelable. Faites le choix d'une solution durable pour votre consommation \u00E9lectrique.<\/p>\r\n<\/section>\r\n"
    },
    {
      solution: "murs",
      content: "<header>\r\n    <h1>Isolation des Murs<\/h1>\r\n    <img src=\"..\/..\/..\/assets\/solutions\/murs.png\" alt=\"Isolation des Murs - SOLUCE ENERGIE\">\r\n<\/header>\r\n\r\n<section>\r\n    <h2>Am\u00E9liorez le confort thermique de votre habitation<\/h2>\r\n\r\n    <p>L'isolation des murs est une \u00E9tape essentielle pour optimiser la performance \u00E9nerg\u00E9tique de votre maison. SOLUCE ENERGIE propose des solutions d'isolation efficaces pour garantir un confort thermique optimal tout au long de l'ann\u00E9e.<\/p>\r\n    \r\n    <h3>Avantages de l'Isolation des Murs :<\/h3>\r\n    <ul>\r\n        <li><strong>\u00C9conomies d'\u00C9nergie :<\/strong> R\u00E9duisez les pertes de chaleur et diminuez votre consommation \u00E9nerg\u00E9tique, ce qui se traduit par des \u00E9conomies sur vos factures de chauffage.<\/li>\r\n        <li><strong>Confort Thermique :<\/strong> Am\u00E9liorez le confort de votre int\u00E9rieur en maintenant une temp\u00E9rature stable et agr\u00E9able, \u00E9t\u00E9 comme hiver.<\/li>\r\n        <li><strong>Isolation Acoustique :<\/strong> En plus des b\u00E9n\u00E9fices thermiques, l'isolation des murs contribue \u00E0 r\u00E9duire les nuisances sonores ext\u00E9rieures et int\u00E9rieures.<\/li>\r\n        <li><strong>Valorisation de l'Habitat :<\/strong> Renforcez la valeur de votre propri\u00E9t\u00E9 en investissant dans des solutions d'isolation performantes et durables.<\/li>\r\n    <\/ul>\r\n\r\n    <h3>Co\u00FBt de l'Installation :<\/h3>\r\n    <p>Le co\u00FBt de l'isolation des murs d\u00E9pend du type d'isolant choisi, de la surface \u00E0 isoler et des sp\u00E9cificit\u00E9s de votre habitation. Cependant, consid\u00E9rez cela comme un investissement rentable sur le long terme.<\/p>\r\n\r\n    <h3>Processus d'Installation :<\/h3>\r\n    <p>Nos experts \u00E9valuent les caract\u00E9ristiques de vos murs, choisissent le mat\u00E9riau isolant adapt\u00E9, et effectuent une installation soign\u00E9e pour assurer une isolation optimale.<\/p>\r\n\r\n    <p>Contactez-nous d\u00E8s maintenant pour d\u00E9couvrir comment l'isolation des murs peut am\u00E9liorer l'efficacit\u00E9 \u00E9nerg\u00E9tique de votre habitation. Optez pour un environnement int\u00E9rieur confortable et \u00E9conome en \u00E9nergie.<\/p>\r\n<\/section>\r\n"
    },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public myData: DialogData) {}
  ngOnInit(){
    for(let solution of this.solutionData){
      if(this.myData.myData == solution.solution){
        this.contentToDisplay = solution.content
      }
    }
  }
}