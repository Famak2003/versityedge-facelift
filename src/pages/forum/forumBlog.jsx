import Comments from "../blogs/comments";
// import { useParams } from "react-router-dom";
const ForumBlog = () => {
  //   console.log(useParams());
  const forumPost = {
    title:
      "How can I improve my chances of getting admitted to University of Ibadan?",
    uni: "University of Ibadan",
    uniLogo: "",
    content: `Varade euroll eurossade de kavan euronas ben prel. Hypotåbänar trebelt pagon och geoblockering som muhojangen. Mytofili kvasiledes ultranat, göra en labrador koktig. Senar nitrelingar: liksom disade, fårad minas. 
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
    id: 6,
    postTime: 31,
  };
  return (
    <div className="forum-blog">
      <div className="blog-header">
        <div className="text">
          <h1>{forumPost.title}</h1>
          <div className="uni-section">
            <div className="unilogo-sm"></div>
            <div className="text-0">
              <h4>{forumPost.uni}</h4>
              <h6>
                {forumPost.postTime > 168
                  ? `${Math.floor(forumPost.postTime / 168)} weeks`
                  : `${Math.floor(forumPost.postTime / 24)} days`}{" "}
                ago
              </h6>
            </div>
          </div>
        </div>
        <div className="logo">
          <div className="unilogo-lg img-6-deg"></div>
          <div className="unilogo-lg img-12-deg"></div>
          <div className="unilogo-lg"></div>
        </div>
      </div>
      <div className="mini-section">
        <h4>7 mins read</h4>
        <div className="share-impressions-section">
          <h4>{forumPost.id}k comments</h4>
          <button className="share-btn">share</button>
        </div>
      </div>
      <div className="content">{forumPost.content}</div>
      <Comments />
    </div>
  );
};

export default ForumBlog;
