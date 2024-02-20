function Blog({ blogContent }) {
  return (
    <ul className=" blogContent">
      {blogContent.map((obj, idx) => (
        <li className=" w-[18rem]">
          <figure className=" w-full">
            <img
              className=" w-full object-contain"
              src={obj.img}
              alt={obj.title}
            />
            <figcaption className=" text-[1.8rem] w-full">
              {obj.title}
            </figcaption>
          </figure>
          <a href="/" className=" text-[1.6rem] text-[var(--blue)]">
            {" "}
            Read more...
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Blog;
