
import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './components/profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/friends/FriendList.jsx';
import TransactionHistory from './components/transactions/TransactionHistory.jsx';
import user from './components/user.json'; 
import data from './components/data.json';
import friends from './components/friends.json';
import transactions from './components/transactions.json';
import './index.css'; 
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet');
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);


