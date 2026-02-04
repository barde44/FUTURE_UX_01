import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Book an Appointment
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Fill out the form below and our team will contact you shortly to confirm your appointment
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 
                className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Appointment Request Form
              </h2>
              
              {submitted ? (
                <div className="bg-secondary/10 border border-secondary rounded-lg p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary mx-auto mb-4">
                    <svg 
                      className="h-8 w-8 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Request Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We will contact you shortly to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-lg bg-input-background"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-lg bg-input-background"
                      placeholder="+228 6 12 34 56 78"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-lg bg-input-background"
                      placeholder="john.doe@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Reason for Consultation *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-lg bg-input-background min-h-32"
                      placeholder="Briefly describe the reason for your consultation..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                  >
                    Submit My Request
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information & Image */}
            <div className="space-y-8">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzcwMTIyMDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Clinic interior"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="bg-accent rounded-2xl p-8 space-y-6">
                <h3 
                  className="text-xl font-bold text-foreground mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Other Ways to Contact Us
                </h3>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Phone
                    </p>
                    <a 
                      href="tel:+33123456789" 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +228 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Email
                    </p>
                    <a 
                      href="mailto:contact@santeplus.fr" 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      contact@santeplus.tg
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Address
                    </p>
                    <p className="text-gray-600">
                      123 Health Street<br />
                      75013 Lomé, Togo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Opening Hours
                    </p>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Interactive Map</p>
              <p className="text-sm text-gray-400">123 Health Street, 75013 Lomé</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
