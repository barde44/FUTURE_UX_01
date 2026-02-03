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
      title: 'Consultation générale',
      description: 'Consultations médicales complètes pour tous types de problèmes de santé. Nos médecins généralistes expérimentés vous accueillent pour un diagnostic précis et des conseils adaptés à votre situation.',
      icon: Stethoscope,
      imageUrl: 'https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwcGF0aWVudCUyMGRvY3RvcnxlbnwxfHx8fDE3NzAxNDE1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Analyses médicales',
      description: 'Notre laboratoire moderne est équipé des dernières technologies pour effectuer tous types d\'analyses sanguines, urinaires et biologiques. Résultats rapides et fiables pour un diagnostic précis.',
      icon: FlaskConical,
      imageUrl: 'https://images.unsplash.com/photo-1768498950658-87ecfe232b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGFuYWx5c2lzfGVufDF8fHx8MTc3MDE0MTU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Suivi médical',
      description: 'Suivi personnalisé et accompagnement continu pour la gestion de vos conditions chroniques. Programme de suivi adapté à vos besoins avec des consultations régulières pour optimiser votre bien-être.',
      icon: ClipboardCheck,
      imageUrl: 'https://images.unsplash.com/photo-1739285452629-2672b13fa42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2hlY2t1cHxlbnwxfHx8fDE3NzAxNDE1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Cardiologie',
      description: 'Consultations spécialisées en cardiologie avec électrocardiogramme (ECG) et tests de dépistage cardiovasculaire. Prenez soin de votre cœur avec nos experts.',
      icon: Heart,
    },
    {
      title: 'Pédiatrie',
      description: 'Soins médicaux spécialisés pour les nourrissons, enfants et adolescents. Notre équipe pédiatrique assure un suivi attentif de la croissance et du développement de vos enfants.',
      icon: Baby,
    },
    {
      title: 'Vaccinations',
      description: 'Service complet de vaccination pour tous les âges. Suivez votre calendrier vaccinal et protégez-vous contre les maladies évitables par la vaccination.',
      icon: Syringe,
    },
    {
      title: 'Médecine préventive',
      description: 'Bilans de santé complets et dépistages préventifs pour détecter précocement les problèmes de santé. Prévenir vaut mieux que guérir.',
      icon: UserCheck,
    },
    {
      title: 'Médecine du sport',
      description: 'Consultations et examens pour les sportifs. Certificats médicaux, conseils nutritionnels et suivi de performance pour optimiser votre pratique sportive.',
      icon: ActivitySquare,
    },
    {
      title: 'Prescriptions et renouvellements',
      description: 'Renouvellement d\'ordonnances pour traitements chroniques et prescriptions médicales après consultation. Service rapide et efficace.',
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
              Nos Services Médicaux
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Une gamme complète de services de santé pour répondre à tous vos besoins médicaux. 
              Des soins de qualité dispensés par des professionnels qualifiés.
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
              Comment prendre rendez-vous ?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Remplissez le formulaire de contact en ligne ou appelez-nous directement au <strong>+33 1 23 45 67 89</strong>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  Notre équipe vous contactera pour confirmer votre rendez-vous et répondre à vos questions
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  Présentez-vous à la clinique à l'heure convenue avec vos documents médicaux et votre carte Vitale
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
