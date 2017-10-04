function groups($http) {
  this.get = function() {
    const tempEventId = 1;
    return $http({
      method: 'GET',
      url: `/event/${tempEventId}/groups`
    })
    .then(response => response.data)
    .catch(console.error);
  }
}

module.exports = groups;
