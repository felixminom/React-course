import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to delete?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Felix"
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 6:00pm"
                    comment="Nice class!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Cherita"
                    avatar={faker.image.avatar()}
                    timeAgo="Yesterday at 3:00pm"
                    comment="I didn't understand props"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Baby Nico"
                    avatar={faker.image.avatar()}
                    timeAgo="Yesterday at 9:00am"
                    comment="Cool now I know props!"
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)