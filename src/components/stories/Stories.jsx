import { useContext } from 'react';
import { AuthContext} from '../../context/authContext'
import './stories.scss'


const Stories = () => {

  const {currentUser} = useContext(AuthContext)

      // TEMPORARY DATA
      const stories = [
        {
          id: 1,
          name: "Rhea",
          img: "https://i.pinimg.com/564x/29/5f/0d/295f0d216ee0373cd42c2ce3c031066d.jpg",
        },
        {
          id: 2,
          name: "Kristene",
          img: "https://i.pinimg.com/564x/d6/7b/56/d67b56ad347b55f4f9830e6474d5b517.jpg",
        },
        {
          id: 3,
          name: "Rodito ",
          img: "https://i.pinimg.com/474x/ec/a3/01/eca301aa95f8279772ad9da708f5ff6e.jpg",
        },
        {
          id: 4,
          name: "Lester",
          img: "https://i.pinimg.com/736x/da/ae/69/daae698235e302514074d477c7a3a73a.jpg",
        },
      ];

  return (
    <div className='stories'>
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories