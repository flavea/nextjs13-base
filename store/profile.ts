import axios from 'axios';
import { create } from 'zustand';

interface iProfileStore {
  profile: any;
  getProfile: (arg?: boolean) => void;
}

const useProfileStore = create<iProfileStore>((set) => ({
  profile: null,
  getProfile: async () => {
    const get = await axios.get('https://randomuser.me/api/');
    if (get.status === 200) {
      set({ profile: get.data });
    } else {
      console.error(get.status);
    }
  },
}));

export default useProfileStore;
