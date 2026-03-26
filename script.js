// TYPING EFFECT
const roles=["Full Stack Developer","Python Developer","Django Developer"];
let i=0,j=0,text="",del=false;

function type(){
  let el=document.querySelector(".typing");
  if(!el) return;

  if(!del){
    text=roles[i].substring(0,j++);
  }else{
    text=roles[i].substring(0,j--);
  }

  el.innerHTML=text;

  if(j==roles[i].length){del=true;setTimeout(type,1000);return;}
  if(j==0){del=false;i=(i+1)%roles.length;}

  setTimeout(type,100);
}
type();

// DARK MODE
const toggle = document.getElementById("theme-toggle");
if(toggle){
  toggle.onclick = () => {
    document.body.classList.toggle("light");
  };
}

// MOBILE MENU
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if(menu){
  menu.onclick = ()=>{
    nav.classList.toggle("active");
  };
}

// SCROLL EFFECT + ACTIVE NAV
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const navIcons = document.querySelectorAll(".bottom-nav a");

window.addEventListener("scroll", ()=>{
  let current = "";
  sections.forEach(sec=>{
    const top = sec.offsetTop;
    if(scrollY >= top - 200){
      current = sec.getAttribute("id");
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });

  navLinks.forEach(a=>{
    a.classList.remove("active");
    if(a.getAttribute("href") === "#" + current){
      a.classList.add("active");
    }
  });

  navIcons.forEach(a=>{
    a.classList.remove("active");
    if(a.getAttribute("href") === "#" + current){
      a.classList.add("active");
    }
  });
});

// CUSTOM CURSOR
if(window.innerWidth > 768){
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e=>{
    cursor.style.top = e.clientY+"px";
    cursor.style.left = e.clientX+"px";
  });
}

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  }
});

// CHATBOT
const input = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

input.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    let userText = input.value;
    addMessage("You: " + userText);
    input.value="";
    let reply = getReply(userText);
    setTimeout(()=> addMessage("Bot: " + reply),500);
  }
});

function addMessage(msg){
  let div=document.createElement("div");
  div.innerText=msg;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getReply(text){
  text = text.toLowerCase();

  // GREETING
  if(text.includes("hello") || text.includes("hi"))
    return "Hello 👋 I'm Dinesh's assistant. Ask me anything about him!";

  // ABOUT
  if(text.includes("about"))
    return "Dinesh is a Full Stack Developer skilled in Python, Django, and modern web technologies.";

  // SKILLS
  if(text.includes("skill"))
    return "Skills: HTML, CSS, JavaScript, Python, Django, MySQL, MongoDB.";

  // PROJECTS
  if(text.includes("project"))
    return "Projects include Fake News Detection, E-Commerce System, Train DB, and Portfolio.";

  // EXPERIENCE
  if(text.includes("experience"))
    return "Dinesh has hands-on experience building real-world full stack and ML projects.";

  // STRENGTH
  if(text.includes("strength"))
    return "Strengths: Problem-solving, quick learning, clean coding, and teamwork.";

  // WEAKNESS
  if(text.includes("weakness"))
    return "He focuses deeply on details, but is improving speed with practice.";

  // HIRE
  if(text.includes("hire") || text.includes("why should we hire you"))
    return "Dinesh is a fast learner, strong in full stack development, and ready to contribute immediately.";

  // AVAILABILITY
  if(text.includes("available"))
    return "Yes, Dinesh is available for immediate joining.";

  // CONTACT
  if(text.includes("contact"))
    return "You can contact via LinkedIn or Email provided in the contact section.";

  // LOCATION
  if(text.includes("location"))
    return "He is based in Tamil Nadu, India.";

  // RESUME
  if(text.includes("resume"))
    return "Resume is available at the top of the page.";

  return "🤔 I didn’t understand. Try asking about skills, projects, or hiring.";
}
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll("section").forEach(sec=>{
  observer.observe(sec);
});
document.querySelectorAll(".project-card").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height/2)/10;
    const rotateY = (x - rect.width/2)/10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", ()=>{
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
window.addEventListener("scroll", ()=>{
  document.querySelectorAll("section").forEach(sec=>{
    let speed = sec.getAttribute("data-speed") || 1;
    sec.style.transform = `translateY(${window.scrollY * 0.05 * speed}px)`;
  });
});
window.onload = ()=>{
  document.getElementById("loader").style.display="none";
};
window.onload = ()=>{
  document.getElementById("loader").style.display="none";
};
function ask(q){
  addMessage("You: " + q);
  let reply = getReply(q);
  setTimeout(()=> addMessage("Bot: " + reply),500);
}