export default interface Employee {
    imie: string;
    telefon: number;
  }
  
  export default interface EmployeeData {
    EmployeesList: Employee[];
    visibilitylist: boolean
  }