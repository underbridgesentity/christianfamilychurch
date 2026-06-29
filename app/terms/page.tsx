import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Terms & Conditions" };

type Block = { t: "h" | "p" | "li"; s: string };

const blocks: Block[] = [
  { t: "p", s: "LOGIC SMS SHORT CODE Publication Date: 1 October 2024 | Version 1.0 Support Contact: 011 230 9300 Email: compliance@cfcsa.co.za The purpose of this Document is to outline the Terms and Conditions for the use of the Premium SMS Short Code as required by the Wireless Application Service Providers’ Association (WASPA)." },
  { t: "h", s: "1. Introduction" },
  { t: "p", s: "Christian Family Church International Johannesburg t/a Christian Family Church (Hereafter referred to as “CFC Jhb” or “we”) (NPO number: 033514) makes use of the services of Logic SMS. This document outlines the Terms and Conditions for the use of the Premium SMS Short Code service." },
  { t: "h", s: "2. Premium SMS Short Code" },
  { t: "p", s: "The dedicated 49991 shortcode is used for people to indicate to us that they want us to contact them, by posting a message like “saved”, “contact”, “connect” or similar, or for them to send us a prayer request." },
  { t: "h", s: "2.1. How the Short Code works" },
  { t: "p", s: "Examples of how to submit a message. ● Text “saved” to 49991 if you have made a decision to dedicate your life to Jesus Christ ● Text “connect” to 49991 if you want to take your next step to get more involved at CFC Jhb ● Text “contact” to 49991 if you want us to contact you to discuss any matter related to our church ● Text “prayer” or a short prayer request, to 49991 if you want us to pray for you" },
  { t: "h", s: "2.2. Cost per SMS" },
  { t: "p", s: "● Standard rates apply to every SMS that is sent. ● If you send a long prayer request (instead of the word “prayer”), your SMS may be delivered in multiple SMS messages in which case you will be charged per SMS that was sent. ● Mobile Network fees and admin fees may apply." },
  { t: "h", s: "3. WASPA Requirements" },
  { t: "h", s: "3.1. Statement by Logic SMS" },
  { t: "p", s: "LogicSMS is a member of WASPA and is bound by the WASPA Code of Conduct. Customers have the right to approach WASPA to lodge a complaint in accordance with the WASPA complaints procedure. LogicSMS may be required to share information relating to a service or a customer with WASPA for the purpose of resolving a complaint. Visit the WASPA website www.waspa.org.za for more information. LogicSMS has the right to suspend or terminate the services of any customer who does not comply with these terms and conditions or any other related contractual obligations. LogicSMS has the right to take down any content (hosted as part of the service) that it considers illegal or for which it has received a take-down notice. Handset compatibility (in the case of a Voting/Donation/Competition line) is a requirement to have access to an SMS Application and free SMS do not apply." },
  { t: "h", s: "3.2. Statement by CFC Jhb" },
  { t: "p", s: "CFC Jhb will not use the premium SMS short code service for any of the following: ● to intentionally engage in illegal conduct ● to knowingly create, store or disseminate any illegal content ● to knowingly infringe copyright ● to knowingly infringe any intellectual property rights, or ● to send spam or promote the sending of spam" },
  { t: "h", s: "4. Your Obligations" },
  { t: "p", s: "● You are obligated to provide us with your correct information. Once you have provided us with your mobile number by submitting a request as described in section 2.1 above, we rely on you to inform us if your mobile number has changed, or if your number has been transferred to someone else. ● If you are younger than 18 years old, you may only use this service with the permission of a parent or guardian." },
  { t: "h", s: "5. Enquiries" },
  { t: "p", s: "If you have any questions or concerns arising from these terms and conditions, you may contact the Compliance Officer at compliance@cfcsa.co.za. Document Number Terms and Conditions Ver 1.0 Effective Date 1 October 2024 Revision Number Revision Number Date Approved by Leon Kilian Date Approved 1 October 2024" },
];

const h2: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 800,
  fontSize: "clamp(18px,2.2vw,23px)",
  letterSpacing: "-.01em",
  color: "#11203F",
  margin: "34px 0 12px",
};

const para: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.72,
  color: "#3a4660",
  margin: "0 0 15px",
};

export default function TermsPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="" overlay />

      <PageHero
        image="/assets/img-congregation-screens.jpg"
        eyebrow="Legal"
        title={<>Terms &amp; Conditions</>}
        subtitle="SMS Short Code (49991) Terms of Use"
        align="end"
        minHeight="46vh"
      />

      <section style={{ background: "#fff", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,40px) clamp(64px,8vw,110px)" }}>
        <Reveal style={{ maxWidth: 820, margin: "0 auto" }}>
          {blocks.map((b, i) => {
            if (b.t === "h") {
              return (
                <h2 key={i} style={h2}>
                  {b.s}
                </h2>
              );
            }
            if (b.t === "li") {
              return (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", margin: "0 0 9px", paddingLeft: 6 }}>
                  <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: "50%", background: "#2E6BE6", marginTop: 9 }} />
                  <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#3a4660", margin: 0 }}>{b.s}</p>
                </div>
              );
            }
            return (
              <p key={i} style={para}>
                {b.s}
              </p>
            );
          })}
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
