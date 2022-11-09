import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    // {
    //   id: 1,
    //   name: "Karthik",
    //   userId: 1,
    //   profilePic:
    //     "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //   desc: "happy sunday",
    //   img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // },
    {
      id: 2,
      name: "Satish",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "India vs South Africa Live Score, T20 World Cup 2022: South Africa defeated India by five wickets in their T20 World Cup match on Sunday. Suryakumar Yadav lifted India to 133 for nine with a 40-ball 68 after a batting collapse. In reply, South Africa completed the chase in 19.4 overs. Aiden Markram and David Miller made 52 and 56 runs respectively, the latter remaining not out. Get live cricket score updates of T20 World Cup match between India and South Africa. Check live scorecard, ball by ball commentary, cricket score online on Times of India.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
