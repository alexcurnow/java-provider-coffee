import { useEmployee } from "./employeeDataProvider.js"
import { Employee } from "./Employee.js"

const contentElement = document.querySelector('.mainContainer')

export const RenderEmployeeList = () => {
  const employeeData = useEmployee()

  employeeData.forEach(employee => contentElement.innerHTML += Employee(employee))
}
