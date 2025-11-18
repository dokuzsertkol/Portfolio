"use client";
import React, { createContext, useContext } from "react";

type MessageContextType = any;

const MessageContext = createContext<MessageContextType>(null);

type Props = {
  messages: any, 
  children: React.ReactNode
};

export const MessageProvider = ({ messages, children }: Props) => (
    <MessageContext.Provider value={messages}>
        {children}
    </MessageContext.Provider>
);

export const useMessages = () => useContext(MessageContext);
