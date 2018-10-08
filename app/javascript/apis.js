function getToken() {
  let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  console.log('token = ' + token)
  return token
}

export function fetchTasks (listID, setTasks) {
  console.log("* fetchTasks()")
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

export function updateTask (task) {
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
  })
}
