// ===== Dropdown open/close animations =====
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const menuItems = dropdown.querySelectorAll('.dropdown-content li');
  const links = dropdown.querySelectorAll('.dropdown-content a');

  // Handle mouse enter
  dropdown.addEventListener('mouseenter', () => {
    menuItems.forEach((item, index) => {
      item.classList.remove('drop-out');
      item.style.animationDelay = `${index * 0.05}s`;
      item.classList.add('drop-in');
    });
    dropdown.classList.add('open');
  });

  // Handle mouse leave
  dropdown.addEventListener('mouseleave', () => {
    menuItems.forEach((item, index) => {
      item.classList.remove('drop-in');
      item.style.animationDelay = `${index * 0.05}s`;
      item.classList.add('drop-out');
    });
    setTimeout(() => dropdown.classList.remove('open'), 200);
  });

  // Handle clicks on links (scroll + glow, don't force-close dropdown)
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const yOffset = -80; // adjust for header height
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // Smooth scroll
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Glow highlight effect
        target.classList.add("highlight");
        setTimeout(() => target.classList.remove("highlight"), 1500);
      }
    });
  });
});

// ===== Smooth scroll for all in-page links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    // Use native smooth scrolling
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // Glow highlight
    target.classList.add("highlight");
    setTimeout(() => target.classList.remove("highlight"), 1500);
  });
});

// ===== Timeline =====
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const titleEl = document.getElementById("timeline-title");
  const subtitleEl = document.getElementById("timeline-subtitle");
  const textEl = document.getElementById("timeline-text");
  const imgEl = document.getElementById("timeline-image");

  timelineItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active class from all timeline items
      timelineItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const year = item.getAttribute("data-year");
      const data = timelineData[year];

      if (data) {
        // Update content dynamically
        titleEl.textContent = data.title;
        subtitleEl.textContent = data.subtitle || "";
        textEl.textContent = data.text;

        if (data.image) {
          imgEl.src = data.image;
          imgEl.style.display = "block";
        } else {
          imgEl.style.display = "none";
        }
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");
    const titleEl = document.getElementById("timeline-title");
    const subtitleEl = document.getElementById("timeline-subtitle");
    const textEl = document.getElementById("timeline-text");
    const imgEl = document.getElementById("timeline-image");

    const data = {
        "2012": {
            title: "2012 – First Goose-Funded Venture",
            image: "images/Timeline/2012.png",
            text: "Our feathered financiers shook wings on the deal of the century—boxes of sardines were the currency, and the first goose-run business took flight! Investors were skeptical, but the penguins waddled in with confidence. Every crate of sardines was accounted for, proving that cold-blooded logic can be fish-ionably effective. Who knew a penguin handshake could seal a deal better than a human one? This was the start of a new era where feathers meet finance."
        },
        "2013": {
            title: "2013 – First Office",
            image: "images/Timeline/2013.png",
            text: "Ice-cold ambition, zero desks, unlimited coffee—our penguins slid right into work. The office was a minimalist paradise: no chairs, no cubicles, just frozen floors and ice cubes for seating. Productivity soared despite the freezing temperatures, proving that penguins thrive under pressure (and frostbite). Innovation was in the air—or maybe that was just the cold! It was the perfect environment for chilling out while warming up to big ideas."
        },
        "2014": {
            title: "2014 – Global Market Success",
            image: "images/Timeline/2014.png",
            text: "Penguin power slid across the floor and straight into the global market. From waddling to Wall Street, these flocks proved that cold feet can make hot profits. Stock charts rose like flocks in flight, and every successful trade made feathers ruffle in excitement. The penguins’ secret? Timing, teamwork, and a touch of icy intuition. Success had never looked so slick or so slippery."
        },
        "2016": {
            title: "2016 – First Merger: Business Goose Global + Goosetech",
            image: "images/Timeline/2016.png",
            text: "When two flocks collide, feathers fly! The first successful merger had tongues wagging and wings clapping. Combining brains, wings, and tech-savvy beaks, these companies proved synergy isn’t just a buzzword—it’s a buzzard. Office parties featured more honking than human applause, and shareholders were over the moon (or the iceberg). This merger wasn’t just history; it was herstory in the making."
        },
        "2018": {
            title: "2018 – Breadcoin Launch",
            image: "images/Timeline/2018.png",
            text: "Our most bread-winning venture yet! Breadcoin took the world by storm, proving that even penguins can make dough in the digital age. Transactions were quick, safe, and deliciously profitable, with investors lining up like geese at feeding time. Memes went viral, and the brand spread faster than a flock on the ice. It wasn’t just a coin—it was a feathered fortune!"
        },
        "2021": {
            title: "2021 – Penguin MBA Graduation",
            image: "images/Timeline/2021.png",
            text: "From ice to ivory tower, our penguin scholars earned their MBAs with flying colors (and lots of feathers). Courses ranged from “Advanced Fishomics” to “Slide Management 101,” equipping penguins for high-level corporate strategy. Proud families honked in the stands as graduates waddled across the stage. Knowledge really does stick to your beak, and these scholars proved that education can be both rigorous and fun. This batch of MBAs is ready to take over boardrooms worldwide."
        },
        "2025": {
            title: "2025 – First Interspecies Branch",
            image: "images/Timeline/2025.png",
            text: "Breaking the ice on diversity! Business Goose Global welcomed new species into the flock, expanding beyond the traditional penguin workforce. Collaboration was key, and interspecies teams brought fresh ideas, creative solutions, and a lot of squawks (and some hisses). The first interspecies branch proved that inclusion isn’t just a policy—it’s a strategy for success. Innovation thrived, friendships formed, and the company became a beacon for collaborative ingenuity. Feathers, fur, and fins: together, they soared."
        }
    };

    items.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from all
            items.forEach(i => i.classList.remove("active"));

            // Set clicked active
            item.classList.add("active");

            // Fill content
            const year = item.getAttribute("data-year");
            const info = data[year];

            titleEl.textContent = info.title;
            subtitleEl.textContent = info.subtitle;
            textEl.textContent = info.text;

            if (info.image) {
                imgEl.src = info.image;
                imgEl.style.display = "block";
            } else {
                imgEl.style.display = "none";
            }

            // Show content
            document.querySelector(".timeline-content").classList.add("active");
        });
    });
});
// ===== End Timeline ===== //

/// === Media Grid Auto-Scroll (Smooth) ===
const carousel = document.querySelector("#MediaGrid .carousel");
const track = document.querySelector("#MediaGrid .carousel-track");

// Clone the track once for seamless looping
track.innerHTML += track.innerHTML;

let isUserScrolling = false;
let lastScroll;

// === CONFIG ===
const pixelsPerSecond = 500;  // 🚀 adjust to taste (try 200–600)
const baseFps = 600;           // change to 48 if you prefer
// =================

let lastTime = performance.now();

function autoScroll(now) {
  if (!isUserScrolling) {
    const delta = (now - lastTime) / 500; // seconds since last frame

    // compute how much to move this frame
    // scale so that it "feels" like 24fps but moves smoothly
    const step = pixelsPerSecond * delta * (baseFps / 80);

    carousel.scrollLeft += step;

    // seamless loop
    if (carousel.scrollLeft >= track.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    }
  }
  lastTime = now;
  requestAnimationFrame(autoScroll);
}
autoScroll(lastTime);

// Pause when user scrolls manually
carousel.addEventListener("scroll", () => {
  isUserScrolling = true;
  clearTimeout(lastScroll);
  lastScroll = setTimeout(() => {
    isUserScrolling = false;
  }, 1400);
});

