import { Button } from "@/app/components/ui/button";
import { ServiceCard } from "@/app/components/ServiceCard";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  FlaskConical,
  ClipboardCheck,
  Award,
  Users,
  Clock,
  Quote,
  ArrowRight,
} from "lucide-react";

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-accent to-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h1 className="max-w-xl text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-[Poppins]">
                Des soins médicaux de qualité, près de chez
                vous.
              </h1>

              <p className="max-w-xl text-lg md:text-xl text-gray-600">
                Consultations médicales rapides et fiables avec
                des professionnels de santé qualifiés. Prenez
                rendez-vous facilement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-lg w-full sm:w-auto"
                  >
                    Prendre rendez-vous
                  </Button>
                </Link>

                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 text-lg w-full sm:w-auto flex items-center gap-2"
                  >
                    Nos services{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  loading="eager"
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842"
                  alt="Professionnel de santé"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl font-[Poppins]">
                      15+
                    </p>
                    <p className="text-sm text-gray-600">
                      Années d'expérience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services médicaux pour
              répondre à tous vos besoins de santé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/services">
              <ServiceCard
                title="Consultation générale"
                description="Consultations médicales complètes pour tous types de problèmes de santé."
                icon={Stethoscope}
              />
            </Link>

            <Link to="/services">
              <ServiceCard
                title="Analyses médicales"
                description="Analyses fiables et rapides grâce à un laboratoire moderne."
                icon={FlaskConical}
              />
            </Link>

            <Link to="/services">
              <ServiceCard
                title="Suivi médical"
                description="Accompagnement personnalisé pour votre bien-être à long terme."
                icon={ClipboardCheck}
              />
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8"
              >
                Voir tous les services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531"
                alt="Intérieur clinique moderne"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
                Pourquoi choisir Clinique Santé Plus ?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Professionnels certifiés",
                  },
                  {
                    icon: Clock,
                    title: "Disponibilité rapide",
                  },
                  { icon: Users, title: "Soins personnalisés" },
                  {
                    icon: Award,
                    title: "Équipements modernes",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-semibold font-[Poppins]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold font-[Poppins] mb-12">
            Ce que disent nos patients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Marie Dubois",
              "Jean Martin",
              "Sophie Laurent",
            ].map((name, i) => (
              <div
                key={i}
                className="bg-accent rounded-2xl p-6"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="italic text-gray-700 mb-4">
                  “Excellent service, très professionnel et
                  rassurant.”
                </p>
                <p className="font-semibold font-[Poppins]">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] mb-4">
          Prêt à prendre soin de votre santé ?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Prenez rendez-vous dès aujourd’hui avec nos
          spécialistes.
        </p>
        <Link to="/contact">
          <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 text-lg">
            Prendre rendez-vous maintenant
          </Button>
        </Link>
      </section>
    </div>
  );
}