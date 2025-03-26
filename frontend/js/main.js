const sidebar = document.getElementById("sidebar");

const sidebarItems = [
    { icon: "fa-brands fa-x-twitter",title: ""},
    { icon: "fa-solid fa-house", title: "Home" },
    { icon: "fa-solid fa-compass", title: "Explore" },
    { icon: "fa-solid fa-bell", title: "Notifications" },
    { icon: "fa-solid fa-envelope", title: "Messages" },
    { icon: "fa-solid fa-globe", title: "Grok" },
    { icon: "fa-solid fa-user", title: "Profile" },
    { icon: "fa-solid fa-circle-info", title: "More" },
];

sidebar.innerHTML = sidebarItems
    .map(
        (item) => `
        <div class="sidebar-item">
            <i class="${item.icon}"></i>
            <span>${item.title}</span> 
        </div>
        
    `
    )
    .join(""); 
