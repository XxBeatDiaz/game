export async function getAllRiddles() {
    try {
        const response = await fetch('http://localhost:3000/riddles');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching riddles:', error);
        return;
    }
}

export async function getRiddleById(id) {  
    try {
        const response = await fetch(`http://localhost:3000/riddles/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching riddle:', error);
        return;
    }
}

export async function getRiddlesByDifficulty(difficulty) {
    try {
        const response = await fetch(`http://localhost:3000/riddles/difficulty/${difficulty}`)
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error fetching riddles by difficulty: ', error);
        return;
    }
}

export async function createRiddle(riddle) {
    try {
        const response = await fetch('http://localhost:3000/riddles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(riddle),
        });
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error creating riddle:', error);
        return;
    }
}

export async function updateRiddle(riddle) {
    try {
        const response = await fetch(`http://localhost:3000/riddles`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(riddle),
        });
        const data =  await response.json();
        return data;
    } catch (error) {
        console.error('Error updating riddle:', error);
        return;
    }
}

export async function deleteRiddle(id) {
    try {
        const response = await fetch(`http://localhost:3000/riddles/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            return true;
        } else {
            console.error('Error deleting riddle:', response.statusText);
            return false;
        }
    } catch (error) {
        console.error('Error deleting riddle:', error);
        return false;
    }
}