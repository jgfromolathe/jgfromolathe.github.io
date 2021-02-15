
$("#seeAnotherFieldGroupWitness").change(function() {
    if ($(this).val() == "yes") {
        $('#otherFieldGroupDivWitness').show();
        $('#otherField1Witness').attr('required','');
        $('#otherField1Witness').attr('data-error', 'This field is required.');
        $('#otherField2Witness').attr('required','');
        $('#otherField2Witness').attr('data-error', 'This field is required.');
        $('#otherField3Witness').attr('required','');
        $('#otherField3Witness').attr('data-error', 'This field is required.');
    } else {
        $('#otherFieldGroupDivWitness').hide();
        $('#otherField1Witness').removeAttr('required');
        $('#otherField1Witness').removeAttr('data-error');
        $('#otherField2Witness').removeAttr('required');
        $('#otherField2Witness').removeAttr('data-error');	
        $('#otherField3Witness').removeAttr('required');
        $('#otherField3Witness').removeAttr('data-error');	
    }
});
$("#seeAnotherFieldGroupWitness").trigger("change");

$("#seeAnotherFieldGroupAttorney").change(function() {
    if ($(this).val() == "yes") {
        $('#otherFieldGroupDivAttorney').show();
        $('#otherField1Attorney').attr('required','');
        $('#otherField1Attorney').attr('data-error', 'This field is required.');
        $('#otherField2Attorney').attr('required','');
        $('#otherField2Attorney').attr('data-error', 'This field is required.');
        $('#otherField3Attorney').attr('required','');
        $('#otherField3Attorney').attr('data-error', 'This field is required.');
    } else {
        $('#otherFieldGroupDivAttorney').hide();
        $('#otherField1Attorney').removeAttr('required');
        $('#otherField1Attorney').removeAttr('data-error');
        $('#otherField2Attorney').removeAttr('required');
        $('#otherField2Attorney').removeAttr('data-error');	
        $('#otherField3Attorney').removeAttr('required');
        $('#otherField3Attorney').removeAttr('data-error');	
    }
});
$("#seeAnotherFieldGroupAttorney").trigger("change");

//Set datepicker to today's date
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;       
document.getElementById("when").value = today;


(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

 

  $(document).ready(function() {


    $("#submitButton").click(function() {
  
      //Fetch form to apply custom Bootstrap validation
      var form = $("#my-form")
      //test to ensure calling form correctly
  
      if (form[0].checkValidity() === false) {
        alert('Form not valid')
        event.preventDefault()
        event.stopPropagation()
      }
      else {
        alert('Form valid - Check console') 
        let myFormData = {
            salutation: document.getElementById("salutation").value,
            firstName: document.getElementById("fname").value,
            lastName: document.getElementById("lname").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            zip: document.getElementById("zip").value,
            phoneNumber: document.getElementById("pnumber").value,
            email: document.getElementById("email").value,
            who: document.getElementById("who").value,
            what: document.getElementById("message").value,
            whereCity: document.getElementById("wherecity").value,
            whereState: document.getElementById("wherestate").value,
            when: document.getElementById("when").value,
            witnessAnswer: document.getElementById("seeAnotherFieldGroupWitness").value,
            witnessFirstName: document.getElementById("otherField1Witness").value,
            witnessLastName: document.getElementById("otherField2Witness").value,
            witnessPhoneNumber: document.getElementById("otherField3Witness").value,
            attorneyAnswer: document.getElementById("seeAnotherFieldGroupAttorney").value,
            attorneyName: document.getElementById("otherField1Attorney").value,
            attorneyPractice: document.getElementById("otherField2Attorney").value,
            attorneyWebsite: document.getElementById("otherField3Attorney").value
              
          }
          console.log(myFormData)
      }
      form.addClass('was-validated');

      
  
      //Make ajax call here
  
    })
  })