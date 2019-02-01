/* eslint-disable max-len */

const seedData = {
    currentUser: {
        id: '2613399432',
        name: 'Wade Wilson',
        avatar: 'https://cdn-images-1.medium.com/max/1920/1*0ubYRV_WNR9iYrzUAVINHw.jpeg'
    },
    feedback: {
        todo: [
            {
                id: '9390823928',
                name: 'Peter Parker',
                avatar: 'https://preview.redd.it/9ej9735r8dv11.png?width=331&auto=webp&s=d9491933c36ff23ff11d6fbf0d403cb7bedace24',
                complete: false,
                currentQuestion: 0,
                questions: [
                    {
                        id: '1510702622',
                        formType: 'multiple-choice',
                        title: 'How well did this person do X thing last month?',
                        options: [
                            {
                                score: 'low',
                                title: 'Please Improve',
                                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros auctor, vestibulum ipsum sit amet, pretium mi. Maecenas scelerisque ex vel enim cursus congue. Duis congue eu sapien ornare bibendum.'
                            },
                            {
                                score: 'average',
                                title: 'You Were Good',
                                message: 'Nam mattis augue ut odio volutpat, et venenatis nibh consequat. Praesent accumsan pulvinar sapien, quis gravida ligula commodo a. Curabitur aliquet sit amet augue vel finibus.'
                            },
                            {
                                score: 'high',
                                title: 'You Were Great',
                                message: 'Fusce aliquet tellus vel molestie mattis.'
                            }
                        ],
                        value: null
                    },
                    {
                        id: '1510702623',
                        formType: 'rank-scale',
                        title: 'How is working with this person?',
                        value: null
                    },
                    {
                        id: '1510702624',
                        formType: 'free-form',
                        title: 'Do you have any other feedback for this person?',
                        value: null
                    }
                ]
            }
        ],
        completed: [
            {
                id: '5385527224',
                name: 'Frank Castle',
                avatar: 'https://avatarfiles.alphacoders.com/151/151995.jpg',
                complete: true
            }
        ]
    }
};

export default seedData;
