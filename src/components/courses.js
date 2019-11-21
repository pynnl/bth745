const courses = [
  // TODO: add room & time for a course
  {
    code: 'BTH 745',
    name: 'Human-Computer Interaction',
    section: 'NBB',
    color: 'blue',
    events: [
      { start: '2019-01-07 09:00', end: '2019-01-07 10:00' },
      { start: '2019-01-11 12:00', end: '2019-01-11 15:00' }
    ]
  },
  {
    code: 'LSD 420',
    name: 'Labotamy',
    section: 'ADD',
    color: 'black',
    events: [{ start: '2019-01-07 17:40', end: '2019-01-07 19:30' }]
  },
  {
    code: 'DPS 924',
    name: 'Mobile App Development - Android',
    section: 'NSA',
    color: 'red',
    events: [{ start: '2019-01-08 10:30', end: '2019-01-08 15:30' }]
  },
  {
    code: 'LSP 400',
    name: 'Presentations',
    section: 'NBD',
    color: 'green',
    events: [
      { start: '2019-01-10 15:40', end: '2019-01-10 17:30' },
      { start: '2019-01-9 8:40', end: '2019-01-9 10:20' }
    ]
  },
  {
    code: 'BTH 545',
    name: 'Human-Computer Interfacing',
    section: 'NBD',
    color: 'brown',
    events: [{ start: '2019-01-09 12:00', end: '2019-01-09 15:00' }]
  }
  // TODO: add more courses
]

const events = []
for (const e of courses) {
  for (const f of e.events) {
    events.push({
      ...e,
      ...f
    })
  }
}

export { courses, events }
