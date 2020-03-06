export const Employee = employeeDataArray => {
  return `
  <section class="employee">
  <ul>
  <li>First Name: ${employeeDataArray.firstName}</li>
  <li>Last Name: ${employeeDataArray.lastName}</li>
  <li>Job Title: ${employeeDataArray.jobTitle}</li>
  <li>Hours Scheduled: ${employeeDataArray.hoursScheduled}</li>
  </ul>
  </section>
  `
}