import React from 'react'
import img1 from '../../assets/blogPopular1.png';
import img2 from '../../assets/blogPopular2.png'
import img3 from '../../assets/blogPopular3.png'
import { Link } from 'react-router-dom';


const PopularNews = () => {
  const popularPosts = [
    {
      image : img1,
      class : "one",
      position : "left-0",
      header : "Latest Update",
      text : `VersityEdge gets a cool study space for group of students
              ade epid om neck homot ponade. Mabenat bätuhås om än  
              Travis naskapet inte gigare, fulparkerare varose. Rekoring
              vönyrade, ber. Preda arade antevare penyliga son.
              kontrar speren grafen. Benat den 
              ade epid om neck homot ponade. Mabenat bätuhås om än  
              Travis naskapet inte gigare, fulparkerare varose. Rekoring
              vönyrade, ber. Preda arade antevare penyliga son.
              kontrar speren grafen. Benat den ade epid om neck homot ponade.   
              Travis naskapet inte gigare, fulparkerare varose. Rekoring`,
      id : 1
    },
    {
      image : img2,
      class : "two",
      position : "right-0",
      header : "New Tutor Rooms",
      text : `VersityEdge gets a cool study space for group of students
              ade epid om neck homot ponade. Mabenat bätuhås om än  
              Travis naskapet inte gigare, fulparkerare varose. Rekoring
              vönyrade, ber. Preda arade antevare penyliga son.
              kontrar speren grafen. Benat den 
              ade epid om neck homot ponade. Mabenat bätuhås om än  
              Travis naskapet inte gigare, fulparkerare varose. Rekoring
              vönyrade, ber. Preda arade antevare penyliga son.
              kontrar speren grafen. Benat den ade epid om neck homot ponade.   
              Travis naskapet inte gigare, fulparkerare varose. Rekoring`,
      id : 2
    },
    {
      image : img3,
      class : "one",
      position : "left-0",
      header : "Latest Update",
      text : `VersityEdge gets a cool study space for group of students
              ade epid om neck homot ponade. Mabenat bätuhås om än  
              Travis naskapet inte gigare, fulparkerare varose. Rekoring
              vönyrade, ber. Preda arade antevare penyliga son.
              kontrar speren grafen. Benat den 
              ade epid om neck homot ponade. Mabenat bätuhås om än  
              Travis naskapet inte gigare, fulparkerare varose. Rekoring
              vönyrade, ber. Preda arade antevare penyliga son.
              kontrar speren grafen. Benat den ade epid om neck homot ponade.   
              Travis naskapet inte gigare, fulparkerare varose. Rekoring`,
      id : 3
    }
  ]
  return (
    <div className='popular-news'>
        <h2>Popular News</h2>
        { popularPosts && popularPosts.map((popularPost) => (
          <div className={popularPost.class} key={popularPost.id}>
          <Link to={"/blog/popular/:id"} className="section">
            <div className={popularPost.position} style={{
              backgroundImage : `url(${popularPost.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              minHeight : '370px',
              width : '70%',
              position : 'absolute',
              borderRadius : '20px'
            }}></div>
            <div className="text">
              <h3>{popularPost.header}</h3>
              <p> {popularPost.text}</p>
                <h5> Read more ...</h5>
            </div>
          </Link>
        </div>
        ))}
    </div>
  )
}

export default PopularNews