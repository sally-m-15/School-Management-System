const sidebarLink = document.querySelector(".sidebar-link");

const sidebarItems = [
  { path: '#/', name: 'Dashboard', pathIcon: '../../img/sidebaricon/dashbord.svg' },
  { path: '#/student', name: 'Student', pathIcon: '../../img/sidebaricon/students-couple-svgrepo-com.svg' },
  { path: '#/staff', name: 'Staff', pathIcon: '../../img/sidebaricon/staff-svgrepo-com.svg' },
  { path: '#/academics', name: 'Academics', pathIcon: '../../img/sidebaricon/academy-2.svg' },
  {
    path: '#/performance',
    name: 'Performance',
    pathIcon: '../../img/sidebaricon/performance-increase-svgrepo-com.svg',
  },
  {
    path: '#/collectFees',
    name: 'Collect Fees',
    pathIcon: '../../img/sidebaricon/payment.svg',
  },
  { path: '#/announcement', name: 'Announcement', pathIcon: '../../img/sidebaricon/Announcement.svg' },
  { path: '#/setup', name: 'Setup', pathIcon: '../../img/sidebaricon/setup.svg' },
  { path: '#/changePassword', name: 'Change password', pathIcon: '../../img/sidebaricon/change-password-2.svg' },
];


if (sidebarLink) {
  sidebarLink.innerHTML = sidebarItems
    .map((item) => {
      return `
      <li>
          <a class="nav-link" href="${item.path}">
          <img class="iconSidebar" src=${item.pathIcon} alt=${item.name}/>
        <span>${item.name}</span>
          </a>
      </li>
      `;
    })
    .join("");
}

const router = {
  "/": {
    html: `../../pages/dashboard/dashboard.html`,
    js: `../../scripts/dashboard/dashboard.js`,
    css: `../../style/dashboard/dashboard.css`,
  },
  "/student": { html: `../../pages/dashboard/student.html` },
  "/staff": { html: `../../pages/dashboard/staff.html` },
  "/academics": { html: `../../pages/dashboard/academics.html` },
  "/performance": { html: `../../pages/dashboard/performance.html` },
  "/collectFees": { html: `../../pages/dashboard/collectFees.html` },
  "/announcement": { html: `../../pages/dashboard/announcement.html` },
  "/setup": { html: `../../pages/dashboard/setup.html` },
  "/changePassword": { html: `../../pages/dashboard/changePassword.html` },
};


const handleLocation = async () => {
const path = window.location.hash.replace("#", "") || "/";
  const route = router[path] || router["/"];
 const pageTitle =
  sidebarItems.find((item) => item.path.replace("#", "") === path)?.name ||
  "Dashboard";
  const displaySpan = document.getElementById("page-title-display");

  if (displaySpan) {
    displaySpan.innerText = pageTitle ? pageTitle : "Dashboard";
  }

document.querySelectorAll(".nav-link").forEach((link) => {
  const linkPath = link.getAttribute("href").replace("#", "");
  link.classList.toggle("active", linkPath === path);
});

  try {
    let dynamicStyle = document.getElementById("dynamic-style");
    const res = await fetch(route.html);
    const html = await res.text();
const container = document.querySelector(".main-pages");
container.innerHTML = html;
await new Promise((resolve) => setTimeout(resolve, 0));

    if (route.js) {
      const module = await import(`${route.js}?=${Date.now()}`);
      if (module.init) module.init();
    }
    if (!dynamicStyle) {
      dynamicStyle = document.createElement("link");
      dynamicStyle.id = "dynamic-style";
      dynamicStyle.rel = "stylesheet";
      document.head.appendChild(dynamicStyle);
    }

    if (route.css) {
      dynamicStyle.href = route.css;
    }
  } catch {
    console.log("error");
  }
};

window.addEventListener("hashchange", handleLocation);
handleLocation();
