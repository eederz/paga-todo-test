import {create} from "zustand";

type CopyStore = {
    creatorCopy: string;
};

export const useCopyStore = create<CopyStore>(()=> ({creatorCopy: 'This practical test was performed by Eduardo Baños'}))