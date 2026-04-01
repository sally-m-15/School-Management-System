const sidebarLink = document.querySelector(".sidebar-link");

const sidebarItems = [
  { path: "/", name: "Dashboard" },
  { path: "#/student", name: "Student" },
  { path: "#/staff", name: "Staff" },
  { path: "#/academics", name: "Academics" },
  { path: "#/performance", name: "Performance" },
  { path: "#/collectFees", name: "Collect Fees" },
  { path: "#/announcement", name: "Announcement" },
  { path: "#/setup", name: "Setup" },
  { path: "#/changePassword", name: "Change password" },
];

sidebarLink.innerHTML = sidebarItems
  .map((item) => {
return `
    <li>
        <a class="nav-link" href="${item.path}">${item.name}</a>
    </li>
    `;
  })
  .join("");

const router = {
  "/": {
    html: `/pages/dashboard/dashboard.html`,
    js: `/scripts/dashboard/dashboard.js`,
    css: `/style/dashboard/dashboard.css`,
  },
  "/student": { html: `/pages/dashboard/student.html` },
  "/staff": { html: `/pages/dashboard/staff.html` },
  "/academics": { html: `/pages/dashboard/academics.html` },
  "/performance": { html: `/pages/dashboard/performance.html` },
  "/collectFees": { html: `/pages/dashboard/collectFees.html` },
  "/announcement": { html: `/pages/dashboard/announcement.html` },
  "/setup": { html: `/pages/dashboard/setup.html` },
  "/changePassword": { html: `/pages/dashboard/changePassword.html` },
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
    document.querySelector(".main-pages").innerHTML = html;

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
