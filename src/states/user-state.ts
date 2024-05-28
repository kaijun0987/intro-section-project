import { create } from "zustand";
import TUser from "../types/user";

const useUser = create<TUser>()((set) => ({
  username: "",
  updateUsername: (username) =>
    set((state) => ({ username: (state.username = username) })),
}));

export default useUser;
