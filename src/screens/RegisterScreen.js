// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { registerUser } from '../utils/authService';

// const RegisterScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userType, setUserType] = useState('member');
//   const [isLoading, setIsLoading] = useState(false);

//   const validateForm = () => {
//     if (!name.trim()) {
//       Alert.alert('Error', 'Please enter your full name');
//       return false;
//     }
//     if (!email.trim()) {
//       Alert.alert('Error', 'Please enter your email');
//       return false;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       Alert.alert('Error', 'Please enter a valid email address');
//       return false;
//     }
//     if (!password) {
//       Alert.alert('Error', 'Please enter a password');
//       return false;
//     }
//     if (password.length < 6) {
//       Alert.alert('Error', 'Password must be at least 6 characters long');
//       return false;
//     }
//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return false;
//     }
//     return true;
//   };

//   const handleRegister = async () => {
//     if (!validateForm()) return;

//     setIsLoading(true);
//     try {
//       const userData = {
//         name,
//         email,
//         password,
//         userType,
//       };

//       await registerUser(userData);
//       Alert.alert(
//         'Success',
//         'Registration successful! Please login with your credentials.',
//         [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('Login'),
//           },
//         ]
//       );
//     } catch (error) {
//       Alert.alert('Error', error.message || 'Registration failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         style={styles.keyboardView}
//       >
//         <ScrollView 
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled"
//         >
//           <View style={styles.content}>
//             <Text style={styles.title}>Create Account</Text>
//             <Text style={styles.subtitle}>Join our library community</Text>

//             <View style={styles.userTypeContainer}>
//               <TouchableOpacity
//                 style={[
//                   styles.userTypeButton,
//                   userType === 'member' && styles.userTypeButtonActive,
//                 ]}
//                 onPress={() => setUserType('member')}
//               >
//                 <Text
//                   style={[
//                     styles.userTypeText,
//                     userType === 'member' && styles.userTypeTextActive,
//                   ]}
//                 >
//                   Member
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[
//                   styles.userTypeButton,
//                   userType === 'admin' && styles.userTypeButtonActive,
//                 ]}
//                 onPress={() => setUserType('admin')}
//               >
//                 <Text
//                   style={[
//                     styles.userTypeText,
//                     userType === 'admin' && styles.userTypeTextActive,
//                   ]}
//                 >
//                   Administrator
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.form}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Full Name"
//                 value={name}
//                 onChangeText={setName}
//                 autoCapitalize="words"
//                 editable={!isLoading}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 editable={!isLoading}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//                 editable={!isLoading}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChangeText={setConfirmPassword}
//                 secureTextEntry
//                 editable={!isLoading}
//               />

//               <TouchableOpacity 
//                 style={[styles.button, isLoading && styles.buttonDisabled]} 
//                 onPress={handleRegister}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.buttonText}>
//                   {isLoading ? 'Creating Account...' : 'Create Account'}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.loginLink}
//                 onPress={() => navigation.navigate('Login')}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.loginText}>
//                   Already have an account? <Text style={styles.loginTextBold}>Sign In</Text>
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F0E1',
//   },
//   keyboardView: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//   },
//   content: {
//     flex: 1,
//     padding: 24,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1E88E5',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#333333',
//     textAlign: 'center',
//     marginBottom: 32,
//   },
//   userTypeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 32,
//     gap: 16,
//   },
//   userTypeButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#1E88E5',
//   },
//   userTypeButtonActive: {
//     backgroundColor: '#1E88E5',
//   },
//   userTypeText: {
//     fontSize: 16,
//     color: '#1E88E5',
//   },
//   userTypeTextActive: {
//     color: '#FFFFFF',
//   },
//   form: {
//     gap: 16,
//   },
//   input: {
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#9E9E9E',
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#1E88E5',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   buttonDisabled: {
//     backgroundColor: '#9E9E9E',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   loginLink: {
//     marginTop: 16,
//     alignItems: 'center',
//   },
//   loginText: {
//     fontSize: 16,
//     color: '#333333',
//   },
//   loginTextBold: {
//     color: '#1E88E5',
//     fontWeight: 'bold',
//   },
// });

// export default RegisterScreen;
/////////////

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { registerUser } from '../utils/service/authService';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage importu

// const RegisterScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userType, setUserType] = useState('member');
//   const [isLoading, setIsLoading] = useState(false);

//   const validateForm = () => {
//     if (!name.trim()) {
//       Alert.alert('Error', 'Please enter your full name');
//       return false;
//     }
//     if (!email.trim()) {
//       Alert.alert('Error', 'Please enter your email');
//       return false;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       Alert.alert('Error', 'Please enter a valid email address');
//       return false;
//     }
//     if (!password) {
//       Alert.alert('Error', 'Please enter a password');
//       return false;
//     }
//     if (password.length < 6) {
//       Alert.alert('Error', 'Password must be at least 6 characters long');
//       return false;
//     }
//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return false;
//     }
//     return true;
//   };

//   const handleRegister = async () => {
//     if (!validateForm()) return;

//     setIsLoading(true);
//     try {
//       const userData = {
//         name,
//         email,
//         password,
//         userType,
//       };

//       // Kullanıcıyı kaydet
//       await registerUser(userData);

