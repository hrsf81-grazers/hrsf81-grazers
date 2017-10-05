module.exports = {
  bindings: {
    eventId: '<'
  },
  controller($http) {
    this.event = '';

    $http({
      method: 'GET',
      url: `/event/${this.eventId}`
    })
      .then(response => response.data)
      .then((event) => {
        this.event = event;
      })
      .catch(console.error);
  },
  template: `
    <div class="right-sidebar col-md-3">
      <h3>{{$ctrl.event.name}}</h3>
      <p class="address">{{$ctrl.event.location}}</p>
    </div>
  `
};
