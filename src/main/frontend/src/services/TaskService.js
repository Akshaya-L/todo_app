
export async function getAllTasks() {

    try{
        const response = await fetch('/api/tasks');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createTask(data) {
    const response = await fetch(`/api/task`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: data.name, description: data.description})
      })
    return await response.json();
}