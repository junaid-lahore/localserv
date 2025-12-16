import React from "react";
import { StickyHeader } from "components/StickyHeader";
import { Footer } from "components/Footer";
import {
  Scale,
  BookText,
  UserCheck,
  ClipboardList,
  Wallet,
  ShieldCheck,
  Briefcase,
  AlertTriangle,
  XCircle,
  Copyright,
  FilePenLine,
  Gavel,
  Mail,
  MapPin,
} from "lucide-react";

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

export default function TermsConditions({}: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StickyHeader />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              By accessing or using LocalServ.ai, you agree to these Terms &
              Conditions.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Last Updated: September 22, 2025
            </p>
          </div>

          <div className="space-y-4">
            <Section title="1. Introduction" icon={<BookText className="w-6 h-6" />}>
              <p>
                By accessing or using LocalServ.ai ("we," "our," "us"), you
                agree to be bound by these Terms & Conditions. These terms
                constitute a legally binding agreement between you and
                LocalServ.ai regarding your use of our platform, website, mobile
                application, and related services.
              </p>
              <p>
                These Terms & Conditions apply to all users of the LocalServ.ai
                platform, including customers seeking services and service
                providers offering their expertise through our AI-powered
                marketplace.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p>
                  <strong>Important:</strong> If you do not agree to these
                  terms, you must not access or use our services.
                </p>
              </div>
            </Section>

            <Section title="2. Eligibility" icon={<UserCheck className="w-6 h-6" />}>
              <p>
                To use LocalServ.ai, you must meet the following eligibility
                requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Age Requirement:</strong> You must be at least 18
                  years old to create an account and use our platform
                </li>
                <li>
                  <strong>Legal Capacity:</strong> You must have the legal
                  capacity to enter into binding agreements
                </li>
                <li>
                  <strong>Accurate Information:</strong> You agree to provide
                  accurate, current, and truthful account information during
                  registration
                </li>
                <li>
                  <strong>Account Responsibility:</strong> You are responsible
                  for maintaining the confidentiality of your account credentials
                </li>
                <li>
                  <strong>Compliance:</strong> You must comply with all
                  applicable local, state, and federal laws when using our
                  services
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                <p>
                  <strong>Note:</strong> By creating an account, you represent
                  and warrant that all information provided is accurate and that
                  you meet these eligibility requirements.
                </p>
              </div>
            </Section>

            <Section title="3. Use of Services" icon={<ClipboardList className="w-6 h-6" />}>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="font-semibold text-blue-800 mb-2">
                  LocalServ.ai Platform Role
                </h3>
                <p>
                  LocalServ.ai serves as a facilitator that connects customers
                  with independent service providers through AI-powered
                  conversations. We are not the direct provider of services and
                  do not employ the service providers on our platform.
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-3">Permitted Uses</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Search for and book local services through our platform
                </li>
                <li>
                  Communicate with service providers via our AI Sales
                  Representatives
                </li>
                <li>Leave honest reviews and ratings for services received</li>
                <li>Manage your account settings and preferences</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-3">
                Prohibited Uses
              </h3>
              <p className="mb-3">
                You agree NOT to use our platform for any of the following:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Fraudulent activities, including fake bookings or payment fraud
                </li>
                <li>
                  Illegal activities or violations of local, state, or federal
                  laws
                </li>
                <li>
                  Spam, harassment, or inappropriate communication with service
                  providers
                </li>
                <li>
                  Circumventing our platform to arrange services directly
                  (during active bookings)
                </li>
                <li>
                  Misrepresenting your identity or providing false information
                </li>
                <li>
                  Interfering with platform functionality or security measures
                </li>
              </ul>
            </Section>

            <Section title="4. Bookings & Payments" icon={<Wallet className="w-6 h-6" />}>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                <h3 className="font-semibold text-green-800 mb-2">
                  Booking Agreement
                </h3>
                <p>
                  All bookings made through LocalServ.ai represent a direct
                  agreement between you (the customer) and the independent
                  service provider. LocalServ.ai facilitates this connection
                  but is not a party to the service agreement.
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Payment Processing
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Secure Processing:</strong> All payments are handled
                  securely by third-party payment processors
                </li>
                <li>
                  <strong>Payment Authorization:</strong> By providing payment
                  information, you authorize charges for booked services
                </li>
                <li>
                  <strong>Pricing Transparency:</strong> Service prices and fees
                  are clearly displayed before booking confirmation
                </li>
                <li>
                  <strong>Payment Timing:</strong> Payment authorization occurs
                  at the time of booking; charges may be processed before or
                  after service completion
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-3">
                Disputes & Refunds
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Direct Resolution:</strong> Payment disputes should
                  first be addressed directly with the service provider
                </li>
                <li>
                  <strong>Platform Assistance:</strong> LocalServ.ai may provide
                  assistance in resolving disputes but is not liable for refunds
                </li>
                <li>
                  <strong>Third-Party Disputes:</strong> Payment processor
                  policies apply for payment-related disputes
                </li>
                <li>
                  <strong>Service Quality:</strong> LocalServ.ai does not
                  guarantee service quality or outcomes
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                <p>
                  <strong>Important:</strong> LocalServ.ai is not responsible
                  for disputes between customers and service providers regarding
                  service quality, pricing, or refunds.
                </p>
              </div>
            </Section>

            <Section
              title="5. User Responsibilities"
              icon={<ShieldCheck className="w-6 h-6" />}
            >
              <p>As a user of LocalServ.ai, you are responsible for:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    🔐 Account Security
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Keep login credentials secure and confidential</li>
                    <li>Notify us immediately of unauthorized access</li>
                    <li>Use strong, unique passwords</li>
                    <li>Log out from shared or public devices</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    📋 Accurate Information
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide accurate booking details</li>
                    <li>Keep contact information current</li>
                    <li>Specify service requirements clearly</li>
                    <li>Update preferences and location data</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    🤝 Respectful Communication
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Treat service providers with respect and courtesy
                    </li>
                    <li>Communicate clearly about expectations</li>
                    <li>Be punctual for scheduled appointments</li>
                    <li>Provide constructive, honest feedback</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    ⚖️ Legal Compliance
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Comply with all applicable laws</li>
                    <li>Respect intellectual property rights</li>
                    <li>Follow platform community guidelines</li>
                    <li>Report suspicious or illegal activity</li>
                  </ul>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
                <p>
                  <strong>Account Suspension:</strong> Failure to meet these
                  responsibilities may result in temporary or permanent
                  suspension of your account.
                </p>
              </div>
            </Section>

            <Section
              title="6. Service Provider Responsibilities"
              icon={<Briefcase className="w-6 h-6" />}
            >
              <p>
                Service providers using LocalServ.ai are independent
                contractors responsible for:
              </p>
              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    📝 Service Delivery
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong>Accurate Descriptions:</strong> Deliver services
                      exactly as described in their profile and booking details
                    </li>
                    <li>
                      <strong>Quality Standards:</strong> Maintain high
                      professional standards in service delivery
                    </li>
                    <li>
                      <strong>Timely Completion:</strong> Complete services
                      within agreed timeframes
                    </li>
                    <li>
                      <strong>Clear Communication:</strong> Communicate
                      effectively with customers throughout the service process
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    👔 Professionalism
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong>Professional Conduct:</strong> Maintain respectful,
                      courteous behavior with all customers
                    </li>
                    <li>
                      <strong>Appearance:</strong> Present themselves
                      professionally during service appointments
                    </li>
                    <li>
                      <strong>Equipment:</strong> Bring necessary tools and
                      equipment for service completion
                    </li>
                    <li>
                      <strong>Problem Resolution:</strong> Address customer
                      concerns promptly and professionally
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    ⚖️ Legal Compliance
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong>Licensing:</strong> Maintain all required licenses
                      and certifications for their services
                    </li>
                    <li>
                      <strong>Insurance:</strong> Carry appropriate insurance
                      coverage for their business activities
                    </li>
                    <li>
                      <strong>Tax Obligations:</strong> Handle their own tax
                      reporting and compliance
                    </li>
                    <li>
                      <strong>Local Laws:</strong> Comply with all applicable
                      local, state, and federal regulations
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Independent Contractor Status:</strong> Service
                  providers are independent contractors, not employees of
                  LocalServ.ai. They are responsible for their own business
                  operations, taxes, and legal compliance.
                </p>
              </div>
            </Section>

            <Section
              title="7. Disclaimers & Limitation of Liability"
              icon={<AlertTriangle className="w-6 h-6" />}
            >
              <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-4">
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  ⚠️ Important Disclaimers
                </h3>
                <p className="font-semibold text-red-700 mb-3">
                  LocalServ.ai does NOT guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Service Quality:</strong> The quality, timeliness, or
                    outcomes of services provided by independent contractors
                  </li>
                  <li>
                    <strong>Service Availability:</strong> That services will be
                    available when requested or completed as scheduled
                  </li>
                  <li>
                    <strong>Provider Reliability:</strong> The reliability,
                    professionalism, or qualifications of service providers
                  </li>
                  <li>
                    <strong>Dispute Resolution:</strong> Successful resolution
                    of disputes between customers and service providers
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-3">
                  "As Is" Service Provision
                </h3>
                <p>
                  LocalServ.ai platform and services are provided "as is" and
                  "as available" without warranties of any kind, either express
                  or implied. We disclaim all warranties, including but not
                  limited to merchantability, fitness for a particular purpose,
                  and non-infringement.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-4">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">
                  Limitation of Liability
                </h3>
                <p className="mb-3">
                  LocalServ.ai shall not be liable for any damages, losses, or
                  delays caused by:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Third-party service providers and their actions or omissions
                  </li>
                  <li>Service quality issues, delays, or cancellations</li>
                  <li>Property damage occurring during service delivery</li>
                  <li>Disputes between customers and service providers</li>
                  <li>Technical issues or platform downtime</li>
                  <li>Force majeure events beyond our control</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p>
                  <strong>Maximum Liability:</strong> In no event shall
                  LocalServ.ai's total liability exceed the amount paid by you
                  for the specific service in question.
                </p>
              </div>
            </Section>

            <Section
              title="8. Termination of Account"
              icon={<XCircle className="w-6 h-6" />}
            >
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  Platform-Initiated Termination
                </h3>
                <p className="mb-3">
                  LocalServ.ai may suspend or terminate your account immediately
                  for:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Terms Violation:</strong> Breach of these Terms &
                    Conditions or platform policies
                  </li>
                  <li>
                    <strong>Fraudulent Activity:</strong> Attempted fraud,
                    payment fraud, or identity misrepresentation
                  </li>
                  <li>
                    <strong>Illegal Activity:</strong> Use of the platform for
                    illegal purposes
                  </li>
                  <li>
                    <strong>Harmful Behavior:</strong> Harassment, abuse, or
                    threatening behavior toward other users
                  </li>
                  <li>
                    <strong>Security Concerns:</strong> Suspected account
                    compromise or security violations
                  </li>
                  <li>
                    <strong>Spam or Misuse:</strong> Sending spam or misusing
                    platform communication features
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  User-Initiated Deactivation
                </h3>
                <p className="mb-3">
                  Users may deactivate their account by:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Contacting Support:</strong> Emailing our support
                    team with a deactivation request
                  </li>
                  <li>
                    <strong>Account Settings:</strong> Using account
                    deactivation options in profile settings
                  </li>
                  <li>
                    <strong>Verification Required:</strong> Verifying identity
                    for security purposes during deactivation
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-3">
                  Effects of Termination
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Immediate loss of access to platform features and services
                  </li>
                  <li>
                    Cancellation of pending bookings (where possible)
                  </li>
                  <li>
                    Retention of certain data as required by law or for
                    business purposes
                  </li>
                  <li>
                    Continued applicability of terms regarding past transactions
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p>
                  <strong>Appeal Process:</strong> Users may appeal account
                  termination decisions by contacting our support team with
                  relevant information.
                </p>
              </div>
            </Section>

            <Section
              title="9. Intellectual Property"
              icon={<Copyright className="w-6 h-6" />}
            >
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  LocalServ.ai Ownership
                </h3>
                <p className="mb-3">
                  All website and mobile application content, features, and
                  functionality are owned by LocalServ.ai, including:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Trademarks & Logos:</strong> LocalServ.ai name,
                    logo, and branding elements
                  </li>
                  <li>
                    <strong>Software & Code:</strong> Platform technology,
                    algorithms, and AI systems
                  </li>
                  <li>
                    <strong>Content & Design:</strong> Website design, text,
                    graphics, and user interface
                  </li>
                  <li>
                    <strong>Data & Analytics:</strong> Platform-generated data
                    and analytical insights
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  Prohibited Uses
                </h3>
                <p className="mb-3">Users may NOT:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Copy or Reproduce:</strong> Copy, modify, or reuse
                    content without explicit written permission
                  </li>
                  <li>
                    <strong>Reverse Engineer:</strong> Attempt to reverse
                    engineer or extract source code
                  </li>
                  <li>
                    <strong>Commercial Use:</strong> Use LocalServ.ai content
                    for commercial purposes outside the platform
                  </li>
                  <li>
                    <strong>Brand Misuse:</strong> Use LocalServ.ai trademarks
                    or branding in unauthorized ways
                  </li>
                  <li>
                    <strong>Distribution:</strong> Redistribute or republish
                    platform content elsewhere
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  User-Generated Content
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Content Ownership:</strong> You retain ownership of
                    content you create (reviews, profile information)
                  </li>
                  <li>
                    <strong>License Grant:</strong> You grant LocalServ.ai a
                    license to use your content for platform operation
                  </li>
                  <li>
                    <strong>Content Standards:</strong> All user content must
                    comply with our community guidelines
                  </li>
                  <li>
                    <strong>Removal Rights:</strong> LocalServ.ai reserves the
                    right to remove inappropriate content
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>DMCA Compliance:</strong> LocalServ.ai complies with
                  the Digital Millennium Copyright Act. Report copyright
                  infringement to our designated agent.
                </p>
              </div>
            </Section>

            <Section
              title="10. Changes to Terms"
              icon={<FilePenLine className="w-6 h-6" />}
            >
              <p>
                LocalServ.ai may update these Terms & Conditions from time to
                time to reflect changes in our services, legal requirements, or
                business practices.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4 mb-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Update Process
                </h3>
                <p className="mb-3">When we make changes, we will:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Post Updates:</strong> Publish the updated terms on
                    this page with a revised "Last Updated" date
                  </li>
                  <li>
                    <strong>Notify Users:</strong> Send email notifications for
                    significant changes that affect your rights
                  </li>
                  <li>
                    <strong>Highlight Changes:</strong> Provide a summary of key
                    modifications when applicable
                  </li>
                  <li>
                    <strong>Transition Period:</strong> Allow reasonable time
                    for review before changes take effect
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Types of Changes
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Minor Changes
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Clarifications to existing terms</li>
                      <li>Contact information updates</li>
                      <li>Formatting improvements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Material Changes
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Changes to liability limitations</li>
                      <li>New user responsibilities</li>
                      <li>Modified dispute resolution processes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p>
                  <strong>Acceptance of Changes:</strong> Your continued use of
                  LocalServ.ai after changes take effect constitutes acceptance
                  of the updated Terms & Conditions. If you disagree with
                  changes, you must discontinue using our services.
                </p>
              </div>
            </Section>

            <Section title="11. Governing Law" icon={<Gavel className="w-6 h-6" />}>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Jurisdiction
                </h3>
                <p>
                  These Terms & Conditions are governed by and construed in
                  accordance with the laws of the State of California, United
                  States of America, without regard to its conflict of law
                  principles.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Dispute Resolution
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      🤝 Informal Resolution
                    </h4>
                    <p>
                      Before filing any formal legal action, parties agree to
                      attempt resolution through direct communication and
                      good-faith negotiation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      ⚖️ Formal Disputes
                    </h4>
                    <p>
                      Any disputes that cannot be resolved informally will be
                      subject to the exclusive jurisdiction of state and
                      federal courts located in Los Angeles County, California.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      📋 Arbitration (if applicable)
                    </h4>
                    <p>
                      Certain disputes may be subject to binding arbitration
                      under California arbitration rules, as specified in
                      separate arbitration agreements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-3">
                  Class Action Waiver
                </h3>
                <p>
                  You agree that any disputes will be resolved on an individual
                  basis only and not as part of a class action, collective
                  action, or representative proceeding.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p>
                  <strong>Severability:</strong> If any provision of these
                  terms is found to be unenforceable, the remaining provisions
                  will continue in full force and effect.
                </p>
              </div>
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
                    Email for Support
                  </h3>
                  <a
                    href="mailto:support@localserv.ai"
                    className="text-primary hover:underline text-lg"
                  >
                    support@localserv.ai
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
