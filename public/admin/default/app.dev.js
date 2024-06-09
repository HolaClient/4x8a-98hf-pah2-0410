<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const routes = [
  { "name": "back to home", "href": true, "show": true, "url": "/dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>` },
  { "name": "home", "href": false, "show": true, "url": "admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>` },
  { "name": "users", "href": false, "show": true, "url": "admin/users", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>` },
//  { "name": "tickets", "href": false, "show": true, "url": "admin/tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
  { "name": "billing", "href": false, "show": true, "url": "admin/billing", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>` },
  { "name": "products", "href": false, "show": true, "url": "admin/products", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>` },
//  { "name": "permissions", "href": true, "show": true, "url": "/admin/permissions", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
//  { "name": "emails", "href": false, "show": true, "url": "admin/emails", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>` },
//  { "name": "posts", "href": false, "show": true, "url": "admin/posts", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" /></svg>` },
//  { "name": "security", "href": false, "show": true, "url": "admin/security", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` },
//  { "name": "logs", "href": false, "show": true, "url": "admin/logs", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>` },
  { "name": "settings", "href": true, "show": true, "url": "/admin/settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` },
  { "name": "pterodactyl", "href": true, "show": true, "url": "/admin/pterodactyl", "svg": `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-8 -pl-1" viewBox="0 0 1200 1200"><defs><style>.prefix__cls-1{fill:#904a04}.prefix__cls-2{fill:#b26734}.prefix__cls-3{fill:#6d3c0f}.prefix__cls-4{fill:#bd6e35}.prefix__cls-5{fill:#a56032}.prefix__cls-6{fill:#3a3a3a}.prefix__cls-8{fill:#515151}.prefix__cls-9{fill:#303030}.prefix__cls-10{fill:#aaa}.prefix__cls-11{fill:#a4571f}.prefix__cls-12{fill:#824009}.prefix__cls-13{fill:#3f3f3f}.prefix__cls-16{fill:#fff}.prefix__cls-17{fill:#91562d}.prefix__cls-18{fill:#232323}.prefix__cls-19{fill:#161616}.prefix__cls-20{fill:#7c441e}.prefix__cls-22{fill:#ffc33e}</style></defs><g id="prefix__Layer_1" data-name="Layer 1"><path class="prefix__cls-1" d="M921.82 627.73s-2 9.07-2 10.58-52.4-4.53-52.4-4.53l2-16.63z"/><path class="prefix__cls-1" d="M912.81 623.68s-133.07-39.78-190.5-29.2-20.22 41.57-20.22 41.57zM385.21 629.24s2 9.07 2 10.58 52.39-4.53 52.39-4.53l-2-16.63z"/><path class="prefix__cls-1" d="M394.22 625.2s133.07-39.79 190.5-29.2 20.22 41.57 20.22 41.57z"/><ellipse class="prefix__cls-2" cx="661.81" cy="721.44" rx="243.34" ry="123.94"/><path class="prefix__cls-2" d="M589.26 603.55l-134.52 21.16L368 638l-23.38 24v42.51l4.43 52.9 73.33 26.45 57.09 3.78c-16.73-170.12 109.79-184.09 109.79-184.09z"/><path class="prefix__cls-3" d="M522.41 738.07s-27.2-42.32-98.24-19.65 39.3 42.32 39.3 42.32zM318.71 1082.18s47-52.34 153.74-60.78c41.82-3.3 32 94.78 32 94.78l71.24-63.61L715 1063.91l56.45 41.57s36.09-89.36 104.91-87.51 110.37 56.44 110.37 56.44l-87.43-276H393.23z"/><path class="prefix__cls-2" d="M780.61 864.53c-28.25 116.39-35.37 236-124.87 236-89.31 0-95.6-107.1-120.18-226.8-22.46-109.4 48.38-182.41 120.18-182.41a131.4 131.4 0 0165.58 18.13c45.25 26.39 77.39 80.55 59.29 155.08z"/><path class="prefix__cls-4" d="M744.93 895.92c0 84.15-58.69 177.73-102.78 158.55-46.3-20.16-70.81-80-80-167.2-8.77-83.21 44.22-144.88 90.28-144.88s92.5 69.37 92.5 153.53z"/><path class="prefix__cls-2" d="M717.77 602l134.52 21.2L939 636.44l23.38 24v42.51L958 755.82l-73.33 26.45-57.09 3.78C844.29 616 717.77 602 717.77 602z"/><path class="prefix__cls-5" d="M563.56 608.08l52.5 113.36L669 777l43-60 49.56-108.92-72-12.09-70.1 5.19-55.9 6.9z"/><path class="prefix__cls-6" d="M773.17 783.34s13.81 71.11-13.4 80.18-52.9-58.95-52.9-58.95h-57.43l-1.52-36.27 93.71-18.14z"/><path class="prefix__cls-6" d="M541.09 783.34s-13.8 71.11 13.4 80.18 52.9-58.95 52.9-58.95h57.44l1.51-36.27-93.71-18.14z"/><path fill="#444" d="M568.1 797.01l13.6-9.06 6.05-7.56H726.8l4.53 7.56 12.09 6.04-9.07-42.32-92.19-6.04-61.97 6.04-12.09 45.34z"/><path class="prefix__cls-8" d="M772.48 760.11s7.55 32.49-15.12 39.26-30.26-40.1-30.26-40.1l16.66-4.58zM540.89 760.11s-7.56 32.49 15.11 39.26 30.26-40.1 30.26-40.1l-16.66-4.58z"/><path class="prefix__cls-9" d="M686.19 732.02h61.77l25.69 28.72-27.2 1.51-33.26-4.53-25.69 3.02-1.31-28.72zM628.55 732.02h-61.77l-25.69 28.72 27.21 1.51 33.25-4.53 25.69 3.02 1.31-28.72z"/><path class="prefix__cls-8" d="M687.5 760.74h-61.97l-13.6-28.72h92.2l-16.63 28.72z"/><circle class="prefix__cls-10" cx="685.99" cy="742.6" r="4.53"/><rect class="prefix__cls-10" x="649.71" y="751.67" width="15.11" height="3.02" rx="1"/><path class="prefix__cls-6" d="M559.56 793.1a79.75 79.75 0 009-27.76c.12-1-1.39-1-1.51 0a77.43 77.43 0 01-8.75 27c-.46.85.84 1.62 1.31.76zM754.31 792.34a77.41 77.41 0 01-8.74-27c-.13-1-1.64-1-1.51 0a79.33 79.33 0 009 27.76c.46.86 1.76.1 1.3-.76z"/><path class="prefix__cls-11" d="M602.82 745.76c-132.25 128.47-160.43 380.45-160.43 380.45s-25.51-114.06-51-118.31c-34-5.67-71.95 69.74-71.95 69.74s34.32-140.44 22-189.87c-11.57-46.59-74.6-117.53-36.82-204.43 0 0 33.58-55 118.44-63 0 0-261.1 79.46 172.81 121.66h14.48z"/><path class="prefix__cls-1" d="M567.57 761.87c-105.22 102.21-126.14 312.31-126.14 312.31s-23.94-90.75-44.23-94.13c-27.05-4.51-59.07 54.76-59.07 54.76s36.2-113.48 19.36-150.34C308.38 777 305.36 747.88 309.93 719.6c0 0 .08-51.55 49.69-73.86 0 0-142.7 76.88 202.53 110.46h11.39z"/><path class="prefix__cls-3" d="M793.68 736.56s27.21-42.32 98.25-19.65-39.3 42.32-39.3 42.32z"/><path class="prefix__cls-11" d="M704.21 744.24c132.25 128.48 160.43 380.46 160.43 380.46s25.51-114.07 51-118.32c34-5.66 72 69.75 72 69.75s-34.32-140.44-22-189.87c11.57-46.59 74.6-117.53 36.82-204.44 0 0-33.58-55-118.44-63 0 0 261.1 79.46-172.81 121.66h-14.56z"/><path class="prefix__cls-1" d="M739.46 760.36c105.22 102.21 126.14 312.31 126.14 312.31s23.93-90.75 44.22-94.14c27.06-4.51 59.08 54.77 59.08 54.77S932.69 919.82 949.53 883c49.12-107.52 52.14-136.59 47.57-164.87 0 0-.08-51.55-49.69-73.86 0 0 142.7 76.88-202.54 110.45h-11.38z"/><path class="prefix__cls-5" d="M487 619s21.91 42 107 42c4 0-8.89-6.4-8.89-6.4s-54.91 3.14-89.39-36.34C492 614 487 619 487 619z"/><path class="prefix__cls-11" d="M382.68 719.43v38.84l18.86-33.14-18.86-5.7zM370.89 711.17v28.08l13.64-23.97-13.64-4.11zM924.35 717.92v38.84l-18.86-33.14 18.86-5.7zM936.13 709.65v28.09l-13.63-23.97 13.63-4.12z"/><path class="prefix__cls-12" d="M566.97 594.28l-3.74 13.36 32.07.44 1.51-12.09-29.84-1.71zM762.51 593.34l-1.1 14.99-27.4-5.3 1.86-11.57 26.64 1.88z"/><path class="prefix__cls-2" d="M613.09 1109c-12.68 37.21-21.62 63.4-41.79 63.4s-41.1-36.76-41.1-76.07 18.34-89.89 38.52-89.89 58.54 60.97 44.37 102.56z"/><path class="prefix__cls-2" d="M592.69 1188.11l-41.97-3.82 10.92-31.66 27.57-1.12 3.48 36.6z"/><path class="prefix__cls-11" d="M551.92 1180.8l40.58 5.38 18.41 45.82c-45.11-49.36-90.21-7.08-90.21-7.08z"/><path class="prefix__cls-11" d="M554.24 1201.83s-13.69 20.19-9 30.17l15.11-15.08 17.82-15.09z"/><path class="prefix__cls-2" d="M698.85 1101.89c11.18 37.68 15.83 65.09 36 65.09s41.1-36.76 41.1-76.07S757.6 1001 737.43 1001s-50.86 59.49-38.58 100.89z"/><path class="prefix__cls-2" d="M713.46 1182.72l41.96-3.82-10.92-31.66-27.56-1.12-3.48 36.6z"/><path class="prefix__cls-11" d="M754.22 1175.41l-40.58 5.38-18.4 45.82c45.1-49.36 90.21-7.09 90.21-7.09z"/><path class="prefix__cls-11" d="M748.5 1197.17s13.7 20.19 9 30.17l-15.12-15.09-17.82-15.08z"/><rect class="prefix__cls-13" x="569.61" y="657.45" width="43.83" height="19.65" rx="6.17"/><path class="prefix__cls-9" d="M800.74 296.09s0-10.5-21.38-13.65c-8.72-1.29-59.12-.7-59.12-.7l-15.68-34.6s69.52.8 91.42 11.49S813 286 811 303.1M485.42 316.6s-1.39-10.41 19.43-16.31c8.48-2.4 58.53-8.35 58.53-8.35L583.82 255s-78.21 10.41-98.54 23.84-13.3 29.32-9.12 46"/><path class="prefix__cls-2" d="M560.77 567.57c-1.3 4 4.4 10.16 6.51 12.81 16.61 20.85 29.62 44.28 44.26 66.55 6.38 9.71 46.93 69.27 59.36 56.05 21.16-22.5 36.75-50.25 52-77 16-28.08 30.2-57.4 39.11-88.55a8.31 8.31 0 00.46-3.23c-1-8.41-37.28-9.1-44.15-10.15l-20.82-3.2c-1.88-.29-6.68-2-8.53-1.31l-97.35 36.15-19.31 7.17c-2.64 1-9.83 1.41-11.26 4.11a3.76 3.76 0 00-.28.6z"/><path class="prefix__cls-11" d="M574.86 574.98l57.51 90.54 14.12 12.45 17.74 15.5 17.6-17.8 50.32-79.01 26.22-62.58-73.1-10.1-110.41 51z"/><path fill="#cb63d3" d="M721.26 601.57l-122.42-6.04 31.74 64.99 12.09 12.09 16.62 13.6 10.58-9.07 7.56-7.55 7.56-10.58"/><path fill="#b25f8c" d="M633.6 643.38l10.58 18.14 13.6 13.6 51.21-45.34-58.76-6.05-16.63 19.65z"/><path class="prefix__cls-4" d="M671.69 49.44c-4.64.63-9.72 6.23-12 9-32.3 39.35-51.93 87.41-68.9 135.4-9.21 26.1-17.79 52.46-27.79 78.33-9.7 25.24-23.21 49-31.84 74.42-9.77 28.78-13.29 59.55-11.61 89.86 2.42 43.68 8.59 97.89 40.23 131.13 48.62 51.07 83.3 87.35 83.3 87.35l20.67 16.32 21.13-19s56.42-50.09 62.55-72.25 6.44-20.54 11.63-32.24 13.62-12.48 20-45.08c15.41-78.47-12.25-158.34-39.58-231.26-15.46-41.27-31.89-82.35-42.36-125.16-4.51-18.47-7.89-37.18-11.68-55.81-1.9-9.3-3.88-18.59-6.15-27.81-.8-3.23-1.12-11.16-4.6-12.78a5.4 5.4 0 00-3-.42z"/><path class="prefix__cls-2" d="M675.74 50.6c3.58 4.67-1.86 8.25-1.34 13.89q.95 10.23 2.16 20.44 2.52 21.06 6.18 41.95a772.75 772.75 0 0018.84 81.32c21.39 73.88 54.09 146.09 56 223 2 78.41-28.81 154.7-71.79 220.32 46-39.47 79.71-83.64 94.25-152.73 8.09-38.38 4.23-79.54-4.21-117.82-4.13-18.72-13.35-35.66-18.29-53.9-5.41-20-11.93-39.73-18.83-59.28-13.81-39.14-29.25-77.74-40.84-117.63-7.7-26.5-10.21-54.2-16.93-81-.45-1.76-2.47-22.71-9.26-19.26"/><path class="prefix__cls-16" d="M594.1 472.41c.74 11.43-7.13 21.25-17.59 21.93s-19.53-8-20.28-19.47 7.66-13.14 18.12-13.82 19-.05 19.75 11.36zM760 462.52c.78 11.94-7.88 22.21-19.33 23s-21.37-8.33-22.14-20.26 8.4-14.1 19.86-14.84 20.82.17 21.61 12.1z"/><ellipse class="prefix__cls-17" cx="622.99" cy="559.47" rx="5.17" ry="10.14" transform="rotate(-18.07 623.187 559.602)"/><ellipse class="prefix__cls-17" cx="695.17" cy="559.47" rx="10.14" ry="5.17" transform="rotate(-71.93 695.1 559.469)"/><circle class="prefix__cls-18" cx="580.95" cy="482.63" r="7.67"/><circle class="prefix__cls-18" cx="735.18" cy="472.41" r="7.75"/><rect class="prefix__cls-13" x="775.83" y="376.94" width="27.21" height="120.91" rx="3.69" transform="rotate(-3.72 789.88 437.638)"/><path class="prefix__cls-19" transform="rotate(-3.72 812.459 435.289)" d="M807.48 381.52h9.07v107.31h-9.07z"/><rect class="prefix__cls-19" x="816.62" y="388.28" width="15.11" height="95.22" rx="3" transform="rotate(-3.72 824.607 436.146)"/><path class="prefix__cls-9" d="M797.4 500.49l-.69-21.16 5.44-9.44-5.39-82.95-9-10.02-.94-2.97 11.97-2.29 7.84 4.03 7.65 117.65-7.15 6.52-9.73.63zM807.93 369.55l4.38 11.83 7.17 110.1-4.81 7.89 13.38-3.9-7.85-120.66-12.27-5.26zM800.93 295.99l10.31 4.34 5.32 66.73-9.06 1.44-6.57-72.51z"/><path class="prefix__cls-9" d="M807.74 369.56l-.06-24.23 12.52 29.48-12.46-5.25z"/><rect class="prefix__cls-9" x="466.97" y="474.71" width="10.58" height="22.67" rx="2.77" transform="rotate(-3.72 472.492 486.209)"/><path class="prefix__cls-9" d="M465.75 467.54S389.3 690.62 594.51 677.27L599 677l-.88-13.58S430.89 700 472.24 497.41c6.63-32.48-1.87-28.66-1.87-28.66z"/><rect class="prefix__cls-13" x="501.33" y="394.8" width="27.21" height="120.91" rx="3.69" transform="rotate(176.28 514.94 455.244)"/><path class="prefix__cls-19" transform="rotate(176.28 492.267 455.965)" d="M487.73 402.31h9.07v107.31h-9.07z"/><rect class="prefix__cls-19" x="472.74" y="410.65" width="15.11" height="95.22" rx="3" transform="rotate(176.28 480.3 458.254)"/><path class="prefix__cls-9" d="M515.21 518.85l-2.05-21.07-6.62-8.66-5.4-82.95 7.62-11.1.55-3.07-12.17-.72-7.25 5.02 7.66 117.64 7.93 5.54 9.73-.63zM487.81 390.37l-2.82 12.3 7.16 110.11 5.79 7.19-13.77-2.13-7.85-120.66 11.49-6.81zM485.6 316.5l-9.52 7.64 2.84 64.88 9.18.25-2.5-72.77z"/><path class="prefix__cls-9" d="M487.99 390.36l-3.07-24.03-8.6 30.85 11.67-6.82z"/><path class="prefix__cls-20" d="M526.29 367.2c7.4-5 17-5.67 25.6-6.74 10-1.22 20-1.81 29.79.8 8.46 2.26 12.08-10.86 3.61-13.12-11.6-3.09-23.42-2.58-35.22-1.05-10.48 1.36-21.66 2.26-30.65 8.36-7.2 4.89-.4 16.68 6.87 11.75zM714.85 356.31a78.59 78.59 0 0151.15-3.05c8.44 2.36 12-10.76 3.61-13.12a90.81 90.81 0 00-58.36 3.06c-3.43 1.38-5.76 4.52-4.75 8.36.86 3.24 5 6.13 8.37 4.75z"/><g id="prefix__Glasses"><path class="prefix__cls-18" d="M678.15 451.06c-.36-7-13-15.45-28-14.69s-26.76 10.41-26.41 17.43 12-3.51 27.08-4.26 27.68 8.55 27.33 1.52z"/><ellipse class="prefix__cls-16" cx="574.11" cy="443.03" rx="53.17" ry="73.48" transform="rotate(-2.88 573.807 442.93)"/><ellipse class="prefix__cls-16" cx="726.85" cy="435.35" rx="53.17" ry="73.48" transform="rotate(-2.88 726.655 435.23)"/><path d="M623.18 443.41l54.44-2.74" fill="none"/><path class="prefix__cls-18" d="M541.67 391.16C533.46 403 528.51 409.42 523 409.7s-10.83-9.8-11.43-21.85 34.53-13.84 40.09-14.12-8.1 14.69-9.99 17.43zM751.2 380.62c9.35 11 14.92 16.85 20.48 16.57s9.79-10.83 9.19-22.88-35.75-10.31-41.31-10 9.44 13.78 11.64 16.31z"/></g><circle class="prefix__cls-18" cx="576.26" cy="485.84" r="18"/><circle class="prefix__cls-18" cx="731.99" cy="478.01" r="19.71"/><circle class="prefix__cls-16" cx="580.18" cy="494.28" r="4.93"/><circle class="prefix__cls-16" cx="727.07" cy="487.72" r="5.4"/><ellipse class="prefix__cls-22" cx="518.2" cy="386.11" rx="3.29" ry="1.44" transform="rotate(-19.44 518.092 386.054)"/><ellipse class="prefix__cls-22" cx="774.2" cy="373.11" rx="1.44" ry="3.29" transform="rotate(-64.44 774.151 373.114)"/><path class="prefix__cls-12" d="M487 619.64s-5.33-11.84-5.87-15.72c-.13-.92 6.55-1.26 6.55-1.26L496 618z"/></g></svg>` },
  { "name": "themes", "href": false, "show": true, "url": "admin/themes", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>` },
  { "name": "addons", "href": false, "show": true, "url": "admin/addons", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "updates", "href": false, "show": true, "url": "admin/updates", "svg": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.67742 20.5672C2.53141 18.0211 0.758027 12.7583 2.71678 8.14385C4.87472 3.06005 10.7453 0.688166 15.8291 2.84612C20.9129 5.00407 23.2848 10.8746 21.1269 15.9584C20.2837 17.9449 18.8736 19.5173 17.1651 20.5672" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 16V20.4C17 20.7314 17.2686 21 17.6 21H22" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22.01L12.01 21.9989" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { "name": "holaclient", "href": false, "show": true, "url": "admin/app", "svg": `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.5C4 2.67157 4.67157 2 5.5 2C6.32843 2 7 2.67157 7 3.5V14.5C7 15.3284 6.32843 16 5.5 16C4.67157 16 4 15.3284 4 14.5V3.5Z" fill="#D9D9D9"/><path d="M5.52549 16.0638C4.69709 16.0708 4.01982 15.405 4.01277 14.5766C4.00572 13.7482 4.67154 13.0709 5.49994 13.0639L12.1087 13.0076C12.9371 13.0005 13.6144 13.6664 13.6214 14.4948C13.6285 15.3232 12.9626 16.0004 12.1342 16.0075L5.52549 16.0638Z" fill="#D9D9D9"/><rect x="4" y="18" width="4" height="4" rx="2" fill="#1E1E1E"/><rect x="17" y="2" width="3" height="4" rx="1.5" fill="#1E1E1E"/><rect x="17" y="8" width="3" height="14" rx="1.5" fill="#D9D9D9"/></svg>` },
]
const userRoutes = [
  { "name": "notifications", "url": "pages/notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "pages/requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "pages/account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HolaClient: 404</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="/assets/app.css" rel="stylesheet">
  </head>
  <body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
      <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
          <h1
              class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
              500
          </h1>
          <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
          <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
          <button onclick="window.history.back()"
              class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
              Back</button>
      </div>
  </body>`
async function getPage(page) {
  //if (wsa == true) {
  //  handler.send(JSON.stringify({ type: "render", page: `/${page}` }));
  //  return new Promise((resolve, reject) => {
  //    handler.onmessage = function (event) {
  //       let data = JSON.parse(event.data);
  //      resolve(data.page.page);
  //     };
  //   });
  //  } else {
  let c;
  if (page.startsWith('/')) {
    c = await fetch(page || "/");
  } else if (page === "") {
    c = await fetch("/");
  } else {
    c = await fetch("/" + (page || "/"));
  }
  return c.text();
  // }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
    <div id="loadOverlay" class="bg-zinc-900/50 backdrop-blur-3xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 h-screen">
        <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
        <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        </h1>
    </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.innerHTML = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.innerHTML = ``;
      b.innerHTML = f.innerHTML;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      let g = await fetch(`obviously-a-404-page`);
      let h = await g.text();
      b.innerHTML = "";
      b.innerHTML = h;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.innerHTML = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      const c = a.indexOf("/", b + 1);
      if (c !== -1) {
        return a.slice(1, c);
      }
      return a.slice(1);
    }
  }
  const b = a.indexOf("/");
  if (b !== -1) {
    const c = a.indexOf("/", b + 1);
    if (c !== -1) {
      return a.slice(0, c);
    }
    return a.slice(0, b);
  }
  return a;
};
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
window.addEventListener('popstate', () => {
  if (window.location.pathname.endsWith("/")) {
    render(window.location.pathname.replace("/", ''))
  } else {
    render(window.location.pathname)
  }
});
async function load() {
  const sidebar = document.getElementById("sidebar");
  const fragment = document.createDocumentFragment();
  const sidebarItems = [];
  const location = window.location.href.replace(window.location.origin, '');;
  const page = location.startsWith("/") ? location.slice(1) : location;
  for (let i of routes) {
    const li = document.createElement("li");
    li.innerHTML = `
          <a onclick="render('${i.url}')" id="nav-${i.url}"
              class="flex items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
              <div id="nav-display-${i.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
              <div class="p-2 flex items-center">
                  ${i.svg}
                  <span class="ml-2 text-lg capitalize">${i.name}</span>
              </div>
          </a>`

    li.style.opacity = 0;
    li.style.transform = 'translateY(20px)';

    fragment.appendChild(li);
    sidebarItems.push(li);
  }

  sidebar.appendChild(fragment);

  document.querySelectorAll("#sidebar li").forEach(item => {
    item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
  });
  document.querySelectorAll("#userDropdown li").forEach(item => {
    item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
  });
  setTimeout(() => {
    sidebarItems.forEach((item, index) => {
      item.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`;
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    });

    const navItem = document.getElementById(`nav-${page}`);
    const navDisplay = document.getElementById(`nav-display-${page}`);

    if (navItem) {
      const sidebarItems = document.querySelectorAll("#sidebar li");
      sidebarItems.forEach(item => {
        item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
      });

      const sidebarItemsU = document.querySelectorAll("#userDropdown li");
      sidebarItemsU.forEach(item => {
        item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
      });

      navItem.classList.add("text-white", "shadow", "bg-zinc-800/90");
      navDisplay.classList.remove("hidden");
    }
    highlight()
  }, 100);
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const fragment = document.createDocumentFragment()

    for (let i of userRoutes) {
      const li = document.createElement("li")
      li.innerHTML = `
      <a onclick="render('${i.url}')" id="nav-${i.url}"
          class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
          <div id="nav-display-${i.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
          <div class="p-2 flex items-center">
              ${i.svg}
              <span class="ml-2 text-lg capitalize">${i.name}</span>
          </div>
      </a>`

      li.style.opacity = 0
      li.style.transform = 'translateY(20px)'

      fragment.appendChild(li)
    }

    c.appendChild(fragment)

    setTimeout(() => {
      const sidebarItems = document.querySelectorAll("#userDropdown li")
      sidebarItems.forEach((item, index) => {
        item.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`
        item.style.opacity = 1
        item.style.transform = 'translateY(0)'
      })
    }, 100)
  } else {
    a.classList.add("hidden")
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease'
    b.style.transform = 'translateY(0)'
    b.style.opacity = 0
    c.innerHTML = ''
  }
}
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
const nodesCache = []
const eggsCache = []
let cache = {}
let rolesCache = []
async function roles() {
  let a = await fetch('/api/admin/permissions/roles')
  let b = await a.json()
  rolesCache = b.data
}
async function nodes() {
  roles()
  try {
    let a = await fetch('/api/admin/pterodactyl/nodes', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      }
    });
    let b = await a.json()
    if (b.success == true) {
      let c = document.getElementById("nodesHolder")
      c.innerHTML = ""
      const e = []
      for (let i of b.data) {
        nodesCache.push(i)
        let d = `
        <div onclick="showNode(${i.attributes.id})" class="w-full bg-zinc-900/50 cursor-pointer border hover:bg-zinc-900/80 hover:duration-300 duration-300 border-zinc-800/80 rounded-xl p-2">
          <div class="flex items-center justify-between">
            <div class="flex flex-col justify-start">
              <h1 class="text-gray-300">${i.attributes.name}</h1>
              <span class="text-gray-400">${format((i.attributes.memory) / 1024)}GB Memory</span>
            </div>
            <div class="flex flex-col justify-end text-right">
              <h1 class="text-gray-300">${i.attributes.relationships.location.attributes.short} - ${i.attributes.relationships.location.attributes.long}</h1>
              <span class="text-gray-400">${(i.attributes.relationships.allocations.data).length} slots</span>
            </div>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) * 100)}%] overflow-hidden rounded-full bg-amber-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.allocated_resources.memory / i.attributes.memory) * 100)}%] overflow-hidden rounded-full bg-sky-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.allocated_resources.memory / i.attributes.memory) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.allocated_resources.disk / i.attributes.disk) * 100)}%] overflow-hidden rounded-full bg-purple-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.allocated_resources.disk / i.attributes.disk) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format(((i.attributes.allocated_resources.disk / i.attributes.disk) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length)) / 3 * 100)}%] overflow-hidden rounded-full bg-rose-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format(((i.attributes.allocated_resources.disk / i.attributes.disk) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length)) / 3 * 100)}%</h1>
          </div>
        </div>`
        e.push(d)
      }
      if (b.data.length == 0) e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16">
      <span class="text-lg text-gray-300">Nothing to view here...</span></div>`)
      c.innerHTML = e
    }
  } catch (error) {
    toastr.error(error)
  }
}
function format(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  return b;
}
function showNode(a) {
  let b = document.getElementById("nodeViewer");
  let c = nodesCache.find(d => d.attributes.id == a);
  let e = []
  for (let i of rolesCache) {
    e.push(`<option value="${i}" class="capitalize p-1 appearance-none hover:">${i}</option>`)
  }
  if (c) {
    let d = `
      <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-4 text-gray-200 flex justify-between w-full items-center">${c.attributes.name}</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4 text-gray-300">
            <div class="flex flex-col">
              <span>Display name:</span>
              <input id="nodeName" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="${c.attributes.name}" placeholder="Optional field">
            </div>
            <div class="flex flex-col">
              <span>Fees:</span>
              <input id="nodePrice" type="number" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="0" placeholder="0 for free">
            </div>
            <div class="flex-col">
              <span>Role:</span>
              <div class="relative">
                <select id="nodeRoles" class="w-full appearance-none capitalize bg-zinc-900 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300">
                  ${e}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="w-full flex flex-col justify-end">
              <button onclick="addNode(${c.attributes.id})" class="w-full justify-self-end hover:bg-zinc-900/80 hover:duration-300 bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 h-max focus:pl-4 focus:duration-300 duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>`;

    if (cache && cache.node && cache.node == a) {
      b.innerHTML = "";
      cache.node = ""
    } else {
      b.innerHTML = d;
      cache.node = a
    }

  }
}
async function addNode(a) {
  let d = document.getElementById("nodeName").value
  let e = document.getElementById("nodePrice").value
  let f = document.getElementById("nodeRoles").value
  let b = await fetch('/api/admin/pterodactyl/nodes', {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: a, name: d, role: f, fees: e })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    nodes()
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function version(a) {
  let b = await fetch(`https://api.github.com/repos/pterodactyl/wings/releases/latest`)
  let c = await b.json()
  let d = (c.tag_name).replace("v", "")
  let e = document.getElementById("nodeVersion")
  if (d == a) {
    e.innerHTML = `<div class="mt-4 w-full rounded-xl p-2 px-4 bg-zinc-900/50 border border-zinc-800/80 text-gray-300">You're using the latest version of Wings (<b>${a}</b>).</div>`;
  } else {
    e.innerHTML = `<div class="mt-4 w-full rounded-xl p-2 px-4 bg-rose-700/50 border border-rose-700 text-rose-300">You're using Wings version <b>${a}</b>, but the latest version is <b>${d}</b>. Please update the wings to prohibit security vulnerabilities!</div>`;
  }
}
async function removeNode(a) {
  let b = await fetch(`/api/admin/pterodactyl/nodes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: parseInt(a) })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    window.location.href = '/admin/pterodactyl'
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function eggs() {
  roles();
  try {
    let a = await fetch('/api/admin/pterodactyl/eggs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let b = await a.json();
    if (b.success === true) {
      let c = document.getElementById("eggsHolder");
      c.innerHTML = "";
      const e = [];
      for (let i of b.data) {
        let f = [];
        for (let j of i.attributes.relationships.eggs.data) {
          eggsCache.push(j)
          f.push(`
          <div onclick="showEgg(${j.attributes.id})" class="w-full flex justify-center items-center backdrop-blur-xl cursor-pointer hover:bg-transparent hover:duration-300 duration-300 shadow-md bg-zinc-900 text-center rounded-full py-2 border border-zinc-800/80">
            ${j.attributes.name}
          </div>
          `);
        }
        let d = `
        <h1 class="text-gray-300 text-left text-lg">${i.attributes.name}</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">${f.join('')}</div>`;
        e.push(d);
      }
      if (b.data.length === 0) {
        e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16"><span class="text-lg text-gray-300">Nothing to view here...</span></div>`);
      }
      c.innerHTML = e.join('');
    }
  } catch (error) {
    toastr.error(error.message);
  }
}
function showEgg(a) {
  let b = document.getElementById("eggViewer");
  let c = eggsCache.find(d => d.attributes.id == a);
  let e = []
  for (let i of rolesCache) {
    e.push(`<option value="${i}" class="capitalize !p-1 !appearance-none !hover:bg-zinc-900 hover:duration-300 duration-300">${i}</option>`)
  }
  if (c) {
    let d = `
      <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-4 text-gray-200 flex justify-between w-full items-center">${c.attributes.name}</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-3 col-span-3 w-full gap-4 text-gray-300">
            <div class="flex flex-col">
              <span>Display name:</span>
              <input id="eggName" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="${c.attributes.name}" placeholder="Optional field">
            </div>
            <div class="flex flex-col">
              <span>Fees:</span>
              <input id="eggPrice" type="number" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="0" placeholder="0 for free">
            </div>
            <div class="flex flex-col">
              <span>Icon:</span>
              <input id="eggIcon" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="https://cdn.holaclientx.tech/assets/eggs/${c.attributes.name.toLowerCase().replace(/\s+/g, "-")}" placeholder="https://cdn.holaclientx.tech/assets/icons/[Egg Name]">
            </div>
            <div class="flex-col">
              <span>Role:</span>
              <div class="relative">
                <select id="eggRole" class="w-full appearance-none capitalize bg-zinc-900 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300">
                  ${e}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="w-full flex flex-col justify-end">
              <button onclick="addEgg(${c.attributes.id}, ${c.attributes.nest})" class="w-full justify-self-end hover:bg-zinc-900/80 hover:duration-300 bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 h-max focus:pl-4 focus:duration-300 duration-300">
                Submit
              </button>
            </div>
          </div>
          <div class="w-full h-max max-h-40 flex items-center justify-center">
            <img id="eggPreview" onerror="this.src='https://cdn.holaclientx.tech/assets/eggs/minecraft'" class="max-h-40 w-auto" src="https://cdn.holaclientx.tech/assets/eggs/${c.attributes.name.toLowerCase().replace(/\s+/g, "-")}">
          </div>
        </div>
      </div>`;
    if (cache && cache.egg && cache.egg == a) {
      b.innerHTML = "";
      cache.egg = ""
    } else {
      b.innerHTML = d;
      cache.egg = a
    }
  }
}
async function addEgg(a, h) {
  let d = document.getElementById("eggName").value
  let e = document.getElementById("eggPrice").value
  let f = document.getElementById("eggRole").value
  let g = document.getElementById("eggIcon").value
  let b = await fetch('/api/admin/pterodactyl/eggs', {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: a, name: d, role: f, fees: e, icon: g, nest: h })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function addons() {
  let a = await fetch('/api/admin/addons')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById("addonsList")
    let d = []
    for ([j, i] of Object.entries(b.data.active)) {
      d.push(`
      <tr onclick="render('admin/addons/${i.name}')" class="cursor-pointer hover:bg-zinc-900/30 hover:duration-300 duration-300">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.display}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.type}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right text-sky-500">
          <a href="${i.author.github}">${i.author.name}</a>
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.runtime.holaclient.version == 1 ? "Yes" : "No"}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          Active
        </td>
      </tr>
    `)
    }
    for ([j, i] of Object.entries(b.data.inactive)) {
      d.push(`
      <tr onclick="render('admin/addons/${i.name}')" class="cursor-pointer hover:bg-zinc-900/30 hover:duration-300 duration-300">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.display}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.type}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right text-sky-500">
          <a href="${i.author.github}">${i.author.name}</a>
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.runtime.holaclient.version == 1 ? "Yes" : "No"}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          Inactive
        </td>
      </tr>
    `)
    }
    c.innerHTML = d.join("")
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function activateAddon(a) {
  let b = await fetch(`/api/admin/addons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      addon: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    document.getElementById("addonStatus").innerHTML = `
    <button onclick="configAddon(${a})" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
    Save changes
</button>
<button onclick="deactivateAddon('${a}')" class="px-4 py-2 rounded-xl bg-rose-900/50 border border-rose-800/80 text-rose-400">
Deactivate
</button>`
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function deactivateAddon(a) {
  let b = await fetch(`/api/admin/addons`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      addon: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    document.getElementById("addonStatus").innerHTML = `
    <button onclick="configAddon(${a})" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
    Save changes
</button>
<button onclick="activateAddon('${a}')" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
Activate
</button>`
  } else {
    toastr.error(c.message, "Error!")
  }
}
window.onload = () => {
  load();
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(i => {
    i.style.zIndex = '1';
    dragElement(i);
  });
}
function dragElement(a) {
  var b = 0, c = 0, d = 0, f = 0;
  a.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    d = e.clientX;
    f = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    b = d - e.clientX;
    c = f - e.clientY;
    d = e.clientX;
    f = e.clientY;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(i => {
      i.style.position = 'absolute';
      i.style.zIndex = '1';
      dragElement(i);
    });
    a.style.zIndex = '2';
    a.classList.add("backdrop-blur-xl")
    a.style.top = (a.offsetTop - c) + "px";
    a.style.left = (a.offsetLeft - b) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
async function configAddon(a) {
  let b = await fetch(`/api/admin/addons/${a}`)
  let c = await b.json()
  if (c.success == true) {
    let d = {}
    for ([i, j] of Object.entries(c.data.settings)) {
      for (let k of j) {
        if (k.value_type == "string") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, e);
        } else if (k.value_type == "number") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, Number(e));
        } else if (k.value_type == "boolean") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, e);
        } else if (k.value_type == "object") {
          let f = {};
          for (let l of k.keys) {
            if (k.keys_value_type == "number") {
              objectify(f, l, Number(document.getElementById(k.identifier + "_" + l.toUpperCase()).value));
            } else {
              objectify(f, l, document.getElementById(k.identifier + "_" + l.toUpperCase()).value);
            }
          }
          objectify(d, k.pointer, f);
        }
      }
    }
    let g = await fetch(`/api/admin/addons/${a}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
    });
    let h = await g.json()
    if (h.success == true) {
      toastr.success(h.message, "Success!")
    } else {
      toastr.error(h.message, "Error!")
    }
  } else {
    toastr.error(c.message, "Error!")
  }
}
function objectify(a, b, c) {
  const d = b.split('.');
  let f = a;
  for (let i = 0; i < d.length - 1; i++) {
    const e = d[i];
    f[e] = f[e] || {};
    f = f[e];
  };
  f[d[d.length - 1]] = c;
}
async function users() {
  const b = await fetch('/api/admin/users');
  const a = (await b.json()).data;

  const c = document.getElementById('usersHolder');
  const d = document.getElementById('b');
  const e = document.getElementById('d');
  const f = document.getElementById('e');

  let g = 1;
  let h = parseInt(e.value);

  function i() {
    c.innerHTML = a.map(i => `
      <tr onclick="render('admin/users/view/${i.id}')" class="cursor-pointer">
      <td class="p-4 transition-all duration-300 ease-in-out text-left">
      <img class="object-cover w-12 rounded-xl" src="${i.avatar}">
      </td>
      <td class="p-4 transition-all duration-300 ease-in-out text-left">
      ${i.name.first} ${i.name.last}
      </td>
      <td class="p-4 transition-all duration-300 ease-in-out text-left">
      ${i.username}
      </td>
      <td class="p-4 transition-all duration-300 ease-in-out text-center">
      ${i.email}
      </td>
      <td class="p-4 transition-all duration-300 ease-in-out text-right">
      ${i.id}
      </td>
      <td class="p-4 transition-all duration-300 ease-in-out text-right capitalize">
      ${i.permissions.roles}
      </td>
      <td class="p-4 transition-all duration-300 ease-in-out text-right">
      ${i.permissions.level}
      </td>
      </tr>
      `).join('');
  }

  function q() {
    const r = a.length;
    const s = Math.ceil(r / h);

    const t = [];
    const u = 2;

    let v = Math.max(1, g - u);
    let w = Math.min(s, g + u);

    if (v > 1) {
      t.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">1</a>`);
      if (v > 2) {
        t.push(`<span class="text-white px-2 py-2 mx-1">...</span>`);
      }
    }

    for (let x = v; x <= w; x++) {
      t.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">${x}</a>`);
    }

    if (w < s) {
      if (w < s - 1) {
        t.push(`<span class="text-white px-2 py-2 mx-1">...</span>`);
      }
      t.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">${s}</a>`);
    }

    const y = document.createElement('div');
    y.innerHTML = t.join('');
    const z = f;
    z.innerHTML = '';
    z.appendChild(y);

    y.querySelectorAll('a').forEach((aa, bb) => {
      aa.addEventListener('click', (cc) => {
        cc.preventDefault();
        g = bb + v;
        i();
      });
    });

  }

  e.addEventListener('change', () => {
    h = parseInt(e.value);
    g = 1;
    i();
    q();
  });

  i();
  q();
}
async function usersFake() {
  let a = await fetch('/api/admin/users')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`
        <tr>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        <img class="object-cover w-12 rounded-xl" src="${i.avatar}">
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        ${i.name.first} ${i.name.last}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        ${i.username}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-center">
        ${i.email}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
        ${i.id}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right capitalize">
        ${i.permissions.role}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
        ${i.permissions.level}
        </td>
        </tr>
        `)
    }
    document.getElementById("usersHolder").innerHTML = c
  }
}
async function createProduct() {
  let c = {
    name: gv("productName"),
    icon: gv("productIcon"),
    type: gv("productType"),
    coins: gv("productCoins"),
    credits: gv("productCredits"),
    resources: {
      memory: gv("productMemory"),
      disk: gv("productDisk"),
      cpu: gv("productCPU"),
      allocations: gv("productAllocations"),
      backups: gv("productBackups"),
      databases: gv("productDatabases"),
    }
  }
  if (gv("productType") == "server") {
    c["software"] = gv("productSoftware")
  }
  let a = await fetch('/api/admin/products', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(c)
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(b.message, "Error!")
  }
};
function gv(a) {
  return document.getElementById(a).value
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function productsLoad() {
  let x = document.getElementById("productType")
  let y = document.getElementById("productSoftwareHolder")
  let z = document.getElementById("productSoftware")
  let a = await fetch('/api/servers.create')
  let b = await a.json()
  let c = []
  for (let i of b.data.eggs) {
    c.push(`<option value="${i.id}">${i.deployments.name}</option>`)
  }
  z.innerHTML += c.join('')
  document.getElementById("productIcon").addEventListener("input", function () {
    document.getElementById("productIconPreview").src = gv("productIcon")
  });
  x.addEventListener("change", function () {
    if (x.value == "server") {
      y.classList.remove("hidden")
    } else {
      y.classList.add("hidden")
    }
  });
}
async function products() {
  let a = await fetch('/api/admin/products')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`<tr onclick="render('admin/products/view/${i.id}')" class="cursor-pointer">
      <td class="p-2 transition-all duration-300 ease-in-out text-left">
          <img src="${i.icon}" class="w-8 h-8 rounded-xl shadow">
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.name}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.type}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.id}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          Coins: ${i.coins}<br>Credits: $${i.credits}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          Active
      </td>
  </tr>`)
    }
    document.getElementById("productsHolder").innerHTML = c.join('')
  }
}
async function modifyProduct(a) {
  let d = {
    id: parseInt(a),
    name: gv("productName"),
    icon: gv("productIcon"),
    type: gv("productType"),
    coins: gv("productCoins"),
    credits: gv("productCredits"),
    resources: {
      memory: gv("productMemory"),
      disk: gv("productDisk"),
      cpu: gv("productCPU"),
      allocations: gv("productAllocations"),
      backups: gv("productBackups"),
      databases: gv("productDatabases"),
    }
  }
  if (gv("productType") == "server") {
    d["software"] = gv("productSoftware")
  }
  let b = await fetch('/api/admin/products', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(d)
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function deleteProduct(a) {
  let b = await fetch('/api/admin/products', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: a })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function gateways() {
  let a = await fetch('/api/payments/gateways')
  let b = await a.json()
  let c = []
  for (let i of b.data) {
    c.push(`
    <div onclick="render('admin/addons/${i.name.toLowerCase()}')" class="bg-zinc-900/50 cursor-pointer border border-zinc-800/80 rounded-xl">
      <img src="${i.banner}" class="w-full max-h-64 h-full rounded-xl">
    </div>
    `)
  }
  document.getElementById("gatewaysHolder").innerHTML = c
}
async function invoices() {
  let a = await fetch('/api/payments/invoices')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`
        <tr class="cursor-pointer" onclick="render('admin/billing/invoices/${i.id}')">
          <td class="p-4 transition-all duration-300 ease-in-out text-left">
            ${i.product.name}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
              $${i.price}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${i.id}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${i.user.nickname}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${date(i.date.created)}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${date(i.date.paid)}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
              ${i.paid == true ? "Paid" : "Pending"}
          </td>
        </tr>
      `)
    }
    document.getElementById("invoicesHolder").innerHTML = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function date(a) {
  const b = new Date(a);
  const c = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = c[b.getMonth()];
  const e = b.getDate();
  const f = b.getFullYear();
  const g = new Date().getFullYear();
  return `${d} ${e}${f !== g ? ', ' + f : ''}`;
}
async function updates() {
  let a = await fetch('/api/app/updates/history')
  let b = await a.json()
  let d = document.getElementById("updatesHolder")
  if (b.data.length !== 0) {
    let c = []
    for (let i of b.data) {
      c.push(`
      <div onclick="render('admin/updates/history/${i.identifier}')" class="w-full bg-zinc-900/50 text-lg cursor-pointer text-gray-300 rounded-xl p-4 items-center flex justify-between">
      <span>${i.display}</span>
      <div class="text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    d.innerHTML = c
  } else {
    d.innerHTML = `<div class="w-full  h-40 md:h-52 xl:h-72 flex justify-center items-center"><span class="text-gray-300">No updates available.</span></div>`
  }
}
async function sysInfo() {
  let a = await fetch('/api/app/sysinfo')
  let b = await a.json()
  let c = b.data
  st("sysArch", c.machine.arch)
  st("sysCPU", c.cpu.model)
  st("sysCPUThreads", c.cpu.threads)
  st("sysCPUSpeed", c.cpu.speed)
  st("sysMemTotal", `${format(c.memory.total / 1024)} GB`)
  st("sysMemFree", `${format(c.memory.free / 1024)} GB`)
  st("sysMemApp", `${format(c.memory.app)} MB`)
  st("sysPlatform", c.machine.platform)
  st("sysUptime", `${formatTime(c.machine.uptime)}`)
}
function formatTime(a) {
  const b = Math.floor(a / 60);
  const c = Math.floor(b / 60);
  const d = Math.floor(c / 24);
  const e = Math.floor(d / 30);
  if (e > 0) {
    return `${e} Months`;
  } else if (d > 0) {
    return `${d} Days`;
  } else if (c > 0) {
    return `${c} Hours`;
  } else if (b > 0) {
    return `${b} Minutes`;
  } else {
    return `${a} Seconds`;
  }
}
function loadChart() {
  let options = {
    chart: {
      type: 'line',
      height: 280,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    series: [
      {
        name: 'Registers',
        data: [
          63, 57, 87, 41, 28, 41, 20, 88, 52,
          9, 97, 25, 76, 73, 40, 71, 81, 15,
          78, 29, 24, 58, 84, 64, 6, 2, 0,
          43, 35, 33, 37
        ],
      },
    ],
    colors: ['#323237'],
    grid: {
      borderColor: '',
    },

    fill: {
      colors: undefined,
      opacity: 0.9,
      type: 'solid',
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      },
      image: {
        src: [],
        width: undefined,
        height: undefined
      },
      pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 2,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ["#323237"],
      width: 2,
      dashArray: 0,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark"
    },
    xaxis: {
      categories: [],
      title: {
        text: "",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#d1d5db",
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-title',
        },
      },
      labels: {
        style: {
          colors: ["#d1d5db"],
        }
      },
      lines: {
        show: false,
      }
    },
    yaxis: {
      title: {
        text: '',
      },
      lines: {
        show: false,
      },
      labels: {
        style: {
          colors: ["#d1d5db"],
        }
      },
    },
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const datesArray = [];

  for (let day = 1; day <= new Date(currentYear, currentMonth + 1, 0).getDate(); day++) {
    const date = new Date(currentYear, currentMonth, day);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit' });
    datesArray.push(formattedDate);
  }
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const date = new Date()
  options.xaxis.categories = datesArray;
  options.xaxis.title.text = `${months[date.getMonth()]} ${date.getFullYear()}`;
  options.xaxis.labels.style = { colors: new Array(datesArray.length).fill("#d1d5db") }
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
};
async function stats() {
  let a = await fetch('/api/admin/statistics')
  let b = await a.json()
  if (b.success == true) {
    let c = b.data
    st("statsServers", c.servers)
    st("statsUsers", c.users)
    st("statsQueue", c.queue)
    st("statsNodes", c.nodes)
    st("statsCoins", c.coins)
    st("statsMemory", `${((c.resources.memory.used / c.resources.memory.total) * 100).toFixed(0)}%`)
    st("statsDisk", `${((c.resources.disk.used / c.resources.disk.total) * 100).toFixed(0)}%`)
    st("statsCPU", `${((c.resources.cpu.used / c.resources.cpu.total) * 100).toFixed(0)}%`)
  }
}
function showTab(a) {
  let b = ["overview", "vault", "billing"];
  b.forEach(i => {
    document.getElementById(`user-${i}`).classList.add("hidden");
    document.getElementById(`tab-${i}`).classList.remove("bg-zinc-900", "text-gray-200");
  });
  document.getElementById(`user-${a}`).classList.remove("hidden");
  document.getElementById(`tab-${a}`).classList.add("bg-zinc-900", "text-gray-200");
}
async function billing() {
  let a = await fetch('/api/payments')
  let b = await a.json()
  if (b.success == true) {
    st("revenue", `$${b.data.revenue ?? 0}`)
    st("services", b.data.services)
    st("gateways", b.data.gateways)
  } else {
    toastr.error(b.message, "Error!")
  }
}
=======
const routes = [
  { "name": "back to home", "href": true, "show": true, "url": "/dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>` },
  { "name": "home", "href": false, "show": true, "url": "admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>` },
  { "name": "users", "href": false, "show": true, "url": "admin/users", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>` },
  //  { "name": "tickets", "href": false, "show": true, "url": "admin/tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
  { "name": "billing", "href": false, "show": true, "url": "admin/billing", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>` },
  { "name": "products", "href": false, "show": true, "url": "admin/products", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>` },
  //  { "name": "permissions", "href": true, "show": true, "url": "/admin/permissions", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
  //  { "name": "emails", "href": false, "show": true, "url": "admin/emails", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>` },
  //  { "name": "posts", "href": false, "show": true, "url": "admin/posts", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" /></svg>` },
  //  { "name": "security", "href": false, "show": true, "url": "admin/security", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` },
  //  { "name": "logs", "href": false, "show": true, "url": "admin/logs", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>` },
  { "name": "settings", "href": true, "show": true, "url": "/admin/settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` },
  { "name": "pterodactyl", "href": true, "show": true, "url": "/admin/pterodactyl", "svg": `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-8 -pl-1" viewBox="0 0 1200 1200"><defs><style>.prefix__cls-1{fill:#904a04}.prefix__cls-2{fill:#b26734}.prefix__cls-3{fill:#6d3c0f}.prefix__cls-4{fill:#bd6e35}.prefix__cls-5{fill:#a56032}.prefix__cls-6{fill:#3a3a3a}.prefix__cls-8{fill:#515151}.prefix__cls-9{fill:#303030}.prefix__cls-10{fill:#aaa}.prefix__cls-11{fill:#a4571f}.prefix__cls-12{fill:#824009}.prefix__cls-13{fill:#3f3f3f}.prefix__cls-16{fill:#fff}.prefix__cls-17{fill:#91562d}.prefix__cls-18{fill:#232323}.prefix__cls-19{fill:#161616}.prefix__cls-20{fill:#7c441e}.prefix__cls-22{fill:#ffc33e}</style></defs><g id="prefix__Layer_1" data-name="Layer 1"><path class="prefix__cls-1" d="M921.82 627.73s-2 9.07-2 10.58-52.4-4.53-52.4-4.53l2-16.63z"/><path class="prefix__cls-1" d="M912.81 623.68s-133.07-39.78-190.5-29.2-20.22 41.57-20.22 41.57zM385.21 629.24s2 9.07 2 10.58 52.39-4.53 52.39-4.53l-2-16.63z"/><path class="prefix__cls-1" d="M394.22 625.2s133.07-39.79 190.5-29.2 20.22 41.57 20.22 41.57z"/><ellipse class="prefix__cls-2" cx="661.81" cy="721.44" rx="243.34" ry="123.94"/><path class="prefix__cls-2" d="M589.26 603.55l-134.52 21.16L368 638l-23.38 24v42.51l4.43 52.9 73.33 26.45 57.09 3.78c-16.73-170.12 109.79-184.09 109.79-184.09z"/><path class="prefix__cls-3" d="M522.41 738.07s-27.2-42.32-98.24-19.65 39.3 42.32 39.3 42.32zM318.71 1082.18s47-52.34 153.74-60.78c41.82-3.3 32 94.78 32 94.78l71.24-63.61L715 1063.91l56.45 41.57s36.09-89.36 104.91-87.51 110.37 56.44 110.37 56.44l-87.43-276H393.23z"/><path class="prefix__cls-2" d="M780.61 864.53c-28.25 116.39-35.37 236-124.87 236-89.31 0-95.6-107.1-120.18-226.8-22.46-109.4 48.38-182.41 120.18-182.41a131.4 131.4 0 0165.58 18.13c45.25 26.39 77.39 80.55 59.29 155.08z"/><path class="prefix__cls-4" d="M744.93 895.92c0 84.15-58.69 177.73-102.78 158.55-46.3-20.16-70.81-80-80-167.2-8.77-83.21 44.22-144.88 90.28-144.88s92.5 69.37 92.5 153.53z"/><path class="prefix__cls-2" d="M717.77 602l134.52 21.2L939 636.44l23.38 24v42.51L958 755.82l-73.33 26.45-57.09 3.78C844.29 616 717.77 602 717.77 602z"/><path class="prefix__cls-5" d="M563.56 608.08l52.5 113.36L669 777l43-60 49.56-108.92-72-12.09-70.1 5.19-55.9 6.9z"/><path class="prefix__cls-6" d="M773.17 783.34s13.81 71.11-13.4 80.18-52.9-58.95-52.9-58.95h-57.43l-1.52-36.27 93.71-18.14z"/><path class="prefix__cls-6" d="M541.09 783.34s-13.8 71.11 13.4 80.18 52.9-58.95 52.9-58.95h57.44l1.51-36.27-93.71-18.14z"/><path fill="#444" d="M568.1 797.01l13.6-9.06 6.05-7.56H726.8l4.53 7.56 12.09 6.04-9.07-42.32-92.19-6.04-61.97 6.04-12.09 45.34z"/><path class="prefix__cls-8" d="M772.48 760.11s7.55 32.49-15.12 39.26-30.26-40.1-30.26-40.1l16.66-4.58zM540.89 760.11s-7.56 32.49 15.11 39.26 30.26-40.1 30.26-40.1l-16.66-4.58z"/><path class="prefix__cls-9" d="M686.19 732.02h61.77l25.69 28.72-27.2 1.51-33.26-4.53-25.69 3.02-1.31-28.72zM628.55 732.02h-61.77l-25.69 28.72 27.21 1.51 33.25-4.53 25.69 3.02 1.31-28.72z"/><path class="prefix__cls-8" d="M687.5 760.74h-61.97l-13.6-28.72h92.2l-16.63 28.72z"/><circle class="prefix__cls-10" cx="685.99" cy="742.6" r="4.53"/><rect class="prefix__cls-10" x="649.71" y="751.67" width="15.11" height="3.02" rx="1"/><path class="prefix__cls-6" d="M559.56 793.1a79.75 79.75 0 009-27.76c.12-1-1.39-1-1.51 0a77.43 77.43 0 01-8.75 27c-.46.85.84 1.62 1.31.76zM754.31 792.34a77.41 77.41 0 01-8.74-27c-.13-1-1.64-1-1.51 0a79.33 79.33 0 009 27.76c.46.86 1.76.1 1.3-.76z"/><path class="prefix__cls-11" d="M602.82 745.76c-132.25 128.47-160.43 380.45-160.43 380.45s-25.51-114.06-51-118.31c-34-5.67-71.95 69.74-71.95 69.74s34.32-140.44 22-189.87c-11.57-46.59-74.6-117.53-36.82-204.43 0 0 33.58-55 118.44-63 0 0-261.1 79.46 172.81 121.66h14.48z"/><path class="prefix__cls-1" d="M567.57 761.87c-105.22 102.21-126.14 312.31-126.14 312.31s-23.94-90.75-44.23-94.13c-27.05-4.51-59.07 54.76-59.07 54.76s36.2-113.48 19.36-150.34C308.38 777 305.36 747.88 309.93 719.6c0 0 .08-51.55 49.69-73.86 0 0-142.7 76.88 202.53 110.46h11.39z"/><path class="prefix__cls-3" d="M793.68 736.56s27.21-42.32 98.25-19.65-39.3 42.32-39.3 42.32z"/><path class="prefix__cls-11" d="M704.21 744.24c132.25 128.48 160.43 380.46 160.43 380.46s25.51-114.07 51-118.32c34-5.66 72 69.75 72 69.75s-34.32-140.44-22-189.87c11.57-46.59 74.6-117.53 36.82-204.44 0 0-33.58-55-118.44-63 0 0 261.1 79.46-172.81 121.66h-14.56z"/><path class="prefix__cls-1" d="M739.46 760.36c105.22 102.21 126.14 312.31 126.14 312.31s23.93-90.75 44.22-94.14c27.06-4.51 59.08 54.77 59.08 54.77S932.69 919.82 949.53 883c49.12-107.52 52.14-136.59 47.57-164.87 0 0-.08-51.55-49.69-73.86 0 0 142.7 76.88-202.54 110.45h-11.38z"/><path class="prefix__cls-5" d="M487 619s21.91 42 107 42c4 0-8.89-6.4-8.89-6.4s-54.91 3.14-89.39-36.34C492 614 487 619 487 619z"/><path class="prefix__cls-11" d="M382.68 719.43v38.84l18.86-33.14-18.86-5.7zM370.89 711.17v28.08l13.64-23.97-13.64-4.11zM924.35 717.92v38.84l-18.86-33.14 18.86-5.7zM936.13 709.65v28.09l-13.63-23.97 13.63-4.12z"/><path class="prefix__cls-12" d="M566.97 594.28l-3.74 13.36 32.07.44 1.51-12.09-29.84-1.71zM762.51 593.34l-1.1 14.99-27.4-5.3 1.86-11.57 26.64 1.88z"/><path class="prefix__cls-2" d="M613.09 1109c-12.68 37.21-21.62 63.4-41.79 63.4s-41.1-36.76-41.1-76.07 18.34-89.89 38.52-89.89 58.54 60.97 44.37 102.56z"/><path class="prefix__cls-2" d="M592.69 1188.11l-41.97-3.82 10.92-31.66 27.57-1.12 3.48 36.6z"/><path class="prefix__cls-11" d="M551.92 1180.8l40.58 5.38 18.41 45.82c-45.11-49.36-90.21-7.08-90.21-7.08z"/><path class="prefix__cls-11" d="M554.24 1201.83s-13.69 20.19-9 30.17l15.11-15.08 17.82-15.09z"/><path class="prefix__cls-2" d="M698.85 1101.89c11.18 37.68 15.83 65.09 36 65.09s41.1-36.76 41.1-76.07S757.6 1001 737.43 1001s-50.86 59.49-38.58 100.89z"/><path class="prefix__cls-2" d="M713.46 1182.72l41.96-3.82-10.92-31.66-27.56-1.12-3.48 36.6z"/><path class="prefix__cls-11" d="M754.22 1175.41l-40.58 5.38-18.4 45.82c45.1-49.36 90.21-7.09 90.21-7.09z"/><path class="prefix__cls-11" d="M748.5 1197.17s13.7 20.19 9 30.17l-15.12-15.09-17.82-15.08z"/><rect class="prefix__cls-13" x="569.61" y="657.45" width="43.83" height="19.65" rx="6.17"/><path class="prefix__cls-9" d="M800.74 296.09s0-10.5-21.38-13.65c-8.72-1.29-59.12-.7-59.12-.7l-15.68-34.6s69.52.8 91.42 11.49S813 286 811 303.1M485.42 316.6s-1.39-10.41 19.43-16.31c8.48-2.4 58.53-8.35 58.53-8.35L583.82 255s-78.21 10.41-98.54 23.84-13.3 29.32-9.12 46"/><path class="prefix__cls-2" d="M560.77 567.57c-1.3 4 4.4 10.16 6.51 12.81 16.61 20.85 29.62 44.28 44.26 66.55 6.38 9.71 46.93 69.27 59.36 56.05 21.16-22.5 36.75-50.25 52-77 16-28.08 30.2-57.4 39.11-88.55a8.31 8.31 0 00.46-3.23c-1-8.41-37.28-9.1-44.15-10.15l-20.82-3.2c-1.88-.29-6.68-2-8.53-1.31l-97.35 36.15-19.31 7.17c-2.64 1-9.83 1.41-11.26 4.11a3.76 3.76 0 00-.28.6z"/><path class="prefix__cls-11" d="M574.86 574.98l57.51 90.54 14.12 12.45 17.74 15.5 17.6-17.8 50.32-79.01 26.22-62.58-73.1-10.1-110.41 51z"/><path fill="#cb63d3" d="M721.26 601.57l-122.42-6.04 31.74 64.99 12.09 12.09 16.62 13.6 10.58-9.07 7.56-7.55 7.56-10.58"/><path fill="#b25f8c" d="M633.6 643.38l10.58 18.14 13.6 13.6 51.21-45.34-58.76-6.05-16.63 19.65z"/><path class="prefix__cls-4" d="M671.69 49.44c-4.64.63-9.72 6.23-12 9-32.3 39.35-51.93 87.41-68.9 135.4-9.21 26.1-17.79 52.46-27.79 78.33-9.7 25.24-23.21 49-31.84 74.42-9.77 28.78-13.29 59.55-11.61 89.86 2.42 43.68 8.59 97.89 40.23 131.13 48.62 51.07 83.3 87.35 83.3 87.35l20.67 16.32 21.13-19s56.42-50.09 62.55-72.25 6.44-20.54 11.63-32.24 13.62-12.48 20-45.08c15.41-78.47-12.25-158.34-39.58-231.26-15.46-41.27-31.89-82.35-42.36-125.16-4.51-18.47-7.89-37.18-11.68-55.81-1.9-9.3-3.88-18.59-6.15-27.81-.8-3.23-1.12-11.16-4.6-12.78a5.4 5.4 0 00-3-.42z"/><path class="prefix__cls-2" d="M675.74 50.6c3.58 4.67-1.86 8.25-1.34 13.89q.95 10.23 2.16 20.44 2.52 21.06 6.18 41.95a772.75 772.75 0 0018.84 81.32c21.39 73.88 54.09 146.09 56 223 2 78.41-28.81 154.7-71.79 220.32 46-39.47 79.71-83.64 94.25-152.73 8.09-38.38 4.23-79.54-4.21-117.82-4.13-18.72-13.35-35.66-18.29-53.9-5.41-20-11.93-39.73-18.83-59.28-13.81-39.14-29.25-77.74-40.84-117.63-7.7-26.5-10.21-54.2-16.93-81-.45-1.76-2.47-22.71-9.26-19.26"/><path class="prefix__cls-16" d="M594.1 472.41c.74 11.43-7.13 21.25-17.59 21.93s-19.53-8-20.28-19.47 7.66-13.14 18.12-13.82 19-.05 19.75 11.36zM760 462.52c.78 11.94-7.88 22.21-19.33 23s-21.37-8.33-22.14-20.26 8.4-14.1 19.86-14.84 20.82.17 21.61 12.1z"/><ellipse class="prefix__cls-17" cx="622.99" cy="559.47" rx="5.17" ry="10.14" transform="rotate(-18.07 623.187 559.602)"/><ellipse class="prefix__cls-17" cx="695.17" cy="559.47" rx="10.14" ry="5.17" transform="rotate(-71.93 695.1 559.469)"/><circle class="prefix__cls-18" cx="580.95" cy="482.63" r="7.67"/><circle class="prefix__cls-18" cx="735.18" cy="472.41" r="7.75"/><rect class="prefix__cls-13" x="775.83" y="376.94" width="27.21" height="120.91" rx="3.69" transform="rotate(-3.72 789.88 437.638)"/><path class="prefix__cls-19" transform="rotate(-3.72 812.459 435.289)" d="M807.48 381.52h9.07v107.31h-9.07z"/><rect class="prefix__cls-19" x="816.62" y="388.28" width="15.11" height="95.22" rx="3" transform="rotate(-3.72 824.607 436.146)"/><path class="prefix__cls-9" d="M797.4 500.49l-.69-21.16 5.44-9.44-5.39-82.95-9-10.02-.94-2.97 11.97-2.29 7.84 4.03 7.65 117.65-7.15 6.52-9.73.63zM807.93 369.55l4.38 11.83 7.17 110.1-4.81 7.89 13.38-3.9-7.85-120.66-12.27-5.26zM800.93 295.99l10.31 4.34 5.32 66.73-9.06 1.44-6.57-72.51z"/><path class="prefix__cls-9" d="M807.74 369.56l-.06-24.23 12.52 29.48-12.46-5.25z"/><rect class="prefix__cls-9" x="466.97" y="474.71" width="10.58" height="22.67" rx="2.77" transform="rotate(-3.72 472.492 486.209)"/><path class="prefix__cls-9" d="M465.75 467.54S389.3 690.62 594.51 677.27L599 677l-.88-13.58S430.89 700 472.24 497.41c6.63-32.48-1.87-28.66-1.87-28.66z"/><rect class="prefix__cls-13" x="501.33" y="394.8" width="27.21" height="120.91" rx="3.69" transform="rotate(176.28 514.94 455.244)"/><path class="prefix__cls-19" transform="rotate(176.28 492.267 455.965)" d="M487.73 402.31h9.07v107.31h-9.07z"/><rect class="prefix__cls-19" x="472.74" y="410.65" width="15.11" height="95.22" rx="3" transform="rotate(176.28 480.3 458.254)"/><path class="prefix__cls-9" d="M515.21 518.85l-2.05-21.07-6.62-8.66-5.4-82.95 7.62-11.1.55-3.07-12.17-.72-7.25 5.02 7.66 117.64 7.93 5.54 9.73-.63zM487.81 390.37l-2.82 12.3 7.16 110.11 5.79 7.19-13.77-2.13-7.85-120.66 11.49-6.81zM485.6 316.5l-9.52 7.64 2.84 64.88 9.18.25-2.5-72.77z"/><path class="prefix__cls-9" d="M487.99 390.36l-3.07-24.03-8.6 30.85 11.67-6.82z"/><path class="prefix__cls-20" d="M526.29 367.2c7.4-5 17-5.67 25.6-6.74 10-1.22 20-1.81 29.79.8 8.46 2.26 12.08-10.86 3.61-13.12-11.6-3.09-23.42-2.58-35.22-1.05-10.48 1.36-21.66 2.26-30.65 8.36-7.2 4.89-.4 16.68 6.87 11.75zM714.85 356.31a78.59 78.59 0 0151.15-3.05c8.44 2.36 12-10.76 3.61-13.12a90.81 90.81 0 00-58.36 3.06c-3.43 1.38-5.76 4.52-4.75 8.36.86 3.24 5 6.13 8.37 4.75z"/><g id="prefix__Glasses"><path class="prefix__cls-18" d="M678.15 451.06c-.36-7-13-15.45-28-14.69s-26.76 10.41-26.41 17.43 12-3.51 27.08-4.26 27.68 8.55 27.33 1.52z"/><ellipse class="prefix__cls-16" cx="574.11" cy="443.03" rx="53.17" ry="73.48" transform="rotate(-2.88 573.807 442.93)"/><ellipse class="prefix__cls-16" cx="726.85" cy="435.35" rx="53.17" ry="73.48" transform="rotate(-2.88 726.655 435.23)"/><path d="M623.18 443.41l54.44-2.74" fill="none"/><path class="prefix__cls-18" d="M541.67 391.16C533.46 403 528.51 409.42 523 409.7s-10.83-9.8-11.43-21.85 34.53-13.84 40.09-14.12-8.1 14.69-9.99 17.43zM751.2 380.62c9.35 11 14.92 16.85 20.48 16.57s9.79-10.83 9.19-22.88-35.75-10.31-41.31-10 9.44 13.78 11.64 16.31z"/></g><circle class="prefix__cls-18" cx="576.26" cy="485.84" r="18"/><circle class="prefix__cls-18" cx="731.99" cy="478.01" r="19.71"/><circle class="prefix__cls-16" cx="580.18" cy="494.28" r="4.93"/><circle class="prefix__cls-16" cx="727.07" cy="487.72" r="5.4"/><ellipse class="prefix__cls-22" cx="518.2" cy="386.11" rx="3.29" ry="1.44" transform="rotate(-19.44 518.092 386.054)"/><ellipse class="prefix__cls-22" cx="774.2" cy="373.11" rx="1.44" ry="3.29" transform="rotate(-64.44 774.151 373.114)"/><path class="prefix__cls-12" d="M487 619.64s-5.33-11.84-5.87-15.72c-.13-.92 6.55-1.26 6.55-1.26L496 618z"/></g></svg>` },
  { "name": "themes", "href": false, "show": true, "url": "admin/themes", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>` },
  { "name": "addons", "href": false, "show": true, "url": "admin/addons", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "updates", "href": false, "show": true, "url": "admin/updates", "svg": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.67742 20.5672C2.53141 18.0211 0.758027 12.7583 2.71678 8.14385C4.87472 3.06005 10.7453 0.688166 15.8291 2.84612C20.9129 5.00407 23.2848 10.8746 21.1269 15.9584C20.2837 17.9449 18.8736 19.5173 17.1651 20.5672" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 16V20.4C17 20.7314 17.2686 21 17.6 21H22" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22.01L12.01 21.9989" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { "name": "holaclient", "href": false, "show": true, "url": "admin/app", "svg": `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.5C4 2.67157 4.67157 2 5.5 2C6.32843 2 7 2.67157 7 3.5V14.5C7 15.3284 6.32843 16 5.5 16C4.67157 16 4 15.3284 4 14.5V3.5Z" fill="#D9D9D9"/><path d="M5.52549 16.0638C4.69709 16.0708 4.01982 15.405 4.01277 14.5766C4.00572 13.7482 4.67154 13.0709 5.49994 13.0639L12.1087 13.0076C12.9371 13.0005 13.6144 13.6664 13.6214 14.4948C13.6285 15.3232 12.9626 16.0004 12.1342 16.0075L5.52549 16.0638Z" fill="#D9D9D9"/><rect x="4" y="18" width="4" height="4" rx="2" fill="#1E1E1E"/><rect x="17" y="2" width="3" height="4" rx="1.5" fill="#1E1E1E"/><rect x="17" y="8" width="3" height="14" rx="1.5" fill="#D9D9D9"/></svg>` },
]
const userRoutes = [
  { "name": "notifications", "url": "pages/notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "pages/requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "pages/account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HolaClient: 404</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="/assets/app.css" rel="stylesheet">
  </head>
  <body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
      <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
          <h1
              class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
              500
          </h1>
          <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
          <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
          <button onclick="window.history.back()"
              class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
              Back</button>
      </div>
  </body>`
async function getPage(page) {
  //if (wsa == true) {
  //  handler.send(JSON.stringify({ type: "render", page: `/${page}` }));
  //  return new Promise((resolve, reject) => {
  //    handler.onmessage = function (event) {
  //       let data = JSON.parse(event.data);
  //      resolve(data.page.page);
  //     };
  //   });
  //  } else {
  let c;
  if (page.startsWith('/')) {
    c = await fetch(page || "/");
  } else if (page === "") {
    c = await fetch("/");
  } else {
    c = await fetch("/" + (page || "/"));
  }
  return c.text();
  // }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
    <div id="loadOverlay" class="bg-zinc-900/50 backdrop-blur-3xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 h-screen">
        <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
        <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        </h1>
    </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.innerHTML = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.innerHTML = ``;
      b.innerHTML = f.innerHTML;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      let g = await fetch(`obviously-a-404-page`);
      let h = await g.text();
      b.innerHTML = "";
      b.innerHTML = h;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.innerHTML = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      const c = a.indexOf("/", b + 1);
      if (c !== -1) {
        return a.slice(1, c);
      }
      return a.slice(1);
    }
  }
  const b = a.indexOf("/");
  if (b !== -1) {
    const c = a.indexOf("/", b + 1);
    if (c !== -1) {
      return a.slice(0, c);
    }
    return a.slice(0, b);
  }
  return a;
};
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
window.addEventListener('popstate', () => {
  if (window.location.pathname.endsWith("/")) {
    render(window.location.pathname.replace("/", ''))
  } else {
    render(window.location.pathname)
  }
});
async function load() {
  const sidebar = document.getElementById("sidebar");
  const fragment = document.createDocumentFragment();
  const sidebarItems = [];
  const location = window.location.href.replace(window.location.origin, '');;
  const page = location.startsWith("/") ? location.slice(1) : location;
  for (let i of routes) {
    const li = document.createElement("li");
    li.innerHTML = `
          <a onclick="render('${i.url}')" id="nav-${i.url}"
              class="flex items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
              <div id="nav-display-${i.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
              <div class="p-2 flex items-center">
                  ${i.svg}
                  <span class="ml-2 text-lg capitalize">${i.name}</span>
              </div>
          </a>`

    li.style.opacity = 0;
    li.style.transform = 'translateY(20px)';

    fragment.appendChild(li);
    sidebarItems.push(li);
  }

  sidebar.appendChild(fragment);

  document.querySelectorAll("#sidebar li").forEach(item => {
    item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
  });
  document.querySelectorAll("#userDropdown li").forEach(item => {
    item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
  });
  setTimeout(() => {
    sidebarItems.forEach((item, index) => {
      item.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`;
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    });

    const navItem = document.getElementById(`nav-${page}`);
    const navDisplay = document.getElementById(`nav-display-${page}`);

    if (navItem) {
      const sidebarItems = document.querySelectorAll("#sidebar li");
      sidebarItems.forEach(item => {
        item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
      });

      const sidebarItemsU = document.querySelectorAll("#userDropdown li");
      sidebarItemsU.forEach(item => {
        item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
      });

      navItem.classList.add("text-white", "shadow", "bg-zinc-800/90");
      navDisplay.classList.remove("hidden");
    }
    highlight()
  }, 100);
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const fragment = document.createDocumentFragment()

    for (let i of userRoutes) {
      const li = document.createElement("li")
      li.innerHTML = `
      <a onclick="render('${i.url}')" id="nav-${i.url}"
          class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
          <div id="nav-display-${i.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
          <div class="p-2 flex items-center">
              ${i.svg}
              <span class="ml-2 text-lg capitalize">${i.name}</span>
          </div>
      </a>`

      li.style.opacity = 0
      li.style.transform = 'translateY(20px)'

      fragment.appendChild(li)
    }

    c.appendChild(fragment)

    setTimeout(() => {
      const sidebarItems = document.querySelectorAll("#userDropdown li")
      sidebarItems.forEach((item, index) => {
        item.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`
        item.style.opacity = 1
        item.style.transform = 'translateY(0)'
      })
    }, 100)
  } else {
    a.classList.add("hidden")
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease'
    b.style.transform = 'translateY(0)'
    b.style.opacity = 0
    c.innerHTML = ''
  }
}
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
const nodesCache = []
const eggsCache = []
let cache = {}
let rolesCache = []
async function roles() {
  let a = await fetch('/api/admin/permissions/roles')
  let b = await a.json()
  rolesCache = b.data
}
async function nodes() {
  roles()
  try {
    let a = await fetch('/api/admin/pterodactyl/nodes', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      }
    });
    let b = await a.json()
    if (b.success == true) {
      let c = document.getElementById("nodesHolder")
      c.innerHTML = ""
      const e = []
      for (let i of b.data) {
        nodesCache.push(i)
        let d = `
        <div onclick="showNode(${i.attributes.id})" class="w-full bg-zinc-900/50 cursor-pointer border hover:bg-zinc-900/80 hover:duration-300 duration-300 border-zinc-800/80 rounded-xl p-2">
          <div class="flex items-center justify-between">
            <div class="flex flex-col justify-start">
              <h1 class="text-gray-300">${i.attributes.name}</h1>
              <span class="text-gray-400">${format((i.attributes.memory) / 1024)}GB Memory</span>
            </div>
            <div class="flex flex-col justify-end text-right">
              <h1 class="text-gray-300">${i.attributes.relationships.location.attributes.short} - ${i.attributes.relationships.location.attributes.long}</h1>
              <span class="text-gray-400">${(i.attributes.relationships.allocations.data).length} slots</span>
            </div>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) * 100)}%] overflow-hidden rounded-full bg-amber-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.allocated_resources.memory / i.attributes.memory) * 100)}%] overflow-hidden rounded-full bg-sky-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.allocated_resources.memory / i.attributes.memory) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.allocated_resources.disk / i.attributes.disk) * 100)}%] overflow-hidden rounded-full bg-purple-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.allocated_resources.disk / i.attributes.disk) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format(((i.attributes.allocated_resources.disk / i.attributes.disk) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length)) / 3 * 100)}%] overflow-hidden rounded-full bg-rose-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format(((i.attributes.allocated_resources.disk / i.attributes.disk) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length)) / 3 * 100)}%</h1>
          </div>
        </div>`
        e.push(d)
      }
      if (b.data.length == 0) e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16">
      <span class="text-lg text-gray-300">Nothing to view here...</span></div>`)
      c.innerHTML = e
    }
  } catch (error) {
    toastr.error(error)
  }
}
function format(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  return b;
}
function showNode(a) {
  let b = document.getElementById("nodeViewer");
  let c = nodesCache.find(d => d.attributes.id == a);
  let e = []
  for (let i of rolesCache) {
    e.push(`<option value="${i}" class="capitalize p-1 appearance-none hover:">${i}</option>`)
  }
  if (c) {
    let d = `
      <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-4 text-gray-200 flex justify-between w-full items-center">${c.attributes.name}</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4 text-gray-300">
            <div class="flex flex-col">
              <span>Display name:</span>
              <input id="nodeName" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="${c.attributes.name}" placeholder="Optional field">
            </div>
            <div class="flex flex-col">
              <span>Fees:</span>
              <input id="nodePrice" type="number" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="0" placeholder="0 for free">
            </div>
            <div class="flex-col">
              <span>Role:</span>
              <div class="relative">
                <select id="nodeRoles" class="w-full appearance-none capitalize bg-zinc-900 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300">
                  ${e}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="w-full flex flex-col justify-end">
              <button onclick="addNode(${c.attributes.id})" class="w-full justify-self-end hover:bg-zinc-900/80 hover:duration-300 bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 h-max focus:pl-4 focus:duration-300 duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>`;

    if (cache && cache.node && cache.node == a) {
      b.innerHTML = "";
      cache.node = ""
    } else {
      b.innerHTML = d;
      cache.node = a
    }

  }
}
async function addNode(a) {
  let d = document.getElementById("nodeName").value
  let e = document.getElementById("nodePrice").value
  let f = document.getElementById("nodeRoles").value
  let b = await fetch('/api/admin/pterodactyl/nodes', {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: a, name: d, role: f, fees: e })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    nodes()
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function version(a) {
  let b = await fetch(`https://api.github.com/repos/pterodactyl/wings/releases/latest`)
  let c = await b.json()
  let d = (c.tag_name).replace("v", "")
  let e = document.getElementById("nodeVersion")
  if (d == a) {
    e.innerHTML = `<div class="mt-4 w-full rounded-xl p-2 px-4 bg-zinc-900/50 border border-zinc-800/80 text-gray-300">You're using the latest version of Wings (<b>${a}</b>).</div>`;
  } else {
    e.innerHTML = `<div class="mt-4 w-full rounded-xl p-2 px-4 bg-rose-700/50 border border-rose-700 text-rose-300">You're using Wings version <b>${a}</b>, but the latest version is <b>${d}</b>. Please update the wings to prohibit security vulnerabilities!</div>`;
  }
}
async function removeNode(a) {
  let b = await fetch(`/api/admin/pterodactyl/nodes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: parseInt(a) })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    window.location.href = '/admin/pterodactyl'
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function eggs() {
  roles();
  try {
    let a = await fetch('/api/admin/pterodactyl/eggs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let b = await a.json();
    if (b.success === true) {
      let c = document.getElementById("eggsHolder");
      c.innerHTML = "";
      const e = [];
      for (let i of b.data) {
        let f = [];
        for (let j of i.attributes.relationships.eggs.data) {
          eggsCache.push(j)
          f.push(`
          <div onclick="showEgg(${j.attributes.id})" class="w-full flex justify-center items-center backdrop-blur-xl cursor-pointer hover:bg-transparent hover:duration-300 duration-300 shadow-md bg-zinc-900 text-center rounded-full py-2 border border-zinc-800/80">
            ${j.attributes.name}
          </div>
          `);
        }
        let d = `
        <h1 class="text-gray-300 text-left text-lg">${i.attributes.name}</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">${f.join('')}</div>`;
        e.push(d);
      }
      if (b.data.length === 0) {
        e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16"><span class="text-lg text-gray-300">Nothing to view here...</span></div>`);
      }
      c.innerHTML = e.join('');
    }
  } catch (error) {
    toastr.error(error.message);
  }
}
function showEgg(a) {
  let b = document.getElementById("eggViewer");
  let c = eggsCache.find(d => d.attributes.id == a);
  let e = []
  for (let i of rolesCache) {
    e.push(`<option value="${i}" class="capitalize !p-1 !appearance-none !hover:bg-zinc-900 hover:duration-300 duration-300">${i}</option>`)
  }
  if (c) {
    let d = `
      <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-4 text-gray-200 flex justify-between w-full items-center">${c.attributes.name}</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-3 col-span-3 w-full gap-4 text-gray-300">
            <div class="flex flex-col">
              <span>Display name:</span>
              <input id="eggName" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="${c.attributes.name}" placeholder="Optional field">
            </div>
            <div class="flex flex-col">
              <span>Fees:</span>
              <input id="eggPrice" type="number" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="0" placeholder="0 for free">
            </div>
            <div class="flex flex-col">
              <span>Icon:</span>
              <input id="eggIcon" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="https://cdn.holaclientx.tech/assets/eggs/${c.attributes.name.toLowerCase().replace(/\s+/g, "-")}" placeholder="https://cdn.holaclientx.tech/assets/icons/[Egg Name]">
            </div>
            <div class="flex-col">
              <span>Role:</span>
              <div class="relative">
                <select id="eggRole" class="w-full appearance-none capitalize bg-zinc-900 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300">
                  ${e}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="w-full flex flex-col justify-end">
              <button onclick="addEgg(${c.attributes.id}, ${c.attributes.nest})" class="w-full justify-self-end hover:bg-zinc-900/80 hover:duration-300 bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 h-max focus:pl-4 focus:duration-300 duration-300">
                Submit
              </button>
            </div>
          </div>
          <div class="w-full h-max max-h-40 flex items-center justify-center">
            <img id="eggPreview" onerror="this.src='https://cdn.holaclientx.tech/assets/eggs/minecraft'" class="max-h-40 w-auto" src="https://cdn.holaclientx.tech/assets/eggs/${c.attributes.name.toLowerCase().replace(/\s+/g, "-")}">
          </div>
        </div>
      </div>`;
    if (cache && cache.egg && cache.egg == a) {
      b.innerHTML = "";
      cache.egg = ""
    } else {
      b.innerHTML = d;
      cache.egg = a
    }
  }
}
async function addEgg(a, h) {
  let d = document.getElementById("eggName").value
  let e = document.getElementById("eggPrice").value
  let f = document.getElementById("eggRole").value
  let g = document.getElementById("eggIcon").value
  let b = await fetch('/api/admin/pterodactyl/eggs', {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: a, name: d, role: f, fees: e, icon: g, nest: h })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function addons() {
  let a = await fetch('/api/admin/addons')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById("addonsList")
    let d = []
    for ([j, i] of Object.entries(b.data.active)) {
      d.push(`
      <tr onclick="render('admin/addons/${i.name}')" class="cursor-pointer hover:bg-zinc-900/30 hover:duration-300 duration-300">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.display}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.type}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right text-sky-500">
          <a href="${i.author.github}">${i.author.name}</a>
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.runtime.holaclient.version == 1 ? "Yes" : "No"}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          Active
        </td>
      </tr>
    `)
    }
    for ([j, i] of Object.entries(b.data.inactive)) {
      d.push(`
      <tr onclick="render('admin/addons/${i.name}')" class="cursor-pointer hover:bg-zinc-900/30 hover:duration-300 duration-300">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.display}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.type}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right text-sky-500">
          <a href="${i.author.github}">${i.author.name}</a>
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.runtime.holaclient.version == 1 ? "Yes" : "No"}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          Inactive
        </td>
      </tr>
    `)
    }
    c.innerHTML = d.join("")
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function activateAddon(a) {
  let b = await fetch(`/api/admin/addons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      addon: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    document.getElementById("addonStatus").innerHTML = `
    <button onclick="configAddon(${a})" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
    Save changes
</button>
<button onclick="deactivateAddon('${a}')" class="px-4 py-2 rounded-xl bg-rose-900/50 border border-rose-800/80 text-rose-400">
Deactivate
</button>`
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function deactivateAddon(a) {
  let b = await fetch(`/api/admin/addons`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      addon: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    document.getElementById("addonStatus").innerHTML = `
    <button onclick="configAddon(${a})" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
    Save changes
</button>
<button onclick="activateAddon('${a}')" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
Activate
</button>`
  } else {
    toastr.error(c.message, "Error!")
  }
}
window.onload = () => {
  load();
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(i => {
    i.style.zIndex = '1';
    dragElement(i);
  });
}
function dragElement(a) {
  var b = 0, c = 0, d = 0, f = 0;
  a.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    d = e.clientX;
    f = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    b = d - e.clientX;
    c = f - e.clientY;
    d = e.clientX;
    f = e.clientY;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(i => {
      i.style.position = 'absolute';
      i.style.zIndex = '1';
      dragElement(i);
    });
    a.style.zIndex = '2';
    a.classList.add("backdrop-blur-xl")
    a.style.top = (a.offsetTop - c) + "px";
    a.style.left = (a.offsetLeft - b) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
async function configAddon(a) {
  let b = await fetch(`/api/admin/addons/${a}`)
  let c = await b.json()
  if (c.success == true) {
    let d = {}
    for ([i, j] of Object.entries(c.data.settings)) {
      for (let k of j) {
        if (k.value_type == "string") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, e);
        } else if (k.value_type == "number") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, Number(e));
        } else if (k.value_type == "boolean") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, e);
        } else if (k.value_type == "object") {
          let f = {};
          for (let l of k.keys) {
            if (k.keys_value_type == "number") {
              objectify(f, l, Number(document.getElementById(k.identifier + "_" + l.toUpperCase()).value));
            } else {
              objectify(f, l, document.getElementById(k.identifier + "_" + l.toUpperCase()).value);
            }
          }
          objectify(d, k.pointer, f);
        }
      }
    }
    let g = await fetch(`/api/admin/addons/${a}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
    });
    let h = await g.json()
    if (h.success == true) {
      toastr.success(h.message, "Success!")
    } else {
      toastr.error(h.message, "Error!")
    }
  } else {
    toastr.error(c.message, "Error!")
  }
}
function objectify(a, b, c) {
  const d = b.split('.');
  let f = a;
  for (let i = 0; i < d.length - 1; i++) {
    const e = d[i];
    f[e] = f[e] || {};
    f = f[e];
  };
  f[d[d.length - 1]] = c;
}
async function users() {
  const b = await fetch('/api/admin/users');
  const a = (await b.json()).data;
  const c = document.getElementById('usersHolder');
  const d = document.getElementById('b');
  const e = document.getElementById('d');
  const f = document.getElementById('e');
  let g = 1;
  let h = parseInt(e.value);
  function i() {
    const k = (g - 1) * h;
    const l = k + h;
    const m = a.slice(k, l);
    c.innerHTML = m.map(i => `
      <tr onclick="render('admin/users/view/${i.id}')" class="cursor-pointer">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          <img class="object-cover w-12 rounded-xl" src="${i.avatar}">
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.name.first} ${i.name.last}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.username}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-center">
          ${i.email}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.id}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right capitalize">
          ${i.permissions.roles}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.permissions.level}
        </td>
      </tr>
    `).join('');
  }
  function q() {
    const n = Math.ceil(a.length / h);
    const o = [];
    const p = 5;
    let r = Math.max(1, g - Math.floor(p / 2));
    let s = Math.min(r + p - 1, n);
    if (s - r < p - 1) {
      r = Math.max(1, s - p + 1);
    }
    if (r > 1) {
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">1</a>`);
      if (r > 2) {
        o.push(`<span class="text-white px-2 py-2 mx-1">...</span>`);
      }
    }
    for (let i = r; i <= s; i++) {
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">${i}</a>`);
    }
    if (s < n) {
      if (s < n - 1) {
        o.push(`<span class="text-white px-2 py-2 mx-1">...</span>`);
      }
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">${n}</a>`);
    }
    const t = document.createElement('div');
    t.innerHTML = o.join('');
    f.innerHTML = '';
    f.appendChild(t);
    t.querySelectorAll('a').forEach((u, v) => {
      u.addEventListener('click', (w) => {
        w.preventDefault();
        g = r + v;
        i();
        q();
      });
    });
  }
  e.addEventListener('change', () => {
    h = parseInt(e.value);
    g = 1;
    i();
    q();
  });
  i();
  q();
}

