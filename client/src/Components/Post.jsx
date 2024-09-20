import styles from "../styles/Post.module.css";
import axios from "axios";
import italy from "./Images/italy.jpg";
// import { MdMoreVert } from "react-icons/md";
// import { FaRegComments } from "react-icons/fa";
// import { AiOutlineLike } from "react-icons/ai";
import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [destinationId, setDestinationId] = useState("");
  const [countLikes, setCountLikes] = useState(0);
  const [countComments, setCountComments] = useState(0);

  useEffect(() => {
    //fetch posts from backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts", {
          destinationId,
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  function handleCountLikes() {
    setCountLikes(() => countLikes + 1);
  }
  function handleCountComments() {
    setCountComments(() => countComments + 1);
  }
  return (
    <>
      {/* <div className={styles.postContainer}>
        <div className={styles.postCard}>
          <div className={styles.top}>
            <img src={italy} alt="" />
            <FiMoreVertical />
          </div>
          <img src={italy} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            voluptates cum. Perferendis aliquam dolores tenetur non aperiam,
            totam illo quae vel aliquid, sed repellat. Illo non veniam culpa
            esse possimus.
            <div className={styles.btn}>
              <button>lIKE</button>
              <button>COMMENT</button>
              <button>SHARE</button>
            </div>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.name}>
            <img src={italy} alt="" className={styles.profile} />
            <ul>
              <li>mathew</li>
              <li>Online</li>
            </ul>
            <div className={styles.status}></div>
            <MdMoreVert className={styles.moreIcon} />
          </div>
        </div>
        <img src={italy} alt="" className={styles.picture} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          fugit aut architecto reiciendis temporibus, veritatis omnis cum
          doloribus voluptas a quasi vero deserunt molestiae eveniet commodi
          sapiente placeat quae dignissimos.
        </p>
//         {/* <div className={styles.btn}>
//           <button onClick={handleCountLikes}>
//             <AiOutlineLike />
//             Like<span>{countLikes}</span>
//           </button>

          <button onClick={handleCountComments}>
            <FaRegComments />
            Comment<span>{countComments}</span>
          </button>
          {/* <button>Repost</button> */}
      {/* </div>
        <div className={styles.commentSection}>
          <img src={italy} alt="" className={styles.profileComment} />
          <input type="text" placeholder="Write You Comment here" />
          <button className={styles.commentPost}>Post</button>
        </div>
        <p className={styles.timestamp}>9:42 pm Sep 17, 2024</p>
      </div> */}
      {/* ------ v subjected to change v ------ */}
      <div>
        <h2>Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              {/* display destination name */}
              <h3>
                {post.destination
                  ? post.destination.destinationName
                  : "No destination"}
              </h3>
              {/* dispay destination img */}
              <img
                src={post.postImg}
                alt="Post Img"
                style={{ width: "300px", height: "300px" }}
              />
              {/* post created by user */}
              <p>{post.user.userName}</p>
              {/* post bio */}
              <p>{post.text}</p>
              <p>likes: {post.likes ? post.likes.length : ""}</p>
              <p>Comments: {post.comments ? post.comments.length : ""}</p>
            </div>
          ))
        ) : (
          <p>No Posts available</p>
        )}
      </div>
    </>
  );
};

export default Posts;
