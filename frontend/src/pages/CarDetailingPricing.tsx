import React from "react";
import { BlogLayout } from "components/BlogLayout";
import { blogData } from "utils/blogData";
import Head from "next/head";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Calendar as CalendarIcon,
  User,
  Clock,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CarDetailingPricing: React.FC = () => {
  const post = blogData.find((p) => p.slug === "car-detailing-pricing-hidden-markups");

  if (!post) {
    return <div>Blog post not found.</div>;
  }
  
  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <BlogLayout post={post}>
      <Head>
        <title>{post.title} | LocalServ Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage.src} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage.src} />
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Car Detailing Pricing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {React.createElement(CalendarIcon, { className: "w-4 h-4" })}
              <time dateTime={post.publishedDate}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8">
            <img
              src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/1-Feature Image - blog4.png"
              alt="Car detailing pricing - LocalServ"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  });
                }
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            If you live in Los Angeles, you already know car detailing isn't cheap. Whether you're getting a basic wash or a full-service detail, the price keeps climbing every year.
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            But the surprising part?
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            The jump in price isn't always because of better materials or more labor — it's often the result of advertising waste and platform fees that businesses are forced to pay upfront.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            LocalServ, the upcoming AI-powered local services platform in Los Angeles, was built to change that. Instead of relying on expensive ads and lead fees, LocalServ uses business-funded incentives and AI automation to create a more efficient marketplace — one where businesses only pay when a job is actually completed, and customers benefit from a more transparent and fair pricing environment.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Car Detailing Is So Expensive in Los Angeles</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Car detailing in LA is costly in part because service providers spend heavily on advertising and lead platforms — costs that eventually get baked into customer pricing.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Advertising Costs Drive Up Prices</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Los Angeles is one of the most competitive markets for local services. To stay visible, detailing businesses spend thousands per month on ads, boosted posts, and third-party platforms.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">Traditional platforms often charge:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Per-lead fees (paid whether a job converts or not)</li>
            <li>Monthly listing fees</li>
            <li>Pay-to-rank placement fees</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            These costs accumulate — and customers ultimately pay for that inefficiency.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Local Market Pressure Makes It Worse</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Strong demand, high competition, and high operating costs inflate pricing even further. Many customers assume this inflation is the "true" cost of detailing, but a large portion is markup created by old-school advertising systems.
          </p>
          
          <div className="bg-orange-50 dark:bg-orange-950 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
            <h4 className="text-orange-800 dark:text-orange-200 font-semibold mb-2">💡 Did You Know?</h4>
            <p className="text-orange-900 dark:text-orange-100 mb-0">
              Many LA detailing businesses spend 20–30% of their budget on ads and lead generation — much of it wasted on leads that never convert.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How Traditional Apps Increase the Real Cost of Detailing</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Most service platforms use a pay-per-lead model that contributes directly to higher pricing.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Leads That Don't Convert → Invisible Markup</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            A detailer might purchase five leads and book only one job — but they still pay for all five. Those losses don't disappear. They're added into the price the next customer pays.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Example:</strong> A $100 detailing job may include $30 worth of baked-in ad overhead created by wasted lead spend.
          </p>

          {/* Image 2: Why is detailing so expensive */}
          <div className="relative w-full rounded-2xl overflow-hidden my-8">
            <img
              src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/2-Why is detailing so expensive - Blog4.png"
              alt="Why car detailing is expensive in Los Angeles"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 3: Traditional Apps Make Costs Higher */}
          <div className="relative w-full rounded-2xl overflow-hidden my-8">
            <img
              src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/3-Traditional Apps Make Costs Higher - Blog14.png"
              alt="How traditional apps increase car detailing costs"
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How LocalServ Helps Reduce These Hidden Markups</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            LocalServ replaces these outdated costs with performance-based, business-funded Advertising Incentives. Instead of paying to appear in front of customers or paying for leads that go nowhere, businesses on LocalServ only pay when a job is completed.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">No More Paying for Empty Leads</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Instead of spending money upfront on ads, a business's AI Sales Rep can offer an Advertising Incentive — money placed into LocalServ escrow that is paid to the customer after the service is completed.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            If the job isn't completed, the business pays nothing except a small cancellation fee to cover processing.
          </p>

          {/* Image 4: How LocalServ Cuts Costs */}
          <div className="relative w-full rounded-2xl overflow-hidden my-8">
            <img
              src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/4-How LocalServ Cuts Costs - Blog4.png"
              alt="How LocalServ reduces car detailing costs"
              className="w-full h-auto object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Transparent, Proof-Based Incentives</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">These incentives:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Are funded by the business</li>
            <li>Go into escrow when the job is booked</li>
            <li>Are paid to the customer only after completion</li>
            <li>Cannot be paid early or based on "promises"</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            This model reduces the pressure on businesses to inflate pricing just to cover ad waste.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How AI Drives a More Efficient Marketplace</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            LocalServ uses AI to make the entire process more efficient for both sides — without making claims about guaranteed price reductions.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">AI Negotiation Creates Fair Competition</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Businesses use their AI Sales Reps to review customer requests, ask questions, propose terms, and submit offers. Customers see these offers side-by-side in minutes — not days — which helps create a fair competitive environment without inflated markups.
          </p>

          {/* Image 5: Can AI Really Save Money */}
          <div className="relative w-full rounded-2xl overflow-hidden my-8">
            <img
              src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/5-Can AI Really Save Money - Blog4.png"
              alt="Can AI really save money on car detailing"
              className="w-full h-auto object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Automation Reduces Costs and Friction</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            LocalServ will integrate directly into POS systems, CRMs, or calendars. This means:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Fewer missed bookings</li>
            <li>Fewer administrative errors</li>
            <li>Lower operational overhead</li>
            <li>No wasteful manual back-and-forth</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Those efficiency gains help businesses compete on real value, not advertising budgets.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What's the Smarter Way to Book Car Detailing in LA?</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">Traditional booking options force you to either:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Overpay on ad-heavy platforms</li>
            <li>Spend time calling around</li>
            <li>Compare quotes manually</li>
            <li>Hope you're not paying for someone else's wasted ad budget</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">LocalServ introduces a smarter model:</p>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>You describe what you need in natural language</li>
            <li>LocalServ broadcasts the request to eligible detailers</li>
            <li>Business AI Agents respond with offers and optional incentives</li>
            <li>LocalServ books your job directly into the business's system</li>
            <li>After the job is completed, you receive any business-funded incentive in escrow</li>
          </ol>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            It's a marketplace designed around fairness and proof — not guesswork or hidden fees.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Stop Overpaying for Inefficiency — Start Benefiting From It</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            High detailing prices in LA aren't just about craftsmanship. They're inflated by inefficient ad systems, lead fees, and outdated marketplace models.
          </p>

          {/* Image 6: Smarter Way to Book in LA */}
          <div className="relative w-full rounded-2xl overflow-hidden my-8">
            <img
              src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/6-Smarter Way to Book in LA - Blog4.png"
              alt="Smarter way to book car detailing in Los Angeles"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">LocalServ is built to change that:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Businesses only pay when a job is complete</li>
            <li>Customers receive business-funded incentives after completion</li>
            <li>AI reduces operational waste and unnecessary overhead</li>
            <li>Pricing becomes more transparent and competitive</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            In a car-centric city like Los Angeles, this is more than convenience — it's a step toward a fairer, more efficient service economy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Join the LocalServ Waitlist</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Be among the first to experience AI-powered service booking when LocalServ launches in Los Angeles.
          </p>
        </article>
      </div>
    </BlogLayout>
  );
};

export default CarDetailingPricing;
