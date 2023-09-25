import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badges from "./components/Badges/Badges"
import Notification from './components/Notifications/index';

function App() {
  return (
      <div>
        <div>
          <Menu onOpen={() => console.log("Opened/closed")}>
          <Menu.Button>Menu</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        </div>
        <hr />
        <div>
          <Badges className="badge" size="lg" color="red" shape="square">
            badges
          </Badges>
        </div>
        <hr />
        <div>
          <Notification className="noti" status="success">
            <Notification.Title>Congratulations!</Notification.Title>
            <Notification.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Notification.Text>
          </Notification>
        </div>
        <hr />
        <div>
          <Notification className="noti" status="warning">
            <Notification.Title>Attention!</Notification.Title>
            <Notification.Text></Notification.Text>
          </Notification>
        </div>
        <hr />
        <div>
          <Notification className="noti" status="danger">
            <Notification.Title>There is a problem with your application</Notification.Title>
            <Notification.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Notification.Text>
          </Notification>
        </div>
        <hr />
        <div>
          <Notification className="noti" status="info">
            <Notification.Title>Update available</Notification.Title>
            <Notification.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Notification.Text>
          </Notification>
        </div>
      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
