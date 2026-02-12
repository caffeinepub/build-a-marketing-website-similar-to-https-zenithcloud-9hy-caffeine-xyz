import MotionInView from '../components/marketing/MotionInView';
import { FileText, Shield, AlertCircle, Users, CreditCard, Ban, Scale, Mail } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionInView>
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 minecraft-text">
              Terms of Service
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using CraftHost services.
            </p>
          </div>
        </MotionInView>

        <div className="max-w-4xl mx-auto space-y-8">
          <MotionInView delay={0.1}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">1. Introduction</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Welcome to CraftHost. By accessing or using our Minecraft server hosting services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you and CraftHost. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.15}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold">2. Eligibility</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  You must be at least 13 years old to use CraftHost services. If you are under 18, you must have permission from a parent or legal guardian to use our services and make purchases.
                </p>
                <p>
                  By using our services, you represent and warrant that you have the legal capacity to enter into this agreement and comply with these terms.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.2}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">3. Account Responsibilities</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                </p>
                <p>
                  You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.25}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <CreditCard className="w-6 h-6 text-warning" />
                </div>
                <h2 className="text-2xl font-bold">4. Payment Terms & Refunds</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  All payments must be made in advance. You must pay an initial amount via redeem code, after which we will create your server panel. The remaining balance must be paid within 24 hours via UPI.
                </p>
                <p>
                  Failure to pay the remaining balance within 24 hours will result in immediate termination of your server and account access.
                </p>
                <p>
                  We offer a 7-day money-back guarantee for new customers. Refund requests must be submitted within 7 days of your initial purchase. Refunds are processed within 5-10 business days.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.3}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <Ban className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">5. Acceptable Use Policy</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  You agree not to use CraftHost services for any unlawful purpose or in any way that violates these terms. Prohibited activities include but are not limited to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Hosting illegal content or engaging in illegal activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Distributing malware, viruses, or harmful code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Attempting to gain unauthorized access to our systems or other users' accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Excessive resource usage that impacts other users' services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Harassment, hate speech, or discriminatory content</span>
                  </li>
                </ul>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.35}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">6. User-Generated Content</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  You retain ownership of all content you upload to your server. However, you grant CraftHost a license to store, backup, and display your content as necessary to provide our services.
                </p>
                <p>
                  You are solely responsible for your content and must ensure you have all necessary rights and permissions. CraftHost is not responsible for user-generated content and does not endorse any content uploaded by users.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.4}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold">7. Service Availability</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  While we strive for 99.9% uptime, we do not guarantee uninterrupted service. CraftHost may perform scheduled maintenance, and we will provide advance notice when possible.
                </p>
                <p>
                  We are not liable for any downtime, data loss, or service interruptions caused by factors beyond our reasonable control, including but not limited to natural disasters, network failures, or third-party service disruptions.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.45}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <AlertCircle className="w-6 h-6 text-warning" />
                </div>
                <h2 className="text-2xl font-bold">8. Termination</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  We reserve the right to suspend or terminate your account at any time for violation of these terms, non-payment, or any other reason we deem necessary to protect our services or other users.
                </p>
                <p>
                  You may cancel your account at any time through your control panel. Upon termination, your access to the services will cease, and your data may be deleted after a grace period.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.5}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <Scale className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">9. Disclaimers & Limitation of Liability</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  CraftHost services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be error-free, secure, or uninterrupted.
                </p>
                <p>
                  To the maximum extent permitted by law, CraftHost shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill.
                </p>
                <p>
                  Our total liability for any claims arising from your use of our services shall not exceed the amount you paid to CraftHost in the 12 months preceding the claim.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.55}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">10. Changes to Terms</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes via email or through our service dashboard.
                </p>
                <p>
                  Your continued use of CraftHost services after changes are posted constitutes your acceptance of the modified terms. If you do not agree to the changes, you must discontinue use of our services.
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.6}>
            <div className="mc-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold">11. Contact Information</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  If you have any questions about these Terms of Service, please contact us through our support ticket system or join our Discord community for assistance.
                </p>
                <p className="font-semibold text-foreground">
                  Last Updated: February 12, 2026
                </p>
              </div>
            </div>
          </MotionInView>
        </div>
      </div>
    </div>
  );
}
