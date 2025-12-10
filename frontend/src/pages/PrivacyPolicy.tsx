import React from 'react';
import { Link } from 'react-router-dom';
import { StickyHeader } from 'components/StickyHeader';
import { Footer } from 'components/Footer';
import {
  BookText,
  Database,
  Cog,
  Share2,
  Cookie,
  Gavel,
  Shield,
  Baby,
  FilePenLine,
  Mail,
  MapPin,
  ShieldCheck,
  FileText,
  Calendar,
  Users,
  Briefcase,
} from 'lucide-react';

export interface Props {}

const Section: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <section className="py-8 border-b border-gray-200 last:border-b-0">
    <div className="flex items-start">
      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div className="ml-6 flex-grow">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default function PrivacyPolicy({}: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StickyHeader />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Your privacy is important to us. Here's how we protect it.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Last Updated: September 22, 2025
            </p>
          </div>

          <div className="space-y-4">
            <Section
              title="Introduction"
              icon={<BookText className="w-6 h-6" />}
            >
              <p>
                LocalServ.ai respects your privacy and is committed to
                protecting your personal information. Throughout this document,
                when we say "we," "our," or "us," we are referring to
                LocalServ.ai. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                platform that connects customers with local service providers
                through AI-powered conversations. By using LocalServ.ai, you
                agree to the collection and use of information in accordance
                with this policy.
              </p>
            </Section>

            <Section
              title="Information We Collect"
              icon={<Database className="w-6 h-6" />}
            >
              <p>
                We collect several types of information to provide and improve
                our service to you.
              </p>
              <h3>Personal Information</h3>
              <ul>
                <li>Name, email address, phone number, and mailing address</li>
                <li>
                  Payment information including credit card details and billing
                  addresses
                </li>
                <li>Profile information and preferences</li>
              </ul>
              <h3>Booking and Service Data</h3>
              <ul>
                <li>Service type, location, and scheduling preferences</li>
                <li>Service provider details and interaction history</li>
                <li>Transaction history, reviews, and feedback</li>
              </ul>
              <h3>Device and Usage Data</h3>
              <ul>
                <li>IP address, browser type, and operating system</li>
                <li>
                  Platform interactions, page views, and navigation patterns
                </li>
                <li>Location data (with your consent)</li>
              </ul>
              <h3>AI Conversation Data</h3>
              <ul>
                <li>
                  Messages and conversations with our AI Sales Representatives
                </li>
                <li>
                  Service requests and preferences shared during AI interactions
                </li>
              </ul>
            </Section>

            <Section
              title="How We Use Your Information"
              icon={<Cog className="w-6 h-6" />}
            >
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process bookings and payments</li>
                <li>Connect customers with service providers</li>
                <li>
                  Improve our AI recommendations and platform performance
                </li>
                <li>
                  Send notifications, reminders, and promotional offers (with
                  your consent)
                </li>
                <li>
                  Comply with legal obligations and ensure platform safety
                </li>
              </ul>
            </Section>

            <Section
              title="How We Share Information"
              icon={<Share2 className="w-6 h-6" />}
            >
              <p>
                We do not sell your personal information. We may share it with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> To fulfill your service
                  requests.
                </li>
                <li>
                  <strong>Payment Processors:</strong> To securely process
                  transactions.
                </li>
                <li>
                  <strong>Analytics & Marketing Partners:</strong> To improve our
                  services and for promotions (with your consent).
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to
                  protect our rights.
                </li>
              </ul>
            </Section>

            <Section
              title="Cookies & Tracking Technologies"
              icon={<Cookie className="w-6 h-6" />}
            >
              <p>
                We use cookies and similar technologies to enhance your
                experience, remember your preferences, and deliver relevant
                ads. You can manage cookie preferences in your browser, but
                disabling them may limit functionality.
              </p>
            </Section>

            <Section
              title="Your Rights (CCPA)"
              icon={<Gavel className="w-6 h-6" />}
            >
              <p>
                If you are a California resident, you have the right to know,
                access, and delete your personal information, as well as the
                right to opt-out of the sale of your data and not be
                discriminated against for exercising your rights. To exercise
                these rights, please contact us at{' '}
                <strong>privacy@localserv.ai</strong>.
              </p>
            </Section>

            <Section
              title="Data Security"
              icon={<Shield className="w-6 h-6" />}
            >
              <p>
                We use robust security measures like encryption and secure
                servers to protect your data. However, no method is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section
              title="Children's Privacy"
              icon={<Baby className="w-6 h-6" />}
            >
              <p>
                Our services are not for children under 13. We do not knowingly
                collect information from them. If you believe your child has
                provided us with data, please contact us immediately.
              </p>
            </Section>

            <Section
              title="Changes to This Policy"
              icon={<FilePenLine className="w-6 h-6" />}
            >
              <p>
                We may update this policy occasionally. We will notify you of
                significant changes and update the "Last Updated" date. Your
                continued use of the service means you accept the new policy.
              </p>
            </Section>

            <section className="pt-12">
              <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                Contact Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-100/60 p-6 rounded-lg text-center">
                  <div className="inline-flex w-16 h-16 bg-primary/10 text-primary rounded-full items-center justify-center mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Email for Privacy
                  </h3>
                  <a
                    href="mailto:privacy@localserv.ai"
                    className="text-primary hover:underline text-lg"
                  >
                    privacy@localserv.ai
                  </a>
                </div>
                <div className="bg-gray-100/60 p-6 rounded-lg text-center">
                  <div className="inline-flex w-16 h-16 bg-primary/10 text-primary rounded-full items-center justify-center mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Mailing Address
                  </h3>
                  <address className="not-italic text-gray-600 text-lg">
                    LocalServ.ai, Inc.
                    <br />
                    Los Angeles, CA, United States
                  </address>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
