function generateResume() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const degree = document.getElementById('degree').value;
  const institution = document.getElementById('institution').value;
  const gradYear = document.getElementById('gradYear').value;
  const experience = document.getElementById('experience').value;


  const resumeHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    
    <h3>Education</h3>
    <p>${degree} - ${institution} (${gradYear})</p>

    <h3>Experience</h3>
    <p>${experience}</p>
  `;

  const resumeOutput = document.getElementById('resumeOutput');
  resumeOutput.innerHTML = resumeHTML;
  resumeOutput.classList.remove('hidden');
}