import './posts.scss'
import Post from '../../components/post/Post'

  const Posts = () => {

    //TEMPORARY DATA
    const posts = [
      {
        id: 1,
        name: "John Carl",
        userId: 1,
        profilePic:
          "https://i.pinimg.com/474x/8a/eb/e2/8aebe29132cb9464445a752f2511507b.jpg",
        desc: "In the world of software development, we are the architects of innovation, turning imagination into reality through code. Join us on a transformative journey of endless possibilities.",
        img: "https://i.pinimg.com/474x/7b/42/08/7b4208e40660e14d9361b1513611ca13.jpg",
      },
      {
        id: 2,
        name: "Rhea Parra",
        userId: 2,
        profilePic:
          "https://i.pinimg.com/564x/39/a8/e3/39a8e312f3269443f1b63859b92d3448.jpg",

        desc: "Cultivating Success: In the realm of business, we sow the seeds of prosperity, nurturing growth and fostering opportunities. Our commitment to excellence drives us forward, shaping industries, creating value, and building lasting relationships. Join us on the path to success and let's thrive together.",
        img: 'https://i.pinimg.com/564x/b4/63/0a/b4630a60e57d000f7e2533473e0716ce.jpg',
      },
    ];
  
    return <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>;
  };

export default Posts  