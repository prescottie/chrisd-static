$( document ).ready(function() {
    $('.dropdown-button').dropdown({
      inDuration: 500,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      coverTrigger: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      closeOnClick: false,
      }
    );

    $('.nested-dropdown-button').dropdown({
      inDuration: 500,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      coverTrigger: false, // Displays dropdown below the button
      }
    );

});
