import { ServiceCard } from '@/app/components/ServiceCard';
import { 
  Stethoscope, 
  FlaskConical, 
  ClipboardCheck,
  Heart,
  Baby,
  Syringe,
  UserCheck,
  ActivitySquare,
  Pill
} from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      title: 'General Consultation',
      description: 'Comprehensive medical consultations for all types of health concerns. Our experienced general practitioners provide accurate diagnoses and personalized medical advice tailored to your situation.',
      icon: Stethoscope,
      imageUrl: 'https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwcGF0aWVudCUyMGRvY3RvcnxlbnwxfHx8fDE3NzAxNDE1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Medical Tests & Analysis',
      description: 'Our modern laboratory is equipped with the latest technologies to perform all types of blood, urine, and biological tests. Fast and reliable results for accurate diagnosis.',
      icon: FlaskConical,
      imageUrl: 'https://images.unsplash.com/photo-1768498950658-87ecfe232b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGFuYWx5c2lzfGVufDF8fHx8MTc3MDE0MTU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Medical Follow-up',
      description: 'Personalized follow-up and continuous support for managing chronic conditions. Tailored monitoring programs with regular consultations to optimize your well-being.',
      icon: ClipboardCheck,
      imageUrl: 'https://images.unsplash.com/photo-1739285452629-2672b13fa42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2hlY2t1cHxlbnwxfHx8fDE3NzAxNDE1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Cardiology',
      description: 'Specialized cardiology consultations including electrocardiograms (ECG) and cardiovascular screening tests. Take care of your heart with our experts.',
      icon: Heart,
    },
    {
      title: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents. Our pediatric team ensures attentive monitoring of your child’s growth and development.',
      icon: Baby,
    },
    {
      title: 'Vaccinations',
      description: 'Comprehensive vaccination services for all ages. Stay up to date with your vaccination schedule and protect yourself against preventable diseases.',
      icon: Syringe,
    },
    {
      title: 'Preventive Medicine',
      description: 'Comprehensive health check-ups and preventive screenings to detect potential health issues early. Prevention is better than cure.',
      icon: UserCheck,
    },
    {
      title: 'Sports Medicine',
      description: 'Consultations and medical examinations for athletes. Medical certificates, nutritional advice, and performance monitoring to optimize your athletic practice.',
      icon: ActivitySquare,
    },
    {
      title: 'Prescriptions & Renewals',
      description: 'Prescription renewals for chronic treatments and medical prescriptions following consultation. Fast and efficient service.',
      icon: Pill,
    },
  ];

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
              Our Medical Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              A comprehensive range of healthcare services to meet all your medical needs.
              Quality care delivered by qualified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                showButton={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              How to Book an Appointment?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Fill out the online contact form or call us directly at <strong>+33 1 23 45 67 89</strong>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  Our team will contact you to confirm your appointment and answer any questions
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  Visit the clinic at the scheduled time with your medical documents and health insurance card
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
