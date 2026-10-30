import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { PROFILE } from '../data/profile';
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
  Info,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/ui/Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PROFILE.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        return;
      }
      throw new Error('Clipboard API unavailable or non-secure context');
    } catch {
      // Robust textarea fallback for non-secure contexts or denied permissions
      try {
        const textArea = document.createElement('textarea');
        textArea.value = PROFILE.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (err) {
        console.warn('Clipboard fallback failed:', err);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(
      subject.trim() || `Inquiry from ${senderName || 'Portfolio Visitor'}`
    );
    const bodyText = `Hi Pratik,\n\n${message.trim()}\n\nBest regards,\n${senderName || 'Visitor'}`;
    const encodedBody = encodeURIComponent(bodyText);
    window.location.href = `mailto:${PROFILE.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <Section
      id="contact"
      tag="Direct Communication"
      title="Initiate a Conversation"
      subtitle="Open to developer internships, open-source initiatives, and collaborative software projects. Reach out directly."
    >
      <div className="contact-curated-container">
        {/* Main Contact Enclosure */}
        <GlassPanel variant="surface" className="contact-main-pod">
          <div className="contact-top-halo" aria-hidden="true" />

          <div className="contact-header-block">
            <div className="contact-avatar-icon">
              <Mail size={28} aria-hidden="true" />
            </div>
            <h3 className="contact-main-heading">Let's Build Something Thoughtful</h3>
            <p className="contact-lead-text">
              Whether you are discussing engineering opportunities, academic collaboration, or open-source ideas, I respond promptly to all direct inquiries.
            </p>
          </div>

          {/* Quick Direct Email Actions */}
          <div className="contact-direct-actions-row">
            <a
              href={`mailto:${PROFILE.email}`}
              className="hero-btn-primary contact-cta-btn"
              aria-label={`Send Direct Email to ${PROFILE.email}`}
            >
              <Mail size={16} aria-hidden="true" />
              <span>Send Direct Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="hero-btn-secondary contact-copy-btn"
              aria-label={copied ? "Copied to Clipboard!" : `Copy: ${PROFILE.email}`}
            >
              {copied ? (
                <>
                  <Check size={16} color="#10B981" aria-hidden="true" />
                  <span style={{ color: '#10B981' }}>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={16} aria-hidden="true" />
                  <span>Copy: {PROFILE.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Quick Compose Form */}
          <div className="contact-compose-section">
            <div className="compose-header-bar">
              <span className="compose-title">
                <Sparkles size={14} color="var(--accent)" />
                <span>Direct Message Composer</span>
              </span>
              <span className="compose-badge">Native Mailto Integration</span>
            </div>

            <form onSubmit={handleSendDraft} className="contact-compose-form">
              <div className="compose-inputs-row">
                <div className="compose-field">
                  <label htmlFor="contact-sender-name">Your Name or Organization</label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="compose-glass-input"
                  />
                </div>
                <div className="compose-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Engineering Internship Opportunity"
                    className="compose-glass-input"
                  />
                </div>
              </div>

              <div className="compose-field">
                <label htmlFor="contact-message">Message Brief</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about the role, project, or topic you'd like to discuss..."
                  className="compose-glass-input compose-textarea"
                />
              </div>

              <div className="compose-submit-row">
                <button
                  type="submit"
                  className="hero-btn-primary compose-launch-btn"
                  disabled={!message.trim()}
                  aria-disabled={!message.trim()}
                  title={!message.trim() ? 'Please type a message before launching your mail client' : 'Open draft in local mail client'}
                >
                  <Send size={15} aria-hidden="true" />
                  <span>Open in Mail Client</span>
                </button>

                <div className="compose-guarantee-note">
                  <Info size={13} aria-hidden="true" />
                  <span>
                    Directly pre-populates your local email application with this draft. No messages are discarded or stored on third-party servers.
                  </span>
                </div>
              </div>
            </form>
          </div>

          {/* Verified Profiles Dock */}
          <div className="contact-profiles-strip">
            <span className="profiles-strip-label">Verified External Profiles:</span>
            <div className="profiles-links-group">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-glass-link"
              >
                <GitHubIcon size={16} aria-hidden="true" />
                <span>GitHub Profile</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-glass-link"
              >
                <LinkedInIcon size={16} aria-hidden="true" />
                <span>LinkedIn Network</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};
