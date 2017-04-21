<h1 class="mdc-typography--display1">Tell us about yourself!</h1>
<form action="#" id="greeting-form">
  <div>
    <div class="mdc-form-field">
      <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
        <input id="firstname" type="text" class="mdc-textfield__input">
        <label for="firstname" class="mdc-textfield__label">
          First Name
        </label>
      </div>
    </div>

    <div class="mdc-form-field">
      <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
        <input id="lastname" type="text" class="mdc-textfield__input">
        <label for="lastname" class="mdc-textfield__label">
          Last Name
        </label>
      </div>
    </div>
  </div>

  <button type="submit"
          class="mdc-button
                 mdc-button--raised
                 mdc-button--primary
                 mdc-ripple-surface"
          data-mdc-auto-init="MDCRipple">
    Print Greeting
  </button>
</form>

<!-- The p element below is where we'll eventually output our greeting -->
<p class="mdc-typography--headline" id="greeting"></p>

<h1>Choose your element</h1>
<div class="cards">
  <div class="mdc-card element-card earth">
    <section class="mdc-card__media mdc-theme--primary-bg">
      <h1 class="mdc-card__title mdc-card__title--large mdc-theme--text-primary-on-primary">Earth</h1>
      <h2 class="mdc-card__subtitle mdc-theme--text-primary-on-primary">A solid decision.</h2>
    </section>
    <section class="mdc-card__actions">
      <button class="mdc-button mdc-button--primary mdc-button--compact mdc-card__action">Pick this element</button>
    </section>
  </div>

  <div class="mdc-card element-card wind">
    <section class="mdc-card__media mdc-theme--primary-bg">
      <h1 class="mdc-card__title mdc-card__title--large mdc-theme--text-primary-on-primary">Wind</h1>
      <h2 class="mdc-card__subtitle">Stormy weather ahead.</h2>
    </section>
    <section class="mdc-card__actions">
      <button class="mdc-button mdc-button--primary mdc-button--compact mdc-card__action">Pick this element</button>
    </section>
  </div>

  <div class="mdc-card element-card fire">
    <section class="mdc-card__media mdc-theme--primary-bg">
      <h1 class="mdc-card__title mdc-card__title--large mdc-theme--text-primary-on-primary">Fire</h1>
      <h2 class="mdc-card__subtitle mdc-theme--text-primary-on-primary">Hot-headed much?</h2>
    </section>
    <section class="mdc-card__actions">
      <button class="mdc-button mdc-button--primary mdc-button--compact mdc-card__action">Pick this element</button>
    </section>
  </div>

  <div class="mdc-card element-card water">
    <section class="mdc-card__media mdc-theme--primary-bg">
      <h1 class="mdc-card__title mdc-card__title--large mdc-theme--text-primary-on-primary">Water</h1>
      <h2 class="mdc-card__subtitle mdc-theme--text-primary-on-primary">Go with the flow.</h2>
    </section>
    <section class="mdc-card__actions">
      <button class="mdc-button mdc-button--primary mdc-button--compact mdc-card__action">Pick this element</button>
    </section>
  </div>
</div>

<script>
  document.getElementById('greeting-form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var firstname = evt.target.elements.firstname.value;
    var lastname = evt.target.elements.lastname.value;
    var greeting = 'Hello';
    if (firstname || lastname) {
      greeting += ', ';
      if (firstname && lastname) {
        greeting += firstname + ' ' + lastname;
      } else if (lastname) {
        greeting += 'Mx. ' + lastname;
      } else {
        greeting += firstname;
      }
    }
    greeting += '!';

    document.getElementById('greeting').textContent = greeting;
  });
</script>