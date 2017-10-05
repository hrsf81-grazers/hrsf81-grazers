module.exports = {
  bindings: {
    eventId: '<',
    group: '<'
  },
  controller($http) {
    this.getSchedule = scheduleId =>
      $http({
        method: 'GET',
        url: `/schedule/${scheduleId}`
      })
        .then(response => response.data)
        .catch(console.error);

    this.$onChanges = (changesObj) => {
      if (changesObj.group.currentValue) {
        this.getSchedule(this.group.scheduleId)
          .then((schedule) => {
            this.groupSchedule = schedule;
          })
          .catch(console.error);
      }
    };

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
      <schedule-display schedule="$ctrl.eventSchedule"></schedule-display>
      <h4 ng-if="$ctrl.groupSchedule">Group Schedule</h4>
      <schedule-display schedule="$ctrl.groupSchedule"></schedule-display>
    </div>
  `
};
