function groups($http) {
  this.get = function() {
    const tempEventId = 1;
    return $http({
      method: 'GET',
      url: `/event/${tempEventId}/groups`
    })
    .then(response => response.data)
    .catch(console.error);
  };

  this.getMembers = function() {
    const tempGroupId = 2;
    return $http({
      method: 'GET',
      url: `/group/${tempGroupId}/users`
    })
    .then(response => response.data)
    .catch(console.error);
  };

  this.getGroup = function(userId) {
    return $http({
      method: 'GET',
      url: `/user/${userId}/group`
    })
    .then(response => response.data)
    .catch(console.error);
  };
}

module.exports = groups;
