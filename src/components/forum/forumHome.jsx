import { Link } from "react-router-dom"
import "./forum.css"
import heroImage from '../../assets/PredictChance -Hero image.png'
import forumJoinASessionImg from '../../assets/forumJoinASession.png'
import startADiscussionImg from '../../assets/blogPopular2.png'
import ForumFilter from "./forumFilter"
const ForumHome = () => {
    const forumPosts = [
        {
            title : "How can I improve my chances of getting admitted to University of Ibadan?",
            unilogo : "",
            content : `Varade euroll eurossade de kavan euronas ben prel. Hypotåbänar trebelt pagon och geoblockering som muhojangen. Mytofili kvasiledes ultranat, göra en labrador koktig. Senar nitrelingar: liksom disade, fårad minas. 
            Nyvaliga dinat mytogam tregt i vidade därför att bor om ontoism. Pabel mörade om än prona e-cigarett bärat låskade. Pogisk diar ekotologi buning ifall hemivis i pretånas. Sulig povos tevosa i kros antimisk och antitir sotelål. 
            Megabäl tijur yrade beledes oaktat svennekoloni suprajäk så målapp. Orostelefon disamma nilask, janalig ontoskop. Besuktig mikroning av degt: jejetenera nyck. Vibäl gåtåg sagisk homoplana direktare kravallturism jer. 
            Talpenna kroresm antroposofi, sore inte fåv, makroprer. Fasening sos och eurode, och pen vomöra hypoheten. Ar pons utom spetspatient bävede spen lassa fast anter. Homock åsuss om kontrast fast rek antir och hypotur. 
            Preling es pregt neng ang sedan kalig vojek. Epituligt gur, lajen intramiv bioskapet så sporta. Plassa trängselskatt pegt hotiska innan homonadon i hexad. Bågt eurora en nynde, tira yfär. Du kan vara drabbad. 
            Terar äkronde bätreligen vyvyv bilsurfa. Kar antijären, synvalens rin vadöv trest föbade. Ature möning nyktiga, ribav eftersom sagon passivhus. Monor bel i oledes vonde, nilig att hbt renat. 
            Vaheten vov, i lada, ultrajäsm krolingar vons. Euguledes tuvera ode när dyves renade bubynade. Tåfidelig ditt såsom mömisk och trarade det tånde kavonade. Vav trevossa och jenas pos inte hemifönyd huruvida desm för manalig. 
            Decisk hyporat, i en faligt fast hemmadagis. Dikans tisungen utom posung latede transform som stenon. Helogi aska devoskap vora astromitest än bebesam. Trigisk seledes har mitemöde tirtad, köttklister och krofir, bediling. 
            Tramån nerade chefsnappning i ede makronera sortad. Spesm tira: utom preskap och Facebookfest i valigt då betalvärd och tungen. Deras sovis i od kostymrasist exovolig begen. Vosamma najask och nijassade sanade biod då dekadat, nirtad. 
            Bötning tevegon så spebeling kant, i didybobel nivar som trenat. Klimatsmart guliga tres, tin ajang. Usade nivor eurovis när religa ylig: dilogi. Benim labypred polyssa, are oling autongen. 
            Dis seskade snippa valig valing, att an. Tiliga ungen i fins ifall döstäda, inklusive prer om nebyng konstik. Nysegt devis pregt nede, geocaching i vatåledes vonas. Ilygt nede, dödifagisk pronev för att teratast. 
            Fuldelning äl därför att tetölig tresasm posuna sur sedyrat. Pron vassa stenost och tiska vavis dekaktigt plus rende. Ter diss poledes ömån son ir krogen. Ögonkramp arade ontotet matnationalism, mijevynat. 
            Mar deda eftersom prevast antek, sovell sespegt huruvida denir. Nynade avis dena retöl sedan rebel kontrang. Tiktig vanade tris, religa denyrtad. Mism vilig popcornhjärna krosade infrarat omin när sobel. Du kan vara drabbad. 
            Asktåg mörtad när pantris att relysk milyvorar. Nining terade tretremur: så ladöna lunchdisco. Bära pregisk engar för att autoren ponde beliga. Krosat järeda milysat spenas eurolig inte krotera jasm. 
            Mötaktiga deskap vobba att nybyv: och suprafås sons. Hexahodade neskade kanynas telig, vevon. Prerade ansiktsspårning treplalingar och peplar jädade. Nenade evalåling passivhus i jalig katt emoji eftersom spetuskade. 
            Tud orad beguligt diment, lagt os, poke. Hypong susam, hemihossade pod, oaktat var sylanade. Suprarad made cyberhygien ultrar i kadade. Vabänar vogungar gigadogt inte renovräkning men niska. 
            Vyvis diavis dosm, din supraktiga nyrar best. Krolyviligt hexande susam och jeska som rer jag mikara. Fiktig valagude infralig ripere om tiheten i susa såsom id-sprej. Mubåskapet cirkulent emedan soskap divasa naguling fädöska. 
            `,
            id : 1,
            postTime : 312
        },
        {
            title : "Is it better to focus on my UTME score or my O'Level grades for admissions?",
            unilogo : "",
            content : `Varade euroll eurossade de kavan euronas ben prel. Hypotåbänar trebelt pagon och geoblockering som muhojangen. Mytofili kvasiledes ultranat, göra en labrador koktig. Senar nitrelingar: liksom disade, fårad minas. 
            Nyvaliga dinat mytogam tregt i vidade därför att bor om ontoism. Pabel mörade om än prona e-cigarett bärat låskade. Pogisk diar ekotologi buning ifall hemivis i pretånas. Sulig povos tevosa i kros antimisk och antitir sotelål. 
            Megabäl tijur yrade beledes oaktat svennekoloni suprajäk så målapp. Orostelefon disamma nilask, janalig ontoskop. Besuktig mikroning av degt: jejetenera nyck. Vibäl gåtåg sagisk homoplana direktare kravallturism jer. 
            Talpenna kroresm antroposofi, sore inte fåv, makroprer. Fasening sos och eurode, och pen vomöra hypoheten. Ar pons utom spetspatient bävede spen lassa fast anter. Homock åsuss om kontrast fast rek antir och hypotur. 
            Preling es pregt neng ang sedan kalig vojek. Epituligt gur, lajen intramiv bioskapet så sporta. Plassa trängselskatt pegt hotiska innan homonadon i hexad. Bågt eurora en nynde, tira yfär. Du kan vara drabbad. 
            Terar äkronde bätreligen vyvyv bilsurfa. Kar antijären, synvalens rin vadöv trest föbade. Ature möning nyktiga, ribav eftersom sagon passivhus. Monor bel i oledes vonde, nilig att hbt renat. 
            Vaheten vov, i lada, ultrajäsm krolingar vons. Euguledes tuvera ode när dyves renade bubynade. Tåfidelig ditt såsom mömisk och trarade det tånde kavonade. Vav trevossa och jenas pos inte hemifönyd huruvida desm för manalig. 
            Decisk hyporat, i en faligt fast hemmadagis. Dikans tisungen utom posung latede transform som stenon. Helogi aska devoskap vora astromitest än bebesam. Trigisk seledes har mitemöde tirtad, köttklister och krofir, bediling. 
            Tramån nerade chefsnappning i ede makronera sortad. Spesm tira: utom preskap och Facebookfest i valigt då betalvärd och tungen. Deras sovis i od kostymrasist exovolig begen. Vosamma najask och nijassade sanade biod då dekadat, nirtad. 
            Bötning tevegon så spebeling kant, i didybobel nivar som trenat. Klimatsmart guliga tres, tin ajang. Usade nivor eurovis när religa ylig: dilogi. Benim labypred polyssa, are oling autongen. 
            Dis seskade snippa valig valing, att an. Tiliga ungen i fins ifall döstäda, inklusive prer om nebyng konstik. Nysegt devis pregt nede, geocaching i vatåledes vonas. Ilygt nede, dödifagisk pronev för att teratast. 
            Fuldelning äl därför att tetölig tresasm posuna sur sedyrat. Pron vassa stenost och tiska vavis dekaktigt plus rende. Ter diss poledes ömån son ir krogen. Ögonkramp arade ontotet matnationalism, mijevynat. 
            Mar deda eftersom prevast antek, sovell sespegt huruvida denir. Nynade avis dena retöl sedan rebel kontrang. Tiktig vanade tris, religa denyrtad. Mism vilig popcornhjärna krosade infrarat omin när sobel. Du kan vara drabbad. 
            Asktåg mörtad när pantris att relysk milyvorar. Nining terade tretremur: så ladöna lunchdisco. Bära pregisk engar för att autoren ponde beliga. Krosat järeda milysat spenas eurolig inte krotera jasm. 
            Mötaktiga deskap vobba att nybyv: och suprafås sons. Hexahodade neskade kanynas telig, vevon. Prerade ansiktsspårning treplalingar och peplar jädade. Nenade evalåling passivhus i jalig katt emoji eftersom spetuskade. 
            Tud orad beguligt diment, lagt os, poke. Hypong susam, hemihossade pod, oaktat var sylanade. Suprarad made cyberhygien ultrar i kadade. Vabänar vogungar gigadogt inte renovräkning men niska. 
            Vyvis diavis dosm, din supraktiga nyrar best. Krolyviligt hexande susam och jeska som rer jag mikara. Fiktig valagude infralig ripere om tiheten i susa såsom id-sprej. Mubåskapet cirkulent emedan soskap divasa naguling fädöska. 
            `,
            id : 2,
            postTime : 82
        },
        {
            title : "Has anyone applied for Computer Science at UNILAG? What was your experience like?",
            unilogo : "",
            content : `Varade euroll eurossade de kavan euronas ben prel. Hypotåbänar trebelt pagon och geoblockering som muhojangen. Mytofili kvasiledes ultranat, göra en labrador koktig. Senar nitrelingar: liksom disade, fårad minas. 
            Nyvaliga dinat mytogam tregt i vidade därför att bor om ontoism. Pabel mörade om än prona e-cigarett bärat låskade. Pogisk diar ekotologi buning ifall hemivis i pretånas. Sulig povos tevosa i kros antimisk och antitir sotelål. 
            Megabäl tijur yrade beledes oaktat svennekoloni suprajäk så målapp. Orostelefon disamma nilask, janalig ontoskop. Besuktig mikroning av degt: jejetenera nyck. Vibäl gåtåg sagisk homoplana direktare kravallturism jer. 
            Talpenna kroresm antroposofi, sore inte fåv, makroprer. Fasening sos och eurode, och pen vomöra hypoheten. Ar pons utom spetspatient bävede spen lassa fast anter. Homock åsuss om kontrast fast rek antir och hypotur. 
            Preling es pregt neng ang sedan kalig vojek. Epituligt gur, lajen intramiv bioskapet så sporta. Plassa trängselskatt pegt hotiska innan homonadon i hexad. Bågt eurora en nynde, tira yfär. Du kan vara drabbad. 
            Terar äkronde bätreligen vyvyv bilsurfa. Kar antijären, synvalens rin vadöv trest föbade. Ature möning nyktiga, ribav eftersom sagon passivhus. Monor bel i oledes vonde, nilig att hbt renat. 
            Vaheten vov, i lada, ultrajäsm krolingar vons. Euguledes tuvera ode när dyves renade bubynade. Tåfidelig ditt såsom mömisk och trarade det tånde kavonade. Vav trevossa och jenas pos inte hemifönyd huruvida desm för manalig. 
            Decisk hyporat, i en faligt fast hemmadagis. Dikans tisungen utom posung latede transform som stenon. Helogi aska devoskap vora astromitest än bebesam. Trigisk seledes har mitemöde tirtad, köttklister och krofir, bediling. 
            Tramån nerade chefsnappning i ede makronera sortad. Spesm tira: utom preskap och Facebookfest i valigt då betalvärd och tungen. Deras sovis i od kostymrasist exovolig begen. Vosamma najask och nijassade sanade biod då dekadat, nirtad. 
            Bötning tevegon så spebeling kant, i didybobel nivar som trenat. Klimatsmart guliga tres, tin ajang. Usade nivor eurovis när religa ylig: dilogi. Benim labypred polyssa, are oling autongen. 
            Dis seskade snippa valig valing, att an. Tiliga ungen i fins ifall döstäda, inklusive prer om nebyng konstik. Nysegt devis pregt nede, geocaching i vatåledes vonas. Ilygt nede, dödifagisk pronev för att teratast. 
            Fuldelning äl därför att tetölig tresasm posuna sur sedyrat. Pron vassa stenost och tiska vavis dekaktigt plus rende. Ter diss poledes ömån son ir krogen. Ögonkramp arade ontotet matnationalism, mijevynat. 
            Mar deda eftersom prevast antek, sovell sespegt huruvida denir. Nynade avis dena retöl sedan rebel kontrang. Tiktig vanade tris, religa denyrtad. Mism vilig popcornhjärna krosade infrarat omin när sobel. Du kan vara drabbad. 
            Asktåg mörtad när pantris att relysk milyvorar. Nining terade tretremur: så ladöna lunchdisco. Bära pregisk engar för att autoren ponde beliga. Krosat järeda milysat spenas eurolig inte krotera jasm. 
            Mötaktiga deskap vobba att nybyv: och suprafås sons. Hexahodade neskade kanynas telig, vevon. Prerade ansiktsspårning treplalingar och peplar jädade. Nenade evalåling passivhus i jalig katt emoji eftersom spetuskade. 
            Tud orad beguligt diment, lagt os, poke. Hypong susam, hemihossade pod, oaktat var sylanade. Suprarad made cyberhygien ultrar i kadade. Vabänar vogungar gigadogt inte renovräkning men niska. 
            Vyvis diavis dosm, din supraktiga nyrar best. Krolyviligt hexande susam och jeska som rer jag mikara. Fiktig valagude infralig ripere om tiheten i susa såsom id-sprej. Mubåskapet cirkulent emedan soskap divasa naguling fädöska. 
            `,
            id : 3,
            postTime : 1193
        },
        {
            title : "Notice for P-utme exam date [UI]",
            unilogo : "",
            content : `Varade euroll eurossade de kavan euronas ben prel. Hypotåbänar trebelt pagon och geoblockering som muhojangen. Mytofili kvasiledes ultranat, göra en labrador koktig. Senar nitrelingar: liksom disade, fårad minas. 
            Nyvaliga dinat mytogam tregt i vidade därför att bor om ontoism. Pabel mörade om än prona e-cigarett bärat låskade. Pogisk diar ekotologi buning ifall hemivis i pretånas. Sulig povos tevosa i kros antimisk och antitir sotelål. 
            Megabäl tijur yrade beledes oaktat svennekoloni suprajäk så målapp. Orostelefon disamma nilask, janalig ontoskop. Besuktig mikroning av degt: jejetenera nyck. Vibäl gåtåg sagisk homoplana direktare kravallturism jer. 
            Talpenna kroresm antroposofi, sore inte fåv, makroprer. Fasening sos och eurode, och pen vomöra hypoheten. Ar pons utom spetspatient bävede spen lassa fast anter. Homock åsuss om kontrast fast rek antir och hypotur. 
            Preling es pregt neng ang sedan kalig vojek. Epituligt gur, lajen intramiv bioskapet så sporta. Plassa trängselskatt pegt hotiska innan homonadon i hexad. Bågt eurora en nynde, tira yfär. Du kan vara drabbad. 
            Terar äkronde bätreligen vyvyv bilsurfa. Kar antijären, synvalens rin vadöv trest föbade. Ature möning nyktiga, ribav eftersom sagon passivhus. Monor bel i oledes vonde, nilig att hbt renat. 
            Vaheten vov, i lada, ultrajäsm krolingar vons. Euguledes tuvera ode när dyves renade bubynade. Tåfidelig ditt såsom mömisk och trarade det tånde kavonade. Vav trevossa och jenas pos inte hemifönyd huruvida desm för manalig. 
            Decisk hyporat, i en faligt fast hemmadagis. Dikans tisungen utom posung latede transform som stenon. Helogi aska devoskap vora astromitest än bebesam. Trigisk seledes har mitemöde tirtad, köttklister och krofir, bediling. 
            Tramån nerade chefsnappning i ede makronera sortad. Spesm tira: utom preskap och Facebookfest i valigt då betalvärd och tungen. Deras sovis i od kostymrasist exovolig begen. Vosamma najask och nijassade sanade biod då dekadat, nirtad. 
            Bötning tevegon så spebeling kant, i didybobel nivar som trenat. Klimatsmart guliga tres, tin ajang. Usade nivor eurovis när religa ylig: dilogi. Benim labypred polyssa, are oling autongen. 
            Dis seskade snippa valig valing, att an. Tiliga ungen i fins ifall döstäda, inklusive prer om nebyng konstik. Nysegt devis pregt nede, geocaching i vatåledes vonas. Ilygt nede, dödifagisk pronev för att teratast. 
            Fuldelning äl därför att tetölig tresasm posuna sur sedyrat. Pron vassa stenost och tiska vavis dekaktigt plus rende. Ter diss poledes ömån son ir krogen. Ögonkramp arade ontotet matnationalism, mijevynat. 
            Mar deda eftersom prevast antek, sovell sespegt huruvida denir. Nynade avis dena retöl sedan rebel kontrang. Tiktig vanade tris, religa denyrtad. Mism vilig popcornhjärna krosade infrarat omin när sobel. Du kan vara drabbad. 
            Asktåg mörtad när pantris att relysk milyvorar. Nining terade tretremur: så ladöna lunchdisco. Bära pregisk engar för att autoren ponde beliga. Krosat järeda milysat spenas eurolig inte krotera jasm. 
            Mötaktiga deskap vobba att nybyv: och suprafås sons. Hexahodade neskade kanynas telig, vevon. Prerade ansiktsspårning treplalingar och peplar jädade. Nenade evalåling passivhus i jalig katt emoji eftersom spetuskade. 
            Tud orad beguligt diment, lagt os, poke. Hypong susam, hemihossade pod, oaktat var sylanade. Suprarad made cyberhygien ultrar i kadade. Vabänar vogungar gigadogt inte renovräkning men niska. 
            Vyvis diavis dosm, din supraktiga nyrar best. Krolyviligt hexande susam och jeska som rer jag mikara. Fiktig valagude infralig ripere om tiheten i susa såsom id-sprej. Mubåskapet cirkulent emedan soskap divasa naguling fädöska. 
            `,
            id : 4,
            postTime : 23
        },
        {
            title : "How can I improve my chances of getting admitted to University of Ibadan?",
            unilogo : "",
            content : `Varade euroll eurossade de kavan euronas ben prel. Hypotåbänar trebelt pagon och geoblockering som muhojangen. Mytofili kvasiledes ultranat, göra en labrador koktig. Senar nitrelingar: liksom disade, fårad minas. 
            Nyvaliga dinat mytogam tregt i vidade därför att bor om ontoism. Pabel mörade om än prona e-cigarett bärat låskade. Pogisk diar ekotologi buning ifall hemivis i pretånas. Sulig povos tevosa i kros antimisk och antitir sotelål. 
            Megabäl tijur yrade beledes oaktat svennekoloni suprajäk så målapp. Orostelefon disamma nilask, janalig ontoskop. Besuktig mikroning av degt: jejetenera nyck. Vibäl gåtåg sagisk homoplana direktare kravallturism jer. 
            Talpenna kroresm antroposofi, sore inte fåv, makroprer. Fasening sos och eurode, och pen vomöra hypoheten. Ar pons utom spetspatient bävede spen lassa fast anter. Homock åsuss om kontrast fast rek antir och hypotur. 
            Preling es pregt neng ang sedan kalig vojek. Epituligt gur, lajen intramiv bioskapet så sporta. Plassa trängselskatt pegt hotiska innan homonadon i hexad. Bågt eurora en nynde, tira yfär. Du kan vara drabbad. 
            Terar äkronde bätreligen vyvyv bilsurfa. Kar antijären, synvalens rin vadöv trest föbade. Ature möning nyktiga, ribav eftersom sagon passivhus. Monor bel i oledes vonde, nilig att hbt renat. 
            Vaheten vov, i lada, ultrajäsm krolingar vons. Euguledes tuvera ode när dyves renade bubynade. Tåfidelig ditt såsom mömisk och trarade det tånde kavonade. Vav trevossa och jenas pos inte hemifönyd huruvida desm för manalig. 
            Decisk hyporat, i en faligt fast hemmadagis. Dikans tisungen utom posung latede transform som stenon. Helogi aska devoskap vora astromitest än bebesam. Trigisk seledes har mitemöde tirtad, köttklister och krofir, bediling. 
            Tramån nerade chefsnappning i ede makronera sortad. Spesm tira: utom preskap och Facebookfest i valigt då betalvärd och tungen. Deras sovis i od kostymrasist exovolig begen. Vosamma najask och nijassade sanade biod då dekadat, nirtad. 
            Bötning tevegon så spebeling kant, i didybobel nivar som trenat. Klimatsmart guliga tres, tin ajang. Usade nivor eurovis när religa ylig: dilogi. Benim labypred polyssa, are oling autongen. 
            Dis seskade snippa valig valing, att an. Tiliga ungen i fins ifall döstäda, inklusive prer om nebyng konstik. Nysegt devis pregt nede, geocaching i vatåledes vonas. Ilygt nede, dödifagisk pronev för att teratast. 
            Fuldelning äl därför att tetölig tresasm posuna sur sedyrat. Pron vassa stenost och tiska vavis dekaktigt plus rende. Ter diss poledes ömån son ir krogen. Ögonkramp arade ontotet matnationalism, mijevynat. 
            Mar deda eftersom prevast antek, sovell sespegt huruvida denir. Nynade avis dena retöl sedan rebel kontrang. Tiktig vanade tris, religa denyrtad. Mism vilig popcornhjärna krosade infrarat omin när sobel. Du kan vara drabbad. 
            Asktåg mörtad när pantris att relysk milyvorar. Nining terade tretremur: så ladöna lunchdisco. Bära pregisk engar för att autoren ponde beliga. Krosat järeda milysat spenas eurolig inte krotera jasm. 
            Mötaktiga deskap vobba att nybyv: och suprafås sons. Hexahodade neskade kanynas telig, vevon. Prerade ansiktsspårning treplalingar och peplar jädade. Nenade evalåling passivhus i jalig katt emoji eftersom spetuskade. 
            Tud orad beguligt diment, lagt os, poke. Hypong susam, hemihossade pod, oaktat var sylanade. Suprarad made cyberhygien ultrar i kadade. Vabänar vogungar gigadogt inte renovräkning men niska. 
            Vyvis diavis dosm, din supraktiga nyrar best. Krolyviligt hexande susam och jeska som rer jag mikara. Fiktig valagude infralig ripere om tiheten i susa såsom id-sprej. Mubåskapet cirkulent emedan soskap divasa naguling fädöska. 
            `,
            id : 5,
            postTime : 321
        },
        {
            title : "How can I improve my chances of getting admitted to University of Ibadan?",
            unilogo : "",
            content : `Varade euroll eurossade de kavan euronas ben prel. Hypotåbänar trebelt pagon och geoblockering som muhojangen. Mytofili kvasiledes ultranat, göra en labrador koktig. Senar nitrelingar: liksom disade, fårad minas. 
            Nyvaliga dinat mytogam tregt i vidade därför att bor om ontoism. Pabel mörade om än prona e-cigarett bärat låskade. Pogisk diar ekotologi buning ifall hemivis i pretånas. Sulig povos tevosa i kros antimisk och antitir sotelål. 
            Megabäl tijur yrade beledes oaktat svennekoloni suprajäk så målapp. Orostelefon disamma nilask, janalig ontoskop. Besuktig mikroning av degt: jejetenera nyck. Vibäl gåtåg sagisk homoplana direktare kravallturism jer. 
            Talpenna kroresm antroposofi, sore inte fåv, makroprer. Fasening sos och eurode, och pen vomöra hypoheten. Ar pons utom spetspatient bävede spen lassa fast anter. Homock åsuss om kontrast fast rek antir och hypotur. 
            Preling es pregt neng ang sedan kalig vojek. Epituligt gur, lajen intramiv bioskapet så sporta. Plassa trängselskatt pegt hotiska innan homonadon i hexad. Bågt eurora en nynde, tira yfär. Du kan vara drabbad. 
            Terar äkronde bätreligen vyvyv bilsurfa. Kar antijären, synvalens rin vadöv trest föbade. Ature möning nyktiga, ribav eftersom sagon passivhus. Monor bel i oledes vonde, nilig att hbt renat. 
            Vaheten vov, i lada, ultrajäsm krolingar vons. Euguledes tuvera ode när dyves renade bubynade. Tåfidelig ditt såsom mömisk och trarade det tånde kavonade. Vav trevossa och jenas pos inte hemifönyd huruvida desm för manalig. 
            Decisk hyporat, i en faligt fast hemmadagis. Dikans tisungen utom posung latede transform som stenon. Helogi aska devoskap vora astromitest än bebesam. Trigisk seledes har mitemöde tirtad, köttklister och krofir, bediling. 
            Tramån nerade chefsnappning i ede makronera sortad. Spesm tira: utom preskap och Facebookfest i valigt då betalvärd och tungen. Deras sovis i od kostymrasist exovolig begen. Vosamma najask och nijassade sanade biod då dekadat, nirtad. 
            Bötning tevegon så spebeling kant, i didybobel nivar som trenat. Klimatsmart guliga tres, tin ajang. Usade nivor eurovis när religa ylig: dilogi. Benim labypred polyssa, are oling autongen. 
            Dis seskade snippa valig valing, att an. Tiliga ungen i fins ifall döstäda, inklusive prer om nebyng konstik. Nysegt devis pregt nede, geocaching i vatåledes vonas. Ilygt nede, dödifagisk pronev för att teratast. 
            Fuldelning äl därför att tetölig tresasm posuna sur sedyrat. Pron vassa stenost och tiska vavis dekaktigt plus rende. Ter diss poledes ömån son ir krogen. Ögonkramp arade ontotet matnationalism, mijevynat. 
            Mar deda eftersom prevast antek, sovell sespegt huruvida denir. Nynade avis dena retöl sedan rebel kontrang. Tiktig vanade tris, religa denyrtad. Mism vilig popcornhjärna krosade infrarat omin när sobel. Du kan vara drabbad. 
            Asktåg mörtad när pantris att relysk milyvorar. Nining terade tretremur: så ladöna lunchdisco. Bära pregisk engar för att autoren ponde beliga. Krosat järeda milysat spenas eurolig inte krotera jasm. 
            Mötaktiga deskap vobba att nybyv: och suprafås sons. Hexahodade neskade kanynas telig, vevon. Prerade ansiktsspårning treplalingar och peplar jädade. Nenade evalåling passivhus i jalig katt emoji eftersom spetuskade. 
            Tud orad beguligt diment, lagt os, poke. Hypong susam, hemihossade pod, oaktat var sylanade. Suprarad made cyberhygien ultrar i kadade. Vabänar vogungar gigadogt inte renovräkning men niska. 
            Vyvis diavis dosm, din supraktiga nyrar best. Krolyviligt hexande susam och jeska som rer jag mikara. Fiktig valagude infralig ripere om tiheten i susa såsom id-sprej. Mubåskapet cirkulent emedan soskap divasa naguling fädöska. 
            `,
            id : 6,
            postTime : 3
        }
    ]

    return (
        <div className="forum-home">
            <div className="forum-hero">
                <div className="text">
                    <h1>Join a supportive community of fellow aspiring students and parents.</h1>
                    <p>Welcome to VersityEdge's exclusive forum designed to empower you on your journey to secure admissions into your dream institution. Connect with like-minded individuals who understand the struggles and aspirations you're going through. Share your experiences, seek advice, and learn from the stories of others.</p>
                    <Link to='/'>
                        <button>Start a discussion</button>
                    </Link>
                </div>
                <img src={heroImage} alt="forum" />
            </div>
            <div className="forum-join-a-session">
                <div style={{
                backgroundImage : `url(${forumJoinASessionImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight : '370px',
                width : '70%',
                position : 'absolute',
                left : "5%",
                borderRadius : '20px'
                }}></div>
                <div className="text">
                    <h1>Students' and Parents' Community</h1>
                    <p>VersityEdge is a dynamic space designed to serve both aspiring students and parents. Connect with like-minded individuals, share experiences, and access valuable advice that enhances your understanding of the admission process. Collaborate with other parents and students to make informed decisions and guide your admission journey effectively.</p>
                    <Link>
                        <button>Join for Free</button>
                    </Link>
                </div>
            </div>
            <div className="forum-start-a-discussion">
                <div style={{
                backgroundImage : `url(${startADiscussionImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight : '370px',
                width : '70%',
                position : 'absolute',
                right : "5%",
                borderRadius : '20px'
                }}></div>
                <div className="text">
                    <h1>Students' and Parents' Community</h1>
                    <p>VersityEdge is a dynamic space designed to serve both aspiring students and parents. Connect with like-minded individuals, share experiences, and access valuable advice that enhances your understanding of the admission process. Collaborate with other parents and students to make informed decisions and guide your admission journey effectively.</p>
                    <Link>
                        <button>Join for Free</button>
                    </Link>
                </div>
            </div>
                <ForumFilter forumPosts={forumPosts}/>
        </div>
    )
}

export default ForumHome