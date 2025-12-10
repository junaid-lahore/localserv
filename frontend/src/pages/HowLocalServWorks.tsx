import React from "react";
import { BlogLayout } from "components/BlogLayout";
import { blogData } from "utils/blogData";

const HowLocalServWorks: React.FC = () => {
  const post = blogData.find((p) => p.slug === "how-localserv-works");

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <BlogLayout post={post}>
      <div className="prose prose-lg max-w-none">
        <p>
          Booking a service in Los Angeles often feels like a waiting game. You
          fill out forms, call providers, or drop a message on an app — and
          then, silence. Days go by before anyone replies. If they do, it’s often
          with a new price, or worse — they never show up at all.
        </p>
        <img
          src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/feature%20image_blog2.png"
          alt="Comparison of frustrated customer on the phone and a happy customer using LocalServ app"
          className="w-full h-auto rounded-lg my-8"
        />
        <p>
          For businesses, it’s no better. They spend hundreds buying “leads,”
          chasing calls, and juggling calendars — yet most never convert. Time is
          wasted. Money is lost. Trust disappears.
        </p>
        <p>
          <strong>That’s precisely where LocalServ flips the script.</strong>
        </p>
        <p>
          It’s not another directory — it’s the first AI-powered negotiation
          platform built for Angelenos, designed to save hours of waiting and
          wasted effort.
        </p>
        <p>With LocalServ:</p>
        <ul>
          <li>
            Customers receive AI-generated offers in minutes, verified through
            participating businesses.
          </li>
          <li>
            Businesses get AI sales reps that handle negotiation and scheduling;
            payment flows securely through escrow.
          </li>
          <li>
            And everyone gets clarity — verified pros, transparent prices, and
            post-completion rewards.
          </li>
        </ul>
        <p>
          LocalServ isn’t about quick clicks; it’s about smart bookings — turning
          uncertainty into clarity, ghosting into trust, and wasted hours into
          real value.
        </p>
        <h2>What’s Broken with Traditional Service Apps in Los Angeles</h2>
        <p>
          Booking a service in LA should be simple, but most apps still run on
          outdated systems. Customers fill out forms or leave voicemails — then
          wait endlessly, only to get ghosted or quoted a higher price.
        </p>
        <img
          src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/2-What%E2%80%99s%20Broken%20with%20Traditional%20Apps.png"
          alt="Illustration showing the problems with traditional service apps"
          className="w-full h-auto rounded-lg my-8"
        />
        <h3>For Customers:</h3>
        <ul>
          <li>Days of waiting instead of minutes.</li>
          <li>Hidden fees and ghosted replies that destroy trust.</li>
        </ul>
        <h3>For Businesses:</h3>
        <ul>
          <li>Paying upfront for leads that never convert.</li>
          <li>Chasing calls with no guarantee of ROI.</li>
          <li>No analytics or transparency on what works.</li>
        </ul>
        <p>
          The result? A broken marketplace where customers waste time and
          businesses waste money.
        </p>
        <img
          src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/5-Advertising%20Incentives.png"
          alt="Diagram of LocalServ's fair rebate system"
          className="w-full h-auto rounded-lg my-8"
        />
        <p>
          That’s exactly where LocalServ steps in — introducing AI negotiation,
          verified offers, and rebates held in escrow that turn wasted time into
          real value.
        </p>
        <h2>
          How LocalServ Works for Customers: Minutes, Not Days
        </h2>
        <p>
          Imagine this: it’s Sunday night in Los Angeles, shops are closed, and
          you need a quick mobile service. On a traditional app, you’d send a
          request — and wait days for a reply.
        </p>
        <img
          src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/3-How%20LocalServ%20Works%20for%20Customers.png"
          alt="Illustration of the LocalServ customer experience"
          className="w-full h-auto rounded-lg my-8"
        />
        <p>With LocalServ, it’s different:</p>
        <ol>
          <li>
            <strong>Tell the AI what you need.</strong>
            <br />
            No endless forms. Just describe your request like a text.
          </li>
          <li>
            <strong>Get verified offers in minutes.</strong>
            <br />
            AI reps from participating businesses reply instantly with
            transparent quotes tied to cash rebates held in escrow.
          </li>
          <li>
            <strong>Book with confidence.</strong>
            <br />
            Compare offers side by side, pick the best deal, and confirm knowing
            your rebate is safely held until the job’s done.
          </li>
        </ol>
        <p>
          <strong>Example:</strong> A $120 booking might include a $20 rebate.
          You pay $120; the job’s completed; and once verified, your $20 reward
          is automatically released — simple and fair.
        </p>
        <h3>Customer Benefits</h3>
        <ul>
          <li>Faster bookings — minutes, not days.</li>
          <li>Transparent pricing with no ghosting.</li>
          <li>Verified rebates that give real value back.</li>
        </ul>
        <h2>
          How LocalServ Works for Businesses: Smarter ROI with AI Sales Reps
        </h2>
        <p>
          Traditional apps are a gamble. Providers pay for leads that rarely
          convert, wasting hours chasing calls.
        </p>
        <p>LocalServ flips that model:</p>
        <ul>
          <li>
            <strong>AI reps handle negotiations.</strong> Automated agents respond
            instantly, send offers, and secure bookings.
          </li>
          <li>
            <strong>Only pay for closed jobs.</strong> Instead of buying empty
            leads, businesses fund small post-completion rebates (incentives)
            that are released after both sides confirm the service is complete.
          </li>
          <li>
            <strong>Automation + analytics.</strong> LocalServ syncs with POS/CRM
            systems and calendars while tracking what converts best.
          </li>
        </ul>
        <h3>Business Benefits</h3>
        <ul>
          <li>Higher ROI — pay only for completed jobs.</li>
          <li>Time saved — AI handles the back-and-forth.</li>
          <li>Actionable insights from real booking data.</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 my-8 rounded-r-lg shadow-md flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="font-bold text-lg">Pro Tip</p>
            <p className="mt-1">
              Don’t waste money on dead leads — with rebates, businesses only pay
              when jobs are real.
            </p>
          </div>
        </div>
        <h2>Rebates: Why This System Is Fair for Everyone</h2>
        <p>
          Most platforms charge businesses for leads — whether they work out or
          not. Customers waste time. Providers waste money.
        </p>
        <img
          src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/5-Advertising%20Incentives.png"
          alt="Diagram of LocalServ's fair rebate system"
          className="w-full h-auto rounded-lg my-8"
        />
        <p>
          LocalServ changes that with a system built for trust and fairness.
        </p>
        <h3>How It Works</h3>
        <ul>
          <li>
            <strong>Businesses fund rebates.</strong> When they want a job,
            providers place a small incentive into escrow.
          </li>
          <li>
            <strong>LocalServ holds it safely.</strong> Funds stay protected
            until the job is verified complete.
          </li>
          <li>
            <strong>Rebate is automatically released after verified completion.</strong>
            No chasing, no confusion.
          </li>
          <li>
            <strong>Proof matters.</strong> Completion is verified through photo,
            receipt, or confirmation from both sides before any money moves.
          </li>
        </ul>
        <p>Finally, a system where everyone wins:</p>
        <ul>
          <li>
            Customers earn for choosing right, and businesses only pay for real
            results.
          </li>
        </ul>
        <div className="bg-purple-50 border-l-4 border-purple-500 text-purple-800 p-6 my-8 rounded-r-lg shadow-md flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707.707M12 21v-1m0-10a4 4 0 00-4 4h8a4 4 0 00-4-4z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="font-bold text-lg">Did You Know?</p>
            <p className="mt-1">
              The average LA customer waits over 48 hours to get a service quote —
              with LocalServ’s AI system, it happens in minutes.
            </p>
          </div>
        </div>
        <h2>Behind the Scenes: The AI Negotiation Flow</h2>
        <p>
          Behind every request, LocalServ’s AI agents go to work — one for you,
          one for the business.
        </p>
        <img
          src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/6-Behind%20the%20Scenes%20(AI%20Flow).png"
          alt="Diagram of the AI negotiation flow in LocalServ"
          className="w-full h-auto rounded-lg my-8"
        />
        <ul>
          <li>
            <strong>Customer AI:</strong> Understands your request and structures
            it clearly for providers.
          </li>
          <li>
            <strong>Business AI:</strong> Responds instantly with verified quotes
            and negotiates automatically.
          </li>
          <li>
            <strong>Comparison Layer:</strong> You see offers side by side —
            transparent and verified.
          </li>
          <li>
            <strong>Escrow & Payout:</strong> Once you confirm completion, your
            rebate is released automatically.
          </li>
        </ul>
        <blockquote>
          “What used to take days now happens in minutes — all negotiated by
          AI.”
        </blockquote>
        <p>
          This flow means customers don’t waste time chasing providers, and
          businesses don’t waste money on dead leads. AI does the heavy lifting,
          so people can focus on what matters.
        </p>
        <h2>Built by Locals, for Locals</h2>
        <p>
          LocalServ was built by former LA service-business owners who got tired
          of wasting hours chasing dead leads. They knew there had to be a better
          way — one that respected time, trust, and results on both sides.
        </p>
        <img
          src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/7-%20CTA.jpg"
          alt="Screenshot of the LocalServ app in action"
          className="w-full h-auto rounded-lg my-8"
        />
        <h2>Smarter Bookings for a Smarter City</h2>
        <p>
          Service apps don’t have to be slow, frustrating, or unfair. With
          LocalServ, bookings in Los Angeles are no longer about waiting days for
          replies or wasting money on leads that never convert.
        </p>
        <p>
          For customers → verified offers, transparent pricing, and rebates that
          turn your time into real value.
          <br />
          For businesses → AI sales reps, fair pay-for-results, and automation
          that finally makes ROI predictable.
        </p>
        <p>
          At its core, LocalServ isn’t just another marketplace — it’s the first
          AI-powered negotiation platform designed to work for both sides:
          faster, fairer, and built for the way Angelenos actually live.
        </p>
        <h3>Ready to skip the waiting game?</h3>
        <p>
          Join the LocalServ waitlist today and get early access when we launch
          in Los Angeles.
          <br />
          <a href="/#waitlist">[Join the Waitlist →]</a>
        </p>
      </div>
    </BlogLayout>
  );
};

export default HowLocalServWorks;
