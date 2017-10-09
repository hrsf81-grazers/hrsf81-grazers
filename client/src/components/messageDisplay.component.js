module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  controller(websockets, $http) {
    this.messages = [];

    this.$onChanges = (changesObj) => {
      if (changesObj.group.currentValue || changesObj.user.currentValue) {
        this.fetchUrl = this.user.role === 'organizer' ?
          '/messages/display/from/1' :
          `/messages/display/to/${this.group.id}`;
      }
      if (this.fetchUrl) {
        $http({
          method: 'GET',
          url: this.fetchUrl
        })
          .then(res => res.data)
          .then((data) => {
            console.log(data);
            this.messages = data.map((message) => {
              message.fromName = `${message.firstname} ${message.lastname}`;
              message.recipients = message.togroups.split('|');
              message.sendDate = new Date(Date.parse(message.date_time));
              return message;
            });
          })
          .catch(console.error);
      }
    };


    this.receive = (event) => {
      console.log(`Message from the server ${event.data}`);
      const message = JSON.parse(event.data);
      const isBroadcast = this.user.role === 'organizer' && message.fromId === this.user.id;
      if (isBroadcast || message.toIds.includes(this.group.id)) {
        this.messages.push(message);
      }
    };

    websockets.receive(this.receive);
  },
  templateUrl: 'messageDisplay.template.html'
};
