document.addEventListener('DOMContentLoaded', function() {
    const policyForm = document.getElementById('policyForm');
  
    policyForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
   
      const policyType = document.getElementById('policyType').value;
      const policyNumber = document.getElementById('policyNumber').value;
      const vehicleRegistration = document.getElementById('vehicleRegistration').value;
      const engineNumber = document.getElementById('engineNumber').value;
  
     
      console.log('Policy Type:', policyType);
      console.log('Policy Number:', policyNumber);
      console.log('Vehicle Registration:', vehicleRegistration);
      console.log('Engine Number:', engineNumber);
  
     
      policyForm.reset();
    });
  });
