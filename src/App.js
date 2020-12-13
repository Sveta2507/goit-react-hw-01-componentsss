import React from "react";
import PropTypes, { object } from "prop-types";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import Friends from "./components/Friends/Friends";
import Transactions from "./components/Transactions/Transaction";

const App = ({ user, statistics, friends, transactions, noAvatar }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
        noAvatar={noAvatar}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <Friends friends={friends} noAvatar={noAvatar} />
      {<Transactions transactions={transactions} />}
    </div>
  );
};

export default App;

App.propTypes = {
  friends: PropTypes.arrayOf(object).isRequired,
  statistics: PropTypes.arrayOf(object).isRequired,
  transactions: PropTypes.arrayOf(object).isRequired,
  user: PropTypes.object.isRequired,
  noAvatar: PropTypes.string.isRequired,
};
