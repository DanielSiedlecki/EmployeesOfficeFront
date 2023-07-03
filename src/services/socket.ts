import { io } from 'socket.io-client';
import { config } from '../config';
import { ref } from 'vue';

const socket = io(config.socketEndpoint);

const state = {
  isConnecting: ref(false),
  RefreshPage: ref(false)
};

export async function connect_socket() {
  return new Promise((resolve, reject) => {
    socket.connect();
    socket.on('connect', () => {
      console.log("Połączono z serwerem");
      state.isConnecting.value = true;
      resolve(socket);
    });

    socket.on('connect_error', (error) => {
      console.error("Błąd połączenia z serwerem");
      state.isConnecting.value = false;
      reconnect_socket().catch((error) => {
        console.error("Błąd podczas ponownego łączenia:", error);
        state.isConnecting.value = false;
        reconnect_socket()
      });
      reject(error);
    });
  });
}

export function disconnect_socket() {
  socket.disconnect();
  console.log('Rozłączono z serwerem Socket.IO');
  state.isConnecting.value = false;
}

export function disconnect_tracking() {
  socket.on('disconnect', () => {
    console.log("Zerwano połączenie");
    state.isConnecting.value = false;
    reconnect_socket().catch((error) => {
      console.error("Błąd podczas ponownego łączenia:", error); 
      state.isConnecting.value = false;
    });
  });
}

export async function reconnect_socket() {
  console.log('Próba ponownego połączenia');
  state.isConnecting.value = false;
  

  while (state.isConnecting.value) {
    try {
      await connect_socket();
      console.log('Ponownie połączono z serwerem');
      state.isConnecting.value = true;
    } catch (error) {
      console.error('Błąd podczas ponownego łączenia:', error);
      state.isConnecting.value = false;
    }
  }
}

export function getIsConnecting() {
  return state.isConnecting.value;
}

export function listenRefreshPage(callback : any) {
  socket.on('RefreshPage', (value) => {
    callback(value)
  })
}