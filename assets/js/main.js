// Polaris Space Agency — main.js
// Simplified validation logic for forms

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      
      // Clear previous error messages
      form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      form.querySelectorAll('.error-msg').forEach(el => el.remove());

      const showError = (input, message) => {
        isValid = false;
        input.classList.add('is-invalid');
        const err = document.createElement('div');
        err.className = 'invalid-feedback error-msg';
        err.style.display = 'block';
        err.textContent = message;
        input.parentNode.appendChild(err);
      };

      // 1. Name validation (alphabetic characters only)
      const nameFields = form.querySelectorAll('[id*="fname"], [id*="lname"]');
      nameFields.forEach(field => {
        const val = field.value.trim();
        if (!val) {
          showError(field, 'Name is required.');
        } else if (!/^[A-Za-z\s]+$/.test(val)) {
          showError(field, 'Name must contain only alphabetic characters.');
        }
      });

      // 2. Email validation (standard email check)
      const emailFields = form.querySelectorAll('input[type="email"], [id*="email"]');
      emailFields.forEach(field => {
        const val = field.value.trim();
        if (!val) {
          showError(field, 'Email address is required.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          showError(field, 'Please enter a valid email address.');
        }
      });

      // 3. Contact Number validation (exactly 10 digits)
      const phoneFields = form.querySelectorAll('[id*="phone"]');
      phoneFields.forEach(field => {
        const val = field.value.trim();
        if (!val) {
          showError(field, 'Contact number is required.');
        } else if (!/^\d{10}$/.test(val)) {
          showError(field, 'Contact number must be exactly 10 digits.');
        }
      });

      // 4. Password validation (for registration match check)
      const pass = form.querySelector('#reg-password');
      const confirm = form.querySelector('#reg-confirm');
      if (pass && confirm) {
        if (!pass.value) {
          showError(pass, 'Password is required.');
        }
        if (pass.value !== confirm.value) {
          showError(confirm, 'Passwords do not match.');
        }
      }

      // 5. Generic required check for other fields
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim() && !field.classList.contains('is-invalid')) {
          showError(field, 'This field is required.');
        }
      });

      // Success feedback
      if (isValid) {
        const successMsg = form.querySelector('[id*="success"]');
        if (successMsg) {
          successMsg.classList.remove('d-none');
          setTimeout(() => successMsg.classList.add('d-none'), 6000);
        }
        form.reset();
      }
    });
  });
});
