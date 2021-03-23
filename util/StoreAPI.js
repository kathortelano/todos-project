import { useStore } from "./Store";
import { useState } from 'react'

export const useGlobalStore = () => {
    const { state, dispatch } = useStore();

    return {
        ...state,
        toggle: () => {
          
                dispatch({
                    type: "TOGGLE",
                    payload: !state.dark,
                });

         
        },
           
    };
};
