export const createChatBotSlice = (set) => ({
    messages: [
        {
            sender: 'bot',
            text: 'Hello! 👋 I’m Petko’s virtual assistant. How can I help you?',
        },
    ],
    conversation: [],

    modalPosition: { x: 0, y: 0 },

    setConversation: (newConv) => set({ conversation: newConv }),
    setModalPosition: (pos) => set({ modalPosition: pos }),

    addMessage: (msg) =>
        set((state) => ({
            messages: [...state.messages, msg],
        })),
});
