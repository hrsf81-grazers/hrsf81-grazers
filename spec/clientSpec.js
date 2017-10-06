const { expect } = chai;

describe('Client Spec', () => {
  describe('#indexOf', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });

  describe('sending messages', () => {
    let groupsGetMock;
    let scope;
    let element;

    beforeEach(module('eventHUD'));

    beforeEach(inject(function($rootScope, _$compile_, groups) {
      scope = $rootScope.$new();
      $compile = _$compile_;

      groupsGetMock = sinon.spy(function() {
        return Promise.resolve([
          {
            id: 1,
            name: 'Group 1',
            eventId: 1
          },
          {
            id: 2,
            name: 'Group 2',
            eventId: 1
          }
        ])
      });

      groups.get = groupsGetMock;

      scope.user = {
        id: 1,
        firstName: 'Christine',
        lastName: 'W',
        role: 'organizer'
      };

      element = angular.element('<message-send user="user"></message-send>');
      element = $compile(element)(scope);

      $rootScope.$digest();
    }));

    it('should obtain the list of groups on render', (done) => {
      expect(groupsGetMock.callCount).to.equal(1);
      groupsGetMock.returnValues[0]
        .then((groups) => {
          expect(element.isolateScope().$ctrl.groups).to.exist;
          done();
        });
    });
  });
});
