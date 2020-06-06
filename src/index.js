import React from "react";
import ReactDOM from "react-dom";

import ApprovalCard from './ApprovalCard';
import CommentDetail from "./CommentDetail";


const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
        <CommentDetail  content="nice blog post" timeAgo="4:45pm" />
        </ApprovalCard>  
        <ApprovalCard>
        <CommentDetail content="good blog post" timeAgo="6:45pm" />
        </ApprovalCard>  
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
