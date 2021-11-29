
const rooms = new Map();

interface IRoom {
  players: string[]
} 
export const createRoom = (roomId: string) => {
  rooms.set(roomId, {});
  return rooms.get(roomId);
}