import { Link } from "react-router-dom"
import "./forum.css"
import heroImage from '../../assets/PredictChance -Hero image.png'
import forumJoinASessionImg from '../../assets/forumJoinASession.png'
import startADiscussionImg from '../../assets/blogPopular2.png'
const ForumHome = () => {

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
        </div>
    )
}

export default ForumHome