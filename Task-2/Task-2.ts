type Point = string;
type Trip = [Point, Point];

function generateTrips(pickups: Point[], dropoffs: Point[]): Trip[] {
    const trips: Trip[] = [];

    // Add trips from pickups to warehouse
    pickups.forEach(pickup => {
        trips.push([pickup, 'W']);
    });

    // Add trips from warehouse to dropoffs
    dropoffs.forEach(dropoff => {
        trips.push(['W', dropoff]);
    });

    return trips;
}

// Example usage
const pickups: Point[] = ['A', 'B'];
const dropoffs: Point[] = ['C', 'D'];

const trips = generateTrips(pickups, dropoffs);
trips.forEach((trip, index) => console.log(`trip ${index}: ${JSON.stringify(trip)}`));
// The logic is little complicated i figure it out.
// so from the task, i understand that here is pick-up and drop point and a warehouse
// and figure the valid trips

// get the pickup and drop point as argument
// Using foreach push the pickup into trip array 
// like that drop also

// lastly return the trip 
