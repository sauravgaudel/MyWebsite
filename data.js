// Edit this file to update site content. Leave a value empty ("") until it is real.
const SITE = {
  github: "https://github.com/sauravgaudel",
  linkedin: "", // add profile URL when available
  email: "",    // add email address when available
  cv: "assets/documents/cv.pdf", // add the file, or set to "" to hide the button
  location: "Nepal"
};
const FACTS = [["Based in","Nepal"],["Studying","Computer Engineering"],["Semester","Fifth"],["Interests","AI research, networking"]];
const SKILLS = {
  "Programming": ["Python","C++","JavaScript"],
  "AI / Machine Learning": ["Scikit-learn","Pandas","NumPy","Deep Learning fundamentals"],
  "Web / Backend": ["HTML","CSS","JavaScript","React (familiarity)","FastAPI","REST APIs"],
  "Database": ["MySQL","SQL"],
  "Networking & Cybersecurity": ["Computer Networks","Linux","DNS","OSPF","IPv4/IPv6","Cybersecurity fundamentals"]
};
// Add repo / demo URLs per project once they exist. Without repo, the link points to the GitHub profile.
const PROJECTS = [
  {name:"IPL Win Probability Predictor",desc:"A machine-learning application that estimates the probability of a team's victory based on match conditions.",tech:["Python","Scikit-learn","Pandas"],repo:"",demo:""},
  {name:"Router Simulator",desc:"A project exploring routing concepts, algorithms, and data structures through a practical routing simulation.",tech:["Routing","Algorithms","Data structures"],repo:"",demo:""},
  {name:"Image Classifier Using CNN",desc:"A deep-learning project that classifies images using a Convolutional Neural Network.",tech:["Python","CNN","Deep Learning"],repo:"",demo:""},
  {name:"Score Prediction System",desc:"A machine-learning project focused on predicting cricket scores from match conditions.",tech:["Python","Scikit-learn","NumPy"],repo:"",demo:""},
  {name:"Realistic Water Behaviour — Waves and Ripples",desc:"A computer graphics project simulating realistic water movement, waves, and ripples.",tech:["Computer Graphics","Simulation"],repo:"",demo:""}
];
const RESEARCH = {
  title:"Untargeted Adversarial Attack on Nepali Automatic Speech Recognition using FGSM",
  desc:"An ongoing study investigating the robustness of Nepali automatic speech recognition systems against untargeted adversarial perturbations using the Fast Gradient Sign Method (FGSM).",
  meta:[["Research area","Adversarial Machine Learning"],["Domain","Nepali Automatic Speech Recognition"],["Methodology","FGSM"],["Status","Ongoing research"]],
  paper:"" // add a link only when a document exists
};
const EXPERIENCE = [
  {title:"Networking Team Member — FSU Technical Extended Team",date:"2026 – Present",text:"Participating in networking-related technical activities, learning about Linux, DNS, OSPF, network infrastructure, and campus networking."},
  {title:"APIE Camp 2026 — Participant",date:"2026",text:"An international technical learning program focused on Internet infrastructure and networking."}
];
// status: "Completed" | "Participation" | "Coursework". Only list what is true.
const CERTS = [
  {name:"Understanding the Internet — Keio University / APIE",status:"Completed"},
  {name:"Operating the Internet — SOI Asia",status:"Completed"},
  {name:"APIE Camp 2026",status:"Participation"},
  {name:"Google Cybersecurity Certificate",status:"Coursework"}
];
const INTERESTS = [
  {name:"Music & Singing",text:"I enjoy singing and exploring music. It's one of the ways I express myself and take a break from technical work.",icon:"M9 18V5l11-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm11-2a3 3 0 11-6 0 3 3 0 016 0z"},
  {name:"Cricket",text:"I enjoy cricket, both watching and playing. I appreciate the strategy, teamwork, and excitement of the game.",icon:"M5 19L17 7m0 0l2-2 2 2-2 2-2-2zM4 20a1 1 0 102 0 1 1 0 10-2 0"},
  {name:"Football",text:"Football is another sport I enjoy, especially the energy, teamwork, and competition.",icon:"M12 3a9 9 0 100 18 9 9 0 000-18zm0 6l3 2-1 4h-4l-1-4 3-2z"},
  {name:"Exploring & Learning",text:"I enjoy discovering new technologies, exploring ideas, and learning things beyond my academic coursework.",icon:"M12 3a9 9 0 100 18 9 9 0 000-18zm4 5l-2 6-6 2 2-6 6-2z"}
];
const NAV = ["Home","About","Skills","Projects","Research","Experience","Beyond Tech","Contact"];
const NAV_IDS = ["home","about","skills","projects","research","experience","beyond","contact"];
