
import { Profile } from "components/Profile/Profile"
import user from "../cunfigs/user"
import { Statistics } from "components/Statistics/Statistics"
import data from "../cunfigs/data"
import { FriendList } from "components/FriendList/FriendList"
import friends from "../cunfigs/friends"
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory"
import transactions from "../cunfigs/transactions" 
export const App = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics
        title='Upload stats'
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
