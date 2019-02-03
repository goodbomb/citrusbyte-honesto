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
                                score: 1,
                                title: 'Please Improve',
                                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros auctor, vestibulum ipsum sit amet, pretium mi. Maecenas scelerisque ex vel enim cursus congue. Duis congue eu sapien ornare bibendum.'
                            },
                            {
                                score: 2,
                                title: 'You Were Good',
                                message: 'Nam mattis augue ut odio volutpat, et venenatis nibh consequat. Praesent accumsan pulvinar sapien, quis gravida ligula commodo a. Curabitur aliquet sit amet augue vel finibus.'
                            },
                            {
                                score: 3,
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
                        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies nibh mauris, at volutpat sem congue ut. Maecenas felis justo, blandit eu suscipit nec, hendrerit ut odio. Proin interdum elit eu semper tristique. Donec id consectetur mi. Aliquam accumsan sem ut maximus ornare. Duis eu mi consectetur, consectetur mauris id, congue velit.',
                        value: null
                    },
                    {
                        id: '1510702624',
                        formType: 'free-form',
                        title: 'Do you have any other feedback for this person?',
                        value: null
                    }
                ]
            },
            {
                id: '9390823929',
                name: 'Eddie Brock',
                avatar: 'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
                complete: false,
                currentQuestion: 0,
                questions: [
                    {
                        id: '2510702622',
                        formType: 'multiple-choice',
                        title: 'How well did this person do X thing last month?',
                        options: [
                            {
                                score: 1,
                                title: 'Please Improve',
                                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros auctor, vestibulum ipsum sit amet, pretium mi. Maecenas scelerisque ex vel enim cursus congue. Duis congue eu sapien ornare bibendum.'
                            },
                            {
                                score: 2,
                                title: 'You Were Good',
                                message: 'Nam mattis augue ut odio volutpat, et venenatis nibh consequat. Praesent accumsan pulvinar sapien, quis gravida ligula commodo a. Curabitur aliquet sit amet augue vel finibus.'
                            },
                            {
                                score: 3,
                                title: 'You Were Great',
                                message: 'Fusce aliquet tellus vel molestie mattis.'
                            }
                        ],
                        value: null
                    },
                    {
                        id: '2510702623',
                        formType: 'rank-scale',
                        title: 'How is working with this person?',
                        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies nibh mauris, at volutpat sem congue ut. Maecenas felis justo, blandit eu suscipit nec, hendrerit ut odio. Proin interdum elit eu semper tristique. Donec id consectetur mi. Aliquam accumsan sem ut maximus ornare. Duis eu mi consectetur, consectetur mauris id, congue velit.',
                        value: null
                    },
                    {
                        id: '2510702624',
                        formType: 'free-form',
                        title: 'Do you have any other feedback for this person?',
                        value: null
                    }
                ]
            },
            {
                id: '9490823929',
                name: 'Otto Octavius',
                avatar: 'https://i.pinimg.com/736x/b0/f0/d6/b0f0d66fefa5869bd76f08c2f0e936ac.jpg',
                complete: false,
                currentQuestion: 0,
                questions: [
                    {
                        id: '3510702622',
                        formType: 'multiple-choice',
                        title: 'How well did this person do X thing last month?',
                        options: [
                            {
                                score: 1,
                                title: 'Please Improve',
                                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros auctor, vestibulum ipsum sit amet, pretium mi. Maecenas scelerisque ex vel enim cursus congue. Duis congue eu sapien ornare bibendum.'
                            },
                            {
                                score: 2,
                                title: 'You Were Good',
                                message: 'Nam mattis augue ut odio volutpat, et venenatis nibh consequat. Praesent accumsan pulvinar sapien, quis gravida ligula commodo a. Curabitur aliquet sit amet augue vel finibus.'
                            },
                            {
                                score: 3,
                                title: 'You Were Great',
                                message: 'Fusce aliquet tellus vel molestie mattis.'
                            }
                        ],
                        value: null
                    },
                    {
                        id: '3510702623',
                        formType: 'rank-scale',
                        title: 'How is working with this person?',
                        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies nibh mauris, at volutpat sem congue ut. Maecenas felis justo, blandit eu suscipit nec, hendrerit ut odio. Proin interdum elit eu semper tristique. Donec id consectetur mi. Aliquam accumsan sem ut maximus ornare. Duis eu mi consectetur, consectetur mauris id, congue velit.',
                        value: null
                    },
                    {
                        id: '3510702624',
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
                complete: true,
                questions: [
                    {
                        id: '4510702623',
                        formType: 'rank-scale',
                        title: 'How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?',
                        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies nibh mauris, at volutpat sem congue ut. Maecenas felis justo, blandit eu suscipit nec, hendrerit ut odio. Proin interdum elit eu semper tristique. Donec id consectetur mi. Aliquam accumsan sem ut maximus ornare. Duis eu mi consectetur, consectetur mauris id, congue velit.',
                        value: 2
                    },
                    {
                        id: '4510702622',
                        formType: 'multiple-choice',
                        title: 'How would you rate the quality of X Lorem ipsum dolor sit amet?',
                        options: [
                            {
                                score: 1,
                                title: 'Please Improve',
                                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros auctor, vestibulum ipsum sit amet, pretium mi. Maecenas scelerisque ex vel enim cursus congue. Duis congue eu sapien ornare bibendum.'
                            },
                            {
                                score: 2,
                                title: 'You Were Good',
                                message: 'Nam mattis augue ut odio volutpat, et venenatis nibh consequat. Praesent accumsan pulvinar sapien, quis gravida ligula commodo a. Curabitur aliquet sit amet augue vel finibus.'
                            },
                            {
                                score: 3,
                                title: 'You Were Great',
                                message: 'Fusce aliquet tellus vel molestie mattis.'
                            }
                        ],
                        value: 3
                    },
                    {
                        id: '4510802622',
                        formType: 'multiple-choice',
                        title: 'How did this person handle X?',
                        options: [
                            {
                                score: 1,
                                title: 'Please Improve',
                                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros auctor, vestibulum ipsum sit amet, pretium mi. Maecenas scelerisque ex vel enim cursus congue. Duis congue eu sapien ornare bibendum.'
                            },
                            {
                                score: 2,
                                title: 'You Were Good',
                                message: 'Nam mattis augue ut odio volutpat, et venenatis nibh consequat. Praesent accumsan pulvinar sapien, quis gravida ligula commodo a. Curabitur aliquet sit amet augue vel finibus.'
                            },
                            {
                                score: 3,
                                title: 'You Were Great',
                                message: 'Fusce aliquet tellus vel molestie mattis.'
                            }
                        ],
                        value: 2
                    },
                    {
                        id: '4510712623',
                        formType: 'rank-scale',
                        title: 'How is working with this person Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet?',
                        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies nibh mauris, at volutpat sem congue ut. Maecenas felis justo, blandit eu suscipit nec, hendrerit ut odio. Proin interdum elit eu semper tristique. Donec id consectetur mi. Aliquam accumsan sem ut maximus ornare. Duis eu mi consectetur, consectetur mauris id, congue velit.',
                        value: 1
                    },
                    {
                        id: '4510712633',
                        formType: 'rank-scale',
                        title: 'How well does this person manage X Lorem ipsum dolor sit amet?',
                        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies nibh mauris, at volutpat sem congue ut. Maecenas felis justo, blandit eu suscipit nec, hendrerit ut odio. Proin interdum elit eu semper tristique. Donec id consectetur mi. Aliquam accumsan sem ut maximus ornare. Duis eu mi consectetur, consectetur mauris id, congue velit.',
                        value: 5
                    },
                    {
                        id: '4510702624',
                        formType: 'free-form',
                        title: 'Do you have any other feedback for this person?',
                        value: 'Hey Frank,\nYou are doing great, keep up the good work!!\nLorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc a euismod dolor, non blandit nisl.Sed euismod enim in semper consectetur.Duis elementum venenatis finibus.Sed quis neque diam.Aliquam nec blandit mi, et cursus dolor.Duis pharetra purus nunc, in facilisis ex auctor id.Duis nec metus arcu.Curabitur in semper tellus.Cras luctus tellus lectus, a lobortis velit convallis non.Praesent cursus vel velit eget hendrerit.'
                    }
                ]
            },
            {
                id: '6385527224',
                name: 'John Smith',
                avatar: 'https://secure.gravatar.com/avatar/4299cdf21cf5f42944524f3975327e44?s=256&d=mm&r=pg',
                complete: true,
                questions: [
                    {
                        id: '3610702622',
                        formType: 'multiple-choice',
                        title: 'How well did this person do X thing last month?',
                        options: [
                            {
                                score: 1,
                                title: 'Please Improve',
                                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros auctor, vestibulum ipsum sit amet, pretium mi. Maecenas scelerisque ex vel enim cursus congue. Duis congue eu sapien ornare bibendum.'
                            },
                            {
                                score: 2,
                                title: 'You Were Good',
                                message: 'Nam mattis augue ut odio volutpat, et venenatis nibh consequat. Praesent accumsan pulvinar sapien, quis gravida ligula commodo a. Curabitur aliquet sit amet augue vel finibus.'
                            },
                            {
                                score: 3,
                                title: 'You Were Great',
                                message: 'Fusce aliquet tellus vel molestie mattis.'
                            }
                        ],
                        value: 2
                    },
                    {
                        id: '3610702623',
                        formType: 'rank-scale',
                        title: 'How is working with this person?',
                        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies nibh mauris, at volutpat sem congue ut. Maecenas felis justo, blandit eu suscipit nec, hendrerit ut odio. Proin interdum elit eu semper tristique. Donec id consectetur mi. Aliquam accumsan sem ut maximus ornare. Duis eu mi consectetur, consectetur mauris id, congue velit.',
                        value: 8
                    },
                    {
                        id: '3610702624',
                        formType: 'free-form',
                        title: 'Do you have any other feedback for this person?',
                        value: 'Hey John,\nYou are doing great, keep up the good work!!\nLorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc a euismod dolor, non blandit nisl.Sed euismod enim in semper consectetur.Duis elementum venenatis finibus.Sed quis neque diam.Aliquam nec blandit mi, et cursus dolor.Duis pharetra purus nunc, in facilisis ex auctor id.Duis nec metus arcu.Curabitur in semper tellus.Cras luctus tellus lectus, a lobortis velit convallis non.Praesent cursus vel velit eget hendrerit.'
                    }
                ]
            }
        ]
    }
};

export default seedData;
