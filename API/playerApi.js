export async function getPlayerByName(name) {
    try {
        const response = await fetch(`http://localhost:3000/Players/${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching player:', error);
        return;
    }
}

export async function createPlayer(player) {
    try {
        const response = await fetch('http://localhost:3000/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        });
        const data = await response.json();
        console.log(data.message);
        
        return data.player;
    } catch (error) {
        console.error('Error creating player:', error);
        return;
    }
}