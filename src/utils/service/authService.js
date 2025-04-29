// utils/authService.js

// Kullanıcı kaydı yapar gibi simülasyon
export const registerUser = async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userData); // Burada normalde API'den gelen cevap döner
      }, 1000);
    });
  };
  
  // Kullanıcı girişini simüle eder
  export const loginUser = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Basit kontrol – gerçek bir sistemde API'den doğrulama yapılır
        if (email && password) {
          resolve({
            name: 'Demo User',
            email,
            userType: email === 'admin@example.com' ? 'admin' : 'member',
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };
  