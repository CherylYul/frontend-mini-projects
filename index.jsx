import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badges from "./components/Badges/Badges"
import Notification from './components/Notifications/index';
import Card from "./components/Cards/index"
import Avatar from "./components/Avatar/Avatar"

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
        <br />
        <br />
        <div>
          <Badges className="badge" size="lg" color="red" shape="square">
            badges
          </Badges>
        </div>
        <br />
        <br />
        <div>
          <Notification className="noti" status="success">
            <Notification.Title>Congratulations!</Notification.Title>
            <Notification.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Notification.Text>
          </Notification>
        </div>
        <br />
        <br />
        <div>
          <Notification className="noti" status="warning">
            <Notification.Title>Attention!</Notification.Title>
            <Notification.Text></Notification.Text>
          </Notification>
        </div>
        <br />
        <br />
        <div>
          <Notification className="noti" status="danger">
            <Notification.Title>There is a problem with your application</Notification.Title>
            <Notification.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Notification.Text>
          </Notification>
        </div>
        <br />
        <br />
        <div>
          <Notification className="noti" status="info">
            <Notification.Title>Update available</Notification.Title>
            <Notification.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Notification.Text>
          </Notification>
        </div>
        <br />
        <br />
        <div>
          <Card>
            <Card.Icon><i class="bi bi-cloud-upload"></i></Card.Icon>
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
          </Card>
        </div>
        <br />
        <br />
        <div>
          <Card>
            <Card.Icon><i class="bi bi-house-door"></i></Card.Icon>
            <Card.Title>Safe House</Card.Title>
            <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
          </Card>
        </div>
        <br />
        <br />
        <div>
          <Avatar src="./components/Avatar/images/bob.jpg" alt="Bob Ziroll" />
          <br />
          <Avatar variant="letters">BZ</Avatar>
          <br />
          <Avatar variant="icon" />
        </div>
      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
