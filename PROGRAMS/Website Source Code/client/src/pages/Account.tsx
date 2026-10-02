/**
 * Style reminder: The member-area prototype preserves the Discipline Ledger's
 * direct editorial structure, clear labels, and calm ink-and-paper contrast.
 */
import { PageIntro } from "@/components/PageIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { memberships } from "@/lib/dobuData";
import { CheckCircle2, CircleUserRound, LockKeyhole, LogOut, ShieldCheck } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type MemberRecord = { name: string; email: string; plan: string; createdAt: string };
const storageKey = "dobu-member-prototype";

export default function Account() {
  const [member, setMember] = useState<MemberRecord | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) setMember(JSON.parse(stored) as MemberRecord);
  }, []);

  function createAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const newMember: MemberRecord = {
      name: String(form.get("memberName") || "").trim(),
      email: String(form.get("memberEmail") || "").trim(),
      plan: String(form.get("memberPlan") || "Basic"),
      createdAt: new Date().toLocaleDateString("en-GB"),
    };
    if (!newMember.name || !newMember.email) {
      setMessage("Please provide your name and email address.");
      return;
    }
    window.localStorage.setItem(storageKey, JSON.stringify(newMember));
    setMember(newMember);
    setMessage("");
  }

  function signOut() {
    window.localStorage.removeItem(storageKey);
    setMember(null);
    setMessage("");
  }

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageIntro number="05" eyebrow="Member area prototype" title="Keep your membership choices in one place.">
          <p>This front-end demonstrator shows the intended member journey. It saves a sample profile only in this browser; a live website would connect this screen to a secured account service and database.</p>
        </PageIntro>

        <section className="account-section">
          {member ? (
            <article className="member-dashboard" aria-live="polite">
              <div className="dashboard-heading">
                <div className="member-icon"><CircleUserRound size={28} /></div>
                <div>
                  <p className="eyebrow">Membership active</p>
                  <h2>Welcome, {member.name}.</h2>
                </div>
              </div>
              <div className="dashboard-details">
                <div><span>Selected membership</span><strong>{member.plan}</strong></div>
                <div><span>Account email</span><strong>{member.email}</strong></div>
                <div><span>Prototype created</span><strong>{member.createdAt}</strong></div>
              </div>
              <div className="dashboard-actions">
                <p><CheckCircle2 size={18} /> Your current plan can be reviewed with the coaching team before a live account is activated.</p>
                <Button type="button" variant="ghost" onClick={signOut} className="sign-out-button"><LogOut size={16} /> Clear prototype account</Button>
              </div>
            </article>
          ) : (
            <div className="account-create-grid">
              <div className="account-copy">
                <p className="eyebrow">Create a sample account</p>
                <h2>Choose your plan, then make it yours.</h2>
                <p>Use this interactive prototype to see how a new member could select a plan and access a simple membership summary.</p>
                <p className="privacy-note"><ShieldCheck size={18} /> No data leaves this browser. The full design specifies HTTPS, server-side validation, hashed passwords, roles and a protected database for the live implementation.</p>
              </div>
              <form className="membership-form account-form" onSubmit={createAccount}>
                <label htmlFor="memberName">Your name</label>
                <input id="memberName" name="memberName" required autoComplete="name" placeholder="e.g. Alex Morgan" />
                <label htmlFor="memberEmail">Email address</label>
                <input id="memberEmail" name="memberEmail" required type="email" autoComplete="email" placeholder="alex@example.com" />
                <label htmlFor="memberPlan">Preferred membership</label>
                <select id="memberPlan" name="memberPlan" defaultValue="Basic">
                  {memberships.map((plan) => <option key={plan.name}>{plan.name}</option>)}
                </select>
                <Button type="submit" className="form-submit">Create prototype account</Button>
                {message && <p className="form-message" role="alert">{message}</p>}
              </form>
            </div>
          )}
          <div className="security-roadmap">
            <LockKeyhole size={24} />
            <div>
              <p className="eyebrow">Live implementation requirement</p>
              <p>A production member area must move account creation, authentication, membership updates and personal data storage to the protected application layer; browser storage is used here only to demonstrate the client-side interface.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
