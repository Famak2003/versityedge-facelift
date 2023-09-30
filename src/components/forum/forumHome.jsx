import { Link } from "react-router-dom"
import heroImage from '../../assets/PredictChance -Hero image.png'
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
                <img src={heroImage} alt="" />
            </div>
        </div>
    )
}

export default ForumHome