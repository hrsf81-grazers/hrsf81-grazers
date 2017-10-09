module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  controller(groups, websockets, $mdDialog, $scope) {
    this.$onChanges = (changesObj) => {
      if (changesObj.group.currentValue || changesObj.user.currentValue) {
        this.messageTitle = '';
        this.messageBody = '';
        this.messageTo = this.user.role === 'organizer' ? [] : [JSON.stringify([this.group.id, this.group.name])];
      }
    };

    this.showSendMessageDialog = (ev) => {
      $mdDialog.show({
        controller: $scope.DialogController,
        // locals: {
        //   user: this.user,
        //   messageTo: this.messageTo,
        //   messageTitle: this.messageTitle,
        //   messageBody: this.messageBody
        // },
        templateUrl: 'messageSendDialog.template.html',
        targetEvent: ev,
        clickOutsideToClose: true,
        escapeToClose: true
      })
        .then(() => {
          this.sendMessage();
        })
        .catch(console.error);
    };

    $scope.DialogController = ($scope) => {
      $scope.user = this.user;
      $scope.messageTitle = this.messageTitle;
      $scope.messageTo = this.messageTo;
      $scope.messageBody = this.messageBody;
      // console.log($scope.messageTo);
      // console.log($scope.messageTitle);
      // console.log($scope.messageBody);

      groups.get()
        .then((groupData) => {
          $scope.groups = groupData;
        })
        .catch(console.error);

      $scope.hide = () => {
        $mdDialog.hide();
      };

      $scope.sendAndClose = () => {
        console.log($scope.messageTo);
        console.log($scope.messageTitle);
        console.log($scope.messageBody);
        $mdDialog.hide();
      };
    };

    // this.clearInputs = () => {
    //   this.messageTitle = '';
    //   this.messageBody = '';
    //   this.messageTo = this.user.role === 'organizer' ? [] : [JSON.stringify([this.group.id, this.group.name])];
    // };

    this.sendMessage = () => {
      const toGroupIds = [];
      const toGroupNames = [];
      this.messageTo = this.messageTo.map(toGroup => JSON.parse(toGroup));
      this.messageTo.forEach((toGroup) => {
        toGroupIds.push(toGroup[0]);
        toGroupNames.push(toGroup[1]);
      });
      websockets.send(JSON.stringify({
        toNames: toGroupNames,
        toIds: toGroupIds,
        title: this.messageTitle,
        text: this.messageBody,
        fromName: `${this.user.firstName} ${this.user.lastName}`,
        fromId: this.user.id,
        eventId: 1
      }));
      this.clearInputs();
    };
  },
  templateUrl: 'messageSend.template.html'
};
