module.exports = {
  template: `
    <h1>Welcome to Event HUD!</h1>
    <form class="signin-form">
      <div class="signin-input">
        <label for="signin-user-name">What is your name?</label>
        <input id="signin-user-name" type="text"></input>
      </div>
      <div class="signin-input">
        <label for="role-select">Choose your role: </label>
        <select id="role-select" required>
          <option>Organizer</option>
          <option>Staff</option>
        </select>
      </div>
      <div class="signin-input">
        <button>Sign In</button>
      </div>
    </form>
  `
};
