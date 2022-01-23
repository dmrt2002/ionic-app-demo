import {  createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store =   createStore({
    plugins: [createPersistedState()],
    state() {
        return {
            ismemory: false,
            ispasscode: false,
            checkpin:false,
            passcodeentered:false,
            abc: true,
            memories: [
            ],
            passcode:'',
        };
    },
    mutations: {
        addmemory(state, memorydata) {
            const newmemory = {
                id:new Date().toISOString(),
                title: memorydata.title,
                description:memorydata.description,
                image:memorydata.imageurl
            };

            state.memories.unshift(newmemory)
            state.ismemory = true;
        },
        passcodesave(state, passcodepin){
            state.ispasscode = true
            state.passcode = passcodepin
        },
        deletefile(state, memoryId) {
           var index = state.memories.find((memory) => memory.id === memoryId.id);
           let i = state.memories.indexOf(index)
           for(let j = i; j < state.memories.length - 1; j++){
               state.memories[j] = state.memories[j+1]
           }
           state.memories.length--;
            if(state.memories.length === 0) {
                state.ismemory = false
            }
        }
    },
    actions: {
        addmemory(context, memorydata){
            context.commit('addmemory' , memorydata)
        },
        passcodesave(context,passcodepin){
            context.commit('passcodesave' , passcodepin)
        },
        deletefile(context, memory){
            context.commit('deletefile' , memory)
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);
            }
        },
        ismemory(state) {
            return state.ismemory;
        }
    }
});

export default store;