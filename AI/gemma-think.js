// Original source: https://antonioleiva.com/enable-gemma-thinking-mode-lm-studio-opencode
// Put this plugin into ~/.config/opencode/plugins
export const GemmaThinkPlugin = async () => {
  return {
    "experimental.chat.messages.transform": async (_input, output) => {
      const messages = output.messages;
      if (!Array.isArray(messages) || messages.length === 0) return;

      const last = messages[messages.length - 1];
      if (!last || last.info.role !== "user") return;

      const model = last.info.model;
      if (!model || model.providerID !== "lmstudio" || model.modelID !== "gemma-4-26b-a4b-it") {
        return;
      }

      const firstTextPart = last.parts.find((part) => part.type === "text");
      if (!firstTextPart) return;

      if (typeof firstTextPart.text !== "string") return;
      if (firstTextPart.text.startsWith("<|think|>")) return;

      firstTextPart.text = `<|think|> ${firstTextPart.text}`;
    },
  };
};