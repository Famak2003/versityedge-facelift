// import React from 'react';
import avatar from "./../../assets/avatar.png";

const Comments = () => {
  const comments = [
    {
      id: 1,
      comment: `Bioplaligt orostelefon trefåktig huruvida dojasm. Suprar förpappring jag ultrarar madade. Mikrolig anteska det vill säga fårade viska. 
      Dylogi tasade oaktat assa proregisk. Hysam hul polytrement tediktisk. Red antende unera dede. Du kan vara drabbad. 
      Saktig fulbryt, äjosat multifyrar. Spen posm, opp, religt. Krovigisk sojide sedan diafas avon. 
      `,
      commentAuthor: {
        name: "Kemi Atoke",
        image: avatar,
      },
      postDate: "21st April",
    },
    {
      id: 2,
      comment: `Bioplaligt orostelefon trefåktig huruvida dojasm. Suprar förpappring jag ultrarar madade. Mikrolig anteska det vill säga fårade viska. 
      Dylogi tasade oaktat assa proregisk. Hysam hul polytrement tediktisk. Red antende unera dede. Du kan vara drabbad. 
      Saktig fulbryt, äjosat multifyrar. Spen posm, opp, religt. Krovigisk sojide sedan diafas avon. 
      `,
      commentAuthor: {
        name: "Kemi Atoke",
        image: avatar,
      },
      postDate: "21st April",
    },
    {
      id: 3,
      comment: `Bioplaligt orostelefon trefåktig huruvida dojasm. Suprar förpappring jag ultrarar madade. Mikrolig anteska det vill säga fårade viska. 
      Dylogi tasade oaktat assa proregisk. Hysam hul polytrement tediktisk. Red antende unera dede. Du kan vara drabbad. 
      Saktig fulbryt, äjosat multifyrar. Spen posm, opp, religt. Krovigisk sojide sedan diafas avon. 
      `,
      commentAuthor: {
        name: "Kemi Atoke",
        image: avatar,
      },
      postDate: "21st April",
    },
    {
      id: 4,
      comment: `Bioplaligt orostelefon trefåktig huruvida dojasm. Suprar förpappring jag ultrarar madade. Mikrolig anteska det vill säga fårade viska. 
      Dylogi tasade oaktat assa proregisk. Hysam hul polytrement tediktisk. Red antende unera dede. Du kan vara drabbad. 
      Saktig fulbryt, äjosat multifyrar. Spen posm, opp, religt. Krovigisk sojide sedan diafas avon. 
      `,
      commentAuthor: {
        name: "Kemi Atoke",
        image: avatar,
      },
      postDate: "21st April",
    },
    {
      id: 5,
      comment: `Bioplaligt orostelefon trefåktig huruvida dojasm. Suprar förpappring jag ultrarar madade. Mikrolig anteska det vill säga fårade viska. 
      Dylogi tasade oaktat assa proregisk. Hysam hul polytrement tediktisk. Red antende unera dede. Du kan vara drabbad. 
      Saktig fulbryt, äjosat multifyrar. Spen posm, opp, religt. Krovigisk sojide sedan diafas avon. 
      `,
      commentAuthor: {
        name: "Kemi Atoke",
        image: avatar,
      },
      postDate: "21st April",
    },
  ];
  return (
    <div className="comment-section">
      <div className="commented">
        <h1>Comments</h1>
        <div className="comments">
          {comments &&
            comments.map((comment) => (
              <div key={comment.id}>
                <div className="flex comment">
                  <img src={comment.commentAuthor.image} alt="" />
                  <div className="">
                    <h5>{comment.commentAuthor.name}</h5>
                    <h6>{comment.postDate}</h6>
                  </div>
                </div>
                <div>{comment.comment}</div>
              </div>
            ))}
        </div>
        <form action="" name="comment-form" className="mobile-comment-form">
          <input type="text" placeholder="Write a comment..." />
          <button>send</button>
        </form>
      </div>
      <form className="comment-form" name="comment-form" action="">
        <h1>Add a comment</h1>
        <textarea placeholder="Write a comment..."></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Comments;
