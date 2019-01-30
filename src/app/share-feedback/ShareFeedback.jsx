import React, { Component } from 'react';
import styled from 'styled-components';
import UserList from './UserList';

const StyledFeedback = styled.section`
    display: flex;
    justify-content: center;

    .wrapper {
        display: flex;
        flex-direction: column;
        width: 780px;
    }
`;

class ShareFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: '9390823928',
                    name: 'Peter Parker',
                    avatar: 'https://preview.redd.it/9ej9735r8dv11.png?width=331&auto=webp&s=d9491933c36ff23ff11d6fbf0d403cb7bedace24',
                    submission: {
                        id: '5992758510',
                        complete: false
                    }
                },
                {
                    id: '5385527224',
                    name: 'Frank Castle',
                    avatar: 'https://avatarfiles.alphacoders.com/151/151995.jpg',
                    submission: {
                        id: '8645150742',
                        complete: true
                    }
                }
            ]
        };
    }

    render() {

        return (
            <StyledFeedback className="share-feedback">
                <div className="wrapper">
                    <h1>Share Feedback</h1>
                    <UserList users={this.state.users} />
                </div>
            </StyledFeedback>
        );

    }

}

export default ShareFeedback;
