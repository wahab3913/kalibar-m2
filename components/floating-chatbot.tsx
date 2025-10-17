"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, User, Minimize2, Maximize2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export { FloatingChatbot }
export default FloatingChatbot

function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI Operations Assistant. I can help you analyze driver performance, optimize routes, review KPIs, and provide operational insights. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("performance") || lowerMessage.includes("driver")) {
      return "📊 **Driver Performance Analysis**\n\nCurrent fleet average: **71.2% efficiency**\n\n**Top Performers:**\n• Mike Davis (West) - 73.8%\n• John Smith (North) - 72.9%\n\n**Needs Attention:**\n• Sarah Johnson (South) - 68.9%\n\nWould you like detailed performance metrics for specific drivers or regions?"
    }

    if (lowerMessage.includes("route") || lowerMessage.includes("optimization")) {
      return "🗺️ **Route Optimization Insights**\n\n**Current Issues:**\n• 3 routes with 5+ hour stop times\n• Highway routes showing 12% longer completion times\n\n**Recommendations:**\n• Redistribute stops on Route ATL-02\n• Consider alternative routing for high-traffic areas\n\nNeed specific route analysis or optimization suggestions?"
    }

    if (lowerMessage.includes("kpi") || lowerMessage.includes("metrics")) {
      return "📈 **Key Performance Indicators**\n\n**Current Metrics:**\n• Shift Mismatches: **7.8%** ✅\n• Loading Completion: **94.3%** ✅\n• Dispatch Comments: **22.1%**\n• Manager Comments: **75.0%**\n\n**Best Region:** West (6.3% mismatch)\n**Focus Area:** South region improvement\n\nWant detailed KPI breakdown by region or time period?"
    }

    if (lowerMessage.includes("manager") || lowerMessage.includes("user") || lowerMessage.includes("company")) {
      return "👥 **User Management Overview**\n\n**Active Users:**\n• 3 Managers across 4 warehouses\n• 68 Active drivers\n• 5 Regional supervisors\n\n**Recent Activity:**\n• 12 new user assignments this week\n• 2 pending manager approvals\n\nNeed help with user assignments, permissions, or company structure?"
    }

    if (lowerMessage.includes("report") || lowerMessage.includes("summary")) {
      return "📋 **Latest Reports Summary**\n\n**Today's Highlights:**\n• Overall Efficiency: **95.3%** ⬆️\n• Total Deliveries: 2,156 stops\n• Gallons Delivered: 125.4K\n\n**Available Reports:**\n• Daily Performance Dashboard\n• Weekly Summary Reports\n• KPI Process Adherence\n\nWhich specific report or time period interests you?"
    }

    if (lowerMessage.includes("help") || lowerMessage.includes("what can you do")) {
      return "🤖 **AI Assistant Capabilities**\n\n**I can help you with:**\n\n📊 **Analytics & Reports**\n• Performance analysis\n• KPI monitoring\n• Operational summaries\n\n👥 **User Management**\n• Driver assignments\n• Manager oversight\n• Company structure\n\n🗺️ **Operations**\n• Route optimization\n• Efficiency insights\n• Process improvements\n\n**Just ask me anything about your operations!**"
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "👋 **Welcome to Kalibur Operations!**\n\nI'm here to help you optimize your delivery operations. I can provide insights on:\n\n• **Driver Performance** - Efficiency metrics and recommendations\n• **Route Analysis** - Optimization opportunities\n• **KPI Monitoring** - Real-time operational metrics\n• **Operational Reports** - Comprehensive summaries\n\nWhat aspect of your operations would you like to explore today?"
    }

    return "🔍 **How can I assist you?**\n\nI specialize in:\n• **Performance Analytics** - Driver and route efficiency\n• **Operational Reports** - Daily, weekly, and custom summaries\n• **KPI Analysis** - Process adherence and metrics\n• **Management Insights** - User and company oversight\n\nPlease let me know what specific information you need!"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: generateBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1200 + Math.random() * 800,
    ) // Random delay between 1.2-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <Card
          className={cn(
            "fixed bottom-20 right-6 shadow-2xl border border-border/50 z-50 flex flex-col bg-background/95 backdrop-blur-md transition-all duration-500 ease-out animate-in slide-in-from-bottom-4 fade-in-0",
            isMinimized ? "w-80 h-16" : "w-[380px] h-[500px]",
          )}
        >
          <CardHeader className="bg-gradient-to-r from-primary/90 to-primary text-primary-foreground p-0 rounded-t-lg flex-shrink-0 border-b border-primary/20">
            <div className="flex items-center justify-between p-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-primary-foreground text-sm">AI Assistant</div>
                  <div className="text-xs text-primary-foreground/70 font-normal">Online</div>
                </div>
              </CardTitle>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-7 w-7 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-7 w-7 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="flex-1 p-0 flex flex-col min-h-0 overflow-hidden">
              <ScrollArea className="flex-1 p-3 max-h-[380px] overflow-hidden">
                <div className="space-y-3 min-h-0">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
                        message.sender === "user" ? "justify-end" : "justify-start",
                      )}
                    >
                      {message.sender === "bot" && (
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Sparkles className="h-3 w-3 text-primary" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "max-w-[280px] rounded-2xl px-3 py-2 text-sm break-words overflow-hidden",
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-muted text-foreground rounded-bl-md border border-border/30",
                        )}
                      >
                        <div className="whitespace-pre-wrap leading-relaxed break-words overflow-wrap-anywhere">
                          {message.content}
                        </div>
                        <div
                          className={cn(
                            "text-xs mt-1 opacity-60",
                            message.sender === "user" ? "text-primary-foreground/60" : "text-muted-foreground",
                          )}
                        >
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                      {message.sender === "user" && (
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1 border border-border/30">
                          <User className="h-3 w-3 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-2 justify-start animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <div className="bg-muted text-muted-foreground rounded-2xl rounded-bl-md px-3 py-2 text-sm border border-border/30">
                        <div className="flex gap-1 items-center">
                          <span className="text-xs text-muted-foreground mr-2">Thinking</span>
                          <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
                          <div
                            className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              <div className="p-3 border-t border-border/30 flex-shrink-0 bg-background/80">
                <div className="flex gap-2 items-end">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about operations..."
                    className="flex-1 text-sm h-9 bg-background border-border/50 focus:border-primary/50 rounded-lg transition-colors"
                    disabled={isTyping}
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="h-9 w-9 flex-shrink-0 rounded-lg bg-primary hover:bg-primary/90 transition-colors"
                  >
                    <Send className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}

      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-105 active:scale-95",
          isOpen
            ? "bg-muted hover:bg-muted/80 border border-border text-foreground"
            : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/25",
        )}
        size="icon"
      >
        {isOpen ? (
          <X className="h-5 w-5 transition-transform duration-200" />
        ) : (
          <div className="relative">
            <Sparkles className="h-5 w-5 transition-transform duration-200" />
          </div>
        )}
      </Button>
    </>
  )
}