//       // Kullanıcı bilgilerini AsyncStorage'a kaydet
//       await AsyncStorage.setItem('userInfo', JSON.stringify(userData));

//       Alert.alert(
//         'Success',
//         'Registration successful! Please login with your credentials.',
//         [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('Login'),
//           },
//         ]
//       );
//     } catch (error) {
//       Alert.alert('Error', error.message || 'Registration failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         style={styles.keyboardView}
//       >
//         <ScrollView 
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled"
//         >
//           <View style={styles.content}>
//             <Text style={styles.title}>Create Account</Text>
//             <Text style={styles.subtitle}>Join our library community</Text>

//             <View style={styles.userTypeContainer}>
//               <TouchableOpacity
//                 style={[
//                   styles.userTypeButton,
//                   userType === 'member' && styles.userTypeButtonActive,
//                 ]}
//                 onPress={() => setUserType('member')}
//               >
//                 <Text
//                   style={[
//                     styles.userTypeText,
//                     userType === 'member' && styles.userTypeTextActive,
//                   ]}
//                 >
//                   Member
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[
//                   styles.userTypeButton,
//                   userType === 'admin' && styles.userTypeButtonActive,
//                 ]}
//                 onPress={() => setUserType('admin')}
//               >
//                 <Text
//                   style={[
//                     styles.userTypeText,
//                     userType === 'admin' && styles.userTypeTextActive,
//                   ]}
//                 >
//                   Administrator
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.form}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Full Name"
//                 value={name}
//                 onChangeText={setName}
//                 autoCapitalize="words"
//                 editable={!isLoading}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 editable={!isLoading}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//                 editable={!isLoading}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChangeText={setConfirmPassword}
//                 secureTextEntry
//                 editable={!isLoading}
//               />

//               <TouchableOpacity 
//                 style={[styles.button, isLoading && styles.buttonDisabled]} 
//                 onPress={handleRegister}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.buttonText}>
//                   {isLoading ? 'Creating Account...' : 'Create Account'}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.loginLink}
//                 onPress={() => navigation.navigate('Login')}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.loginText}>
//                   Already have an account? <Text style={styles.loginTextBold}>Sign In</Text>
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F0E1',
//   },
//   keyboardView: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//   },
//   content: {
//     flex: 1,
//     padding: 24,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1E88E5',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#333333',
//     textAlign: 'center',
//     marginBottom: 32,
//   },
//   userTypeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 32,
//     gap: 16,
//   },
//   userTypeButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#1E88E5',
//   },
//   userTypeButtonActive: {
//     backgroundColor: '#1E88E5',
//   },
//   userTypeText: {
//     fontSize: 16,
//     color: '#1E88E5',
//   },
//   userTypeTextActive: {
//     color: '#FFFFFF',
//   },
//   form: {
//     gap: 16,
//   },
//   input: {
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#9E9E9E',
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#1E88E5',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   buttonDisabled: {
//     backgroundColor: '#9E9E9E',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   loginLink: {
//     marginTop: 16,
//     alignItems: 'center',
//   },
//   loginText: {
//     fontSize: 16,
//     color: '#333333',
//   },
//   loginTextBold: {
//     color: '#1E88E5',
//     fontWeight: 'bold',
//   },
// });

// export default RegisterScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { registerUser } from '../utils/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('member');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your full name');
      return false;
    }
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }
    if (!password) {
      Alert.alert('Error', 'Please enter a password');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const userData = {
        name,
        email,
        password,
        userType,
      };

      await registerUser(userData);

      await AsyncStorage.setItem('userInfo', JSON.stringify(userData));

      // Alert yerine önce navigate, sonra kısa süre sonra Alert gösterimi
      navigation.navigate('Login');
      setTimeout(() => {
        Alert.alert('Success', 'Registration successful! Please login.');
      }, 300);
    } catch (error) {
      Alert.alert('Error', error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join our library community</Text>

            <View style={styles.userTypeContainer}>
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  userType === 'member' && styles.userTypeButtonActive,
                ]}
                onPress={() => setUserType('member')}
              >
                <Text
                  style={[
                    styles.userTypeText,
                    userType === 'member' && styles.userTypeTextActive,
                  ]}
                >
                  Member
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  userType === 'admin' && styles.userTypeButtonActive,
                ]}
                onPress={() => setUserType('admin')}
              >
                <Text
                  style={[
                    styles.userTypeText,
                    userType === 'admin' && styles.userTypeTextActive,
                  ]}
                >
                  Administrator
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                editable={!isLoading}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!isLoading}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!isLoading}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                editable={!isLoading}
              />

              <TouchableOpacity 
                style={[styles.button, isLoading && styles.buttonDisabled]} 
                onPress={handleRegister}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginLink}
                onPress={() => navigation.navigate('Login')}
                disabled={isLoading}
              >
                <Text style={styles.loginText}>
                  Already have an account? <Text style={styles.loginTextBold}>Sign In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E1',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E88E5',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 32,
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
    gap: 16,
  },
  userTypeButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1E88E5',
  },
  userTypeButtonActive: {
    backgroundColor: '#1E88E5',
  },
  userTypeText: {
    fontSize: 16,
    color: '#1E88E5',
  },
  userTypeTextActive: {
    color: '#FFFFFF',
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#9E9E9E',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    color: '#333333',
  },
  loginTextBold: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
