import React from 'react'
import img1 from '../../assets/hotpost1.png';
import img2 from '../../assets/hotpost2.png';
import img3 from '../../assets/hotpost3.png';
import uiLogo from '../../assets/universityOfIbadan.png';
import ulLogo from '../../assets/universityOfLagos.png';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const HotNews = () => {
    const hotPosts = [
        {
            image : img1,
            uniLogo : uiLogo,
            uniName : "University Of Ibadan",
            postTime : 5,
            postHeader : "Navigating the Admission Process: From Application to Acceptance",
            postContent : `Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, lik`,
            readTime : 7,
            id : 1
        },
        {
            image : img2,
            uniLogo : uiLogo,
            uniName : "University Of Ibadan",
            postTime : 11,
            postHeader : "Navigating the Admission Process: From Application to Acceptance",
            postContent : `Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, lik`,
            readTime : 4,
            id : 2
        },
        {
            image : img3,
            uniLogo : ulLogo,
            uniName : "University Of Lagos",
            postTime : 1,
            postHeader : "Navigating the Admission Process: From Application to Acceptance",
            postContent : `Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, lik`,
            readTime : 5,
            id : 3
        },
        {
            image : img1,
            uniLogo : uiLogo,
            uniName : "University of Ibadan (DLC)",
            postTime : 11,
            postHeader : "Navigating the Admission Process: From Application to Acceptance",
            postContent : `Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
            Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
            Tidade homogisk, och metrofili och pöpygt, lik`,
            readTime : 6,
            id : 4
        }
    ]
  return (
    <div className='hot-news'>
        <h2>Hot News</h2>
        <div className="flex hot-news-flex">
            {hotPosts && hotPosts.map((hotPost) => (
                <div>
                    {hotPost.id < 5 && <div to="/">
                        <div className="hot-news-col">
                            <img src={hotPost.image} alt="" />
                            <div className="flex-center">
                                <img className="unilogo" src={hotPost.uniLogo} alt="" width={hotPost.uniLogo === ulLogo ? 30 : 45} height={hotPost.uniLogo === ulLogo ? 30 : 50} />
                                <p> {hotPost.uniName} ~ {hotPost.postTime} hours ago</p>
                            </div>
                            <h3>{ hotPost.postHeader}</h3>
                            <p>{ hotPost.postContent}</p>
                            <div className="flex-center">
                                <h6 style={{
                                    color : "#0a66c2",
                                    fontWeight : "600",
                                    paddingRight : "10px"
                                }}> Edu</h6>
                                <h6>
                                    {hotPost.readTime} mins read
                                </h6>
                            </div>
                        </div>
                    </div>}
                </div>
            ))}
        </div>
    </div>
  )
}

export default HotNews