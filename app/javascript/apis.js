function getToken() {
  let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  console.log('token = ' + token)
  return token
}

export function fetchLists(setLists) {
  fetch('/lists.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log("fetched " + data.length + " List(s)")
      console.log(data)
      setLists(data)
    });
}

export function fetchTasks(listID, setTasks) {
  fetch('/lists/'+listID+'/tasks.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log("fetched " + data.length + " Task(s)")
      console.log(data)
      setTasks(data)
    });
}

export function fetchSharees(listID, setSharees) {
  fetch('/lists/' + listID + '/sharees.json')
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      if (data) {
        console.log("fetched Sharee(s) = " + data)
        setSharees(data)
      }
    });
}

export function createList(list, onListCreated) {
  console.log("CREATING List " + list.name)
  console.log(list)

  fetch('/lists.json', 
  {
    method: 'POST',
    body: JSON.stringify({list: list}),
    headers: { 
      'Content-Type': 'application/json',
      'X-CSRF-Token': getToken()
    }
  }).then((response) => { 
    console.log(response)
    if (onListCreated) onListCreated()
  })
}

export function createTask(listID, task, onTaskCreated) {
  console.log("CREATING Task " + task.name + " - priority=" + task.priority)
  console.log(task)

  fetch('/lists/' + listID + '/tasks.json', 
  {
    method: 'POST',
    body: JSON.stringify({task: task}),
    headers: { 
      'Content-Type': 'application/json',
      'X-CSRF-Token': getToken()
    }
  }).then((response) => { 
    console.log(response)
    if (onTaskCreated) onTaskCreated()
  })
}

export function updateTask(task, onTaskUpdated) {
  console.log('UPDATING Task ' + task.id)

  fetch('/tasks/' + task.id + '.json', 
  {
    method: 'PUT',
    body: JSON.stringify({task: task}),
    headers: { 
      'Content-Type': 'application/json',
      'X-CSRF-Token': getToken()
    }
  }).then((response) => { 
    console.log(response)
    if (onTaskUpdated) onTaskUpdated()
  })
}

export function deleteTask(id, onTaskDeleted) {
  console.log('DELETING Task ' + id)

  fetch('/tasks/' + id + '.json', 
  {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json',
      'X-CSRF-Token': getToken()
    }
  }).then((response) => { 
    console.log(response)
    if (onTaskDeleted) onTaskDeleted()
  })
}