async function usersFake() {
  let a = await fetch('/api/admin/users')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`
        <tr>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        <img class="object-cover w-12 rounded-xl" src="${i.avatar}">
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        ${i.name.first} ${i.name.last}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        ${i.username}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-center">
        ${i.email}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
        ${i.id}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right capitalize">
        ${i.permissions.role}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
        ${i.permissions.level}
        </td>
        </tr>
        `)
    }
    document.getElementById("usersHolder").innerHTML = c
  }
}
async function createProduct() {
  let c = {
    name: gv("productName"),
    icon: gv("productIcon"),
    type: gv("productType"),
    coins: gv("productCoins"),
    credits: gv("productCredits"),
    resources: {
      memory: gv("productMemory"),
      disk: gv("productDisk"),
      cpu: gv("productCPU"),
      allocations: gv("productAllocations"),
      backups: gv("productBackups"),
      databases: gv("productDatabases"),
    }
  }
  if (gv("productType") == "server") {
    c["software"] = gv("productSoftware")
  }
  let a = await fetch('/api/admin/products', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(c)
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(b.message, "Error!")
  }
};
function gv(a) {
  return document.getElementById(a).value
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function productsLoad() {
  let x = document.getElementById("productType")
  let y = document.getElementById("productSoftwareHolder")
  let z = document.getElementById("productSoftware")
  let a = await fetch('/api/servers.create')
  let b = await a.json()
  let c = []
  for (let i of b.data.eggs) {
    c.push(`<option value="${i.id}">${i.deployments.name}</option>`)
  }
  z.innerHTML += c.join('')
  document.getElementById("productIcon").addEventListener("input", function () {
    document.getElementById("productIconPreview").src = gv("productIcon")
  });
  x.addEventListener("change", function () {
    if (x.value == "server") {
      y.classList.remove("hidden")
    } else {
      y.classList.add("hidden")
    }
  });
}
async function products() {
  let a = await fetch('/api/admin/products')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data.products) {
      c.push(`<tr onclick="render('admin/products/view/${i.id}')" class="cursor-pointer">
      <td class="p-2 transition-all duration-300 ease-in-out text-left">
          <img src="${i.icon}" class="w-8 h-8 rounded-xl shadow">
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.name}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.type}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.id}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          Coins: ${i.coins}<br>Credits: $${i.credits}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          Active
      </td>
  </tr>`)
    }
    document.getElementById("productsHolder").innerHTML = c.join('')
    let d = []
    for (let i of b.data.categories) {
      d.push(`<tr onclick="render('admin/categories/view/${i.id}')" class="cursor-pointer">
      <td class="p-2 pl-4 transition-all duration-300 ease-in-out text-left">
          ${i.name}
      </td>
      <td class="p-2 pr-4 transition-all duration-300 ease-in-out text-right">
          ${i.id}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.permission}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.products ?? 0}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.status == "true" ? "Active" : "Disabled"}
      </td>
  </tr>`)
    }
    document.getElementById("categoriesHolder").innerHTML = d.join('')
  }
}
async function modifyProduct(a) {
  let d = {
    id: parseInt(a),
    name: gv("productName"),
    icon: gv("productIcon"),
    type: gv("productType"),
    coins: gv("productCoins"),
    credits: gv("productCredits"),
    resources: {
      memory: gv("productMemory"),
      disk: gv("productDisk"),
      cpu: gv("productCPU"),
      allocations: gv("productAllocations"),
      backups: gv("productBackups"),
      databases: gv("productDatabases"),
    }
  }
  if (gv("productType") == "server") {
    d["software"] = gv("productSoftware")
  }
  let b = await fetch('/api/admin/products', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(d)
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function deleteProduct(a) {
  let b = await fetch('/api/admin/products', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: a })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function gateways() {
  let a = await fetch('/api/payments/gateways')
  let b = await a.json()
  let c = []
  for (let i of b.data) {
    c.push(`
    <div onclick="render('admin/addons/${i.name.toLowerCase()}')" class="bg-zinc-900/50 cursor-pointer border border-zinc-800/80 rounded-xl">
      <img src="${i.banner}" class="w-full max-h-64 h-full rounded-xl">
    </div>
    `)
  }
  document.getElementById("gatewaysHolder").innerHTML = c
}
async function invoices() {
  let a = await fetch('/api/payments/invoices')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`
        <tr class="cursor-pointer" onclick="render('admin/billing/invoices/${i.id}')">
          <td class="p-4 transition-all duration-300 ease-in-out text-left">
            ${i.product.name}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
              $${i.price}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${i.id}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${i.user.nickname}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${date(i.date.created)}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${date(i.date.paid)}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
              ${i.paid == true ? "Paid" : "Pending"}
          </td>
        </tr>
      `)
    }
    document.getElementById("invoicesHolder").innerHTML = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function date(a) {
  const b = new Date(a);
  const c = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = c[b.getMonth()];
  const e = b.getDate();
  const f = b.getFullYear();
  const g = new Date().getFullYear();
  return `${d} ${e}${f !== g ? ', ' + f : ''}`;
}
async function updates() {
  let a = await fetch('/api/app/updates/history')
  let b = await a.json()
  let d = document.getElementById("updatesHolder")
  if (b.data.length !== 0) {
    let c = []
    for (let i of b.data) {
      c.push(`
      <div onclick="render('admin/updates/history/${i.identifier}')" class="w-full bg-zinc-900/50 text-lg cursor-pointer text-gray-300 rounded-xl p-4 items-center flex justify-between">
      <span>${i.display}</span>
      <div class="text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    d.innerHTML = c
  } else {
    d.innerHTML = `<div class="w-full  h-40 md:h-52 xl:h-72 flex justify-center items-center"><span class="text-gray-300">No updates available.</span></div>`
  }
}
async function sysInfo() {
  let a = await fetch('/api/app/sysinfo')
  let b = await a.json()
  let c = b.data
  st("sysArch", c.machine.arch)
  st("sysCPU", c.cpu.model)
  st("sysCPUThreads", c.cpu.threads)
  st("sysCPUSpeed", c.cpu.speed)
  st("sysMemTotal", `${format(c.memory.total / 1024)} GB`)
  st("sysMemFree", `${format(c.memory.free / 1024)} GB`)
  st("sysMemApp", `${format(c.memory.app)} MB`)
  st("sysPlatform", c.machine.platform)
  st("sysUptime", `${formatTime(c.machine.uptime)}`)
}
function formatTime(a) {
  const b = Math.floor(a / 60);
  const c = Math.floor(b / 60);
  const d = Math.floor(c / 24);
  const e = Math.floor(d / 30);
  if (e > 0) {
    return `${e} Months`;
  } else if (d > 0) {
    return `${d} Days`;
  } else if (c > 0) {
    return `${c} Hours`;
  } else if (b > 0) {
    return `${b} Minutes`;
  } else {
    return `${a} Seconds`;
  }
}
function loadChart() {
  let options = {
    chart: {
      type: 'line',
      height: 280,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    series: [
      {
        name: 'Registers',
        data: [
          63, 57, 87, 41, 28, 41, 20, 88, 52,
          9, 97, 25, 76, 73, 40, 71, 81, 15,
          78, 29, 24, 58, 84, 64, 6, 2, 0,
          43, 35, 33, 37
        ],
      },
    ],
    colors: ['#323237'],
    grid: {
      borderColor: '',
    },

    fill: {
      colors: undefined,
      opacity: 0.9,
      type: 'solid',
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      },
      image: {
        src: [],
        width: undefined,
        height: undefined
      },
      pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 2,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ["#323237"],
      width: 2,
      dashArray: 0,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark"
    },
    xaxis: {
      categories: [],
      title: {
        text: "",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#d1d5db",
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-title',
        },
      },
      labels: {
        style: {
          colors: ["#d1d5db"],
        }
      },
      lines: {
        show: false,
      }
    },
    yaxis: {
      title: {
        text: '',
      },
      lines: {
        show: false,
      },
      labels: {
        style: {
          colors: ["#d1d5db"],
        }
      },
    },
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const datesArray = [];

  for (let day = 1; day <= new Date(currentYear, currentMonth + 1, 0).getDate(); day++) {
    const date = new Date(currentYear, currentMonth, day);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit' });
    datesArray.push(formattedDate);
  }
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const date = new Date()
  options.xaxis.categories = datesArray;
  options.xaxis.title.text = `${months[date.getMonth()]} ${date.getFullYear()}`;
  options.xaxis.labels.style = { colors: new Array(datesArray.length).fill("#d1d5db") }
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
};
async function stats() {
  let a = await fetch('/api/admin/statistics')
  let b = await a.json()
  if (b.success == true) {
    let c = b.data
    st("statsServers", c.servers)
    st("statsUsers", c.users)
    st("statsQueue", c.queue)
    st("statsNodes", c.nodes)
    st("statsCoins", c.coins)
    st("statsMemory", `${((c.resources.memory.used / c.resources.memory.total) * 100).toFixed(0)}%`)
    st("statsDisk", `${((c.resources.disk.used / c.resources.disk.total) * 100).toFixed(0)}%`)
    st("statsCPU", `${((c.resources.cpu.used / c.resources.cpu.total) * 100).toFixed(0)}%`)
  }
}
function showTab(a) {
  let b = ["overview", "vault", "billing"];
  b.forEach(i => {
    document.getElementById(`user-${i}`).classList.add("hidden");
    document.getElementById(`tab-${i}`).classList.remove("bg-zinc-900", "text-gray-200");
  });
  document.getElementById(`user-${a}`).classList.remove("hidden");
  document.getElementById(`tab-${a}`).classList.add("bg-zinc-900", "text-gray-200");
}
async function billing() {
  let a = await fetch('/api/payments')
  let b = await a.json()
  if (b.success == true) {
    st("revenue", `$${b.data.revenue ?? 0}`)
    st("services", b.data.services)
    st("gateways", b.data.gateways)
  } else {
    toastr.error(b.message, "Error!")
  }
}
function show(a) {
  let b = document.getElementById(a)
  let c = document.getElementById("holder")
  for (let i of c.children) {
    i.classList.add("hidden")
  }
  for (let i of document.getElementById("buttonsHolder").children) {
    i.classList.add("bg-zinc-900/50")
    i.classList.remove("bg-zinc-900")
  }
  b.classList.remove("hidden")
  document.getElementById(`${a}Btn`).classList.remove("bg-zinc-900/50")
  document.getElementById(`${a}Btn`).classList.add("bg-zinc-900")
}
async function createCategory() {
  let a = await fetch('/api/admin/categories', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: gv("categoryName"),
      banner: gv("categoryBanner"),
      permission: gv("categoryPermission"),
      status: gv("categoryStatus"),
    })
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(b.message, "Error!")
  }
};
async function modifyCategory(a) {
  let b = await fetch('/api/admin/categories', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: parseInt(a),
      name: gv("categoryName"),
      banner: gv("categoryBanner"),
      permission: gv("categoryPermission"),
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function deleteCategory(a) {
  let b = await fetch('/api/admin/categories', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: a })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
>>>>>>> 6db1d9f (21-05)
=======
const routes = [
  { "name": "back to home", "href": true, "show": true, "url": "/dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>` },
  { "name": "home", "href": false, "show": true, "url": "admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>` },
  { "name": "users", "href": false, "show": true, "url": "admin/users", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>` },
  //  { "name": "tickets", "href": false, "show": true, "url": "admin/tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
  { "name": "billing", "href": false, "show": true, "url": "admin/billing", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>` },
  { "name": "products", "href": false, "show": true, "url": "admin/products", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>` },
  //  { "name": "permissions", "href": true, "show": true, "url": "/admin/permissions", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
  //  { "name": "emails", "href": false, "show": true, "url": "admin/emails", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>` },
  //  { "name": "posts", "href": false, "show": true, "url": "admin/posts", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" /></svg>` },
  //  { "name": "security", "href": false, "show": true, "url": "admin/security", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` },
  //  { "name": "logs", "href": false, "show": true, "url": "admin/logs", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>` },
  { "name": "settings", "href": false, "show": true, "url": "admin/settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` },
  { "name": "pterodactyl", "href": false, "show": true, "url": "admin/pterodactyl", "svg": `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-8 -pl-1" viewBox="0 0 1200 1200"><defs><style>.prefix__cls-1{fill:#904a04}.prefix__cls-2{fill:#b26734}.prefix__cls-3{fill:#6d3c0f}.prefix__cls-4{fill:#bd6e35}.prefix__cls-5{fill:#a56032}.prefix__cls-6{fill:#3a3a3a}.prefix__cls-8{fill:#515151}.prefix__cls-9{fill:#303030}.prefix__cls-10{fill:#aaa}.prefix__cls-11{fill:#a4571f}.prefix__cls-12{fill:#824009}.prefix__cls-13{fill:#3f3f3f}.prefix__cls-16{fill:#fff}.prefix__cls-17{fill:#91562d}.prefix__cls-18{fill:#232323}.prefix__cls-19{fill:#161616}.prefix__cls-20{fill:#7c441e}.prefix__cls-22{fill:#ffc33e}</style></defs><g id="prefix__Layer_1" data-name="Layer 1"><path class="prefix__cls-1" d="M921.82 627.73s-2 9.07-2 10.58-52.4-4.53-52.4-4.53l2-16.63z"/><path class="prefix__cls-1" d="M912.81 623.68s-133.07-39.78-190.5-29.2-20.22 41.57-20.22 41.57zM385.21 629.24s2 9.07 2 10.58 52.39-4.53 52.39-4.53l-2-16.63z"/><path class="prefix__cls-1" d="M394.22 625.2s133.07-39.79 190.5-29.2 20.22 41.57 20.22 41.57z"/><ellipse class="prefix__cls-2" cx="661.81" cy="721.44" rx="243.34" ry="123.94"/><path class="prefix__cls-2" d="M589.26 603.55l-134.52 21.16L368 638l-23.38 24v42.51l4.43 52.9 73.33 26.45 57.09 3.78c-16.73-170.12 109.79-184.09 109.79-184.09z"/><path class="prefix__cls-3" d="M522.41 738.07s-27.2-42.32-98.24-19.65 39.3 42.32 39.3 42.32zM318.71 1082.18s47-52.34 153.74-60.78c41.82-3.3 32 94.78 32 94.78l71.24-63.61L715 1063.91l56.45 41.57s36.09-89.36 104.91-87.51 110.37 56.44 110.37 56.44l-87.43-276H393.23z"/><path class="prefix__cls-2" d="M780.61 864.53c-28.25 116.39-35.37 236-124.87 236-89.31 0-95.6-107.1-120.18-226.8-22.46-109.4 48.38-182.41 120.18-182.41a131.4 131.4 0 0165.58 18.13c45.25 26.39 77.39 80.55 59.29 155.08z"/><path class="prefix__cls-4" d="M744.93 895.92c0 84.15-58.69 177.73-102.78 158.55-46.3-20.16-70.81-80-80-167.2-8.77-83.21 44.22-144.88 90.28-144.88s92.5 69.37 92.5 153.53z"/><path class="prefix__cls-2" d="M717.77 602l134.52 21.2L939 636.44l23.38 24v42.51L958 755.82l-73.33 26.45-57.09 3.78C844.29 616 717.77 602 717.77 602z"/><path class="prefix__cls-5" d="M563.56 608.08l52.5 113.36L669 777l43-60 49.56-108.92-72-12.09-70.1 5.19-55.9 6.9z"/><path class="prefix__cls-6" d="M773.17 783.34s13.81 71.11-13.4 80.18-52.9-58.95-52.9-58.95h-57.43l-1.52-36.27 93.71-18.14z"/><path class="prefix__cls-6" d="M541.09 783.34s-13.8 71.11 13.4 80.18 52.9-58.95 52.9-58.95h57.44l1.51-36.27-93.71-18.14z"/><path fill="#444" d="M568.1 797.01l13.6-9.06 6.05-7.56H726.8l4.53 7.56 12.09 6.04-9.07-42.32-92.19-6.04-61.97 6.04-12.09 45.34z"/><path class="prefix__cls-8" d="M772.48 760.11s7.55 32.49-15.12 39.26-30.26-40.1-30.26-40.1l16.66-4.58zM540.89 760.11s-7.56 32.49 15.11 39.26 30.26-40.1 30.26-40.1l-16.66-4.58z"/><path class="prefix__cls-9" d="M686.19 732.02h61.77l25.69 28.72-27.2 1.51-33.26-4.53-25.69 3.02-1.31-28.72zM628.55 732.02h-61.77l-25.69 28.72 27.21 1.51 33.25-4.53 25.69 3.02 1.31-28.72z"/><path class="prefix__cls-8" d="M687.5 760.74h-61.97l-13.6-28.72h92.2l-16.63 28.72z"/><circle class="prefix__cls-10" cx="685.99" cy="742.6" r="4.53"/><rect class="prefix__cls-10" x="649.71" y="751.67" width="15.11" height="3.02" rx="1"/><path class="prefix__cls-6" d="M559.56 793.1a79.75 79.75 0 009-27.76c.12-1-1.39-1-1.51 0a77.43 77.43 0 01-8.75 27c-.46.85.84 1.62 1.31.76zM754.31 792.34a77.41 77.41 0 01-8.74-27c-.13-1-1.64-1-1.51 0a79.33 79.33 0 009 27.76c.46.86 1.76.1 1.3-.76z"/><path class="prefix__cls-11" d="M602.82 745.76c-132.25 128.47-160.43 380.45-160.43 380.45s-25.51-114.06-51-118.31c-34-5.67-71.95 69.74-71.95 69.74s34.32-140.44 22-189.87c-11.57-46.59-74.6-117.53-36.82-204.43 0 0 33.58-55 118.44-63 0 0-261.1 79.46 172.81 121.66h14.48z"/><path class="prefix__cls-1" d="M567.57 761.87c-105.22 102.21-126.14 312.31-126.14 312.31s-23.94-90.75-44.23-94.13c-27.05-4.51-59.07 54.76-59.07 54.76s36.2-113.48 19.36-150.34C308.38 777 305.36 747.88 309.93 719.6c0 0 .08-51.55 49.69-73.86 0 0-142.7 76.88 202.53 110.46h11.39z"/><path class="prefix__cls-3" d="M793.68 736.56s27.21-42.32 98.25-19.65-39.3 42.32-39.3 42.32z"/><path class="prefix__cls-11" d="M704.21 744.24c132.25 128.48 160.43 380.46 160.43 380.46s25.51-114.07 51-118.32c34-5.66 72 69.75 72 69.75s-34.32-140.44-22-189.87c11.57-46.59 74.6-117.53 36.82-204.44 0 0-33.58-55-118.44-63 0 0 261.1 79.46-172.81 121.66h-14.56z"/><path class="prefix__cls-1" d="M739.46 760.36c105.22 102.21 126.14 312.31 126.14 312.31s23.93-90.75 44.22-94.14c27.06-4.51 59.08 54.77 59.08 54.77S932.69 919.82 949.53 883c49.12-107.52 52.14-136.59 47.57-164.87 0 0-.08-51.55-49.69-73.86 0 0 142.7 76.88-202.54 110.45h-11.38z"/><path class="prefix__cls-5" d="M487 619s21.91 42 107 42c4 0-8.89-6.4-8.89-6.4s-54.91 3.14-89.39-36.34C492 614 487 619 487 619z"/><path class="prefix__cls-11" d="M382.68 719.43v38.84l18.86-33.14-18.86-5.7zM370.89 711.17v28.08l13.64-23.97-13.64-4.11zM924.35 717.92v38.84l-18.86-33.14 18.86-5.7zM936.13 709.65v28.09l-13.63-23.97 13.63-4.12z"/><path class="prefix__cls-12" d="M566.97 594.28l-3.74 13.36 32.07.44 1.51-12.09-29.84-1.71zM762.51 593.34l-1.1 14.99-27.4-5.3 1.86-11.57 26.64 1.88z"/><path class="prefix__cls-2" d="M613.09 1109c-12.68 37.21-21.62 63.4-41.79 63.4s-41.1-36.76-41.1-76.07 18.34-89.89 38.52-89.89 58.54 60.97 44.37 102.56z"/><path class="prefix__cls-2" d="M592.69 1188.11l-41.97-3.82 10.92-31.66 27.57-1.12 3.48 36.6z"/><path class="prefix__cls-11" d="M551.92 1180.8l40.58 5.38 18.41 45.82c-45.11-49.36-90.21-7.08-90.21-7.08z"/><path class="prefix__cls-11" d="M554.24 1201.83s-13.69 20.19-9 30.17l15.11-15.08 17.82-15.09z"/><path class="prefix__cls-2" d="M698.85 1101.89c11.18 37.68 15.83 65.09 36 65.09s41.1-36.76 41.1-76.07S757.6 1001 737.43 1001s-50.86 59.49-38.58 100.89z"/><path class="prefix__cls-2" d="M713.46 1182.72l41.96-3.82-10.92-31.66-27.56-1.12-3.48 36.6z"/><path class="prefix__cls-11" d="M754.22 1175.41l-40.58 5.38-18.4 45.82c45.1-49.36 90.21-7.09 90.21-7.09z"/><path class="prefix__cls-11" d="M748.5 1197.17s13.7 20.19 9 30.17l-15.12-15.09-17.82-15.08z"/><rect class="prefix__cls-13" x="569.61" y="657.45" width="43.83" height="19.65" rx="6.17"/><path class="prefix__cls-9" d="M800.74 296.09s0-10.5-21.38-13.65c-8.72-1.29-59.12-.7-59.12-.7l-15.68-34.6s69.52.8 91.42 11.49S813 286 811 303.1M485.42 316.6s-1.39-10.41 19.43-16.31c8.48-2.4 58.53-8.35 58.53-8.35L583.82 255s-78.21 10.41-98.54 23.84-13.3 29.32-9.12 46"/><path class="prefix__cls-2" d="M560.77 567.57c-1.3 4 4.4 10.16 6.51 12.81 16.61 20.85 29.62 44.28 44.26 66.55 6.38 9.71 46.93 69.27 59.36 56.05 21.16-22.5 36.75-50.25 52-77 16-28.08 30.2-57.4 39.11-88.55a8.31 8.31 0 00.46-3.23c-1-8.41-37.28-9.1-44.15-10.15l-20.82-3.2c-1.88-.29-6.68-2-8.53-1.31l-97.35 36.15-19.31 7.17c-2.64 1-9.83 1.41-11.26 4.11a3.76 3.76 0 00-.28.6z"/><path class="prefix__cls-11" d="M574.86 574.98l57.51 90.54 14.12 12.45 17.74 15.5 17.6-17.8 50.32-79.01 26.22-62.58-73.1-10.1-110.41 51z"/><path fill="#cb63d3" d="M721.26 601.57l-122.42-6.04 31.74 64.99 12.09 12.09 16.62 13.6 10.58-9.07 7.56-7.55 7.56-10.58"/><path fill="#b25f8c" d="M633.6 643.38l10.58 18.14 13.6 13.6 51.21-45.34-58.76-6.05-16.63 19.65z"/><path class="prefix__cls-4" d="M671.69 49.44c-4.64.63-9.72 6.23-12 9-32.3 39.35-51.93 87.41-68.9 135.4-9.21 26.1-17.79 52.46-27.79 78.33-9.7 25.24-23.21 49-31.84 74.42-9.77 28.78-13.29 59.55-11.61 89.86 2.42 43.68 8.59 97.89 40.23 131.13 48.62 51.07 83.3 87.35 83.3 87.35l20.67 16.32 21.13-19s56.42-50.09 62.55-72.25 6.44-20.54 11.63-32.24 13.62-12.48 20-45.08c15.41-78.47-12.25-158.34-39.58-231.26-15.46-41.27-31.89-82.35-42.36-125.16-4.51-18.47-7.89-37.18-11.68-55.81-1.9-9.3-3.88-18.59-6.15-27.81-.8-3.23-1.12-11.16-4.6-12.78a5.4 5.4 0 00-3-.42z"/><path class="prefix__cls-2" d="M675.74 50.6c3.58 4.67-1.86 8.25-1.34 13.89q.95 10.23 2.16 20.44 2.52 21.06 6.18 41.95a772.75 772.75 0 0018.84 81.32c21.39 73.88 54.09 146.09 56 223 2 78.41-28.81 154.7-71.79 220.32 46-39.47 79.71-83.64 94.25-152.73 8.09-38.38 4.23-79.54-4.21-117.82-4.13-18.72-13.35-35.66-18.29-53.9-5.41-20-11.93-39.73-18.83-59.28-13.81-39.14-29.25-77.74-40.84-117.63-7.7-26.5-10.21-54.2-16.93-81-.45-1.76-2.47-22.71-9.26-19.26"/><path class="prefix__cls-16" d="M594.1 472.41c.74 11.43-7.13 21.25-17.59 21.93s-19.53-8-20.28-19.47 7.66-13.14 18.12-13.82 19-.05 19.75 11.36zM760 462.52c.78 11.94-7.88 22.21-19.33 23s-21.37-8.33-22.14-20.26 8.4-14.1 19.86-14.84 20.82.17 21.61 12.1z"/><ellipse class="prefix__cls-17" cx="622.99" cy="559.47" rx="5.17" ry="10.14" transform="rotate(-18.07 623.187 559.602)"/><ellipse class="prefix__cls-17" cx="695.17" cy="559.47" rx="10.14" ry="5.17" transform="rotate(-71.93 695.1 559.469)"/><circle class="prefix__cls-18" cx="580.95" cy="482.63" r="7.67"/><circle class="prefix__cls-18" cx="735.18" cy="472.41" r="7.75"/><rect class="prefix__cls-13" x="775.83" y="376.94" width="27.21" height="120.91" rx="3.69" transform="rotate(-3.72 789.88 437.638)"/><path class="prefix__cls-19" transform="rotate(-3.72 812.459 435.289)" d="M807.48 381.52h9.07v107.31h-9.07z"/><rect class="prefix__cls-19" x="816.62" y="388.28" width="15.11" height="95.22" rx="3" transform="rotate(-3.72 824.607 436.146)"/><path class="prefix__cls-9" d="M797.4 500.49l-.69-21.16 5.44-9.44-5.39-82.95-9-10.02-.94-2.97 11.97-2.29 7.84 4.03 7.65 117.65-7.15 6.52-9.73.63zM807.93 369.55l4.38 11.83 7.17 110.1-4.81 7.89 13.38-3.9-7.85-120.66-12.27-5.26zM800.93 295.99l10.31 4.34 5.32 66.73-9.06 1.44-6.57-72.51z"/><path class="prefix__cls-9" d="M807.74 369.56l-.06-24.23 12.52 29.48-12.46-5.25z"/><rect class="prefix__cls-9" x="466.97" y="474.71" width="10.58" height="22.67" rx="2.77" transform="rotate(-3.72 472.492 486.209)"/><path class="prefix__cls-9" d="M465.75 467.54S389.3 690.62 594.51 677.27L599 677l-.88-13.58S430.89 700 472.24 497.41c6.63-32.48-1.87-28.66-1.87-28.66z"/><rect class="prefix__cls-13" x="501.33" y="394.8" width="27.21" height="120.91" rx="3.69" transform="rotate(176.28 514.94 455.244)"/><path class="prefix__cls-19" transform="rotate(176.28 492.267 455.965)" d="M487.73 402.31h9.07v107.31h-9.07z"/><rect class="prefix__cls-19" x="472.74" y="410.65" width="15.11" height="95.22" rx="3" transform="rotate(176.28 480.3 458.254)"/><path class="prefix__cls-9" d="M515.21 518.85l-2.05-21.07-6.62-8.66-5.4-82.95 7.62-11.1.55-3.07-12.17-.72-7.25 5.02 7.66 117.64 7.93 5.54 9.73-.63zM487.81 390.37l-2.82 12.3 7.16 110.11 5.79 7.19-13.77-2.13-7.85-120.66 11.49-6.81zM485.6 316.5l-9.52 7.64 2.84 64.88 9.18.25-2.5-72.77z"/><path class="prefix__cls-9" d="M487.99 390.36l-3.07-24.03-8.6 30.85 11.67-6.82z"/><path class="prefix__cls-20" d="M526.29 367.2c7.4-5 17-5.67 25.6-6.74 10-1.22 20-1.81 29.79.8 8.46 2.26 12.08-10.86 3.61-13.12-11.6-3.09-23.42-2.58-35.22-1.05-10.48 1.36-21.66 2.26-30.65 8.36-7.2 4.89-.4 16.68 6.87 11.75zM714.85 356.31a78.59 78.59 0 0151.15-3.05c8.44 2.36 12-10.76 3.61-13.12a90.81 90.81 0 00-58.36 3.06c-3.43 1.38-5.76 4.52-4.75 8.36.86 3.24 5 6.13 8.37 4.75z"/><g id="prefix__Glasses"><path class="prefix__cls-18" d="M678.15 451.06c-.36-7-13-15.45-28-14.69s-26.76 10.41-26.41 17.43 12-3.51 27.08-4.26 27.68 8.55 27.33 1.52z"/><ellipse class="prefix__cls-16" cx="574.11" cy="443.03" rx="53.17" ry="73.48" transform="rotate(-2.88 573.807 442.93)"/><ellipse class="prefix__cls-16" cx="726.85" cy="435.35" rx="53.17" ry="73.48" transform="rotate(-2.88 726.655 435.23)"/><path d="M623.18 443.41l54.44-2.74" fill="none"/><path class="prefix__cls-18" d="M541.67 391.16C533.46 403 528.51 409.42 523 409.7s-10.83-9.8-11.43-21.85 34.53-13.84 40.09-14.12-8.1 14.69-9.99 17.43zM751.2 380.62c9.35 11 14.92 16.85 20.48 16.57s9.79-10.83 9.19-22.88-35.75-10.31-41.31-10 9.44 13.78 11.64 16.31z"/></g><circle class="prefix__cls-18" cx="576.26" cy="485.84" r="18"/><circle class="prefix__cls-18" cx="731.99" cy="478.01" r="19.71"/><circle class="prefix__cls-16" cx="580.18" cy="494.28" r="4.93"/><circle class="prefix__cls-16" cx="727.07" cy="487.72" r="5.4"/><ellipse class="prefix__cls-22" cx="518.2" cy="386.11" rx="3.29" ry="1.44" transform="rotate(-19.44 518.092 386.054)"/><ellipse class="prefix__cls-22" cx="774.2" cy="373.11" rx="1.44" ry="3.29" transform="rotate(-64.44 774.151 373.114)"/><path class="prefix__cls-12" d="M487 619.64s-5.33-11.84-5.87-15.72c-.13-.92 6.55-1.26 6.55-1.26L496 618z"/></g></svg>` },
  { "name": "themes", "href": false, "show": true, "url": "admin/themes", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>` },
  { "name": "addons", "href": false, "show": true, "url": "admin/addons", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "updates", "href": false, "show": true, "url": "admin/updates", "svg": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.67742 20.5672C2.53141 18.0211 0.758027 12.7583 2.71678 8.14385C4.87472 3.06005 10.7453 0.688166 15.8291 2.84612C20.9129 5.00407 23.2848 10.8746 21.1269 15.9584C20.2837 17.9449 18.8736 19.5173 17.1651 20.5672" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 16V20.4C17 20.7314 17.2686 21 17.6 21H22" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22.01L12.01 21.9989" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { "name": "holaclient", "href": false, "show": true, "url": "admin/app", "svg": `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.5C4 2.67157 4.67157 2 5.5 2C6.32843 2 7 2.67157 7 3.5V14.5C7 15.3284 6.32843 16 5.5 16C4.67157 16 4 15.3284 4 14.5V3.5Z" fill="#D9D9D9"/><path d="M5.52549 16.0638C4.69709 16.0708 4.01982 15.405 4.01277 14.5766C4.00572 13.7482 4.67154 13.0709 5.49994 13.0639L12.1087 13.0076C12.9371 13.0005 13.6144 13.6664 13.6214 14.4948C13.6285 15.3232 12.9626 16.0004 12.1342 16.0075L5.52549 16.0638Z" fill="#D9D9D9"/><rect x="4" y="18" width="4" height="4" rx="2" fill="#1E1E1E"/><rect x="17" y="2" width="3" height="4" rx="1.5" fill="#1E1E1E"/><rect x="17" y="8" width="3" height="14" rx="1.5" fill="#D9D9D9"/></svg>` },
]
const userRoutes = [
  { "name": "notifications", "url": "pages/notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "pages/requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "pages/account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HolaClient: 404</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="/assets/app.css" rel="stylesheet">
  </head>
  <body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
      <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
          <h1
              class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
              500
          </h1>
          <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
          <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
          <button onclick="window.history.back()"
              class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
              Back</button>
      </div>
  </body>`
async function getPage(page) {
  //if (wsa == true) {
  //  handler.send(JSON.stringify({ type: "render", page: `/${page}` }));
  //  return new Promise((resolve, reject) => {
  //    handler.onmessage = function (event) {
  //       let data = JSON.parse(event.data);
  //      resolve(data.page.page);
  //     };
  //   });
  //  } else {
  let c;
  if (page.startsWith('/')) {
    c = await fetch(page || "/");
  } else if (page === "") {
    c = await fetch("/");
  } else {
    c = await fetch("/" + (page || "/"));
  }
  return c.text();
  // }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
    <div id="loadOverlay" class="bg-zinc-900/50 backdrop-blur-3xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 h-screen">
        <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
        <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        </h1>
    </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.innerHTML = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.innerHTML = ``;
      b.innerHTML = f.innerHTML;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      let g = await fetch(`obviously-a-404-page`);
      let h = await g.text();
      b.innerHTML = "";
      b.innerHTML = h;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.innerHTML = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      const c = a.indexOf("/", b + 1);
      if (c !== -1) {
        return a.slice(1, c);
      }
      return a.slice(1);
    }
  }
  const b = a.indexOf("/");
  if (b !== -1) {
    const c = a.indexOf("/", b + 1);
    if (c !== -1) {
      return a.slice(0, c);
    }
    return a.slice(0, b);
  }
  return a;
};
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
window.addEventListener('popstate', () => {
  if (window.location.pathname.endsWith("/")) {
    render(window.location.pathname.replace("/", ''))
  } else {
    render(window.location.pathname)
  }
});
async function load() {
  const sidebar = document.getElementById("sidebar");
  const fragment = document.createDocumentFragment();
  const sidebarItems = [];
  const location = window.location.href.replace(window.location.origin, '');;
  const page = location.startsWith("/") ? location.slice(1) : location;
  for (let i of routes) {
    const li = document.createElement("li");
    li.innerHTML = `
          <a onclick="render('${i.url}')" id="nav-${i.url}"
              class="flex items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
              <div id="nav-display-${i.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
              <div class="p-2 flex items-center">
                  ${i.svg}
                  <span class="ml-2 text-lg capitalize">${i.name}</span>
              </div>
          </a>`

    li.style.opacity = 0;
    li.style.transform = 'translateY(20px)';

    fragment.appendChild(li);
    sidebarItems.push(li);
  }

  sidebar.appendChild(fragment);

  document.querySelectorAll("#sidebar li").forEach(item => {
    item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
  });
  document.querySelectorAll("#userDropdown li").forEach(item => {
    item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
  });
  setTimeout(() => {
    sidebarItems.forEach((item, index) => {
      item.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`;
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    });

    const navItem = document.getElementById(`nav-${page}`);
    const navDisplay = document.getElementById(`nav-display-${page}`);

    if (navItem) {
      const sidebarItems = document.querySelectorAll("#sidebar li");
      sidebarItems.forEach(item => {
        item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
      });

      const sidebarItemsU = document.querySelectorAll("#userDropdown li");
      sidebarItemsU.forEach(item => {
        item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
      });

      navItem.classList.add("text-white", "shadow", "bg-zinc-800/90");
      navDisplay.classList.remove("hidden");
    }
    highlight()
  }, 100);
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const fragment = document.createDocumentFragment()

    for (let i of userRoutes) {
      const li = document.createElement("li")
      li.innerHTML = `
      <a onclick="render('${i.url}')" id="nav-${i.url}"
          class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
          <div id="nav-display-${i.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
          <div class="p-2 flex items-center">
              ${i.svg}
              <span class="ml-2 text-lg capitalize">${i.name}</span>
          </div>
      </a>`

      li.style.opacity = 0
      li.style.transform = 'translateY(20px)'

      fragment.appendChild(li)
    }

    c.appendChild(fragment)

    setTimeout(() => {
      const sidebarItems = document.querySelectorAll("#userDropdown li")
      sidebarItems.forEach((item, index) => {
        item.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`
        item.style.opacity = 1
        item.style.transform = 'translateY(0)'
      })
    }, 100)
  } else {
    a.classList.add("hidden")
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease'
    b.style.transform = 'translateY(0)'
    b.style.opacity = 0
    c.innerHTML = ''
  }
}
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
const nodesCache = []
const eggsCache = []
let cache = {}
let rolesCache = []
async function roles() {
  let a = await fetch('/api/admin/permissions/roles')
  let b = await a.json()
  rolesCache = b.data
}
async function nodes() {
  roles()
  try {
    let a = await fetch('/api/admin/pterodactyl/nodes', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      }
    });
    let b = await a.json()
    if (b.success == true) {
      let c = document.getElementById("nodesHolder")
      c.innerHTML = ""
      const e = []
      for (let i of b.data) {
        nodesCache.push(i)
        let d = `
        <div onclick="showNode(${i.attributes.id})" class="w-full bg-zinc-900/50 cursor-pointer border hover:bg-zinc-900/80 hover:duration-300 duration-300 border-zinc-800/80 rounded-xl p-2">
          <div class="flex items-center justify-between">
            <div class="flex flex-col justify-start">
              <h1 class="text-gray-300">${i.attributes.name}</h1>
              <span class="text-gray-400">${format((i.attributes.memory) / 1024)}GB Memory</span>
            </div>
            <div class="flex flex-col justify-end text-right">
              <h1 class="text-gray-300">${i.attributes.relationships.location.attributes.short} - ${i.attributes.relationships.location.attributes.long}</h1>
              <span class="text-gray-400">${(i.attributes.relationships.allocations.data).length} slots</span>
            </div>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) * 100)}%] overflow-hidden rounded-full bg-amber-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.allocated_resources.memory / i.attributes.memory) * 100)}%] overflow-hidden rounded-full bg-sky-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.allocated_resources.memory / i.attributes.memory) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.allocated_resources.disk / i.attributes.disk) * 100)}%] overflow-hidden rounded-full bg-purple-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.allocated_resources.disk / i.attributes.disk) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format(((i.attributes.allocated_resources.disk / i.attributes.disk) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length)) / 3 * 100)}%] overflow-hidden rounded-full bg-rose-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format(((i.attributes.allocated_resources.disk / i.attributes.disk) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length)) / 3 * 100)}%</h1>
          </div>
        </div>`
        e.push(d)
      }
      if (b.data.length == 0) e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16">
      <span class="text-lg text-gray-300">Nothing to view here...</span></div>`)
      c.innerHTML = e.join('')
    }
  } catch (error) {
    toastr.error(error)
  }
}
function format(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  return b;
}
function showNode(a) {
  let b = document.getElementById("nodeViewer");
  let c = nodesCache.find(d => d.attributes.id == a);
  let e = []
  for (let i of rolesCache) {
    e.push(`<option value="${i}" class="capitalize p-1 appearance-none hover:">${i}</option>`)
  }
  if (c) {
    let d = `
      <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-4 text-gray-200 flex justify-between w-full items-center">${c.attributes.name}</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4 text-gray-300">
            <div class="flex flex-col">
              <span>Display name:</span>
              <input id="nodeName" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="${c.attributes.name}" placeholder="Optional field">
            </div>
            <div class="flex flex-col">
              <span>Fees:</span>
              <input id="nodePrice" type="number" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="0" placeholder="0 for free">
            </div>
            <div class="flex-col">
              <span>Role:</span>
              <div class="relative">
                <select id="nodeRoles" class="w-full appearance-none capitalize bg-zinc-900 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300">
                  ${e}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="w-full flex flex-col justify-end">
              <button onclick="addNode(${c.attributes.id})" class="w-full justify-self-end hover:bg-zinc-900/80 hover:duration-300 bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 h-max focus:pl-4 focus:duration-300 duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>`;

    if (cache && cache.node && cache.node == a) {
      b.innerHTML = "";
      cache.node = ""
    } else {
      b.innerHTML = d;
      cache.node = a
    }

  }
}
async function addNode(a) {
  let d = document.getElementById("nodeName").value
  let e = document.getElementById("nodePrice").value
  let f = document.getElementById("nodeRoles").value
  let b = await fetch('/api/admin/pterodactyl/nodes', {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: a, name: d, role: f, fees: e })
  });
  let c = await b.json()
  if (c.success == true) {
    await nodes()
    document.getElementById("nodeViewer").innerHTML = ""
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function version(a) {
  let b = await fetch(`https://api.github.com/repos/pterodactyl/wings/releases/latest`)
  let c = await b.json()
  let d = (c.tag_name).replace("v", "")
  let e = document.getElementById("nodeVersion")
  if (d == a) {
    e.innerHTML = `<div class="mt-4 w-full rounded-xl p-2 px-4 bg-zinc-900/50 border border-zinc-800/80 text-gray-300">You're using the latest version of Wings (<b>${a}</b>).</div>`;
  } else {
    e.innerHTML = `<div class="mt-4 w-full rounded-xl p-2 px-4 bg-rose-700/50 border border-rose-700 text-rose-300">You're using Wings version <b>${a}</b>, but the latest version is <b>${d}</b>. Please update the wings to prohibit security vulnerabilities!</div>`;
  }
}
async function removeNode(a) {
  let b = await fetch(`/api/admin/pterodactyl/nodes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: parseInt(a) })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    window.location.href = '/admin/pterodactyl'
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function eggs() {
  roles();
  try {
    let a = await fetch('/api/admin/pterodactyl/eggs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let b = await a.json();
    if (b.success === true) {
      let c = document.getElementById("eggsHolder");
      c.innerHTML = "";
      const e = [];
      for (let i of b.data) {
        let f = [];
        for (let j of i.attributes.relationships.eggs.data) {
          eggsCache.push(j)
          f.push(`
          <div onclick="showEgg(${j.attributes.id})" class="w-full flex justify-center items-center backdrop-blur-xl cursor-pointer hover:bg-transparent hover:duration-300 duration-300 shadow-md bg-zinc-900 text-center rounded-full py-2 border border-zinc-800/80">
            ${j.attributes.name}
          </div>
          `);
        }
        let d = `
        <h1 class="text-gray-300 text-left text-lg">${i.attributes.name}</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">${f.join('')}</div>`;
        e.push(d);
      }
      if (b.data.length === 0) {
        e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16"><span class="text-lg text-gray-300">Nothing to view here...</span></div>`);
      }
      c.innerHTML = e.join('');
    }
  } catch (error) {
    toastr.error(error.message);
  }
}
function showEgg(a) {
  let b = document.getElementById("eggViewer");
  let c = eggsCache.find(d => d.attributes.id == a);
  let e = []
  for (let i of rolesCache) {
    e.push(`<option value="${i}" class="capitalize !p-1 !appearance-none !hover:bg-zinc-900 hover:duration-300 duration-300">${i}</option>`)
  }
  if (c) {
    let d = `
      <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-4 text-gray-200 flex justify-between w-full items-center">${c.attributes.name}</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-3 col-span-3 w-full gap-4 text-gray-300">
            <div class="flex flex-col">
              <span>Display name:</span>
              <input id="eggName" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="${c.attributes.name}" placeholder="Optional field">
            </div>
            <div class="flex flex-col">
              <span>Fees:</span>
              <input id="eggPrice" type="number" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="0" placeholder="0 for free">
            </div>
            <div class="flex flex-col">
              <span>Icon:</span>
              <input id="eggIcon" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="https://cdn.holaclientx.tech/assets/eggs/${c.attributes.name.toLowerCase().replace(/\s+/g, "-")}" placeholder="https://cdn.holaclientx.tech/assets/icons/[Egg Name]">
            </div>
            <div class="flex-col">
              <span>Role:</span>
              <div class="relative">
                <select id="eggRole" class="w-full appearance-none capitalize bg-zinc-900 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300">
                  ${e}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="w-full flex flex-col justify-end">
              <button onclick="addEgg(${c.attributes.id}, ${c.attributes.nest})" class="w-full justify-self-end hover:bg-zinc-900/80 hover:duration-300 bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 h-max focus:pl-4 focus:duration-300 duration-300">
                Submit
              </button>
            </div>
          </div>
          <div class="w-full h-max max-h-40 flex items-center justify-center">
            <img id="eggPreview" onerror="this.src='https://cdn.holaclientx.tech/assets/eggs/minecraft'" class="max-h-40 w-auto" src="https://cdn.holaclientx.tech/assets/eggs/${c.attributes.name.toLowerCase().replace(/\s+/g, "-")}">
          </div>
        </div>
      </div>`;
    if (cache && cache.egg && cache.egg == a) {
      b.innerHTML = "";
      cache.egg = ""
    } else {
      b.innerHTML = d;
      cache.egg = a
    }
  }
}
async function addEgg(a, h) {
  let d = document.getElementById("eggName").value
  let e = document.getElementById("eggPrice").value
  let f = document.getElementById("eggRole").value
  let g = document.getElementById("eggIcon").value
  let b = await fetch('/api/admin/pterodactyl/eggs', {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: a, name: d, role: f, fees: e, icon: g, nest: h })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function addons() {
  let a = await fetch('/api/admin/addons')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById("addonsList")
    let d = []
    for ([j, i] of Object.entries(b.data.active)) {
      d.push(`
      <tr onclick="render('admin/addons/${i.name}')" class="cursor-pointer hover:bg-zinc-900/30 hover:duration-300 duration-300">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.display}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.type}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right text-sky-500">
          <a href="${i.author.github}">${i.author.name}</a>
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.runtime.holaclient.version == 1 ? "Yes" : "No"}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          Active
        </td>
      </tr>
    `)
    }
    for ([j, i] of Object.entries(b.data.inactive)) {
      d.push(`
      <tr onclick="render('admin/addons/${i.name}')" class="cursor-pointer hover:bg-zinc-900/30 hover:duration-300 duration-300">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.display}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.type}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right text-sky-500">
          <a href="${i.author.github}">${i.author.name}</a>
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.runtime.holaclient.version == 1 ? "Yes" : "No"}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          Inactive
        </td>
      </tr>
    `)
    }
    c.innerHTML = d.join("")
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function activateAddon(a) {
  let b = await fetch(`/api/admin/addons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      addon: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    document.getElementById("addonStatus").innerHTML = `
    <button onclick="configAddon(${a})" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
    Save changes
</button>
<button onclick="deactivateAddon('${a}')" class="px-4 py-2 rounded-xl bg-rose-900/50 border border-rose-800/80 text-rose-400">
Deactivate
</button>`
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function deactivateAddon(a) {
  let b = await fetch(`/api/admin/addons`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      addon: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    document.getElementById("addonStatus").innerHTML = `
    <button onclick="configAddon(${a})" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
    Save changes
</button>
<button onclick="activateAddon('${a}')" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
Activate
</button>`
  } else {
    toastr.error(c.message, "Error!")
  }
}
window.onload = () => {
  load();
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(i => {
    i.style.zIndex = '1';
    dragElement(i);
  });
}
function dragElement(a) {
  var b = 0, c = 0, d = 0, f = 0;
  a.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    d = e.clientX;
    f = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    b = d - e.clientX;
    c = f - e.clientY;
    d = e.clientX;
    f = e.clientY;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(i => {
      i.style.position = 'absolute';
      i.style.zIndex = '1';
      dragElement(i);
    });
    a.style.zIndex = '2';
    a.classList.add("backdrop-blur-xl")
    a.style.top = (a.offsetTop - c) + "px";
    a.style.left = (a.offsetLeft - b) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
async function configAddon(a) {
  let b = await fetch(`/api/admin/addons/${a}`)
  let c = await b.json()
  if (c.success == true) {
    let d = {}
    for ([i, j] of Object.entries(c.data.settings)) {
      for (let k of j) {
        if (k.value_type == "string") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, e);
        } else if (k.value_type == "number") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, Number(e));
        } else if (k.value_type == "boolean") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, e);
        } else if (k.value_type == "object") {
          let f = {};
          for (let l of k.keys) {
            if (k.keys_value_type == "number") {
              objectify(f, l, Number(document.getElementById(k.identifier + "_" + l.toUpperCase()).value));
            } else {
              objectify(f, l, document.getElementById(k.identifier + "_" + l.toUpperCase()).value);
            }
          }
          objectify(d, k.pointer, f);
        }
      }
    }
    let g = await fetch(`/api/admin/addons/${a}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
    });
    let h = await g.json()
    if (h.success == true) {
      toastr.success(h.message, "Success!")
    } else {
      toastr.error(h.message, "Error!")
    }
  } else {
    toastr.error(c.message, "Error!")
  }
}
function objectify(a, b, c) {
  const d = b.split('.');
  let f = a;
  for (let i = 0; i < d.length - 1; i++) {
    const e = d[i];
    f[e] = f[e] || {};
    f = f[e];
  };
  f[d[d.length - 1]] = c;
}
async function users() {
  const b = await fetch('/api/admin/users');
  const a = (await b.json()).data;
  const c = document.getElementById('usersHolder');
  const d = document.getElementById('b');
  const e = document.getElementById('d');
  const f = document.getElementById('e');
  let g = 1;
  let h = parseInt(e.value);
  function i() {
    const k = (g - 1) * h;
    const l = k + h;
    const m = a.slice(k, l);
    c.innerHTML = m.map(i => `
      <tr onclick="render('admin/users/view/${i.id}')" class="cursor-pointer">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          <img class="object-cover w-12 rounded-xl" src="${i.avatar}">
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.name.first} ${i.name.last}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.username}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-center">
          ${i.email}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.id}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right capitalize">
          ${i.permissions.roles}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.permissions.level}
        </td>
      </tr>
    `).join('');
  }
  function q() {
    const n = Math.ceil(a.length / h);
    const o = [];
    const p = 5;
    let r = Math.max(1, g - Math.floor(p / 2));
    let s = Math.min(r + p - 1, n);
    if (s - r < p - 1) {
      r = Math.max(1, s - p + 1);
    }
    if (r > 1) {
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">1</a>`);
      if (r > 2) {
        o.push(`<span class="text-white px-2 py-2 mx-1">...</span>`);
      }
    }
    for (let i = r; i <= s; i++) {
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">${i}</a>`);
    }
    if (s < n) {
      if (s < n - 1) {
        o.push(`<span class="text-white px-2 py-2 mx-1">...</span>`);
      }
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">${n}</a>`);
    }
    const t = document.createElement('div');
    t.innerHTML = o.join('');
    f.innerHTML = '';
    f.appendChild(t);
    t.querySelectorAll('a').forEach((u, v) => {
      u.addEventListener('click', (w) => {
        w.preventDefault();
        g = r + v;
        i();
        q();
      });
    });
  }
  e.addEventListener('change', () => {
    h = parseInt(e.value);
    g = 1;
    i();
    q();
  });
  i();
  q();
}

