/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Virinchi Sai",
  description: "An aspiring developer  .",
  og: {
    title: "Virinchi Sai Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Virinchi Sai",
  logo_name: "Virinchisai",
  nickname: "virinchisai",
  subTitle:
    "An aspiring entrepreneur who thrives to design solutions to real world problems through Tech and Innovation.",
  portfolio_repository: "",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/virinchisai1640",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn.",
    link: "https://www.linkedin.com/in/virinchi-sai-0a4a9a1b6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:saivirinchi103@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/virinchi_sai/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Snapchat",
    link: "https://www.snapchat.com/add/ditch_bolt",
    fontAwesomeIcon: "fa-snapchat",
    backgroundColor: "#D1D100",
  },
];

const introduction = {
  title: "What Am I Upto",
  description:
    "I am currently pursuing My Second year in B.E (Computer Science and Engineering) from Methodist College of Engineering & Technology College, Osmania University",
};

const skills = {
  data: [
    {
      title: "Web Developer",
      fileName: "FullStackImg",
      skills: ["⭐ Building resposive website front end using HTML CSS"],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BOOTSTRAP",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Data Analytics, IoT & AI",
      fileName: "DataScienceImg",
      skills: [
        "⭐ Experience of working with Arduino",
        "⭐ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "##3776AB",
          },
        },
        {
          skillName: "Ardunio",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#00979D",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⭐ Experience working on multiple cloud platforms",
        "⭐ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⭐ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
  ],
};

const interests = {
  data: [
    {
      title: "Creative Design",
      fileName: "DesignImg",
      skills: [
        "⭐ Designing highly attractive user interface for mobile and web applications",
        "⭐ Customizing logo designs and building logos from scratch",
        "⭐ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#3c327b",
          },
        },
        {
          skillName: "Adobe Lightroom",
          fontAwesomeClassname: "simple-icons:adobelightroom",
          style: {
            color: "#2D3246",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/CSE_160719733099",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Methodist College of Engineering & Techonology, Hyderabad",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "Meth.png",
      alt_name: "MCET",
      duration: "2019 - Present",
      descriptions: [
        "⭐ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⭐ Apart from this, I have done courses on Data Science, Cloud Computing and Full Stack Development.",
        "⭐ I won several coding competitions and hackathons",
      ],
      website_link: "https://methodist.edu.in/",
    },
    {
      title: "Gouthami Junior College, Hyderabad",
      subtitle: "Intermediate (Maths, Physics, Chemistry)",
      logo_path: "gouthami.png",
      alt_name: "Gouthami",
      duration: "2017 - 2019",
      descriptions: [],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Packet Tracer ",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1lethYFfWfskze3sqCL3ey6Fy1rq0KEt7/view",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Google Cloud Platform Fundamentals: Core Infrastructure",
      subtitle: "-Google Cloud",
      logo_path: "Googlecloud.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/H46VGDE6DKJG",
      alt_name: "Google Cloud",
      color_code: "#1E90FF",
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://www.credly.com/badges/f8e2567d-443a-4738-92ba-d52f3c94dd4f?source=linked_in_profile",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "AWS Fundamentals: Migrating to the Cloud",
      subtitle: "-AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/TF43GCLWS695",
      alt_name: "AWS",
      color_code: "#242c3c",
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://www.credly.com/badges/7c3118d3-d700-43f3-9085-c822fe671313?source=linked_in_profile",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "AI For Everyone",
      subtitle: "-AI",
      logo_path: "deeplearningai.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/QX2CK5S3H8AF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "- Google",
      logo_path: "google.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XLGXSPFHG2NS",
      alt_name: "Google",
      color_code: "#000000",
    },
    {
      title: "AWS Fundamentals: Going Cloud-Native",
      subtitle: "-AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/R4NKGM59L2RJ",
      alt_name: "AWS",
      color_code: "#242c3c",
    },
    {
      title: "Technical Support Fundamentals",
      subtitle: "- Google",
      logo_path: "google.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/9693S6WAYQ29",
      alt_name: "Google",
      color_code: "#000000",
    },
    {
      title: "AWS Fundamentals",
      subtitle: "- AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/6M2SLNYCFV2W",
      alt_name: "AWS",
      color_code: "#242c3c",
    },
    {
      title: "GCP BIG DATA & ML FUNDAMENTALS",
      subtitle: "- Xebia Academy",
      logo_path: "binx.png",
      certificate_link:
        "https://drive.google.com/file/d/1Jx3UvYSswtqUIpYXf4FbZAfrZePVeiBm/view?usp=sharing",
      alt_name: "binx",
      color_code: "#ffffff",
    },
    {
      title: "NDG LINUX UNHATCHED",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1MpChbwbybE1lHKl-F6oz2g6DSAwRrEGM/view",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Google Cloud Skill Badges",
      subtitle: "- Qwik Labs",
      logo_path: "GCP.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/cc1457ad-c301-44fd-83f6-3ed5939f2100",
      alt_name: "Google",
      color_code: "#fffffc",
    },
    {
      title: "Building a Machine Learning Ready Organization",
      subtitle: "- AWS Academy",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1o7o5GmESV5c2rdtNZEjbD8Mhn8Wpz5k6/view",
      alt_name: "AWS",
      color_code: "#242c3c",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have thirst for creating products that create technological and social impact, which pushed me to look for ideas to start my own startup venture. I love organising events and that is why I am also involved with many professional bodies as a representative. I believe that the best way to find one's self is to lose themself in the service of others, thus ended up working in quite a number of NGO's.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Member",
          company: "CSI METH",
          logo_path: "csi_logo.png",
          duration: "Feburary 2021 - Present",
          location: "Hyderabad, Telangana",
          color: "#4285F4",
        },
        {
          title: "Student Member ",
          company: "NSS Unit METH",
          logo_path: "nss_logo.png",
          duration: "Nov 2020 - Present",
          location: "Hyderabad, Telangana",
          description:
            "NSS Unit METH is part of National Service Scheme. The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969. Aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community (esp. Villages) linkage.",
          color: "#D83B01",
        },
        {
          title: "Student Member",
          company: "Street Cause - METH",
          company_url: "https://www.streetcause.org/",
          logo_path: "street_cause_logo.png",
          duration: "January 2020 - Present",
          location: "Hyderabad, Telangana",
          description:
            "Street Cause is an NGO comprising of students intent on doing their bit for the betterment of society. My responsibility in this organisation was to procure logistics and execute ngo activites in college and in the city. ",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create AI & Machine Learning projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "virinchi.png",
    description:
      "I am active on every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to express my views opnions an thoughts as well as share my experiences through my blog",
    link: "https://virinchisai.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "BTS, Srinivasa Colony Mlg Road Nalgonda, 508001",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/17%C2%B002'49.1%22N+79%C2%B016'49.2%22E/@17.0480022,79.2800179,18.32z/data=!4m6!3m5!1s0x3bcb29835fe0fa4f:0x2ffc830c893e0269!7e2!8m2!3d17.046971!4d79.2803371",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7386731640",
  },
};

export {
  settings,
  seo,
  greeting,
  introduction,
  socialMediaLinks,
  skills,
  interests,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
