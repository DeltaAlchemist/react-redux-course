import React from 'react'
import CommentDetail from './components/CommentDetail'
import faker from 'faker'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you wanna do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:35PM" 
                    text="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 10:00AM" 
                    text="Send nudes!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 11:20PM" 
                    text="Casada?"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

export default App