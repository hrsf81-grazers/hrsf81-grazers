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
    },
    {
      id: 6,
      role: 'staff',
      firstName: 'Rafiqa',
      lastName: 'Chukwudi',
      email: 'rafiqa@grazerscon.com',
      phone: '555-596-4104'
    }
  ]
};
