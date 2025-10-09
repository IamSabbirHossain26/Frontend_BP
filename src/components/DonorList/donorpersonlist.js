export const donorpersonelist = [
  { id: 1, name: 'Alex', bloodGroup: 'O+', location: 'California', contactNumber: '999856745' },
  { id: 2, name: 'Maya', bloodGroup: 'A-', location: 'New York', contactNumber: '888123456' },
  { id: 3, name: 'Ravi', bloodGroup: 'B+', location: 'Mumbai', contactNumber: '777654321' },
  { id: 4, name: 'Lina', bloodGroup: 'AB+', location: 'Dhaka', contactNumber: '01987654321' },
  { id: 5, name: 'John', bloodGroup: 'O-', location: 'Texas', contactNumber: '666987654' },
  { id: 6, name: 'Sara', bloodGroup: 'A+', location: 'London', contactNumber: '447123456789' },
  { id: 7, name: 'Tariq', bloodGroup: 'B-', location: 'Dubai', contactNumber: '971501234567' },
  { id: 8, name: 'Emily', bloodGroup: 'AB-', location: 'Toronto', contactNumber: '4169876543' },
  { id: 9, name: 'Chen', bloodGroup: 'O+', location: 'Beijing', contactNumber: '8613912345678' },
  { id: 10, name: 'Fatima', bloodGroup: 'A-', location: 'Istanbul', contactNumber: '905321234567' },
  { id: 11, name: 'Carlos', bloodGroup: 'B+', location: 'São Paulo', contactNumber: '5511998765432' },
  { id: 12, name: 'Nina', bloodGroup: 'AB+', location: 'Berlin', contactNumber: '4917612345678' },
  { id: 13, name: 'Omar', bloodGroup: 'O-', location: 'Cairo', contactNumber: '201234567890' },
  { id: 14, name: 'Yuki', bloodGroup: 'A+', location: 'Tokyo', contactNumber: '81345678901' },
  { id: 15, name: 'Grace', bloodGroup: 'B-', location: 'Sydney', contactNumber: '61298765432' },
  { id: 16, name: 'Ivan', bloodGroup: 'AB-', location: 'Moscow', contactNumber: '74951234567' },
  { id: 17, name: 'Leila', bloodGroup: 'O+', location: 'Tehran', contactNumber: '982112345678' },
  { id: 18, name: 'Sam', bloodGroup: 'A-', location: 'Chicago', contactNumber: '3121234567' },
  { id: 19, name: 'Zara', bloodGroup: 'B+', location: 'Lahore', contactNumber: '923001234567' },
  { id: 20, name: 'Noah', bloodGroup: 'AB+', location: 'Paris', contactNumber: '33123456789' },
  // 👇 Additional 80 entries generated below
  ...Array.from({ length: 80 }, (_, i) => {
    const id = i + 21;
    const names = ['Ava', 'Liam', 'Sophia', 'Ethan', 'Isla', 'Leo', 'Chloe', 'Mason', 'Layla', 'Lucas'];
    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
    const cities = ['Rome', 'Madrid', 'Seoul', 'Bangkok', 'Jakarta', 'Hanoi', 'Cape Town', 'Oslo', 'Zurich', 'Vienna'];
    const name = `${names[i % names.length]}${id}`;
    const bloodGroup = bloodGroups[i % bloodGroups.length];
    const location = cities[i % cities.length];
    const contactNumber = `${id}${Math.floor(100000000 + Math.random() * 900000000)}`;
    return { id, name, bloodGroup, location, contactNumber };
  })
];
