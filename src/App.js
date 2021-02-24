import './App.css';

import user from '../src/db/user.json'
import statisticalData from '../src/db/statistical-data.json'
import friends from '../src/db/friends.json';
import transactions from '../src/db/transactions.json'

import Profile from '../src/components/Profile/Profile'
import Statistics from '../src/components/Statistics/Statistics'
import FriendList from '../src/components/FriendList/FriendList'
import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory'

function App() {
  return (
    <div className="App">
      <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData}/>
      <FriendList friends={friends}/>,
      <TransactionHistory items={transactions}/>;
    </div>
  );
}

export default App;
