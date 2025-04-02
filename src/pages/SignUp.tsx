
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import YappLogo from '@/components/YappLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowRight, 
  Mail, 
  Lock, 
  User,
  Google, 
  Facebook, 
  Linkedin
} from 'lucide-react';

const SignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "Welcome to yappHQ. Let's get started!",
      });
      
      // Redirect to dashboard after successful signup
      navigate('/dashboard');
    }, 1500);
  };

  const handleSocialSignUp = (provider: string) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: `Signed in with ${provider}!`,
        description: "Welcome to yappHQ. Let's get started!",
      });
      
      // Redirect to dashboard after successful signup
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-yapp-pale-blue">
      {/* Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/">
            <YappLogo />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-yapp-deep-navy/80">Already have an account?</span>
            <Button variant="outline" className="rounded-full">
              Log in
            </Button>
          </div>
        </div>
      </nav>

      {/* Sign Up Form Section */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md bg-white shadow-lg border-0">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-serif text-yapp-deep-navy mb-2">Create your account</h1>
              <p className="text-yapp-deep-navy/70">
                Start your 30-day free trial. No credit card required.
              </p>
            </div>

            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        placeholder="John Smith" 
                        className="pl-10" 
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="name@company.com" 
                        className="pl-10" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-10"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength={8}
                      />
                    </div>
                    <p className="text-xs text-yapp-deep-navy/60">
                      Password must be at least 8 characters
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeTerms}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label 
                      htmlFor="terms" 
                      className="text-sm leading-none flex-1 text-yapp-deep-navy/80"
                    >
                      I agree to the{' '}
                      <Link to="/terms" className="text-yapp-deep-navy underline hover:opacity-80">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="text-yapp-deep-navy underline hover:opacity-80">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cta-dark" 
                    className="w-full flex items-center justify-center gap-2" 
                    disabled={isLoading || !formData.agreeTerms}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                    {!isLoading && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="social">
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-2 justify-center" 
                    onClick={() => handleSocialSignUp('Google')}
                    disabled={isLoading}
                  >
                    <Google className="h-4 w-4" />
                    Continue with Google
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-2 justify-center" 
                    onClick={() => handleSocialSignUp('Facebook')}
                    disabled={isLoading}
                  >
                    <Facebook className="h-4 w-4" />
                    Continue with Facebook
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-2 justify-center" 
                    onClick={() => handleSocialSignUp('LinkedIn')}
                    disabled={isLoading}
                  >
                    <Linkedin className="h-4 w-4" />
                    Continue with LinkedIn
                  </Button>
                  
                  <p className="text-xs text-center text-yapp-deep-navy/60 mt-6">
                    By signing up with a social provider, you agree to our{' '}
                    <Link to="/terms" className="text-yapp-deep-navy underline hover:opacity-80">
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-yapp-deep-navy underline hover:opacity-80">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center items-center">
            <div className="text-yapp-deep-navy/60 text-sm">
              © {new Date().getFullYear()} yappHQ. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
