class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    handleUserMessage = (message) => {
        const botMessage = this.createChatBotMessage(`You said: "${message}"`);
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
}

export default ActionProvider;