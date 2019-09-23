import React from 'react';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure you want to leave?</p>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 11:55AM"
          comment="I can do this"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Adewale"
          timeAgo="Yesterdat at 2:00PM"
          comment="I understand Props"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Emma"
          timeAgo="Tommorrow at 12:00 noon"
          comment="I will master React"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
