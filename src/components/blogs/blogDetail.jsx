import img1 from './../../assets/blog-hero4.jpeg'
import Comments from './comments'
const Blog = () => {
  const blogDetail = {
    image : img1,
    postTime : 5,
    postHeader : "Navigating the Admission Process: From Application to Acceptance",
    postContent : `Varade euroll eurossade de kavan euronas ben prel. Hypotåbänar trebelt pagon och geoblockering som muhojangen. Mytofili kvasiledes ultranat, göra en labrador koktig. Senar nitrelingar: liksom disade, fårad minas. 
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
    postComment : 1000,
    postImpressions : 2300,
    readTime : 7,
    author : "Oyebunchi Chantel",
    authorPosition : "COO, Versity Edge",
    id : 1
  }
    return (
      <div class="blog">
        <div className="blog-hero">
          <div className="blog-hero-text">
            <h2 className="blog-hero-header">{blogDetail.postHeader}</h2>
            <div className=" blog-author">
              <img src={blogDetail.image} alt="Author"/>
              <div className="">
                <h5>{blogDetail.author}</h5>
                <h6>{blogDetail.authorPosition ? blogDetail.authorPosition : "Author"}</h6>
              </div>
            </div>
          </div>
          <div className='blog-hero-imgs'>
            <div className="blog-img img-12-deg" style={{
              backgroundImage : `url(${blogDetail.image})`,
            }}></div>
            <div className="blog-img img-6-deg" style={{
              backgroundImage : `url(${blogDetail.image})`,
            }}></div>
            <div className="blog-img img-0-deg" style={{
              backgroundImage : `url(${blogDetail.image})`,
            }}></div>
          </div>
        </div>
        <div className="impression-section">
          <div className="read-time"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g clipPath="url(#clip0_1349_912)">
            <path d="M16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6C14.7348 6 14.4804 6.10536 14.2929 6.29289C14.1054 6.48043 14 6.73478 14 7V18C14.0001 18.1763 14.0467 18.3494 14.1352 18.5018C14.2237 18.6542 14.3509 18.7806 14.504 18.868L21.504 22.868C21.7337 22.9921 22.0029 23.0215 22.254 22.9498C22.5051 22.8782 22.7181 22.7111 22.8477 22.4844C22.9772 22.2577 23.013 21.9893 22.9473 21.7366C22.8815 21.4839 22.7196 21.2669 22.496 21.132L16 17.42V7Z" fill="#6E7070"/>
            <path d="M16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32ZM30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16Z" fill="#6E7070"/>
          </g>
      <defs>
        <clipPath id="clip0_1349_912">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
{blogDetail.readTime  < 60 ? <h6> {blogDetail.readTime} mins</h6> : <h6> {blogDetail.readTime / 60} hours</h6>}</div>
          <div className="imp">
            <h6 className='impre'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M24 9.33329C24.7227 9.33329 25.3333 9.94396 25.3333 10.6666V20C25.3333 20.7226 24.7227 21.3333 24 21.3333H12.228L12 21.5613V21.3333H8C7.27733 21.3333 6.66667 20.7226 6.66667 20V10.6666C6.66667 9.94396 7.27733 9.33329 8 9.33329H24ZM24 6.66663H8C5.8 6.66663 4 8.46663 4 10.6666V20C4 22.2 5.8 24 8 24H9.33333V28L13.3333 24H24C26.2 24 28 22.2 28 20V10.6666C28 8.46663 26.2 6.66663 24 6.66663Z" fill="#0A66C2"/>
</svg>{blogDetail.postComment > 999 ? `${blogDetail.postComment / 1000}k` : `${blogDetail.postComment}`} comments</h6>
            <h6 className='impre'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M17.0086 4.47131H14.9913C14.1345 4.47131 13.4399 5.16587 13.4399 6.02265V25.9773C13.4399 26.8341 14.1345 27.5286 14.9913 27.5286H17.0086C17.8654 27.5286 18.5599 26.8341 18.5599 25.9773V6.02265C18.5599 5.16587 17.8654 4.47131 17.0086 4.47131Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M26.116 17.366H24.0987C23.2419 17.366 22.5474 18.0605 22.5474 18.9173V25.9773C22.5474 26.8341 23.2419 27.5286 24.0987 27.5286H26.116C26.9728 27.5286 27.6674 26.8341 27.6674 25.9773V18.9173C27.6674 18.0605 26.9728 17.366 26.116 17.366Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.90192 11.048H5.88459C5.02781 11.048 4.33325 11.7425 4.33325 12.5993V25.9773C4.33325 26.8341 5.02781 27.5286 5.88459 27.5286H7.90192C8.7587 27.5286 9.45325 26.8341 9.45325 25.9773V12.5993C9.45325 11.7425 8.7587 11.048 7.90192 11.048Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
</svg>{blogDetail.postImpressions > 999 ? `${blogDetail.postImpressions / 1000}k` : `${blogDetail.postImpressions}`} impressions</h6>
          </div>
        </div>
        <p className="blog-contents">{blogDetail.postContent}</p>
        <Comments />
      </div>
    )
  }
  
  export default Blog