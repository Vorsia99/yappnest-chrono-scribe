
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				yapp: {
					"pale-blue": "#E6F0F7",     // Light blue background
					"deep-navy": "#0B2233",     // Dark blue for headings and CTA areas
					"text-navy": "#0B2233",     // Main text color
					"text-navy-light": "#465A6C", // Secondary text
					"border-light": "#D3E4FD",  // Light border color
					"misty-blue": "#A3BFFA",
					"misty-blue-hover": "#7F9CF5",
					"soft-pink": "#FF9CAC",
					"electric-green": "#4AFCA6",
					"gray": "#CBD5E0",
					"dark-slate": "#4A5568",
					"misty-light": "#E2E8F0",
					"misty-dark": "#CBD5E0",
					"dark-mode-light": "#2D3748",
					"dark-mode-dark": "#1A202C",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'confetti': {
					'0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
					'10%': { opacity: '1' },
					'100%': { transform: 'translateY(650px) rotate(720deg)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'section-fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out forwards',
				'confetti-1': 'confetti 4s ease-out forwards',
				'confetti-2': 'confetti 3s ease-out forwards',
				'confetti-3': 'confetti 3.5s ease-out forwards',
				'confetti-4': 'confetti 4.5s ease-out forwards',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'serif': ['Georgia', 'Times New Roman', 'serif'],
			},
			gridTemplateColumns: {
				'24': 'repeat(24, minmax(0, 1fr))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
