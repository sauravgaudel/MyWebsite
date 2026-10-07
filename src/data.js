// Edit this file to update the site. Replace every "#" link with a real URL.
export const profile = {
  name: 'Saurav Gaudel',
  role: 'Computer Engineering student',
  email: 'your.email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  cv: '#', // e.g. '/Saurav_Gaudel_CV.pdf' placed in /public
  location: 'Nepal',
  tagline: 'Building practical technology with AI/ML, security and networks.',
}
export const nav = ['Home', 'About', 'Skills', 'Projects', 'Research', 'Experience', 'Contact']
export const skills = [
  { title: 'Programming', items: ['Python', 'C++', 'JavaScript'] },
  { title: 'AI / Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy', 'Deep Learning (basics)'] },
  { title: 'Web / Backend', items: ['React', 'HTML', 'CSS', 'FastAPI', 'REST APIs'] },
  { title: 'Database', items: ['MySQL', 'SQL'] },
  { title: 'Networking & Cybersecurity', items: ['Computer Networks', 'Linux', 'DNS', 'OSPF', 'Security fundamentals'] },
]
export const featured = [
  { title: 'Projects', text: 'Practical software, AI/ML and networking builds.', href: '#projects' },
  { title: 'Research', text: 'Adversarial robustness and Nepali speech recognition.', href: '#research' },
  { title: 'Experience', text: 'Technical teams, workshops, programs and volunteering.', href: '#experience' },
]
export const projects = [
  { name: 'IPL Win Probability Predictor', description: 'A machine-learning system that predicts the probability of winning an IPL match from current match conditions.', tech: ['Python','FastApi' ,'Scikit-learn', 'Pandas', 'NumPy'], github: '#', demo: '', image: '' },
   { name: 'T20I score Predictor', description: 'A machine-learning system that predicts the final score of the T20I match from current match conditions.', tech: ['Python', 'Scikit-learn','FastApi', 'Pandas', 'NumPy'], github: '#', demo: '', image: '' },
  // Add more: { name, description, tech: [], github, demo, image }
   { name: 'Routing Simulator', description: 'An interactive network routing simulator that uses Dijkstra’s Algorithm for adaptive shortest-path computation and fault-tolerant routing in dynamic network topologies.', tech: ['Python', 'FastApi', 'Javascript'], github: '#', demo: '', image: '' },
]
export const research = [
  { title: 'Untargeted Adversarial Attack on Nepali Automatic Speech Recognition using FGSM', description: 'A study investigating the robustness of Nepali ASR systems against untargeted adversarial perturbations generated with the Fast Gradient Sign Method.', status: 'Update status / date', method: ['Nepali ASR', 'FGSM', 'Adversarial ML', 'Python'], paper: '#' },
]
export const experience = [
  { role: 'Networking Team Member', org: 'FSU Technical Extended Team', date: '2026 – Present', description: 'Hands-on work with campus-network infrastructure, covering Linux administration, DNS and OSPF routing.', tags: ['Networking', 'Linux', 'DNS', 'OSPF'] },
]
export const achievements = [
  { type: 'Certification', title: 'Add certification', note: 'Issuer, year' },
  { type: 'Workshop', title: 'Add workshop', note: 'Organizer, year' },
  { type: 'Hackathon', title: 'Add hackathon', note: 'Result, year' },
  { type: 'Activity', title: 'Add extracurricular', note: 'Role, year' },
]
