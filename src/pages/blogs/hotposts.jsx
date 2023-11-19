import React from "react";
// import img1 from "../../assets/hotpost1.png";
// import img2 from "../../assets/hotpost2.png";
import img3 from "../../assets/hotpost3.png";
import uiLogo from "../../assets/universityOfIbadan.png";
import ulLogo from "../../assets/universityOfLagos.png";
import useFetch from "./../../components/useFetch/useFetch";
import { Link } from "react-router-dom";
const HotNews = ({ baseURL }) => {
  const { data: hotPosts, error, isPending } = useFetch(baseURL + "blog/posts");
  return (
    <div className="hot-news" id="hotnews">
      <h2>Hot News</h2>
      <div className="hot-news-flex flex">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {!hotPosts
          ? ""
          : hotPosts.map((hotPost) => (
              <div key={hotPost.id}>
                {hotPost.id < 7 && (
                  <Link to="/">
                    <div className="hot-news-col">
                      <img
                        src={!hotPost.img_url ? img3 : hotPost.img_url}
                        alt=""
                      />
                      <div className="flex-center">
                        <img
                          className="unilogo"
                          src={!hotPost.uniLogo ? uiLogo : hotPost.uniLogo}
                          alt=""
                          width={hotPost.uniLogo === ulLogo ? 30 : 45}
                          height={hotPost.uniLogo === ulLogo ? 30 : 50}
                        />
                        <p>
                          {" "}
                          {!hotPost.uniName
                            ? "University news"
                            : hotPost.uniName}{" "}
                          ~ {!hotPost.postTime ? "Unknown" : hotPost.postTime}{" "}
                          hours ago
                        </p>
                      </div>
                      <h3>{hotPost.title}</h3>
                      <p>{hotPost.body}</p>
                      <div className="flex-center">
                        <h6
                          style={{
                            color: "#0a66c2",
                            fontWeight: "600",
                            paddingRight: "10px",
                          }}
                        >
                          {!hotPost.category ? "UTME" : hotPost.category}
                        </h6>
                        <h6>
                          {!hotPost.readTime ? "5" : hotPost.readTime} mins read
                        </h6>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default HotNews;