async function usersFake() {
  let a = await fetch('/api/admin/users')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`
        <tr>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        <img class="object-cover w-12 rounded-xl" src="${i.avatar}">
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        ${i.name.first} ${i.name.last}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        ${i.username}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-center">
        ${i.email}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
        ${i.id}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right capitalize">
        ${i.permissions.role}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
        ${i.permissions.level}
        </td>
        </tr>
        `)
    }
    document.getElementById("usersHolder").innerHTML = c
  }
}
async function createProduct() {
  let c = {
    name: gv("productName"),
    icon: gv("productIcon"),
    type: gv("productType"),
    coins: gv("productCoins"),
    credits: gv("productCredits"),
    resources: {
      memory: gv("productMemory"),
      disk: gv("productDisk"),
      cpu: gv("productCPU"),
      allocations: gv("productAllocations"),
      backups: gv("productBackups"),
      databases: gv("productDatabases"),
    }
  }
  if (gv("productType") == "server") {
    c["software"] = gv("productSoftware")
  }
  let a = await fetch('/api/admin/products', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(c)
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(b.message, "Error!")
  }
};
function gv(a) {
  return document.getElementById(a).value
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function productsLoad() {
  let x = document.getElementById("productType")
  let y = document.getElementById("productSoftwareHolder")
  let z = document.getElementById("productSoftware")
  let a = await fetch('/api/servers.create')
  let b = await a.json()
  let c = []
  for (let i of b.data.eggs) {
    c.push(`<option value="${i.id}">${i.deployments.name}</option>`)
  }
  z.innerHTML += c.join('')
  document.getElementById("productIcon").addEventListener("input", function () {
    document.getElementById("productIconPreview").src = gv("productIcon")
  });
  x.addEventListener("change", function () {
    if (x.value == "server") {
      y.classList.remove("hidden")
    } else {
      y.classList.add("hidden")
    }
  });
}
async function products() {
  let a = await fetch('/api/admin/products')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data.products) {
      c.push(`<tr onclick="render('admin/products/view/${i.id}')" class="cursor-pointer">
      <td class="p-2 transition-all duration-300 ease-in-out text-left">
          <img src="${i.icon}" class="w-8 h-8 rounded-xl shadow">
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.name}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.type}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.id}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          Coins: ${i.coins}<br>Credits: $${i.credits}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          Active
      </td>
  </tr>`)
    }
    document.getElementById("productsHolder").innerHTML = c.join('')
    let d = []
    for (let i of b.data.categories) {
      d.push(`<tr onclick="render('admin/categories/view/${i.id}')" class="cursor-pointer">
      <td class="p-2 pl-4 transition-all duration-300 ease-in-out text-left">
          ${i.name}
      </td>
      <td class="p-2 pr-4 transition-all duration-300 ease-in-out text-right">
          ${i.id}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.permission}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.products ?? 0}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.status == "true" ? "Active" : "Disabled"}
      </td>
  </tr>`)
    }
    document.getElementById("categoriesHolder").innerHTML = d.join('')
  }
}
async function modifyProduct(a) {
  let d = {
    id: parseInt(a),
    name: gv("productName"),
    icon: gv("productIcon"),
    type: gv("productType"),
    coins: gv("productCoins"),
    credits: gv("productCredits"),
    resources: {
      memory: gv("productMemory"),
      disk: gv("productDisk"),
      cpu: gv("productCPU"),
      allocations: gv("productAllocations"),
      backups: gv("productBackups"),
      databases: gv("productDatabases"),
    }
  }
  if (gv("productType") == "server") {
    d["software"] = gv("productSoftware")
  }
  let b = await fetch('/api/admin/products', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(d)
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function deleteProduct(a) {
  let b = await fetch('/api/admin/products', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: a })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function gateways() {
  let a = await fetch('/api/payments/gateways')
  let b = await a.json()
  let c = []
  for (let i of b.data) {
    c.push(`
    <div onclick="render('admin/addons/${i.name.toLowerCase()}')" class="bg-zinc-900/50 cursor-pointer border border-zinc-800/80 rounded-xl">
      <img src="${i.banner}" class="w-full max-h-64 h-full rounded-xl">
    </div>
    `)
  }
  document.getElementById("gatewaysHolder").innerHTML = c
}
async function invoices() {
  let a = await fetch('/api/payments/invoices')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`
        <tr class="cursor-pointer" onclick="render('admin/billing/invoices/${i.id}')">
          <td class="p-4 transition-all duration-300 ease-in-out text-left">
            ${i.product.name}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
              $${i.price}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${i.id}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${i.user.nickname}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${date(i.date.created)}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${date(i.date.paid)}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
              ${i.paid == true ? "Paid" : "Pending"}
          </td>
        </tr>
      `)
    }
    document.getElementById("invoicesHolder").innerHTML = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function date(a) {
  const b = new Date(a);
  const c = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = c[b.getMonth()];
  const e = b.getDate();
  const f = b.getFullYear();
  const g = new Date().getFullYear();
  return `${d} ${e}${f !== g ? ', ' + f : ''}`;
}
async function updates() {
  let a = await fetch('/api/app/updates/history')
  let b = await a.json()
  let d = document.getElementById("updatesHolder")
  if (b.data.length !== 0) {
    let c = []
    for (let i of b.data) {
      c.push(`
      <div onclick="render('admin/updates/history/${i.identifier}')" class="w-full bg-zinc-900/50 text-lg cursor-pointer text-gray-300 rounded-xl p-4 items-center flex justify-between">
      <span>${i.display}</span>
      <div class="text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    d.innerHTML = c
  } else {
    d.innerHTML = `<div class="w-full  h-40 md:h-52 xl:h-72 flex justify-center items-center"><span class="text-gray-300">No updates available.</span></div>`
  }
}
async function sysInfo() {
  let a = await fetch('/api/app/sysinfo')
  let b = await a.json()
  let c = b.data
  st("sysArch", c.machine.arch)
  st("sysCPU", c.cpu.model)
  st("sysCPUThreads", c.cpu.threads)
  st("sysCPUSpeed", c.cpu.speed)
  st("sysMemTotal", `${format(c.memory.total / 1024)} GB`)
  st("sysMemFree", `${format(c.memory.free / 1024)} GB`)
  st("sysMemApp", `${format(c.memory.app)} MB`)
  st("sysPlatform", c.machine.platform)
  st("sysUptime", `${formatTime(c.machine.uptime)}`)
}
function formatTime(a) {
  const b = Math.floor(a / 60);
  const c = Math.floor(b / 60);
  const d = Math.floor(c / 24);
  const e = Math.floor(d / 30);
  if (e > 0) {
    return `${e} Months`;
  } else if (d > 0) {
    return `${d} Days`;
  } else if (c > 0) {
    return `${c} Hours`;
  } else if (b > 0) {
    return `${b} Minutes`;
  } else {
    return `${a} Seconds`;
  }
}
function loadChart() {
  let options = {
    chart: {
      type: 'line',
      height: 280,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    series: [
      {
        name: 'Registers',
        data: [
          63, 57, 87, 41, 28, 41, 20, 88, 52,
          9, 97, 25, 76, 73, 40, 71, 81, 15,
          78, 29, 24, 58, 84, 64, 6, 2, 0,
          43, 35, 33, 37
        ],
      },
    ],
    colors: ['#323237'],
    grid: {
      borderColor: '',
    },

    fill: {
      colors: undefined,
      opacity: 0.9,
      type: 'solid',
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      },
      image: {
        src: [],
        width: undefined,
        height: undefined
      },
      pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 2,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ["#323237"],
      width: 2,
      dashArray: 0,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark"
    },
    xaxis: {
      categories: [],
      title: {
        text: "",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#d1d5db",
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-title',
        },
      },
      labels: {
        style: {
          colors: ["#d1d5db"],
        }
      },
      lines: {
        show: false,
      }
    },
    yaxis: {
      title: {
        text: '',
      },
      lines: {
        show: false,
      },
      labels: {
        style: {
          colors: ["#d1d5db"],
        }
      },
    },
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const datesArray = [];

  for (let day = 1; day <= new Date(currentYear, currentMonth + 1, 0).getDate(); day++) {
    const date = new Date(currentYear, currentMonth, day);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit' });
    datesArray.push(formattedDate);
  }
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const date = new Date()
  options.xaxis.categories = datesArray;
  options.xaxis.title.text = `${months[date.getMonth()]} ${date.getFullYear()}`;
  options.xaxis.labels.style = { colors: new Array(datesArray.length).fill("#d1d5db") }
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
};
async function stats() {
  let a = await fetch('/api/admin/statistics')
  let b = await a.json()
  if (b.success == true) {
    let c = b.data
    st("statsServers", c.servers)
    st("statsUsers", c.users)
    st("statsQueue", c.queue)
    st("statsNodes", c.nodes)
    st("statsCoins", c.coins)
    st("statsMemory", `${((c.resources.memory.used / c.resources.memory.total) * 100).toFixed(0)}%`)
    st("statsDisk", `${((c.resources.disk.used / c.resources.disk.total) * 100).toFixed(0)}%`)
    st("statsCPU", `${((c.resources.cpu.used / c.resources.cpu.total) * 100).toFixed(0)}%`)
  }
}
function showTab(a) {
  let b = ["overview", "vault", "billing"];
  b.forEach(i => {
    document.getElementById(`user-${i}`).classList.add("hidden");
    document.getElementById(`tab-${i}`).classList.remove("bg-zinc-900", "text-gray-200");
  });
  document.getElementById(`user-${a}`).classList.remove("hidden");
  document.getElementById(`tab-${a}`).classList.add("bg-zinc-900", "text-gray-200");
}
function showTab1(a) {
  let b = ["general", "nodes", "softwares"];
  b.forEach(i => {
    document.getElementById(`${i}`).classList.add("hidden");
    document.getElementById(`tab-${i}`).classList.remove("bg-zinc-900", "text-gray-200");
  });
  document.getElementById(`${a}`).classList.remove("hidden");
  document.getElementById(`tab-${a}`).classList.add("bg-zinc-900", "text-gray-200");
}
function showTab2(a) {
  let b = ["general", "landing", "href"];
  b.forEach(i => {
    document.getElementById(`${i}`).classList.add("hidden");
    document.getElementById(`tab-${i}`).classList.remove("bg-zinc-900", "text-gray-200");
  });
  document.getElementById(`${a}`).classList.remove("hidden");
  document.getElementById(`tab-${a}`).classList.add("bg-zinc-900", "text-gray-200");
}

//These 3 functions will be fixed in the UI 2.0 update.
async function billing() {
  let a = await fetch('/api/payments')
  let b = await a.json()
  if (b.success == true) {
    st("revenue", `$${b.data.revenue ?? 0}`)
    st("services", b.data.services)
    st("gateways", b.data.gateways)
  } else {
    toastr.error(b.message, "Error!")
  }
}
function show(a) {
  let b = document.getElementById(a)
  let c = document.getElementById("holder")
  for (let i of c.children) {
    i.classList.add("hidden")
  }
  for (let i of document.getElementById("buttonsHolder").children) {
    i.classList.add("bg-zinc-900/50")
    i.classList.remove("bg-zinc-900")
  }
  b.classList.remove("hidden")
  document.getElementById(`${a}Btn`).classList.remove("bg-zinc-900/50")
  document.getElementById(`${a}Btn`).classList.add("bg-zinc-900")
}
async function createCategory() {
  let a = await fetch('/api/admin/categories', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: gv("categoryName"),
      banner: gv("categoryBanner"),
      permission: gv("categoryPermission"),
      status: gv("categoryStatus"),
    })
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(b.message, "Error!")
  }
};
async function modifyCategory(a) {
  let b = await fetch('/api/admin/categories', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: parseInt(a),
      name: gv("categoryName"),
      banner: gv("categoryBanner"),
      permission: gv("categoryPermission"),
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function deleteCategory(a) {
  let b = await fetch('/api/admin/categories', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: a })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
function ge(e) { return document.getElementById(e) };
function nodesOnLoad() {
  const f = ["pteroDomain", "pteroAPP", "pteroACC", "pteroFees"];
  const a = {}
  for (const e of f) {
    const element = ge(e);
    a[e] = element.value || element.checked;
    element.addEventListener("input", function () {
      ge("savealert").style.transition = "opacity 0.5s";
      ge("savealert").style.opacity = "1";
      if (element.value === a[e]) {
        ge("savealert").style.transition = "opacity 0.5s";
        ge("savealert").style.opacity = "0";
      }
    });
    element.addEventListener("change", function () {
      ge("savealert").style.transition = "opacity 0.5s";
      ge("savealert").style.opacity = "1";
      if (element.value === a[e]) {
        ge("savealert").style.transition = "opacity 0.5s";
        ge("savealert").style.opacity = "0";
      }
    });
  }
}
async function submitPtero() {
  let domain
  if ((ge("pteroDomain").value).endsWith("/")) {
    domain = ge("pteroDomain").value.slice(0, -1)
  } else {
    domain = ge("pteroDomain").value
  };
  let d = await fetch(`/api/admin/settings/pterodactyl`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      domain: domain,
      app: ge("pteroAPP").value,
      acc: ge("pteroACC").value,
      deployments: {
        fees: ge("pteroFees").value
      }
    })
  });
  let e = await d.json()
  if (e.success == true) {
    nodesOnLoad()
    ge("savealert").style.transition = "opacity 0.5s";
    ge("savealert").style.opacity = "0";
    toastr.success(e.message, "Success")
  }
}
async function pushNodes() {
  try {
    let a = await fetch('/api/admin/pterodactyl/nodes');
    let b = await a.json()
    if (b.success == true) {
      let c = document.getElementById("nodesList")
      c.innerHTML = ""
      const e = []
      for (let i of b.data) {
        let d = `
              <div onclick="render('admin/pterodactyl/nodes/${i.id}')" class="w-full bg-zinc-900/50 cursor-pointer border hover:bg-zinc-900/80 hover:duration-300 duration-300 border-zinc-800/80 rounded-xl p-2">
                <div class="flex items-center justify-between">
                  <div class="flex flex-col justify-start">
                    <h1 class="text-gray-300">${i.name}</h1>
                    <span class="text-gray-400">${format((i.memory) / 1024)}GB Memory</span>
                  </div>
                  <div class="flex flex-col justify-end text-right">
                    <h1 class="text-gray-300">${i.relationships.location.attributes.short} - ${i.relationships.location.attributes.long}</h1>
                    <span class="text-gray-400">${(i.relationships.allocations.data).length} slots</span>
                  </div>
                </div>
                <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
                  <div class="progress mt-3 h-1.5 bg-zinc-800">
                    <div class="is-active relative w-[${format((i.relationships.servers.data.length / i.relationships.allocations.data.length) * 100)}%] overflow-hidden rounded-full bg-amber-500"></div>
                  </div>
                  <h1 class="text-gray-300 text-xl">${format((i.relationships.servers.data.length / i.relationships.allocations.data.length) * 100)}%</h1>
                </div>
                <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
                  <div class="progress mt-3 h-1.5 bg-zinc-800">
                    <div class="is-active relative w-[${format((i.allocated_resources.memory / i.memory) * 100)}%] overflow-hidden rounded-full bg-sky-500"></div>
                  </div>
                  <h1 class="text-gray-300 text-xl">${format((i.allocated_resources.memory / i.memory) * 100)}%</h1>
                </div>
                <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
                  <div class="progress mt-3 h-1.5 bg-zinc-800">
                    <div class="is-active relative w-[${format((i.allocated_resources.disk / i.disk) * 100)}%] overflow-hidden rounded-full bg-purple-500"></div>
                  </div>
                  <h1 class="text-gray-300 text-xl">${format((i.allocated_resources.disk / i.disk) * 100)}%</h1>
                </div>
                <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
                  <div class="progress mt-3 h-1.5 bg-zinc-800">
                    <div class="is-active relative w-[${format(((i.allocated_resources.disk / i.disk) + (i.relationships.servers.data.length / i.relationships.allocations.data.length) + (i.relationships.servers.data.length / i.relationships.allocations.data.length)) / 3 * 100)}%] overflow-hidden rounded-full bg-rose-500"></div>
                  </div>
                  <h1 class="text-gray-300 text-xl">${format(((i.allocated_resources.disk / i.disk) + (i.relationships.servers.data.length / i.relationships.allocations.data.length) + (i.relationships.servers.data.length / i.relationships.allocations.data.length)) / 3 * 100)}%</h1>
                </div>
              </div>`
        e.push(d)
      }
      if (b.data.length == 0) e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16">
            <span class="text-lg text-gray-300">Nothing to view here, add nodes to continue...</span></div>`)
      c.innerHTML = e.join('')
    }
  } catch (error) {
    toastr.error(error)
  }
}
async function pushEggs() {
  try {
    const a = await fetch('/api/admin/pterodactyl/eggs');
    const b = await a.json();
    if (b.success) {
      const c = document.getElementById("eggsList");
      c.innerHTML = "";
      const d = await Promise.all(b.data.map(async (egg) => {
        return `<div onclick="deleteEgg(${egg.id})" class="w-full flex justify-center items-center backdrop-blur-xl cursor-pointer hover:bg-transparent hover:duration-300 duration-300 shadow-md bg-zinc-900 text-center rounded-full py-2 border border-zinc-800/80">${egg.name}</div>`;
      }));
      if (d.length === 0) {
        d.push(`<div class="w-full col-span-5 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16">
              <span class="text-lg text-gray-300">Nothing to view here, add nodes to continue...</span></div>`);
      }
      c.innerHTML = d.join('');
    }
  } catch (error) {
    toastr.error(error);
  }
}
async function deleteEgg(a) {
  Swal.fire({
    title: 'Confirm Deletion',
    text: "Please confirm if you want to remove this software. This will not affect any of the servers!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        let c = await fetch(`/api/admin/pterodactyl/eggs`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: a })
        });
        let b = await c.json();
        if (b.success == true) {
          toastr.success(b.message, "Success!");
          pushEggs()
        } else {
          toastr.error(b.message, "Error!");
        }
      } catch (error) {
        toastr.error('An error occurred while processing your request. ' + error, "Error!");
      }
    }
  });
}
>>>>>>> 4473be3 (29-05)
=======
const routes = [
  { "name": "back to home", "href": true, "show": true, "url": "/dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>` },
  { "name": "home", "href": false, "show": true, "url": "admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>` },
  { "name": "users", "href": false, "show": true, "url": "admin/users", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>` },
  //  { "name": "tickets", "href": false, "show": true, "url": "admin/tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
  { "name": "billing", "href": false, "show": true, "url": "admin/billing", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>` },
  { "name": "products", "href": false, "show": true, "url": "admin/products", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>` },
  //  { "name": "permissions", "href": true, "show": true, "url": "/admin/permissions", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
  //  { "name": "emails", "href": false, "show": true, "url": "admin/emails", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>` },
  //  { "name": "posts", "href": false, "show": true, "url": "admin/posts", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" /></svg>` },
  //  { "name": "security", "href": false, "show": true, "url": "admin/security", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` },
  //  { "name": "logs", "href": false, "show": true, "url": "admin/logs", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>` },
  { "name": "settings", "href": false, "show": true, "url": "admin/settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` },
  { "name": "pterodactyl", "href": false, "show": true, "url": "admin/pterodactyl", "svg": `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-8 -pl-1" viewBox="0 0 1200 1200"><defs><style>.prefix__cls-1{fill:#904a04}.prefix__cls-2{fill:#b26734}.prefix__cls-3{fill:#6d3c0f}.prefix__cls-4{fill:#bd6e35}.prefix__cls-5{fill:#a56032}.prefix__cls-6{fill:#3a3a3a}.prefix__cls-8{fill:#515151}.prefix__cls-9{fill:#303030}.prefix__cls-10{fill:#aaa}.prefix__cls-11{fill:#a4571f}.prefix__cls-12{fill:#824009}.prefix__cls-13{fill:#3f3f3f}.prefix__cls-16{fill:#fff}.prefix__cls-17{fill:#91562d}.prefix__cls-18{fill:#232323}.prefix__cls-19{fill:#161616}.prefix__cls-20{fill:#7c441e}.prefix__cls-22{fill:#ffc33e}</style></defs><g id="prefix__Layer_1" data-name="Layer 1"><path class="prefix__cls-1" d="M921.82 627.73s-2 9.07-2 10.58-52.4-4.53-52.4-4.53l2-16.63z"/><path class="prefix__cls-1" d="M912.81 623.68s-133.07-39.78-190.5-29.2-20.22 41.57-20.22 41.57zM385.21 629.24s2 9.07 2 10.58 52.39-4.53 52.39-4.53l-2-16.63z"/><path class="prefix__cls-1" d="M394.22 625.2s133.07-39.79 190.5-29.2 20.22 41.57 20.22 41.57z"/><ellipse class="prefix__cls-2" cx="661.81" cy="721.44" rx="243.34" ry="123.94"/><path class="prefix__cls-2" d="M589.26 603.55l-134.52 21.16L368 638l-23.38 24v42.51l4.43 52.9 73.33 26.45 57.09 3.78c-16.73-170.12 109.79-184.09 109.79-184.09z"/><path class="prefix__cls-3" d="M522.41 738.07s-27.2-42.32-98.24-19.65 39.3 42.32 39.3 42.32zM318.71 1082.18s47-52.34 153.74-60.78c41.82-3.3 32 94.78 32 94.78l71.24-63.61L715 1063.91l56.45 41.57s36.09-89.36 104.91-87.51 110.37 56.44 110.37 56.44l-87.43-276H393.23z"/><path class="prefix__cls-2" d="M780.61 864.53c-28.25 116.39-35.37 236-124.87 236-89.31 0-95.6-107.1-120.18-226.8-22.46-109.4 48.38-182.41 120.18-182.41a131.4 131.4 0 0165.58 18.13c45.25 26.39 77.39 80.55 59.29 155.08z"/><path class="prefix__cls-4" d="M744.93 895.92c0 84.15-58.69 177.73-102.78 158.55-46.3-20.16-70.81-80-80-167.2-8.77-83.21 44.22-144.88 90.28-144.88s92.5 69.37 92.5 153.53z"/><path class="prefix__cls-2" d="M717.77 602l134.52 21.2L939 636.44l23.38 24v42.51L958 755.82l-73.33 26.45-57.09 3.78C844.29 616 717.77 602 717.77 602z"/><path class="prefix__cls-5" d="M563.56 608.08l52.5 113.36L669 777l43-60 49.56-108.92-72-12.09-70.1 5.19-55.9 6.9z"/><path class="prefix__cls-6" d="M773.17 783.34s13.81 71.11-13.4 80.18-52.9-58.95-52.9-58.95h-57.43l-1.52-36.27 93.71-18.14z"/><path class="prefix__cls-6" d="M541.09 783.34s-13.8 71.11 13.4 80.18 52.9-58.95 52.9-58.95h57.44l1.51-36.27-93.71-18.14z"/><path fill="#444" d="M568.1 797.01l13.6-9.06 6.05-7.56H726.8l4.53 7.56 12.09 6.04-9.07-42.32-92.19-6.04-61.97 6.04-12.09 45.34z"/><path class="prefix__cls-8" d="M772.48 760.11s7.55 32.49-15.12 39.26-30.26-40.1-30.26-40.1l16.66-4.58zM540.89 760.11s-7.56 32.49 15.11 39.26 30.26-40.1 30.26-40.1l-16.66-4.58z"/><path class="prefix__cls-9" d="M686.19 732.02h61.77l25.69 28.72-27.2 1.51-33.26-4.53-25.69 3.02-1.31-28.72zM628.55 732.02h-61.77l-25.69 28.72 27.21 1.51 33.25-4.53 25.69 3.02 1.31-28.72z"/><path class="prefix__cls-8" d="M687.5 760.74h-61.97l-13.6-28.72h92.2l-16.63 28.72z"/><circle class="prefix__cls-10" cx="685.99" cy="742.6" r="4.53"/><rect class="prefix__cls-10" x="649.71" y="751.67" width="15.11" height="3.02" rx="1"/><path class="prefix__cls-6" d="M559.56 793.1a79.75 79.75 0 009-27.76c.12-1-1.39-1-1.51 0a77.43 77.43 0 01-8.75 27c-.46.85.84 1.62 1.31.76zM754.31 792.34a77.41 77.41 0 01-8.74-27c-.13-1-1.64-1-1.51 0a79.33 79.33 0 009 27.76c.46.86 1.76.1 1.3-.76z"/><path class="prefix__cls-11" d="M602.82 745.76c-132.25 128.47-160.43 380.45-160.43 380.45s-25.51-114.06-51-118.31c-34-5.67-71.95 69.74-71.95 69.74s34.32-140.44 22-189.87c-11.57-46.59-74.6-117.53-36.82-204.43 0 0 33.58-55 118.44-63 0 0-261.1 79.46 172.81 121.66h14.48z"/><path class="prefix__cls-1" d="M567.57 761.87c-105.22 102.21-126.14 312.31-126.14 312.31s-23.94-90.75-44.23-94.13c-27.05-4.51-59.07 54.76-59.07 54.76s36.2-113.48 19.36-150.34C308.38 777 305.36 747.88 309.93 719.6c0 0 .08-51.55 49.69-73.86 0 0-142.7 76.88 202.53 110.46h11.39z"/><path class="prefix__cls-3" d="M793.68 736.56s27.21-42.32 98.25-19.65-39.3 42.32-39.3 42.32z"/><path class="prefix__cls-11" d="M704.21 744.24c132.25 128.48 160.43 380.46 160.43 380.46s25.51-114.07 51-118.32c34-5.66 72 69.75 72 69.75s-34.32-140.44-22-189.87c11.57-46.59 74.6-117.53 36.82-204.44 0 0-33.58-55-118.44-63 0 0 261.1 79.46-172.81 121.66h-14.56z"/><path class="prefix__cls-1" d="M739.46 760.36c105.22 102.21 126.14 312.31 126.14 312.31s23.93-90.75 44.22-94.14c27.06-4.51 59.08 54.77 59.08 54.77S932.69 919.82 949.53 883c49.12-107.52 52.14-136.59 47.57-164.87 0 0-.08-51.55-49.69-73.86 0 0 142.7 76.88-202.54 110.45h-11.38z"/><path class="prefix__cls-5" d="M487 619s21.91 42 107 42c4 0-8.89-6.4-8.89-6.4s-54.91 3.14-89.39-36.34C492 614 487 619 487 619z"/><path class="prefix__cls-11" d="M382.68 719.43v38.84l18.86-33.14-18.86-5.7zM370.89 711.17v28.08l13.64-23.97-13.64-4.11zM924.35 717.92v38.84l-18.86-33.14 18.86-5.7zM936.13 709.65v28.09l-13.63-23.97 13.63-4.12z"/><path class="prefix__cls-12" d="M566.97 594.28l-3.74 13.36 32.07.44 1.51-12.09-29.84-1.71zM762.51 593.34l-1.1 14.99-27.4-5.3 1.86-11.57 26.64 1.88z"/><path class="prefix__cls-2" d="M613.09 1109c-12.68 37.21-21.62 63.4-41.79 63.4s-41.1-36.76-41.1-76.07 18.34-89.89 38.52-89.89 58.54 60.97 44.37 102.56z"/><path class="prefix__cls-2" d="M592.69 1188.11l-41.97-3.82 10.92-31.66 27.57-1.12 3.48 36.6z"/><path class="prefix__cls-11" d="M551.92 1180.8l40.58 5.38 18.41 45.82c-45.11-49.36-90.21-7.08-90.21-7.08z"/><path class="prefix__cls-11" d="M554.24 1201.83s-13.69 20.19-9 30.17l15.11-15.08 17.82-15.09z"/><path class="prefix__cls-2" d="M698.85 1101.89c11.18 37.68 15.83 65.09 36 65.09s41.1-36.76 41.1-76.07S757.6 1001 737.43 1001s-50.86 59.49-38.58 100.89z"/><path class="prefix__cls-2" d="M713.46 1182.72l41.96-3.82-10.92-31.66-27.56-1.12-3.48 36.6z"/><path class="prefix__cls-11" d="M754.22 1175.41l-40.58 5.38-18.4 45.82c45.1-49.36 90.21-7.09 90.21-7.09z"/><path class="prefix__cls-11" d="M748.5 1197.17s13.7 20.19 9 30.17l-15.12-15.09-17.82-15.08z"/><rect class="prefix__cls-13" x="569.61" y="657.45" width="43.83" height="19.65" rx="6.17"/><path class="prefix__cls-9" d="M800.74 296.09s0-10.5-21.38-13.65c-8.72-1.29-59.12-.7-59.12-.7l-15.68-34.6s69.52.8 91.42 11.49S813 286 811 303.1M485.42 316.6s-1.39-10.41 19.43-16.31c8.48-2.4 58.53-8.35 58.53-8.35L583.82 255s-78.21 10.41-98.54 23.84-13.3 29.32-9.12 46"/><path class="prefix__cls-2" d="M560.77 567.57c-1.3 4 4.4 10.16 6.51 12.81 16.61 20.85 29.62 44.28 44.26 66.55 6.38 9.71 46.93 69.27 59.36 56.05 21.16-22.5 36.75-50.25 52-77 16-28.08 30.2-57.4 39.11-88.55a8.31 8.31 0 00.46-3.23c-1-8.41-37.28-9.1-44.15-10.15l-20.82-3.2c-1.88-.29-6.68-2-8.53-1.31l-97.35 36.15-19.31 7.17c-2.64 1-9.83 1.41-11.26 4.11a3.76 3.76 0 00-.28.6z"/><path class="prefix__cls-11" d="M574.86 574.98l57.51 90.54 14.12 12.45 17.74 15.5 17.6-17.8 50.32-79.01 26.22-62.58-73.1-10.1-110.41 51z"/><path fill="#cb63d3" d="M721.26 601.57l-122.42-6.04 31.74 64.99 12.09 12.09 16.62 13.6 10.58-9.07 7.56-7.55 7.56-10.58"/><path fill="#b25f8c" d="M633.6 643.38l10.58 18.14 13.6 13.6 51.21-45.34-58.76-6.05-16.63 19.65z"/><path class="prefix__cls-4" d="M671.69 49.44c-4.64.63-9.72 6.23-12 9-32.3 39.35-51.93 87.41-68.9 135.4-9.21 26.1-17.79 52.46-27.79 78.33-9.7 25.24-23.21 49-31.84 74.42-9.77 28.78-13.29 59.55-11.61 89.86 2.42 43.68 8.59 97.89 40.23 131.13 48.62 51.07 83.3 87.35 83.3 87.35l20.67 16.32 21.13-19s56.42-50.09 62.55-72.25 6.44-20.54 11.63-32.24 13.62-12.48 20-45.08c15.41-78.47-12.25-158.34-39.58-231.26-15.46-41.27-31.89-82.35-42.36-125.16-4.51-18.47-7.89-37.18-11.68-55.81-1.9-9.3-3.88-18.59-6.15-27.81-.8-3.23-1.12-11.16-4.6-12.78a5.4 5.4 0 00-3-.42z"/><path class="prefix__cls-2" d="M675.74 50.6c3.58 4.67-1.86 8.25-1.34 13.89q.95 10.23 2.16 20.44 2.52 21.06 6.18 41.95a772.75 772.75 0 0018.84 81.32c21.39 73.88 54.09 146.09 56 223 2 78.41-28.81 154.7-71.79 220.32 46-39.47 79.71-83.64 94.25-152.73 8.09-38.38 4.23-79.54-4.21-117.82-4.13-18.72-13.35-35.66-18.29-53.9-5.41-20-11.93-39.73-18.83-59.28-13.81-39.14-29.25-77.74-40.84-117.63-7.7-26.5-10.21-54.2-16.93-81-.45-1.76-2.47-22.71-9.26-19.26"/><path class="prefix__cls-16" d="M594.1 472.41c.74 11.43-7.13 21.25-17.59 21.93s-19.53-8-20.28-19.47 7.66-13.14 18.12-13.82 19-.05 19.75 11.36zM760 462.52c.78 11.94-7.88 22.21-19.33 23s-21.37-8.33-22.14-20.26 8.4-14.1 19.86-14.84 20.82.17 21.61 12.1z"/><ellipse class="prefix__cls-17" cx="622.99" cy="559.47" rx="5.17" ry="10.14" transform="rotate(-18.07 623.187 559.602)"/><ellipse class="prefix__cls-17" cx="695.17" cy="559.47" rx="10.14" ry="5.17" transform="rotate(-71.93 695.1 559.469)"/><circle class="prefix__cls-18" cx="580.95" cy="482.63" r="7.67"/><circle class="prefix__cls-18" cx="735.18" cy="472.41" r="7.75"/><rect class="prefix__cls-13" x="775.83" y="376.94" width="27.21" height="120.91" rx="3.69" transform="rotate(-3.72 789.88 437.638)"/><path class="prefix__cls-19" transform="rotate(-3.72 812.459 435.289)" d="M807.48 381.52h9.07v107.31h-9.07z"/><rect class="prefix__cls-19" x="816.62" y="388.28" width="15.11" height="95.22" rx="3" transform="rotate(-3.72 824.607 436.146)"/><path class="prefix__cls-9" d="M797.4 500.49l-.69-21.16 5.44-9.44-5.39-82.95-9-10.02-.94-2.97 11.97-2.29 7.84 4.03 7.65 117.65-7.15 6.52-9.73.63zM807.93 369.55l4.38 11.83 7.17 110.1-4.81 7.89 13.38-3.9-7.85-120.66-12.27-5.26zM800.93 295.99l10.31 4.34 5.32 66.73-9.06 1.44-6.57-72.51z"/><path class="prefix__cls-9" d="M807.74 369.56l-.06-24.23 12.52 29.48-12.46-5.25z"/><rect class="prefix__cls-9" x="466.97" y="474.71" width="10.58" height="22.67" rx="2.77" transform="rotate(-3.72 472.492 486.209)"/><path class="prefix__cls-9" d="M465.75 467.54S389.3 690.62 594.51 677.27L599 677l-.88-13.58S430.89 700 472.24 497.41c6.63-32.48-1.87-28.66-1.87-28.66z"/><rect class="prefix__cls-13" x="501.33" y="394.8" width="27.21" height="120.91" rx="3.69" transform="rotate(176.28 514.94 455.244)"/><path class="prefix__cls-19" transform="rotate(176.28 492.267 455.965)" d="M487.73 402.31h9.07v107.31h-9.07z"/><rect class="prefix__cls-19" x="472.74" y="410.65" width="15.11" height="95.22" rx="3" transform="rotate(176.28 480.3 458.254)"/><path class="prefix__cls-9" d="M515.21 518.85l-2.05-21.07-6.62-8.66-5.4-82.95 7.62-11.1.55-3.07-12.17-.72-7.25 5.02 7.66 117.64 7.93 5.54 9.73-.63zM487.81 390.37l-2.82 12.3 7.16 110.11 5.79 7.19-13.77-2.13-7.85-120.66 11.49-6.81zM485.6 316.5l-9.52 7.64 2.84 64.88 9.18.25-2.5-72.77z"/><path class="prefix__cls-9" d="M487.99 390.36l-3.07-24.03-8.6 30.85 11.67-6.82z"/><path class="prefix__cls-20" d="M526.29 367.2c7.4-5 17-5.67 25.6-6.74 10-1.22 20-1.81 29.79.8 8.46 2.26 12.08-10.86 3.61-13.12-11.6-3.09-23.42-2.58-35.22-1.05-10.48 1.36-21.66 2.26-30.65 8.36-7.2 4.89-.4 16.68 6.87 11.75zM714.85 356.31a78.59 78.59 0 0151.15-3.05c8.44 2.36 12-10.76 3.61-13.12a90.81 90.81 0 00-58.36 3.06c-3.43 1.38-5.76 4.52-4.75 8.36.86 3.24 5 6.13 8.37 4.75z"/><g id="prefix__Glasses"><path class="prefix__cls-18" d="M678.15 451.06c-.36-7-13-15.45-28-14.69s-26.76 10.41-26.41 17.43 12-3.51 27.08-4.26 27.68 8.55 27.33 1.52z"/><ellipse class="prefix__cls-16" cx="574.11" cy="443.03" rx="53.17" ry="73.48" transform="rotate(-2.88 573.807 442.93)"/><ellipse class="prefix__cls-16" cx="726.85" cy="435.35" rx="53.17" ry="73.48" transform="rotate(-2.88 726.655 435.23)"/><path d="M623.18 443.41l54.44-2.74" fill="none"/><path class="prefix__cls-18" d="M541.67 391.16C533.46 403 528.51 409.42 523 409.7s-10.83-9.8-11.43-21.85 34.53-13.84 40.09-14.12-8.1 14.69-9.99 17.43zM751.2 380.62c9.35 11 14.92 16.85 20.48 16.57s9.79-10.83 9.19-22.88-35.75-10.31-41.31-10 9.44 13.78 11.64 16.31z"/></g><circle class="prefix__cls-18" cx="576.26" cy="485.84" r="18"/><circle class="prefix__cls-18" cx="731.99" cy="478.01" r="19.71"/><circle class="prefix__cls-16" cx="580.18" cy="494.28" r="4.93"/><circle class="prefix__cls-16" cx="727.07" cy="487.72" r="5.4"/><ellipse class="prefix__cls-22" cx="518.2" cy="386.11" rx="3.29" ry="1.44" transform="rotate(-19.44 518.092 386.054)"/><ellipse class="prefix__cls-22" cx="774.2" cy="373.11" rx="1.44" ry="3.29" transform="rotate(-64.44 774.151 373.114)"/><path class="prefix__cls-12" d="M487 619.64s-5.33-11.84-5.87-15.72c-.13-.92 6.55-1.26 6.55-1.26L496 618z"/></g></svg>` },
  { "name": "themes", "href": false, "show": true, "url": "admin/themes", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>` },
  { "name": "addons", "href": false, "show": true, "url": "admin/addons", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "updates", "href": false, "show": true, "url": "admin/updates", "svg": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.67742 20.5672C2.53141 18.0211 0.758027 12.7583 2.71678 8.14385C4.87472 3.06005 10.7453 0.688166 15.8291 2.84612C20.9129 5.00407 23.2848 10.8746 21.1269 15.9584C20.2837 17.9449 18.8736 19.5173 17.1651 20.5672" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 16V20.4C17 20.7314 17.2686 21 17.6 21H22" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22.01L12.01 21.9989" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { "name": "holaclient", "href": false, "show": true, "url": "admin/app", "svg": `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.5C4 2.67157 4.67157 2 5.5 2C6.32843 2 7 2.67157 7 3.5V14.5C7 15.3284 6.32843 16 5.5 16C4.67157 16 4 15.3284 4 14.5V3.5Z" fill="#D9D9D9"/><path d="M5.52549 16.0638C4.69709 16.0708 4.01982 15.405 4.01277 14.5766C4.00572 13.7482 4.67154 13.0709 5.49994 13.0639L12.1087 13.0076C12.9371 13.0005 13.6144 13.6664 13.6214 14.4948C13.6285 15.3232 12.9626 16.0004 12.1342 16.0075L5.52549 16.0638Z" fill="#D9D9D9"/><rect x="4" y="18" width="4" height="4" rx="2" fill="#1E1E1E"/><rect x="17" y="2" width="3" height="4" rx="1.5" fill="#1E1E1E"/><rect x="17" y="8" width="3" height="14" rx="1.5" fill="#D9D9D9"/></svg>` },
]
const userRoutes = [
  { "name": "notifications", "url": "pages/notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "pages/requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "pages/account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HolaClient: 404</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="/assets/app.css" rel="stylesheet">
  </head>
  <body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
      <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
          <h1
              class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
              500
          </h1>
          <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
          <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
          <button onclick="window.history.back()"
              class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
              Back</button>
      </div>
  </body>`
async function getPage(page) {
  //if (wsa == true) {
  //  handler.send(JSON.stringify({ type: "render", page: `/${page}` }));
  //  return new Promise((resolve, reject) => {
  //    handler.onmessage = function (event) {
  //       let data = JSON.parse(event.data);
  //      resolve(data.page.page);
  //     };
  //   });
  //  } else {
  let c;
  if (page.startsWith('/')) {
    c = await fetch(page || "/");
  } else if (page === "") {
    c = await fetch("/");
  } else {
    c = await fetch("/" + (page || "/"));
  }
  return c.text();
  // }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
    <div id="loadOverlay" class="bg-zinc-900/50 backdrop-blur-3xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 h-screen">
        <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
        <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        </h1>
    </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.textContent = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.textContent = ``;
      b.textContent = f.textContent;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      let g = await fetch(`obviously-a-404-page`);
      let h = await g.text();
      b.textContent = "";
      b.textContent = h;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.textContent = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      const c = a.indexOf("/", b + 1);
      if (c !== -1) {
        return a.slice(1, c);
      }
      return a.slice(1);
    }
  }
  const b = a.indexOf("/");
  if (b !== -1) {
    const c = a.indexOf("/", b + 1);
    if (c !== -1) {
      return a.slice(0, c);
    }
    return a.slice(0, b);
  }
  return a;
};
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
window.addEventListener('popstate', () => {
  if (window.location.pathname.endsWith("/")) {
    render(window.location.pathname.replace("/", ''))
  } else {
    render(window.location.pathname)
  }
});
async function load() {
  const sidebar = document.getElementById("sidebar");
  const fragment = document.createDocumentFragment();
  const sidebarItems = [];
  const location = window.location.href.replace(window.location.origin, '');;
  const page = location.startsWith("/") ? location.slice(1) : location;
  for (let i of routes) {
    const li = document.createElement("li");
    li.textContent = `
          <a onclick="render('${i.url}')" id="nav-${i.url}"
              class="flex items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
              <div id="nav-display-${i.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
              <div class="p-2 flex items-center">
                  ${i.svg}
                  <span class="ml-2 text-lg capitalize">${i.name}</span>
              </div>
          </a>`

    li.style.opacity = 0;
    li.style.transform = 'translateY(20px)';

    fragment.appendChild(li);
    sidebarItems.push(li);
  }

  sidebar.appendChild(fragment);

  document.querySelectorAll("#sidebar li").forEach(item => {
    item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
  });
  document.querySelectorAll("#userDropdown li").forEach(item => {
    item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
  });
  setTimeout(() => {
    sidebarItems.forEach((item, index) => {
      item.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`;
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    });

    const navItem = document.getElementById(`nav-${page}`);
    const navDisplay = document.getElementById(`nav-display-${page}`);

    if (navItem) {
      const sidebarItems = document.querySelectorAll("#sidebar li");
      sidebarItems.forEach(item => {
        item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
      });

      const sidebarItemsU = document.querySelectorAll("#userDropdown li");
      sidebarItemsU.forEach(item => {
        item.classList.remove("text-white", "shadow", "bg-zinc-800/90");
      });

      navItem.classList.add("text-white", "shadow", "bg-zinc-800/90");
      navDisplay.classList.remove("hidden");
    }
    highlight()
  }, 100);
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const fragment = document.createDocumentFragment()

    for (let i of userRoutes) {
      const li = document.createElement("li")
      li.textContent = `
      <a onclick="render('${i.url}')" id="nav-${i.url}"
          class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
          <div id="nav-display-${i.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
          <div class="p-2 flex items-center">
              ${i.svg}
              <span class="ml-2 text-lg capitalize">${i.name}</span>
          </div>
      </a>`

      li.style.opacity = 0
      li.style.transform = 'translateY(20px)'

      fragment.appendChild(li)
    }

    c.appendChild(fragment)

    setTimeout(() => {
      const sidebarItems = document.querySelectorAll("#userDropdown li")
      sidebarItems.forEach((item, index) => {
        item.style.transition = `opacity 1s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`
        item.style.opacity = 1
        item.style.transform = 'translateY(0)'
      })
    }, 100)
  } else {
    a.classList.add("hidden")
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease'
    b.style.transform = 'translateY(0)'
    b.style.opacity = 0
    c.textContent = ''
  }
}
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
const nodesCache = []
const eggsCache = []
let cache = {}
let rolesCache = []
async function roles() {
  let a = await fetch('/api/admin/permissions/roles')
  let b = await a.json()
  rolesCache = b.data
}
async function nodes() {
  roles()
  try {
    let a = await fetch('/api/admin/pterodactyl/nodes', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      }
    });
    let b = await a.json()
    if (b.success == true) {
      let c = document.getElementById("nodesHolder")
      c.textContent = ""
      const e = []
      for (let i of b.data) {
        nodesCache.push(i)
        let d = `
        <div onclick="showNode(${i.attributes.id})" class="w-full bg-zinc-900/50 cursor-pointer border hover:bg-zinc-900/80 hover:duration-300 duration-300 border-zinc-800/80 rounded-xl p-2">
          <div class="flex items-center justify-between">
            <div class="flex flex-col justify-start">
              <h1 class="text-gray-300">${i.attributes.name}</h1>
              <span class="text-gray-400">${format((i.attributes.memory) / 1024)}GB Memory</span>
            </div>
            <div class="flex flex-col justify-end text-right">
              <h1 class="text-gray-300">${i.attributes.relationships.location.attributes.short} - ${i.attributes.relationships.location.attributes.long}</h1>
              <span class="text-gray-400">${(i.attributes.relationships.allocations.data).length} slots</span>
            </div>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) * 100)}%] overflow-hidden rounded-full bg-amber-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.allocated_resources.memory / i.attributes.memory) * 100)}%] overflow-hidden rounded-full bg-sky-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.allocated_resources.memory / i.attributes.memory) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format((i.attributes.allocated_resources.disk / i.attributes.disk) * 100)}%] overflow-hidden rounded-full bg-purple-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format((i.attributes.allocated_resources.disk / i.attributes.disk) * 100)}%</h1>
          </div>
          <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
            <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${format(((i.attributes.allocated_resources.disk / i.attributes.disk) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length)) / 3 * 100)}%] overflow-hidden rounded-full bg-rose-500"></div>
            </div>
            <h1 class="text-gray-300 text-xl">${format(((i.attributes.allocated_resources.disk / i.attributes.disk) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length) + (i.attributes.relationships.servers.data.length / i.attributes.relationships.allocations.data.length)) / 3 * 100)}%</h1>
          </div>
        </div>`
        e.push(d)
      }
      if (b.data.length == 0) e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16">
      <span class="text-lg text-gray-300">Nothing to view here...</span></div>`)
      c.textContent = e.join('')
    }
  } catch (error) {
    toastr.error(error)
  }
}
function format(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  return b;
}
function showNode(a) {
  let b = document.getElementById("nodeViewer");
  let c = nodesCache.find(d => d.attributes.id == a);
  let e = []
  for (let i of rolesCache) {
    e.push(`<option value="${i}" class="capitalize p-1 appearance-none hover:">${i}</option>`)
  }
  if (c) {
    let d = `
      <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-4 text-gray-200 flex justify-between w-full items-center">${c.attributes.name}</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4 text-gray-300">
            <div class="flex flex-col">
              <span>Display name:</span>
              <input id="nodeName" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="${c.attributes.name}" placeholder="Optional field">
            </div>
            <div class="flex flex-col">
              <span>Fees:</span>
              <input id="nodePrice" type="number" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="0" placeholder="0 for free">
            </div>
            <div class="flex-col">
              <span>Role:</span>
              <div class="relative">
                <select id="nodeRoles" class="w-full appearance-none capitalize bg-zinc-900 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300">
                  ${e}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="w-full flex flex-col justify-end">
              <button onclick="addNode(${c.attributes.id})" class="w-full justify-self-end hover:bg-zinc-900/80 hover:duration-300 bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 h-max focus:pl-4 focus:duration-300 duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>`;

    if (cache && cache.node && cache.node == a) {
      b.textContent = "";
      cache.node = ""
    } else {
      b.textContent = d;
      cache.node = a
    }

  }
}
async function addNode(a) {
  let d = document.getElementById("nodeName").value
  let e = document.getElementById("nodePrice").value
  let f = document.getElementById("nodeRoles").value
  let b = await fetch('/api/admin/pterodactyl/nodes', {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: a, name: d, role: f, fees: e })
  });
  let c = await b.json()
  if (c.success == true) {
    await nodes()
    document.getElementById("nodeViewer").textContent = ""
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function version(a) {
  let b = await fetch(`https://api.github.com/repos/pterodactyl/wings/releases/latest`)
  let c = await b.json()
  let d = (c.tag_name).replace("v", "")
  let e = document.getElementById("nodeVersion")
  if (d == a) {
    e.textContent = `<div class="mt-4 w-full rounded-xl p-2 px-4 bg-zinc-900/50 border border-zinc-800/80 text-gray-300">You're using the latest version of Wings (<b>${a}</b>).</div>`;
  } else {
    e.textContent = `<div class="mt-4 w-full rounded-xl p-2 px-4 bg-rose-700/50 border border-rose-700 text-rose-300">You're using Wings version <b>${a}</b>, but the latest version is <b>${d}</b>. Please update the wings to prohibit security vulnerabilities!</div>`;
  }
}
async function removeNode(a) {
  let b = await fetch(`/api/admin/pterodactyl/nodes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: parseInt(a) })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    window.location.href = '/admin/pterodactyl'
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function eggs() {
  roles();
  try {
    let a = await fetch('/api/admin/pterodactyl/eggs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let b = await a.json();
    if (b.success === true) {
      let c = document.getElementById("eggsHolder");
      c.textContent = "";
      const e = [];
      for (let i of b.data) {
        let f = [];
        for (let j of i.attributes.relationships.eggs.data) {
          eggsCache.push(j)
          f.push(`
          <div onclick="showEgg(${j.attributes.id})" class="w-full flex justify-center items-center backdrop-blur-xl cursor-pointer hover:bg-transparent hover:duration-300 duration-300 shadow-md bg-zinc-900 text-center rounded-full py-2 border border-zinc-800/80">
            ${j.attributes.name}
          </div>
          `);
        }
        let d = `
        <h1 class="text-gray-300 text-left text-lg">${i.attributes.name}</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">${f.join('')}</div>`;
        e.push(d);
      }
      if (b.data.length === 0) {
        e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16"><span class="text-lg text-gray-300">Nothing to view here...</span></div>`);
      }
      c.textContent = e.join('');
    }
  } catch (error) {
    toastr.error(error.message);
  }
}
function showEgg(a) {
  let b = document.getElementById("eggViewer");
  let c = eggsCache.find(d => d.attributes.id == a);
  let e = []
  for (let i of rolesCache) {
    e.push(`<option value="${i}" class="capitalize !p-1 !appearance-none !hover:bg-zinc-900 hover:duration-300 duration-300">${i}</option>`)
  }
  if (c) {
    let d = `
      <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-4 text-gray-200 flex justify-between w-full items-center">${c.attributes.name}</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-3 col-span-3 w-full gap-4 text-gray-300">
            <div class="flex flex-col">
              <span>Display name:</span>
              <input id="eggName" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="${c.attributes.name}" placeholder="Optional field">
            </div>
            <div class="flex flex-col">
              <span>Fees:</span>
              <input id="eggPrice" type="number" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="0" placeholder="0 for free">
            </div>
            <div class="flex flex-col">
              <span>Icon:</span>
              <input id="eggIcon" type="text" class="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300" value="https://cdn.holaclientx.tech/assets/eggs/${c.attributes.name.toLowerCase().replace(/\s+/g, "-")}" placeholder="https://cdn.holaclientx.tech/assets/icons/[Egg Name]">
            </div>
            <div class="flex-col">
              <span>Role:</span>
              <div class="relative">
                <select id="eggRole" class="w-full appearance-none capitalize bg-zinc-900 border border-zinc-800/80 rounded-xl outline-none p-2 focus:pl-4 focus:duration-300 duration-300">
                  ${e}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="w-full flex flex-col justify-end">
              <button onclick="addEgg(${c.attributes.id}, ${c.attributes.nest})" class="w-full justify-self-end hover:bg-zinc-900/80 hover:duration-300 bg-zinc-900/50 border border-zinc-800/80 rounded-xl outline-none p-2 h-max focus:pl-4 focus:duration-300 duration-300">
                Submit
              </button>
            </div>
          </div>
          <div class="w-full h-max max-h-40 flex items-center justify-center">
            <img id="eggPreview" onerror="this.src='https://cdn.holaclientx.tech/assets/eggs/minecraft'" class="max-h-40 w-auto" src="https://cdn.holaclientx.tech/assets/eggs/${c.attributes.name.toLowerCase().replace(/\s+/g, "-")}">
          </div>
        </div>
      </div>`;
    if (cache && cache.egg && cache.egg == a) {
      b.textContent = "";
      cache.egg = ""
    } else {
      b.textContent = d;
      cache.egg = a
    }
  }
}
async function addEgg(a, h) {
  let d = document.getElementById("eggName").value
  let e = document.getElementById("eggPrice").value
  let f = document.getElementById("eggRole").value
  let g = document.getElementById("eggIcon").value
  let b = await fetch('/api/admin/pterodactyl/eggs', {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify({ id: a, name: d, role: f, fees: e, icon: g, nest: h })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function addons() {
  let a = await fetch('/api/admin/addons')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById("addonsList")
    let d = []
    for ([j, i] of Object.entries(b.data.active)) {
      d.push(`
      <tr onclick="render('admin/addons/${i.name}')" class="cursor-pointer hover:bg-zinc-900/30 hover:duration-300 duration-300">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.display}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.type}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right text-sky-500">
          <a href="${i.author.github}">${i.author.name}</a>
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.runtime.holaclient.version == 1 ? "Yes" : "No"}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          Active
        </td>
      </tr>
    `)
    }
    for ([j, i] of Object.entries(b.data.inactive)) {
      d.push(`
      <tr onclick="render('admin/addons/${i.name}')" class="cursor-pointer hover:bg-zinc-900/30 hover:duration-300 duration-300">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.display}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.type}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right text-sky-500">
          <a href="${i.author.github}">${i.author.name}</a>
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.runtime.holaclient.version == 1 ? "Yes" : "No"}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          Inactive
        </td>
      </tr>
    `)
    }
    c.textContent = d.join("")
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function activateAddon(a) {
  let b = await fetch(`/api/admin/addons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      addon: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    document.getElementById("addonStatus").textContent = `
    <button onclick="configAddon(${a})" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
    Save changes
</button>
<button onclick="deactivateAddon('${a}')" class="px-4 py-2 rounded-xl bg-rose-900/50 border border-rose-800/80 text-rose-400">
Deactivate
</button>`
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function deactivateAddon(a) {
  let b = await fetch(`/api/admin/addons`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      addon: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    document.getElementById("addonStatus").textContent = `
    <button onclick="configAddon(${a})" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
    Save changes
</button>
<button onclick="activateAddon('${a}')" class="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-800/80 text-emerald-400">
Activate
</button>`
  } else {
    toastr.error(c.message, "Error!")
  }
}
window.onload = () => {
  load();
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(i => {
    i.style.zIndex = '1';
    dragElement(i);
  });
}
function dragElement(a) {
  var b = 0, c = 0, d = 0, f = 0;
  a.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    d = e.clientX;
    f = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    b = d - e.clientX;
    c = f - e.clientY;
    d = e.clientX;
    f = e.clientY;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(i => {
      i.style.position = 'absolute';
      i.style.zIndex = '1';
      dragElement(i);
    });
    a.style.zIndex = '2';
    a.classList.add("backdrop-blur-xl")
    a.style.top = (a.offsetTop - c) + "px";
    a.style.left = (a.offsetLeft - b) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
async function configAddon(a) {
  let b = await fetch(`/api/admin/addons/${a}`)
  let c = await b.json()
  if (c.success == true) {
    let d = {}
    for ([i, j] of Object.entries(c.data.settings)) {
      for (let k of j) {
        if (k.value_type == "string") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, e);
        } else if (k.value_type == "number") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, Number(e));
        } else if (k.value_type == "boolean") {
          let e = document.getElementById(k.identifier).value;
          objectify(d, k.pointer, e);
        } else if (k.value_type == "object") {
          let f = {};
          for (let l of k.keys) {
            if (k.keys_value_type == "number") {
              objectify(f, l, Number(document.getElementById(k.identifier + "_" + l.toUpperCase()).value));
            } else {
              objectify(f, l, document.getElementById(k.identifier + "_" + l.toUpperCase()).value);
            }
          }
          objectify(d, k.pointer, f);
        }
      }
    }
    let g = await fetch(`/api/admin/addons/${a}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
    });
    let h = await g.json()
    if (h.success == true) {
      toastr.success(h.message, "Success!")
    } else {
      toastr.error(h.message, "Error!")
    }
  } else {
    toastr.error(c.message, "Error!")
  }
}
function objectify(a, b, c) {
  const d = b.split('.');
  let f = a;
  for (let i = 0; i < d.length - 1; i++) {
    const e = d[i];
    f[e] = f[e] || {};
    f = f[e];
  };
  f[d[d.length - 1]] = c;
}
async function users() {
  const b = await fetch('/api/admin/users');
  const a = (await b.json()).data;
  const c = document.getElementById('usersHolder');
  const d = document.getElementById('b');
  const e = document.getElementById('d');
  const f = document.getElementById('e');
  let g = 1;
  let h = parseInt(e.value);
  function i() {
    const k = (g - 1) * h;
    const l = k + h;
    const m = a.slice(k, l);
    c.textContent = m.map(i => `
      <tr onclick="render('admin/users/view/${i.id}')" class="cursor-pointer">
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          <img class="object-cover w-12 rounded-xl" src="${i.avatar}">
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.name.first} ${i.name.last}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
          ${i.username}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-center">
          ${i.email}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.id}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right capitalize">
          ${i.permissions.roles}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
          ${i.permissions.level}
        </td>
      </tr>
    `).join('');
  }
  function q() {
    const n = Math.ceil(a.length / h);
    const o = [];
    const p = 5;
    let r = Math.max(1, g - Math.floor(p / 2));
    let s = Math.min(r + p - 1, n);
    if (s - r < p - 1) {
      r = Math.max(1, s - p + 1);
    }
    if (r > 1) {
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">1</a>`);
      if (r > 2) {
        o.push(`<span class="text-white px-2 py-2 mx-1">...</span>`);
      }
    }
    for (let i = r; i <= s; i++) {
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">${i}</a>`);
    }
    if (s < n) {
      if (s < n - 1) {
        o.push(`<span class="text-white px-2 py-2 mx-1">...</span>`);
      }
      o.push(`<a href="#" class="outline-0 text-white bg-zinc-800 hover:bg-zinc-800/70 border-2 border-transparent hover:border-blue-500 px-4 py-2 mx-1 rounded-lg">${n}</a>`);
    }
    const t = document.createElement('div');
    t.textContent = o.join('');
    f.textContent = '';
    f.appendChild(t);
    t.querySelectorAll('a').forEach((u, v) => {
      u.addEventListener('click', (w) => {
        w.preventDefault();
        g = r + v;
        i();
        q();
      });
    });
  }
  e.addEventListener('change', () => {
    h = parseInt(e.value);
    g = 1;
    i();
    q();
  });
  i();
  q();
}

async function usersFake() {
  let a = await fetch('/api/admin/users')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`
        <tr>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        <img class="object-cover w-12 rounded-xl" src="${i.avatar}">
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        ${i.name.first} ${i.name.last}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-left">
        ${i.username}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-center">
        ${i.email}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
        ${i.id}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right capitalize">
        ${i.permissions.role}
        </td>
        <td class="p-4 transition-all duration-300 ease-in-out text-right">
        ${i.permissions.level}
        </td>
        </tr>
        `)
    }
    document.getElementById("usersHolder").textContent = c
  }
}
async function createProduct() {
  let c = {
    name: gv("productName"),
    icon: gv("productIcon"),
    type: gv("productType"),
    coins: gv("productCoins"),
    credits: gv("productCredits"),
    resources: {
      memory: gv("productMemory"),
      disk: gv("productDisk"),
      cpu: gv("productCPU"),
      allocations: gv("productAllocations"),
      backups: gv("productBackups"),
      databases: gv("productDatabases"),
    }
  }
  if (gv("productType") == "server") {
    c["software"] = gv("productSoftware")
  }
  let a = await fetch('/api/admin/products', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(c)
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(b.message, "Error!")
  }
};
function gv(a) {
  return document.getElementById(a).value
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function productsLoad() {
  let x = document.getElementById("productType")
  let y = document.getElementById("productSoftwareHolder")
  let z = document.getElementById("productSoftware")
  let a = await fetch('/api/servers.create')
  let b = await a.json()
  let c = []
  for (let i of b.data.eggs) {
    c.push(`<option value="${i.id}">${i.deployments.name}</option>`)
  }
  z.textContent += c.join('')
  document.getElementById("productIcon").addEventListener("input", function () {
    document.getElementById("productIconPreview").src = gv("productIcon")
  });
  x.addEventListener("change", function () {
    if (x.value == "server") {
      y.classList.remove("hidden")
    } else {
      y.classList.add("hidden")
    }
  });
}
async function products() {
  let a = await fetch('/api/admin/products')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data.products) {
      c.push(`<tr onclick="render('admin/products/view/${i.id}')" class="cursor-pointer">
      <td class="p-2 transition-all duration-300 ease-in-out text-left">
          <img src="${i.icon}" class="w-8 h-8 rounded-xl shadow">
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.name}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.type}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.id}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          Coins: ${i.coins}<br>Credits: $${i.credits}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          Active
      </td>
  </tr>`)
    }
    document.getElementById("productsHolder").textContent = c.join('')
    let d = []
    for (let i of b.data.categories) {
      d.push(`<tr onclick="render('admin/categories/view/${i.id}')" class="cursor-pointer">
      <td class="p-2 pl-4 transition-all duration-300 ease-in-out text-left">
          ${i.name}
      </td>
      <td class="p-2 pr-4 transition-all duration-300 ease-in-out text-right">
          ${i.id}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.permission}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.products ?? 0}
      </td>
      <td class="p-2 transition-all duration-300 ease-in-out text-right">
          ${i.status == "true" ? "Active" : "Disabled"}
      </td>
  </tr>`)
    }
    document.getElementById("categoriesHolder").textContent = d.join('')
  }
}
async function modifyProduct(a) {
  let d = {
    id: parseInt(a),
    name: gv("productName"),
    icon: gv("productIcon"),
    type: gv("productType"),
    coins: gv("productCoins"),
    credits: gv("productCredits"),
    resources: {
      memory: gv("productMemory"),
      disk: gv("productDisk"),
      cpu: gv("productCPU"),
      allocations: gv("productAllocations"),
      backups: gv("productBackups"),
      databases: gv("productDatabases"),
    }
  }
  if (gv("productType") == "server") {
    d["software"] = gv("productSoftware")
  }
  let b = await fetch('/api/admin/products', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(d)
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function deleteProduct(a) {
  let b = await fetch('/api/admin/products', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: a })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function gateways() {
  let a = await fetch('/api/payments/gateways')
  let b = await a.json()
  let c = []
  for (let i of b.data) {
    c.push(`
    <div onclick="render('admin/addons/${i.name.toLowerCase()}')" class="bg-zinc-900/50 cursor-pointer border border-zinc-800/80 rounded-xl">
      <img src="${i.banner}" class="w-full max-h-64 h-full rounded-xl">
    </div>
    `)
  }
  document.getElementById("gatewaysHolder").textContent = c
}
async function invoices() {
  let a = await fetch('/api/payments/invoices')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    for (let i of b.data) {
      c.push(`
        <tr class="cursor-pointer" onclick="render('admin/billing/invoices/${i.id}')">
          <td class="p-4 transition-all duration-300 ease-in-out text-left">
            ${i.product.name}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
              $${i.price}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${i.id}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${i.user.nickname}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${date(i.date.created)}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
            ${date(i.date.paid)}
          </td>
          <td class="p-4 transition-all duration-300 ease-in-out text-right">
              ${i.paid == true ? "Paid" : "Pending"}
          </td>
        </tr>
      `)
    }
    document.getElementById("invoicesHolder").textContent = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function date(a) {
  const b = new Date(a);
  const c = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = c[b.getMonth()];
  const e = b.getDate();
  const f = b.getFullYear();
  const g = new Date().getFullYear();
  return `${d} ${e}${f !== g ? ', ' + f : ''}`;
}
async function updates() {
  let a = await fetch('/api/app/updates/history')
  let b = await a.json()
  let d = document.getElementById("updatesHolder")
  if (b.data.length !== 0) {
    let c = []
    for (let i of b.data) {
      c.push(`
      <div onclick="render('admin/updates/history/${i.identifier}')" class="w-full bg-zinc-900/50 text-lg cursor-pointer text-gray-300 rounded-xl p-4 items-center flex justify-between">
      <span>${i.display}</span>
      <div class="text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    d.textContent = c
  } else {
    d.textContent = `<div class="w-full  h-40 md:h-52 xl:h-72 flex justify-center items-center"><span class="text-gray-300">No updates available.</span></div>`
  }
}
async function sysInfo() {
  let a = await fetch('/api/app/sysinfo')
  let b = await a.json()
  let c = b.data
  st("sysArch", c.machine.arch)
  st("sysCPU", c.cpu.model)
  st("sysCPUThreads", c.cpu.threads)
  st("sysCPUSpeed", c.cpu.speed)
  st("sysMemTotal", `${format(c.memory.total / 1024)} GB`)
  st("sysMemFree", `${format(c.memory.free / 1024)} GB`)
  st("sysMemApp", `${format(c.memory.app)} MB`)
  st("sysPlatform", c.machine.platform)
  st("sysUptime", `${formatTime(c.machine.uptime)}`)
}
function formatTime(a) {
  const b = Math.floor(a / 60);
  const c = Math.floor(b / 60);
  const d = Math.floor(c / 24);
  const e = Math.floor(d / 30);
  if (e > 0) {
    return `${e} Months`;
  } else if (d > 0) {
    return `${d} Days`;
  } else if (c > 0) {
    return `${c} Hours`;
  } else if (b > 0) {
    return `${b} Minutes`;
  } else {
    return `${a} Seconds`;
  }
}
function loadChart() {
  let options = {
    chart: {
      type: 'line',
      height: 280,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    series: [
      {
        name: 'Registers',
        data: [
          63, 57, 87, 41, 28, 41, 20, 88, 52,
          9, 97, 25, 76, 73, 40, 71, 81, 15,
          78, 29, 24, 58, 84, 64, 6, 2, 0,
          43, 35, 33, 37
        ],
      },
    ],
    colors: ['#323237'],
    grid: {
      borderColor: '',
    },

    fill: {
      colors: undefined,
      opacity: 0.9,
      type: 'solid',
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      },
      image: {
        src: [],
        width: undefined,
        height: undefined
      },
      pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 2,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ["#323237"],
      width: 2,
      dashArray: 0,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark"
    },
    xaxis: {
      categories: [],
      title: {
        text: "",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#d1d5db",
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-title',
        },
      },
      labels: {
        style: {
          colors: ["#d1d5db"],
        }
      },
      lines: {
        show: false,
      }
    },
    yaxis: {
      title: {
        text: '',
      },
      lines: {
        show: false,
      },
      labels: {
        style: {
          colors: ["#d1d5db"],
        }
      },
    },
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const datesArray = [];

  for (let day = 1; day <= new Date(currentYear, currentMonth + 1, 0).getDate(); day++) {
    const date = new Date(currentYear, currentMonth, day);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit' });
    datesArray.push(formattedDate);
  }
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const date = new Date()
  options.xaxis.categories = datesArray;
  options.xaxis.title.text = `${months[date.getMonth()]} ${date.getFullYear()}`;
  options.xaxis.labels.style = { colors: new Array(datesArray.length).fill("#d1d5db") }
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
};
async function stats() {
  let a = await fetch('/api/admin/statistics')
  let b = await a.json()
  if (b.success == true) {
    let c = b.data
    st("statsServers", c.servers)
    st("statsUsers", c.users)
    st("statsQueue", c.queue)
    st("statsNodes", c.nodes)
    st("statsCoins", c.coins)
    st("statsMemory", `${((c.resources.memory.used / c.resources.memory.total) * 100).toFixed(0)}%`)
    st("statsDisk", `${((c.resources.disk.used / c.resources.disk.total) * 100).toFixed(0)}%`)
    st("statsCPU", `${((c.resources.cpu.used / c.resources.cpu.total) * 100).toFixed(0)}%`)
  }
}
function showTab(a) {
  let b = ["overview", "vault", "billing"];
  b.forEach(i => {
    document.getElementById(`user-${i}`).classList.add("hidden");
    document.getElementById(`tab-${i}`).classList.remove("bg-zinc-900", "text-gray-200");
  });
  document.getElementById(`user-${a}`).classList.remove("hidden");
  document.getElementById(`tab-${a}`).classList.add("bg-zinc-900", "text-gray-200");
}
function showTab1(a) {
  let b = ["general", "nodes", "softwares"];
  b.forEach(i => {
    document.getElementById(`${i}`).classList.add("hidden");
    document.getElementById(`tab-${i}`).classList.remove("bg-zinc-900", "text-gray-200");
  });
  document.getElementById(`${a}`).classList.remove("hidden");
  document.getElementById(`tab-${a}`).classList.add("bg-zinc-900", "text-gray-200");
}
function showTab2(a) {
  let b = ["general", "landing", "href"];
  b.forEach(i => {
    document.getElementById(`${i}`).classList.add("hidden");
    document.getElementById(`tab-${i}`).classList.remove("bg-zinc-900", "text-gray-200");
  });
  document.getElementById(`${a}`).classList.remove("hidden");
  document.getElementById(`tab-${a}`).classList.add("bg-zinc-900", "text-gray-200");
}

//These 3 functions will be fixed in the UI 2.0 update.
async function billing() {
  let a = await fetch('/api/payments')
  let b = await a.json()
  if (b.success == true) {
    st("revenue", `$${b.data.revenue ?? 0}`)
    st("services", b.data.services)
    st("gateways", b.data.gateways)
  } else {
    toastr.error(b.message, "Error!")
  }
}
function show(a) {
  let b = document.getElementById(a)
  let c = document.getElementById("holder")
  for (let i of c.children) {
    i.classList.add("hidden")
  }
  for (let i of document.getElementById("buttonsHolder").children) {
    i.classList.add("bg-zinc-900/50")
    i.classList.remove("bg-zinc-900")
  }
  b.classList.remove("hidden")
  document.getElementById(`${a}Btn`).classList.remove("bg-zinc-900/50")
  document.getElementById(`${a}Btn`).classList.add("bg-zinc-900")
}
async function createCategory() {
  let a = await fetch('/api/admin/categories', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: gv("categoryName"),
      banner: gv("categoryBanner"),
      permission: gv("categoryPermission"),
      status: gv("categoryStatus"),
    })
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(b.message, "Error!")
  }
};
async function modifyCategory(a) {
  let b = await fetch('/api/admin/categories', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: parseInt(a),
      name: gv("categoryName"),
      banner: gv("categoryBanner"),
      permission: gv("categoryPermission"),
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
async function deleteCategory(a) {
  let b = await fetch('/api/admin/categories', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: a })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
    render('admin/products')
  } else {
    toastr.error(c.message, "Error!")
  }
};
function ge(e) { return document.getElementById(e) };
function nodesOnLoad() {
  const f = ["pteroDomain", "pteroAPP", "pteroACC", "pteroFees"];
  const a = {}
  for (const e of f) {
    const element = ge(e);
    a[e] = element.value || element.checked;
    element.addEventListener("input", function () {
      ge("savealert").style.transition = "opacity 0.5s";
      ge("savealert").style.opacity = "1";
      if (element.value === a[e]) {
        ge("savealert").style.transition = "opacity 0.5s";
        ge("savealert").style.opacity = "0";
      }
    });
    element.addEventListener("change", function () {
      ge("savealert").style.transition = "opacity 0.5s";
      ge("savealert").style.opacity = "1";
      if (element.value === a[e]) {
        ge("savealert").style.transition = "opacity 0.5s";
        ge("savealert").style.opacity = "0";
      }
    });
  }
}
async function submitPtero() {
  let domain
  if ((ge("pteroDomain").value).endsWith("/")) {
    domain = ge("pteroDomain").value.slice(0, -1)
  } else {
    domain = ge("pteroDomain").value
  };
  let d = await fetch(`/api/admin/settings/pterodactyl`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      domain: domain,
      app: ge("pteroAPP").value,
      acc: ge("pteroACC").value,
      deployments: {
        fees: ge("pteroFees").value
      }
    })
  });
  let e = await d.json()
  if (e.success == true) {
    nodesOnLoad()
    ge("savealert").style.transition = "opacity 0.5s";
    ge("savealert").style.opacity = "0";
    toastr.success(e.message, "Success")
  }
}
async function pushNodes() {
  try {
    let a = await fetch('/api/admin/pterodactyl/nodes');
    let b = await a.json()
    if (b.success == true) {
      let c = document.getElementById("nodesList")
      c.textContent = ""
      const e = []
      for (let i of b.data) {
        let d = `
              <div onclick="render('admin/pterodactyl/nodes/${i.id}')" class="w-full bg-zinc-900/50 cursor-pointer border hover:bg-zinc-900/80 hover:duration-300 duration-300 border-zinc-800/80 rounded-xl p-2">
                <div class="flex items-center justify-between">
                  <div class="flex flex-col justify-start">
                    <h1 class="text-gray-300">${i.name}</h1>
                    <span class="text-gray-400">${format((i.memory) / 1024)}GB Memory</span>
                  </div>
                  <div class="flex flex-col justify-end text-right">
                    <h1 class="text-gray-300">${i.relationships.location.attributes.short} - ${i.relationships.location.attributes.long}</h1>
                    <span class="text-gray-400">${(i.relationships.allocations.data).length} slots</span>
                  </div>
                </div>
                <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
                  <div class="progress mt-3 h-1.5 bg-zinc-800">
                    <div class="is-active relative w-[${format((i.relationships.servers.data.length / i.relationships.allocations.data.length) * 100)}%] overflow-hidden rounded-full bg-amber-500"></div>
                  </div>
                  <h1 class="text-gray-300 text-xl">${format((i.relationships.servers.data.length / i.relationships.allocations.data.length) * 100)}%</h1>
                </div>
                <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
                  <div class="progress mt-3 h-1.5 bg-zinc-800">
                    <div class="is-active relative w-[${format((i.allocated_resources.memory / i.memory) * 100)}%] overflow-hidden rounded-full bg-sky-500"></div>
                  </div>
                  <h1 class="text-gray-300 text-xl">${format((i.allocated_resources.memory / i.memory) * 100)}%</h1>
                </div>
                <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
                  <div class="progress mt-3 h-1.5 bg-zinc-800">
                    <div class="is-active relative w-[${format((i.allocated_resources.disk / i.disk) * 100)}%] overflow-hidden rounded-full bg-purple-500"></div>
                  </div>
                  <h1 class="text-gray-300 text-xl">${format((i.allocated_resources.disk / i.disk) * 100)}%</h1>
                </div>
                <div class="w-full flex items-center text-base space-x-1 mt-2 justify-between">
                  <div class="progress mt-3 h-1.5 bg-zinc-800">
                    <div class="is-active relative w-[${format(((i.allocated_resources.disk / i.disk) + (i.relationships.servers.data.length / i.relationships.allocations.data.length) + (i.relationships.servers.data.length / i.relationships.allocations.data.length)) / 3 * 100)}%] overflow-hidden rounded-full bg-rose-500"></div>
                  </div>
                  <h1 class="text-gray-300 text-xl">${format(((i.allocated_resources.disk / i.disk) + (i.relationships.servers.data.length / i.relationships.allocations.data.length) + (i.relationships.servers.data.length / i.relationships.allocations.data.length)) / 3 * 100)}%</h1>
                </div>
              </div>`
        e.push(d)
      }
      if (b.data.length == 0) e.push(`<div class="w-full col-span-3 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16">
            <span class="text-lg text-gray-300">Nothing to view here, add nodes to continue...</span></div>`)
      c.textContent = e.join('')
    }
  } catch (error) {
    toastr.error(error)
  }
}
async function pushEggs() {
  try {
    const a = await fetch('/api/admin/pterodactyl/eggs');
    const b = await a.json();
    if (b.success) {
      const c = document.getElementById("eggsList");
      c.textContent = "";
      const d = await Promise.all(b.data.map(async (egg) => {
        return `<div onclick="deleteEgg(${egg.id})" class="w-full flex justify-center items-center backdrop-blur-xl cursor-pointer hover:bg-transparent hover:duration-300 duration-300 shadow-md bg-zinc-900 text-center rounded-full py-2 border border-zinc-800/80">${egg.name}</div>`;
      }));
      if (d.length === 0) {
        d.push(`<div class="w-full col-span-5 flex items-center justify-center py-4 md:py-8 lg:py-12 xl:py-16">
              <span class="text-lg text-gray-300">Nothing to view here, add nodes to continue...</span></div>`);
      }
      c.textContent = d.join('');
    }
  } catch (error) {
    toastr.error(error);
  }
}
async function deleteEgg(a) {
  Swal.fire({
    title: 'Confirm Deletion',
    text: "Please confirm if you want to remove this software. This will not affect any of the servers!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        let c = await fetch(`/api/admin/pterodactyl/eggs`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: a })
        });
        let b = await c.json();
        if (b.success == true) {
          toastr.success(b.message, "Success!");
          pushEggs()
        } else {
          toastr.error(b.message, "Error!");
        }
      } catch (error) {
        toastr.error('An error occurred while processing your request. ' + error, "Error!");
      }
    }
  });
}
>>>>>>> fcca946 (09-06)
