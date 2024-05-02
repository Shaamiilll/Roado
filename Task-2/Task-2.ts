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
