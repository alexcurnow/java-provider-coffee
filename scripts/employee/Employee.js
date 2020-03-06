export const Employee = employeeDataArray => {
  return `
  <section class="employee">
  <h4>${employeeDataArray.firstName} ${employeeDataArray.lastName}</h4>
  <ul>
  <li>Job Title: ${employeeDataArray.jobTitle}</li>
  <li>Hours Scheduled: ${employeeDataArray.hoursScheduled}</li>
  </ul>
  </section>
  `
}