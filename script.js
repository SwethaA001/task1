document.addEventListener('DOMContentLoaded', function() {
    const policyForm = document.getElementById('policyForm');
  
    policyForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Retrieve form data
      const policyType = document.getElementById('policyType').value;
      const policyNumber = document.getElementById('policyNumber').value;
      const vehicleRegistration = document.getElementById('vehicleRegistration').value;
      const engineNumber = document.getElementById('engineNumber').value;
  
      // Perform validation or further processing as needed
      // For example, you can perform validation checks on the input data
  
      // Display the form data (for demonstration purposes)
      console.log('Policy Type:', policyType);
      console.log('Policy Number:', policyNumber);
      console.log('Vehicle Registration:', vehicleRegistration);
      console.log('Engine Number:', engineNumber);
  
      // You can also perform additional actions, such as sending the form data to a server using AJAX
  
      // Reset the form after submission
      policyForm.reset();
    });
  });