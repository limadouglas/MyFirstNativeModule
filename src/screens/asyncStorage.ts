import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  async get(key: string): Promise<any | null> {
    try {
      const rawItem = await AsyncStorage.getItem(key);
      return rawItem ? JSON.parse(rawItem) : null;
    } catch {
      return null;
    }
  },

  async set(key: string, value: any): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch {}
  },

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch {}
  },
};
