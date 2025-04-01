
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  BarChart, 
  MessageSquare, 
  Pencil, 
  Send,
  Check,
  ChevronDown,
  HelpCircle,
  Star,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#e6f2fa]">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg 
              width="40" 
              height="24" 
              viewBox="0 0 40 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0c2f41]"
            >
              <path d="M11.5 4L4 11.5L11.5 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28.5 13L36 20.5L28.5 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 0L19 32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-medium text-[#0c2f41]">YappHQ</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-[#0c2f41] hover:text-[#0c2f41]/80 font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-[#0c2f41] hover:text-[#0c2f41]/80 font-medium">
              Pricing
            </Link>
            <Link to="/dashboard">
              <Button className="rounded-md bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white px-6">
                Sign up
              </Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#0c2f41]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0c2f41] leading-tight">
                Social media<br />on autopilot
              </h1>
              <p className="mt-6 text-xl text-[#0c2f41]/80">
                Schedule posts, manage your content lineup, and track performance—effortlessly.
              </p>
              <div className="mt-8">
                <Button className="rounded-md bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white px-8 py-6 text-lg">
                  Get started
                </Button>
                <p className="mt-4 text-sm text-[#0c2f41]/60">
                  Start your 30-day free trial. No credit card required.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-[#0c2f41]/10">
                <img 
                  src="/lovable-uploads/9e72d57d-7dbe-4cff-b46c-383a608f383d.png" 
                  alt="YappHQ Dashboard Preview" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#0c2f41] text-white p-4 rounded">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Advanced scheduling tools</p>
                      <p className="text-sm mt-1 opacity-80">Powerful queue management</p>
                    </div>
                    <svg 
                      width="32" 
                      height="24" 
                      viewBox="0 0 40 32" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path d="M11.5 4L4 11.5L11.5 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M28.5 13L36 20.5L28.5 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 0L19 32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 bg-white rounded-xl shadow-sm mx-4 md:mx-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-[#0c2f41] mb-4">
              One platform, all social networks
            </h2>
            <p className="text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Seamlessly manage your content across every major social media platform
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-9 gap-8 items-center justify-items-center">
            {/* Platform Logos */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#1DA1F2] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21.05 4.5 20.03 4.85 18.95 5.01C20.04 4.35 20.88 3.32 21.27 2.08C20.25 2.69 19.11 3.14 17.91 3.38C16.95 2.37 15.56 1.73 14.02 1.73C11.06 1.73 8.66 4.13 8.66 7.09C8.66 7.52 8.71 7.94 8.81 8.33C4.29 8.11 0.31 5.98 -1.53 2.75C-1.99 3.57 -2.25 4.51 -2.25 5.52C-2.25 7.43 -1.29 9.12 0.15 10.1C-0.72 10.07 -1.53 9.82 -2.25 9.42V9.48C-2.25 12.08 -0.39 14.27 1.86 14.77C2.3 14.88 2.76 14.94 3.23 14.94C3.58 14.94 3.92 14.91 4.25 14.85C3.58 16.99 1.65 18.55 -0.6 18.59C-1.32 19.79 0.14 20.63 1.82 20.63C5.07 20.63 7.82 17.89 7.82 14.64C7.82 14.43 7.82 14.22 7.8 14.01C8.83 13.24 9.7 12.26 10.34 11.12C11.21 10.15 11.04 8.76 9.93 7.95C9.14 7.38 8.05 7.38 7.26 7.95" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">Twitter</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#1877F2] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.08 7.03 19.43 11 19.93V14H9V12H11V10.5C11 8.57 12.57 7 14.5 7H16V9H15C14.45 9 14 9.45 14 10V12H16V14H14V20.02C17.41 19.56 20 16.11 20 12Z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">Facebook</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8.73C10.15 8.73 8.73 10.15 8.73 12C8.73 13.85 10.15 15.27 12 15.27C13.85 15.27 15.27 13.85 15.27 12C15.27 10.15 13.85 8.73 12 8.73ZM18.1 7.25C18.1 7.94 17.54 8.5 16.85 8.5C16.16 8.5 15.6 7.94 15.6 7.25C15.6 6.56 16.16 6 16.85 6C17.54 6 18.1 6.56 18.1 7.25ZM12 6.5C9.1 6.5 6.73 8.86 6.73 11.77C6.73 14.67 9.09 17.04 12 17.04C14.9 17.04 17.27 14.68 17.27 11.77C17.27 8.87 14.91 6.5 12 6.5ZM12 4C14.62 4 15.01 4.01 16.12 4.06C17.86 4.15 19.11 4.54 20.1 5.53C21.09 6.52 21.48 7.77 21.57 9.51C21.62 10.62 21.63 11.01 21.63 13.63C21.63 16.25 21.62 16.64 21.57 17.75C21.48 19.49 21.09 20.74 20.1 21.73C19.11 22.72 17.86 23.11 16.12 23.2C15.01 23.25 14.62 23.26 12 23.26C9.38 23.26 8.99 23.25 7.88 23.2C6.14 23.11 4.89 22.72 3.9 21.73C2.91 20.74 2.52 19.49 2.43 17.75C2.38 16.64 2.37 16.25 2.37 13.63C2.37 11.01 2.38 10.62 2.43 9.51C2.52 7.77 2.91 6.52 3.9 5.53C4.89 4.54 6.14 4.15 7.88 4.06C8.99 4.01 9.38 4 12 4Z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">Instagram</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.75 8.75C7.75 9.3 7.3 9.75 6.75 9.75C6.2 9.75 5.75 9.3 5.75 8.75C5.75 8.2 6.2 7.75 6.75 7.75C7.3 7.75 7.75 8.2 7.75 8.75ZM18 17H15.5V13.25C15.5 12.15 15.4 11 14.15 11C12.9 11 12.65 12.15 12.65 13.3V17H10.15V10H12.5V11C12.85 10.45 13.5 9.9 14.7 9.9C16.85 9.9 18 11.35 18 13.5V17Z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">LinkedIn</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#FF4500] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.39L17.18 20.57C17.97 19.77 21 16.76 21 12C21 7.24 17.97 4.22 17.18 3.43L12 8.61V15.39ZM14.83 12L12 9.17V14.83L14.83 12ZM3 12C3 16.97 7.03 21 12 21C13.8 21 15.53 20.43 17 19.41V17L15.37 15.37C14.37 16.04 13.23 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 10.77 7.96 9.63 8.63 8.63L7 7V4.59C5.97 6.06 5.4 7.8 5.4 9.6C5.4 13.02 8.38 16 11.8 16" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">Pinterest</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.75 13.96C17.32 13.96 17.75 13.3 16.97 12.73C16.19 12.16 15.33 12.58 15.33 12.73C15.33 12.89 16.18 13.96 16.75 13.96ZM9.41 14.89C9.47 14.89 9.54 14.89 9.59 14.89C10.93 14.89 10.54 13.31 9.47 13.31C8.74 13.31 7.97 13.91 7.97 14.4C7.97 14.89 8.74 14.89 9.41 14.89ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.05 16.87C6.81 17.07 6.5 17.21 6.24 17.29C6.1 17.33 5.96 17.35 5.82 17.35C5.46 17.35 5.13 17.25 4.83 17.07C4.4 16.81 4.09 16.41 3.94 15.93C3.78 15.45 3.78 14.97 3.94 14.54C4.09 14.13 4.31 13.74 4.59 13.46C5.36 12.69 6.31 12.21 7.36 12.12C7.18 11.64 7.1 11.12 7.14 10.62C7.18 10.12 7.31 9.62 7.53 9.17C8 8.27 8.76 7.63 9.64 7.36C10.44 7.1 11.23 7.1 11.97 7.36C12.71 7.63 13.33 8.11 13.75 8.79C14.17 9.5 14.36 10.21 14.31 10.94C14.25 11.67 13.97 12.36 13.47 12.92C13.19 13.22 12.86 13.46 12.5 13.63C12.29 13.74 12.06 13.83 11.84 13.93C11.64 14.03 11.44 14.14 11.24 14.27C11.55 14.64 11.89 14.97 12.29 15.22C12.68 15.47 13.13 15.64 13.6 15.7C14.05 15.76 14.5 15.76 14.93 15.7C15.35 15.64 15.76 15.53 16.11 15.37C16.43 15.22 16.75 15.04 17 14.83C17.27 14.62 17.5 14.41 17.7 14.19C17.75 14.13 17.81 14.08 17.86 14.02C18.12 13.77 18.49 13.74 18.81 13.93C19.15 14.13 19.23 14.54 19.07 14.92C18.95 15.2 18.8 15.47 18.61 15.7C18.43 15.93 18.21 16.14 18 16.33C17.79 16.51 17.54 16.68 17.29 16.83C17.04 16.98 16.79 17.1 16.54 17.18C15.6 17.5 14.63 17.56 13.66 17.35C12.66 17.15 11.73 16.68 10.95 15.93C10.18 15.93 9.41 15.93 8.64 15.93C8.35 16.33 7.92 16.68 7.05 16.87Z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">TikTok</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.39 8.64V5.36C21.39 4.45 20.54 3.6 19.63 3.6H4.37C3.46 3.6 2.61 4.45 2.61 5.36V8.64H21.39ZM10.94 14.44V20.4H19.63C20.54 20.4 21.39 19.55 21.39 18.64V14.44H10.94ZM2.61 14.44V18.64C2.61 19.55 3.46 20.4 4.37 20.4H8.57V14.44H2.61ZM2.61 10.8V12.27H8.57V10.8H2.61ZM10.94 10.8V12.27H21.39V10.8H10.94Z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">YouTube</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#00ACEE] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.59 7.11C21.47 6.94 21.28 6.84 21.08 6.84H18.67C18.67 6.84 18.67 6.79 18.67 6.74C18.67 4.23 16.57 2.16 14 2.16C11.43 2.16 9.33 4.23 9.33 6.74C9.33 6.79 9.33 6.84 9.33 6.84H6.92C6.72 6.84 6.53 6.94 6.41 7.11C6.29 7.28 6.25 7.51 6.31 7.71L8.22 15.58C8.5 16.79 9.59 17.68 10.87 17.68H17.13C18.41 17.68 19.5 16.79 19.78 15.58L21.69 7.71C21.75 7.51 21.71 7.28 21.59 7.11ZM12 6.42C12 5.92 12.42 5.52 12.93 5.52H15.07C15.58 5.52 16 5.92 16 6.42C16 6.92 15.58 7.32 15.07 7.32H12.93C12.42 7.32 12 6.92 12 6.42Z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">Threads</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm mt-2 text-[#0c2f41]/80">Mastodon</p>
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-[#0c2f41] mb-4">
              Effortless social media management
            </h2>
            <p className="text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Powerful tools to automate your content workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-[#0c2f41]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0c2f41]">Post scheduling</h3>
                <p className="mt-2 text-[#0c2f41]/80">
                  Plan and schedule posts in advance with ease
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-[#0c2f41]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0c2f41]">Content calendar</h3>
                <p className="mt-2 text-[#0c2f41]/80">
                  Visualize your scheduled posts in a calendar view
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-[#0c2f41]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0c2f41]">AI assistant</h3>
                <p className="mt-2 text-[#0c2f41]/80">
                  Generate engaging content ideas in moments
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <BarChart className="w-8 h-8 text-[#0c2f41]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0c2f41]">Analytics</h3>
                <p className="mt-2 text-[#0c2f41]/80">
                  Measure performance of your social campaigns
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/features" className="inline-flex items-center text-[#0c2f41] font-medium hover:underline">
              Learn more about our features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-white rounded-xl shadow-sm mx-4 md:mx-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-[#0c2f41] mb-4">
              From zero to social media success
            </h2>
            <p className="text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Follow our simple workflow to streamline your social media management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0c2f41]/10 rounded-full flex items-center justify-center mb-4">
                <Pencil className="w-6 h-6 text-[#0c2f41]" />
              </div>
              <h3 className="text-xl font-medium text-[#0c2f41] mb-2">Create</h3>
              <p className="text-sm text-[#0c2f41]/80">
                Draft your social media posts with our powerful editor
              </p>
              
              {/* Connector line - hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-[100%] w-full h-0.5 bg-[#0c2f41]/10 -translate-x-8"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0c2f41]/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#0c2f41]" />
              </div>
              <h3 className="text-xl font-medium text-[#0c2f41] mb-2">Schedule</h3>
              <p className="text-sm text-[#0c2f41]/80">
                Select optimal posting times or use our AI-powered suggestions
              </p>
              
              {/* Connector line - hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-[100%] w-full h-0.5 bg-[#0c2f41]/10 -translate-x-8"></div>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0c2f41]/10 rounded-full flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-[#0c2f41]" />
              </div>
              <h3 className="text-xl font-medium text-[#0c2f41] mb-2">Publish</h3>
              <p className="text-sm text-[#0c2f41]/80">
                Automatically post to all your social platforms simultaneously
              </p>
              
              {/* Connector line - hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-[100%] w-full h-0.5 bg-[#0c2f41]/10 -translate-x-8"></div>
            </div>
            
            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0c2f41]/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-[#0c2f41]" />
              </div>
              <h3 className="text-xl font-medium text-[#0c2f41] mb-2">Analyze</h3>
              <p className="text-sm text-[#0c2f41]/80">
                Track performance metrics and engagement across platforms
              </p>
              
              {/* Connector line - hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-[100%] w-full h-0.5 bg-[#0c2f41]/10 -translate-x-8"></div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0c2f41]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#0c2f41]" />
              </div>
              <h3 className="text-xl font-medium text-[#0c2f41] mb-2">Grow</h3>
              <p className="text-sm text-[#0c2f41]/80">
                Build your audience with data-driven optimization
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="rounded-md bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white">
              Start your journey
            </Button>
          </div>
        </section>
        
        {/* Feature Details Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/lovable-uploads/bc113fd0-18d2-4e4c-8f34-5f7480463c85.png" 
                alt="Features Screenshot" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-medium text-[#0c2f41]">
                All the tools you need in one place
              </h2>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#0c2f41]/10 p-2 rounded-md">
                      <Pencil className="w-5 h-5 text-[#0c2f41]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0c2f41]">Create</h3>
                    <p className="mt-1 text-[#0c2f41]/80">Compose new drafts with ease</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#0c2f41]/10 p-2 rounded-md">
                      <Send className="w-5 h-5 text-[#0c2f41]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0c2f41]">Publish</h3>
                    <p className="mt-1 text-[#0c2f41]/80">Deliver your content to every platform</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#0c2f41]/10 p-2 rounded-md">
                      <Calendar className="w-5 h-5 text-[#0c2f41]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0c2f41]">Schedule</h3>
                    <p className="mt-1 text-[#0c2f41]/80">Queue up posts for future publishing</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#0c2f41]/10 p-2 rounded-md">
                      <BarChart className="w-5 h-5 text-[#0c2f41]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0c2f41]">Analyse</h3>
                    <p className="mt-1 text-[#0c2f41]/80">Track key metrics and performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why YappHQ Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 bg-white rounded-xl shadow-sm mx-4 md:mx-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-[#0c2f41] mb-4">
              Why choose YappHQ?
            </h2>
            <p className="text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              The smartest choice for serious social media marketers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-[#0c2f41]/10 flex items-center justify-center rounded-md">
                  <Calendar className="w-6 h-6 text-[#0c2f41]" />
                </div>
                <CardTitle>Save 10+ hours weekly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0c2f41]/80">
                  Automate repetitive tasks and spend your time on what matters most—creating great content.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-[#0c2f41]/10 flex items-center justify-center rounded-md">
                  <BarChart className="w-6 h-6 text-[#0c2f41]" />
                </div>
                <CardTitle>Data-driven growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0c2f41]/80">
                  Make informed decisions with comprehensive analytics across all platforms in one dashboard.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-[#0c2f41]/10 flex items-center justify-center rounded-md">
                  <MessageSquare className="w-6 h-6 text-[#0c2f41]" />
                </div>
                <CardTitle>AI-powered content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0c2f41]/80">
                  Generate engaging posts, captions, and hashtags with our advanced AI assistant.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-[#0c2f41] mb-4">
              Trusted by social media professionals
            </h2>
            <p className="text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              See what our customers have to say about YappHQ
            </p>
          </div>
          
          <div className="relative">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-6 md:p-10 bg-white rounded-xl shadow-sm">
                    <div className="flex mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="text-xl text-[#0c2f41] mb-8">
                      "YappHQ has transformed how we manage our social media. We're posting more consistently and seeing significantly higher engagement."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <p className="font-medium text-[#0c2f41]">Sarah Johnson</p>
                        <p className="text-sm text-[#0c2f41]/60">Marketing Director, TechCorp</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-6 md:p-10 bg-white rounded-xl shadow-sm">
                    <div className="flex mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="text-xl text-[#0c2f41] mb-8">
                      "The analytics alone are worth the investment. We've been able to fine-tune our strategy and grow our following by 200% in 3 months."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <p className="font-medium text-[#0c2f41]">Michael Chen</p>
                        <p className="text-sm text-[#0c2f41]/60">Social Media Manager, GrowthCo</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-6 md:p-10 bg-white rounded-xl shadow-sm">
                    <div className="flex mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="text-xl text-[#0c2f41] mb-8">
                      "As a solo entrepreneur, YappHQ has been a game-changer. It's like having a full social media team at my fingertips."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <p className="font-medium text-[#0c2f41]">Emma Rodriguez</p>
                        <p className="text-sm text-[#0c2f41]/60">Founder, StyleHouse</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 bg-white rounded-xl shadow-sm mx-4 md:mx-6" id="pricing">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-[#0c2f41] mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Choose the plan that suits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription className="text-[#0c2f41]/60">Perfect for individuals</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#0c2f41]">$19</span>
                  <span className="text-[#0c2f41]/60">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>5 social accounts</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>50 scheduled posts</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic analytics</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Content calendar</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-md bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white">
                  Get started
                </Button>
              </CardFooter>
            </Card>
            
            {/* Professional Plan - Highlighted */}
            <Card className="border-2 border-[#0c2f41] shadow-xl relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0c2f41] text-white px-4 py-1 rounded-full text-sm">
                Most popular
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription className="text-[#0c2f41]/60">For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#0c2f41]">$49</span>
                  <span className="text-[#0c2f41]/60">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>15 social accounts</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>200 scheduled posts</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>AI content assistant</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Team collaboration</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-md bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white">
                  Get started
                </Button>
              </CardFooter>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription className="text-[#0c2f41]/60">For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#0c2f41]">$99</span>
                  <span className="text-[#0c2f41]/60">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited social accounts</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited scheduled posts</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Premium analytics & reports</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced AI tools</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Custom integrations</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-md bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white">
                  Contact sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-[#0c2f41] mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Everything you need to know about YappHQ
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#0c2f41] hover:no-underline text-left">
                  How does YappHQ help me save time?
                </AccordionTrigger>
                <AccordionContent className="text-[#0c2f41]/80">
                  YappHQ lets you schedule posts across multiple platforms simultaneously, reuse content, and automate posting schedules. Most users report saving 10+ hours per week on social media management tasks.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#0c2f41] hover:no-underline text-left">
                  Which social media platforms are supported?
                </AccordionTrigger>
                <AccordionContent className="text-[#0c2f41]/80">
                  YappHQ integrates with Facebook, Instagram, Twitter, LinkedIn, Pinterest, TikTok, YouTube, Threads, and Mastodon. We're continuously adding more platforms based on user feedback.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#0c2f41] hover:no-underline text-left">
                  Is there a limit to how many posts I can schedule?
                </AccordionTrigger>
                <AccordionContent className="text-[#0c2f41]/80">
                  Each plan comes with different post limits. The Starter plan includes 50 scheduled posts per month, Professional offers 200, and Enterprise provides unlimited scheduling.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#0c2f41] hover:no-underline text-left">
                  How accurate are the analytics?
                </AccordionTrigger>
                <AccordionContent className="text-[#0c2f41]/80">
                  YappHQ pulls data directly from each platform's API to ensure accuracy. Our analytics include engagement rates, reach, impressions, clicks, and audience demographics, updated in real-time.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-[#0c2f41] hover:no-underline text-left">
                  Can I try YappHQ before committing?
                </AccordionTrigger>
                <AccordionContent className="text-[#0c2f41]/80">
                  Yes! We offer a 30-day free trial with all features unlocked, no credit card required. After the trial, you can choose the plan that best fits your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[#0c2f41] text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-medium">
              Ready to streamline your social media?
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Join thousands of marketers who have simplified their workflow with YappHQ
            </p>
            <div className="mt-8">
              <Button className="bg-white hover:bg-white/90 text-[#0c2f41] px-8 py-6 text-lg font-medium">
                Start your free trial
              </Button>
              <p className="mt-4 text-sm text-white/60">
                30 days free. No credit card required.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0c2f41]/5 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <svg 
                  width="28" 
                  height="24" 
                  viewBox="0 0 40 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0c2f41]"
                >
                  <path d="M11.5 4L4 11.5L11.5 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M28.5 13L36 20.5L28.5 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 0L19 32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xl font-medium text-[#0c2f41] ml-2">YappHQ</span>
              </div>
              <p className="text-sm text-[#0c2f41]/70">
                The all-in-one social media management platform that helps you schedule, publish, and analyze your content.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-[#0c2f41] mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/features" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Features</Link></li>
                <li><Link to="/pricing" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Pricing</Link></li>
                <li><Link to="/testimonials" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Testimonials</Link></li>
                <li><Link to="/integrations" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-[#0c2f41] mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Blog</Link></li>
                <li><Link to="/guides" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Guides</Link></li>
                <li><Link to="/help" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Help Center</Link></li>
                <li><Link to="/api" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-[#0c2f41] mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">About</Link></li>
                <li><Link to="/careers" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Careers</Link></li>
                <li><Link to="/contact" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Contact</Link></li>
                <li><Link to="/press" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">Press</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#0c2f41]/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#0c2f41]/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} YappHQ. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/terms" className="text-[#0c2f41]/80 hover:text-[#0c2f41] text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-[#0c2f41]/80 hover:text-[#0c2f41] text-sm">
                Privacy
              </Link>
              <Link to="/cookies" className="text-[#0c2f41]/80 hover:text-[#0c2f41] text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
