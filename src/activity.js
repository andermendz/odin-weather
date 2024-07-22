class activity {
  constructor(name, type, status, dueDate, priority) {
    this.name = name;
    this.type= type;
    this.status = status;
    this.dueDate = dueDate;
    this.priority = priority;
  }

}

export function createActivity(name, type, status, dueDate, priority) {
  
  let newActivityObject = new task(name, type, status, dueDate, priority)
  
  return newActivityObject;
}
 
