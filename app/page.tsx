"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, ClipboardList, TrendingUp, MessageSquare, Github, Twitter, Linkedin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-blue-500/20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Kalibur
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>

          <Link href="/login">
            <Button className="bg-white text-slate-900 hover:bg-gray-100 transition-all">Sign In</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">AI-Powered Platform</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Powerful Dashboard for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Delivery Managers
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-pretty">
              Track daily operations, monitor KPIs, and gain actionable insights — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/50 transition-all"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all bg-transparent"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Manager Dashboard Features</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to manage your operations effectively
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Weekly Recap Card */}
            <Card className="bg-white border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ClipboardList className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900 text-xl mb-3">Weekly Recap</CardTitle>
                <CardDescription className="text-slate-700 text-base">
                  Track weekly performance metrics and driver statistics
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Monthly Review Card */}
            <Card className="bg-white border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900 text-xl mb-3">Monthly Review</CardTitle>
                <CardDescription className="text-slate-700 text-base">
                  Analyze monthly trends and performance patterns
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Quarterly Results Card */}
            <Card className="bg-white border-green-200 hover:shadow-2xl hover:shadow-green-500/10 transition-all group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-slate-900 text-xl mb-3">Quarterly Results</CardTitle>
                <CardDescription className="text-slate-700 text-base">
                  Review quarterly performance and long-term trends
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Chatbot Highlight Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200">AI Assistant</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Smart Assistant for Performance Insights
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                Get instant insights on driver performance and operational metrics with our AI assistant.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Real-time Analysis</p>
                    <p className="text-slate-600 text-sm">Get instant insights on performance metrics</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Natural Language Queries</p>
                    <p className="text-slate-600 text-sm">Ask questions in plain English</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Actionable Recommendations</p>
                    <p className="text-slate-600 text-sm">Receive data-driven suggestions</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side - Chatbot Illustration */}
            <div className="relative">
              <Card className="bg-white border-purple-200 shadow-2xl shadow-purple-500/10">
                <CardHeader>
                  <div className="space-y-4">
                    {/* Chat messages */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-slate-700 text-sm">What was the average delivery time today?</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                      <p className="text-slate-900 text-sm font-semibold mb-2">AI Assistant</p>
                      <p className="text-slate-700 text-sm">
                        The average delivery time today was 28 minutes, which is 12% faster than yesterday. Great
                        improvement!
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-slate-700 text-sm">Show me top performing drivers</p>
                    </div>
                  </div>

                  {/* Floating chatbot icon */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50 animate-pulse">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join delivery managers who trust Kalibur to streamline their operations.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/50 transition-all"
            >
              Start Your Free Trial Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-blue-500/20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-12 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Left - Logo & Tagline */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Kalibur
                </span>
              </div>
              <p className="text-gray-400 text-sm">Empowering delivery managers with intelligent dashboard solutions</p>
            </div>

            {/* Center - Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right - Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center transition-all group"
                >
                  <Github className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center transition-all group"
                >
                  <Twitter className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center transition-all group"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-500/20 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 Kalibur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
