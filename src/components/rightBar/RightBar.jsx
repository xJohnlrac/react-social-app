import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/564x/39/a8/e3/39a8e312f3269443f1b63859b92d3448.jpg" alt="" />
              <span>Rhea Parra</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/564x/2a/2f/44/2a2f448e3102132b0ffbf6848cef23cf.jpg" alt="" />
              <span>Yang Yang</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/736x/d7/5a/b5/d75ab50c6337a8e6f924a1c288805b06.jpg" alt="" />
              <p>
              <span>Kristene</span> changed their cover picture
              </p>
            </div>
            <span>40 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/564x/b1/36/23/b1362334ef07cee77b199f7239061547.jpg" alt="" />
              <p>
              <span>Kate</span> changed their cover picture
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/736x/54/7c/61/547c61b059991fbced085860f9989461.jpg" alt="" />
              <p>
              <span>Marifaith</span> changed their profile picture
              </p>
            </div>
            <span>1 hr ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/736x/b4/32/65/b432658fe20b8ec8f5e16e73ac8ee471.jpg" alt="" />
              <p>
              <span>Jessie</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/564x/39/a8/e3/39a8e312f3269443f1b63859b92d3448.jpg" alt="" />
              <div className="online" />
              <span>Rhea Parra</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/736x/d7/5a/b5/d75ab50c6337a8e6f924a1c288805b06.jpg" alt="" />
              <div className="online" />
              <span>Kristene</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/736x/54/7c/61/547c61b059991fbced085860f9989461.jpg" alt="" />
              <div className="online" />
              <span>Marifaith</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/736x/b4/32/65/b432658fe20b8ec8f5e16e73ac8ee471.jpg" alt="" />
              <div className="online" />
              <span>Jessie</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/564x/b1/36/23/b1362334ef07cee77b199f7239061547.jpg" alt="" />
              <div className="online" />
              <span>Kate</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/564x/b1/36/23/b1362334ef07cee77b199f7239061547.jpg" alt="" />
              <div className="online" />
              <span>Lester</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pinimg.com/564x/58/44/2a/58442af69ca3ac2b7c1756f50d800033.jpg" alt="" />
              <div className="online" />
              <span>Rodito</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar