module.exports = {

  events: [
    {
      name: 'Grazers Con',
      location: '944 Market Street, 8th floor, San Francisco, CA 94102',
      organizerId: 1,
      scheduleId: 1
    }
  ],

  groups: [
    {
      name: 'Organizers',
      type: 'admin',
      eventId: 1,
      scheduleId: 3
    },
    {
      name: 'Greeters',
      type: 'staff',
      eventId: 1,
      scheduleId: 2
    },
    {
      name: 'Volunteers',
      type: 'staff',
      eventId: 1,
      scheduleId: 3
    },
    {
      name: 'Tech Support',
      type: 'staff',
      eventId: 1
    },
    {
      name: 'General Admissions',
      type: 'attendee',
      eventId: 1
    }
  ],

  users: [
    {
      role: 'organizer',
      firstName: 'Laurent',
      lastName: 'Frazier',
      email: 'laurent@grazerscon.com',
      phone: '555-235-9802'
    },
    {
      role: 'staff',
      firstName: 'David',
      lastName: 'Friedman',
      email: 'david@grazerscon.com',
      phone: '555-492-1763'
    },
    {
      role: 'staff',
      firstName: 'Austin',
      lastName: 'Sloane',
      email: 'austin@grazerscon.com',
      phone: '555-687-9321'
    },
    {
      role: 'staff',
      firstName: 'Haruki',
      lastName: 'Dante',
      email: 'haruki@grazerscon.com',
      phone: '555-234-0745'
    },
    {
      role: 'attendee',
      firstName: 'Christine',
      lastName: 'Wong',
      email: 'christine@randomperson.com',
      phone: '555-299-4236'
    },
    {
      role: 'staff',
      firstName: 'Rafiqa',
      lastName: 'Chukwudi',
      email: 'rafiqa@grazerscon.com',
      phone: '555-596-4104'
    }
  ],

  userGroups: [
    {
      groupId: 1,
      userId: 1
    },
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
      groupId: 1,
      userId: 5
    },
    {
      groupId: 2,
      userId: 6
    }
  ],

  messages: [
    {
      fromId: 3,
      toIds: [2],
      title: '',
      text: 'I just signed in for lemonade stand duty and we are out of lemons!',
      eventId: 1,
      timestamp: new Date()
    },
    {
      fromId: 1,
      toIds: [1, 2],
      title: 'Room Change',
      text: 'The "Guilt-Free Grazing" seminar has moved from the Grand Ballroom to the Autumm room.',
      eventId: 1,
      timestamp: new Date()
    },
    {
      fromId: 1,
      toIds: [3],
      title: 'Room Change',
      text: 'The "Guilt-Free Grazing" seminar has moved from the Grand Ballroom to the Autumm room.',
      eventId: 1,
      timestamp: new Date()
    },
    {
      fromId: 1,
      toIds: [4],
      title: 'Welcome!',
      text: 'Post your memories to Instagram with hashtag #GrazerCon2017. Daily prizes for best photo!',
      eventId: 1,
      timestamp: new Date()
    }
  ]
};
