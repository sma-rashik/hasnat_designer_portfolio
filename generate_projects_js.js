const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'assets', 'optimized');
const destDir = path.join(__dirname, 'assets', 'js');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Function to map filenames to custom metadata
function getMetadataForFile(fileName) {
  const name = path.basename(fileName, '.webp');
  
  // Custom mapping based on filename patterns
  if (name === 'Alarming Poster') {
    return {
      title: "Climate Change awareness Poster",
      category: "Poster Design",
      description: "A dramatic visual poster designed to raise awareness about global warming and environmental crises."
    };
  }
  if (name === 'Appreciation Ceremony Banner') {
    return {
      title: "Appreciation Ceremony Banner",
      category: "Event Promotion",
      description: "Grand event banner design for the PCIU Volunteers appreciation and recognition ceremony."
    };
  }
  if (name === 'Bangla New Year') {
    return {
      title: "Bangla New Year Celebration",
      category: "Social Media",
      description: "Festive social media post celebrating Pohela Boishakh (Bangla New Year) with traditional motifs."
    };
  }
  if (name === 'Champions poster') {
    return {
      title: "Champions Tournament Poster",
      category: "Event Promotion",
      description: "High-energy sports tournament promotional poster celebrating championship victory."
    };
  }
  if (name === 'Citation') {
    return {
      title: "Appreciation Citation Certificate",
      category: "Branding",
      description: "Elegant citation and certificate layout designed for guest speakers, volunteers, and achievements."
    };
  }
  if (name === 'Coming Soon') {
    return {
      title: "Coming Soon Teaser Card",
      category: "Social Media",
      description: "Teaser graphic for an upcoming event, designed to generate curiosity and engagement."
    };
  }
  if (name === 'Coming soon_') {
    return {
      title: "Coming Soon Announcement Poster",
      category: "Event Promotion",
      description: "Creative coming soon promotional graphic with high-contrast typography and neon elements."
    };
  }
  if (name === 'Coordinator Highlight') {
    return {
      title: "PCIU Volunteers Coordinator Highlight",
      category: "Social Media",
      description: "Profile showcase template designed for executive board members and volunteer coordinators."
    };
  }
  if (name === 'Countdown ') {
    return {
      title: "Launch Countdown Card",
      category: "Social Media",
      description: "Promotional countdown post featuring custom typography and dynamic layouts."
    };
  }
  if (name === 'Countdown') {
    return {
      title: "Event Countdown Graphic",
      category: "Social Media",
      description: "Social media visual for event timelines, utilizing high-contrast blue and neon overlays."
    };
  }
  if (name === 'Donation poster') {
    return {
      title: "Charity Donation Campaign Poster",
      category: "Poster Design",
      description: "A clean, emotionally resonant poster advocating for voluntary contributions and community aid."
    };
  }
  if (name === 'Earth Day') {
    return {
      title: "Earth Day Campaign Poster",
      category: "Poster Design",
      description: "Eco-friendly visual campaign utilizing organic design elements and messaging for global Earth Day."
    };
  }
  if (name === 'Eid Poster') {
    return {
      title: "Eid Mubarak Greetings Creative",
      category: "Social Media",
      description: "Elegant Eid greeting design combining traditional Islamic art elements with modern gradients."
    };
  }
  if (name === 'Eid-Al-Adha') {
    return {
      title: "Eid-Al-Adha Celebration Post",
      category: "Social Media",
      description: "Premium greeting poster celebrating Eid-Al-Adha with a clean aesthetic and minimal typography."
    };
  }
  if (name === 'Event poster ') {
    return {
      title: "Webinar Networking Poster",
      category: "Event Promotion",
      description: "Professional poster designed to advertise university webinars and networking sessions."
    };
  }
  if (name === 'Event Poster') {
    return {
      title: "Special Campus Event Promotion",
      category: "Event Promotion",
      description: "High-impact poster layout optimized for print and digital distribution for campus events."
    };
  }
  if (name === "Father's Day") {
    return {
      title: "Father's Day Special Campaign",
      category: "Social Media",
      description: "A heartwarming social media poster honoring fathers, featuring custom illustrations."
    };
  }
  if (name === 'Guest Highlight') {
    return {
      title: "Guest Speaker Spotlight Card",
      category: "Social Media",
      description: "Speaker highlight graphic for the PCIU Placement Cell, focusing on professional clarity."
    };
  }
  if (name === 'Independence day') {
    return {
      title: "Independence Day Memorial Banner",
      category: "Poster Design",
      description: "Patriotic visual design commemorating Bangladesh Independence Day, featuring historical monuments."
    };
  }
  if (name === 'International Labour Day') {
    return {
      title: "International Labour Day Tribute",
      category: "Poster Design",
      description: "Powerful graphic honoring workers worldwide on May 1st, featuring bold typography."
    };
  }
  if (name === 'Justice') {
    return {
      title: "Human Rights & Justice Campaign",
      category: "Poster Design",
      description: "Thought-provoking conceptual poster design representing justice, human rights, and equality."
    };
  }
  if (name === 'Labour Day') {
    return {
      title: "Labour Day Dedication Card",
      category: "Social Media",
      description: "Social media visual celebrating the spirit of the labor force with industrial illustrations."
    };
  }
  if (name === 'Language day') {
    return {
      title: "International Mother Language Day Tribute",
      category: "Poster Design",
      description: "Typography-focused poster commemorating the Language Martyrs of February 21st."
    };
  }
  if (name === 'Laylatul-Qadr') {
    return {
      title: "Laylatul-Qadr Devotional Card",
      category: "Social Media",
      description: "Solemn and spiritual greeting graphic celebrating the Holy Night of Qadr."
    };
  }
  if (name === 'Marhaban ya Ramaahan_') {
    return {
      title: "Marhaban Ya Ramadan Welcomer",
      category: "Social Media",
      description: "Beautiful welcoming post for the holy month of Ramadan, featuring soft crescent lighting."
    };
  }
  if (name === 'Martyred Intellectuals Day') {
    return {
      title: "Martyred Intellectuals Memorial Poster",
      category: "Poster Design",
      description: "A solemn memorial graphic commemorating the martyred intellectuals of Bangladesh."
    };
  }
  if (name === 'May Day') {
    return {
      title: "May Day Celebration Graphic",
      category: "Poster Design",
      description: "Bold, red-themed graphic celebrating workers' rights and historical May Day movements."
    };
  }
  if (name.startsWith('May this Ramadan bring harmony')) {
    return {
      title: "Ramadan Blessings & Harmony Post",
      category: "Social Media",
      description: "Modern social media card focusing on peace, harmony, and spiritual reflections."
    };
  }
  if (name.startsWith('Meters band')) {
    return {
      title: "Meters Band Album Cover",
      category: "Branding",
      description: "Creative and edgy visual design representing band identity and musical energy."
    };
  }
  if (name === 'Mother language day') {
    return {
      title: "Mother Language Day Commemoration",
      category: "Poster Design",
      description: "Artistic tribute to the Bangla language movement with Shaheed Minar artwork."
    };
  }
  if (name === 'Movie Sequel poster') {
    return {
      title: "Cinematic Movie Fan Poster",
      category: "Poster Design",
      description: "Cinematic, high-contrast poster showcasing advanced image manipulation and compositing skills."
    };
  }
  if (name === 'Movie ticket Poster') {
    return {
      title: "Movie Ticket Promotional Design",
      category: "Marketing Graphics",
      description: "Clever marketing graphic presenting an event invite disguised as a movie ticket."
    };
  }
  if (name === 'mourning_poster') {
    return {
      title: "National Mourning Day Poster",
      category: "Poster Design",
      description: "Solemn memorial design in honor of the national leaders, utilizing a minimalist dark layout."
    };
  }
  if (name.startsWith('P-V recruitment poster')) {
    return {
      title: "Volunteer Recruitment Drive Flyer",
      category: "Event Promotion",
      description: "Engaging and modern recruitment banner designed to attract new volunteers to PCIU."
    };
  }
  if (name === 'Presentation Boot-camp') {
    return {
      title: "Presentation Bootcamp Banner",
      category: "Event Promotion",
      description: "Promotional flyer for a professional presentation masterclass at the university."
    };
  }
  if (name === 'Ramadan Mubarak') {
    return {
      title: "Ramadan Mubarak Greetings Card",
      category: "Social Media",
      description: "Stunning greeting graphic with intricate geometric patterns and warm glowing lanterns."
    };
  }
  if (name === 'Registration Close') {
    return {
      title: "Registration Closing Announcement",
      category: "Marketing Graphics",
      description: "Urgent call-to-action graphic reminding participants that event registrations are closing soon."
    };
  }
  if (name === 'Registration poster') {
    return {
      title: "Event Registration Poster",
      category: "Event Promotion",
      description: "Clean, structured informational poster detailing registration steps and ticket links."
    };
  }
  if (name === 'Reminder poster') {
    return {
      title: "Important Deadline Reminder Card",
      category: "Social Media",
      description: "High-contrast reminder card featuring bold typography and clean background alignment."
    };
  }
  if (name === 'Shab-e-Qadr') {
    return {
      title: "Shab-e-Qadr Devotional Post",
      category: "Social Media",
      description: "Atmospheric, spiritual social media visual representing prayer and blessings."
    };
  }
  if (name.startsWith('Sharing Happiness 6.0')) {
    return {
      title: "Sharing Happiness 6.0 Campaign Branding",
      category: "Event Promotion",
      description: "Comprehensive campaign branding for the flagship community service event by PCIU Volunteers."
    };
  }
  if (name === 'Sponsor Highlight') {
    return {
      title: "Sponsor Recognition Post Grid",
      category: "Marketing Graphics",
      description: "Grid layout designed to give visibility and appreciation to event sponsors and partners."
    };
  }
  if (name === 'Stand Poster') {
    return {
      title: "Event Standee Design Layout",
      category: "Branding",
      description: "Vertical roll-up banner design optimized for exhibition stands and physical event venues."
    };
  }
  if (name === 'Victory day') {
    return {
      title: "Victory Day Celebrations Banner",
      category: "Poster Design",
      description: "Dynamic red and green banner design celebrating Bangladesh Victory Day on December 16th."
    };
  }
  if (name === 'Winner poster') {
    return {
      title: "Contest Winner Announcement Card",
      category: "Event Promotion",
      description: "Gold-accented winner reveal card designed to celebrate contest achievements."
    };
  }
  if (name === 'Winners poster') {
    return {
      title: "Event Winners Showcase Poster",
      category: "Event Promotion",
      description: "Congratulatory poster showcasing all awardees and winners of the design championship."
    };
  }
  if (name === "Women's day") {
    return {
      title: "International Women's Day Tribute",
      category: "Poster Design",
      description: "A vibrant, empowering poster celebrating female leadership, strength, and equality."
    };
  }

  // Fallback / default mapping
  return {
    title: name.replace(/_/g, ' '),
    category: "Marketing Graphics",
    description: `Creative design work representing ${name.toLowerCase().replace(/_/g, ' ')}.`
  };
}

function main() {
  const files = fs.readdirSync(srcDir);
  const projects = [];
  
  for (const file of files) {
    if (file === 'hasnat_sabbir.webp' || !file.endsWith('.webp')) {
      continue;
    }
    
    const meta = getMetadataForFile(file);
    projects.push({
      title: meta.title,
      category: meta.category,
      image: `assets/optimized/${file}`,
      description: meta.description
    });
  }
  
  // Sort projects alphabetically by title
  projects.sort((a, b) => a.title.localeCompare(b.title));
  
  const jsContent = `// Hasnat Sabbir Portfolio Project Database
// Generated dynamically from optimized assets

const projectsData = ${JSON.stringify(projects, null, 2)};

// Make it available globally or export if needed
if (typeof window !== 'undefined') {
  window.projectsData = projectsData;
}
`;
  
  const destPath = path.join(destDir, 'projects.js');
  fs.writeFileSync(destPath, jsContent);
  console.log(`Generated projects.js with ${projects.length} projects at: ${destPath}`);
}

main();
