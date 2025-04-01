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
					"pale-blue": "#E6F0F7",
					"deep-navy": "#0B2233",
					"text-navy": "#0B2233",
					"text-navy-light": "#465A6C",
					"border-light": "#D3E4FD",
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
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
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
				'pulse-scale': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.03)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 0 rgba(255,156,172,0)' },
					'50%': { boxShadow: '0 0 8px rgba(255,156,172,0.6)' }
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
				'pulse-cta': 'pulse-scale 2s infinite ease-in-out',
				'glow-effect': 'glow 2s infinite ease-in-out',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
				'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
			},
			backgroundImage: {
				'misty-gradient': 'linear-gradient(180deg, #E2E8F0 0%, #CBD5E0 100%)',
				'dark-misty-gradient': 'linear-gradient(180deg, #2D3748 0%, #1A202C 100%)',
			},
			boxShadow: {
				'card-hover': '0 8px 12px rgba(0,0,0,0.1)',
				'card': '0 4px 6px rgba(0,0,0,0.1)',
			},
			spacing: {
				'nav': '16px',
				'container-padding': '24px',
				'feature-padding': '16px',
				'feature-spacing': '24px',
				'workflow-spacing': '24px',
			},
			transitionDuration: {
				'300': '300ms',
				'500': '500ms',
			},
			transitionTimingFunction: {
				'in-out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
