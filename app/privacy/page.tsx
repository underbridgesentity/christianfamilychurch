import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Privacy Policy" };

type Block = { t: "h" | "p" | "li"; s: string };

const metaLine = "Last updated July 2021  ·  Version 1.0";

const blocks: Block[] = [
  { t: "p", s: "We respect your privacy and we will take all reasonable steps to keep your personal information safe and confidential. The purpose of this Privacy Policy is to set out how we collect, use, share and otherwise process your personal information, in line with the Protection of Personal Information Act (“POPIA”)." },
  { t: "h", s: "1. Introduction" },
  { t: "p", s: "Welcome to our privacy policy. We are Christian Family Church International Johannesburg t/a Christian Family Church (Hereafter referred to as “CFC Jhb” or “we”) (NPO number: 033514) and this is our plan of action when it comes to protecting your privacy. We respect your privacy and take the protection of personal information very seriously. The purpose of this policy is to describe the way that we collect, store, use, and protect information that can be associated with you or another specific natural or juristic person and can be used to identify you or that person (personal information)." },
  { t: "h", s: "2. Audience" },
  { t: "p", s: "This policy applies to you if:" },
  { t: "li", s: "you are a member of CFC Jhb; or" },
  { t: "li", s: "you are a visitor to our website; or" },
  { t: "li", s: "you have signed up to our mailing list; or" },
  { t: "li", s: "you have attended one of our church services; or" },
  { t: "li", s: "you have signed up for one of our events; or" },
  { t: "li", s: "you have attended or requested to join one of our small groups; or" },
  { t: "li", s: "you have logged in to our church account on any of the Planning Center applications; or" },
  { t: "li", s: "you have voluntarily provided us with any of your personal information" },
  { t: "p", s: "This policy applies to you if you have provided us with any of your personal information at any time, electronically or otherwise." },
  { t: "h", s: "3. Personal information" },
  { t: "p", s: "Personal information includes:" },
  { t: "li", s: "certain information that we collect automatically when you visit our website" },
  { t: "li", s: "certain information collected on registration or check-in (see 3.1. below)" },
  { t: "li", s: "certain information collected on submission of a form (electronically or otherwise); and" },
  { t: "li", s: "sensitive information that you provide to us voluntarily (see 3.2. below)." },
  { t: "p", s: "but excludes:" },
  { t: "li", s: "information that has been made anonymous so that it does not identify a specific person." },
  { t: "li", s: "permanently de-identified information that does not relate or cannot be traced back to you" },
  { t: "p", s: "specifically." },
  { t: "li", s: "non-personal statistical information collected and compiled by us; and" },
  { t: "li", s: "information that you have provided voluntarily in an open, public environment or forum including" },
  { t: "p", s: "any blog, chat room, community, classifieds, or discussion board (because the information has been disclosed in a public forum, it is no longer confidential and does not constitute personal information subject to protection under this policy). Personal information includes information we collect automatically when you visit our website, on registration, at check-ins, on submission of a form, and from you voluntarily. It excludes anonymous, de-identified, non-personal statistical, and public information." },
  { t: "h", s: "3.1. Types of personal information" },
  { t: "p", s: "Examples of the types of personal information, which we may collect and process, include:" },
  { t: "li", s: "identifying information - such as your name, surname and date of birth" },
  { t: "li", s: "contact information - such as your phone number or email address" },
  { t: "li", s: "address information - such as your physical or postal address" },
  { t: "li", s: "demographic information - such as your gender or marital status" },
  { t: "h", s: "3.2. Sensitive personal information" },
  { t: "p", s: "Depending on the services that you require or your area of involvement in our church, we may also collect sensitive personal information including:" },
  { t: "li", s: "financial information - such as amounts you have given to the church" },
  { t: "li", s: "sensitive demographic information - such as your race or ethnicity" },
  { t: "li", s: "medical information - such as information about your physical or mental health" },
  { t: "li", s: "sexual information - such as information about your sex life, sexual orientation or alleged sexual" },
  { t: "p", s: "harassment offenses" },
  { t: "li", s: "criminal information - such as information about your commission or alleged commission of any" },
  { t: "p", s: "offence or any related legal proceedings" },
  { t: "li", s: "employment information - about your employment history" },
  { t: "li", s: "beliefs - including your religious beliefs" },
  { t: "h", s: "4. Acceptance" },
  { t: "h", s: "4.1. Acceptance required" },
  { t: "p", s: "By providing us with your personal information, you agree that you accept all the terms of this policy. If you do not agree with anything in this policy, then you should not provide us with your information." },
  { t: "h", s: "4.2. Personal Information of minors" },
  { t: "p", s: "Parent(s) or guardian(s) of a minor child younger that 18 years old (or a \"competent person\" as defined by POPIA) must give consent to CFC Jhb to process their minor child’s personal information. If you are younger than 18 years old, you may only access our website or provide us with your personal information with the consent from your parent(s), guardian(s) or a \"competent person\" (as defined by POPIA)." },
  { t: "h", s: "4.3. Deemed acceptance" },
  { t: "p", s: "By accepting this policy, you are deemed to have read, understood, accepted, and agreed to be bound by all of its terms." },
  { t: "h", s: "4.4. Your obligations" },
  { t: "p", s: "● You are obligated to provide us with your correct information. We rely on you to inform us if any of your personal information has changed, and by keeping your contact details updated on the Church Center App or by notifying us via email." },
  { t: "p", s: "● You may only give us the personal information of another adult data subject where you have his or her permission to do so. ● You may only give us the personal information of another minor data subject if you have the permission of his or her parent(s), guardian(s) or \"competent person\" (as defined by POPIA)." },
  { t: "h", s: "5. Changes" },
  { t: "p", s: "We may change the terms of this policy at any time by updating this document on our website. We will notify you of any changes by placing a notice on the website or by sending an email to our members, indicating the date when the policy was updated. If you continue to use the website or our facilities or services following notification of a change to the terms, the changed terms will apply to you and you would be deemed to have accepted those updated terms." },
  { t: "h", s: "6. Collection of your Personal Information" },
  { t: "p", s: "We will collect your personal information when you voluntarily submit your information to us through one of the following activities." },
  { t: "h", s: "6.1. When you complete a Connection Card or submit an Online Form" },
  { t: "h", s: "6.2. When you make a donation" },
  { t: "p", s: "6.3. When you register for, or check-in to one of our Church Services, Children’s Ministry or any Church Event." },
  { t: "h", s: "6.4. When you attend Growth Track" },
  { t: "p", s: "● When you request to become a CFC member, you are required to provide some additional special information regarding religious beliefs. Providing this information is voluntary, but necessary if you want to become a member. ● When you request serving in a voluntary or leadership capacity, you are required to provide some additional special information, including religious beliefs, alleged physical or sexual abuse, harassment or criminal offenses. Providing this information is voluntary, but necessary if you want to serve in a voluntary or leadership capacity. 6.5. When you attend a CFC Small Group you will be asked to voluntarily provide the Group Leader with your information. 6.6. When you enrol on the CFCI Bible College, you will be required to submit your information on the Bible College online portal. 6.7. When you request Pastoral or Counselling services, you will be asked to voluntarily provide us with additional information." },
  { t: "h", s: "6.8. When you request a Marriage Officer from CFC Jhb to officiate your wedding." },
  { t: "p", s: "6.9. When you request a Pastor or appointed representative of CFC Jhb to conduct a funeral." },
  { t: "h", s: "6.10. Optional details" },
  { t: "p", s: "You may also provide additional information to us voluntarily (optional information). This includes information you provide when you sign up for an event, submit an online form, or take part in a survey or otherwise use the optional features and functionality of our Planning Center database, our Church Center App or our website. Please read the Planning Center Privacy Policy." },
  { t: "h", s: "6.11. Church Center web page, Church Center App or any of the Planning Center Apps" },
  { t: "p", s: "We collect your personal information when you sign in to the Church Center App or Church Center web page. According to the Planning Center Terms of Use only people 13 years or older may log in to Church Center or any of the other Planning Center applications." },
  { t: "p", s: "You may request to be added to somebody’s household on Planning Center, or somebody else may request to be added to your household. Planning Center allows users to be added to the same ‘household’ for the purpose of families who check-in together for a church event. Adult members of a household have access to view and edit the contact details of all the members on their household on the Church Center App. You can download the Church Center App for Android or for iOS for free, in order to see the members on your household. When you want to add an adult to your household, you have to obtain their permission before you ask us to add them to your household. You may request us to add your minor children to your household. We will only add someone to your household with your permission." },
  { t: "h", s: "6.12. From your browser" },
  { t: "p", s: "We automatically receive and record internet usage information on our server logs, from your browser; such as your Internet Protocol address (IP address), browsing habits, click patterns, version of software installed, system type, screen resolutions, colour capabilities, plug-ins, language settings, search engine keywords, JavaScript enablement, the content and pages that you access on the website, and the dates and times that you visit the website, paths taken, and time spent on sites and pages within the website (usage information). Please note that other websites visited before entering our website might place personal information within your URL during a visit to it, and we have no control over such websites. Accordingly, a subsequent website that collects URL information may log some personal information. We collect certain information from your web browser, including your Internet usage information when you visit our website." },
  { t: "h", s: "6.13. Cookies" },
  { t: "p", s: "Our website does not utilize cookies." },
  { t: "h", s: "6.14. Third-party cookies" },
  { t: "p", s: "Our website does not utilize third-party cookies." },
  { t: "h", s: "6.15. Web beacons" },
  { t: "p", s: "Our website may contain electronic image requests (called a single-pixel gif or web beacon request) that allow us to count page views. Any electronic image viewed as part of a web page (including an ad banner) can act as a web beacon. Our web beacons do not collect, gather, monitor, or share any of your personal information. We merely use them to compile anonymous information about our website. We collect certain information from web beacons on our website to compile anonymous information about our website." },
  { t: "h", s: "6.16. Recording calls" },
  { t: "p", s: "We may monitor and record any telephone calls that you make to us unless you specifically request us not to." },
  { t: "h", s: "6.17. Photography and videography" },
  { t: "p", s: "When we post photos or video footage of our church events on our social media pages or website, or include graphic images of church events in our emails to our congregation, these images or footage may contain photos of people who attended a church event. We have a legitimate interest for processing said photos and video footage. We will only process identifying photos, images or video footage of minors with the consent of a responsible person." },
  { t: "h", s: "7. Purpose for collection" },
  { t: "p", s: "We will use your personal information to provide services and to communicate information to you as we reasonably think appropriate, and for any other purposes set out in this policy. We may use or process your personal information, or optional information that you provide to us, for the purposes that you indicated when you agreed to provide it to us. Processing includes gathering your personal information, disclosing it to authorised persons within our organisation, and combining it with other personal information. We generally collect and process your personal information for various purposes, including:" },
  { t: "li", s: "contact, communication and correspondence - such as phone calls, text messages and" },
  { t: "p", s: "emails" },
  { t: "li", s: "marketing purposes - such as promoting church events in a lawful way" },
  { t: "li", s: "legal purposes - such as handling enquiries, complying with regulations, or pursuing good" },
  { t: "p", s: "governance We may use your information for the purposes described above and to:" },
  { t: "li", s: "remember your information so that you would not have to re-enter it during your visit or the next" },
  { t: "p", s: "time you attend one of our events." },
  { t: "li", s: "monitor website usage metrics such as the total number of visitors and pages accessed; and" },
  { t: "li", s: "track your check-ins, registrations, attendance, form submissions, membership or team-ready" },
  { t: "p", s: "status or any other activities in connection with your attendance or involvement in our church. We may use any of your personal information that you provide to us for the purposes that you indicated when you agreed to provide it to us as set out in this policy." },
  { t: "h", s: "8. Consent to collection" },
  { t: "p", s: "We will obtain your consent to collect personal information:" },
  { t: "li", s: "under applicable law" },
  { t: "li", s: "when you provide us with any personal information or optional information" },
  { t: "p", s: "We will obtain your consent to collect your personal information under applicable law when you provide us with it." },
  { t: "h", s: "9. Use of personal information" },
  { t: "h", s: "9.1. Our obligations" },
  { t: "p", s: "We may use your personal information to fulfil our obligations to you." },
  { t: "h", s: "9.2. Legitimate interest" },
  { t: "p", s: "We may use your personal information where we have a proven legitimate interest to do so." },
  { t: "h", s: "9.3. Messages and communications" },
  { t: "p", s: "We may send you emails, text messages or other communications to inform you about church events or other information related to our church. You can choose to opt-out of receiving these messages if you no longer want to receive our communications. We may use your information to send you emails or text messages to inform you about church events or other information related to our church." },
  { t: "h", s: "10. Disclosure" },
  { t: "h", s: "10.1. Sharing" },
  { t: "p", s: "We do not share your personal information with any unauthorised third parties. We may share your personal information with CFCI Welfare, or other third parties who provide us with relevant services to help us fulfil our pastoral responsibilities to our members. We may share your personal information with authorised third parties to fulfil our obligations to you." },
  { t: "h", s: "10.2. Regulators" },
  { t: "p", s: "We may disclose your personal information as required by law or governmental audit." },
  { t: "h", s: "10.3. Law enforcement" },
  { t: "p", s: "We may disclose personal information if required:" },
  { t: "li", s: "by a subpoena or court order" },
  { t: "li", s: "to comply with any law" },
  { t: "li", s: "to protect the safety of any individual or the general public, and" },
  { t: "li", s: "to prevent violation of our church member relationship terms" },
  { t: "p", s: "We may disclose personal information to third parties if required for legal reasons." },
  { t: "h", s: "10.4. No selling" },
  { t: "p", s: "We will not sell personal information. No personal information will be disclosed to anyone except as provided in this privacy policy." },
  { t: "h", s: "10.5. Employees and Volunteers" },
  { t: "p", s: "We disclose your personal information to our employees and volunteers that require the personal information to fulfil their responsibilities. These include our Church Management, Human Resources, Accounting, Audit, Compliance, Information Technology, Small Group Leaders, Dream Team Leaders or other CFC Personnel. These employees and volunteers are required to sign a confidentiality agreement not to disclose your information with any unauthorised third party." },
  { t: "h", s: "11. Security" },
  { t: "p", s: "We take the security of personal information very seriously and always do our best to comply with applicable data protection laws. Our website and online database are hosted on secure servers that use a firewall and other advanced security measures to prevent interference or access from outside intruders. We authorise access to personal information only for those employees and volunteers who require it to fulfil their job responsibilities. We implement disaster recovery procedures where appropriate. Our website and database are hosted on secure servers, which use security measures to prevent interference by intruders." },
  { t: "h", s: "12. Accurate and up-to-date information" },
  { t: "p", s: "We will try to keep the personal information we collect as accurate, complete, and up to date as is necessary for the purposes defined in this policy. We request that you keep your personal information updated on the Church Center App or by emailing us, or phoning us. Please note that to better protect you and safeguard your personal information, we take steps to verify your identity via email before granting you access to your login profile on Church Center, where you can edit certain personal information of yourself and those on your household. Please keep your personal information accurate and up to date by accessing your profile on the Church Center App, or by emailing us or phoning us." },
  { t: "h", s: "13. Retention" },
  { t: "p", s: "We will retain your personal information for as long as it is necessary to fulfil the purposes explicitly set out in this policy, unless you instruct us in writing to remove your information from our database. During the period of retention, we will continue to abide by our non-disclosure obligations and will not share or sell your personal information. We may retain your personal information in physical or electronic records at our discretion. We will retain your personal information for as long as is necessary." },
  { t: "h", s: "14. Transfer to another country" },
  { t: "p", s: "We may transmit or transfer personal information outside of the country in which it was collected, to a foreign country and process it in that country. Personal information may be stored on servers located outside the country in which it was collected, in a foreign country with different laws governing the protection of your personal information. You consent to us processing your personal information in a foreign country whose laws regarding the processing of personal information may be less stringent. We may transfer your personal information outside the country in which it was collected, to a foreign country." },
  { t: "h", s: "15. Updating or removing" },
  { t: "p", s: "You may choose to correct or update the personal information you have submitted to us, by by logging in to your profile on the Church Center App or by sending an email to mis@cfcsa.co.za. If you want us to delete your information from our database, you must understand that all records of church attendance, membership, Growth Track, Dream Team, small group attendance, Bible College and foundational courses, and all other training or courses would be deleted. In that case, you would be required to attend all relevant training again, if you wish to become a member of our church again in the future. You may choose to update or request the removal of the personal information you have submitted to us." },
  { t: "h", s: "16. Limitation" },
  { t: "p", s: "We are not responsible for, give no warranties, nor make any representations in respect of the privacy policies or practices of linked or any third-party websites." },
  { t: "h", s: "17. Enquiries" },
  { t: "p", s: "If you have any questions or concerns arising from this privacy policy, please contact the Information Officer at informationofficer@cfcsa.co.za." },
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

export default function PrivacyPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="" overlay />

      <PageHero
        image="/assets/img-congregation-wide.jpg"
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={metaLine}
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
