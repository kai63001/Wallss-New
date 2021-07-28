import dynamic from "next/dynamic";
import Link from "next/link";
const Layout = dynamic(import("@/components/Layout"));

const Terms = () => {
  return (
    <Layout title="Terms of Use - Wallss">
      <div className="max-w-screen-lg mx-auto mt-3 px-2 xs:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-romeo2 mb-3">
            <span className="text-purple-700">T</span>erms of
            <span className="text-purple-700"> U</span>se
          </h1>
        </div>
        <div className="bg-white p-10 shadow-md text-lg">
          This document outlines what constitutes acceptable use of the
          wallss.net web site, it's associated web services, and server
          infrastructure. It also covers our content moderation policy and what
          you can expect regarding performance and availability.
          <br />
          <br />
          If you have questions about what you are legally permitted to do with
          content found on this web site, please consult our{" "}
          <Link href="/copyright">
            <a className="text-purple-600">Copyright Policy</a>
          </Link>
          .<h2 className="text-2xl font-romeo2 mb-3 mt-2">Access</h2>
          <p className="mb-2">
            You must be at least 13 years old to use this website.
          </p>
          <p className="mb-2">
            BY BROWSING, DOWNLOADING, UPLOADING, OR OTHERWISE USING THIS
            WEBSITE, YOU REPRESENT THAT YOU ARE AT LEAST 13 YEARS OF AGE, AND
            THAT YOUR PARENT OR LEGAL GUARDIAN AGREES TO BE BOUND BY THESE TERMS
            OF SERVICE IF YOU ARE BETWEEN 13 AND THE AGE OF LEGAL MAJORITY IN
            YOUR JURISDICTION OF RESIDENCE.
          </p>
          <p className="mb-2">
            This web site is intended to be accessed via standard web browser
            software and similar products via direct interaction by a human.
            With the exception of publicly accessible RSS feeds provided in XML
            format, the web site and its associated files are not meant to be
            accessed via any automated means such as by scripts or bots or
            automated applications.
          </p>
          <p className="mb-2">
            Be aware that if you utilize an automated means of accessing or
            downloading this web site, in whole or in part, your access to the
            site may be prevented, terminated, delayed, or slowed either
            temporarily or permanently, especially if you attempt to download
            too many large files simultaneously. This is necessary in order to
            protect the user-experience of the web site for those who access it
            in the manner envisioned by it's authors.
          </p>
          <p className="mb-2">
            Please understand that automated access to the site, via scripts,
            bots, or other similar means can have the effect of seriously
            degrading the performance of the web site or incurring significant
            additional costs to its operators without sufficient revenue
            generated to cover those costs. Keep in mind, that even minor
            infractions against this policy can have a large negative effect
            when combined with similar actions by other users.
          </p>
          <p className="mb-2">
            We ask that you respect the above guidelines so that we may continue
            to offer the web site as a free resource to the world. We prefer to
            use our resources, both human and financial, to improve and expand
            the features and content of the web site. Your cooperation is
            essential.
          </p>
          <h2 className="text-2xl font-romeo2 mb-3 mt-2">Privacy & Cookies</h2>
          <p className="mb-2">
            Our
            <Link href="/privacy">
              <a className="text-purple-600 px-1">
                Privacy Policy
              </a>
            </Link>
            describes how we handle the information you provide to us when you
            use this web site.
          </p>
          <h2 className="text-2xl font-romeo2 mb-3 mt-2">
            Third-Party Advertisers
          </h2>
          <p className="mb-2">
            wallss.net serves ads provided by a range of third-party advertising
            networks. The practices of our advertising partners are not directly
            covered by wallss.net 's privacy policy. We recommend that you read
            their policies. For your convenience we provide a list our
            advertising partners below. Unfortunately we cannot guarantee it is
            always comprehensive and up to date.
          </p>
          <ul className="ml-5">
            <li> - Google AdSense</li>
          </ul>
          <h2 className="text-2xl font-romeo2 mb-3 mt-2">
            User-submitted Content
          </h2>
          <p className="mb-2">
            wallss.net is a community supported web site, relying on its user
            community for the bulk of its primary content. Currently we accept
            content submissions in the form of desktop and phone wallpapers. In
            order to maintain the quality of our content offerings, only a
            subset of submissions are selected to be published to publicly
            accessible portions of the web site.
          </p>
          <p className="mb-2">
            Some of wallss.net's content may be commented on publicly, with
            user-submitted text appearing directly on the site, associated with
            the appropriate content. It is the intention of the operators and
            architects of this site that the commenting feature be used only for
            constructive feedback and other discussions directly related to the
            content in question. It is not to be used for personal insults,
            explicit or implied, off-topic discussions, racially or culturally
            insensitive material, sexual content, or other material not suited
            for a family audience including small children. Additionally, we ask
            that personally identifiable information not be posted to the web
            site, regardless of whether it pertains to yourself or another
            individual. Children under the age of 13 shall only post comments or
            other content under the supervision of a parent, guardian, or other
            responsible adult.
          </p>
          <p className="mb-2">
            We reserve the right to moderate the content posted on wallss.net,
            both during and after the submission process. The moderators may
            delete or edit content at any time, manually or via automated means
            including the use of user-generated data to determine what is and is
            not acceptable to our audience. Moderation criteria may vary over
            time.
          </p>
          <h2 className="text-2xl font-romeo2 mb-3 mt-2">Linking</h2>
          <p className="mb-2">
            Direct hyperlinking to images and other large files hosted by
            wallss.net is strictly prohibited without our permission. You may of
            course link directly to individual HTML or XML based web pages.
            Direct linking to our small preview images is permitted but not
            guaranteed. No files or services hosted on this web site are to be
            integrated into any other online service or application without the
            expressed written permission of the operators of this web site.
          </p>
          <h2 className="text-2xl font-romeo2 mb-3 mt-2">Prohibited Content</h2>
          <p className="mb-2">
            wallss.net is meant to be a family-safe website, which means that we
            don't accept content submissions which contain pornography, adult or
            mature content, hate speech, content that advocates against an
            individual, group or organisation, content that promotes weapons (
            not the hobby/movie/games content type, just the trigger happy type
            of content ), depictions of gratuitous violence, gore, bloodshed or
            gruesome images, images that promote use of drugs or drug
            paraphernalia, copyrighted material (content for which you don't
            have the necessary legal rights to display), if we receive a notice
            or otherwise have reason to believe that your content qualifies as
            such we may remove or suspend your content or account.
          </p>
          <p className="mb-2">
            Please check our{" "}
            <Link href="/rules">
              <a className="text-purple-600"> community rules </a>
            </Link>
            before uploading content.
          </p>
          <h2 className="text-2xl font-romeo2 mb-3 mt-2">Performance</h2>
          <p className="mb-2">
            The operators of the web site make a reasonable attempt to maintain
            the availability and performance of wallss.net and its associated
            services. However, uptime and accessibility cannot be guaranteed.
            The web site may occasionally be inaccessible, in whole or in part,
            due to planned or emergency maintenance, feature upgrades, bug
            fixes, server migrations, hardware upgrades and failures, or simply
            to prevent unauthorized use, hacking, or exploitation of the web
            site, or its resources.
          </p>
          <h2 className="text-2xl font-romeo2 mb-3 mt-2">Liability</h2>
          <p className="mb-2">
            WallpaperCave.com, its owners, employees, contractors, and partners
            shall not be held legally liable or financially responsible for any
            loss, damage, or injury incurred as a result of the use or existence
            of WallpaperCave.com, its associated sites, content, services or
            infrastructure.
          </p>
          <p className="mb-2">
            That being said, if you have any concerns about the web site, please
            make them known to the operators via
            <Link href="/contact"> 
              <a className="text-purple-600 px-2" title="Contact us">
                 Contact us 
              </a>
            </Link>
            link.
          </p>
        </div>
        <br />
      </div>
    </Layout>
  );
};

export default Terms;
