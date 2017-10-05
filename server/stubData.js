module.exports = {

  events: [
    {
      id: 1,
      name: 'Grazers Con',
      location: '944 Market Street, 8th floor, San Francisco, CA 94102',
      organizerId: 1,
      scheduleId: 1
    }
  ],

  groups: [
    {
      id: 1,
      name: 'Volunteers',
      type: 'staff',
      eventId: 1,
      scheduleId: 3
    },
    {
      id: 2,
      name: 'Greeters',
      type: 'staff',
      eventId: 1,
      scheduleId: 2
    },
    {
      id: 3,
      name: 'Tech Support',
      type: 'staff',
      eventId: 1,
      scheduleId: 2
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
    },
    {
      id: 6,
      role: 'staff',
      firstName: 'Rafiqa',
      lastName: 'Chukwudi',
      email: 'rafiqa@grazerscon.com',
      phone: '555-596-4104'
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
      id: 1,
      fromUserId: 3,
      toGroupId: 2,
      title: '',
      text: 'I just signed in for lemonade stand duty and we are out of lemons!',
      eventId: 1
    },
    {
      id: 2,
      fromUserId: 1,
      toGroupId: 1,
      title: 'Room Change',
      text: 'The "Guilt-Free Grazing" seminar has moved from the Grand Ballroom to the Autumm room.',
      eventId: 1
    },
    {
      id: 2,
      fromUserId: 1,
      toGroupId: 2,
      title: 'Room Change',
      text: 'The "Guilt-Free Grazing" seminar has moved from the Grand Ballroom to the Autumm room.',
      eventId: 1
    },
    {
      id: 2,
      fromUserId: 1,
      toGroupId: 3,
      title: 'Room Change',
      text: 'The "Guilt-Free Grazing" seminar has moved from the Grand Ballroom to the Autumm room.',
      eventId: 1
    },
    {
      id: 3,
      fromUserId: 1,
      toGroupId: 4,
      title: 'Welcome!',
      text: 'Post your memories to Instagram with hashtag #GrazerCon2017. Daily prizes for best photo!',
      eventId: 1
    }
  ],

  schedules: [
    {
      id: 1,
      days: [
        {
          date: 'October 9, 2017',
          timetable: [
            {
              time: '8:00 AM to 10:00 AM',
              activity: 'Registration',
              location: 'Front Lobby'
            },
            {
              time: '10:00 AM to 11:00 AM',
              activity: 'Keynote Speaker',
              location: 'Main Auditorium'
            },
            {
              time: '12:00 PM to 1:30 PM',
              activity: 'Lunch',
              location: 'Grand Ballroom'
            },
            {
              time: '2:00 PM to 4:00 PM',
              activity: 'Breakout Sessions I',
              location: 'Blue, Green and Yellow Rooms'
            },
            {
              time: '4:30 PM to 6:30 PM',
              activity: 'Breakout Sessions II',
              location: 'Blue, Green and Yellow Rooms'
            },
            {
              time: '6:30 PM to 8:30 PM',
              activity: 'Dinner',
              location: 'Grand Ballroom'
            },
            {
              time: '9:00 PM to 11:30 PM',
              activity: 'Movies Under the Stars',
              location: 'Center Gardens'
            }
          ]
        },
        {
          date: 'October 10, 2017',
          timetable: [
            {
              time: '9:00 AM to 10:00 AM',
              activity: 'Continental Breakfast',
              location: 'Grand Ballroom'
            },
            {
              time: '10:00 AM to 11:30 AM',
              activity: 'Panel: Famous People',
              location: 'Main Auditorium'
            },
            {
              time: '12:00 PM to 1:00 PM',
              activity: 'Lunch',
              location: 'Grand Ballroom'
            },
            {
              time: '2:00 PM to 6:00 PM',
              activity: 'Art Exhibition',
              location: 'Center Gardens'
            },
            {
              time: '3:00 PM to 4:30 PM',
              activity: 'Tea Time',
              location: 'Grand Ballroom'
            },
            {
              time: '6:00 PM to 8:00 PM',
              activity: 'Dinner',
              location: 'Grand Ballroom'
            },
            {
              time: '8:00 PM to 9:30 PM',
              activity: 'Awards Ceremony',
              location: 'Main Auditorium'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      days: [
        {
          date: 'October 9, 2017',
          timetable: [
            {
              time: '7:00 AM to 7:30 AM',
              activity: 'Greeters Checkin',
              location: 'Staff Cafeteria'
            },
            {
              time: '8:00 AM to 10:00 AM',
              activity: 'Guest Registration',
              location: 'Front Lobby'
            },
            {
              time: '11:30 PM to 1:30 PM',
              activity: 'Move guests to and from lunch',
              location: 'Main Auditorium & Grand Ballroom'
            },
            {
              time: '1:30 PM to 2:30 PM',
              activity: 'Lunch',
              location: 'Staff Cafeteria'
            },
            {
              time: '2:30 PM to 5:30 PM',
              activity: 'Write thank you cards',
              location: 'Meeting Room A'
            },
            {
              time: '6:00 PM to 7:30 PM',
              activity: 'Help guests get to dinner',
              location: 'Grand Ballroom'
            },
            {
              time: '7:30 PM to 8:30 PM',
              activity: 'Dinner',
              location: 'Staff Cafeteria'
            },
            {
              time: '8:00 PM to 9:00 PM',
              activity: 'Help guests get to the gardens',
              location: 'Center Gardens'
            }
          ]
        },
        {
          date: 'October 10, 2017',
          timetable: [
            {
              time: '7:30 AM to 8:30 AM',
              activity: 'Staff Debrief',
              location: 'Staff Cafeteria'
            },
            {
              time: '9:00 AM to 10:30 AM',
              activity: 'Welcome back guests',
              location: 'Front Lobby'
            },
            {
              time: '12:00 PM to 1:30 PM',
              activity: 'Lunch',
              location: 'Staff Cafeteria'
            },
            {
              time: '2:30 PM to 5:30 PM',
              activity: 'Write thank you cards',
              location: 'Meeting Room A'
            },
            {
              time: '6:00 PM to 7:00 PM',
              activity: 'Dinner',
              location: 'Staff Cafeteria'
            },
            {
              time: '7:30 PM to 10:00 PM',
              activity: 'Manage souvenir booths',
              location: 'Center Gardens & Front Lobby'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      days: [
        {
          date: 'October 9, 2017',
          timetable: [
            {
              time: '7:00 AM to 7:30 AM',
              activity: 'Volunteers Checkin',
              location: 'Staff Cafeteria'
            },
            {
              time: '8:00 AM to 10:30 AM',
              activity: 'Meet & Greet Guests',
              location: 'Front Lobby & Main Auditorium'
            },
            {
              time: '11:30 PM to 1:30 PM',
              activity: 'Move guests to and from lunch',
              location: 'Main Auditorium & Grand Ballroom'
            },
            {
              time: '1:30 PM to 2:30 PM',
              activity: 'Lunch',
              location: 'Staff Cafeteria'
            },
            {
              time: '6:00 PM to 7:30 PM',
              activity: 'Help guests get to dinner',
              location: 'Grand Ballroom'
            },
            {
              time: '7:30 PM to 8:30 PM',
              activity: 'Dinner',
              location: 'Staff Cafeteria'
            },
            {
              time: '8:00 PM to 9:00 PM',
              activity: 'Help guests get to the gardens',
              location: 'Center Gardens'
            }
          ]
        },
        {
          date: 'October 10, 2017',
          timetable: [
            {
              time: '7:30 AM to 8:30 AM',
              activity: 'Volunteer Check-in',
              location: 'Meeting Room A'
            },
            {
              time: '9:00 AM to 10:30 AM',
              activity: 'Welcome back guests',
              location: 'Front Lobby'
            },
            {
              time: '12:00 PM to 1:30 PM',
              activity: 'Lunch',
              location: 'Staff Cafeteria'
            },
            {
              time: '2:00 PM to 5:00 PM',
              activity: 'Souvenir bag construction',
              location: 'Meeting Room A & Meeting Room B'
            },
            {
              time: '6:00 PM to 7:00 PM',
              activity: 'Dinner',
              location: 'Grand Ballroom'
            },
            {
              time: '7:30 PM to 10:00 PM',
              activity: 'Manage souvenir booths',
              location: 'Center Gardens & Front Lobby'
            }
          ]
        }
      ]
    }
  ]
};
