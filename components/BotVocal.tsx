import { useState } from "react";
import SuperBotData from "./SuperBotData";

export default function ReussitessBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // TODO: remets ici ton JSX et ta logique, mais sans rajouter d'autre "export default"
  return null;
}
