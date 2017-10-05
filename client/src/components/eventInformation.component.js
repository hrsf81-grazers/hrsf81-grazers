module.exports = {
  bindings: {
    eventId: '<'
  },
  controller($http) {
    this.getSchedule = scheduleId =>
      $http({
        method: 'GET',
        url: `/schedule/${scheduleId}`
      })
        .then(response => response.data)
        .catch(console.error);

    $http({
      method: 'GET',
      url: `/event/${this.eventId}`
    })
      .then(response => response.data)
      .then((event) => {
        this.event = event;
        return event.scheduleId;
      })
      .then(this.getSchedule)
      .then((schedule) => {
        this.eventSchedule = schedule;
      })
      .catch(console.error);
  },
  template: `
    <div class="right-sidebar col-md-3">
      <h3>{{$ctrl.event.name}}</h3>
      <p class="address">{{$ctrl.event.location}}</p>
      <h4>Event Schedule</h4>

    </div>
  `
};
