module.exports = {

  events: [
    {
      id: 1,
      name: 'Grazers Con',
      location: '944 Market Street, 8th floor, San Francisco, CA 94102',
      organizerId: 1
    }
  ],

  groups: [
    {
      id: 1,
      name: 'Greeters',
      type: 'staff',
      eventId: 1
    },
    {
      id: 2,
      name: 'Refreshments',
      type: 'staff',
      eventId: 1
    },
    {
      id: 3,
      name: 'Tech Support',
      type: 'staff',
      eventId: 1
    },
    {
      id: 4,
      name: 'General Admissions',
      type: 'attendee',
      eventId: 1
    }
  ],

  users: [
    {
      id: 1,
      role: 'organizer',
      firstName: 'Laurent',
      lastName: 'Frazier',
      email: 'laurent@grazerscon.com',
      phone: '555-235-9802'
    },
    {
      id: 2,
      role: 'staff',
      firstName: 'David',
      lastName: 'Friedman',
      email: 'david@grazerscon.com',
      phone: '555-492-1763'
    },
    {
      id: 3,
      role: 'staff',
      firstName: 'Austin',
      lastName: 'Sloane',
      email: 'austin@grazerscon.com',
      phone: '555-687-9321'
    },
    {
      id: 4,
      role: 'staff',
      firstName: 'Haruki',
      lastName: 'Dante',
      email: 'haruki@grazerscon.com',
      phone: '555-234-0745'
    },
    {
      id: 5,
      role: 'attendee',
      firstName: 'Christine',
      lastName: 'Wong',
      email: 'christine@randomperson.com',
      phone: '555-299-4236'
    }
  ],

  userGroups: [
    {
      groupId: 2,
      userId: 3
    },
    {
      groupId: 2,
      userId: 4
    },
    {
      groupId: 3,
      userId: 2
    },
    {
      groupId: 4,
      userId: 5
    }
  ],

  messages: [
    {
      id: 1,
      fromUserId: 3,
      title: '',
      text: 'I just signed in for lemonade stand duty and we are out of lemons!',
    },
    {
      id: 2,
      fromUserId: 1,
      title: 'Room Change',
      text: 'The "Guilt-Free Grazing" seminar has moved from the Grand Ballroom to the Autumm room.'
    },
    {
      id: 3,
      fromUserId: 1,
      title: 'Welcome!',
      text: 'Post your memories to Instagram with hashtag #GrazerCon2017. Daily prizes for best photo!'
    },
    {
      id: 4,
      fromUserId: 4,
      title: '',
      text: 'We don\'t use real lemons here. The lemonade mix is in the white jug under the table.'
    }
  ],

  messageRecipients: [
    {
      messageId: 1,
      recipientType: 'group',
      recipientId: 2
    },
    {
      messageId: 2,
      recipientType: 'group',
      recipientId: 1
    },
    {
      messageId: 2,
      recipientType: 'group',
      recipientId: 2
    },
    {
      messageId: 2,
      recipientType: 'group',
      recipientId: 3
    },
    {
      messageId: 3,
      recipientType: 'group',
      recipientId: 4
    },
    {
      messageId: 4,
      recipientType: 'user',
      recipientId: 3
    }
  ]
  
};
